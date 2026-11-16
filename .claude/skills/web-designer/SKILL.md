---
name: web-designer
description: Load for visual or UX work on this site — auditing design-token compliance, designing or restyling a component, reviewing responsive behaviour, checking accessibility and contrast, or polishing spacing and typography. Ships reference directives for colours, typography, spacing, components, responsive rules and the design system.
---

# Web Designer

Visual consistency, accessibility and UX for the Cavalluccio Marino site. The
audience is parents choosing childcare — the design has to read as warm,
safe and competent, not as a template.

## Read the directives, do not guess

Six reference files sit in `directives/`. Read the one you need rather than
loading all of them:

| File | Contents |
|---|---|
| `directives/design-system.md` | Philosophy, CSS architecture, key measurements, a11y standards |
| `directives/colors.md` | Full palette, contrast ratios, usage rules |
| `directives/typography.md` | Font stack, scale, hierarchy, fluid sizing |
| `directives/spacing.md` | 8px scale, layout rhythm, section padding |
| `directives/components.md` | Button, card, form, navigation, section patterns |
| `directives/responsive.md` | Breakpoints, mobile-first rules, touch targets |

`src/styles/variables.css` is the authority. If a directive and the CSS
disagree, the CSS wins and the directive needs fixing — say so.

## The design system, condensed

**Colour** — pastel, and the contrast maths matters:

| Token | Hex | Contrast on white | Use |
|---|---|---|---|
| `--color-primary` | `#ADD8E6` | 2.4:1 ✗ | Backgrounds, CTAs, header |
| `--color-secondary` | `#98FF98` | 1.5:1 ✗ | Backgrounds, accents only |
| `--color-accent` | `#FFB6C1` | 1.7:1 ✗ | Backgrounds, highlights |
| `--color-text-dark` | `#333333` | 12.6:1 ✓ | Body text |
| `--color-text-light` | `#666666` | 5.7:1 ✓ | Secondary text |
| `--color-cta-hover` | `#8BC7E0` | 2.0:1 ✗ | Hover state only |

None of the three brand pastels passes AA as text on white. They are
backgrounds. Text on them is `#333`. This is the single most common mistake
to catch in review.

**Spacing** — 8px base: `xs` 8 · `sm` 16 · `md` 32 · `lg` 48 · `xl` 64 ·
`2xl` 96. Section padding is `lg` mobile, `xl` desktop.

**Typography** — Quicksand 300-700, self-hosted via `@fontsource/quicksand`
and imported in `main.tsx`. Base 16px. Headings are fluid with `clamp()`.
Line heights: `tight` 1.2 for headings, `relaxed` 1.6 for body.

**Radius** — `sm` 8 · `md` 12 · `lg` 16 · `full` 9999. Nothing sharp. A 0px
corner is a bug in this design language.

**Shadows** — `sm`/`md`/`lg` neutral, plus `--shadow-colored-sm/md/lg` tinted
with the brand pastels, and `--shadow-hero` for the hero card.

**Motion** — `--transition-fast` 0.2s, `--transition-normal` 0.3s,
`--animation-fast/normal/slow` 0.4/0.8/1.2s. Easing: `--ease-out-expo` for
entrances, `--ease-in-out-back` for playful accents. Every animation needs a
`prefers-reduced-motion` fallback.

**Layout** — container max 1200px, header 80px fixed. Z-index scale:
`--z-index-header` 1000, `--z-index-fab` 999.

## Breakpoints

The CSS is mobile-first with two upward layers, plus two downward exceptions:

```css
/* base = mobile */
@media (min-width: 768px)  { }   /* tablet and up — 18 uses */
@media (min-width: 1024px) { }   /* desktop — 2 uses */
@media (max-width: 768px)  { }   /* 4 uses, legacy */
@media (max-width: 480px)  { }   /* 3 uses, small phones */
```

Prefer `min-width`. The `max-width` queries are existing debt — do not add
more, and do not convert them as a side effect of an unrelated change.

Touch targets: 44x44px minimum. Test at 375px, 768px and 1280px.

## Components

| Component | File | Notes |
|---|---|---|
| `Button` | `ui/Button.tsx` | 4 variants (primary, secondary, outline, hero), 3 sizes, pill radius |
| `Card` | `ui/Card.tsx` | Optional image, title, description, highlights |
| `ContactForm` | `ui/ContactForm.tsx` | Client-side validation, opens a `wa.me` link |
| `FloatingActionButton` | `ui/FloatingActionButton.tsx` | WhatsApp, fixed bottom-right, `aria-label` present |
| `SectionContainer` | `ui/SectionContainer.tsx` | Wraps a section with `react-scroll` `Element` and `.container` |
| `TestimonialPopup` | `ui/TestimonialPopup.tsx` | Modal, Escape to close, click-outside to close |

Sections: Hero, About, Training, Services, Gallery, Testimonials, Schedule,
Contact, Location.

## What to check

**Token compliance** — no hardcoded hex, px spacing, radius or duration. A
literal `#ADD8E6` in a module is a finding; `var(--color-primary)` is not.

**Contrast** — pastel as text on white is the recurring failure. Also check
text on pastel backgrounds, and placeholder text in the form.

**Responsive** — no horizontal scroll at 320px. The gallery carousel is the
place this breaks: it scrolls horizontally by design, so verify the overflow
is contained and does not leak to `body`.

**Touch** — 44px minimum on the mobile menu toggle, nav links, the FAB and
form controls.

**Focus** — visible on every interactive element. `--focus-ring` exists; use
it. `outline: none` without a replacement is a finding.

**Motion** — `Gallery` auto-scrolls every 4s and resumes 8s after
interaction. `Testimonials` auto-advances. Both need a reduced-motion path.

**Semantics** — `<h2>` on each of the eight content sections. There are
currently **two `<h1>`s** (`Header.tsx:45` and `Hero.tsx:17`); one page should
have one. Do not add a third.

**Copy tone** — Italian, warm, informal, reassuring. Not corporate, not
childish. The existing copy is the reference.

## Known issues

Documented in `AGENTS.md` § 8. Do not re-report:

- `--color-background-light` (used in `Gallery.tsx`) and `--shadow-xl` are
  referenced but never defined — they resolve to nothing.
- `og-image.jpg` is missing, so social previews have no image.
- `About.tsx` uses `src="assets/tata_baby_cap.jpeg"` without a leading slash.
- `TestimonialPopup` does not trap focus or restore it on close.

## Audit output format

```
## Design health
Visual X/25 · Responsive X/20 · Accessibility X/25 · UX X/20 · Brand X/10 → X/100

## Blocking
- Issue · location (file:line) · user impact · fix · which directive it violates

## Refinements
- Spacing, colour, typography, motion — one line each, with the token to use.

## Accessibility
- Issue · WCAG criterion · fix · how to verify.

## Responsive
- Breakpoint · what breaks · fix.

## Design system
- Tokens or patterns that should be added, changed or removed.
```

Every finding names the file and line, the token or directive it violates,
and the concrete fix. "Improve spacing" is not a finding.

## Principles

1. **Consistency over novelty.** Reuse the token and the existing pattern.
   A new shade of blue is a defect, not a design decision.
2. **Mobile-first.** Base styles are the phone layout.
3. **Accessible by default.** AA is the floor, not an enhancement.
4. **Warm, not childish.** Rounded and soft, but the typography and spacing
   stay disciplined. This is a professional service for anxious parents.
5. **Restraint.** Ample white space, one idea per section, no competing CTAs.
