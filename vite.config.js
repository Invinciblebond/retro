import { defineConfig } from "vite";
import { resolve, join, dirname } from "path";
import { cpSync, mkdirSync, readdirSync } from "fs";

// Copies classic (non-module) scripts + static files under assets/ into dist,
// since Vite only bundles module-graph assets. Keeps dist self-contained.
function copyStaticAssets() {
  let outDir = "dist";
  return {
    name: "copy-static-assets",
    configResolved(config) { outDir = config.build.outDir; },
    closeBundle() {
      const src = resolve(__dirname, "assets");
      const dest = resolve(outDir, "assets");
      mkdirSync(dest, { recursive: true });
      for (const entry of readdirSync(src)) {
        if (entry === "env.example.js") continue;
        cpSync(join(src, entry), join(dest, entry), { recursive: true });
      }
    },
  };
}

export default defineConfig({
  plugins: [copyStaticAssets()],
  build: {
    rollupOptions: {
      // "three" resolves at runtime via the <script type="importmap"> in avatar.html
      external: ["three", /^three\/addons\//],
      input: {
        index: resolve(__dirname, "index.html"),
        home: resolve(__dirname, "home.html"),
        catalog: resolve(__dirname, "catalog.html"),
        shop: resolve(__dirname, "shop.html"),
        terms: resolve(__dirname, "terms.html"),
        privacy: resolve(__dirname, "privacy.html"),
        "color-schemes": resolve(__dirname, "color-schemes.html"),
        item: resolve(__dirname, "item.html"),
        chat: resolve(__dirname, "chat.html"),
        deposit: resolve(__dirname, "deposit.html"),
        trade: resolve(__dirname, "trade.html"),
        create: resolve(__dirname, "create.html"),
        dashboard: resolve(__dirname, "dashboard.html"),
        wiki: resolve(__dirname, "wiki.html"),
        discover: resolve(__dirname, "discover.html"),
        game: resolve(__dirname, "game.html"),
        groups: resolve(__dirname, "groups.html"),
        group: resolve(__dirname, "group.html"),
        "group-revenue": resolve(__dirname, "group-revenue.html"),
        avatar: resolve(__dirname, "avatar.html"),
        profile: resolve(__dirname, "profile.html"),
        settings: resolve(__dirname, "settings.html"),
        admin: resolve(__dirname, "admin.html"),
        friends: resolve(__dirname, "friends.html"),
        forum: resolve(__dirname, "forum.html"),
        leaderboard: resolve(__dirname, "leaderboard.html"),
        wishlist: resolve(__dirname, "wishlist.html"),
      },
    },
  },
});
