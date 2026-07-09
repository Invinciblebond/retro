// UTOPOLY — global auth handling (signup, login, logout, session, route protection)
// Classic script: relies on window.supabaseClient created by assets/supabaseClient.js
// Wrapped in an IIFE so `supabase` doesn't collide with the UMD library's global.
(() => {
const supabase = window.supabaseClient;

const page = document.body.dataset.page || "";
const DEFAULT_AVATAR = "https://i.ibb.co/3t5CJPD/3544ea05dc3cd161d076eefc393b2e62.jpg";

// SITE-WIDE RULE: every page except the landing page (index.html) and the
// public marketing pages (about, platforms) requires login.
const isLanding = page === "landing";
const PUBLIC_PAGES = ["landing", "about", "platforms"];
const isPublic = PUBLIC_PAGES.includes(page);

/* ---------- Injected styles for toasts, modal, meter, envelope ---------- */
const style = document.createElement("style");
style.textContent = `
  .toast-wrap { position:fixed; bottom:20px; right:20px; z-index:9999; display:flex; flex-direction:column; gap:10px; }
  .toast { display:flex; align-items:center; gap:10px; max-width:340px; padding:13px 16px; border-radius:12px;
    font-size:13px; font-weight:700; color:#fff; box-shadow:0 10px 30px rgba(0,0,0,.45);
    transform:translateX(120%); transition:transform .35s cubic-bezier(.2,.9,.3,1.2), opacity .3s; opacity:0; }
  .toast.show { transform:translateX(0); opacity:1; }
  .toast.err { background:#c62828; } .toast.ok { background:#2e7d32; } .toast.info { background:#37474f; }
  .auth-modal-overlay { position:fixed; inset:0; z-index:9998; background:rgba(0,0,0,.55); display:flex;
    align-items:center; justify-content:center; opacity:0; transition:opacity .25s; }
  .auth-modal-overlay.show { opacity:1; }
  .auth-modal { background:var(--card,#1c1c22); border:1px solid var(--line,#333); border-radius:16px; padding:34px 40px;
    text-align:center; transform:scale(.8); transition:transform .35s cubic-bezier(.2,1.4,.4,1); box-shadow:0 24px 70px rgba(0,0,0,.6); }
  .auth-modal-overlay.show .auth-modal { transform:scale(1); }
  .auth-modal h3 { font-size:18px; font-weight:800; margin:14px 0 4px; color:var(--txt,#fff); }
  .auth-modal p { font-size:13px; color:var(--muted,#9aa); }
  .check-svg circle { stroke:#4caf50; stroke-width:3; fill:none; stroke-dasharray:157; stroke-dashoffset:157; animation:draw .5s ease forwards; }
  .check-svg path { stroke:#4caf50; stroke-width:4; fill:none; stroke-linecap:round; stroke-linejoin:round;
    stroke-dasharray:40; stroke-dashoffset:40; animation:draw .35s .45s ease forwards; }
  @keyframes draw { to { stroke-dashoffset:0; } }
  .check-svg { animation:pop .45s .75s cubic-bezier(.2,2.2,.4,1); }
  @keyframes pop { 40% { transform:scale(1.14); } 100% { transform:scale(1); } }
  .pw-meter { height:5px; border-radius:3px; background:var(--line,#333); margin-top:7px; overflow:hidden; }
  .pw-meter > div { height:100%; width:0; border-radius:3px; transition:width .35s ease, background-color .35s ease; }
  .pw-label { font-size:11px; font-weight:700; margin-top:5px; min-height:14px; transition:color .3s; }
  .uname-status { font-size:11px; font-weight:700; margin-top:5px; min-height:14px; }
  .btn.loading { pointer-events:none; opacity:.75; }
  .spinner { display:inline-block; width:13px; height:13px; border:2px solid rgba(255,255,255,.35); border-top-color:#fff;
    border-radius:50%; margin-right:7px; vertical-align:-2px; animation:spin .7s linear infinite; }
  @keyframes spin { to { transform:rotate(360deg); } }
  .mail-panel { text-align:center; padding:8px 0 4px; }
  .mail-ico { font-size:44px; display:inline-block; animation:mailbounce 1.6s ease infinite; }
  @keyframes mailbounce { 0%,100% { transform:translateY(0); } 30% { transform:translateY(-9px) rotate(-4deg); } 55% { transform:translateY(0); } 70% { transform:translateY(-4px); } }
`;
document.head.appendChild(style);

/* ---------- Toasts ---------- */
function toast(msg, type = "info", ms = 4200) {
  let wrap = document.querySelector(".toast-wrap");
  if (!wrap) { wrap = document.createElement("div"); wrap.className = "toast-wrap"; document.body.appendChild(wrap); }
  const t = document.createElement("div");
  t.className = `toast ${type}`;
  t.innerHTML = msg;
  wrap.appendChild(t);
  requestAnimationFrame(() => t.classList.add("show"));
  setTimeout(() => { t.classList.remove("show"); setTimeout(() => t.remove(), 400); }, ms);
  return t;
}

/* ---------- Friendly error copy ---------- */
function friendly(raw = "") {
  const m = raw.toLowerCase();
  if (m.includes("invalid login credentials")) return "That combo didn't work — give it another shot.";
  if (m.includes("email not confirmed")) return "Almost there — confirm your email first (check your inbox).";
  if (m.includes("rate limit")) return "Whoa, slow down a sec — try again in a moment.";
  if (m.includes("network") || m.includes("fetch")) return "Can't reach the server — check your connection and retry.";
  if (m.includes("at least 8") || m.includes("password should")) return "Passwords need at least 8 characters.";
  return raw || "Something went sideways — try again.";
}

/* ---------- Success modal ---------- */
function successModal(title, sub, then, delay = 1400) {
  const ov = document.createElement("div");
  ov.className = "auth-modal-overlay";
  ov.innerHTML = `
    <div class="auth-modal">
      <svg class="check-svg" width="64" height="64" viewBox="0 0 56 56">
        <circle cx="28" cy="28" r="25"/><path d="M17 29 l8 8 l15 -16"/>
      </svg>
      <h3>${title}</h3><p>${sub}</p>
    </div>`;
  document.body.appendChild(ov);
  requestAnimationFrame(() => ov.classList.add("show"));
  if (then) setTimeout(then, delay);
}

/* ---------- Button loading state ---------- */
function setLoading(btn, on, label) {
  if (!btn) return;
  if (on) {
    btn.dataset.txt = btn.textContent;
    btn.classList.add("loading");
    btn.innerHTML = `<span class="spinner"></span>${label || "Working…"}`;
    if ("disabled" in btn) btn.disabled = true;
  } else {
    btn.classList.remove("loading");
    btn.textContent = btn.dataset.txt || btn.textContent;
    if ("disabled" in btn) btn.disabled = false;
  }
}

/* ---------- Post-auth destination (remember where they were going) ---------- */
function safeDest(v) { return v && /^[a-z0-9_-]+\.html(#[\w-]*)?$/i.test(v) ? v : null; }
function getDest() {
  return safeDest(new URLSearchParams(location.search).get("next"))
      || safeDest(sessionStorage.getItem("retro:next"))
      || "home.html";
}
function goDest() { const d = getDest(); sessionStorage.removeItem("retro:next"); location.href = d; }

/* ---------- Route protection ---------- */
async function guard() {
  const { data: { session } } = await supabase.auth.getSession();
  if (!isPublic && !session) {
    const here = location.pathname.split("/").pop() + (location.hash || "");
    sessionStorage.setItem("retro:next", here);
    location.replace(`index.html?auth=required&next=${encodeURIComponent(here)}`);
    return null;
  }
  if (isLanding && session) { goDest(); return session; }
  return session;
}

/* ---------- UI state ---------- */
function applyAuthUI(session) {
  const user = session?.user;
  document.body.classList.toggle("logged-in", !!user);

  const username = user?.user_metadata?.username || user?.email?.split("@")[0] || "";
  document.querySelectorAll(".avatar-head").forEach((el) => {
    el.title = username ? `Profile — ${username}` : "Profile";
    if (user) setAvatarImg(el, window.retroProfile?.avatar_url || DEFAULT_AVATAR, username);
    else if (username) el.textContent = username.slice(0, 2).toUpperCase();
  });

  const icons = document.querySelector(".hicons");
  if (icons && user && !document.getElementById("logout-btn")) {
    const btn = document.createElement("button");
    btn.id = "logout-btn";
    btn.textContent = "Log Out";
    btn.className = "btn ghost small";
    btn.style.marginLeft = "8px";
    icons.appendChild(btn);
  }

  document.querySelectorAll("[data-auth-status]").forEach((el) => {
    el.textContent = user ? `Logged in as ${username} (${user.email})` : "Logged out";
  });

  if (user) loadProfile(user);
}

/* ---------- Avatar rendering ---------- */
function setAvatarImg(el, url, username) {
  let img = el.querySelector("img.avatar-img");
  if (!img) {
    el.textContent = "";
    img = document.createElement("img");
    img.className = "avatar-img";
    img.alt = username || "Avatar";
    img.style.cssText = "width:100%;height:100%;object-fit:cover;border-radius:inherit;display:block;";
    img.onerror = () => { img.remove(); if (username) el.textContent = username.slice(0, 2).toUpperCase(); };
    el.appendChild(img);
  }
  if (img.src !== url) img.src = url;
}

/* ---------- Profile ---------- */
async function loadProfile(user) {
  let { data: profile, error } = await supabase
    .from("profiles")
    .select("username, user_number, retrobux, rix, is_admin, is_mod, display_name, wallet_balance, subscribed, subscription_type, avatar_url, avatar_snapshot_url, created_at")
    .eq("id", user.id)
    .single();
  if (error || !profile) return;

  // Session-level ban gate
  try {
    const { data: ban } = await supabase.rpc("check_my_ban");
    if (ban?.banned) {
      document.body.innerHTML = `<div style="min-height:100vh;display:flex;align-items:center;justify-content:center;padding:24px;">
        <div style="max-width:420px;text-align:center;background:var(--card,#1c1c22);border:1px solid var(--line,#333);border-radius:16px;padding:36px;">
          <div style="font-size:42px;">🚫</div>
          <h2 style="font-weight:900;margin:12px 0 6px;">Account suspended</h2>
          <p style="font-size:13.5px;color:var(--muted,#9aa);line-height:1.6;">${ban.permanent ? "This suspension is permanent." : `Suspended until ${new Date(ban.until).toLocaleString()}.`}${ban.reason ? `<br>Reason: ${ban.reason}` : ""}</p>
          <button class="btn primary" style="margin-top:18px;" onclick="window.retroAuth.logOut()">Log out</button>
        </div></div>`;
      return;
    }
  } catch {}

  if (!profile.avatar_url) {
    const { data: updated } = await supabase
      .from("profiles")
      .update({ avatar_url: DEFAULT_AVATAR, updated_at: new Date().toISOString() })
      .eq("id", user.id)
      .select("username, retrobux, wallet_balance, subscribed, subscription_type, avatar_url, avatar_snapshot_url, created_at")
      .single();
    profile = updated || { ...profile, avatar_url: DEFAULT_AVATAR };
  }
  window.retroProfile = profile;
  if (profile.is_admin) document.querySelectorAll(".admin-only").forEach((el) => { el.style.display = ""; });

  const uname = profile.username || user.email?.split("@")[0] || "";
  document.querySelectorAll(".avatar-head").forEach((el) => setAvatarImg(el, profile.avatar_url || DEFAULT_AVATAR, uname));

  const rbx = document.querySelector(".rbx");
  if (rbx) {
    const ric = '<span class="ric">R</span>';
    rbx.innerHTML = `${ric}${(profile.retrobux ?? 0).toLocaleString()} <span title="Rix" style="margin-left:10px;font-weight:800;"><span style="color:var(--accent2,#6cf);font-weight:900;">X</span> ${(profile.rix ?? 0).toLocaleString()}</span> <a class="getmore" href="shop.html">Get More</a>`;
    // Wallet balance chip — only shown when the user actually has a balance
    let wal = document.getElementById("wallet-chip");
    const bal = Number(profile.wallet_balance ?? 0);
    if (bal > 0) {
      if (!wal) {
        wal = document.createElement("a");
        wal.id = "wallet-chip";
        wal.href = "deposit.html";
        wal.title = "Wallet — deposit funds";
        wal.style.cssText = "display:inline-flex;align-items:center;gap:5px;margin-left:10px;font-size:12.5px;font-weight:800;color:var(--txt);text-decoration:none;";
        rbx.after(wal);
      }
      wal.innerHTML = `<svg width="16" height="14" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M2 3.5C2 2.12 3.12 1 4.5 1H16a2 2 0 0 1 2 2v1H4.5A1.5 1.5 0 0 1 3 2.5" stroke="var(--accent2,#6cf)" stroke-width="1.6"/>
          <rect x="2" y="4" width="16" height="11.5" rx="2" stroke="var(--accent2,#6cf)" stroke-width="1.6"/>
          <circle cx="14.2" cy="9.8" r="1.4" fill="var(--accent2,#6cf)"/>
        </svg>$${bal.toFixed(2)}`;
    } else if (wal) {
      wal.remove();
    }
  }

  if (profile.subscribed && profile.subscription_type && !document.getElementById("sub-badge")) {
    const avatar = document.querySelector(".avatar-head");
    if (avatar) {
      const b = document.createElement("span");
      b.id = "sub-badge";
      b.textContent = profile.subscription_type.toUpperCase();
      b.style.cssText = "font-size:9px;font-weight:900;letter-spacing:1px;padding:3px 8px;border-radius:10px;background:var(--accent);color:#fff;";
      avatar.before(b);
    }
  }

  const nameEl = document.getElementById("profile-username");
  if (nameEl) {
    // username links to the user's own profile (Profile removed from sidebar)
    nameEl.innerHTML = `<a href="${window.profileUrl?.({ username: uname, user_number: profile.user_number }) || "profile.html"}" style="color:inherit;text-decoration:none;">${uname}</a>${window.staffBadgeHTML?.(profile, "self") || ""}`;
    nameEl.style.cursor = "pointer";
  }
  const avEl = document.getElementById("profile-avatar");
  if (avEl) {
    avEl.src = profile.avatar_url || DEFAULT_AVATAR;
    avEl.alt = uname ? `${uname}'s profile picture` : "Profile picture";
  }
  const joinedEl = document.getElementById("profile-joined");
  if (joinedEl && profile.created_at) {
    joinedEl.textContent = new Date(profile.created_at).toLocaleDateString("en-US", { month: "short", year: "numeric" });
  }

  document.dispatchEvent(new CustomEvent("retro:profile", { detail: profile }));

  loadSocialCounts(user.id);
}

/* ---------- Real friend/follower counts (home page) ---------- */
async function loadSocialCounts(uid) {
  const friendEl = document.getElementById("friend-count");
  const followerEl = document.getElementById("follower-count");
  if (!friendEl && !followerEl) return;
  try {
    if (friendEl) {
      const { count, error } = await supabase
        .from("friendships")
        .select("id", { count: "exact", head: true })
        .eq("status", "accepted")
        .or(`requester.eq.${uid},addressee.eq.${uid}`);
      if (!error) friendEl.textContent = count ?? 0;
    }
    if (followerEl) {
      const { count, error } = await supabase
        .from("follows")
        .select("follower_id", { count: "exact", head: true })
        .eq("target_type", "user")
        .eq("target_id", uid);
      if (!error) followerEl.textContent = count ?? 0;
    }
  } catch (e) {
    console.warn("social counts failed", e);
  }
}

/* ---------- Profile updates (RLS: own row only) ---------- */
async function updateProfile(fields) {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error("Not logged in");
  const { data, error } = await supabase
    .from("profiles")
    .update({ ...fields, updated_at: new Date().toISOString() })
    .eq("id", user.id)
    .select()
    .single();
  if (error) throw error;
  window.retroProfile = data;
  return data;
}

/* ---------- Actions ---------- */
// referral attribution: ?ref=CODE is captured on any page and persisted through signup
{
  const ref = new URLSearchParams(location.search).get("ref");
  if (ref && /^[a-z0-9-]{4,24}$/i.test(ref)) localStorage.setItem("retro:ref", ref.toLowerCase());
}

async function signUp({ email, password, username, birthday, gender }) {
  const ref = new URLSearchParams(location.search).get("ref")?.toLowerCase() || localStorage.getItem("retro:ref") || null;
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { username, birthday, gender, ...(ref ? { ref } : {}) },
      emailRedirectTo: `${location.origin}/home.html`,
    },
  });
  if (error) throw error;
  localStorage.removeItem("retro:ref");
  return data;
}

async function logIn(identifier, password) {
  // Accepts an email OR a username
  let email = identifier;
  if (!identifier.includes("@")) {
    const { data, error: rpcErr } = await supabase.rpc("get_login_email", { p_username: identifier });
    if (rpcErr) throw rpcErr;
    if (data === "not_found") throw new Error("No account with that username.");
    if (data === "use_email") throw new Error("That account uses email login — enter your email address instead.");
    email = data;
  }
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) throw error;
  return data;
}

