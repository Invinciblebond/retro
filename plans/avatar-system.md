# Plan: Per-User Profile Avatars — Render Once, Cache the PNG

**Recommendation given current infrastructure** (static HTML + CDN supabase-js, no server, no build step required, Supabase auth + `profiles` table + RLS already live):

Use **Roblox's "Option 1" adapted to a serverless stack**: the avatar is *composed and rendered client-side to a `<canvas>`* when the user edits it, exported as a PNG, uploaded once to a **public Supabase Storage bucket** (CDN-cached), and every subsequent profile view anywhere on the site just downloads that PNG. No GPU render farm needed — the "rendering service" is the editing user's own browser, which is the only moment interactivity matters. Interactive 3D (Three.js) is deferred to an optional final phase and never used in lists/headers.

Why not the alternatives right now:
- **Live 3D everywhere** — heavy, and you have no 3D assets; header/catalog need dozens of avatars per page.
- **Server-side render service** — requires infrastructure you don't have; an Edge Function can't run WebGL.
- **Sprite-sequence fake 3D** — 24 uploads per avatar change for marginal benefit; can be added later by looping Phase 3's export step per angle.

---

## Phase 0 — Documentation & API ground truth (done, consolidated here)

**Sources consulted:** Supabase docs via MCP — Storage Buckets (https://supabase.com/docs/guides/storage/buckets/fundamentals), Storage Access Control (https://supabase.com/docs/guides/storage/security/access-control), Image Transformations billing guide; existing repo files `assets/auth.js`, `assets/supabaseClient.js`, `assets/retro.js`, `catalog.html`; live DB schema (`public.profiles` exists with RLS + signup trigger).

**Allowed APIs (verified, supabase-js v2):**
- `supabase.storage.from('avatars').upload(path, blob, { upsert: true, contentType: 'image/png' })` — requires INSERT policy; upsert additionally requires SELECT + UPDATE policies on `storage.objects`.
- `supabase.storage.from('avatars').getPublicUrl(path)` — public bucket ⇒ plain CDN URL, no auth on read ("User profile pictures" is the docs' canonical public-bucket use case; public buckets cache better than private).
- Per-user path policy pattern (copy verbatim from Access Control doc): `(storage.foldername(name))[1] = (select auth.jwt()->>'sub')` — folder name = user id.
- `canvas.toBlob(cb, 'image/png')` — standard browser API for the PNG export.
- Existing hooks in this repo: `window.retroAuth.updateProfile()`, `window.retroProfile`, `document` event `retro:profile`, `.avatar-head` element injected by `retro.js`.

**Anti-patterns to avoid:**
- Do NOT use private bucket + signed URLs for profile pics (worse caching, needless complexity).
- Do NOT rely on Storage *image transformations* (`transform:` option) — billed per origin image and not needed at 256px.
- Do NOT store the PNG as base64 in the `profiles` row.
- "Public" bucket does not mean public *uploads* — RLS INSERT/UPDATE policies are still mandatory (documented Storage gotcha).
- Cache-busting: the CDN caches aggressively; the URL stored in `profiles.avatar_url` must carry a version query (`?v=<timestamp>`) or the header will show stale avatars after re-render.

---

## Phase 1 — Storage bucket + schema (Supabase MCP, ~1 migration)

**Implement:**
1. Create public bucket `avatars` (5 MB limit, `image/png`,`image/webp` only) via migration:
   `insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types) values ('avatars','avatars', true, 5242880, array['image/png','image/webp']) on conflict do nothing;`
2. RLS on `storage.objects` — copy the per-user-folder INSERT policy from the Access Control doc verbatim; add matching UPDATE and SELECT policies (needed for `upsert: true`). Path convention: `<user_id>/avatar.png`.
3. `alter table public.profiles add column avatar_url text, add column avatar_config jsonb default '{}'::jsonb;`
   - `avatar_url` = cached PNG public URL + `?v=` version.
   - `avatar_config` = the source of truth for re-rendering (body color, hat, shirt, pants, face ids).

**Verify:** `list_tables` shows new columns; SQL `select * from storage.buckets` shows `avatars` public; anonymous fetch of a test object URL returns 200; upload without JWT returns 403.

## Phase 2 — Display cached avatars everywhere (frontend, small)

**Implement (edit `assets/auth.js` `loadProfile`/`applyAuthUI`):**
- If `profile.avatar_url` is set, replace `.avatar-head` initials with `<img>` (32px, `border-radius` inherit); same for any future friend lists via a helper `renderAvatar(el, profile)`.
- Fallback chain: PNG → initials (current behavior). No other page changes needed — header is injected by `retro.js` on every page and `auth.js` already runs everywhere.

**Verify:** logged-in header shows image when `avatar_url` set manually via SQL; shows initials when null; hard-refresh serves from CDN cache (check network tab: `cache-control` present, no auth header on request).

## Phase 3 — Avatar editor page + render-once pipeline (frontend, the core)

**Implement (`avatar.html`, listed in rail as "Avatar", protected page — add `"avatar"` to `PROTECTED` in `auth.js`):**
1. 2D layered composer on a 512×512 `<canvas>`: draw ordered layers (background → body/skin tone → pants → shirt → face → hat) from a small sprite/emoji/vector set consistent with the site's retro look. Selections mirror `avatar_config`.
2. Live preview IS the canvas (free interactivity while editing — this is the only place it's needed).
3. **Save = the pipeline:** `canvas.toBlob` → `storage.from('avatars').upload('<uid>/avatar.png', blob, { upsert:true })` → `getPublicUrl` → `updateProfile({ avatar_url: url + '?v=' + Date.now(), avatar_config })` → dispatch `retro:profile` so the header updates without reload.

**Anti-pattern guards:** never upload on every slider change (only on Save); path must start with the user's own uid or RLS rejects it; don't read `avatar_config` from anyone else's row (RLS already prevents it — if avatars of *other* users must be listed later, only `avatar_url` is needed, which is public by design).

**Verify:** save avatar → object appears at `avatars/<uid>/avatar.png`; header updates immediately; second user cannot overwrite first user's path (403); refresh persists; changing avatar busts cache (new `?v=`).

## Phase 4 — Verification & hardening (final)

1. Grep checks: no `service_role`/PAT strings in repo; no `createSignedUrl` usage; all uploads go through the `<uid>/` path helper.
2. `get_advisors` (security) on the Supabase project; fix anything flagged on `storage.objects`/`profiles`.
3. Manual E2E: signup → default initials → build avatar → save → PNG in bucket → logout/login → avatar persists → second account sees its own avatar only.

## Phase 5 (optional, later) — Interactive viewer / fake-3D

- **Fake-3D**: at save time, loop the Phase 3 renderer over N poses/angles, upload `avatar_0.png … avatar_N.png`, swap on drag (sprite-sequence technique).
- **True 3D**: Three.js viewer on `avatar.html` only, blocky glTF rig, equipment driven by `avatar_config`; still export a canvas snapshot as the cached PNG so lists never pay the 3D cost.
- Either way the caching architecture from Phases 1–3 is unchanged — that's the point of choosing it now.
