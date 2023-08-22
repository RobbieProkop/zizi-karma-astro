import { defineConfig } from "astro/config";
import react from "@astrojs/react";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://yuliprokop.com",
  integrations: [
    react(),
    sitemap({
      filter: (page) => page !== "https://yuliprokop.com/test-blog-post/",
    }),
  ],
});
