-- ============================================================
--  AuraHealth — auth + profile schema
--  Project: iowxqmkgnmhrccuaqson
--  Run once in the Supabase SQL Editor. Safe to re-run.
-- ============================================================

-- ---------- 1. Profiles ----------
create table if not exists public.profiles (
  id            uuid primary key references auth.users(id) on delete cascade,
  username      text unique not null,
  display_name  text,
  avatar_url    text,
  created_at    timestamptz not null default now(),
  updated_at    timestamptz not null default now()
);

-- additive for existing installs
alter table public.profiles add column if not exists display_name text;
alter table public.profiles add column if not exists avatar_url  text;

create unique index if not exists profiles_username_lower_idx
  on public.profiles (lower(username));

alter table public.profiles enable row level security;

drop policy if exists "profiles readable by authenticated" on public.profiles;
create policy "profiles readable by authenticated"
  on public.profiles for select to authenticated using (true);

drop policy if exists "profiles updatable by owner" on public.profiles;
create policy "profiles updatable by owner"
  on public.profiles for update to authenticated
  using (auth.uid() = id) with check (auth.uid() = id);

drop policy if exists "profiles insertable by owner" on public.profiles;
create policy "profiles insertable by owner"
  on public.profiles for insert to authenticated
  with check (auth.uid() = id);

-- ---------- 2. Auto-create a profile on signup ----------
create or replace function public.handle_new_user()
returns trigger language plpgsql security definer set search_path = public as $$
declare
  base_name  text;
  final_name text;
  n int := 0;
begin
  base_name := coalesce(
    nullif(trim(new.raw_user_meta_data->>'username'), ''),
    split_part(new.email, '@', 1)
  );
  base_name := lower(regexp_replace(base_name, '[^a-zA-Z0-9_]', '', 'g'));
  if base_name = '' then base_name := 'user'; end if;

  final_name := base_name;
  while exists (select 1 from public.profiles where lower(username) = final_name) loop
    n := n + 1;
    final_name := base_name || n::text;
  end loop;

  insert into public.profiles (id, username, display_name, avatar_url)
  values (
    new.id,
    final_name,
    nullif(trim(coalesce(new.raw_user_meta_data->>'display_name', '')), ''),
    nullif(trim(coalesce(new.raw_user_meta_data->>'avatar_url', '')), '')
  )
  on conflict (id) do nothing;

  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- ---------- 3. updated_at ----------
create or replace function public.touch_updated_at()
returns trigger language plpgsql as $$
begin new.updated_at := now(); return new; end;
$$;

drop trigger if exists profiles_touch on public.profiles;
create trigger profiles_touch
  before update on public.profiles
  for each row execute function public.touch_updated_at();

-- ---------- 4. Username availability (signup) ----------
create or replace function public.username_available(name_to_check text)
returns boolean language sql security definer set search_path = public stable as $$
  select not exists (
    select 1 from public.profiles where lower(username) = lower(trim(name_to_check))
  );
$$;
grant execute on function public.username_available(text) to anon, authenticated;

-- ---------- 5. Rename own username (uniqueness enforced) ----------
create or replace function public.set_my_username(new_name text)
returns text language plpgsql security definer set search_path = public as $$
declare clean text;
begin
  if auth.uid() is null then raise exception 'not authenticated'; end if;
  clean := lower(regexp_replace(trim(new_name), '[^a-zA-Z0-9_]', '', 'g'));
  if length(clean) < 3 then raise exception 'Usernames need at least 3 characters.'; end if;
  if exists (select 1 from public.profiles where lower(username) = clean and id <> auth.uid()) then
    raise exception 'That username is taken.';
  end if;
  update public.profiles set username = clean where id = auth.uid();
  return clean;
end;
$$;
grant execute on function public.set_my_username(text) to authenticated;

-- ---------- 6. Username -> login email ----------
-- Never reveals real addresses: accounts with a real email are told to use it.
create or replace function public.get_login_email(p_username text)
returns text language plpgsql security definer set search_path = public stable as $$
declare addr text;
begin
  select u.email into addr
  from public.profiles p join auth.users u on u.id = p.id
  where lower(p.username) = lower(trim(p_username))
  limit 1;

  if addr is null then return 'not_found'; end if;
  if addr like '%@users.aurahealth.local' then return addr; end if;
  return 'use_email';
end;
$$;
grant execute on function public.get_login_email(text) to anon, authenticated;

-- ---------- 7. Avatar storage ----------
insert into storage.buckets (id, name, public)
values ('avatars', 'avatars', true)
on conflict (id) do update set public = true;

-- Public read; each user may only write inside a folder named after their uid.
drop policy if exists "avatars are publicly readable" on storage.objects;
create policy "avatars are publicly readable"
  on storage.objects for select to public
  using (bucket_id = 'avatars');

drop policy if exists "users upload own avatar" on storage.objects;
create policy "users upload own avatar"
  on storage.objects for insert to authenticated
  with check (bucket_id = 'avatars' and (storage.foldername(name))[1] = auth.uid()::text);

drop policy if exists "users update own avatar" on storage.objects;
create policy "users update own avatar"
  on storage.objects for update to authenticated
  using (bucket_id = 'avatars' and (storage.foldername(name))[1] = auth.uid()::text)
  with check (bucket_id = 'avatars' and (storage.foldername(name))[1] = auth.uid()::text);

drop policy if exists "users delete own avatar" on storage.objects;
create policy "users delete own avatar"
  on storage.objects for delete to authenticated
  using (bucket_id = 'avatars' and (storage.foldername(name))[1] = auth.uid()::text);

-- ---------- 7b. Keep trigger functions off the REST API ----------
-- They fire as the table owner; nothing should call them via /rest/v1/rpc.
revoke execute on function public.handle_new_user() from public, anon, authenticated;
revoke execute on function public.touch_updated_at() from public, anon, authenticated;

-- ============================================================
--  Then: Authentication -> URL Configuration -> add your site URL
--  and <site>/reset.html to the redirect allow-list, so password
--  reset links come back to the right place.
-- ============================================================

-- ============================================================
--  8. Per-account tracker data
--  The trackers write to localStorage; assets/sync.js mirrors those
--  keys here so an account carries its data between devices.
-- ============================================================
create table if not exists public.user_state (
  user_id    uuid not null references auth.users(id) on delete cascade,
  k          text not null,
  v          text,
  updated_at timestamptz not null default now(),
  primary key (user_id, k)
);

create index if not exists user_state_user_idx on public.user_state (user_id);

alter table public.user_state enable row level security;

-- Your rows and nobody else's — for every verb.
drop policy if exists "user_state is private" on public.user_state;
create policy "user_state is private"
  on public.user_state for all to authenticated
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

-- ============================================================
--  9. Per-tracker relational tables
--  Applied via MCP migrations:
--    aura_progress_tables, aura_tracker_tables, aura_remaining_tables,
--    aura_rls_all_tracker_tables, aura_think_tables_real_shape
--  See the Supabase dashboard for the authoritative definitions.
--  Every table is (user_id, …) keyed with an owner-only RLS policy:
--    using (auth.uid() = user_id) with check (auth.uid() = user_id)
-- ============================================================
