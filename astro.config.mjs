import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  outDir: "./dist",
  build: {
    assets: "_astro",
  },
  integrations: [], // Add if you use any integrations
  collections: {
    // The 'updates' collection schema will be defined in src/content/config.ts
    updates: {},
  },
});
