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
      <div class="fr" data-hovercard="${u.username}">
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
      <div class="sd-item" data-user="${u.username}" data-hovercard="${u.username}">
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

/* ---------- Retrobux "Get More" → contact a moderator in the Discord ---------- */
const DISCORD_URL = "https://discord.gg/QJyffYR63";
document.addEventListener("click", (e) => {
  const a = e.target.closest?.("a.getmore");
  if (a) {
    e.preventDefault();
    toast("💬 To purchase Retrobux, contact a moderator in the Discord — opening it now…", "info", 6000);
    setTimeout(() => window.open(DISCORD_URL, "_blank", "noopener"), 900);
  }
});

/* ---------- Profile hover cards ---------- */
const hcStyle = document.createElement("style");
hcStyle.textContent = `
  .hovercard { position:fixed; z-index:9500; width:230px; background:var(--card,#1c1c22); border:1px solid var(--line,#333);
    border-radius:12px; padding:14px; box-shadow:0 16px 44px rgba(0,0,0,.55); font-size:12.5px;
    opacity:0; transform:translateY(4px); transition:opacity .15s, transform .15s; pointer-events:auto; }
  .hovercard.show { opacity:1; transform:translateY(0); }
  .hovercard .hc-top { display:flex; align-items:center; gap:10px; margin-bottom:10px; }
  .hovercard .hc-av { width:44px; height:44px; border-radius:50%; background:var(--thumb,#2a2a32); overflow:hidden;
    display:flex; align-items:center; justify-content:center; font-weight:800; color:var(--muted,#9aa); flex-shrink:0; }
  .hovercard .hc-av img { width:100%; height:100%; object-fit:cover; }
  .hovercard .hc-name { font-weight:900; font-size:14px; }
  .hovercard .hc-sub { font-size:10.5px; color:var(--muted,#9aa); font-weight:700; }
  .hovercard .hc-actions { display:flex; gap:6px; }
  .hovercard .hc-actions .btn { flex:1; font-size:10.5px; padding:7px 4px; text-align:center; }
  .noti-drop { position:fixed; z-index:9500; width:320px; max-height:420px; overflow-y:auto; background:var(--card,#1c1c22);
    border:1px solid var(--line,#333); border-radius:12px; box-shadow:0 16px 44px rgba(0,0,0,.55); display:none; }
  .noti-drop.open { display:block; }
  .noti-head { display:flex; align-items:center; justify-content:space-between; padding:12px 14px 6px; }
  .noti-head b { font-size:12px; letter-spacing:1.2px; text-transform:uppercase; color:var(--muted,#9aa); }
  .noti-group { font-size:10px; letter-spacing:1.2px; text-transform:uppercase; color:var(--muted,#9aa); padding:10px 14px 2px; }
  .noti { padding:10px 14px; font-size:12.5px; line-height:1.5; border-bottom:1px solid var(--line,#333); }
  .noti:last-child { border-bottom:none; }
  .noti.unread { background:rgba(108,204,255,.05); }
  .noti .n-actions { display:flex; gap:6px; margin-top:6px; }
  .noti-empty { padding:26px 16px; text-align:center; color:var(--muted,#9aa); font-size:12.5px; }
`;
document.head.appendChild(hcStyle);

