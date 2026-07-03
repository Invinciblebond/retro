/* RETRO — shared header & footer components */
(function () {
  const page = document.body.dataset.page || "";

  const wordmark = `<a href="home.html" class="wordmark">RE<span class="chip">T</span>R<span class="chip">O</span></a>`;

  /* ---- Signed-in sticky header ---- */
  const header = `
  <header class="site-header">
    ${wordmark}
    <nav class="links">
      <a href="home.html" class="${page === "home" ? "active" : ""}">Home</a>
      <a href="catalog.html" class="${page === "catalog" ? "active" : ""}">Catalog</a>
      <a href="shop.html" class="${page === "shop" ? "active" : ""}">Shop</a>
    </nav>
    <div class="search"><input type="search" placeholder="Search Retro" aria-label="Search"></div>
    <div class="hicons">
      <span class="rbx"><span class="ric">R</span>350 <a class="getmore" href="shop.html">Get More</a></span>
      <span class="hicon" title="Notifications">🔔<span class="dot"></span></span>
      <span class="hicon" title="Messages">✉️</span>
      <a href="home.html" class="avatar-head" title="Profile">KG</a>
    </div>
  </header>`;

  /* ---- Left icon rail ---- */
  const rail = `
  <aside class="rail">
    <a class="ritem ${page === "home" ? "active" : ""}" href="home.html"><span class="ic">⌂</span>Home</a>
    <a class="ritem" href="home.html#avatar"><span class="ic">☺</span>Avatar <span class="tag dev" style="margin-left:auto">IN DEV</span></a>
    <a class="ritem ${page === "catalog" ? "active" : ""}" href="catalog.html"><span class="ic">▦</span>Catalog</a>
    <a class="ritem ${page === "shop" ? "active" : ""}" href="shop.html"><span class="ic">◆</span>Shop</a>
    <a class="ritem" href="home.html#friends"><span class="ic">◫</span>Friends</a>
    <a class="ritem" href="#"><span class="ic">✉</span>Chat <span class="tag soon" style="margin-left:auto">SOON</span></a>
    <a class="ritem" href="#"><span class="ic">⚙</span>Settings <span class="tag soon" style="margin-left:auto">SOON</span></a>
  </aside>`;

  /* ---- Mobile bottom tab bar ---- */
  const tabbar = `
  <nav class="tabbar">
    <a href="home.html" class="${page === "home" ? "active" : ""}"><span class="tic">⌂</span>Home</a>
    <a href="catalog.html" class="${page === "catalog" ? "active" : ""}"><span class="tic">▦</span>Catalog</a>
    <a href="shop.html" class="${page === "shop" ? "active" : ""}"><span class="tic">◆</span>Shop</a>
    <a href="home.html#friends"><span class="tic">◫</span>Friends</a>
    <a href="#"><span class="tic">⚙</span>More</a>
  </nav>`;

  /* ---- Footer (every page) ---- */
  const footer = `
  <footer class="site-footer">
    <div class="foot-grid">
      <div>
        ${wordmark}
        <p class="foot-desc">Retro is an early-access social gaming platform. Create an avatar, collect items, join experiences, and hang out — powered by Retrobux.</p>
      </div>
      <div>
        <h4>Company</h4>
        <a href="#">About <span class="tag soon">SOON</span></a>
        <a href="#">Careers <span class="tag soon">SOON</span></a>
      </div>
      <div>
        <h4>Community</h4>
        <a href="#" title="Placeholder invite">Discord <span class="tag soon">SOON</span></a>
      </div>
      <div>
        <h4>Support</h4>
        <a href="#">Help Center <span class="tag soon">SOON</span></a>
      </div>
    </div>
    <div class="foot-legal">
      <a href="terms.html">Terms of Use</a>
      <a href="privacy.html">Data Usage Policy</a>
    </div>
    <p class="foot-fine">© 2026 Retro. All Rights Reserved. Retro is an independent, fan-made project and is not affiliated with, endorsed by, or sponsored by Roblox Corporation.</p>
  </footer>`;

  document.querySelectorAll("[data-include]").forEach((el) => {
    const what = el.dataset.include;
    if (what === "header") el.outerHTML = header;
    else if (what === "rail") el.outerHTML = rail;
    else if (what === "footer") el.outerHTML = footer;
    else if (what === "tabbar") { el.outerHTML = tabbar; document.body.classList.add("has-tabbar"); }
  });
})();
