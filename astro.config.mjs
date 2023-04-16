import { defineConfig } from "astro/config";
import react from "@astrojs/react";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://zizikarma.com",
  integrations: [
    react(),
    sitemap({
      filter: (page) => page !== "https://zizikarma.com/test-blog-post/",
    }),
  ],
});