async function logOut() {
  await supabase.auth.signOut();
  location.href = "index.html";
}

/* ---------- Password strength ---------- */
function pwScore(p) {
  let s = 0;
  if (p.length >= 8) s++;
  if (p.length >= 12) s++;
  if (/[a-z]/.test(p) && /[A-Z]/.test(p)) s++;
  if (/\d/.test(p)) s++;
  if (/[^A-Za-z0-9]/.test(p)) s++;
  return Math.min(s, 4); // 0–4
}
const PW_STEPS = [
  { w: "12%", c: "#e2231a", t: "Too short" },
  { w: "35%", c: "#ef6c00", t: "Weak" },
  { w: "60%", c: "#f9a825", t: "Okay" },
  { w: "80%", c: "#8bc34a", t: "Good" },
  { w: "100%", c: "#4caf50", t: "Strong" },
];

/* ---------- Landing wiring ---------- */
function wireLanding() {
  const params = new URLSearchParams(location.search);
  if (params.get("auth") === "required") {
    const bar = document.createElement("div");
    bar.id = "auth-required-bar";
    bar.textContent = "🔒 You need to log in or sign up to access that page.";
    bar.style.cssText = "background:var(--accent);color:#fff;text-align:center;padding:10px 16px;font-size:13px;font-weight:700;";
    document.body.prepend(bar);
  }

  /* ----- Header quick login ----- */
  const head = document.querySelector(".land-login");
  let headEmail, headPass;
  if (head) {
    [headEmail, headPass] = head.querySelectorAll("input");
    headEmail.placeholder = "Username or Email";
    const btn = head.querySelector("a.btn");
    btn.addEventListener("click", async (e) => {
      e.preventDefault();
      if (!headEmail.value.trim() || !headPass.value) {
        toast("Enter your username (or email) and password to log in.", "info");
        return;
      }
      setLoading(btn, true, "Logging in…");
      try {
        await logIn(headEmail.value.trim(), headPass.value);
        successModal("Welcome back!", "Taking you in…", goDest, 1100);
      } catch (err) {
        setLoading(btn, false);
        toast(friendly(err.message), "err");
      }
    });
    // Enter anywhere in the quick-login = click Log In
    [headEmail, headPass].forEach((inp) =>
      inp.addEventListener("keydown", (e) => { if (e.key === "Enter") { e.preventDefault(); btn.click(); } }));
  }

  /* ----- Signup card ----- */
  const form = document.querySelector(".signup-card");
  if (!form) return;
  form.onsubmit = null;

  // Optional email lives in a small dropdown at the BOTTOM of the form.
  // Left empty, the account gets an internal placeholder address and the user
  // logs in with username + password.
  if (!form.querySelector('input[type="email"]')) {
    const det = document.createElement("details");
    det.id = "email-optional";
    det.style.cssText = "margin-top:14px;";
    det.innerHTML = `
      <summary style="cursor:pointer;font-size:12px;font-weight:800;color:var(--muted);letter-spacing:.5px;">
        ＋ Add an email (optional)
      </summary>
      <label>Email</label>
      <input type="email" placeholder="you@example.com — for account recovery">
      <p style="font-size:11px;color:var(--muted);margin-top:6px;line-height:1.5;">
        No email needed to play — you'll log in with your username. Adding one just helps you recover your account later.
      </p>`;
    const submit = form.querySelector('button[type="submit"]');
    submit.before(det);
  }

  // Enter in any signup field (including selects) submits the form
  form.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && e.target.tagName !== "BUTTON") { e.preventDefault(); form.requestSubmit(); }
  });

  const emailIn = form.querySelector('input[type="email"]');
  const userIn = form.querySelector('input[type="text"]');
  const passIn = form.querySelector('input[type="password"]');
  const submitBtn = form.querySelector('button[type="submit"]');

  // Live password strength meter
  const meter = document.createElement("div");
  meter.className = "pw-meter";
  meter.innerHTML = "<div></div>";
  const pwLabel = document.createElement("div");
  pwLabel.className = "pw-label";
  passIn.after(meter, pwLabel);
  passIn.addEventListener("input", () => {
    const p = passIn.value;
    if (!p) { meter.firstChild.style.width = "0"; pwLabel.textContent = ""; return; }
    const step = PW_STEPS[p.length < 8 ? 0 : pwScore(p)];
    meter.firstChild.style.width = step.w;
    meter.firstChild.style.backgroundColor = step.c;
    pwLabel.textContent = step.t;
    pwLabel.style.color = step.c;
  });

  // Debounced username availability check
  const unameStatus = document.createElement("div");
  unameStatus.className = "uname-status";
  userIn.after(unameStatus);
  let unameTimer, unameOk = null;
  userIn.addEventListener("input", () => {
    clearTimeout(unameTimer);
    unameOk = null;
    const v = userIn.value.trim();
    if (v.length < 3) { unameStatus.textContent = v ? "At least 3 characters." : ""; unameStatus.style.color = "var(--muted)"; return; }
    unameStatus.textContent = "Checking…";
    unameStatus.style.color = "var(--muted)";
    unameTimer = setTimeout(async () => {
      try {
        const { data, error } = await supabase.rpc("username_available", { name_to_check: v });
        if (error) throw error;
        unameOk = !!data;
        unameStatus.textContent = data ? "✓ Username available" : "✗ Taken — try another";
        unameStatus.style.color = data ? "#4caf50" : "#e2231a";
      } catch { unameStatus.textContent = ""; }
    }, 550);
  });

  // "Email needs verifying" panel (animated envelope + one-click resend)
  function showMailPanel(email) {
    const panel = document.createElement("div");
    panel.className = "mail-panel";
    panel.innerHTML = `
      <span class="mail-ico">📬</span>
      <h3 style="font-size:16px;font-weight:800;margin:10px 0 4px;">Account created!</h3>
      <p style="font-size:12.5px;color:var(--muted);margin-bottom:12px;">We sent a confirmation link to <b>${email}</b>.<br>Click it and you're in.</p>
      <button type="button" class="btn ghost small" id="resend-btn">Resend email</button>
      <div class="uname-status" id="resend-status"></div>`;
    form.innerHTML = "";
    form.appendChild(panel);
    document.getElementById("resend-btn").addEventListener("click", async (e) => {
      const b = e.currentTarget;
      setLoading(b, true, "Sending…");
      const { error } = await supabase.auth.resend({ type: "signup", email });
      setLoading(b, false);
      const st = document.getElementById("resend-status");
      st.textContent = error ? friendly(error.message) : "Sent! Give it a minute.";
      st.style.color = error ? "#e2231a" : "#4caf50";
    });
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    let email = emailIn.value.trim();
    const username = userIn.value.trim();
    const password = passIn.value;
    const [m, d, y] = form.querySelectorAll(".bday select");
    const gender = form.querySelectorAll("select")[3]?.value;

    if (username.length < 3 || !/^[a-z0-9_]+$/i.test(username))
      return toast("Usernames need at least 3 characters (letters, numbers, _ only).", "err");
    if (password.length < 8) return toast("Passwords need at least 8 characters.", "err");
    if (unameOk === false) return toast("That username is taken — pick another first.", "err");
    // No email? No problem — generate an internal account address; they log in with their username.
    if (!email) email = `${username.toLowerCase()}@users.utopoly.com`;

    setLoading(submitBtn, true, "Creating account…");
    try {
      const { user, session } = await signUp({
        email, password, username,
        birthday: `${m.value} ${d.value} ${y.value}`,
        gender,
      });

      // Duplicate account: Supabase returns a user with no identities for existing emails
      if (user && Array.isArray(user.identities) && user.identities.length === 0) {
        setLoading(submitBtn, false);
        const t = toast(`Looks like <b>${email}</b> already has an account. <a href="#" id="login-instead" style="color:#fff;text-decoration:underline;">Log in instead?</a>`, "info", 8000);
        t.querySelector("#login-instead")?.addEventListener("click", (ev) => {
          ev.preventDefault();
          if (headEmail) { headEmail.value = email; headPass?.focus(); }
          window.scrollTo({ top: 0, behavior: "smooth" });
        });
        return;
      }

      // A/B analytics only — fire-and-forget, never affects signup flow (assets/ab.js)
      try { window.retroAB?.recordSignup?.(); } catch {}

      if (session) {
        // Auto-login: no email gate. Verification (if pending) nudges later, never blocks.
        successModal(`Welcome, ${username || "friend"}!`, "Your account is ready — jumping in…", goDest, 1600);
      } else {
        // No session returned — try logging in directly with the credentials they just chose.
        try {
          await logIn(email, password);
          successModal(`Welcome, ${username || "friend"}!`, "Your account is ready — jumping in…", goDest, 1600);
        } catch {
          // Server insists on email confirmation — show it, don't just say it.
          setLoading(submitBtn, false);
          showMailPanel(email);
        }
      }
    } catch (err) {
      setLoading(submitBtn, false);
      toast(friendly(err.message), "err");
    }
  });
}

