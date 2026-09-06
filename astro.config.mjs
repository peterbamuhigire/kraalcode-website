import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Compatibility redirects and the root redirect are noindex routes. Keep them
// out of the sitemap so crawlers receive only canonical content URLs.
const sitemapExclusions = new Set([
  '/',
  '/en/pricing/',
  '/fr/capabilities/',
  '/fr/juridique/cookies/',
  '/fr/product/',
  '/fr/resources/',
  '/fr/sectors/',
  '/fr/security/',
  '/fr/tarifs/',
  '/fr/travailler-de-partout/',
  '/fr/why/',
  '/sw/bei/',
  '/sw/capabilities/',
  '/sw/contact/',
  '/sw/fanya-kazi-popote/',
  '/sw/kisheria/faragha/',
  '/sw/kisheria/masharti/',
  '/sw/kisheria/ufikiaji/',
  '/sw/kisheria/vidakuzi/',
  '/sw/product/',
  '/sw/rasilimali/',
  '/sw/resources/',
  '/sw/sectors/',
  '/sw/security/',
  '/sw/uwezo/hisa/',
  '/sw/uwezo/hr-mishahara/',
  '/sw/uwezo/manunuzi/',
  '/sw/why/',
]);

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
      filter: (page) => !sitemapExclusions.has(new URL(page).pathname),
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
