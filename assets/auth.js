// Utopoly — global auth: signup, login, session persistence, route protection.
// Classic script; relies on window.supabaseClient from assets/supabaseClient.js.
// Wrapped in an IIFE so `supabase` doesn't collide with the UMD library global.
(() => {
const supabase = window.supabaseClient;
const page = document.body.dataset.page || "app";

if (!supabase) {
  // Your tracker data lives in your account, so a page that can't reach
  // Supabase must not render as if you were signed in.
  console.error("Utopoly auth: no Supabase client");
  if (page !== "landing") {
    document.documentElement.innerHTML = `<body style="margin:0;background:#121212;color:#ededed;
      font-family:Inter,system-ui,sans-serif;min-height:100vh;display:grid;place-items:center;padding:24px">
      <div style="max-width:380px;text-align:center">
        <div style="font-size:38px;margin-bottom:12px">📡</div>
        <h1 style="font-size:18px;font-weight:700;margin:0 0 8px">Can't reach your account</h1>
        <p style="font-size:13.5px;line-height:1.6;color:#a0a0a0;margin:0 0 18px">
          Utopoly couldn't load its connection to Supabase — usually a dropped network or a blocker
          stopping the CDN. Your data is safe; the page just won't open without it.
        </p>
        <button onclick="location.reload()" style="padding:9px 18px;border-radius:8px;border:none;
          background:#3ecf8e;color:#0b0b0b;font:inherit;font-size:13px;font-weight:700;cursor:pointer">Retry</button>
      </div></body>`;
  }
  return;
}

// SITE-WIDE RULE: index.html (the landing page) is public. Everything else
// requires a session.
const isLanding = page === "landing";
const PUBLIC_PAGES = ["landing", "reset"];
const isPublic = PUBLIC_PAGES.includes(page);

const HOME = "Log.html";
// New username-only accounts get this internal address. The former
// aurahealth domain is still recognised so existing accounts keep working.
const PLACEHOLDER_DOMAIN = "users.utopoly.local";
const PLACEHOLDER_DOMAINS = ["users.utopoly.local", "users.aurahealth.local"];
function isPlaceholderEmail(addr) {
  return PLACEHOLDER_DOMAINS.some((d) => String(addr || "").endsWith("@" + d));
}

/* ---------- Injected styles: toasts, modal, password meter ---------- */
const style = document.createElement("style");
style.textContent = `
  .toast-wrap{position:fixed;bottom:20px;right:20px;z-index:9999;display:flex;flex-direction:column;gap:10px}
  .toast{display:flex;align-items:center;gap:10px;max-width:340px;padding:12px 15px;border-radius:8px;
    font-size:13px;font-weight:600;line-height:1.45;color:#ededed;background:#1c1c1c;
    border:1px solid #2e2e2e;border-left-width:3px;box-shadow:0 10px 30px rgba(0,0,0,.55);
    transform:translateX(120%);opacity:0;transition:transform .35s cubic-bezier(.2,.9,.3,1.2),opacity .3s}
  .toast.show{transform:translateX(0);opacity:1}
  .toast.err{border-left-color:#f56565}
  .toast.ok{border-left-color:#3ecf8e}
  .toast.info{border-left-color:#3ecfd5}
  .toast a{color:#3ecf8e;text-decoration:underline}
  .auth-modal-overlay{position:fixed;inset:0;z-index:9998;background:rgba(0,0,0,.72);
    backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);
    display:flex;align-items:center;justify-content:center;opacity:0;transition:opacity .25s}
  .auth-modal-overlay.show{opacity:1}
  .auth-modal{background:#171717;border:1px solid #2e2e2e;border-radius:12px;padding:32px 40px;
    text-align:center;transform:scale(.85);transition:transform .35s cubic-bezier(.2,1.4,.4,1);
    box-shadow:0 24px 70px rgba(0,0,0,.65)}
  .auth-modal-overlay.show .auth-modal{transform:scale(1)}
  .auth-modal h3{font-size:17px;font-weight:700;margin:14px 0 4px;color:#ededed}
  .auth-modal p{font-size:13px;color:#a0a0a0}
  .check-svg circle{stroke:#3ecf8e;stroke-width:3;fill:none;stroke-dasharray:157;stroke-dashoffset:157;animation:auraDraw .5s ease forwards}
  .check-svg path{stroke:#3ecf8e;stroke-width:4;fill:none;stroke-linecap:round;stroke-linejoin:round;
    stroke-dasharray:40;stroke-dashoffset:40;animation:auraDraw .35s .45s ease forwards}
  @keyframes auraDraw{to{stroke-dashoffset:0}}
  .check-svg{animation:auraPop .45s .75s cubic-bezier(.2,2.2,.4,1)}
  @keyframes auraPop{40%{transform:scale(1.14)}100%{transform:scale(1)}}
  .pw-meter{height:4px;border-radius:2px;background:#2e2e2e;margin-top:7px;overflow:hidden}
  .pw-meter>div{height:100%;width:0;border-radius:2px;transition:width .35s ease,background-color .35s ease}
  .pw-label,.uname-status{font-size:11px;font-weight:600;margin-top:5px;min-height:14px;transition:color .3s}
  .spinner{display:inline-block;width:12px;height:12px;border:2px solid rgba(255,255,255,.3);
    border-top-color:currentColor;border-radius:50%;margin-right:6px;vertical-align:-2px;animation:auraSpin .7s linear infinite}
  @keyframes auraSpin{to{transform:rotate(360deg)}}
  .mail-panel{text-align:center;padding:8px 0 4px}
  .mail-ico{font-size:42px;display:inline-block;animation:auraMail 1.6s ease infinite}
  @keyframes auraMail{0%,100%{transform:translateY(0)}30%{transform:translateY(-9px) rotate(-4deg)}55%{transform:translateY(0)}70%{transform:translateY(-4px)}}
  .auth-gate{position:fixed;inset:0;z-index:9997;background:#121212;display:flex;align-items:center;justify-content:center}
  .auth-gate .spinner{width:22px;height:22px;border-width:2px;color:#3ecf8e;margin:0}
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
  if (m.includes("rate limit") || m.includes("too many")) return "Slow down a sec — try again in a moment.";
  if (m.includes("network") || m.includes("failed to fetch")) return "Can't reach the server — check your connection and retry.";
  if (m.includes("at least") || m.includes("password should")) return "Passwords need at least 8 characters.";
  if (m.includes("already registered")) return "That email already has an account — log in instead.";
  return raw || "Something went sideways — try again.";
}

/* ---------- Success modal ---------- */
function successModal(title, sub, then, delay = 1300) {
  const ov = document.createElement("div");
  ov.className = "auth-modal-overlay";
  ov.innerHTML = `
    <div class="auth-modal">
      <svg class="check-svg" width="60" height="60" viewBox="0 0 56 56" aria-hidden="true">
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

/* ---------- Post-auth destination (remember where they were headed) ---------- */
function safeDest(v) { return v && /^[A-Za-z0-9_-]+\.html(#[\w-]*)?$/.test(v) ? v : null; }
function getDest() {
  return safeDest(new URLSearchParams(location.search).get("next"))
      || safeDest(sessionStorage.getItem("aura:next"))
      || HOME;
}
function goDest() { const d = getDest(); sessionStorage.removeItem("aura:next"); location.href = d; }

/* ---------- Route protection ---------- */
// Protected pages start hidden so their contents never flash before the
// session check resolves.
let gate = null;
if (!isPublic) {
  gate = document.createElement("div");
  gate.className = "auth-gate";
  gate.innerHTML = '<span class="spinner"></span>';
  const mount = () => document.body.appendChild(gate);
  if (document.body) mount(); else addEventListener("DOMContentLoaded", mount);
}
function dropGate() { gate?.remove(); gate = null; }

async function guard() {
  const { data: { session } } = await supabase.auth.getSession();
  if (!isPublic && !session) {
    const here = location.pathname.split("/").pop() + (location.hash || "");
    sessionStorage.setItem("aura:next", here);
    location.replace(`index.html?auth=required&next=${encodeURIComponent(here)}`);
    return null;
  }
  if (isLanding && session && !isRecovery()) { goDest(); return session; }
  dropGate();
  return session;
}

/* ---------- Profile (optional — degrades if the table isn't set up yet) ---------- */
async function loadProfile(user) {
  let profile = null;
  try {
    const { data, error } = await supabase
      .from("profiles")
      .select("id, username, display_name, avatar_url, created_at")
      .eq("id", user.id)
      .maybeSingle();
    if (!error) profile = data;
  } catch { /* table missing — fall back to auth metadata */ }

  if (!profile) {
    profile = {
      id: user.id,
      username: user.user_metadata?.username || user.email?.split("@")[0] || "you",
      display_name: user.user_metadata?.display_name || null,
      avatar_url: null,
      created_at: user.created_at,
    };
  }
  window.auraProfile = profile;
  document.dispatchEvent(new CustomEvent("aura:profile", { detail: profile }));
  return profile;
}

/* ---------- UI state ---------- */
async function applyAuthUI(session) {
  const user = session?.user;
  document.body.classList.toggle("logged-in", !!user);
  if (!user) {
    document.querySelectorAll("[data-user-name]").forEach((el) => { el.textContent = ""; });
    return;
  }
  const profile = await loadProfile(user);
  const name = profile.display_name || profile.username;
  const realEmail = isPlaceholderEmail(user.email) ? "" : (user.email || "");

  document.querySelectorAll("[data-user-name]").forEach((el) => { el.textContent = name; });
  document.querySelectorAll("[data-user-handle]").forEach((el) => { el.textContent = "@" + profile.username; });
  document.querySelectorAll("[data-user-email]").forEach((el) => { el.textContent = realEmail || "No email on file"; });
  document.querySelectorAll("[data-user-initials]").forEach((el) => { el.textContent = initials(name); });
  document.querySelectorAll("[data-user-avatar]").forEach((el) => paintAvatar(el, profile.avatar_url, name));
  document.querySelectorAll("[data-user-joined]").forEach((el) => {
    if (profile.created_at)
      el.textContent = new Date(profile.created_at).toLocaleDateString("en-US", { month: "short", year: "numeric" });
  });
}

/* ---------- Actions ---------- */
async function signUp({ email, password, username, displayName }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { username, display_name: displayName || username },
      emailRedirectTo: `${location.origin}${location.pathname.replace(/[^/]*$/, "")}${HOME}`,
    },
  });
  if (error) throw error;
  return data;
}

async function logIn(identifier, password) {
  // Accepts an email OR a username.
  let email = identifier;
  if (!identifier.includes("@")) {
    try {
      const { data, error } = await supabase.rpc("get_login_email", { p_username: identifier });
      if (error) throw error;
      if (data === "not_found") throw new Error("No account with that username.");
      if (data === "use_email") throw new Error("That account signed up with an email — enter the email address instead.");
      email = data;
    } catch (err) {
      // RPC not installed yet — fall back to the placeholder address pattern.
      if (/function|does not exist|schema cache/i.test(err.message || "")) {
        email = `${identifier.toLowerCase()}@${PLACEHOLDER_DOMAIN}`;
      } else {
        throw err;
      }
    }
  }
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) throw error;
  return data;
}

