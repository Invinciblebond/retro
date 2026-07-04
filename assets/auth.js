// UTOPOLY — global auth handling (signup, login, logout, session, route protection)
// Classic script: relies on window.supabaseClient created by assets/supabaseClient.js
// Wrapped in an IIFE so `supabase` doesn't collide with the UMD library's global.
(() => {
const supabase = window.supabaseClient;

const page = document.body.dataset.page || "";
const DEFAULT_AVATAR = "https://i.ibb.co/3t5CJPD/3544ea05dc3cd161d076eefc393b2e62.jpg";

// SITE-WIDE RULE: every page except the landing page (index.html) requires login.
// Any page whose data-page is not "landing" (including pages with no data-page)
// bounces logged-out visitors back to index.html with a login/signup prompt.
const isLanding = page === "landing";

/* ---------- Route protection ---------- */
async function guard() {
  const { data: { session } } = await supabase.auth.getSession();
  if (!isLanding && !session) {
    location.replace("index.html?auth=required");
    return null;
  }
  if (isLanding && session) {
    // already logged in → go to app
    location.replace("home.html");
    return session;
  }
  return session;
}

/* ---------- UI state ---------- */
function applyAuthUI(session) {
  const user = session?.user;
  document.body.classList.toggle("logged-in", !!user);

  // Header avatar + username
  const username = user?.user_metadata?.username || user?.email?.split("@")[0] || "";
  document.querySelectorAll(".avatar-head").forEach((el) => {
    el.title = username ? `Profile — ${username}` : "Profile";
    if (user) setAvatarImg(el, window.retroProfile?.avatar_url || DEFAULT_AVATAR, username);
    else if (username) el.textContent = username.slice(0, 2).toUpperCase();
  });

  // Inject a logout button into the signed-in header if present
  const icons = document.querySelector(".hicons");
  if (icons && user && !document.getElementById("logout-btn")) {
    const btn = document.createElement("button");
    btn.id = "logout-btn";
    btn.textContent = "Log Out";
    btn.className = "btn ghost small";
    btn.style.marginLeft = "8px";
    icons.appendChild(btn);
  }

  // Simple status element hook (optional, any element with [data-auth-status])
  document.querySelectorAll("[data-auth-status]").forEach((el) => {
    el.textContent = user ? `Logged in as ${username} (${user.email})` : "Logged out";
  });

  if (user) loadProfile(user);
}

/* ---------- Avatar rendering (image with initials fallback) ---------- */
function setAvatarImg(el, url, username) {
  let img = el.querySelector("img.avatar-img");
  if (!img) {
    el.textContent = "";
    img = document.createElement("img");
    img.className = "avatar-img";
    img.alt = username || "Avatar";
    img.style.cssText = "width:100%;height:100%;object-fit:cover;border-radius:inherit;display:block;";
    img.onerror = () => {
      img.remove();
      if (username) el.textContent = username.slice(0, 2).toUpperCase();
    };
    el.appendChild(img);
  }
  if (img.src !== url) img.src = url;
}

/* ---------- Profile (fetched from Supabase on login/signup) ---------- */
async function loadProfile(user) {
  let { data: profile, error } = await supabase
    .from("profiles")
    .select("username, retrobux, subscribed, subscription_type, avatar_url, created_at")
    .eq("id", user.id)
    .single();
  if (error || !profile) return;

  // Ensure the default avatar is stored on Supabase for accounts missing one
  if (!profile.avatar_url) {
    const { data: updated } = await supabase
      .from("profiles")
      .update({ avatar_url: DEFAULT_AVATAR, updated_at: new Date().toISOString() })
      .eq("id", user.id)
      .select("username, retrobux, subscribed, subscription_type, avatar_url, created_at")
      .single();
    profile = updated || { ...profile, avatar_url: DEFAULT_AVATAR };
  }
  window.retroProfile = profile;

  const uname = profile.username || user.email?.split("@")[0] || "";

  // Header avatar (circular, per-user URL with default fallback)
  document.querySelectorAll(".avatar-head").forEach((el) =>
    setAvatarImg(el, profile.avatar_url || DEFAULT_AVATAR, uname)
  );

  // Retrobux balance in header
  const rbx = document.querySelector(".rbx");
  if (rbx) {
    const ric = '<span class="ric">R</span>';
    rbx.innerHTML = `${ric}${(profile.retrobux ?? 0).toLocaleString()} <a class="getmore" href="shop.html">Get More</a>`;
  }

  // Subscription badge next to avatar
  if (profile.subscribed && profile.subscription_type && !document.getElementById("sub-badge")) {
    const avatar = document.querySelector(".avatar-head");
    if (avatar) {
      const b = document.createElement("span");
      b.id = "sub-badge";
      b.textContent = profile.subscription_type.toUpperCase();
      b.style.cssText =
        "font-size:9px;font-weight:900;letter-spacing:1px;padding:3px 8px;border-radius:10px;background:var(--accent);color:#fff;";
      avatar.before(b);
    }
  }

  // Home page profile header (username, circular avatar, joined date)
  const nameEl = document.getElementById("profile-username");
  if (nameEl) nameEl.textContent = uname;
  const avEl = document.getElementById("profile-avatar");
  if (avEl) {
    avEl.src = profile.avatar_url || DEFAULT_AVATAR;
    avEl.alt = uname ? `${uname}'s profile picture` : "Profile picture";
  }
  const joinedEl = document.getElementById("profile-joined");
  if (joinedEl && profile.created_at) {
    joinedEl.textContent = new Date(profile.created_at).toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });
  }

  document.dispatchEvent(new CustomEvent("retro:profile", { detail: profile }));
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
async function signUp({ email, password, username, birthday, gender }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { username, birthday, gender },
      emailRedirectTo: `${location.origin}/home.html`,
    },
  });
  if (error) throw error;
  return data;
}