let hcEl = null, hcTimer = null, hcHideTimer = null;
function removeHovercard() { hcEl?.remove(); hcEl = null; }
document.addEventListener("mouseover", (e) => {
  const t = e.target.closest?.("[data-hovercard]");
  if (t) {
    clearTimeout(hcHideTimer);
    clearTimeout(hcTimer);
    hcTimer = setTimeout(() => showHovercard(t), 350);
  } else if (!e.target.closest?.(".hovercard")) {
    clearTimeout(hcTimer);
    hcHideTimer = setTimeout(removeHovercard, 250);
  }
});
async function showHovercard(anchor) {
  const uname = anchor.dataset.hovercard;
  if (!uname || (hcEl && hcEl.dataset.u === uname)) return;
  removeHovercard();
  const r = anchor.getBoundingClientRect();
  const { data } = await supabase.rpc("get_user_card", { p_username: uname });
  const u = data?.[0];
  if (!u) return;
  hcEl = document.createElement("div");
  hcEl.className = "hovercard";
  hcEl.dataset.u = uname;
  const joined = u.joined ? new Date(u.joined).toLocaleDateString("en-US", { month: "short", year: "numeric" }) : "";
  const friendBtn =
    u.friend_status === "friends" ? `<a class="btn primary" href="chat.html?u=${encodeURIComponent(u.username)}">Message</a>` :
    u.friend_status === "sent" ? `<button class="btn ghost" disabled>Request sent</button>` :
    u.friend_status === "incoming" ? `<button class="btn primary" data-hc-accept>Accept request</button>` :
    `<button class="btn primary" data-hc-add>Add Friend</button>`;
  hcEl.innerHTML = `
    <div class="hc-top">
      <span class="hc-av">${u.avatar_url ? `<img src="${u.avatar_url}" alt="">` : uname.slice(0, 2).toUpperCase()}</span>
      <div>
        <div class="hc-name">${u.username}</div>
        <div class="hc-sub">${u.is_online ? '<span style="color:#4caf50;">● Online</span>' : "Offline"}${joined ? ` · Joined ${joined}` : ""}</div>
      </div>
    </div>
    <div class="hc-actions">${friendBtn}<button class="btn ghost" data-hc-profile>Profile</button></div>`;
  document.body.appendChild(hcEl);
  const cw = 230, x = Math.min(r.left, innerWidth - cw - 12), y = r.bottom + 8 + 180 > innerHeight ? r.top - 8 - 120 : r.bottom + 8;
  hcEl.style.left = `${Math.max(8, x)}px`;
  hcEl.style.top = `${Math.max(8, y)}px`;
  requestAnimationFrame(() => hcEl?.classList.add("show"));
  hcEl.addEventListener("mouseleave", () => { hcHideTimer = setTimeout(removeHovercard, 250); });
  hcEl.addEventListener("mouseenter", () => clearTimeout(hcHideTimer));
  hcEl.querySelector("[data-hc-add]")?.addEventListener("click", async (ev) => {
    ev.currentTarget.disabled = true;
    const { error } = await supabase.rpc("send_friend_request", { p_username: uname });
    toast(error ? error.message : `Friend request sent to ${uname}!`, error ? "err" : "ok");
    removeHovercard();
  });
  hcEl.querySelector("[data-hc-accept]")?.addEventListener("click", async () => {
    const { error } = await supabase.rpc("respond_friend_request", { p_from_username: uname, p_accept: true });
    toast(error ? error.message : `You and ${uname} are now friends!`, error ? "err" : "ok");
    removeHovercard();
  });
  hcEl.querySelector("[data-hc-profile]")?.addEventListener("click", () => toast("Full profiles are coming soon!", "info"));
}

