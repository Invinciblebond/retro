# Utopoly — Platform Architecture

How the feature-expansion build is structured: what lives in the database, what lives in the frontend, and the rules that connect them.

## Core principle

**The client never does money math.** Every sensitive operation — currency transfers, purchases, trades, group creation — runs inside a Postgres function (RPC) with `SECURITY DEFINER`. The browser only *asks*; the database validates, executes atomically, and logs. RLS (Row Level Security) is enabled on every table, so even direct API calls can't read or write anything the policies don't allow.

```
Browser (vanilla JS pages)
   │  supabase-js (anon key)
   ▼
Supabase
   ├── RLS policies      → who can SELECT/INSERT/UPDATE/DELETE which rows
   ├── RPC functions     → all currency/ownership mutations (atomic, validated, logged)
   └── Realtime          → live chat delivery (postgres_changes on messages)
```

## Currencies

Two currencies, both columns on `profiles`:

| Currency | Column | Earned/used |
|---|---|---|
| **Retrobux** | `profiles.retrobux` | Primary. Items, resale, game passes, private servers, trades. |
| **Rix** | `profiles.rix` | Secondary. New users seed with 500. Group creation (50), trades, one-way conversion to Retrobux. |

- **Conversion** (`convert_rix`): one-way Rix → Retrobux at a rate stored in `app_config` (`rix_to_retrobux_rate`, admin-changeable via `admin_set_exchange_rate`). Debit + credit + ledger rows happen in one transaction.
- **Ledger** (`currency_transactions`): every balance change writes a signed-delta row with a `kind` (`purchase`, `trade`, `conversion_debit`, `admin_adjustment`, …). Users see only their own rows; admins see all.

## Catalog & Limiteds

`catalog_items.item_type` is one of:

| Type | Behavior |
|---|---|
| `normal` | Always purchasable while `on_sale`. |
| `limited` | Finite `stock`. Once sold out, owned copies become resellable at any price. |
| `limited_u` | Serialized: each copy gets `#1, #2, …` out of `total_quantity`. Resellable immediately. |

Flow of a copy:

1. **Primary sale** — `purchase_item` locks the item row, decrements stock, assigns the next serial (limited_u), debits the buyer, inserts into `inventory`, records the sale in `item_sales`, recalculates RAP.
2. **Resale** — `create_resale_listing` (ownership + resellability checked) → row in `listings`. `buy_resale` transfers ownership + currency atomically, takes a **15% platform fee**, deactivates the listing, and **auto-invalidates any pending trade** containing that copy.
3. **Price history & RAP** — `item_sales` is the append-only history. `recalc_rap` sets `catalog_items.rap` = rolling average of the last 10 sales. `user_rap(uid)` sums RAP over a user's owned limiteds (shown on profiles). `get_price_history` feeds the SVG chart on the item page.

## Trading

Two tables: `trades` (parties, status, currency amounts on both sides) + `trade_items` (inventory ids per side).

- `send_trade` validates that each offered copy is a limited owned by the correct side *at send time*.
- `respond_trade(trade, 'accept')` is the critical path — a single transaction that:
  1. re-validates *both* parties still own every item (row-locked with `FOR UPDATE`),
  2. deactivates any resale listings on those copies,
  3. debits/credits Retrobux and Rix on both sides (insufficient funds ⇒ trade invalidated),
  4. swaps `inventory.user_id` both directions,
  5. writes ledger rows and marks the trade `accepted`.
- Race condition handling: if a copy sells on the market while the trade is pending, `buy_resale` flips the trade to `invalidated`; accept also invalidates rather than partially executing.
- `counter_of` links a counter-offer to the trade it replaces (original becomes `countered`).
- Statuses: `pending → accepted | declined | cancelled | countered | invalidated`.

## Games (Create / Discover)

- `games` — creator-owned rows (title, description, thumbnail, genre, `visits`, `favorites_count`, `active`). Anyone can read active games; only the creator (or admin) can edit. Playing is a placeholder, but the Play button calls `record_visit` so visit counts are real.
- `game_passes` + `game_pass_ownership` — `buy_game_pass` debits the buyer, credits the creator 85%, records ownership.
- `private_server_options` (per-game price/enabled) + `private_server_rentals` — `rent_private_server`, same 85/15 split, `recurring` flag stored for later billing.
- `badges` + `user_badges` — creators define badges; awarding is admin/manual (`admin_grant_badge`) for now; ownership shows on profiles.
- `game_favorites` — counter maintained by a DB trigger, not client math.
- `follows` — polymorphic (`target_type` = `user` | `game`). A trigger notifies a creator's followers (`notifications`) when they publish a game; Discover surfaces this as the "From creators you follow" feed.

