# Color System - Cavalluccio Marino

Complete color palette and usage guidelines for maintaining visual consistency and accessibility.

## Color Philosophy

The Cavalluccio Marino color palette uses soft pastels to create a warm, nurturing, and professional atmosphere. Each color is carefully chosen to evoke specific emotions and maintain WCAG AA accessibility standards.

## Brand Colors

### Primary: Light Blue
```css
--color-primary: #ADD8E6
```
**RGB**: 173, 216, 230
**HSL**: 195°, 53%, 79%

**Meaning**: Trust, calm, reliability, professionalism
**Use Cases**:
- Primary buttons and CTAs
- Header background
- Links and interactive elements
- Primary icons
- Active navigation items

**Accessibility**:
- Contrast on white: 2.4:1 ❌ (Use for large text or backgrounds only)
- Use darker text (#333) on this background ✓

### Secondary: Mint Green
```css
--color-secondary: #98FF98
```
**RGB**: 152, 255, 152
**HSL**: 120°, 100%, 80%

**Meaning**: Growth, freshness, nature, vitality
**Use Cases**:
- Secondary buttons
- Accent backgrounds
- Success states
- Supporting icons
- Decorative elements

**Accessibility**:
- Contrast on white: 1.5:1 ❌ (Background use only)
- Use dark text (#333) on this background ✓

### Accent: Soft Pink
```css
--color-accent: #FFB6C1
```
**RGB**: 255, 182, 193
**HSL**: 351°, 100%, 86%

**Meaning**: Care, warmth, gentleness, affection
**Use Cases**:
- Tertiary buttons
- Highlights and emphasis
- Decorative accents
- Hover states
- Special callouts

**Accessibility**:
- Contrast on white: 1.8:1 ❌ (Background use only)
- Use dark text (#333) on this background ✓

## Neutral Colors

### White
```css
--color-white: #FFFFFF
```
**Use**: Backgrounds, cards, text on dark backgrounds

### Text Dark
```css
--color-text-dark: #333333
```
**Use**: Primary text, headings, body copy
**Contrast on white**: 12.6:1 ✓ (Excellent)

### Text Light
```css
--color-text-light: #666666
```
**Use**: Secondary text, descriptions, metadata
**Contrast on white**: 5.7:1 ✓ (AA compliant)

### Background
```css
--color-background: #F9FAFB
```
**Use**: Alternate section backgrounds, subtle contrast

## Semantic Colors

### Call-to-Action
```css
--color-cta: #ADD8E6        /* Same as primary */
--color-cta-hover: #8BC7E0  /* Darker variant */
```
**Use**: Primary action buttons
**Hover State**: 10% darker for clear feedback

### WhatsApp
```css
--color-whatsapp: #25D366
```
**Use**: WhatsApp contact button (brand color)

### Success
```css
--color-success: #10B981
```
**Use**: Success messages, form validation success

### Error
```css
--color-error: #EF4444
```
**Use**: Error messages, form validation errors
**Contrast on white**: 4.5:1 ✓ (AA compliant)

## Shadow Colors

### Standard Shadows
```css
--shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.1)
--shadow-md: 0 4px 8px rgba(0, 0, 0, 0.15)
--shadow-lg: 0 8px 16px rgba(0, 0, 0, 0.2)
--shadow-hero: 0 12px 40px rgba(0, 0, 0, 0.25)
```

### Colored Shadows (Brand Enhancement)
```css
--shadow-colored-sm: 0 4px 12px rgba(173, 216, 230, 0.3)  /* Blue */
--shadow-colored-md: 0 8px 24px rgba(255, 182, 193, 0.4)   /* Pink */
--shadow-colored-lg: 0 12px 32px rgba(152, 255, 152, 0.4)  /* Green */
```
**Use**: Special cards, hero sections, featured content

### Overlay
```css
--color-overlay-dark: rgba(0, 0, 0, 0.15)
```
**Use**: Image overlays, modal backdrops

## Color Usage Guidelines

### Text Hierarchy

1. **Primary Text** (Headings, important content)
   - Color: `--color-text-dark` (#333)
   - Weight: 600-700
   - Contrast: 12.6:1 ✓

2. **Secondary Text** (Body copy, descriptions)
   - Color: `--color-text-light` (#666)
   - Weight: 400-500
   - Contrast: 5.7:1 ✓

3. **Links**
   - Default: `--color-primary`
   - Hover: `--color-cta-hover`
   - Visited: Same as default (consistency)
   - Underline: On hover or always (for accessibility)

### Button Colors

#### Primary Button
- Background: `--color-primary` (#ADD8E6)
- Text: `--color-text-dark` (#333)
- Hover: `--color-cta-hover` (#8BC7E0)
- **Use**: Main CTAs, form submissions

#### Secondary Button
- Background: `--color-secondary` (#98FF98)
- Text: `--color-text-dark` (#333)
- Hover: 10% darker
- **Use**: Secondary actions, alternatives

#### Outline Button
- Background: transparent
- Border: 2px solid `--color-primary`
- Text: `--color-primary`
- Hover: Background `--color-primary`, text dark
- **Use**: Tertiary actions, cancel buttons

#### Hero Button
- Background: `--color-accent` (#FFB6C1)
- Text: `--color-text-dark` (#333)
- Hover: 10% darker
- **Use**: Hero section CTA only

### Background Colors

#### Section Backgrounds
Alternate between white and light gray for visual rhythm:

```css
/* Pattern */
Section 1: var(--color-white)         /* Hero */
Section 2: var(--color-background)    /* About */
Section 3: var(--color-white)         /* Services */
Section 4: var(--color-background)    /* Testimonials */
Section 5: var(--color-white)         /* Schedule */
Section 6: var(--color-background)    /* Contact */
```

#### Card Backgrounds
- Default: `--color-white`
- Elevation: `--shadow-md`
- Border radius: `--radius-md` (12px)

### State Colors

#### Hover States
- Buttons: 10% darker than base color
- Links: `--color-cta-hover`
- Cards: Add shadow or lift slightly
- Icons: Scale 1.05 or color change

#### Focus States
- Outline: `--focus-ring` (3px rgba light blue)
- Background: Slight highlight
- Border: Primary color

#### Active/Current
- Navigation: `--color-primary` background
- Links: Darker variant
- Indicators: Solid color

#### Disabled
- Background: `#E5E7EB` (gray)
- Text: `#9CA3AF` (light gray)
- Cursor: not-allowed
- Opacity: 0.5 on interactive elements

#### Loading
- Spinner: `--color-primary`
- Skeleton: `#E5E7EB` with shimmer animation

#### Error
- Border: `--color-error`
- Text: `--color-error`
- Background: `rgba(239, 68, 68, 0.1)` (light red tint)

#### Success
- Border: `--color-success`
- Text: `--color-success`
- Background: `rgba(16, 185, 129, 0.1)` (light green tint)

## Accessibility Requirements

### Contrast Ratios (WCAG AA)

**Normal Text** (< 18pt):
- Minimum ratio: 4.5:1
- ✓ Dark text on white: 12.6:1
- ✓ Light text on white: 5.7:1
- ✓ Error on white: 4.5:1

**Large Text** (≥ 18pt or 14pt bold):
- Minimum ratio: 3:1
- ✓ All combinations pass

**Interactive Elements**:
- Minimum ratio: 3:1 against adjacent colors
- ✓ Buttons have sufficient contrast
- ✓ Focus states visible

### Color Blind Considerations

**DO**:
- Use patterns or icons in addition to color
- Ensure sufficient contrast between states
- Provide text labels for status
- Use multiple visual cues (color + icon + text)

**DON'T**:
- Rely solely on color to convey information
- Use red/green as only differentiator
- Use low contrast color combinations

### Testing Tools
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- Chrome DevTools Lighthouse
- WAVE Browser Extension
- Color blindness simulators

## Color Combinations

### Recommended Pairings

**High Contrast** (Text):
- `#333` on `#FFF` ✓
- `#666` on `#FFF` ✓
- `#FFF` on `#333` ✓

**Pastel Backgrounds** (Cards/Sections):
- Dark text on `--color-primary` ✓
- Dark text on `--color-secondary` ✓
- Dark text on `--color-accent` ✓
- Dark text on `--color-background` ✓

**Avoid**:
- Light text on pastel backgrounds ❌
- Pastel text on white ❌
- Pastel on pastel without border ❌

## Implementation Examples

### CSS
```css
.button-primary {
  background-color: var(--color-primary);
  color: var(--color-text-dark);
}

.button-primary:hover {
  background-color: var(--color-cta-hover);
}

.text-primary {
  color: var(--color-text-dark);
}

.text-secondary {
  color: var(--color-text-light);
}
```

### TypeScript/JSX
```tsx
<button
  style={{
    backgroundColor: 'var(--color-primary)',
    color: 'var(--color-text-dark)'
  }}
>
  Click me
</button>
```

## Color Do's and Don'ts

### DO ✓
- Use CSS variables for all colors
- Test contrast ratios before implementation
- Provide sufficient color differentiation
- Use color consistently across components
- Consider color blindness
- Provide non-color alternatives (icons, labels)
- Use semantic color names

### DON'T ✗
- Hardcode hex values in components
- Use colors outside the palette
- Rely on color alone for information
- Use inaccessible color combinations
- Mix different shades of same color arbitrarily
- Forget hover/focus states
- Ignore mobile display differences

## Color Expansion Guidelines

If new colors are needed:

1. **Propose with reasoning**: Why is the new color needed?
2. **Check accessibility**: WCAG AA minimum
3. **Test with existing palette**: Does it harmonize?
4. **Define usage rules**: When and where to use
5. **Add to variables.css**: Maintain single source of truth
6. **Document thoroughly**: Update this guide
7. **Update components**: Apply consistently

### Naming Convention
```css
--color-[purpose]-[variant]
```

Examples:
- `--color-primary` (base)
- `--color-primary-hover` (interaction state)
- `--color-primary-light` (tint)
- `--color-primary-dark` (shade)

---

This color system ensures visual consistency, accessibility compliance, and brand alignment across the entire Cavalluccio Marino website.