async function logOut() {
  try { if (window.auraSync) await window.auraSync.push(); } catch {}
  await supabase.auth.signOut();
  sessionStorage.removeItem("aura:next");
  sessionStorage.removeItem("aura.synced");
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
  return Math.min(s, 4);
}
const PW_STEPS = [
  { w: "12%", c: "#f56565", t: "Too short" },
  { w: "35%", c: "#f56565", t: "Weak" },
  { w: "60%", c: "#f5a623", t: "Okay" },
  { w: "80%", c: "#24b47e", t: "Good" },
  { w: "100%", c: "#3ecf8e", t: "Strong" },
];

/* ---------- Avatar rendering ---------- */
function initials(name) {
  const parts = String(name || "").trim().split(/[\s_-]+/).filter(Boolean);
  if (!parts.length) return "··";
  return (parts.length === 1 ? parts[0].slice(0, 2) : parts[0][0] + parts[1][0]).toUpperCase();
}

// Paints either the uploaded image or an initials fallback into any element.
function paintAvatar(el, url, name) {
  const ini = initials(name);
  if (!url) { el.textContent = ini; el.style.backgroundImage = ""; el.classList.remove("has-img"); return; }
  const img = new Image();
  img.onload = () => {
    el.textContent = "";
    el.style.backgroundImage = `url("${url}")`;
    el.style.backgroundSize = "cover";
    el.style.backgroundPosition = "center";
    el.classList.add("has-img");
  };
  img.onerror = () => { el.textContent = ini; el.style.backgroundImage = ""; el.classList.remove("has-img"); };
  img.src = url;
}