## Groups

- Creation costs **50 Rix**, atomic in `create_group`: debit → group → three default ranks (Member 1, Officer 100, Owner 255) → owner membership → ledger row.
- `group_ranks` carry `rank_number` (0–255, 255 = immutable Owner rank) and permission flags `can_post_wall`, `can_manage_members`. Owner manages ranks via `manage_group_rank`; members are reassigned via `set_member_rank` (permission-checked in SQL, not UI).
- `group_wall_posts` go through `post_group_wall`, which enforces membership, rank permission, **and mute status** server-side.
- `join_group` puts new members in the lowest joinable rank; owners can't leave their own group.

## Chat

- 1-on-1 messages in the existing `messages` table. Sending goes through `send_chat_message`, which rejects muted/banned users — and the INSERT policy re-enforces this, so bypassing the RPC doesn't help.
- **Delivery is Supabase Realtime**: `messages` is in the `supabase_realtime` publication; each client subscribes to `postgres_changes` INSERTs filtered on its own id. Polling remains only as a slow fallback.
- Read state: `read_at` timestamp, set when the recipient opens the thread; unread counts badge the conversation list.

## Moderation & Admin

- `profiles.is_admin` (default false, flipped only manually in the DB) gates everything **server-side**: every admin RPC calls `assert_admin()` first, and admin-only reads use the `is_admin()` helper in RLS policies. The UI hiding is cosmetic.
- **Bans**: permanent (`ban_permanent`) or temporary (`banned_until`). `check_my_ban` runs on every page load (in `auth.js`) and replaces the page with a suspension screen; every mutating RPC also checks `is_banned()`, so a banned user with a live token still can't act.
- **Mutes**: same pattern (`mute_permanent` / `muted_until`), enforced in `send_chat_message`, `post_group_wall`, and the messages INSERT policy.
- Every admin action writes to `moderation_log` (acting admin, target, action, reason, detail JSON, timestamp).
- Admin panel tabs → RPCs: Users (`admin_search_users`, `admin_moderate_user`, `admin_adjust_balance`, `admin_grant_badge`), Catalog (`admin_upsert_catalog_item`), Economy (`admin_set_exchange_rate`, `admin_remove_listing`, `admin_cancel_trade`), Content (`admin_set_game_active`, `admin_delete_group`, `admin_delete_wall_post`), Events (`admin_upsert_event`, `admin_delete_event`), Mod Log (read).

## Events

`events` table (name, banner, date range, optional linked `item_ids`). Admin-created only; Discover shows events whose date range covers *now*.

## Avatar & Profiles

- `profiles.avatar_config` (JSONB): `{ body_color, equipped: { hat, face, shirt, tshirt, pants, gear, accessory } }`. The editor only lets you equip items you own (it reads your `inventory`); saving is a plain profile update guarded by RLS.
- `assets/avatar-render.js` renders the config as a layered 2D SVG — shared by the editor preview and profile pages.
- Public profiles read through `get_public_profile` (safe fields only + computed RAP). Editable fields (`display_name`, `status`, `description`, `privacy` JSONB) live in Settings.

## Frontend conventions

- Every page is a standalone HTML file (multi-page Vite build, inputs registered in `vite.config.js`).
- Shared chrome comes from `data-include="header|rail|tabbar|footer"` placeholders filled by `assets/retro.js`; auth/session/ban-gate/balances by `assets/auth.js`; presence/search by `assets/social.js`.
- Script load order matters: `retro.js` → supabase UMD → `env.js` → `supabaseClient.js` → `auth.js` → `social.js` → page script.
- Header shows both balances (R = Retrobux, X = Rix); the Admin rail link is injected only when `retroProfile.is_admin` is true (visibility only — security is server-side).

## Key invariants (do not break)

1. No client-side balance or ownership writes — RPCs only.
2. Every currency mutation has a `currency_transactions` row.
3. Every admin mutation has a `moderation_log` row.
4. `item_sales` is append-only; RAP is derived, never hand-edited.
5. Trade acceptance re-validates ownership under row locks.
6. Ban/mute checks live in SQL (`is_banned` / `is_muted`), duplicated in RLS policies where direct table access exists.