/* ---------- Soft verification nudge (auto-login mode) ---------- */
async function verifyNudge(session) {
  const user = session?.user;
  if (!user || user.email_confirmed_at || sessionStorage.getItem("retro:nudged")) return;
  if (user.email?.endsWith("@users.utopoly.com")) return; // no real email — nothing to verify
  sessionStorage.setItem("retro:nudged", "1");
  setTimeout(() => {
    const t = toast(`📬 Quick thing — verify <b>${user.email}</b> when you get a sec. <a href="#" id="nudge-resend" style="color:#fff;text-decoration:underline;">Resend link</a>`, "info", 9000);
    t.querySelector("#nudge-resend")?.addEventListener("click", async (ev) => {
      ev.preventDefault();
      await supabase.auth.resend({ type: "signup", email: user.email });
      toast("Verification email sent!", "ok");
    });
  }, 4000);
}

/* ---------- Init ---------- */
(async () => {
  const session = await guard();
  applyAuthUI(session);
  if (isLanding) wireLanding();
  else verifyNudge(session);
})();

// Logout (header is injected by retro.js — use delegation)
document.addEventListener("click", (e) => {
  if (e.target?.id === "logout-btn") logOut();
});

/* ---------- Avatar dropdown menu (Settings / Buy Retrobux / Convert Rix) ---------- */
const avStyle = document.createElement("style");
avStyle.textContent = `
  .av-menu { position:fixed; z-index:9600; width:200px; background:var(--card,#1c1c22); border:1px solid var(--line,#333);
    border-radius:12px; box-shadow:0 16px 44px rgba(0,0,0,.55); overflow:hidden; display:none; }
  .av-menu.open { display:block; }
  .av-menu a { display:flex; align-items:center; gap:10px; padding:11px 14px; font-size:13px; font-weight:700;
    color:var(--txt,#eee); text-decoration:none; border-bottom:1px solid var(--line,#333); }
  .av-menu a:last-child { border-bottom:none; }
  .av-menu a:hover { background:rgba(255,255,255,.06); }
  .av-menu .mi { width:20px; text-align:center; }`;