/* ---------- Profile writes ---------- */
async function updateProfile(fields) {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error("Not signed in.");
  const { data, error } = await supabase
    .from("profiles")
    .update(fields)
    .eq("id", user.id)
    .select("id, username, display_name, avatar_url, created_at")
    .single();
  if (error) throw error;
  window.auraProfile = data;
  document.dispatchEvent(new CustomEvent("aura:profile", { detail: data }));
  return data;
}

// Username changes go through an RPC so uniqueness is enforced server-side.
async function setUsername(name) {
  const { data, error } = await supabase.rpc("set_my_username", { new_name: name });
  if (error) throw error;
  if (window.auraProfile) window.auraProfile.username = data;
  return data;
}

const AVATAR_MAX = 2 * 1024 * 1024; // 2 MB
async function uploadAvatar(file) {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error("Not signed in.");
  if (!/^image\//.test(file.type)) throw new Error("That file isn't an image.");
  if (file.size > AVATAR_MAX) throw new Error("Images need to be under 2 MB.");

  const ext = (file.name.split(".").pop() || "png").toLowerCase().replace(/[^a-z0-9]/g, "") || "png";
  const path = `${user.id}/avatar.${ext}`;

  const { error: upErr } = await supabase.storage
    .from("avatars")
    .upload(path, file, { upsert: true, cacheControl: "3600", contentType: file.type });
  if (upErr) throw upErr;

  const { data: pub } = supabase.storage.from("avatars").getPublicUrl(path);
  // cache-bust so a re-upload to the same path shows immediately
  const url = `${pub.publicUrl}?v=${Date.now()}`;
  await updateProfile({ avatar_url: url });
  return url;
}

async function removeAvatar() {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error("Not signed in.");
  const { data: files } = await supabase.storage.from("avatars").list(user.id);
  if (files?.length) {
    await supabase.storage.from("avatars").remove(files.map((f) => `${user.id}/${f.name}`));
  }
  await updateProfile({ avatar_url: null });
}

/* ---------- Password ---------- */
function resetRedirect() {
  return `${location.origin}${location.pathname.replace(/[^/]*$/, "")}reset.html`;
}

async function requestPasswordReset(email) {
  const { error } = await supabase.auth.resetPasswordForEmail(email, { redirectTo: resetRedirect() });
  if (error) throw error;
}

async function updatePassword(newPassword) {
  if (!newPassword || newPassword.length < 8) throw new Error("Passwords need at least 8 characters.");
  const { error } = await supabase.auth.updateUser({ password: newPassword });
  if (error) throw error;
}

// Supabase puts `type=recovery` in the URL hash when arriving from a reset link.
function isRecovery() {
  return /type=recovery/.test(location.hash) || new URLSearchParams(location.search).get("type") === "recovery";
}

/* ---------- Session helpers ---------- */
async function getSession() {
  const { data: { session } } = await supabase.auth.getSession();
  return session;
}

/* ---------- Landing wiring ---------- */
function wireLanding() {
  if (new URLSearchParams(location.search).get("auth") === "required") {
    toast("You need an account to open that page — log in or sign up below.", "info", 6000);
  }

  /* ----- Log in ----- */
  const loginForm = document.getElementById("login-form");
  if (loginForm) {
    const id = loginForm.querySelector('[name="identifier"]');
    const pw = loginForm.querySelector('[name="password"]');
    const btn = loginForm.querySelector('button[type="submit"]');
    loginForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      if (!id.value.trim() || !pw.value) return toast("Enter your username (or email) and password.", "info");
      setLoading(btn, true, "Signing in…");
      try {
        await logIn(id.value.trim(), pw.value);
        successModal("Welcome back", "Taking you in…", goDest, 1100);
      } catch (err) {
        setLoading(btn, false);
        toast(friendly(err.message), "err");
      }
    });
  }

  /* ----- Sign up ----- */
  const form = document.getElementById("signup-form");
  if (!form) return;

  const emailIn = form.querySelector('[name="email"]');
  const userIn = form.querySelector('[name="username"]');
  const passIn = form.querySelector('[name="password"]');
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

  // Debounced username availability check (silent no-op if the RPC is absent)
  const unameStatus = document.createElement("div");
  unameStatus.className = "uname-status";
  userIn.after(unameStatus);
  let unameTimer, unameOk = null;
  userIn.addEventListener("input", () => {
    clearTimeout(unameTimer);
    unameOk = null;
    const v = userIn.value.trim();
    if (v.length < 3) {
      unameStatus.textContent = v ? "At least 3 characters." : "";
      unameStatus.style.color = "#707070";
      return;
    }
    unameStatus.textContent = "Checking…";
    unameStatus.style.color = "#707070";
    unameTimer = setTimeout(async () => {
      try {
        const { data, error } = await supabase.rpc("username_available", { name_to_check: v });
        if (error) throw error;
        unameOk = !!data;
        unameStatus.textContent = data ? "✓ Username available" : "✗ Taken — try another";
        unameStatus.style.color = data ? "#3ecf8e" : "#f56565";
      } catch { unameStatus.textContent = ""; }
    }, 550);
  });

  // ----- Avatar picker: preview now, upload once the account exists -----
  let pendingAvatar = null;
  const avatarIn = form.querySelector('[name="avatar"]');
  const avatarPreview = document.getElementById("avatar-preview");
  const avatarClear = document.getElementById("avatar-clear");

  function refreshPreview() {
    if (!avatarPreview) return;
    if (pendingAvatar) {
      const reader = new FileReader();
      reader.onload = () => {
        avatarPreview.style.backgroundImage = `url("${reader.result}")`;
        avatarPreview.classList.add("has-img");
        avatarPreview.textContent = "";
      };
      reader.readAsDataURL(pendingAvatar);
      if (avatarClear) avatarClear.hidden = false;
    } else {
      avatarPreview.style.backgroundImage = "";
      avatarPreview.classList.remove("has-img");
      avatarPreview.textContent = initials(
        form.querySelector('[name="display_name"]')?.value || userIn.value || ""
      );
      if (avatarClear) avatarClear.hidden = true;
    }
  }

  if (avatarIn) {
    avatarIn.addEventListener("change", () => {
      const f = avatarIn.files?.[0];
      if (!f) { pendingAvatar = null; return refreshPreview(); }
      if (!/^image\//.test(f.type)) { toast("That file isn't an image.", "err"); avatarIn.value = ""; return; }
      if (f.size > AVATAR_MAX) { toast("Images need to be under 2 MB.", "err"); avatarIn.value = ""; return; }
      pendingAvatar = f;
      refreshPreview();
    });
  }
  avatarClear?.addEventListener("click", () => {
    pendingAvatar = null;
    if (avatarIn) avatarIn.value = "";
    refreshPreview();
  });
  // initials preview tracks whatever they're typing
  [userIn, form.querySelector('[name="display_name"]')].forEach((el) =>
    el?.addEventListener("input", () => { if (!pendingAvatar) refreshPreview(); }));

  async function flushPendingAvatar() {
    if (!pendingAvatar) return;
    try { await uploadAvatar(pendingAvatar); }
    catch (err) { console.warn("avatar upload failed", err); toast("Account made, but the avatar didn't upload — add it from your dashboard.", "info", 6000); }
  }

  // ----- Forgot password -----
  const forgotForm = document.getElementById("forgot-form");
  if (forgotForm) {
    const fEmail = forgotForm.querySelector('[name="email"]');
    const fBtn = forgotForm.querySelector('button[type="submit"]');
    forgotForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const addr = fEmail.value.trim();
      if (!addr) return toast("Enter the email on your account.", "info");
      setLoading(fBtn, true, "Sending…");
      try {
        await requestPasswordReset(addr);
        setLoading(fBtn, false);
        // Deliberately identical whether or not the address exists.
        toast(`If an account uses <b>${addr}</b>, a reset link is on its way.`, "ok", 7000);
        forgotForm.reset();
      } catch (err) {
        setLoading(fBtn, false);
        toast(friendly(err.message), "err");
      }
    });
  }

  // "Confirm your email" panel with a one-click resend
  function showMailPanel(email) {
    form.innerHTML = `
      <div class="mail-panel">
        <span class="mail-ico">📬</span>
        <h3 style="font-size:16px;font-weight:700;margin:10px 0 4px;">Account created</h3>
        <p style="font-size:12.5px;color:var(--txt-2);margin-bottom:14px;line-height:1.6;">
          We sent a confirmation link to <b>${email}</b>.<br>Click it and you're in.
        </p>
        <button type="button" class="btn ghost small" id="resend-btn">Resend email</button>
        <div class="uname-status" id="resend-status"></div>
      </div>`;
    document.getElementById("resend-btn").addEventListener("click", async (e) => {
      const b = e.currentTarget;
      setLoading(b, true, "Sending…");
      const { error } = await supabase.auth.resend({ type: "signup", email });
      setLoading(b, false);
      const st = document.getElementById("resend-status");
      st.textContent = error ? friendly(error.message) : "Sent — give it a minute.";
      st.style.color = error ? "#f56565" : "#3ecf8e";
    });
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    let email = emailIn.value.trim();
    const username = userIn.value.trim();
    const password = passIn.value;
    const displayName = form.querySelector('[name="display_name"]')?.value.trim() || "";

    if (username.length < 3 || !/^[a-z0-9_]+$/i.test(username))
      return toast("Usernames need 3+ characters (letters, numbers and _ only).", "err");
    if (password.length < 8) return toast("Passwords need at least 8 characters.", "err");
    if (unameOk === false) return toast("That username is taken — pick another first.", "err");
    // No email? Generate an internal address; they log in with their username.
    if (!email) email = `${username.toLowerCase()}@${PLACEHOLDER_DOMAIN}`;

    setLoading(submitBtn, true, "Creating account…");
    try {
      const { user, session } = await signUp({ email, password, username, displayName });

      // Supabase returns a user with zero identities when the email already exists
      if (user && Array.isArray(user.identities) && user.identities.length === 0) {
        setLoading(submitBtn, false);
        return toast(`<b>${email}</b> already has an account — log in instead.`, "info", 7000);
      }

      const welcome = displayName || username;
      if (session) {
        await flushPendingAvatar();
        successModal(`Welcome, ${welcome}`, "Your account is ready — jumping in…", goDest, 1500);
      } else {
        // No session returned: try signing in with the credentials just chosen.
        try {
          await logIn(email, password);
          await flushPendingAvatar();
          successModal(`Welcome, ${welcome}`, "Your account is ready — jumping in…", goDest, 1500);
        } catch {
          setLoading(submitBtn, false);
          showMailPanel(email); // the project requires email confirmation
        }
      }
    } catch (err) {
      setLoading(submitBtn, false);
      toast(friendly(err.message), "err");
    }
  });
}

