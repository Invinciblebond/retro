// UTOPOLY — presence, online rail, recently-viewed, smart search
// Classic script. Loads after auth.js. Signed-in pages only (skips landing).
(() => {
const supabase = window.supabaseClient;
const toast = (m, t, ms) => window.retroAuth?.toast?.(m, t, ms);
const page = document.body.dataset.page || "";
if (page === "landing") return;

/* ---------- Styles: skeletons, rail, search dropdown ---------- */
const style = document.createElement("style");
style.textContent = `
  .skel { position:relative; overflow:hidden; background:var(--thumb,#2a2a32); border-radius:8px; }
  .skel::after { content:""; position:absolute; inset:0; transform:translateX(-100%);
    background:linear-gradient(90deg, transparent, rgba(255,255,255,.07), transparent);
    animation:shimmer 1.3s infinite; }
  @keyframes shimmer { 100% { transform:translateX(100%); } }
  .skel-fr { display:flex; align-items:center; gap:10px; margin-bottom:12px; }
  .skel-fr .skel.c { width:38px; height:38px; border-radius:50%; flex-shrink:0; }
  .skel-fr .skel.l { height:12px; flex:1; }
  .skel-card { width:150px; height:150px; flex-shrink:0; }
  .fr .dot-on, .fr .dot-off { position:absolute; bottom:0; right:0; width:10px; height:10px; border-radius:50%; border:2px solid var(--card,#1c1c22); }
  .fr .dot-on { background:#4caf50; } .fr .dot-off { background:#777; }
  .fr img.fav { width:100%; height:100%; object-fit:cover; border-radius:50%; display:block; }
  .search { position:relative; }
  .search-scope { margin-left:6px; padding:7px 8px; border-radius:8px; border:1px solid var(--line,#333);
    background:var(--input,#222); color:var(--txt,#eee); font-size:11.5px; font-weight:700; }
  .search-drop { position:absolute; top:calc(100% + 6px); left:0; right:0; z-index:500;
    background:var(--card,#1c1c22); border:1px solid var(--line,#333); border-radius:12px;
    box-shadow:0 16px 44px rgba(0,0,0,.5); overflow:hidden; display:none; }
  .search-drop.open { display:block; }
  .sd-head { font-size:10px; letter-spacing:1.4px; text-transform:uppercase; color:var(--muted,#9aa); padding:10px 14px 4px; }
  .sd-item { display:flex; align-items:center; gap:10px; padding:9px 14px; font-size:13px; font-weight:600;
    color:var(--txt,#eee); cursor:pointer; }
  .sd-item:hover { background:rgba(255,255,255,.05); }
  .sd-item .spfp { width:28px; height:28px; border-radius:50%; object-fit:cover; background:var(--thumb,#2a2a32); flex-shrink:0; }
  .sd-item .sic { width:28px; text-align:center; font-size:15px; }
  .sd-item .sub { margin-left:auto; font-size:10.5px; font-weight:700; }
  .sd-item .sub.on { color:#4caf50; } .sd-item .sub.off { color:var(--muted,#9aa); }
  .sd-empty { padding:14px; font-size:12.5px; color:var(--muted,#9aa); text-align:center; }
`;
document.head.appendChild(style);

/* ---------- Recently viewed (localStorage) ---------- */
const VIEWED_KEY = "retro:viewed";
function getViewed() {
  try { return JSON.parse(localStorage.getItem(VIEWED_KEY)) || []; } catch { return []; }
}
function recordView(item) {
  if (!item?.id) return;
  const list = getViewed().filter((x) => x.id !== item.id);
  list.unshift({ id: item.id, n: item.n, p: item.p, ic: item.ic, img: item.img || null, at: Date.now() });
  localStorage.setItem(VIEWED_KEY, JSON.stringify(list.slice(0, 12)));
}
window.retroViewed = { record: recordView, list: getViewed };

/* ---------- Presence heartbeat ---------- */
async function heartbeat() {
  const { data: { session } } = await supabase.auth.getSession();
  if (session) supabase.rpc("touch_presence").then(() => {});
}
heartbeat();
setInterval(heartbeat, 60_000);

/* ---------- Online friends rail (home page) ---------- */
async function renderOnlineRail() {
  const panel = document.getElementById("friends-panel");
  if (!panel) return;
  // skeletons in final shape
  panel.innerHTML = "<h4>Friends</h4>" +
    Array.from({ length: 5 }, () => '<div class="skel-fr"><span class="skel c"></span><span class="skel l"></span></div>').join("");

  async function refresh() {
    const { data, error } = await supabase.rpc("online_users", { max_rows: 8 });
    if (error || !data) return;
    const rows = data.map((u) => `
      <div class="fr">
        <span class="fpfp">${u.avatar_url ? `<img class="fav" src="${u.avatar_url}" alt="">` : (u.username || "?").slice(0, 2).toUpperCase()}
          <span class="${u.is_online ? "dot-on" : "dot-off"}"></span></span>
        ${u.username}
        <span class="st ${u.is_online ? "on" : "off"}">${u.is_online ? "● Online" : "Offline"}</span>
      </div>`).join("");
    panel.innerHTML = "<h4>Friends</h4>" + (rows ||
      '<p style="font-size:12.5px;color:var(--muted);line-height:1.5;">No one else is here yet.<br><a class="btn ghost small" href="catalog.html" style="margin-top:8px;display:inline-block;">Browse the catalog</a></p>');
  }
  await refresh();
  setInterval(refresh, 30_000); // live-ish updates, no page reload
}

/* ---------- Recently Viewed module (home page) ---------- */
async function renderRecentlyViewed() {
  const row = document.getElementById("recent-viewed");
  if (!row) return;
  row.innerHTML = Array.from({ length: 4 }, () => '<div class="skel skel-card"></div>').join("");

  const viewed = getViewed().slice(0, 4);
  let fill = [];
  if (viewed.length < 4) {
    // backfill with trending: on-sale first, then newest
    const { data } = await supabase
      .from("catalog_items")
      .select("id, name, price, icon, image_url, on_sale")
      .order("on_sale", { ascending: false })
      .order("created_at", { ascending: false })
      .limit(8);
    const seen = new Set(viewed.map((v) => v.id));
    fill = (data || []).filter((r) => !seen.has(r.id)).slice(0, 4 - viewed.length)
      .map((r) => ({ id: r.id, n: r.name, p: r.price, ic: r.icon, img: r.image_url, trend: true }));
  }
  const items = [...viewed, ...fill];
  row.innerHTML = items.length ? items.map((it) => `
    <a class="exp-card" href="catalog.html" style="text-decoration:none;">
      <div class="thumb" style="display:flex;align-items:center;justify-content:center;font-size:40px;overflow:hidden;">
        ${it.img ? `<img src="${it.img}" alt="${it.n}" style="width:100%;height:100%;object-fit:cover;">` : (it.ic || "📦")}
      </div>
      <div class="meta">
        <div class="ename">${it.n}</div>
        <div class="estats"><span class="ric">R</span> ${Number(it.p ?? 0).toLocaleString()}${it.trend ? ' · <span style="color:var(--accent2);font-weight:700;">Trending</span>' : ""}</div>
      </div>
    </a>`).join("")
    : '<p style="font-size:13px;color:var(--muted);padding:16px;">Nothing viewed yet — <a href="catalog.html">explore the catalog</a>.</p>';
}

/* ---------- Smart search (header) ---------- */
function wireSearch() {
  const wrap = document.querySelector(".search");
  const input = wrap?.querySelector("input");
  if (!wrap || !input) return;

  // Scope selector
  const scope = document.createElement("select");
  scope.className = "search-scope";
  scope.title = "Search scope";
  scope.innerHTML = `
    <option value="catalog">Catalog</option>
    <option value="users">Users</option>
    <option value="communities">Communities</option>
    <option value="games">Games</option>`;
  wrap.appendChild(scope);

  // Dropdown
  const drop = document.createElement("div");
  drop.className = "search-drop";
  wrap.appendChild(drop);
  const open = () => drop.classList.add("open");
  const close = () => drop.classList.remove("open");
  document.addEventListener("click", (e) => { if (!wrap.contains(e.target)) close(); });

  const SUGGESTIONS = [
    { ic: "🔥", label: "Trending", q: "" },
    { ic: "🏆", label: "Top Selling", q: "" },
    { ic: "✨", label: "New Arrivals", q: "" },
    { ic: "💸", label: "On Sale", q: "" },
  ];
  function showSuggestions() {
    drop.innerHTML = '<div class="sd-head">Try searching</div>' + SUGGESTIONS.map((s, i) =>
      `<div class="sd-item" data-sug="${i}"><span class="sic">${s.ic}</span>${s.label}</div>`).join("");
    drop.querySelectorAll("[data-sug]").forEach((el) =>
      el.addEventListener("click", () => { location.href = "catalog.html"; }));
    open();
  }

  let timer, seq = 0;
  async function liveUserSearch(q) {
    const mySeq = ++seq;
    const { data, error } = await supabase.rpc("search_users", { q, max_rows: 6 });
    if (mySeq !== seq) return; // stale response
    if (error) return;
    drop.innerHTML = '<div class="sd-head">Users</div>' + ((data && data.length) ? data.map((u) => `
      <div class="sd-item" data-user="${u.username}">
        ${u.avatar_url ? `<img class="spfp" src="${u.avatar_url}" alt="">` : `<span class="spfp" style="display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:800;color:var(--muted);">${(u.username || "?").slice(0, 2).toUpperCase()}</span>`}
        ${u.username}
        <span class="sub ${u.is_online ? "on" : "off"}">${u.is_online ? "● Online" : "Offline"}</span>
      </div>`).join("")
      : `<div class="sd-empty">No users matching “${q}”</div>`)
      + `<div class="sd-item" data-full="1"><span class="sic">🔎</span>Search catalog for “${q}” <span class="sub off">Enter ↵</span></div>`;
    drop.querySelectorAll("[data-user]").forEach((el) =>
      el.addEventListener("click", () => toast("User profiles are coming soon!", "info")));
    drop.querySelector("[data-full]")?.addEventListener("click", () => submitSearch(q));
    open();
  }

  function submitSearch(q) {
    const s = scope.value;
    if (s === "catalog") location.href = `catalog.html?q=${encodeURIComponent(q)}`;
    else if (s === "users") { input.dispatchEvent(new Event("input")); }
    else toast(`${s === "communities" ? "Communities" : "Games"} search is coming soon!`, "info");
  }

  input.addEventListener("focus", () => { if (!input.value.trim()) showSuggestions(); });
  input.addEventListener("input", () => {
    clearTimeout(timer);
    const q = input.value.trim();
    if (!q) { showSuggestions(); return; }
    timer = setTimeout(() => liveUserSearch(q), 280);
  });
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") { e.preventDefault(); const q = input.value.trim(); if (q) { close(); submitSearch(q); } }
    if (e.key === "Escape") close();
  });
}

/* ---------- Retrobux "Get More" → contact a mod ---------- */
document.addEventListener("click", (e) => {
  const a = e.target.closest?.("a.getmore");
  if (a) { e.preventDefault(); toast("💬 To purchase Retrobux, contact a moderator on Discord.", "info", 6000); }
});

/* ---------- Init ---------- */
wireSearch();
renderOnlineRail();
renderRecentlyViewed();
})();
