# Spacing System - Cavalluccio Marino

Complete spacing and layout guidelines for consistent rhythm and visual hierarchy.

## Spacing Philosophy

The spacing system uses an **8px base grid** for consistent, harmonious layouts. All spacing should be multiples of 8 (or 4 for fine adjustments).

**Why 8px?**
- Divisible by 2 and 4 (flexibility)
- Works well across screen resolutions
- Industry standard
- Easy mental math
- Scalable and predictable

## Spacing Scale

### CSS Variables
```css
--spacing-xs: 0.5rem;   /* 8px */
--spacing-sm: 1rem;     /* 16px */
--spacing-md: 2rem;     /* 32px */
--spacing-lg: 3rem;     /* 48px */
--spacing-xl: 4rem;     /* 64px */
--spacing-2xl: 6rem;    /* 96px */
```

### Usage Guidelines

**XS (8px)** - Tight spacing
- Between icon and label
- Small component internal padding
- Dense lists
- Tight groupings

**SM (16px)** - Default spacing
- Between paragraphs
- Card padding (mobile)
- Form field spacing
- Button internal padding
- List item gaps

**MD (32px)** - Section spacing
- Between sections (mobile)
- Card padding (desktop)
- Component margins
- Content group separation

**LG (48px)** - Major spacing
- Between major sections
- Large component padding
- Hero section padding (mobile)
- Significant content separation

**XL (64px)** - Large spacing
- Major section padding (desktop)
- Hero sections
- Large breakpoints
- Dramatic separation

**2XL (96px)** - Extra large spacing
- Very large sections
- Marketing pages
- Special occasions
- Maximum breathing room

## Component Spacing

### Buttons
```css
.button {
  padding: 0.75rem 2rem;        /* 12px 32px */
  margin-bottom: var(--spacing-sm);
}

.button-small {
  padding: 0.5rem 1.5rem;       /* 8px 24px */
}

.button-large {
  padding: 1rem 2.5rem;         /* 16px 40px */
}
```

**Gap between buttons**: `var(--spacing-sm)` (16px)

### Cards
```css
.card {
  padding: var(--spacing-md);   /* 32px */
  margin-bottom: var(--spacing-md);
  gap: var(--spacing-sm);       /* Internal spacing */
}

@media (max-width: 768px) {
  .card {
    padding: var(--spacing-sm); /* 16px on mobile */
  }
}
```

### Forms
```css
.form-group {
  margin-bottom: var(--spacing-sm);  /* 16px between fields */
}

.input {
  padding: 0.75rem 1rem;  /* 12px 16px */
}

.form {
  gap: var(--spacing-sm);
}
```

### Sections
```css
.section {
  padding: var(--spacing-lg) 0;  /* 48px vertical on mobile */
}

@media (min-width: 768px) {
  .section {
    padding: var(--spacing-xl) 0;  /* 64px vertical on desktop */
  }
}
```

### Navigation
```css
.nav-item {
  padding: var(--spacing-xs) var(--spacing-sm);  /* 8px 16px */
  margin-right: var(--spacing-sm);
}

.header {
  padding: var(--spacing-sm) 0;
  height: 80px;
}
```

## Layout Containers

### Main Container
```css
.container {
  max-width: var(--container-max-width);  /* 1200px */
  margin: 0 auto;
  padding: 0 var(--spacing-sm);  /* 16px on mobile */
}

@media (min-width: 768px) {
  .container {
    padding: 0 var(--spacing-md);  /* 32px on tablet+ */
  }
}
```

### Content Width
```css
.content {
  max-width: 65ch;  /* Optimal reading line length */
  margin: 0 auto;
}
```

## Grid & Flexbox Spacing

### CSS Grid
```css
.grid {
  display: grid;
  gap: var(--spacing-md);  /* 32px */
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

.grid-tight {
  gap: var(--spacing-sm);  /* 16px */
}

.grid-loose {
  gap: var(--spacing-lg);  /* 48px */
}
```

### Flexbox
```css
.flex {
  display: flex;
  gap: var(--spacing-sm);  /* 16px default */
}

.flex-column {
  flex-direction: column;
  gap: var(--spacing-sm);
}
```

**Note**: Always use `gap` property instead of margins on children when possible.

## Margin & Padding Rules

### Margin

**Vertical Rhythm**:
```css
h1, h2, h3 {
  margin-bottom: var(--spacing-sm);  /* 16px */
}

p {
  margin-bottom: var(--spacing-sm);  /* 16px */
}

section {
  margin-bottom: var(--spacing-lg);  /* 48px */
}
```

**Horizontal Spacing**:
```css
.inline-elements {
  margin-right: var(--spacing-sm);  /* 16px */
}

.inline-elements:last-child {
  margin-right: 0;
}
```

### Padding

**Component Padding**:
```css
.component {
  padding: var(--spacing-md);  /* All sides: 32px */
}

.component-asymmetric {
  padding: var(--spacing-lg) var(--spacing-md);  /* Vertical: 48px, Horizontal: 32px */
}
```

**Section Padding**:
```css
section {
  padding: var(--spacing-xl) 0;  /* Vertical only, container handles horizontal */
}
```

## Responsive Spacing

### Mobile First Approach
Start with mobile spacing, increase for larger screens:

```css
.element {
  padding: var(--spacing-sm);     /* Mobile: 16px */
}

@media (min-width: 768px) {
  .element {
    padding: var(--spacing-md);   /* Tablet: 32px */
  }
}

@media (min-width: 1024px) {
  .element {
    padding: var(--spacing-lg);   /* Desktop: 48px */
  }
}
```

