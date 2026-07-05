// Bumps APP_VERSION in assets/retro.js by +0.01 (0.06 → 0.07 → … → 0.99 → 1.00)
// and rewrites every ?v= cache-bust stamp in the HTML files to match.
// Usage: node scripts/bump-version.mjs
import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const retroPath = join(root, "assets", "retro.js");

let retro = readFileSync(retroPath, "utf8");
const m = retro.match(/const APP_VERSION = "(\d+)\.(\d+)"/);
if (!m) { console.error("APP_VERSION not found in assets/retro.js"); process.exit(1); }

const old = `${m[1]}.${m[2]}`;
// treat as hundredths: 0.06 → 6, +1 → 7 → 0.07 (0.99 → 1.00 naturally)
const next = ((parseInt(m[1], 10) * 100 + parseInt(m[2], 10) + 1) / 100).toFixed(2);

retro = retro.replace(/const APP_VERSION = "\d+\.\d+"/, `const APP_VERSION = "${next}"`);
writeFileSync(retroPath, retro);

let pages = 0;
for (const f of readdirSync(root)) {
  if (!f.endsWith(".html")) continue;
  const p = join(root, f);
  const html = readFileSync(p, "utf8");
  const out = html.replaceAll(`?v=${old}"`, `?v=${next}"`);
  if (out !== html) { writeFileSync(p, out); pages++; }
}

console.log(`Version bumped ${old} → ${next} (retro.js + ${pages} HTML pages)`);
