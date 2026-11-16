---
name: seo-expert
description: Load for SEO work on this site — auditing meta tags, fixing or extending the JSON-LD in StructuredData.tsx, local SEO for Lodi, sitemap and robots.txt, Open Graph previews, or Core Web Vitals. Knows the production domain, the business NAP data, and which SEO defects are already known.
---

# SEO Expert

SEO for a single-page React site for a family daycare in Lodi, Italy. The
audience is small and local: parents within a few kilometres searching in
Italian. Ranking for "asilo nido Lodi" matters; ranking nationally does not.

## The business, exactly

Use these values verbatim. They are the NAP data that must stay consistent
across the site, the schema and any directory listing.

| Field | Value |
|---|---|
| Name | Cavalluccio Marino di Serena |
| Type | ChildCare / asilo nido famiglia |
| Street | Viale Calabria, 2B |
| City | Lodi (LO) |
| Postal code | 26900 |
| Country | IT |
| Phone | +39 345 4131977 |
| Email | sere.massarani@gmail.com |
| Hours | Mo-Fr 08:00-17:30 |
| Capacity | 5 children, ages 0-3 |
| Founded | 2012 |
| Facebook | https://www.facebook.com/nidocavallucciomarino/ |
| WhatsApp | https://wa.me/393454131977 |
| Canonical domain | https://www.nido-cavallucciomarino.it |

`SITE_INFO` says "Aperta dal 2012" while `StructuredData.tsx` says
`foundingDate: "2009"`. That contradiction is a real defect — resolve it
against the owner, do not pick one at random.

## Current state

**What exists and works**

- `index.html` carries a full head: title, description, keywords, robots,
  canonical, theme-color, Open Graph (with image dimensions and `it_IT`
  locale), Twitter card, favicon, manifest link.
- `src/components/seo/StructuredData.tsx` defines five JSON-LD graphs:
  `Organization`, `ChildCare`, `Service`, `WebPage`, `BreadcrumbList`.
- `public/robots.txt` and `public/sitemap.xml` exist.
- `public/manifest.json` exists for PWA install.
- Semantic HTML, `<h2>` on each of the eight content sections.
- Every gallery image has descriptive Italian `alt` text.
- Self-hosted Quicksand via `@fontsource` — no third-party font request.

**What is broken** (also in `AGENTS.md` § 8 — do not re-report as new)

1. **`StructuredData` is never mounted.** `App.tsx` does not render it, so
   the page ships zero JSON-LD. This is the single highest-value fix
   available: the component is written and correct, it just is not used.
2. **`og-image.jpg` does not exist.** `index.html` (og:image, twitter:image)
   and `StructuredData.tsx` (ChildCare `image`) all point at
   `/assets/og-image.jpg`. Every social share renders without an image.
3. **Stale URLs.** `robots.txt` (`Sitemap:` line), `sitemap.xml` (all seven
   `<loc>` entries), `manifest.json` (`start_url: "/seahorse/"`) and every
   URL inside `StructuredData.tsx` still use
   `https://andrearr18.github.io/seahorse/`. The site moved to the custom
   domain and `vite.config.ts` now sets `base: '/'`.
4. **`aggregateRating` is fabricated.** Hardcoded `5.0` from `3` reviews while
   `TESTIMONIALS` holds 11. Google ignores self-declared ratings without a
   review source, and a mismatch is a trust problem. Either wire it to
   `TESTIMONIALS.length` or remove it.
5. **`index.html` preconnects to `fonts.googleapis.com` and
   `fonts.gstatic.com`** and preloads a Google Fonts stylesheet, while the
   font is self-hosted. Dead requests on every page load.
6. **`sitemap.xml` lists hash fragments** (`/#about`, `/#services`, …). Search
   engines do not index fragments as separate URLs. A single-page site needs
   one `<loc>`, not seven.
7. **Two `<h1>` elements.** `Header.tsx:45` renders the site name as `<h1>` and
   `Hero.tsx:17` renders the hero heading as another. One page, one `<h1>` —
   the hero heading is the natural candidate, with the header logo demoted to
   a `<p>` or `<span>`.

## The SPA constraint

This is a client-rendered React app with no SSR and no prerendering. Google
executes JavaScript and will see the content; most other crawlers and every
social scraper will not. That has two consequences:

- **Meta tags must live in `index.html`**, not be set at runtime. Anything
  injected by React is invisible to a scraper. Do not add a `react-helmet`
  style solution for a single-page site — it does not help the crawlers that
  matter here.
