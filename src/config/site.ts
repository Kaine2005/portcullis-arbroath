/* =====================================================================
   Central site configuration.
   One place for contact details, links and image paths so nothing is
   hardcoded across components. Edit here if a phone number, email or
   social link ever changes.
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

  // WhatsApp "Book a Table" deep link. The pre-filled text is appended in the
  // BookButton component so the message can be tailored per button.
  whatsapp: 'https://wa.me/message/V565BW753KAYA1',

  // Existing function/events enquiry form on the old site (kept as-is).
  functionBookingUrl: 'https://portcullis-arbroath.co.uk/function-booking/',

  // Opening hours, PLACEHOLDER. Replace with real hours.
  // Used both for display and for the schema.org structured data.
  hours: [
    { days: 'Monday - Thursday', time: '12:00 - 23:00' },
    { days: 'Friday - Saturday', time: '12:00 - 00:00' },
    { days: 'Sunday', time: '12:00 - 23:00' },
  ],
} as const;

// Real social profiles (pulled from the current site). All rendered in a single
// flat burgundy, see SocialLinks.astro.
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
  { name: 'WhatsApp', url: 'https://wa.me/message/V565BW753KAYA1' },
] as const;

/* Image paths. Drop the real files into `public/images/` using EXACTLY these
   filenames and they will appear automatically. Use plain lowercase names
   with hyphens (no spaces). BASE_URL keeps paths correct when the site is
   served from a sub-folder (e.g. GitHub Pages: /portcullis-arbroath/). */
const base = import.meta.env.BASE_URL.replace(/\/$/, ''); // "/portcullis-arbroath" in prod, "" in dev

export const images = {
  hero: `${base}/images/outside2.jpeg`, // full-bleed hero
  about: `${base}/images/resturaunt.jpg`, // welcome / about
  functions: `${base}/images/function-room.jpg`, // functions section
  games: `${base}/images/games-room.jpg`, // games room section
  contact: `${base}/images/outside.jpg`, // find us / contact
  logo: `${base}/images/logo.png`, // crest logo (transparent PNG)
} as const;

// The four printed menus, used to build the menu cards + separate pages.
export const menus = [
  { slug: 'main', title: 'Main Menu', blurb: 'Our full à la carte, pub classics done properly.' },
  { slug: 'oap', title: 'OAP Menu', blurb: 'Smaller plates and great value for our over-60s.' },
  { slug: 'kids', title: 'Kids Menu', blurb: 'Little favourites the whole family will love.' },
  { slug: 'specials', title: 'Specials', blurb: 'Our current deals and chef’s specials.' },
] as const;

export type MenuSlug = (typeof menus)[number]['slug'];
