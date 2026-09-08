// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// The public URL of the finished site. Used for SEO tags + sitemap.
// Served from the apex custom domain (portcullis-arbroath.co.uk) at the root,
// so no `base` sub-path is needed. If you ever revert to the GitHub Pages
// *project* URL (kaine2005.github.io/portcullis-arbroath), restore
// `base: '/portcullis-arbroath'` — see README "GitHub Pages" section.
export default defineConfig({
  site: 'https://portcullis-arbroath.co.uk',
  // Prefetch a page's HTML when a link is hovered/tapped, so navigating
  // between pages feels instant.
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
