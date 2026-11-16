# AGENTS.md

Canonical instructions for AI agents working in this repository.

This file is read natively by **Mistral Vibe** and imported by **Claude Code**
through `CLAUDE.md`. Keep it the single source of truth: when project
conventions change, change them here, not in `CLAUDE.md`.

---

## 1. What this project is

Marketing website for **Cavalluccio Marino di Serena**, a family daycare
(*asilo nido famiglia*) in San Bernardo, Lodi, Italy. One page, Italian
language, no backend, no database, no authentication.

| | |
|---|---|
| Live site | https://www.nido-cavallucciomarino.it |
| Repository | https://github.com/andrearr18/seahorse |
| Audience | Local parents of children aged 0-3 |
| Owner | Serena Massarani (sole educator, max 5 children) |
| Language | Italian only — no i18n layer, no English strings |

The content is business-critical. Phone number, address, opening hours and
service descriptions must match reality. Never invent a fact about the
daycare: if a detail is missing, ask rather than guess.

---

## 2. Stack

Versions below are what is actually installed, not what `package.json` ranges
allow.

| Layer | Choice | Installed |
|---|---|---|
| UI | React | 18.3.1 |
| Language | TypeScript (strict) | 5.9.3 |
| Bundler | Vite | 8.3.8 — see known issue 10 |
| Styling | CSS Modules + CSS custom properties | — |
| Icons | `react-icons` (Font Awesome set) | 5.5.0 |
| Scroll | `react-scroll` | 1.9.3 |
| Font | `@fontsource/quicksand` (self-hosted) | 5.2.10 |
| Lint | ESLint 8 with `.eslintrc.cjs` (legacy config) | 8.57.1 |
| CI/CD | GitHub Actions → GitHub Pages | — |

No test runner is installed. There is no unit, integration or e2e suite.
Verification is `type-check` + `lint` + `build` + a manual look at the page.

---

## 3. Commands

```bash
npm install          # install dependencies
npm run dev          # dev server, http://localhost:5173/
npm run build        # tsc && vite build  → dist/
npm run preview      # serve the production build locally
npm run type-check   # tsc --noEmit
npm run lint         # eslint src --ext ts,tsx --max-warnings 0
npm run lint:fix     # eslint --fix
```

`npm run lint` fails on **any** warning (`--max-warnings 0`), and CI runs it
before the build. A warning is a build failure.

There is no `deploy` script. Deployment is automatic — see section 8.

**Definition of done for any code change:** `npm run type-check` and
`npm run lint` both exit 0, and `npm run build` succeeds.

---

## 4. Repository layout

```
.
├── AGENTS.md                  # this file — canonical agent instructions
├── CLAUDE.md                  # Claude Code entry point, imports AGENTS.md
├── index.html                 # HTML shell: meta tags, OG/Twitter, favicon
├── vite.config.ts             # base '/', path aliases, build output
├── tsconfig.json              # strict mode, path mappings
├── .eslintrc.cjs              # ESLint 8 legacy config
├── .github/workflows/deploy.yml
├── public/                    # copied verbatim into dist/
│   ├── CNAME                  # www.nido-cavallucciomarino.it
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── manifest.json
│   └── assets/                # photos, logo-placeholder.svg
└── src/
    ├── main.tsx               # entry: font imports, global CSS, React root
    ├── App.tsx                # section composition order
    ├── components/
    │   ├── layout/            # Header, Navigation, Footer
    │   ├── sections/          # Hero, About, Training, Services, Gallery,
    │   │                      # Testimonials, Schedule, Contact, Location
    │   ├── seo/               # StructuredData (JSON-LD)
    │   └── ui/                # Button, Card, ContactForm,
    │                          # FloatingActionButton, SectionContainer,
    │                          # TestimonialPopup
    ├── styles/
    │   ├── variables.css      # ALL design tokens
    │   ├── global.css         # reset, base elements, .container
    │   ├── typography.css     # heading scale, fluid type
    │   └── components/        # one *.module.css per component
    ├── types/index.ts         # every shared interface
    └── utils/constants.ts     # every piece of site content
```

### Section order

`App.tsx` renders, in order: Hero → About → Training → Services → Gallery →
Testimonials → Schedule → Contact → Location, wrapped by Header, Footer and
`FloatingActionButton`.

`NAV_ITEMS` in `constants.ts` only links to `home`, `about`, `services`,
`schedule`, `contact`. Training, Gallery, Testimonials and Location are
reachable by scrolling only. Adding a nav entry means adding it to
`NAV_ITEMS`, not to `App.tsx`.

---

## 5. Conventions

### Content lives in `src/utils/constants.ts`

Every user-visible string, image path, phone number and address is exported
from this one file as a typed, `as const` constant:

`CONTACT_INFO`, `SCHEDULE`, `SOCIAL_LINKS`, `SITE_INFO`, `NAV_ITEMS`,
`VALUES`, `SERVICES`, `TESTIMONIALS`, `TRAINING_AREAS`, `GALLERY_IMAGES`.

