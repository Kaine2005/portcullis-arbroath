/* =====================================================================
   Content collections, the owner-editable content.
   Each collection reads markdown files from src/content/* . The /admin
   editor (Decap CMS) writes to these same files, so any edit made in the
   browser lands here as a normal file change and auto-deploys.
   Field names here MUST match the fields in public/admin/config.yml.
   ===================================================================== */

import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// WEEKLY SPECIALS, e.g. Pensioner Lunch, Children Eat Free, Weekday Deal
const specials = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/specials' }),
  schema: z.object({
    title: z.string(),
    emoji: z.string().optional(), // small decorative emoji, e.g. 🍽️
    days: z.string().optional(), // e.g. "Mon-Fri" or "Every Wednesday"
    times: z.string().optional(), // e.g. "12-2pm"
    description: z.string(),
    order: z.number().default(0), // lower numbers show first
  }),
});

// UPCOMING EVENTS, e.g. Bingo nights, band nights
const events = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/events' }),
  schema: z.object({
    title: z.string(),
    // Use `recurring` for repeating events ("Every Wed & Sun") OR `date` for
    // one-off events. Both are optional; fill in whichever applies.
    recurring: z.string().optional(),
    date: z.coerce.date().optional(),
    times: z.string().optional(), // e.g. "Doors 6:30pm, eyes down 7:30pm"
    description: z.string(),
    image: z.string().optional(), // /images/uploads/... (optional)
    order: z.number().default(0),
  }),
});

// MENU ITEMS, one file per dish. `menu` decides which page it appears on.
const menu = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/menu' }),
  schema: z.object({
    name: z.string(),
    description: z.string().optional(),
    price: z.string(), // kept as text so "£10" / "2 for £16.50" both work
    category: z.string(), // e.g. "Starters", "Mains", "Desserts"
    menu: z.enum(['main', 'oap', 'kids', 'specials']),
    order: z.number().default(0),
  }),
});

export const collections = { specials, events, menu };
