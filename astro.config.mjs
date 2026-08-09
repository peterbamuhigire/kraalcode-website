import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://kraalcode.com',
  trailingSlash: 'always',
  build: {
    format: 'directory',
    assets: '_assets',
  },
  image: {
    service: { entrypoint: 'astro/assets/services/sharp' },
    remotePatterns: [],
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr', 'sw'],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          fr: 'fr',
          sw: 'sw',
        },
      },
    }),
  ],
  vite: {},
});
