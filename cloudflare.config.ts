import { defineConfig } from "cf/config";

// Static Astro output: this Worker serves assets only and has no entrypoint.
export default defineConfig({
  worker: {
    name: "portfolio",
    compatibilityDate: "2026-07-09",
    assets: {
      notFoundHandling: "404-page",
    },
  },
});
