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
      },
    },
  },
});