Do not hardcode copy inside a component. Add or edit the constant, then read
it in the component. This is what keeps the Italian copy reviewable in one
place.

### Types live in `src/types/index.ts`

All shared interfaces are here, one file. Component-local prop interfaces are
allowed only when they are not reused (see `TestimonialPopup`). Import types
with `import type { ... }`.

### TypeScript is strict, and stricter than default

`tsconfig.json` enables `strict`, `noUnusedLocals`, `noUnusedParameters`,
`noUncheckedIndexedAccess`, `noImplicitReturns`, `noFallthroughCasesInSwitch`.

`noUncheckedIndexedAccess` is the one that bites: `array[i]` is
`T | undefined`. Handle it — do not reach for `!`.

Rules:
- No `any`. ESLint warns on it and warnings fail the build.
- No non-null assertions (`!`) to silence the compiler.
- Prefer inference over redundant annotations, but annotate exported
  function return types.
- `React.FC` is the established component style here. Match it.

### Styling

- One CSS Module per component, in `src/styles/components/<Name>.module.css`,
  imported as `import styles from '...'`.
- **Never hardcode a colour, spacing value, radius, shadow or duration.** Use
  the token from `variables.css`. If a token is missing, add it to
  `variables.css` first.
- Global classes (`.container`) come from `global.css`; everything else is a
  module class.
- Mobile-first: base styles are the mobile layout, `@media (min-width: 768px)`
  and `(min-width: 1024px)` layer up. The codebase also uses a few
  `max-width` queries at 768px and 480px — follow the file you are editing.

### Path aliases

`@/*`, `@components/*`, `@utils/*`, `@styles/*` are configured in both
`vite.config.ts` and `tsconfig.json`. They exist, but most existing files use
relative imports (`../../utils/constants`). Match the surrounding file rather
than converting imports.

### Accessibility is not optional

Semantic elements, labelled form controls, `aria-label` on icon-only buttons,
visible focus states, `alt` text on every image, and `rel="noopener noreferrer"`
on every `target="_blank"` link. The site targets WCAG 2.1 AA.

---

## 6. Design system

Tokens are defined in `src/styles/variables.css`. That file is the authority;
the summary below is a convenience.

**Colour**

| Token | Value | Role |
|---|---|---|
| `--color-primary` | `#ADD8E6` | Light blue — trust, CTAs, header |
| `--color-secondary` | `#98FF98` | Mint — growth, accents |
| `--color-accent` | `#FFB6C1` | Soft pink — warmth, highlights |
| `--color-text-dark` | `#333333` | Body text |
| `--color-text-light` | `#666666` | Secondary text |
| `--color-background` | `#F9FAFB` | Section background |
| `--color-cta-hover` | `#8BC7E0` | CTA hover |
| `--color-whatsapp` | `#25D366` | WhatsApp FAB |
| `--color-success` / `--color-error` | `#10B981` / `#EF4444` | Form states |

The pastels are light. `#ADD8E6` on white is ~2.4:1 and `#98FF98` is ~1.5:1 —
both fail AA for body text. Use them as backgrounds with `#333` text, never as
text colour on white.

**Spacing** — 8px base: `xs` 8, `sm` 16, `md` 32, `lg` 48, `xl` 64, `2xl` 96.

**Typography** — Quicksand, weights 300-700, base 16px, fluid headings via
`clamp()`. Line heights 1.2 / 1.5 / 1.6 / 1.8.

**Radius** — `sm` 8, `md` 12, `lg` 16, `full` 9999. Nothing sharp.

**Breakpoints** — mobile < 768, tablet 768-1023, desktop 1024+. Container max
1200px. Header height 80px.

**Motion** — `--transition-fast` 0.2s, `--transition-normal` 0.3s,
`--animation-fast/normal/slow` 0.4/0.8/1.2s, easing `--ease-out-expo` and
`--ease-in-out-back`. Respect `prefers-reduced-motion` when adding animation.

---

## 7. Deployment

Automatic. Every push to `main` — which includes every merged PR — triggers
`.github/workflows/deploy.yml`:

```
push to main
  └── build job:  npm ci → npm run lint → npm run build → upload dist/
  └── deploy job: publish the artifact to GitHub Pages
```

Concurrency group `pages` with `cancel-in-progress: false`, so a second merge
waits for the in-flight deploy instead of cancelling it.

Consequences for agents:
- **Never** add a `gh-pages` dependency or a manual deploy script. That was
  removed; the workflow replaced it.
- `public/` is copied verbatim into `dist/`. `public/CNAME` is what tells
  Pages the custom domain. A `CNAME` at the repository root is ignored.
- `vite.config.ts` sets `base: '/'` because the site is served from the apex
  custom domain, not from a `/seahorse/` subpath.
- Lint runs in CI. A warning blocks the deploy.

---

## 8. Known issues

