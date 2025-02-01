// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

import tailwindcss from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    tailwindcss({
      applyBaseStyles: false,
    }),
  ],
  i18n: {
    locales: ["en", "ru"],
    defaultLocale: "ru",
  },

  vite: {
    plugins: [],
  },
});
