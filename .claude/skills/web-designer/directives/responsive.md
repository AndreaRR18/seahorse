# Responsive Design Guidelines - Cavalluccio Marino

Complete responsive design system for optimal experience across all devices and screen sizes.

## Mobile-First Philosophy

Design and build for mobile first, then enhance for larger screens:

1. **Start small** - Design for 320px width minimum
2. **Add complexity** - Enhance layout for tablets
3. **Optimize space** - Utilize desktop real estate
4. **Progressive enhancement** - More features, not different features

**Why mobile-first?**
- 60%+ of traffic is mobile
- Forces content prioritization
- Easier to add than remove
- Better performance baseline

## Breakpoints

### Standard Breakpoints
```css
/* Mobile (default) */
/* 320px - 767px */

/* Tablet */
@media (min-width: 768px) {
  /* Styles */
}

/* Desktop */
@media (min-width: 1024px) {
  /* Styles */
}

/* Large Desktop */
@media (min-width: 1440px) {
  /* Styles */
}
```

### Device Categories

**Mobile Small** (320px - 374px):
- iPhone SE, small Android phones
- Single column layout
- Larger text and spacing
- Simplified navigation

**Mobile Medium** (375px - 413px):
- iPhone 12/13/14, most Android phones
- Standard mobile design
- Most common mobile size

**Mobile Large** (414px - 767px):
- iPhone Pro Max, large Android phones
- Can accommodate more content
- Still single column preferred

**Tablet Portrait** (768px - 1023px):
- iPads, Android tablets, landscape phones
- Two column layouts
- Expanded navigation
- Larger images

**Desktop** (1024px - 1439px):
- Laptops, small desktops
- Multi-column layouts
- Full navigation
- Optimized spacing

**Large Desktop** (1440px+):
- Large monitors, 4K displays
- Max-width containers (prevent overly wide content)
- Generous spacing
- Large imagery

## Responsive Patterns

### 1. Container Pattern

```css
.container {
  width: 100%;
  max-width: var(--container-max-width);  /* 1200px */
  margin: 0 auto;
  padding: 0 var(--spacing-sm);  /* 16px mobile */
}

@media (min-width: 768px) {
  .container {
    padding: 0 var(--spacing-md);  /* 32px tablet+ */
  }
}
```

**Purpose**: Constrain content width, maintain readability

### 2. Grid Pattern

```css
.grid {
  display: grid;
  gap: var(--spacing-md);
  grid-template-columns: 1fr;  /* Mobile: 1 column */
}

@media (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);  /* Tablet: 2 columns */
  }
}

@media (min-width: 1024px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);  /* Desktop: 3 columns */
  }
}
```

**Use**: Service cards, testimonials, features

### 3. Auto-Fit Grid (Dynamic)

```css
.gridAuto {
  display: grid;
  gap: var(--spacing-md);
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}
```

**Purpose**: Automatically adjusts columns based on available space

### 4. Sidebar Pattern

```css
.layout {
  display: flex;
  flex-direction: column;  /* Mobile: stacked */
  gap: var(--spacing-md);
}

@media (min-width: 1024px) {
  .layout {
    flex-direction: row;  /* Desktop: side-by-side */
  }

  .sidebar {
    width: 300px;
    flex-shrink: 0;
  }

  .main {
    flex: 1;
  }
}
```

**Use**: Content with sidebar navigation or auxiliary info

### 5. Stack to Row Pattern

```css
.flexContainer {
  display: flex;
  flex-direction: column;  /* Mobile: stacked */
  gap: var(--spacing-sm);
}

@media (min-width: 768px) {
  .flexContainer {
    flex-direction: row;  /* Tablet+: horizontal */
    align-items: center;
  }
}
```

**Use**: Button groups, form actions, image + text

### 6. Show/Hide Pattern

```css
.mobileOnly {
  display: block;
}

.desktopOnly {
  display: none;
}

@media (min-width: 768px) {
  .mobileOnly {
    display: none;
  }

  .desktopOnly {
    display: block;
  }
}
```

**Use**: Mobile menu icon, different navigation styles

## Component Responsiveness

### Header/Navigation

**Mobile** (< 768px):
```css
.header {
  padding: var(--spacing-sm) 0;
}

.nav {
  display: none;  /* Hidden by default */
}

.mobileMenuButton {
  display: block;
}
```

**Desktop** (768px+):
```css
.nav {
  display: flex;
  gap: var(--spacing-sm);
}

.mobileMenuButton {
  display: none;
}
```

### Hero Section

