/* UTOPOLY — shared header & footer components */
(function () {
  const page = document.body.dataset.page || "";

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
      <a href="trade.html" class="${page === "trade" ? "active" : ""}">Trade</a>
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

  /* ---- Left icon rail ---- */
  const rail = `
  <aside class="rail">
    <a class="ritem ${page === "home" ? "active" : ""}" href="home.html"><span class="ic">⌂</span>Home</a>
    <a class="ritem ${page === "discover" ? "active" : ""}" href="discover.html"><span class="ic">▶</span>Discover</a>
    <a class="ritem ${page === "avatar" ? "active" : ""}" href="avatar.html"><span class="ic">☺</span>Avatar</a>
    <a class="ritem ${page === "profile" ? "active" : ""}" href="profile.html"><span class="ic">◉</span>Profile</a>
    <a class="ritem ${page === "catalog" ? "active" : ""}" href="catalog.html"><span class="ic">▦</span>Catalog</a>
    <a class="ritem ${page === "trade" ? "active" : ""}" href="trade.html"><span class="ic">⇄</span>Trade</a>
    <a class="ritem ${["groups","group"].includes(page) ? "active" : ""}" href="groups.html"><span class="ic">⛨</span>Groups</a>
    <a class="ritem ${page === "create" ? "active" : ""}" href="create.html"><span class="ic">✚</span>Create</a>
    <a class="ritem ${page === "dashboard" ? "active" : ""}" href="dashboard.html"><span class="ic">📊</span>Dashboard</a>
    <a class="ritem ${page === "shop" ? "active" : ""}" href="shop.html"><span class="ic">◆</span>Shop</a>
    <a class="ritem" href="home.html#friends"><span class="ic">◫</span>Friends</a>
    <a class="ritem ${page === "chat" ? "active" : ""}" href="chat.html"><span class="ic">✉</span>Chat</a>
    <a class="ritem ${page === "settings" ? "active" : ""}" href="settings.html"><span class="ic">⚙</span>Settings</a>
    <a class="ritem admin-only ${page === "admin" ? "active" : ""}" href="admin.html" style="display:none;"><span class="ic">🛡</span>Admin</a>
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
    <p class="foot-version">V0.06</p>
  </footer>`;

  document.querySelectorAll("[data-include]").forEach((el) => {
    const what = el.dataset.include;
    if (what === "header") el.outerHTML = header;
    else if (what === "rail") el.outerHTML = rail;
    else if (what === "footer") el.outerHTML = footer;
    else if (what === "tabbar") { el.outerHTML = tabbar; document.body.classList.add("has-tabbar"); }
  });
})();
