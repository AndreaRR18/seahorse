# Typography System - Cavalluccio Marino

Complete typography guidelines for consistent, readable, and accessible text across the website.

## Font Family

### Primary: Quicksand
```css
--font-family-primary: 'Quicksand', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

**Characteristics**:
- Rounded, friendly appearance
- Excellent readability
- Professional yet approachable
- Perfect for child-focused services
- Available weights: 300, 400, 500, 600, 700

**Loading**:
```typescript
import '@fontsource/quicksand/300.css';
import '@fontsource/quicksand/400.css';
import '@fontsource/quicksand/500.css';
import '@fontsource/quicksand/600.css';
import '@fontsource/quicksand/700.css';
```

**Fallback Stack**:
1. Quicksand (primary)
2. -apple-system (iOS/macOS)
3. BlinkMacSystemFont (Chrome on macOS)
4. Segoe UI (Windows)
5. sans-serif (universal fallback)

## Font Scale

### Base Configuration
```css
--font-size-base: 16px;
```
**Never change the base** - all sizes scale from this.

### Scale Values
```css
--font-size-sm: 0.875rem;   /* 14px */
--font-size-md: 1rem;       /* 16px - Body text */
--font-size-lg: 1.25rem;    /* 20px */
--font-size-xl: 1.5rem;     /* 24px */
--font-size-2xl: 2rem;      /* 32px */
--font-size-3xl: 3rem;      /* 48px */
```

### Fluid Typography (Headings)
Headings use `clamp()` for responsive sizing:

```css
h1 { font-size: clamp(2rem, 5vw, 3rem); }      /* 32-48px */
h2 { font-size: clamp(1.75rem, 4vw, 2.5rem); } /* 28-40px */
h3 { font-size: clamp(1.5rem, 3vw, 2rem); }    /* 24-32px */
h4 { font-size: var(--font-size-xl); }          /* 24px */
h5 { font-size: var(--font-size-lg); }          /* 20px */
```

**Why Fluid?**
- Responsive without media queries
- Smooth scaling between breakpoints
- Better readability on all screen sizes

## Font Weights

```css
300 - Light       /* Rarely used, decorative only */
400 - Normal      /* Body text, paragraphs */
500 - Medium      /* Slightly emphasized text */
600 - Semi-Bold   /* Subheadings, important text */
700 - Bold        /* Headings, strong emphasis */
```

### Usage Guidelines

**Light (300)**:
- Use sparingly
- Large headings only
- Decorative text
- NOT for body text (readability)

**Normal (400)**:
- Body text
- Paragraph text
- Descriptions
- Most content

**Medium (500)**:
- Navigation items
- Button text
- Card titles
- Slightly emphasized content

**Semi-Bold (600)**:
- Section subheadings
- Important labels
- Active navigation items
- Form labels

**Bold (700)**:
- Main headings (H1-H3)
- Strong emphasis
- Call-out text
- Very important information

## Line Height

```css
/* Headings */
h1, h2, h3, h4, h5, h6 {
  line-height: 1.2;
}

/* Body Text */
body, p {
  line-height: 1.6;
}

