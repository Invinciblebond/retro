import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    rollupOptions: {
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
        avatar: resolve(__dirname, "avatar.html"),
        profile: resolve(__dirname, "profile.html"),
        settings: resolve(__dirname, "settings.html"),
        admin: resolve(__dirname, "admin.html"),
      },
    },
  },
});
