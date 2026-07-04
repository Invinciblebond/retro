// Reusable Supabase client — uses only the public anon/publishable key.
// Loaded as a classic script AFTER the supabase-js UMD bundle and env.js,
// so it works on file://, Live Server, python -m http.server, or any host.
(function () {
  if (!window.supabase || !window.supabase.createClient) {
    alert("Could not load the Supabase library (check your internet connection / ad blocker).");
    throw new Error("supabase-js UMD bundle not loaded");
  }
  var env = window.RETRO_ENV || {};
  if (!env.SUPABASE_URL || !env.SUPABASE_ANON_KEY) {
    throw new Error("Missing SUPABASE_URL / SUPABASE_ANON_KEY in assets/env.js");
  }
  // The shared client used by all pages:
  window.supabaseClient = window.supabase.createClient(env.SUPABASE_URL, env.SUPABASE_ANON_KEY);
})();