**Mobile**:
```css
.hero {
  padding: var(--spacing-lg) 0;
  text-align: center;
}

.heroTitle {
  font-size: 2rem;
}

.heroImage {
  margin-top: var(--spacing-md);
  max-width: 100%;
}
```

**Desktop**:
```css
@media (min-width: 1024px) {
  .hero {
    padding: var(--spacing-2xl) 0;
    display: flex;
    align-items: center;
    gap: var(--spacing-xl);
  }

  .heroTitle {
    font-size: 3rem;
    text-align: left;
  }

  .heroContent {
    flex: 1;
  }

  .heroImage {
    flex: 1;
    margin-top: 0;
  }
}
```

### Cards

**Mobile**: Full width, stacked
```css
.card {
  width: 100%;
  margin-bottom: var(--spacing-md);
}
```

**Tablet**: 2 columns
```css
@media (min-width: 768px) {
  .cardGrid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--spacing-md);
  }
}
```

**Desktop**: 3 columns
```css
@media (min-width: 1024px) {
  .cardGrid {
    grid-template-columns: repeat(3, 1fr);
    gap: var(--spacing-lg);
  }
}
```

### Forms

**Mobile**: Full width, stacked
```css
.form {
  width: 100%;
}

.formGroup {
  margin-bottom: var(--spacing-sm);
}

.formActions {
  flex-direction: column;
}

.formActions button {
  width: 100%;
}
```

**Desktop**: Constrained width, horizontal buttons
```css
@media (min-width: 768px) {
  .form {
    max-width: 600px;
    margin: 0 auto;
  }

  .formActions {
    flex-direction: row;
    justify-content: flex-start;
  }

  .formActions button {
    width: auto;
  }
}
```

## Typography Responsiveness

### Fluid Typography
Using `clamp()` for smooth scaling:

```css
h1 {
  font-size: clamp(2rem, 5vw, 3rem);
  /* Min: 32px, Scales with viewport, Max: 48px */
}

h2 {
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  /* Min: 28px, Scales with viewport, Max: 40px */
}

p {
  font-size: clamp(1rem, 2vw, 1.125rem);
  /* Min: 16px, Scales with viewport, Max: 18px */
}
```

### Line Length
```css
p, .content {
  max-width: 65ch;  /* Optimal reading length */
  margin-left: auto;
  margin-right: auto;
}
```

## Spacing Responsiveness

### Section Padding

**Mobile**:
```css
.section {
  padding: var(--spacing-lg) 0;  /* 48px */
}
```

**Desktop**:
```css
@media (min-width: 768px) {
  .section {
    padding: var(--spacing-xl) 0;  /* 64px */
  }
}

@media (min-width: 1024px) {
  .section {
    padding: var(--spacing-2xl) 0;  /* 96px */
  }
}
```

### Component Spacing

**Mobile**:
```css
.component {
  padding: var(--spacing-sm);  /* 16px */
  margin-bottom: var(--spacing-md);  /* 32px */
}
```

**Desktop**:
```css
@media (min-width: 768px) {
  .component {
    padding: var(--spacing-md);  /* 32px */
    margin-bottom: var(--spacing-lg);  /* 48px */
  }
}
```

## Images Responsiveness

### Responsive Images
```html
<img
  src="/assets/image-800.jpg"
  srcset="
    /assets/image-400.jpg 400w,
    /assets/image-800.jpg 800w,
    /assets/image-1200.jpg 1200w
  "
  sizes="
    (max-width: 768px) 100vw,
    (max-width: 1024px) 50vw,
    33vw
  "
  alt="Description"
  loading="lazy"
/>
```

### Background Images
```css
.hero {
  background-image: url('/assets/hero-mobile.jpg');
  background-size: cover;
  background-position: center;
}

@media (min-width: 768px) {
  .hero {
    background-image: url('/assets/hero-tablet.jpg');
  }
}

@media (min-width: 1024px) {
  .hero {
    background-image: url('/assets/hero-desktop.jpg');
  }
}
```

### Image Aspect Ratios
```css
.imageWrapper {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;  /* 16:9 aspect ratio */
}

.imageWrapper img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```

## Touch Target Optimization

### Minimum Size
```css
.touchTarget {
  min-width: 44px;
  min-height: 44px;
  padding: var(--spacing-xs) var(--spacing-sm);
}
```

**WCAG Guideline**: 44x44 CSS pixels minimum

### Spacing Between Targets
```css
.buttonGroup {
  display: flex;
  gap: var(--spacing-sm);  /* 16px minimum */
}

@media (max-width: 767px) {
  .buttonGroup {
    flex-direction: column;
    gap: var(--spacing-sm);  /* Vertical spacing on mobile */
  }
}
```