document.head.appendChild(avStyle);
let avMenu = null;
function buildAvMenu() {
  avMenu = document.createElement("div");
  avMenu.className = "av-menu";
  avMenu.innerHTML = `
    <a href="profile.html"><span class="mi">◉</span><span data-i18n="menu.profile">My Profile</span></a>
    <a href="settings.html"><span class="mi">⚙</span><span data-i18n="menu.settings">Settings</span></a>
    <a href="shop.html#retrobux"><span class="mi">💰</span><span data-i18n="menu.buyRetrobux">Buy Retrobux</span></a>
    <a href="shop.html#convert"><span class="mi">⇄</span><span data-i18n="menu.convertRix">Convert Rix</span></a>`;
  document.body.appendChild(avMenu);
}
document.addEventListener("click", (e) => {
  const head = e.target.closest?.(".avatar-head");
  if (head) {
    e.preventDefault();
    if (!avMenu) buildAvMenu();
    const open = avMenu.classList.toggle("open");
    if (open) {
      const r = head.getBoundingClientRect();
      avMenu.style.top = `${r.bottom + 8}px`;
      avMenu.style.right = `${Math.max(8, innerWidth - r.right - 10)}px`;
    }
  } else if (avMenu && !avMenu.contains(e.target)) {
    avMenu.classList.remove("open");
  }
});

/* ---------- Login history: record sign-ins ---------- */
supabase.auth.onAuthStateChange((event) => {
  if (event === "SIGNED_IN") supabase.rpc("record_login", { p_agent: navigator.userAgent }).then(() => {});
});

// Keep UI in sync across tabs / token refresh / sign-out
let redirected = false;
supabase.auth.onAuthStateChange((_event, newSession) => {
  applyAuthUI(newSession);
  if (!isPublic && !newSession) location.replace("index.html?auth=required");
  // Landing auto-login: covers the session-restore race where getSession()
  // resolves before the stored session is hydrated, plus OAuth callbacks.
  if (isLanding && newSession && !redirected) { redirected = true; goDest(); }
});

// Back/forward cache: if the landing page is restored from bfcache while a
// session exists (e.g. user logged in, then pressed Back), re-run the redirect.
window.addEventListener("pageshow", async (e) => {
  if (!e.persisted || !isLanding) return;
  const { data: { session } } = await supabase.auth.getSession();
  if (session && !redirected) { redirected = true; goDest(); }
});

window.retroAuth = { supabase, logIn, logOut, signUp, updateProfile, toast, friendly };
})();