/* ---------- Notification bell ---------- */
function wireBell() {
  const bell = document.querySelector('.hicon[title="Notifications"]');
  if (!bell) return;
  const dot = bell.querySelector(".dot");
  const drop = document.createElement("div");
  drop.className = "noti-drop";
  document.body.appendChild(drop);
  bell.style.cursor = "pointer";

  async function unreadCount() {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) return;
    const { count } = await supabase.from("notifications").select("id", { count: "exact", head: true }).eq("read", false);
    if (dot) dot.style.display = count > 0 ? "" : "none";
  }
  unreadCount();
  setInterval(unreadCount, 30_000);

  const GROUPS = {
    friend_request: "Friend requests", friend_accept: "Friends",
    purchase: "Purchases", sale: "Sales", trade: "Trades", system: "Utopoly",
  };
  function line(n) {
    const p = n.payload || {};
    switch (n.type) {
      case "friend_request": return `<b data-hovercard="${p.from}">${p.from}</b> sent you a friend request.
        <div class="n-actions"><button class="btn primary small" data-fr-accept="${p.from}" data-nid="${n.id}">Accept</button>
        <button class="btn ghost small" data-fr-decline="${p.from}" data-nid="${n.id}">Decline</button></div>`;
      case "friend_accept": return `<b>${p.by}</b> accepted your friend request. <a href="chat.html?u=${encodeURIComponent(p.by || "")}">Say hi →</a>`;
      case "purchase": return `You bought <b>${p.item}</b> for <span class="ric">R</span>${(p.price ?? 0).toLocaleString()}.`;
      case "sale": return `Your <b>${p.item}</b> sold for <span class="ric">R</span>${(p.price ?? 0).toLocaleString()} — you received <span class="ric">R</span>${(p.payout ?? 0).toLocaleString()}.`;
      case "trade": return `You bought <b>${p.item}</b> on the player market for <span class="ric">R</span>${(p.price ?? 0).toLocaleString()}.`;
      default: return p.message || "Notification";
    }
  }

  async function render() {
    drop.innerHTML = '<div class="noti-head"><b>Notifications</b></div><div class="noti-empty">Loading…</div>';
    const { data } = await supabase.from("notifications")
      .select("id, type, payload, read, created_at")
      .order("created_at", { ascending: false }).limit(25);
    const list = data || [];
    if (!list.length) {
      drop.innerHTML = `<div class="noti-head"><b>Notifications</b></div>
        <div class="noti-empty"><div style="font-size:34px;margin-bottom:6px;">🔔</div>
        Nothing yet! Friend requests, purchases, and trades will show up here.<br>
        <a class="btn primary small" href="catalog.html" style="margin-top:10px;display:inline-block;">Browse the catalog</a></div>`;
      return;
    }
    const byGroup = {};
    for (const n of list) (byGroup[n.type] = byGroup[n.type] || []).push(n);
    drop.innerHTML = `<div class="noti-head"><b>Notifications</b><button class="btn ghost small" id="noti-clear">Mark all read</button></div>` +
      Object.entries(byGroup).map(([type, ns]) =>
        `<div class="noti-group">${GROUPS[type] || type}</div>` +
        ns.map((n) => `<div class="noti${n.read ? "" : " unread"}">${line(n)}</div>`).join("")
      ).join("");
    drop.querySelector("#noti-clear")?.addEventListener("click", async () => {
      await supabase.from("notifications").update({ read: true }).eq("read", false);
      unreadCount(); render();
    });
    drop.querySelectorAll("[data-fr-accept]").forEach((b) => b.addEventListener("click", async () => {
      const { error } = await supabase.rpc("respond_friend_request", { p_from_username: b.dataset.frAccept, p_accept: true });
      if (!error) await supabase.from("notifications").update({ read: true }).eq("id", b.dataset.nid);
      toast(error ? error.message : `You and ${b.dataset.frAccept} are now friends!`, error ? "err" : "ok");
      unreadCount(); render();
    }));
    drop.querySelectorAll("[data-fr-decline]").forEach((b) => b.addEventListener("click", async () => {
      await supabase.rpc("respond_friend_request", { p_from_username: b.dataset.frDecline, p_accept: false });
      await supabase.from("notifications").update({ read: true }).eq("id", b.dataset.nid);
      unreadCount(); render();
    }));
  }

  bell.addEventListener("click", (e) => {
    e.stopPropagation();
    const open = drop.classList.toggle("open");
    if (open) {
      const r = bell.getBoundingClientRect();
      drop.style.top = `${r.bottom + 8}px`;
      drop.style.right = `${Math.max(8, innerWidth - r.right - 20)}px`;
      render();
    }
  });
  document.addEventListener("click", (e) => { if (!drop.contains(e.target) && !bell.contains(e.target)) drop.classList.remove("open"); });
}

/* ---------- Init ---------- */
wireSearch();
renderOnlineRail();
renderRecentlyViewed();
wireBell();
})();