### Mobile Navigation
```css
.mobileNavLink {
  display: block;
  padding: var(--spacing-sm) var(--spacing-md);  /* Large touch area */
  font-size: var(--font-size-lg);
}
```

## Performance Optimization

### Lazy Loading
```html
<img src="image.jpg" loading="lazy" alt="Description" />
```

**Use for**: Below-the-fold images

### Code Splitting
```tsx
const HeavyComponent = lazy(() => import('./HeavyComponent'));
```

**Use for**: Large components not immediately visible

### Responsive Serving
```tsx
// Serve smaller images on mobile
const imageSrc = isMobile
  ? '/assets/image-small.jpg'
  : '/assets/image-large.jpg';
```

## Testing Breakpoints

### Chrome DevTools Device Sizes

**Mobile**:
- iPhone SE: 375 x 667
- iPhone 12: 390 x 844
- iPhone 14 Pro Max: 430 x 932
- Samsung Galaxy S20: 360 x 800

**Tablet**:
- iPad Mini: 768 x 1024
- iPad Air: 820 x 1180
- iPad Pro: 1024 x 1366

**Desktop**:
- Laptop: 1280 x 720
- Desktop: 1920 x 1080
- 4K: 2560 x 1440

### Test Checklist

For every page/component:

- [ ] Tested at 320px width (smallest mobile)
- [ ] Tested at 375px (most common mobile)
- [ ] Tested at 768px (tablet)
- [ ] Tested at 1024px (desktop)
- [ ] Tested at 1920px (large desktop)
- [ ] No horizontal scrolling at any size
- [ ] Touch targets adequate size on mobile
- [ ] Text readable at all sizes
- [ ] Images load appropriately
- [ ] Navigation works on all sizes
- [ ] Forms usable on mobile
- [ ] Content hierarchy clear at all sizes
- [ ] Tested in portrait and landscape

## Common Responsive Patterns

### 1. Hamburger Menu
```tsx
const [isMenuOpen, setIsMenuOpen] = useState(false);

// Mobile: Hamburger icon
<button onClick={() => setIsMenuOpen(!isMenuOpen)}>
  <FaBars />
</button>

// Desktop: Full navigation
<nav className={isDesktop ? styles.desktopNav : styles.mobileNav}>
  {/* Nav items */}
</nav>
```

### 2. Responsive Grid
```css
.grid {
  display: grid;
  gap: var(--spacing-md);
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}
```

### 3. Flexible Images
```css
img {
  max-width: 100%;
  height: auto;
}
```

### 4. Container Queries (Future)
```css
@container (min-width: 400px) {
  .card {
    display: flex;
  }
}
```

## Accessibility on Mobile

### Font Size
- Minimum 16px for body text
- Avoid tiny text (< 14px)
- Test with browser zoom

### Contrast
- Higher contrast needed on mobile (outdoor use)
- Test in bright light conditions

### Forms
- Large input fields (min 44px height)
- Clear labels above inputs
- Proper input types (`type="email"`, `type="tel"`)
- Autocomplete attributes

### Navigation
- Clear, obvious menu button
- Closeable mobile menu
- Breadcrumbs for deep navigation

## Responsive Do's and Don'ts

### DO ✓
- Design mobile-first
- Test on real devices
- Use relative units (rem, %, vw)
- Optimize images for each size
- Use CSS Grid and Flexbox
- Implement touch-friendly sizes
- Test with slow 3G
- Consider thumb zones on mobile
- Use semantic HTML
- Provide adequate spacing

### DON'T ✗
- Design desktop-only
- Use fixed pixel widths
- Forget landscape orientation
- Ignore touch interactions
- Use hover-only UI on mobile
- Rely on device detection
- Use tiny text on mobile
- Create complex mobile layouts
- Forget loading states
- Ignore performance

## Media Query Organization

### In CSS Modules
```css
/* Component.module.css */
.component {
  /* Mobile styles (default) */
}

@media (min-width: 768px) {
  .component {
    /* Tablet styles */
  }
}

@media (min-width: 1024px) {
  .component {
    /* Desktop styles */
  }
}
```

### Keep queries adjacent to base styles for maintainability

## Viewport Meta Tag

**Required in `index.html`**:
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

**DO NOT** disable zoom:
```html
<!-- ❌ Bad for accessibility -->
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
```

---

This responsive design system ensures an excellent experience on all devices for the Cavalluccio Marino website.
