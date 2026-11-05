// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://josephakintunde.com',

  // Every page stays static; the adapter only turns src/pages/api/visit.ts into a Vercel Function.
  adapter: vercel(),

  // The site is one page now; the old pages' links still land in the right place.
  redirects: {
    '/projects': '/#work',
    '/experience': '/#experience',
    '/contact': '/#contact',
    '/resume': '/resume.pdf',
  },

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap()]
});