These are real and unfixed. Do not "discover" them again, and do not fix them
as a side effect of an unrelated task — raise them instead.

1. **`@types/react` is 19.2.7 while React is 18.3.1.** Type definitions are a
   major version ahead of the runtime. It type-checks today, but it is the
   most likely source of a confusing error. Pinning `@types/react` and
   `@types/react-dom` to `^18` is the correct fix.
2. **Two CSS variables are used but never defined.** `--color-background-light`
   at `src/components/sections/Gallery.tsx:89` and `--shadow-xl` at
   `src/styles/components/TestimonialPopup.module.css:26`. Both silently
   resolve to nothing.
3. **`og-image.jpg` does not exist.** `index.html` and `StructuredData.tsx`
   reference `/assets/og-image.jpg` for Open Graph, Twitter and schema. Social
   previews are broken until a 1200x630 image is added.
4. **Stale absolute URLs.** `public/robots.txt`, `public/sitemap.xml`,
   `public/manifest.json` (`start_url: "/seahorse/"`) and every URL in
   `StructuredData.tsx` still point at `andrearr18.github.io/seahorse/`
   instead of `https://www.nido-cavallucciomarino.it/`.
5. **`index.html` still preconnects and preloads Google Fonts**, but Quicksand
   is self-hosted through `@fontsource/quicksand` and imported in `main.tsx`.
   The preconnect/preload are dead weight.
6. **`About.tsx` uses `src="assets/tata_baby_cap.jpeg"`** — a relative path
   with no leading slash, unlike every other asset reference. It works only
   because the page is served from the root.
7. **`StructuredData` is not rendered.** `src/components/seo/StructuredData.tsx`
   is complete and exports a component, but nothing imports it — `App.tsx`
   never mounts it, so no JSON-LD reaches the page.
8. **`aggregateRating` in `StructuredData.tsx` is hardcoded** to 5.0 / 3
   reviews while `TESTIMONIALS` holds 11. Google also ignores self-declared
   ratings without a review source.
9. **ESLint 8 with `.eslintrc.cjs`.** ESLint 9 and flat config are current.
   Migrating is a separate task, not a drive-by change.
10. **`vite` and `@vitejs/plugin-react` were bumped by an `npm audit fix` run**
    — vite `^5.1.0` → `^8.3.8`, plugin `^4.2.1` → `^6.3.0`. The pair is
    consistent and the build passes, but that is a three-major jump nobody
    chose deliberately. Review it before depending on it.
11. **Two `<h1>` elements on one page.** `Header.tsx:45` renders the site name
    as `<h1>` and `Hero.tsx:17` renders the hero heading as another. The eight
    content sections correctly use `<h2>`.

---

## 9. Working agreements

- **Read before editing.** Read the whole file, plus `constants.ts` and
  `types/index.ts` when the change touches content or props.
- **Minimal diff.** Do not reformat, reorder imports, or rename things that
  the task did not ask about.
- **Match the file.** The codebase uses double quotes in TS, single quotes in
  CSS, 2-space indent, semicolons, and JSDoc blocks above components.
- **No new dependencies** without asking. This is a small static site; the
  dependency list is deliberately short.
- **No backend.** The contact form has no server. It validates client-side and
  opens a pre-filled `wa.me` link. Do not add an API call, a form service, or
  an email endpoint.
- **Italian copy.** Write user-facing text in Italian, warm and professional,
  using the informal register the existing copy uses. Do not translate the
  site into English.
- **Commit messages** are short, imperative, sentence case, no emoji.

---

## 10. Agent tooling

### Skills

Four project skills live in `.claude/skills/`, each a directory with a
`SKILL.md` carrying YAML frontmatter:

| Skill | Use it for |
|---|---|
| `typescript-master` | Type errors, generics, strict-mode refactors, prop typing |
| `code-reviewer` | Pre-commit review, security, a11y, performance |
| `seo-expert` | Meta tags, JSON-LD, local SEO for Lodi, Core Web Vitals |
| `web-designer` | Design-token compliance, responsive and a11y audits |

`web-designer` ships reference files under `directives/` — read them on demand
rather than loading all of them.

**Claude Code** discovers `.claude/skills/` natively.

**Mistral Vibe** reads the same directory because `.vibe/config.toml` sets:

```toml
skill_paths = [".claude/skills"]
```

That path is relative to the working directory, so **launch Vibe from the
repository root**. `.vibe/config.toml` only loads in a trusted folder.

One copy of each skill, two agents. Do not duplicate skills into
`.vibe/skills/`.

### Instruction files

- `AGENTS.md` — this file. The authority.
- `CLAUDE.md` — a pointer, not a document. It imports `AGENTS.md` and holds
  only what is Claude Code specific (the pre-approved commands in
  `.claude/settings.local.json`). Never duplicate content from here into it.

### Verifying a change

```bash
npm run type-check && npm run lint && npm run build
```

Then check the affected section in `npm run dev` at 375px, 768px and 1280px.