/* Small Text */
.text-sm {
  line-height: 1.5;
}
```

**Guidelines**:
- Headings: 1.2 (tighter for visual impact)
- Body: 1.6 (optimal readability)
- Small text: 1.5 (balance space and readability)
- Never below 1.2 (accessibility)
- Never above 2.0 (fragmented reading)

## Text Colors

### Primary Text
```css
color: var(--color-text-dark);  /* #333333 */
```
**Use**: Headings, important content, navigation
**Contrast**: 12.6:1 on white ✓

### Secondary Text
```css
color: var(--color-text-light);  /* #666666 */
```
**Use**: Body text, descriptions, metadata
**Contrast**: 5.7:1 on white ✓

### Link Text
```css
color: var(--color-primary);  /* #ADD8E6 */
```
**Use**: Links, interactive text
**Note**: Use with underline for accessibility

## Heading Hierarchy

### H1 - Page Title
```css
font-size: clamp(2rem, 5vw, 3rem);
font-weight: 700;
line-height: 1.2;
color: var(--color-text-dark);
margin-bottom: var(--spacing-sm);
```

**Use**:
- One per page
- Main page title
- Hero headline

**Examples**:
- "Cavalluccio Marino di Serena"
- "Benvenuti al Nostro Nido"

### H2 - Section Title
```css
font-size: clamp(1.75rem, 4vw, 2.5rem);
font-weight: 700;
line-height: 1.2;
color: var(--color-text-dark);
margin-bottom: var(--spacing-sm);
```

**Use**:
- Section headers
- Major content divisions

**Examples**:
- "Chi Siamo"
- "I Nostri Servizi"
- "Orari e Contatti"

### H3 - Subsection Title
```css
font-size: clamp(1.5rem, 3vw, 2rem);
font-weight: 600;
line-height: 1.2;
color: var(--color-text-dark);
margin-bottom: var(--spacing-sm);
```

**Use**:
- Subsection headers
- Card titles
- Content groupings

**Examples**:
- "Attività Educative"
- "Inserimento Graduale"
- Service card titles

### H4 - Minor Heading
```css
font-size: var(--font-size-xl);  /* 24px */
font-weight: 600;
line-height: 1.2;
```

**Use**:
- Minor sections
- Content labels
- Feature highlights

### H5 - Small Heading
```css
font-size: var(--font-size-lg);  /* 20px */
font-weight: 500;
line-height: 1.2;
```

**Use**:
- Small sections
- List headers
- Metadata labels

## Body Text

### Standard Paragraph
```css
p {
  font-size: var(--font-size-md);  /* 16px */
  font-weight: 400;
  line-height: 1.6;
  color: var(--color-text-light);
  margin-bottom: var(--spacing-sm);
}
```

### Intro/Lead Paragraph
```css
.intro {
  font-size: var(--font-size-lg);  /* 20px */
  font-weight: 400;
  line-height: 1.6;
  color: var(--color-text-light);
}
```

**Use**: First paragraph of sections, important introductions

### Small Text
```css
.text-sm {
  font-size: var(--font-size-sm);  /* 14px */
  font-weight: 400;
  line-height: 1.5;
}
```

**Use**: Captions, metadata, footnotes, legal text

## Special Text Styles

### Strong Emphasis
```css
strong, .font-bold {
  font-weight: 700;
}
```

**Use**: Important keywords, critical information

### Medium Emphasis
```css
.font-medium {
  font-weight: 500;
}
```

**Use**: Slightly emphasized text, labels

### Italic (Use Sparingly)
```css
em {
  font-style: italic;
}
```

**Use**: Technical terms, foreign words, subtle emphasis
**Note**: Quicksand italic less readable than weight changes

## Utility Classes

### Text Alignment
```css
.text-left { text-align: left; }
.text-center { text-align: center; }
.text-right { text-align: right; }
```

### Text Transform
```css
.text-uppercase { text-transform: uppercase; }
.text-lowercase { text-transform: lowercase; }
.text-capitalize { text-transform: capitalize; }
```

**Caution**: Use uppercase sparingly, reduces readability

### Font Weight Classes
```css
.font-light { font-weight: 300; }
.font-normal { font-weight: 400; }
.font-medium { font-weight: 500; }
.font-semibold { font-weight: 600; }
.font-bold { font-weight: 700; }
```

## Responsive Typography

### Mobile (< 768px)
- Smaller headings via clamp()
- Standard body text (16px minimum)
- Adequate line height (1.6+)
- Generous spacing for readability

### Tablet (768px - 1024px)
- Medium-sized headings
- Comfortable reading line length
- Balanced spacing

### Desktop (> 1024px)
- Larger headings for impact
- Optimal line length (60-80 characters)
- Generous white space

### Max Line Length
```css
p {
  max-width: 65ch;  /* Optimal reading length */
}
```

**Why?** Lines longer than 75 characters are harder to read.

## Accessibility

### WCAG Guidelines

**Minimum Font Size**:
- Body text: 16px minimum
- Small text: 14px minimum (use sparingly)
- Never below 14px

**Contrast**:
- Normal text: 4.5:1 minimum
- Large text (18pt+): 3:1 minimum
- Our colors meet WCAG AA ✓

**Line Spacing**:
- Minimum 1.5 for body text
- Minimum 1.2 for headings
- Our line heights meet WCAG ✓

**Letter Spacing**:
- Don't condense too much
- Default letter spacing is fine
- Slight increase for all-caps text

### Readability Best Practices

**DO** ✓:
- Use sufficient line height (1.5-1.6)
- Limit line length (65ch max)
- Use adequate font size (16px+)
- Provide good contrast
- Use clear hierarchy
- Left-align body text (Italian language)

**DON'T** ✗:
- Use light text on light backgrounds
- Set lines too long (> 80ch)
- Use font sizes below 14px
- Justify text (creates uneven spacing)
- Use all caps for long text
- Rely on italic for important text

## Italian Language Considerations

### Character Support
Quicksand includes all Italian diacritics:
- à, è, é, ì, ò, ù

### Formal vs. Informal
- Use formal "Lei" in initial contact forms
- Informal "tu" acceptable in friendly copy
- Consistency is key

### Text Length
Italian text ~15-20% longer than English:
- Account for longer words in buttons
- Ensure flexible layouts
- Test with actual Italian content

## Implementation Examples

### CSS
```css
.hero-title {
  font-family: var(--font-family-primary);
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 700;
  line-height: 1.2;
  color: var(--color-text-dark);
}

.body-text {
  font-family: var(--font-family-primary);
  font-size: var(--font-size-md);
  font-weight: 400;
  line-height: 1.6;
  color: var(--color-text-light);
}
```

### TypeScript/JSX
```tsx
<h1 className={styles.heroTitle}>
  Cavalluccio Marino di Serena
</h1>

<p className={styles.bodyText}>
  Il nostro asilo nido famiglia offre...
</p>
```

## Typography Checklist

Before finalizing any text:

- [ ] Font size appropriate for content
- [ ] Sufficient contrast (4.5:1 minimum)
- [ ] Proper heading hierarchy (H1 → H2 → H3)
- [ ] Line height comfortable (1.5+)
- [ ] Line length reasonable (< 65ch)
- [ ] Mobile-friendly sizing
- [ ] No orphans/widows in headings
- [ ] Consistent spacing
- [ ] Proper font weights used
- [ ] Links distinguishable
- [ ] Text readable at all zoom levels

---

This typography system ensures readability, accessibility, and visual harmony across the entire Cavalluccio Marino website.
