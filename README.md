# The Portcullis — Arbroath

Website for **The Portcullis** pub & restaurant, Arbroath. Built with
[Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com), with a
free, non-technical editor at **/admin** ([Decap CMS](https://decapcms.org)).

- **Mobile-first**, fast, and accessible — most visitors are on phones.
- **Owner-editable** Weekly Specials, Upcoming Events and Menu Items — no code.
- **Book a Table** via WhatsApp + a contact/booking form.

---

## Table of contents

1. [Quick start (local dev)](#quick-start-local-dev)
2. [Where to put the photos](#where-to-put-the-photos)
3. [Deploying](#deploying) — [Netlify (recommended)](#option-a--netlify-recommended) · [GitHub Pages](#option-b--github-pages)
4. [Editing the site at /admin (owner guide)](#editing-the-site-at-admin--plain-english-owner-guide)
5. [Project structure](#project-structure)
6. [Brand & design notes](#brand--design-notes)

---

## Quick start (local dev)

You need [Node.js](https://nodejs.org) 18+ installed.

```bash
npm install      # first time only — downloads dependencies
npm run dev      # start the site at http://localhost:4321
npm run build    # make the production files in /dist
npm run preview  # preview the built site locally
```

Open **http://localhost:4321** in your browser. Edits to files update live.

---

## Where to put the photos

Drop the real photos into **`public/images/`** using these **exact** filenames:

| Filename            | Appears as                              |
| ------------------- | --------------------------------------- |
| `outside2.jpeg`     | Hero background (top of homepage)       |
| `resturaunt.jpg`    | Welcome / About section                 |
| `function room.jpg` | Functions section                       |
| `games room.jpg`    | Games Room section                      |
| `outside.jpg`       | Find Us / Contact section               |
| `logo.png`          | Header + footer crest (transparent PNG) |

- **Compress first** (e.g. [squoosh.app](https://squoosh.app)) — aim for
  < 400 KB each, ~1600px wide. Fast pages matter on phones.
- The hero loads eagerly (it's the first thing people see); every other image
  lazy-loads. All have proper `alt` text and rounded corners.
- If `logo.png` is missing, the header/footer quietly fall back to a text
  wordmark, so the site never looks broken.
- Photos you add through the **/admin** editor land in `public/images/uploads/`
  automatically — you don't manage those by hand.

---

## Deploying

You host the code on **GitHub**, then connect a host. **Netlify is recommended.**

### Why Netlify over GitHub Pages?

| | **Netlify (recommended)** | **GitHub Pages** |
| --- | --- | --- |
| Public website | ✅ | ✅ |
| **/admin editor login** | ✅ Works out of the box (Netlify Identity) | ⚠️ Needs an extra OAuth service you host yourself |
| **Booking form** | ✅ Free form handling (Netlify Forms) | ❌ Needs a third-party like Formspree |
| Setup effort | A few clicks | More moving parts for the same result |

In short: **Netlify gives the owner a working editor login and a working
booking form for free.** GitHub Pages can serve the public site perfectly well,
but the owner's `/admin` login and the form need extra setup. Use Netlify unless
you have a specific reason not to.

### Option A — Netlify (recommended)

1. Push this repo to GitHub.
2. On [netlify.com](https://netlify.com): **Add new site → Import from Git**,
   pick the repo. Build settings are read automatically from `netlify.toml`
   (build command `npm run build`, publish directory `dist`). Click **Deploy**.
3. **Turn on the editor login:** Site configuration → **Identity** → *Enable
   Identity*. Then under **Identity → Services → Git Gateway**, click *Enable
   Git Gateway*.
4. **Registration:** Identity → *Registration* → set to **Invite only** (so only
   staff can log in). Then **Invite users** and enter the owner's email. They'll
   get an email to set a password.
5. **Email the booking form to you:** Forms → **Form notifications** → *Add
   notification → Email notification*, and send to
   `contact@portcullis-arbroath.co.uk`. (The form named `contact` is detected
   automatically on the first deploy.)
6. **Custom domain:** Domain management → add `portcullis-arbroath.co.uk` and
   follow the DNS steps. HTTPS is automatic.

The owner can now log in at **`https://your-site/admin/`**.

### Option B — GitHub Pages

A workflow is included at `.github/workflows/deploy-gh-pages.yml`.

1. Push this repo to GitHub.
2. Repo **Settings → Pages → Build and deployment → Source = "GitHub Actions"**.
3. Every push to `main` builds and deploys automatically.

**Two things to know:**

- **Project URLs need a base path.** If your site lives at
  `https://<user>.github.io/<repo>/`, open `astro.config.mjs` and set
  `base: '/<repo>'` (it's there, commented). For a **custom domain** or a
  `user.github.io` site, leave `base` unset.
- **The `/admin` editor needs OAuth.** Git Gateway is a Netlify feature, so on
  GitHub Pages you must (a) switch the backend in `public/admin/config.yml` to
  the `github` backend (commented block is there), and (b) run a small OAuth
  relay (e.g. a free Cloudflare Worker / Netlify Function using
  [`decap-oauth`](https://decapcms.org/docs/external-oauth-clients/)). The
  booking form also needs [Formspree](https://formspree.io) instead of Netlify
  Forms (see comments in `src/components/Contact.astro`). This is the extra work
  Netlify saves you.

---

## Editing the site at /admin — plain-English owner guide

> **You do not need to touch any code.** Everything below happens in your web
> browser.

**Log in:** go to **`https://your-website-address/admin/`** and click **Login**
(use the email you were invited with). You'll see three things you can edit:

### 1. Weekly Specials
The deals in the "Weekly Specials" band (e.g. Pensioner Lunch).
- Click **Weekly Specials → New Special** (or click an existing one to change it).
- Fill in **Title**, an optional **Emoji**, the **Days** and **Times**, and a
  short **Description**.
- **Display order** controls the order — lower numbers show first.
- Click **Publish**. It appears on the live site a minute or two later.

### 2. Upcoming Events
The "What's On" section (e.g. Bingo Nights).
- **Recurring** → for things that repeat, type e.g. *"Every Wednesday & Sunday"*.
- **Date** → for one-off events instead, pick a date and leave Recurring blank.
- **Times**, **Description**, and an optional **Image** (upload a photo — it's
  saved for you).

### 3. Menu Items
Every dish across the four menus.
- **Which menu?** — choose Main, OAP, Kids or Specials. This decides which menu
  page it shows on.
- **Category** — e.g. *Starters*, *Mains*, *Desserts*. Items are grouped by this.
- **Price** — type it exactly how you want it to read, e.g. `£14.95` or
  `Market price`.
- **Description** — optional.

**How saving works:** clicking *Publish* saves your change straight into the
website's files and the site rebuilds itself automatically. If you make a
mistake, edit it again or delete the item — nothing is permanent.

**Bookings & the phone number** live in the code (they rarely change). If the
phone, email, address or opening hours ever change, ask your developer to update
`src/config/site.ts` — it's all in one clearly-labelled place.

---

## Project structure

```
public/
  admin/            Decap CMS editor (index.html + config.yml)
  images/           ← drop the site photos here (see table above)
    uploads/        photos added via /admin land here
  robots.txt
src/
  components/       Header, Hero, sections, Footer, SocialLinks, BookButton…
  config/site.ts    ← all contact details, links, image paths (single source)
  content/          the owner-editable content the CMS writes to
    specials/  events/  menu/
  content.config.ts content collection schemas (match the CMS fields)
  layouts/BaseLayout.astro   <head>, SEO/OG tags, schema.org, fonts, reveal JS
  pages/
    index.astro     single-scroll homepage
    menu/[menu].astro  generates /menu/main, /menu/oap, /menu/kids, /menu/specials
  styles/global.css  brand tokens (--porty-*) + base styles
astro.config.mjs    site URL, Tailwind, sitemap
netlify.toml        Netlify build + caching (recommended host)
.github/workflows/deploy-gh-pages.yml   GitHub Pages deploy (alternative)
```

---

## Brand & design notes

- **Colours** are defined once as Tailwind theme tokens **and** CSS variables in
  `src/styles/global.css`, then reused everywhere (`bg-porty-red`,
  `text-porty-gold`, `var(--porty-red)`) — never hardcoded inline:
  - `--porty-red` `#6B1220` · `--porty-dark` `#5C0E17` · `--porty-cream`
    `#F7F3EA` · `--porty-gold` `#E8C55F`
- **Type:** *Fraunces* (warm, characterful serif) for headings, *Karla* (clean
  sans) for body.
- **Social icons** are all one flat burgundy with a gentle lift + shift to the
  darker red on hover; 44px tap targets.
- A small **portcullis-grille gold motif** (a nod to the name) is used as the
  section divider.
- **Accessibility & SEO:** semantic HTML, visible focus rings, `prefers-reduced-
  motion` respected, alt text, Open Graph tags, and schema.org `Restaurant`
  structured data (address, phone, hours) built from `src/config/site.ts`.

---

### Things to confirm before go-live
- [ ] Real **opening hours** (currently a placeholder in `src/config/site.ts`).
- [ ] Real **menu items** and prices (sample dishes are seeded — replace via /admin).
- [ ] The six **photos** dropped into `public/images/`.
- [ ] Netlify **Identity + Git Gateway** enabled and owner invited.
- [ ] Booking-form **email notification** pointed at contact@portcullis-arbroath.co.uk.