### Responsive Spacing Patterns

**Sections**:
- Mobile: `padding: 3rem 0` (48px)
- Desktop: `padding: 4rem 0` (64px)

**Cards**:
- Mobile: `padding: 1rem` (16px)
- Desktop: `padding: 2rem` (32px)

**Container**:
- Mobile: `padding: 0 1rem` (16px sides)
- Desktop: `padding: 0 2rem` (32px sides)

## Visual Hierarchy Through Spacing

### Principle: Related items closer, unrelated items further apart

**Tight Grouping** (8px):
```css
.label-input-pair {
  gap: var(--spacing-xs);  /* 8px - tightly coupled */
}
```

**Related Content** (16px):
```css
.content-group {
  gap: var(--spacing-sm);  /* 16px - related paragraphs */
}
```

**Sections** (32px+):
```css
.section-divider {
  margin-top: var(--spacing-md);  /* 32px - separate sections */
}
```

**Major Divisions** (48px+):
```css
.major-section {
  margin-bottom: var(--spacing-lg);  /* 48px+ - distinct areas */
}
```

## White Space Best Practices

### DO ✓
- Use consistent spacing from the scale
- Let content breathe (don't fear white space)
- Group related items with less space
- Separate unrelated items with more space
- Use mobile-first responsive spacing
- Maintain vertical rhythm
- Use `gap` property for flex/grid children

### DON'T ✗
- Use arbitrary spacing values (stick to scale)
- Cram content together
- Mix different spacing patterns
- Use negative margins (rare exceptions only)
- Forget mobile spacing considerations
- Add margins to both sides of elements (margin collapse issues)
- Use padding when margin is more semantic

## Spacing Patterns

### Card with Content
```css
.card {
  padding: var(--spacing-md);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.card-header {
  margin-bottom: var(--spacing-xs);
}

.card-body {
  /* No margin - handled by gap */
}

.card-footer {
  margin-top: auto;  /* Push to bottom */
  padding-top: var(--spacing-sm);
  border-top: 1px solid #e5e7eb;
}
```

### Form Layout
```css
.form {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);     /* 16px between fields */
  max-width: 500px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);     /* 8px label to input */
}

.form-actions {
  margin-top: var(--spacing-md);  /* 32px before submit */
  display: flex;
  gap: var(--spacing-sm);
}
```

### Section Layout
```css
.section {
  padding: var(--spacing-xl) 0;
}

.section-header {
  text-align: center;
  margin-bottom: var(--spacing-lg);  /* 48px */
}

.section-content {
  display: grid;
  gap: var(--spacing-md);            /* 32px */
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}
```

### Navigation Spacing
```css
.nav {
  display: flex;
  gap: var(--spacing-sm);      /* 16px between items */
  padding: var(--spacing-sm) 0;
}

.nav-item {
  padding: var(--spacing-xs) var(--spacing-sm);  /* 8px 16px */
}
```

## Stack Spacing Utility

For vertical stacks with consistent spacing:

```css
.stack {
  display: flex;
  flex-direction: column;
}

.stack-xs { gap: var(--spacing-xs); }
.stack-sm { gap: var(--spacing-sm); }
.stack-md { gap: var(--spacing-md); }
.stack-lg { gap: var(--spacing-lg); }
.stack-xl { gap: var(--spacing-xl); }
```

Usage:
```tsx
<div className="stack stack-sm">
  <h2>Title</h2>
  <p>Content</p>
  <button>Action</button>
</div>
```

## Touch Target Spacing

### Minimum Touch Target
```css
.touch-target {
  min-width: 44px;
  min-height: 44px;
  padding: var(--spacing-xs) var(--spacing-sm);
}
```

**Spacing between touch targets**: Minimum 8px

### Mobile Considerations
```css
@media (max-width: 768px) {
  .button-group {
    gap: var(--spacing-sm);  /* Ensure adequate spacing */
  }

  .nav-item {
    padding: var(--spacing-sm);  /* Larger touch area */
  }
}
```

## Optical Adjustments

Sometimes mathematical spacing needs slight adjustment for visual balance:

### Icons
```css
.icon-with-text {
  display: flex;
  align-items: center;
  gap: 0.5rem;  /* Icons often need less space */
}
```

### Headings After Content
```css
h2 {
  margin-top: var(--spacing-lg);   /* More space before */
  margin-bottom: var(--spacing-sm); /* Less space after */
}
```

**Why?** Visual weight of headings needs more space above to separate from previous section.

## Debugging Spacing

### Visual Grid Overlay (Development Only)
```css
.debug-grid {
  background-image:
    repeating-linear-gradient(
      to bottom,
      transparent 0,
      transparent 7px,
      #ff0000 7px,
      #ff0000 8px
    );
}
```

Helps visualize 8px grid alignment.

## Spacing Checklist

Before finalizing layout:

- [ ] All spacing uses variables from scale
- [ ] Consistent spacing for similar elements
- [ ] Appropriate spacing hierarchy (related items closer)
- [ ] Mobile spacing tested and comfortable
- [ ] Touch targets have adequate space (8px min)
- [ ] No arbitrary pixel values
- [ ] Vertical rhythm maintained
- [ ] Section spacing consistent
- [ ] Card/component padding appropriate
- [ ] Form spacing comfortable
- [ ] Navigation spacing clear
- [ ] Content not cramped
- [ ] White space balanced

---

This spacing system ensures visual consistency, comfortable layouts, and a harmonious rhythm throughout the Cavalluccio Marino website.