/* ---------- Floating dashboard pill (tool pages only) ---------- */
// The tracker pages have their own full-screen layouts, so instead of editing
// each one we drop in a small fixed control: back to the dashboard, and log out.
function mountPill() {
  // Not on the landing page, the dashboard, the recovery page, or anywhere
  // the shared sidebar already provides these controls.
  if (isLanding || page === "dashboard" || page === "reset") return;
  if (document.getElementById("aura-sidebar")) return;
  if (document.getElementById("aura-pill")) return;
  const css = document.createElement("style");
  css.textContent = `
    #aura-pill{position:fixed;left:14px;bottom:14px;z-index:9500;display:flex;align-items:center;gap:2px;
      padding:4px;border-radius:999px;background:rgba(23,23,23,.92);border:1px solid #2e2e2e;
      backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);box-shadow:0 8px 26px rgba(0,0,0,.5);
      font-family:'Inter',system-ui,sans-serif;opacity:.45;transition:opacity .18s}
    #aura-pill:hover{opacity:1}
    #aura-pill a,#aura-pill button{display:inline-flex;align-items:center;gap:6px;height:28px;padding:0 11px;
      border:none;border-radius:999px;background:transparent;color:#a0a0a0;cursor:pointer;
      font-family:inherit;font-size:12px;font-weight:600;text-decoration:none;transition:background .14s,color .14s}
    #aura-pill a:hover{background:rgba(62,207,142,.12);color:#3ecf8e}
    #aura-pill button:hover{background:rgba(245,101,101,.12);color:#f56565}
    #aura-pill .sep{width:1px;height:16px;background:#2e2e2e;margin:0 2px}
    #aura-pill svg{width:14px;height:14px;flex-shrink:0}
    @media(max-width:640px){#aura-pill a span,#aura-pill button span{display:none}}
  `;
  document.head.appendChild(css);
  const pill = document.createElement("div");
  pill.id = "aura-pill";
  pill.innerHTML = `
    <a href="${HOME}" title="Back to dashboard">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/></svg>
      <span>Dashboard</span>
    </a>
    <span class="sep"></span>
    <button type="button" data-logout title="Log out">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 17l5-5-5-5"/><path d="M20 12H9"/><path d="M12 3H5v18h7"/></svg>
      <span>Log out</span>
    </button>`;
  document.body.appendChild(pill);
}

