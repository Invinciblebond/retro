// Reusable Supabase client — uses only the public anon/publishable key.
// CDN import so this works on any static server (Live Server, python -m http.server, Vite).
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { SUPABASE_URL, SUPABASE_ANON_KEY } from "./env.js";

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  throw new Error("Missing SUPABASE_URL / SUPABASE_ANON_KEY in assets/env.js");
}

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
