/* =====================================================================
   Central site configuration.
   One place for contact details, links, nav and image paths so nothing is
   hardcoded across components. Edit here if a phone number, email, social
   link or opening hour ever changes.
   ===================================================================== */

export const site = {
  name: 'The Portcullis',
  tagline: 'Great Food, Good Times, and a Place for Every Occasion',
  description:
    'The Portcullis, a warm, welcoming pub & restaurant in Arbroath. Great food, weekly deals, bingo nights, a games room and a function suite for every occasion.',
  url: 'https://portcullis-arbroath.co.uk',

  phone: '01241 463117',
  phoneHref: 'tel:+441241463117', // tap-to-call (international format)
  email: 'contact@portcullis-arbroath.co.uk',

  address: {
    street: '6 Conon Terrace',
    town: 'Arbroath',
    postcode: 'DD11 5AP',
    country: 'GB',
  },

  /* Opening hours. The bar and the restaurant keep different hours, and the
     kitchen serves breakfast at the weekend. Displayed on the Find Us page. */
  hours: {
    bar: [
      { days: 'Monday – Tuesday', time: '12–2pm, 5pm–midnight' },
      { days: 'Wednesday – Thursday', time: '12pm–midnight' },
      { days: 'Friday – Saturday', time: '12pm–1am' },
      { days: 'Sunday', time: '12:30pm–midnight' },
    ],
    restaurant: [
      { days: 'Monday – Friday', time: '12–2pm, 5–8pm' },
      { days: 'Saturday', time: '12–8pm' },
      { days: 'Sunday', time: '12–7pm' },
    ],
    breakfast: [{ days: 'Saturday & Sunday', time: '10am–12pm' }],
  },

  /* schema.org openingHours for the bar (24h, valid day codes). Keeps Google's
     rich result in step with the human-readable hours above. */
  schemaHours: [
    'Mo-Tu 12:00-14:00',
    'Mo-Tu 17:00-00:00',
    'We-Th 12:00-00:00',
    'Fr-Sa 12:00-01:00',
    'Su 12:30-00:00',
  ],
} as const;

// Real social profiles. All rendered in a single flat burgundy, see
// SocialLinks.astro. (WhatsApp intentionally omitted — bookings are by phone
// or email only.)
export const socials = [
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/profile.php?id=61554319582846',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/theportyarbroath?igsh=ZTU4ZDZsOHdjd2t4',
  },
  { name: 'Snapchat', url: 'https://snapchat.com/t/IKqQWIeN' },
  {
    name: 'TikTok',
    url: 'https://www.tiktok.com/@portcullis.arbroa?_t=ZN-8wcwpOqwcTq&_r=1',
  },
] as const;

/* --- Base-aware internal links ---------------------------------------
   The site is served from a sub-folder on GitHub Pages
   (kaine2005.github.io/portcullis-arbroath/). Astro does NOT automatically
   prefix <a href> or <img src>, so EVERY internal link and asset path must
   go through withBase(), or it 404s in production. */
const base = import.meta.env.BASE_URL.replace(/\/$/, ''); // "/portcullis-arbroath" in prod, "" in dev
export const withBase = (path = '/') => `${base}/${path.replace(/^\//, '')}`;

/* Top-level navigation, shared by the header and footer. */
export const nav = [
  { label: 'About', href: '/about' },
  { label: 'Menus', href: '/menus' },
  { label: 'Specials', href: '/specials' },
  { label: "What's On", href: '/whats-on' },
  { label: 'Functions', href: '/functions' },
  { label: 'Games', href: '/games' },
  { label: 'Community', href: '/community' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Find Us', href: '/find-us' },
] as const;

/* Image paths. Drop the real files into `public/images/` using EXACTLY these
   filenames (lowercase, hyphens, no spaces) and they appear automatically. */
export const images = {
  hero: withBase('/images/outside2.jpeg'), // full-bleed hero
  about: withBase('/images/resturaunt.jpg'), // welcome / about
  functions: withBase('/images/function-room.jpg'), // functions section
  games: withBase('/images/games-room.jpg'), // games room section
  contact: withBase('/images/outside.jpg'), // find us / contact
  logo: withBase('/images/logo.png'), // crest logo (transparent PNG)
} as const;

// The four printed menus, used to build the menu cards + separate pages.
export const menus = [
  { slug: 'main', title: 'Main Menu', blurb: 'Our full menu of pub favourites and hearty plates.' },
  { slug: 'oap', title: 'OAP Menu', blurb: 'Smaller plates and great value for our over-60s.' },
  { slug: 'kids', title: 'Kids Menu', blurb: 'Little favourites the whole family will love.' },
  { slug: 'specials', title: 'Specials', blurb: 'Our current deals and chef’s specials.' },
] as const;

// The clubs and causes The Portcullis proudly sponsors (Community page).
export const sponsors = [
  { name: 'Arbroath FC Women’s Team', tag: 'Local Football' },
  { name: 'Arbroath Vics', tag: 'Junior Football' },
  { name: 'Arbroath Youth Football Club', tag: 'Grassroots Football' },
  { name: 'Arbroath Rotary Club', tag: 'Community & Charity' },
] as const;

export type MenuSlug = (typeof menus)[number]['slug'];
