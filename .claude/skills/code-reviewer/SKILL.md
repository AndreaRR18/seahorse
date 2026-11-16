---
name: code-reviewer
description: Load before committing or opening a PR, or when asked to review a component, a diff, or the whole codebase for quality, security, accessibility or performance. Knows this repo's lint gate, strict TypeScript rules, CSS Module conventions and the specific defects already known to exist.
---

# Code Reviewer

Review code in this repository against what this repository actually requires.
A generic checklist produces generic findings; the value here is knowing which
mistakes are likely and which are already known.

## The gate

```bash
npm run type-check   # tsc --noEmit
npm run lint         # eslint src --ext ts,tsx --max-warnings 0
npm run build        # tsc && vite build
```

`--max-warnings 0` means a warning is a failure. CI runs `npm run lint` before
`npm run build`, so a warning blocks the deploy. There is no test suite — these
three commands plus a manual look at the page are the whole verification story.

If you cannot run them, say so. Do not describe code as verified when it was
only read.

## What to check, in priority order

### 1. Content correctness

This is a real business's website. A wrong phone number, address or opening
time is a worse bug than any type error.

- Every user-visible string comes from `src/utils/constants.ts`, not from a
  literal in a component.
- `CONTACT_INFO` phone `+39 345 4131977`, email `sere.massarani@gmail.com`,
  address `Viale Calabria, 2B — 26900 Lodi (LO)`.
- `SCHEDULE` is Monday-Friday, 08:00-17:30, closed on holidays and in August.
- `SERVICES` claims a maximum of 5 children. That number appears in the hero,
  the about section, the services and the schema markup. It must agree
  everywhere.
- Italian copy, informal register, no English leakage, no machine-translated
  phrasing.

### 2. Type safety

- No `any` (ESLint warns → build fails).
- No non-null assertions (`!`). `noUncheckedIndexedAccess` is on, so indexed
  reads are `T | undefined` and must be narrowed.
- `import type` for type-only imports (`isolatedModules`).
- No `as` casts except at a real boundary — DOM event targets, a `keyof`
  index that is provably in range.
- Interfaces in `src/types/index.ts` must match the data in `constants.ts`.
  A mismatch there is the most common source of type errors in this repo.

### 3. React correctness

- Effect cleanup: every `addEventListener`, `setInterval` and `setTimeout`
  has a matching teardown. `Gallery.tsx` and `TestimonialPopup.tsx` are the
  files to check closely — they manage timers and document-level listeners.
- Dependency arrays are complete. `Gallery.tsx` has a `useEffect` that calls
  `handleUserInteraction` without listing it; that is a real (benign) gap,
  not a pattern to copy.
- `key` props are stable. `Gallery.tsx` uses `key={`gallery-${index}`}` on a
  static list — acceptable because the list never reorders, but a stable id
  would be better.
- No state mutation. `ContactForm` builds new objects with spread; keep that.
- `window.open` results are not checked. `ContactForm` calls
  `window.open(whatsappUrl, '_blank')` and ignores a popup blocker. Worth
  flagging when the form is in scope.

### 4. Accessibility

Target is WCAG 2.1 AA.

- Semantic elements: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`.
- Every `<img>` has a meaningful `alt`. Decorative images get `alt=""`.
- Icon-only controls have `aria-label` — `FloatingActionButton` does this
  correctly; use it as the reference.
- Form inputs are associated with `<label>`; errors are announced, not just
  coloured red.
- Focus is visible. `--focus-ring` exists in `variables.css`; use it.
- Modals: `TestimonialPopup` sets `role="dialog"`, `aria-modal="true"` and
  handles Escape. It does **not** trap focus or restore it on close — flag
  that when the popup is in scope.
- Colour contrast: the pastel palette fails AA as text on white. `#ADD8E6` is
  ~2.4:1, `#98FF98` is ~1.5:1. They are backgrounds, never text colour.

### 5. Security

