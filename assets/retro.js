/* UTOPOLY — shared header & footer components */
(function () {
  // ---- Single source of truth for the site version ----
  // Bump this on every release AND update the ?v= stamps in the HTML files
  // (they must match — a mismatch means the browser served a stale page).
  const APP_VERSION = "0.12";
  window.APP_VERSION = APP_VERSION;
  console.log(`%cUTOPOLY%c v${APP_VERSION}`, "font-weight:900;color:#e2231a;", "color:inherit;");
  // Stale-cache detector: compare our own <script src="...retro.js?v=N"> tag
  // against APP_VERSION. If the HTML is an old cached copy, say so loudly.
  const selfSrc = document.currentScript?.src || "";
  const htmlV = new URL(selfSrc, location.href).searchParams.get("v");
  if (htmlV !== null && htmlV !== APP_VERSION) {
    console.warn(`[UTOPOLY] Stale page: HTML references retro.js?v=${htmlV} but the script is v${APP_VERSION}. Hard-refresh (Ctrl/Cmd+Shift+R) to update.`);
  }

  const page = document.body.dataset.page || "";

  /* Public profile URL — prefers the public numeric ID (/profile/{n} → profile.html?id=n).
     Never puts auth UUIDs in URLs. Accepts a profile-ish object or a username string. */
  window.profileUrl = (u) => {
    if (u && typeof u === "object") {
      if (u.user_number != null) return `profile.html?id=${u.user_number}`;
      if (u.username) return `profile.html?u=${encodeURIComponent(u.username)}`;
      return "profile.html";
    }
    if (typeof u === "number" || /^\d+$/.test(u ?? "")) return `profile.html?id=${u}`;
    return u ? `profile.html?u=${encodeURIComponent(u)}` : "profile.html";
  };

  /* Staff badge (admin/mod). p: profile-ish object with is_admin / is_mod.
     mode: "self" → "You're an Admin" / "You're a moderator"
           "other" → "This user is an admin" / "This user is a moderator" */
  window.staffBadgeHTML = (p, mode = "other") => {
    if (!p || (!p.is_admin && !p.is_mod)) return "";
    const title = p.is_admin
      ? (mode === "self" ? "You're an Admin" : "This user is an admin")
      : (mode === "self" ? "You're a moderator" : "This user is a moderator");
    return ` <img src="https://i.ibb.co/SX7PLrC9/adminvadge.png" alt="${p.is_admin ? "Admin" : "Moderator"} badge" title="${title}" style="width:20px;height:20px;vertical-align:middle;object-fit:contain;">`;
  };

  // Apply saved theme (Settings → Appearance) before anything renders
  const savedTheme = localStorage.getItem("retro:theme");
  if (savedTheme && /^theme-[1-4]$/.test(savedTheme) && page !== "landing") {
    document.body.className = document.body.className.replace(/theme-\d/, savedTheme);
  }

  const wordmark = `<a href="home.html" class="wordmark">UT<span class="chip">O</span>P<span class="chip">O</span>LY</a>`;

  /* ---- Signed-in sticky header ---- */
  const header = `
  <header class="site-header">
    ${wordmark}
    <nav class="links">
      <a href="home.html" class="${page === "home" ? "active" : ""}">Home</a>
      <a href="discover.html" class="${page === "discover" ? "active" : ""}">Discover</a>
      <a href="catalog.html" class="${page === "catalog" ? "active" : ""}">Catalog</a>
      <a href="groups.html" class="${["groups","group"].includes(page) ? "active" : ""}">Groups</a>
      <a href="create.html" class="${page === "create" ? "active" : ""}">Create</a>
      <a href="shop.html" class="${page === "shop" ? "active" : ""}">Shop</a>
    </nav>
    <div class="search"><input type="search" placeholder="Search Utopoly" aria-label="Search"></div>
    <div class="hicons">
      <span class="rbx"><span class="ric">R</span>… <a class="getmore" href="shop.html">Get More</a></span>
      <span class="hicon" title="Notifications">🔔<span class="dot"></span></span>
      <a class="hicon" title="Messages" href="chat.html" style="text-decoration:none;">✉️</a>
      <a href="home.html" class="avatar-head" title="Profile"></a>
    </div>
  </header>`;

  /* ---- Left icon rail — one consistent outline SVG icon set (24px grid, stroke = currentColor) ---- */
  const svg = (paths) => `<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths}</svg>`;
  const ICONS = {
    home: svg('<path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/><path d="M10 21v-6h4v6"/>'),
    discover: svg('<circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2 5-5 2 2-5z"/>'),
    avatar: svg('<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 3.6-6.5 8-6.5s8 2.5 8 6.5"/>'),
    catalog: svg('<rect x="3" y="3" width="7.5" height="7.5" rx="1.5"/><rect x="13.5" y="3" width="7.5" height="7.5" rx="1.5"/><rect x="3" y="13.5" width="7.5" height="7.5" rx="1.5"/><rect x="13.5" y="13.5" width="7.5" height="7.5" rx="1.5"/>'),
    trade: svg('<path d="M4 8h13"/><path d="m14 4 4 4-4 4"/><path d="M20 16H7"/><path d="m10 12-4 4 4 4"/>'),
    dashboard: svg('<path d="M4 20V10"/><path d="M10 20V4"/><path d="M16 20v-7"/><path d="M22 20H2"/>'),
    shop: svg('<path d="M6 8h12l1.5 12h-15z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/>'),
    friends: svg('<circle cx="9" cy="8.5" r="3.2"/><path d="M2.5 20c0-3.3 2.9-5.3 6.5-5.3s6.5 2 6.5 5.3"/><circle cx="17" cy="9.5" r="2.6"/><path d="M17.8 14.9c2.3.5 3.7 2.2 3.7 4.6"/>'),
    chat: svg('<path d="M21 12a8 8 0 0 1-8 8H4l2-3a8 8 0 1 1 15-5z"/><path d="M8.5 11.5h7"/><path d="M8.5 14.5h4"/>'),
    settings: svg('<circle cx="12" cy="12" r="3"/><path d="M19.4 12a7.4 7.4 0 0 0-.1-1.2l2-1.6-2-3.4-2.4 1a7.4 7.4 0 0 0-2-1.2L14.5 3h-4l-.4 2.6a7.4 7.4 0 0 0-2 1.2l-2.4-1-2 3.4 2 1.6a7.4 7.4 0 0 0 0 2.4l-2 1.6 2 3.4 2.4-1a7.4 7.4 0 0 0 2 1.2l.4 2.6h4l.4-2.6a7.4 7.4 0 0 0 2-1.2l2.4 1 2-3.4-2-1.6c.06-.4.1-.8.1-1.2z"/>'),
    admin: svg('<path d="M12 3 4.5 6v5c0 4.6 3.2 8.4 7.5 10 4.3-1.6 7.5-5.4 7.5-10V6z"/><path d="m9 12 2 2 4-4"/>'),
  };
  const rail = `
  <aside class="rail">
    <a class="ritem ${page === "home" ? "active" : ""}" href="home.html">${ICONS.home}Home</a>
    <a class="ritem ${page === "discover" ? "active" : ""}" href="discover.html">${ICONS.discover}Discover</a>
    <a class="ritem ${page === "avatar" ? "active" : ""}" href="avatar.html">${ICONS.avatar}Avatar</a>
    <a class="ritem ${page === "catalog" ? "active" : ""}" href="catalog.html">${ICONS.catalog}Catalog</a>
    <a class="ritem ${page === "trade" ? "active" : ""}" href="trade.html">${ICONS.trade}Trade</a>
    <a class="ritem ${page === "dashboard" ? "active" : ""}" href="dashboard.html">${ICONS.dashboard}Dashboard</a>
    <a class="ritem ${page === "shop" ? "active" : ""}" href="shop.html">${ICONS.shop}Shop</a>
    <a class="ritem ${page === "friends" ? "active" : ""}" href="friends.html">${ICONS.friends}Friends</a>
    <a class="ritem ${page === "chat" ? "active" : ""}" href="chat.html">${ICONS.chat}Chat</a>
    <a class="ritem ${page === "settings" ? "active" : ""}" href="settings.html">${ICONS.settings}Settings</a>
    <a class="ritem admin-only ${page === "admin" ? "active" : ""}" href="admin.html" style="display:none;">${ICONS.admin}Admin</a>
  </aside>`;

  /* ---- Mobile bottom tab bar ---- */
  const tabbar = `
  <nav class="tabbar">
    <a href="home.html" class="${page === "home" ? "active" : ""}"><span class="tic">⌂</span>Home</a>
    <a href="discover.html" class="${page === "discover" ? "active" : ""}"><span class="tic">▶</span>Discover</a>
    <a href="catalog.html" class="${page === "catalog" ? "active" : ""}"><span class="tic">▦</span>Catalog</a>
    <a href="trade.html" class="${page === "trade" ? "active" : ""}"><span class="tic">⇄</span>Trade</a>
    <a href="settings.html"><span class="tic">⚙</span>More</a>
  </nav>`;

  /* ---- Footer (every page) ---- */
  const footer = `
  <footer class="site-footer">
    <div class="foot-grid">
      <div>
        ${wordmark}
        <p class="foot-desc">Utopoly is an early-access social gaming platform. Create an avatar, collect items, join experiences, and hang out — powered by Retrobux.</p>
      </div>
      <div>
        <h4>Company</h4>
        <a href="#">About <span class="tag soon">SOON</span></a>
        <a href="#">Careers <span class="tag soon">SOON</span></a>
      </div>
      <div>
        <h4>Community</h4>
        <a href="#" title="Placeholder invite">Discord <span class="tag soon">SOON</span></a>
        <a href="wiki.html">📖 Wiki — how it all works</a>
      </div>
      <div>
        <h4>Support</h4>
        <a href="wiki.html">Wiki &amp; Guides</a>
        <a href="#">Help Center <span class="tag soon">SOON</span></a>
      </div>
    </div>
    <div class="foot-legal">
      <a href="terms.html">Terms of Use</a>
      <a href="privacy.html">Data Usage Policy</a>
    </div>
    <p class="foot-fine">© 2026 Utopoly.com. All Rights Reserved. Utopoly is an independent project and is not affiliated with, endorsed by, or sponsored by any other gaming platform.</p>
    <p class="foot-version">V${APP_VERSION}</p>
  </footer>`;

  document.querySelectorAll("[data-include]").forEach((el) => {
    const what = el.dataset.include;
    if (what === "header") el.outerHTML = header;
    else if (what === "rail") el.outerHTML = rail;
    else if (what === "footer") el.outerHTML = footer;
    else if (what === "tabbar") { el.outerHTML = tabbar; document.body.classList.add("has-tabbar"); }
  });
})();
