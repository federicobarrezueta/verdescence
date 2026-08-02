# Verdescence — Marketing Site

Green automation & robot farmers for agriculture. Built with Astro + Tailwind CSS.

## Stack

- **Astro** — static site framework (zero JS shipped by default)
- **Tailwind CSS** — styling, with custom palette tokens
- **Fonts** — Space Grotesk (display) + Inter (body) + Fraunces (serif accent) via Google Fonts
- **Forms** — Formspree (no backend)
- **Deploy** — Vercel (recommended)

## Local development

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs dist/
npm run preview  # preview the production build
```

## Enabling the contact form

The contact form posts to Formspree. To wire it up:

1. Create a free account at https://formspree.io
2. Create a new form — you'll get an endpoint like `https://formspree.io/f/abcdwxyz`
3. Copy `.env.example` to `.env` and set the endpoint:

```
PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/abcdwxyz
```

Without this variable the form renders but does not submit.

## Project structure

```
src/
├── components/   Header, Hero, Problem, Solution, WhyNow,
│                 HowItWorks, About, Contact, Footer, Logo
├── layouts/      Base.astro   (SEO, fonts, global styles)
├── pages/        index.astro  (composes all sections)
└── styles/        global.css   (Tailwind directives + tokens)
```

## Brand tokens

Defined in `tailwind.config.mjs`:

| Token | Value | Use |
|---|---|---|
| `botanic` | `#2A6E3E` | primary green (richer emerald) |
| `sage` | `#7A9B7E` | secondary accent (muted green) |
| `cream` | `#F4F6F0` | background (cool, hint of green) |
| `ink` | `#1A2418` | text (green-tinted black) |

Fonts: `font-display` (Space Grotesk), `font-sans` (Inter), `font-serif` (Fraunces).

## Deploy to Vercel

1. Push this repo to GitHub.
2. In Vercel, **Add New -> Project**, import the GitHub repo.
3. Framework preset: **Astro** (auto-detected). Build command `npm run build`, output dir `dist`.
4. Add the `PUBLIC_FORMSPREE_ENDPOINT` env var under **Settings -> Environment Variables**.
5. Deploy. Vercel gives you a staging URL immediately.
6. Once your domain is registered (`verdescence.com`), in Vercel go to
   **Settings -> Domains -> Add**, then point your registrar's DNS:
   - Add a `CNAME` record `@ -> cname.vercel-dns.com` (or use the A record Vercel shows)
   - Add a `CNAME` record `www -> cname.vercel-dns.com`
7. Verify Vercel issues the TLS certificate automatically.

## Domain

**Primary:** `verdescence.com` (verified available via Verisign RDAP).
Also check `verdescence.ai` (no DNS records at time of writing — likely available).
Registrars: Porkbun, Namecheap, or Cloudflare Registrar.