- **JSON-LD injected by React is also invisible to non-executing crawlers.**
  If schema markup is a priority, the durable fix is to move the JSON-LD into
  `index.html` as a static `<script type="application/ld+json">` block, or to
  add a prerender step. Mounting `StructuredData` in `App.tsx` is the cheap
  first step; say plainly that it only helps executing crawlers.

If prerendering is ever proposed, the realistic options are
`vite-plugin-prerender` or a static export. Both are new dependencies — ask
before adding one.

## Keyword targets

Italian, local intent. Do not translate these.

**Primary** — asilo nido Lodi · asilo nido famiglia Lodi · nido famiglia Lodi
· asilo nido San Bernardo

**Secondary** — asilo nido privato Lodi · educatrice infanzia Lodi · asilo
piccolo gruppo Lodi · nido bambini Lodi · tata professionale Lodi

**Long-tail** — asilo nido 5 bambini Lodi · asilo nido accogliente San
Bernardo · nido famiglia prezzi Lodi · iscrizioni asilo nido Lodi · asilo nido
orari flessibili Lodi · inserimento graduale nido Lodi

**Service** — attività educative bambini Lodi · metodo Montessori Lodi ·
alimentazione bambini asilo · servizio estivo nido Lodi

Where they belong: title and `h1` (primary only, once), `h2` per section,
`alt` text, the meta description, and body copy. Never stuff. The existing
copy already reads naturally — preserve that.

## Schema markup

`StructuredData.tsx` is the file. Its `ChildCare` graph is the important one;
`Organization`, `Service`, `WebPage` and `BreadcrumbList` are supporting.

When editing it:

- Keep `@type: "ChildCare"` — it is a `LocalBusiness` subtype and the correct
  type for a daycare. Do not downgrade to generic `LocalBusiness`.
- `addressRegion` should be `"LO"` (the province) or `"Lombardia"` (the
  region). The file currently says `"Lombardia"` in `addressRegion` while
  `CONTACT_INFO.address.province` is `"LO"`. Pick one convention and apply it.
- `openingHours` must match `SCHEDULE` in `constants.ts`. Both say
  `Mo-Fr 08:00-17:30` today.
- `geo` coordinates are hardcoded `45.3145, 9.5031`. Verify against the actual
  address before trusting them.
- `sameAs` should list the Facebook page. WhatsApp is a contact channel, not
  an identity — it does not belong in `sameAs`.
- Validate with the Schema Markup Validator and Rich Results Test after any
  change. A malformed graph is worse than no graph.

## Audit output format

```
## Score
Technical X/25 · Content X/25 · Local X/25 · Performance X/25 → X/100

## Blocking
- What, where (file:line), impact, fix.

## Quick wins
- Ordered by effort-to-impact. Each one concrete enough to action today.

## Local SEO
- Google Business Profile, NAP consistency, directory listings, reviews.

## Content
- Gaps, heading structure, internal linking, keyword coverage.

## Not verified
- Anything you could not check from the repo alone.
```

Be specific about impact. "Add schema markup" is not a finding; "the page
ships no JSON-LD because `StructuredData` is not mounted in `App.tsx:20`" is.

## Local SEO beyond the code

These are recommendations for the owner, not code changes. Say so when you
raise them.

- **Google Business Profile** is the highest-leverage channel for a local
  daycare — more than the website itself. Claim it, set the category to
  "Day care center", add photos, keep hours current, respond to reviews.
- **NAP consistency** across Google, Facebook, PagineGialle, and any local
  parent groups. One phone number, one address, everywhere.
- **Reviews** — the 11 testimonials on the site are strong social proof.
  Getting them onto Google Business Profile is worth more than any on-page
  optimisation.
- **Italian-language content** — the site is already correct here. Do not
  introduce English keywords.

## Performance targets

Core Web Vitals: LCP < 2.5s, INP < 200ms, CLS < 0.1. Lighthouse mobile ≥ 90.

The realistic wins on this site, in order:

1. Remove the dead Google Fonts preconnect and preload.
2. Add `og-image.jpg` at 1200x630 and compress it.
3. Serve the gallery photos as WebP with `width`/`height` set to prevent CLS.
   They are currently JPEG at full resolution.
4. Keep `loading="lazy"` on everything below the fold.
5. Do not add a font-weight you do not use — five Quicksand weights are
   imported in `main.tsx`.

## Tools

Google Search Console · Google Business Profile · PageSpeed Insights ·
Schema Markup Validator (validator.schema.org) · Rich Results Test ·
Lighthouse in Chrome DevTools.
