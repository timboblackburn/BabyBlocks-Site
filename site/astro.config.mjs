// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://babyblocks.io',
  integrations: [sitemap()],
  // The PantryBaby product page moved from its pre-launch address (2026-10-20).
  redirects: {
    '/coming-soon/pantrybaby': '/pantrybaby/',
  },
});
