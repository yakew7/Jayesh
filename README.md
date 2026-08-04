# Jayesh Learning Centre — Website

The marketing site for **Jayesh Learning Centre (JLC)**, a one-to-one and small-batch tutoring centre in Mulund West, Mumbai, coaching Grades 6–12 across **ICSE, Cambridge IGCSE, IB (MYP & Diploma)** and **Olympiads**.

**Live site:** https://jayesh-sigma.vercel.app

## What this is

A static, multi-page marketing and lead-generation site. Every enquiry point (hero CTAs, per-programme buttons, the enquiry form) opens WhatsApp with a pre-filled, context-specific message so a parent never has to type out what they're asking about.

No build step, no framework, no dependencies — plain HTML, CSS and vanilla JS, deployed on Vercel.

## Structure

```
├── index.html                 Homepage
├── about.html                 About JLC / founder
├── approach.html               Student journey (admission → board results)
├── courses.html                ICSE, IGCSE, IB MYP/Diploma programme detail
├── admissions.html             Admissions process
├── olympiads.html               Learning clubs & Olympiad prep
├── results.html / wall-of-excellence.html   Toppers & achievements
├── testimonials.html            Parent/student testimonials
├── beyond-classroom.html        Sports, trips, extracurriculars
├── facilities.html              Campus & facilities
├── learning-hub.html            Worksheets, papers, resources
├── recommend.html               Programme-recommendation quiz
├── counselling.html / contact.html   Booking & contact
├── faqs.html / terms.html       FAQs and Terms & Conditions
├── 404.html                     Custom not-found page
├── assets/
│   ├── css/styles.css           Design system (single stylesheet)
│   ├── js/main.js                Nav, reveals, counters, quiz, WhatsApp links
│   └── img/                      WebP images (+ og-image.jpg for social previews)
├── robots.txt / sitemap.xml      Crawler directives + indexable URLs
├── site.webmanifest              PWA manifest
└── vercel.json                   Clean URLs, redirects, security headers
```

## Conventions

- **Clean URLs.** `vercel.json` sets `cleanUrls: true`, so pages are linked without the `.html` extension (`/about`, not `/about.html`); Vercel 301s the old extension automatically.
- **WhatsApp-first contact.** `assets/js/main.js` rewrites every `[data-wa]` element and `form[data-wa-form]` submission into a `wa.me` deep link with a pre-filled message. `WA_NUMBER` in that file is the single source of truth for the number.
- **Structured data.** Every indexable page emits one `@graph` JSON-LD block (Organization, WebSite, BreadcrumbList, WebPage, plus FAQPage/Person/CollectionPage/Course where relevant).
- **Images are WebP**, referenced directly (no `<picture>` fallback needed — WebP has full support across current browsers).
- **Motion respects `prefers-reduced-motion`** throughout (see the media query in `styles.css` and the `reduceMotion` check in `main.js`).

## Local development

No build step required — open any `.html` file directly, or serve the directory:

```bash
python3 -m http.server 8080
# visit http://localhost:8080
```

Note: internal links use extensionless clean paths (e.g. `href="about"`), which only resolve correctly under a server that rewrites those to `about.html` (as Vercel does in production). For local preview of the full clean-URL behaviour, use the Vercel CLI instead:

```bash
npx vercel dev
```

## Deployment

Hosted on **Vercel**, deploying automatically from `main`. `vercel.json` configures clean URLs and response headers (CSP, HSTS, cache control for `/assets`, icons, `sitemap.xml`, `robots.txt`).

## SEO / discoverability housekeeping

- `robots.txt` allows all major search and AI crawlers (Googlebot, Bingbot, DuckDuckBot, GPTBot, ClaudeBot, PerplexityBot, etc.) and points to `sitemap.xml`.
- After deploying to a new domain, update the `SITE` constant's usages across `robots.txt`, `sitemap.xml`, and the canonical/OG URLs baked into each page's `<head>`.
- Submit `sitemap.xml` to Google Search Console and Bing Webmaster Tools after any domain change.

## Contributing

This is a small business site maintained directly by the JLC team. If you're a developer picking this up: keep the no-build-step, single-stylesheet approach — it's intentional, not a shortcut.
