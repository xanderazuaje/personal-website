import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://xanderazuaje.github.io",
  integrations: [preact({
    compat: true
  }), tailwind()]
});