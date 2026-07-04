# Roblox-Style Site Features — Planning List

A working list of platform-level details, based on what Roblox does well plus the features you specifically called out. Organized so it can be picked up piece by piece.

## 1. Page Load & Presence

- **Skeleton loading states** — every module on the homepage (friends list, catalog grid, featured items) shows a gray placeholder box in its final shape/position while data loads, instead of a blank page or spinner. Prevents layout jump once content arrives.
- **Online friends rail** — a persistent panel (sidebar or top strip) showing which friends are currently online, with avatar + status dot. Updates without a page refresh.
- **Recently viewed, adapted for us** — since there are no games yet, replace "recently played games" with "recently viewed catalog items" on the homepage.
- **Homepage catalog module logic** — show the user's last 4 viewed catalog items; if they haven't viewed at least 4, backfill the remaining slots with the day's best-selling or trending items.

## 2. Smart Search

- **Prefilled/suggested searches** — when the search bar is empty or just focused, show a pre-rendered list of suggestions: Trending, Top Selling, New, etc. (placeholder content for now, wire up real data later).
- **Live keystroke search (debounced)** — as the user types, after each keystroke (or a short pause), fire a request to the backend and show closest-matching **users**, not catalog items, in a dropdown below the bar. This is the "instant results" pattern Roblox uses.
- **Enter triggers a different search** — pressing Enter (rather than picking a live suggestion) submits a full search against the catalog specifically, for now. This can expand to other categories later.
- **Search scope selector** — a small dropdown/tab control next to or under the search bar letting the user manually choose what they're searching: Catalog, Communities, Users, Games (future), etc. — instead of one search bar guessing for them. (This is the actual Roblox pattern you were describing — a scoped search selector.)

## 3. Wallet & Payments

- **In-site wallet balance, deposit-based** — users can deposit money directly into a site wallet balance rather than needing a card for every purchase. Framed purely as "deposit funds," no crypto language.
- **Wallet balance in the header** — displayed next to the Retrobux balance, with its own icon (small wallet icon — plan to generate a custom icon asset rather than using an emoji).
- **Dedicated deposit page** — a simple page/flow for adding funds to the wallet balance.

## 4. Chat / Messaging

- **Friend-to-friend chat UI** — once two users are mutual friends, a chat thread becomes available between them. Build the UI now (conversation list + message thread view); real-time delivery (WebSocket/live server) can be figured out later — for now it can be scaffolded as a static/UI-only feature.

## 5. Catalog Item Types & Trading

- **Three item categories:**
  - **Normal** — standard, always-available items.
  - **Limited** — on sale with a fixed stock; not yet tradeable.
  - **ULimited** — a Limited item that has completely sold out. Once stock hits zero, it flips to ULimited status and becomes tradeable/resellable on the player market. Cosmetic tag: green "U" + gold "Limited" text treatment.
- **Item detail page with live resale listings** — clicking into a ULimited item shows current player sell listings and their asking prices, similar to Roblox's limited item resale page.
- **15% platform cut** — transaction fee taken on all peer-to-peer sales, shown specifically on the sell/listing modal where a user lists their ULimited for resale (not necessarily advertised elsewhere).

## 6. Other Roblox Details Worth Adding (not mentioned, but easy to miss)

- **Avatar/profile hover cards** — hovering a username or avatar anywhere on the site (search results, chat, friends list) pops a small preview card with avatar, display name, and quick actions (add friend, view profile, message).
- **Notification bell with grouped activity** — friend requests, trade offers, purchase confirmations, etc. collected in one dropdown rather than scattered toasts.
- **"New" and "% off" badges on catalog tiles** — small corner tags for recently added or discounted items, reused across catalog grids.
- **Empty states with a next action** — e.g., an empty friends list or chat inbox shows a friendly illustration/message plus a button ("Find people to follow") instead of just blank space.
- **Item favoriting/wishlist** — a quick heart/star icon on catalog tiles so users can save items without buying immediately; surfaces on their profile.
- **Trade/offer confirmation step** — a review screen before finalizing any ULimited trade or sale, showing both sides of the exchange and the fee breakdown, to prevent accidental trades.
