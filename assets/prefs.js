/* ============================================================================
 * assets/prefs.js — Utopoly account preferences.
 * ----------------------------------------------------------------------------
 * One place for the settings every tool needs: unit system, date and clock
 * format, week start, body profile and the calorie/protein goals.
 *
 * Storage is layered so a page never has to wait on the network to paint:
 *   localStorage  fast working copy, scoped per account by assets/sync.js
 *   app_prefs     the account's row in Postgres, via assets/cloud.js
 * Reads are synchronous against the local copy; `AuraPrefs.ready` resolves once
 * the account's copy has been pulled and merged.
 *
 * Values are stored canonically in metric — kg, cm — always. The unit system
 * only changes how numbers are formatted and parsed at the edges, so flipping
 * it never rewrites a single stored row.
 *
 * Load in <head>, after sync.js and cloud.js.
 * ========================================================================== */
(function () {
  'use strict';

  var KEY = 'aura_prefs_v1';
  var GOALS_KEY = 'aura_goals_v1';

  var DEFAULTS = {
    units: 'metric',        // 'metric' | 'imperial'
    clock: '24h',           // '24h' | '12h'
    dateFormat: 'dmy',      // 'dmy' | 'mdy' | 'iso'
    weekStart: 1,           // 1 = Monday, 0 = Sunday
    body: {
      heightCm: null,
      dob: null,            // 'YYYY-MM-DD'
      sex: '',              // 'male' | 'female' | ''
      activity: 1.375       // TDEE multiplier
    }
  };

  var GOAL_DEFAULTS = { calorie: 2000, protein: 180 };

  var state = clone(DEFAULTS);
  var goals = clone(GOAL_DEFAULTS);
  var listeners = [];

  function clone(o) { return JSON.parse(JSON.stringify(o)); }

  function merge(base, patch) {
    Object.keys(patch || {}).forEach(function (k) {
      var v = patch[k];
      if (v && typeof v === 'object' && !Array.isArray(v)) {
        base[k] = merge(base[k] && typeof base[k] === 'object' ? base[k] : {}, v);
      } else if (v !== undefined) {
        base[k] = v;
      }
    });
    return base;
  }

  /* ---------- local copy ---------- */
  function readLocal() {
    try {
      var raw = localStorage.getItem(KEY);
      if (raw) merge(state, JSON.parse(raw));
    } catch (e) {}
    try {
      var g = localStorage.getItem(GOALS_KEY);
      if (g) merge(goals, JSON.parse(g));
    } catch (e) {}
  }
  function writeLocal() {
    try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) {}
    try { localStorage.setItem(GOALS_KEY, JSON.stringify(goals)); } catch (e) {}
  }

  readLocal();

  /* ---------- account copy ---------- */
  var PREFS_KV = window.AuraCloud && window.AuraCloud.kv('app_prefs', 'value', true);
  var GOALS_KV = window.AuraCloud && window.AuraCloud.kv('calorie_settings');
  var pushTimer = null;

  function cloudPush() {
    clearTimeout(pushTimer);
    pushTimer = setTimeout(function () {
      if (PREFS_KV) PREFS_KV.set('settings', state).catch(function (e) { console.warn('[prefs] save', e); });
      if (GOALS_KV) {
        GOALS_KV.setMany({ calorie_goal: goals.calorie, protein_goal: goals.protein })
          .catch(function (e) { console.warn('[prefs] goal save', e); });
      }
    }, 400);
  }

  var ready = (async function () {
    if (!PREFS_KV) return false;
    try {
      var bag = await PREFS_KV.all();
      if (bag && bag.settings) {
        var remote = typeof bag.settings === 'string' ? JSON.parse(bag.settings) : bag.settings;
        merge(state, remote);
      }
    } catch (e) { console.warn('[prefs] load', e); }
    try {
      var saved = GOALS_KV ? await GOALS_KV.all() : {};
      if (saved.calorie_goal) goals.calorie = Number(saved.calorie_goal) || goals.calorie;
      if (saved.protein_goal) goals.protein = Number(saved.protein_goal) || goals.protein;
    } catch (e) { console.warn('[prefs] goal load', e); }
    writeLocal();
    emit();
    return true;
  })();

  function emit() {
    listeners.forEach(function (fn) { try { fn(state, goals); } catch (e) {} });
    try {
      dispatchEvent(new CustomEvent('aura:prefs', { detail: { prefs: state, goals: goals } }));
    } catch (e) {}
  }

  /* ---------- units ---------- */
  var LB_PER_KG = 2.2046226218;
  var IN_PER_CM = 0.3937007874;

  function imperial() { return state.units === 'imperial'; }

  function massUnit() { return imperial() ? 'lb' : 'kg'; }
  function lenUnit()  { return imperial() ? 'in' : 'cm'; }

  // kg -> display number in the active system (not a string)
  function massOut(kg) {
    if (kg === null || kg === undefined || kg === '') return null;
    return imperial() ? Number(kg) * LB_PER_KG : Number(kg);
  }
  // display number -> kg
  function massIn(v) {
    if (v === null || v === undefined || v === '') return null;
    var n = Number(v);
    if (!isFinite(n)) return null;
    return imperial() ? n / LB_PER_KG : n;
  }
  function fmtMass(kg, opts) {
    var n = massOut(kg);
    if (n === null) return '—';
    var dp = (opts && opts.dp !== undefined) ? opts.dp : 1;
    var s = n.toFixed(dp);
    return (opts && opts.bare) ? s : s + ' ' + massUnit();
  }

  function lenOut(cm) {
    if (cm === null || cm === undefined || cm === '') return null;
    return imperial() ? Number(cm) * IN_PER_CM : Number(cm);
  }
  function lenIn(v) {
    if (v === null || v === undefined || v === '') return null;
    var n = Number(v);
    if (!isFinite(n)) return null;
    return imperial() ? n / IN_PER_CM : n;
  }
  // Accepts 178, "178cm", "5'10", "5 ft 10 in", "70in" — always returns cm.
  function parseHeight(raw) {
    if (raw === null || raw === undefined) return null;
    var s = String(raw).trim().toLowerCase();
    if (!s) return null;
    var ft = s.match(/^(\d+(?:\.\d+)?)\s*(?:'|ft|feet)\s*(\d+(?:\.\d+)?)?\s*(?:"|in|inch(?:es)?)?$/);
    if (ft) return (Number(ft[1]) * 12 + Number(ft[2] || 0)) / IN_PER_CM;
    var num = parseFloat(s);
    if (!isFinite(num)) return null;
    if (/cm/.test(s)) return num;
    if (/in|"/.test(s)) return num / IN_PER_CM;
    return lenIn(num);
  }
  function fmtHeight(cm) {
    if (cm === null || cm === undefined || cm === '') return '—';
    if (!imperial()) return Math.round(Number(cm)) + ' cm';
    var totalIn = Number(cm) * IN_PER_CM;
    var f = Math.floor(totalIn / 12), i = Math.round(totalIn - f * 12);
    if (i === 12) { f += 1; i = 0; }
    return f + "' " + i + '"';
  }

  /* ---------- derived body values ---------- */
  function age() {
    var dob = state.body.dob;
    if (!dob) return null;
    var b = new Date(dob), now = new Date();
    if (isNaN(b)) return null;
    var a = now.getFullYear() - b.getFullYear();
    var m = now.getMonth() - b.getMonth();
    if (m < 0 || (m === 0 && now.getDate() < b.getDate())) a--;
    return a >= 0 && a < 130 ? a : null;
  }

  // Mifflin-St Jeor, or Katch-McArdle when body fat is known.
  function bmr(weightKg, bodyfatPct) {
    var h = state.body.heightCm, a = age(), sex = state.body.sex;
    if (!weightKg) return null;
    if (bodyfatPct) {
      var lbm = weightKg * (1 - bodyfatPct / 100);
      return Math.round(370 + 21.6 * lbm);
    }
    if (!h || a === null) return null;
    var base = 10 * weightKg + 6.25 * h - 5 * a;
    if (sex === 'male') base += 5;
    else if (sex === 'female') base -= 161;
    else base -= 78;                     // midpoint when sex is not given
    return Math.round(base);
  }
  function tdee(weightKg, bodyfatPct) {
    var b = bmr(weightKg, bodyfatPct);
    return b === null ? null : Math.round(b * (Number(state.body.activity) || 1.375));
  }

  /* ---------- dates ---------- */
  function fmtDate(d) {
    var dt = (d instanceof Date) ? d : new Date(d);
    if (isNaN(dt)) return '—';
    var D = String(dt.getDate()).padStart(2, '0');
    var M = String(dt.getMonth() + 1).padStart(2, '0');
    var Y = dt.getFullYear();
    if (state.dateFormat === 'iso') return Y + '-' + M + '-' + D;
    if (state.dateFormat === 'mdy') return M + '/' + D + '/' + Y;
    return D + '/' + M + '/' + Y;
  }
  function fmtTime(d) {
    var dt = (d instanceof Date) ? d : new Date(d);
    if (isNaN(dt)) return '—';
    return dt.toLocaleTimeString(undefined, {
      hour: '2-digit', minute: '2-digit', hour12: state.clock === '12h'
    });
  }

  /* ---------- public API ---------- */
  window.AuraPrefs = {
    ready: ready,
    get: function () { return state; },
    goals: function () { return goals; },

    patch: function (patch) {
      merge(state, patch);
      writeLocal(); cloudPush(); emit();
      return state;
    },
    setGoals: function (next) {
      if (next.calorie) goals.calorie = Math.round(Number(next.calorie)) || goals.calorie;
      if (next.protein) goals.protein = Math.round(Number(next.protein)) || goals.protein;
      writeLocal(); cloudPush(); emit();
      return goals;
    },
    on: function (fn) { listeners.push(fn); return function () {
      listeners = listeners.filter(function (f) { return f !== fn; });
    }; },

    // units
    isImperial: imperial,
    massUnit: massUnit, lenUnit: lenUnit,
    massOut: massOut, massIn: massIn, fmtMass: fmtMass,
    lenOut: lenOut, lenIn: lenIn, parseHeight: parseHeight, fmtHeight: fmtHeight,

    // derived
    age: age, bmr: bmr, tdee: tdee,

    // formats
    fmtDate: fmtDate, fmtTime: fmtTime,

    DEFAULTS: DEFAULTS,
    ACTIVITY: [
      { v: 1.2,   label: 'Sedentary',   note: 'desk job, little exercise' },
      { v: 1.375, label: 'Light',       note: 'light exercise 1-3 days a week' },
      { v: 1.55,  label: 'Moderate',    note: 'exercise 3-5 days a week' },
      { v: 1.725, label: 'Hard',        note: 'hard exercise 6-7 days a week' },
      { v: 1.9,   label: 'Athlete',     note: 'training twice a day, or physical job' }
    ]
  };
})();
