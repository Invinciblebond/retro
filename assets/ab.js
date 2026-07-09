// UTOPOLY — A/B measurement for landing_theme_v1 (fire-and-forget analytics only).
// Assignment itself happens pre-paint in an inline <head> script (window.__ab).
// This file only: fires 'visit' once per visitor, exposes recordSignup(),
// and syncs the concluded-winner flag for future visits.
// It changes NOTHING about signup/login behavior.
(function () {
  var ab = window.__ab;
  var sb = window.supabaseClient;
  if (!ab || !sb) return;

  // Best-effort bot skip
  var isBot = !!navigator.webdriver || !navigator.userAgent ||
    /bot|crawl|spider|headless/i.test(navigator.userAgent);

  function fire(eventType) {
    // Overridden (?theme=) sessions and winner-served sessions are EXCLUDED.
    if (ab.excluded || isBot || !ab.state || !ab.state.vid) return;
    try {
      sb.rpc("record_ab_event", {
        p_experiment: ab.exp,
        p_variant: ab.variant,
        p_event_type: eventType,
        p_visitor_id: ab.state.vid,
      }).then(function () {}, function () {});
    } catch (e) { /* fire-and-forget */ }
  }

  // 'visit' — once per visitor (server dedupes via unique index too)
  fire("visit");

  // 'signup' — called by auth.js after a successful account creation
  window.retroAB = { recordSignup: function () { fire("signup"); } };

  // Sync concluded winner for FUTURE visits (never repaints the current page).
  try {
    sb.rpc("get_ab_winner", { p_experiment: ab.exp }).then(function (res) {
      var winner = res && res.data;
      if (winner !== "dusk" && winner !== "daylight") return;
      try {
        var st = JSON.parse(localStorage.getItem(ab.key) || "{}");
        if (st.winner !== winner) { st.winner = winner; localStorage.setItem(ab.key, JSON.stringify(st)); }
      } catch (e) {}
    }, function () {});
  } catch (e) {}
})();
