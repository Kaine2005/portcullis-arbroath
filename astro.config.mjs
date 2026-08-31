// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// The public URL of the finished site. Used for SEO tags + sitemap.
// If you deploy to a GitHub Pages *project* URL (e.g. user.github.io/portcullis),
// also uncomment `base` below — see README "GitHub Pages" section.
export default defineConfig({
  site: 'https://kaine2005.github.io',
  base: '/portcullis-arbroath',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
