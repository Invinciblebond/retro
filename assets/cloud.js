// AuraHealth — structured cloud persistence.
//
// The trackers keep using their in-browser SQLite (sql.js) or JSON state as the
// working copy; this module mirrors that working copy into real Postgres tables
// scoped to the signed-in account, and hydrates it back on load. Rows — not
// opaque blobs — so the data is queryable server-side and portable per user.
(function () {
  var client = null, uid = null, readyResolve, settled = false;
  var ready = new Promise(function (r) {
    readyResolve = function (v) { if (!settled) { settled = true; r(v); } };
  });
  // If auth never reports in (blocked CDN, offline), stop waiting so the
  // tracker still opens against its local copy instead of hanging on a spinner.
  setTimeout(function () { readyResolve(false); }, 8000);

  function ok() { return !!(client && uid); }

  // auth.js calls this once a session is confirmed.
  function attach(supabaseClient, userId) {
    client = supabaseClient; uid = userId;
    readyResolve(ok());
  }
  // Called instead when there's no session, so awaits don't hang forever.
  function noSession() { readyResolve(false); }

  var CHUNK = 400;
  async function upsertAll(table, rows, conflict) {
    for (var i = 0; i < rows.length; i += CHUNK) {
      var res = await client.from(table).upsert(rows.slice(i, i + CHUNK), { onConflict: conflict });
      if (res.error) throw res.error;
    }
  }

  /* =========================================================
     sql.js  <->  Postgres
     ========================================================= */

  // spec: { tables:[ {local, remote, key:['id'], cols:[...]} ] }
  function sqlite(spec) {
    var pushTimer = null, pushing = false, again = false;

    function readLocal(db, t) {
      var out = [];
      var stmt;
      try { stmt = db.prepare("SELECT " + t.cols.join(",") + " FROM " + t.local); }
      catch (e) { return out; }                       // table not created yet
      while (stmt.step()) out.push(stmt.getAsObject());
      stmt.free();
      return out;
    }

    // Pull the account's rows down and replace whatever is in local SQLite.
    async function hydrate(db) {
      if (!(await ready) || !ok()) return false;
      var got = false;
      for (var i = 0; i < spec.tables.length; i++) {
        var t = spec.tables[i];
        var res = await client.from(t.remote).select(t.cols.join(",")).eq("user_id", uid);
        if (res.error) { console.warn("[cloud] pull " + t.remote, res.error.message); continue; }
        var rows = res.data || [];
        if (!rows.length) continue;
        got = true;
        db.run("DELETE FROM " + t.local);
        var ph = t.cols.map(function () { return "?"; }).join(",");
        var sql = "INSERT OR REPLACE INTO " + t.local + " (" + t.cols.join(",") + ") VALUES (" + ph + ")";
        var st = db.prepare(sql);
        rows.forEach(function (r) {
          st.run(t.cols.map(function (c) { return r[c] === null || r[c] === undefined ? null : r[c]; }));
        });
        st.free();
      }
      return got;
    }

    // Mirror local SQLite up. Rows the account no longer has are removed.
    async function pushNow(db) {
      await ready;
      if (!ok()) return;
      if (pushing) { again = true; return; }
      pushing = true;
      try {
        for (var i = 0; i < spec.tables.length; i++) {
          var t = spec.tables[i];
          var local = readLocal(db, t);
          var rows = local.map(function (r) {
            var o = { user_id: uid };
            t.cols.forEach(function (c) { o[c] = r[c]; });
            return o;
          });
          if (rows.length) await upsertAll(t.remote, rows, ["user_id"].concat(t.key).join(","));

          // delete anything remote that is no longer local (single-key tables only)
          if (t.key.length === 1) {
            var k = t.key[0];
            var keep = local.map(function (r) { return r[k]; });
            var del = client.from(t.remote).delete().eq("user_id", uid);
            if (keep.length) {
              var list = keep.map(function (v) { return typeof v === "string" ? '"' + v.replace(/"/g, '\\"') + '"' : v; });
              del = del.not(k, "in", "(" + list.join(",") + ")");
            }
            var dres = await del;
            if (dres.error) console.warn("[cloud] prune " + t.remote, dres.error.message);
          }
        }
      } catch (err) {
        console.warn("[cloud] push failed", err.message || err);
      } finally {
        pushing = false;
        if (again) { again = false; push(db); }
      }
    }

    function push(db, wait) {
      clearTimeout(pushTimer);
      pushTimer = setTimeout(function () { pushNow(db); }, wait === undefined ? 1200 : wait);
    }

    return { hydrate: hydrate, push: push, pushNow: pushNow };
  }

  /* =========================================================
     key/value tables
     ========================================================= */
  function kv(table, valueCol, jsonMode) {
    valueCol = valueCol || "value";
    return {
      async all() {
        if (!(await ready) || !ok()) return {};
        var res = await client.from(table).select("key," + valueCol).eq("user_id", uid);
        if (res.error) { console.warn("[cloud] " + table, res.error.message); return {}; }
        var out = {};
        (res.data || []).forEach(function (r) {
          var v = r[valueCol];
          if (jsonMode) { out[r.key] = v; }
          else { out[r.key] = v; }
        });
        return out;
      },
      async set(key, value) {
        await ready;
        if (!ok()) return;
        var row = { user_id: uid, key: key };
        row[valueCol] = jsonMode ? (value === undefined ? null : value) : String(value);
        var res = await client.from(table).upsert(row, { onConflict: "user_id,key" });
        if (res.error) console.warn("[cloud] " + table + " set", res.error.message);
      },
      async setMany(obj) {
        await ready;
        if (!ok()) return;
        var rows = Object.keys(obj).map(function (k) {
          var row = { user_id: uid, key: k };
          row[valueCol] = jsonMode ? obj[k] : String(obj[k]);
          return row;
        });
        if (rows.length) {
          try { await upsertAll(table, rows, "user_id,key"); }
          catch (e) { console.warn("[cloud] " + table + " setMany", e.message); }
        }
      },
      async remove(key) {
        await ready;
        if (!ok()) return;
        await client.from(table).delete().eq("user_id", uid).eq("key", key);
      },
    };
  }

  /* =========================================================
     plain row tables (no sqlite involved)
     ========================================================= */
  function rows(table, key) {
    return {
      async all(orderBy) {
        if (!(await ready) || !ok()) return [];
        var q = client.from(table).select("*").eq("user_id", uid);
        if (orderBy) q = q.order(orderBy);
        var res = await q;
        if (res.error) { console.warn("[cloud] " + table, res.error.message); return []; }
        return res.data || [];
      },
      // Replace the whole set for this user in one shot.
      async replaceAll(list) {
        await ready;
        if (!ok()) return;
        try {
          var res = await client.from(table).delete().eq("user_id", uid);
          if (res.error) throw res.error;
          if (list.length) {
            var stamped = list.map(function (r) {
              var o = {}; Object.keys(r).forEach(function (k) { o[k] = r[k]; });
              o.user_id = uid; return o;
            });
            await upsertAll(table, stamped, ["user_id"].concat(key || ["id"]).join(","));
          }
        } catch (e) { console.warn("[cloud] " + table + " replaceAll", e.message); }
      },
      async insert(row) {
        await ready;
        if (!ok()) return null;
        var o = {}; Object.keys(row).forEach(function (k) { o[k] = row[k]; });
        o.user_id = uid;
        var res = await client.from(table).insert(o).select().single();
        if (res.error) { console.warn("[cloud] " + table + " insert", res.error.message); return null; }
        return res.data;
      },
    };
  }

  window.AuraCloud = {
    attach: attach, noSession: noSession, ready: ready,
    sqlite: sqlite, kv: kv, rows: rows,
    get uid() { return uid; },
    get client() { return client; },
    isReady: ok,
  };
})();
