// Shared Supabase client. Loaded as a classic script AFTER the supabase-js UMD
// bundle and env.js, so it works on file://, Live Server, or any static host.
(function () {
  if (!window.supabase || !window.supabase.createClient) {
    console.error("supabase-js UMD bundle not loaded");
    return;
  }
  var env = window.AURA_ENV || {};
  if (!env.SUPABASE_URL || !env.SUPABASE_ANON_KEY) {
    console.error("Missing SUPABASE_URL / SUPABASE_ANON_KEY in assets/env.js");
    return;
  }
  window.supabaseClient = window.supabase.createClient(env.SUPABASE_URL, env.SUPABASE_ANON_KEY, {
    auth: {
      persistSession: true,      // keeps the session alive across reloads/tabs
      autoRefreshToken: true,
      detectSessionInUrl: true,  // handles email-confirmation callbacks
      storageKey: "aura.auth",
    },
  });
})();