The attack surface is small — no backend, no auth, no user data stored — so
review these specifically:

- Every `target="_blank"` link carries `rel="noopener noreferrer"`.
  `FloatingActionButton` and the footer links are the places to check.
- `dangerouslySetInnerHTML` appears exactly once, in `StructuredData.tsx`,
  and only with `JSON.stringify` of a local object. That is acceptable. Any
  new use with interpolated user input is not.
- The contact form interpolates user input into a `wa.me` URL. It is
  `encodeURIComponent`-ed, which is correct. Verify any change keeps that.
- No secrets in the repo. There is no `.env` and no API key.
- No `eval`, no `new Function`, no dynamic `import()` of a user-controlled
  path.

### 6. Performance

- Images: `loading="lazy"` below the fold. `Gallery.tsx` has it; check new
  images do too. The hero background is a CSS `url()` and cannot be lazy —
  it should stay small.
- No unnecessary `useMemo`/`useCallback`. This site is small; adding them
  everywhere is noise, not optimisation.
- Bundle: `react-icons` is imported per-icon (`import { FaWhatsapp } from
  'react-icons/fa'`). A barrel import of the whole set would bloat the
  bundle — flag it.
- Animations respect `prefers-reduced-motion`.

### 7. Styling

- No hardcoded colour, spacing, radius, shadow or duration. Everything comes
  from `variables.css`.
- One CSS Module per component in `src/styles/components/`.
- Mobile-first: base styles are mobile, `min-width: 768px` and
  `min-width: 1024px` layer up.
- A token used but not defined is a silent failure. `--color-background-light`
  and `--shadow-xl` are currently in that state — do not add a third.

## Known issues — do not re-report as new

These are documented in `AGENTS.md` § 8. Mention them only if the change
under review touches them:

1. `@types/react` 19.2.7 against React 18.3.1.
2. `--color-background-light` and `--shadow-xl` undefined.
3. `og-image.jpg` referenced but missing.
4. `robots.txt`, `sitemap.xml`, `manifest.json` and `StructuredData.tsx`
   still point at `andrearr18.github.io/seahorse/`.
5. `index.html` preconnects to Google Fonts while the font is self-hosted.
6. `About.tsx` uses a relative asset path without a leading slash.
7. `StructuredData` is never mounted in `App.tsx`.
8. `aggregateRating` hardcoded to 5.0 / 3 reviews against 11 testimonials.
9. ESLint 8 legacy config.
10. `vite` bumped 5 → 8 and `@vitejs/plugin-react` 4 → 6 by an `npm audit fix`.
11. Two `<h1>` elements: `Header.tsx:45` and `Hero.tsx:17`.

## Output format

Lead with the verdict, then the findings. No preamble.

```
## Verdict
Ship / Ship with fixes / Do not ship — one sentence on why.

## Blocking
- file.tsx:42 — what is wrong, why it matters, the fix.

## Should fix
- file.tsx:88 — same shape.

## Consider
- Optional improvements, one line each.

## Not checked
- Anything you could not verify, and why.
```

Rules for the findings themselves:

- **Cite the line.** `src/components/ui/ContactForm.tsx:63`, not "the form".
- **Show the fix.** A short diff or the corrected line, not a description of
  one.
- **Rank honestly.** If nothing is blocking, say so and stop. Inventing
  severity to look thorough wastes the reader's time.
- **Do not restate the file.** The author wrote it; they know what it does.
- **Say what you did not run.** "I read this; I did not run the build" is a
  useful sentence. "Verified" without a command in the transcript is not.

## Review modes

If the request names a mode, honour it:

| Mode | Scope |
|---|---|
| Full review | All seven sections above |
| Type safety only | Sections 2 and 3 |
| Security review | Section 5, plus the form and every external link |
| Performance review | Section 6, plus bundle and image weight |
| Accessibility review | Section 4, plus a keyboard walkthrough |
| Quick review | Blocking findings only, no more than five lines |