async function logIn(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) throw error;
  return data;
}

async function logOut() {
  await supabase.auth.signOut();
  location.href = "index.html";
}

function showMsg(el, text, ok = false) {
  let m = el.querySelector(".auth-msg");
  if (!m) {
    m = document.createElement("p");
    m.className = "auth-msg";
    m.style.cssText = "font-size:12px;margin-top:10px;font-weight:700;";
    el.appendChild(m);
  }
  m.style.color = ok ? "#4caf50" : "#e2231a";
  m.textContent = text;
}

/* ---------- Wiring ---------- */
function wireLanding() {
  // Bounced here from a protected page? Ask the visitor to log in or sign up.
  if (new URLSearchParams(location.search).get("auth") === "required") {
    const bar = document.createElement("div");
    bar.id = "auth-required-bar";
    bar.textContent = "🔒 You need to log in or sign up to access that page.";
    bar.style.cssText =
      "background:var(--accent);color:#fff;text-align:center;padding:10px 16px;font-size:13px;font-weight:700;";
    document.body.prepend(bar);
    const card = document.querySelector(".signup-card");
    if (card) showMsg(card, "Please log in or sign up to continue.");
  }

  // Header quick login
  const head = document.querySelector(".land-login");
  if (head) {
    const [emailIn, passIn] = head.querySelectorAll("input");
    emailIn.placeholder = "Email";
    const btn = head.querySelector("a.btn");
    btn.addEventListener("click", async (e) => {
      e.preventDefault();
      try {
        if (!emailIn.value.trim() || !passIn.value) {
          alert("Enter your email and password to log in.");
          return;
        }
        await logIn(emailIn.value.trim(), passIn.value);
        location.href = "home.html";
      } catch (err) {
        alert(err.message);
      }
    });
  }

  // Signup card
  const form = document.querySelector(".signup-card");
  if (form) {
    form.onsubmit = null;
    // add an email field before the username field if missing
    if (!form.querySelector('input[type="email"]')) {
      const userLabel = [...form.querySelectorAll("label")].find((l) => l.textContent === "Username");
      const lbl = document.createElement("label");
      lbl.textContent = "Email";
      const inp = document.createElement("input");
      inp.type = "email";
      inp.required = true;
      inp.placeholder = "you@example.com";
      userLabel.before(lbl, inp);
    }
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const email = form.querySelector('input[type="email"]').value.trim();
      const username = form.querySelector('input[type="text"]').value.trim();
      const password = form.querySelector('input[type="password"]').value;
      const [m, d, y] = form.querySelectorAll(".bday select");
      const gender = form.querySelectorAll("select")[3]?.value;
      if (password.length < 8) return showMsg(form, "Password must be at least 8 characters.");
      try {
        const { session } = await signUp({
          email, password, username,
          birthday: `${m.value} ${d.value} ${y.value}`,
          gender,
        });
        if (session) location.href = "home.html";
        else showMsg(form, "Account created! Check your email to confirm, then log in.", true);
      } catch (err) {
        showMsg(form, err.message);
      }
    });
  }
}

/* ---------- Init ---------- */
(async () => {
  const session = await guard();
  applyAuthUI(session);
  if (isLanding) wireLanding();
})();

// Logout (header is injected by retro.js — use delegation)
document.addEventListener("click", (e) => {
  if (e.target?.id === "logout-btn") logOut();
});

// Keep UI in sync across tabs / token refresh / sign-out
supabase.auth.onAuthStateChange((_event, newSession) => {
  applyAuthUI(newSession);
  if (!isLanding && !newSession) location.replace("index.html?auth=required");
});

window.retroAuth = { supabase, logIn, logOut, signUp, updateProfile };
})();
