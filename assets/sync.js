// Utopoly — per-account storage.
//
// The trackers were written against localStorage and know nothing about
// accounts. Rather than rewrite eight apps, this shims localStorage so every
// key is scoped to the signed-in user, then mirrors those keys to Postgres so
// the same account sees the same data on another device.
//
// MUST load in <head>, before the tracker's own scripts run.
(function () {
  var LS;
  try { LS = window.localStorage; } catch (e) { return; }
  if (!LS) return;

  var AUTH_KEY = "aura.auth";           // where supabase-js parks the session
  var SKIP = /^(aura[.:]|sb-|supabase\.)/; // never namespace our own keys

  // Keys whose contents now live in real Postgres tables (assets/cloud.js).
  // They stay in localStorage as the fast local working copy, but mirroring the
  // blob as well would double-store megabytes for no benefit.
  var CLOUD_BACKED = {
    "aura_db": 1, "aura_db_v3": 1, "aura_db_v4": 1,
    "aura_cycle_db": 1, "aura_planning_db_v1": 1,
    "cpb_v2": 1, "cpb_v3": 1, "tron_wallet": 1, "cain_phase_state_v1": 1,
    // owned by assets/prefs.js, which pulls them from app_prefs / calorie_settings
    "aura_prefs_v1": 1, "aura_goals_v1": 1
  };

  /* ---------- who is signed in (synchronous — no network) ---------- */
  function currentUid() {
    try {
      var raw = LS.getItem(AUTH_KEY);
      if (!raw) return null;
      var obj = JSON.parse(raw);
      return obj && (obj.user && obj.user.id) ||
             (obj && obj.currentSession && obj.currentSession.user && obj.currentSession.user.id) || null;
    } catch (e) { return null; }
  }

  var uid = currentUid();
  if (!uid) return;                     // signed out: auth.js redirects anyway

  var PREFIX = "u_" + uid.slice(0, 8) + "_";
  function real(k) { return SKIP.test(k) ? k : PREFIX + k; }
  function isMine(k) { return k.indexOf(PREFIX) === 0; }
  function bare(k) { return k.slice(PREFIX.length); }

  /* ---------- first run: adopt any pre-account data ---------- */
  // Data written before accounts existed is claimed by the first user to sign
  // in on this browser, so nobody's existing trackers appear to have emptied.
  var CLAIMED = "aura.claimed";
  try {
    if (!LS.getItem(CLAIMED)) {
      var legacy = [];
      for (var i = 0; i < LS.length; i++) {
        var k = LS.key(i);
        if (k && !SKIP.test(k) && k.indexOf("u_") !== 0) legacy.push(k);
      }
      legacy.forEach(function (k) {
        if (LS.getItem(PREFIX + k) === null) LS.setItem(PREFIX + k, LS.getItem(k));
      });
      LS.setItem(CLAIMED, uid);
    }
  } catch (e) { /* quota or private mode — keep going */ }

  /* ---------- the shim ---------- */
  var dirty = Object.create(null);
  var onDirty = null;

  var shim = {
    getItem: function (k) { return LS.getItem(real(k)); },
    setItem: function (k, v) {
      LS.setItem(real(k), v);
      if (!SKIP.test(k) && !CLOUD_BACKED[k]) { dirty[k] = true; if (onDirty) onDirty(); }
    },
    removeItem: function (k) {
      LS.removeItem(real(k));
      if (!SKIP.test(k)) { dirty[k] = null; if (onDirty) onDirty(); }
    },
    clear: function () {
      var mine = [];
      for (var i = 0; i < LS.length; i++) { var k = LS.key(i); if (k && isMine(k)) mine.push(k); }
      mine.forEach(function (k) { LS.removeItem(k); dirty[bare(k)] = null; });
      if (onDirty) onDirty();
    },
    key: function (n) {
      var mine = [];
      for (var i = 0; i < LS.length; i++) { var k = LS.key(i); if (k && isMine(k)) mine.push(bare(k)); }
      return n < mine.length ? mine[n] : null;
    },
  };
  Object.defineProperty(shim, "length", {
    get: function () {
      var n = 0;
      for (var i = 0; i < LS.length; i++) { var k = LS.key(i); if (k && isMine(k)) n++; }
      return n;
    },
  });

  try {
    Object.defineProperty(window, "localStorage", { value: shim, configurable: true, writable: false });
  } catch (e) {
    console.warn("Utopoly: could not scope localStorage — data stays shared on this browser.");
    return;
  }

  /* ---------- cloud mirror ---------- */
  var MAX_VALUE = 512 * 1024;  // skip anything absurd
  var client = null, timer = null, pushing = false;

  function snapshot() {
    var out = {};
    for (var i = 0; i < LS.length; i++) {
      var k = LS.key(i);
      if (k && isMine(k) && !CLOUD_BACKED[bare(k)]) out[bare(k)] = LS.getItem(k);
    }
    return out;
  }

  function schedulePush() {
    if (!client) return;
    clearTimeout(timer);
    timer = setTimeout(push, 1500);
  }
  onDirty = schedulePush;

  async function push() {
    if (!client || pushing) return;
    var keys = Object.keys(dirty);
    if (!keys.length) return;
    pushing = true;
    var batch = keys.slice(0, 200);
    batch.forEach(function (k) { delete dirty[k]; });

    var rows = [], gone = [];
    batch.forEach(function (k) {
      var v = LS.getItem(PREFIX + k);
      if (v === null) { gone.push(k); return; }
      if (v.length > MAX_VALUE) return;                  // too big to mirror
      rows.push({ user_id: uid, k: k, v: v, updated_at: new Date().toISOString() });
    });

    try {
      if (rows.length) {
        var up = await client.from("user_state").upsert(rows, { onConflict: "user_id,k" });
        if (up.error) throw up.error;
      }
      if (gone.length) {
        await client.from("user_state").delete().eq("user_id", uid).in("k", gone);
      }
    } catch (err) {
      console.warn("Utopoly sync: push failed", err.message || err);
      batch.forEach(function (k) { dirty[k] = true; });  // retry on the next tick
    } finally {
      pushing = false;
    }
  }

  // Pull remote state in. Returns true when something local actually changed,
  // which means the tracker already rendered stale data and needs a reload.
  async function pull() {
    if (!client) return false;
    var res = await client.from("user_state").select("k,v").eq("user_id", uid);
    if (res.error) throw res.error;
    var changed = false;
    (res.data || []).forEach(function (row) {
      var cur = LS.getItem(PREFIX + row.k);
      if (cur !== row.v) { LS.setItem(PREFIX + row.k, row.v); changed = true; }
    });
    return changed;
  }

  var RELOADED = "aura.synced";  // per-tab, so the reload can only happen once
  async function start(supabaseClient) {
    client = supabaseClient;
    try {
      var changed = await pull();
      if (changed && !sessionStorage.getItem(RELOADED)) {
        sessionStorage.setItem(RELOADED, "1");
        location.reload();
        return;
      }
      // first device to sign in has nothing remote — seed it
      if (!changed) {
        var snap = snapshot();
        var count = Object.keys(snap).length;
        if (count) {
          var probe = await client.from("user_state").select("k", { count: "exact", head: true }).eq("user_id", uid);
          if (!probe.error && (probe.count || 0) === 0) {
            Object.keys(snap).forEach(function (k) { dirty[k] = true; });
            push();
          }
        }
      }
    } catch (err) {
      console.warn("Utopoly sync: unavailable —", err.message || err);
    }
    addEventListener("beforeunload", function () { if (Object.keys(dirty).length) push(); });
  }

  window.auraSync = { start: start, push: push, pull: pull, uid: uid, prefix: PREFIX, snapshot: snapshot };
})();
