// UTOPOLY — shared 2D layered avatar renderer (SVG). Used by the editor and profiles.
// renderAvatarSVG(config, items) -> svg string
//   config: { body_color, equipped: { hat, face, shirt, tshirt, pants, gear, accessory } }
//   items:  array of catalog items ({ id, name, icon, image_url, category }) to resolve equipped ids
(function () {
  function esc(s) { return String(s || "").replace(/&/g, "&amp;").replace(/</g, "&lt;"); }

  window.renderAvatarSVG = function (cfg, items) {
    cfg = cfg || {};
    const eq = cfg.equipped || {};
    const body = cfg.body_color || "#f5d29a";
    const byId = {};
    (items || []).forEach((i) => { if (i) byId[i.id] = i; });
    const get = (slot) => byId[eq[slot]] || null;

    function overlay(item, x, y, w, h, fontSize) {
      if (!item) return "";
      if (item.image_url)
        return `<image href="${esc(item.image_url)}" x="${x}" y="${y}" width="${w}" height="${h}" preserveAspectRatio="xMidYMid meet"/>`;
      return `<text x="${x + w / 2}" y="${y + h / 2}" font-size="${fontSize}" text-anchor="middle" dominant-baseline="central">${esc(item.icon || "📦")}</text>`;
    }

    const shirt = get("shirt") || get("tshirt");
    const pants = get("pants");
    const hat = get("hat");
    const face = get("face");
    const gear = get("gear");
    const acc = get("accessory");

    return `
<svg viewBox="0 0 200 260" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;display:block;">
  <!-- legs -->
  <rect x="70" y="170" width="26" height="70" rx="6" fill="${pants ? "#3b5b92" : body}"/>
  <rect x="104" y="170" width="26" height="70" rx="6" fill="${pants ? "#3b5b92" : body}"/>
  ${overlay(pants, 66, 172, 68, 64, 30)}
  <!-- torso -->
  <rect x="62" y="96" width="76" height="80" rx="10" fill="${shirt ? "#4a76c9" : body}"/>
  ${overlay(shirt, 66, 100, 68, 70, 34)}
  <!-- arms -->
  <rect x="36" y="100" width="22" height="66" rx="8" fill="${body}"/>
  <rect x="142" y="100" width="22" height="66" rx="8" fill="${body}"/>
  <!-- head -->
  <rect x="70" y="34" width="60" height="56" rx="14" fill="${body}"/>
  ${face
    ? overlay(face, 76, 44, 48, 40, 26)
    : `<circle cx="88" cy="58" r="3.5" fill="#222"/><circle cx="112" cy="58" r="3.5" fill="#222"/>
       <path d="M88 72 Q100 80 112 72" stroke="#222" stroke-width="3" fill="none" stroke-linecap="round"/>`}
  <!-- hat -->
  ${overlay(hat, 62, 2, 76, 40, 34)}
  <!-- gear (held, right side) -->
  ${overlay(gear, 148, 130, 44, 44, 28)}
  <!-- accessory (chest) -->
  ${overlay(acc, 84, 108, 32, 32, 20)}
</svg>`;
  };
})();
