// UTOPOLY — lightweight i18n (no build step, no dependencies)
// Translates elements carrying data-i18n="key.path". English strings live in the
// HTML itself, so missing keys or unsupported languages degrade gracefully.
// Language priority: profiles.settings.language (applied by settings page via
// localStorage) → localStorage("retro:lang") → navigator.language → "en".
(() => {
  const DICT = {
    es: {
      nav: { home: "Inicio", discover: "Descubrir", catalog: "Catálogo", trade: "Intercambios", groups: "Grupos", create: "Crear", shop: "Tienda", dashboard: "Panel", avatar: "Avatar", profile: "Perfil", friends: "Amigos", chat: "Chat", settings: "Ajustes", wiki: "Wiki" },
      menu: { profile: "Mi perfil", settings: "Ajustes", buyRetrobux: "Comprar Retrobux", convertRix: "Convertir Rix" },
      settings: { title: "Ajustes", account: "Cuenta", billing: "Facturación", security: "Seguridad", privacy: "Privacidad", notifications: "Notificaciones", trading: "Comercio y economía", appearance: "Apariencia" },
      common: { logout: "Cerrar sesión", save: "Guardar", search: "Buscar en Utopoly" },
    },
    fr: {
      nav: { home: "Accueil", discover: "Découvrir", catalog: "Catalogue", trade: "Échanges", groups: "Groupes", create: "Créer", shop: "Boutique", dashboard: "Tableau de bord", avatar: "Avatar", profile: "Profil", friends: "Amis", chat: "Chat", settings: "Paramètres", wiki: "Wiki" },
      menu: { profile: "Mon profil", settings: "Paramètres", buyRetrobux: "Acheter des Retrobux", convertRix: "Convertir des Rix" },
      settings: { title: "Paramètres", account: "Compte", billing: "Facturation", security: "Sécurité", privacy: "Confidentialité", notifications: "Notifications", trading: "Commerce et économie", appearance: "Apparence" },
      common: { logout: "Se déconnecter", save: "Enregistrer", search: "Rechercher sur Utopoly" },
    },
  };

  function detect() {
    const stored = localStorage.getItem("retro:lang");
    if (stored) return stored;
    const nav = (navigator.language || "en").slice(0, 2);
    return DICT[nav] ? nav : "en";
  }

  let lang = detect();

  function t(key) {
    if (lang === "en") return null;
    return key.split(".").reduce((o, k) => (o ? o[k] : null), DICT[lang]) || null;
  }

  function translatePage(root = document) {
    document.documentElement.lang = lang;
    if (lang === "en") return;
    root.querySelectorAll("[data-i18n]").forEach((el) => {
      const v = t(el.dataset.i18n);
      if (v) el.textContent = v;
    });
    // header nav + rail (injected by retro.js without data-i18n) — match by href
    const NAVMAP = { "home.html": "nav.home", "discover.html": "nav.discover", "catalog.html": "nav.catalog", "trade.html": "nav.trade", "groups.html": "nav.groups", "create.html": "nav.create", "shop.html": "nav.shop", "dashboard.html": "nav.dashboard", "avatar.html": "nav.avatar", "profile.html": "nav.profile", "chat.html": "nav.chat", "settings.html": "nav.settings", "wiki.html": "nav.wiki" };
    root.querySelectorAll(".site-header .links a, .rail .ritem, .tabbar a").forEach((a) => {
      const key = NAVMAP[(a.getAttribute("href") || "").split("#")[0]];
      const v = key && t(key);
      if (!v) return;
      const ic = a.querySelector(".ic, .tic");
      a.innerHTML = ic ? ic.outerHTML + v : v;
    });
    const s = root.querySelector(".search input");
    const sv = t("common.search");
    if (s && sv) s.placeholder = sv;
    const lo = root.querySelector("#logout-btn");
    const lv = t("common.logout");
    if (lo && lv) lo.textContent = lv;
  }

  async function setLanguage(l) {
    lang = DICT[l] || l === "en" ? l : "en";
    localStorage.setItem("retro:lang", lang);
    location.reload(); // simplest correct behavior: re-render whole chrome
  }

  window.retroI18n = { t, translatePage, setLanguage, get language() { return lang; } };

  // chrome is injected synchronously by retro.js before this script runs
  translatePage();
  // catch late-injected bits (logout button appears after auth)
  document.addEventListener("retro:profile", () => translatePage());
})();
