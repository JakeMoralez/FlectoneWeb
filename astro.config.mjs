// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

import tailwindcss from "@astrojs/tailwind";

import { viteStaticCopy } from "vite-plugin-static-copy";

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

  build: {
    assets: '_astro',
  },

  vite: {
    plugins: [
      viteStaticCopy({
        targets: [
          {
            src: [
              'src/assets/**/*',
              '!src/assets/chat/**',
              '!src/assets/mix/**',
            ],
            dest: 'assets',
          }
        ]
      })
    ]
  }
});