/* ---------- Soft verification nudge ---------- */
function verifyNudge(session) {
  const user = session?.user;
  if (!user || user.email_confirmed_at || sessionStorage.getItem("aura:nudged")) return;
  if (isPlaceholderEmail(user.email)) return; // no real email to verify
  sessionStorage.setItem("aura:nudged", "1");
  setTimeout(() => {
    const t = toast(`Verify <b>${user.email}</b> when you get a sec. <a href="#" id="nudge-resend">Resend link</a>`, "info", 9000);
    t.querySelector("#nudge-resend")?.addEventListener("click", async (ev) => {
      ev.preventDefault();
      await supabase.auth.resend({ type: "signup", email: user.email });
      toast("Verification email sent.", "ok");
    });
  }, 3500);
}

/* ---------- Init ---------- */
(async () => {
  const session = await guard();
  await applyAuthUI(session);
  if (isLanding) wireLanding();
  else { mountPill(); verifyNudge(session); }
  // Structured per-account persistence (assets/cloud.js)
  if (window.AuraCloud) {
    if (session) window.AuraCloud.attach(supabase, session.user.id);
    else window.AuraCloud.noSession();
  }
  // Legacy blob mirror — only for keys no tracker has migrated yet
  if (session && window.auraSync) window.auraSync.start(supabase);
})();

// Log out — delegated so injected buttons work too
document.addEventListener("click", (e) => {
  if (e.target?.closest?.("[data-logout]")) { e.preventDefault(); logOut(); }
});

// Keep every tab in sync: token refresh, sign-out elsewhere, OAuth callbacks
let redirected = false;
supabase.auth.onAuthStateChange((event, newSession) => {
  if (event === "TOKEN_REFRESHED") return;
  applyAuthUI(newSession);
  if (!isPublic && !newSession) location.replace("index.html?auth=required");
  if (isLanding && newSession && !redirected) { redirected = true; goDest(); }
});

// Back/forward cache: landing restored while a session exists → redirect again
addEventListener("pageshow", async (e) => {
  if (!e.persisted || !isLanding) return;
  const { data: { session } } = await supabase.auth.getSession();
  if (session && !redirected) { redirected = true; goDest(); }
});

window.auraAuth = {
  supabase, logIn, logOut, signUp, getSession,
  updateProfile, setUsername, uploadAvatar, removeAvatar, paintAvatar, initials,
  requestPasswordReset, updatePassword, isRecovery,
  toast, friendly, setLoading, successModal, pwScore, PW_STEPS, getDest,
};
})();
