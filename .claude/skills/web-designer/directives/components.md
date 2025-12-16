# Component Patterns - Cavalluccio Marino

Comprehensive component design guidelines for consistency and reusability across the website.

## Component Philosophy

- **Consistent**: Same component looks and behaves identically everywhere
- **Reusable**: Built once, used many times
- **Composable**: Can be combined to create complex UIs
- **Accessible**: Keyboard navigation, screen readers, WCAG AA
- **Responsive**: Works on all screen sizes
- **Typed**: Full TypeScript support

## Button Component

### Variants

#### Primary Button
```tsx
<Button variant="primary">Contattaci</Button>
```

**Style**:
```css
.primary {
  background-color: var(--color-primary);
  color: var(--color-text-dark);
  padding: 0.75rem 2rem;
  border-radius: var(--radius-full);
  font-weight: 500;
  transition: var(--transition-fast);
}

.primary:hover {
  background-color: var(--color-cta-hover);
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}
```

**Use**: Main call-to-actions, form submissions

#### Secondary Button
```tsx
<Button variant="secondary">Scopri di Più</Button>
```

**Style**:
```css
.secondary {
  background-color: var(--color-secondary);
  color: var(--color-text-dark);
  /* Same structure as primary */
}
```

**Use**: Secondary actions, alternative options

#### Outline Button
```tsx
<Button variant="outline">Annulla</Button>
```

**Style**:
```css
.outline {
  background-color: transparent;
  color: var(--color-primary);
  border: 2px solid var(--color-primary);
  padding: calc(0.75rem - 2px) 2rem;  /* Adjust for border */
}

.outline:hover {
  background-color: var(--color-primary);
  color: var(--color-text-dark);
}
```

**Use**: Tertiary actions, cancel buttons, less emphasized CTAs

#### Hero Button
```tsx
<Button variant="hero" size="large">Prenota Visita</Button>
```

**Style**:
```css
.hero {
  background-color: var(--color-accent);
  color: var(--color-text-dark);
  padding: 1rem 2.5rem;
  font-size: var(--font-size-lg);
  box-shadow: var(--shadow-colored-md);
}
```

**Use**: Hero section CTA only (single use per page)

### Sizes

```tsx
<Button size="small">Small</Button>
<Button size="medium">Medium</Button>  {/* Default */}
<Button size="large">Large</Button>
```

**Dimensions**:
- Small: `padding: 0.5rem 1.5rem`, `font-size: 0.875rem`
- Medium: `padding: 0.75rem 2rem`, `font-size: 1rem`
- Large: `padding: 1rem 2.5rem`, `font-size: 1.125rem`

### Button Best Practices

**DO** ✓:
- Minimum 44x44px touch target
- Clear visual feedback on hover/focus
- Use semantic button element
- Provide loading state if async
- Disable during processing
- Use appropriate variant for context

**DON'T** ✗:
- Use multiple primary buttons in same section
- Make buttons too small for touch
- Use buttons for navigation (use links)
- Forget focus states
- Use vague labels ("Click here")

## Card Component

### Basic Card
```tsx
<Card
  title="Attività Educative"
  description="Gioco libero, lettura, musica..."
  image="/assets/activity.jpg"
/>
```

**Style**:
```css
.card {
  background: var(--color-white);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-md);
  padding: var(--spacing-md);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
  transition: var(--transition-normal);
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.cardImage {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: var(--radius-sm);
  margin-bottom: var(--spacing-sm);
}

.cardTitle {
  font-size: var(--font-size-xl);
  font-weight: 600;
  color: var(--color-text-dark);
}

.cardDescription {
  color: var(--color-text-light);
  line-height: 1.6;
}
```

### Service Card (with Highlights)
```tsx
<Card
  title="Inserimento Graduale"
  description="Processo personalizzato..."
  highlights={[
    "Prima settimana: 1 ora",
    "Seconda settimana: 2 ore",
    "Personalizzato per ogni bambino"
  ]}
  image="/assets/service.jpg"
/>
```

**Highlights Style**:
```css
.highlights {
  list-style: none;
  padding: 0;
}

.highlightItem {
  padding: var(--spacing-xs) 0;
  padding-left: var(--spacing-md);
  position: relative;
}

.highlightItem::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--color-secondary);
  font-weight: 700;
}
```

### Testimonial Card
```tsx
<Card
  quote="Un ambiente familiare e professionale..."
  name="Maria R."
  role="Mamma di Sofia"
  image="/assets/testimonial.jpg"
/>
```

**Style**: Quote styling, avatar image, attribution

## Form Components

### Input Field
```tsx
<div className={styles.formGroup}>
  <label htmlFor="name">Nome *</label>
  <input
    type="text"
    id="name"
    name="name"
    required
    aria-required="true"
  />
  {errors.name && (
    <span className={styles.error}>{errors.name}</span>
  )}
</div>
```

**Style**:
```css
.formGroup {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
  margin-bottom: var(--spacing-sm);
}

.formGroup label {
  font-weight: 500;
  color: var(--color-text-dark);
  font-size: var(--font-size-sm);
}

.formGroup input,
.formGroup textarea {
  padding: 0.75rem 1rem;
  border: 2px solid #E5E7EB;
  border-radius: var(--radius-sm);
  font-family: inherit;
  font-size: var(--font-size-md);
  transition: var(--transition-fast);
}

.formGroup input:focus,
.formGroup textarea:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: var(--focus-ring);
}

.error {
  color: var(--color-error);
  font-size: var(--font-size-sm);
  margin-top: 0.25rem;
}
```

### Form States

**Default**:
```css
input {
  border: 2px solid #E5E7EB;
}
```

**Focus**:
```css
input:focus {
  border-color: var(--color-primary);
  box-shadow: var(--focus-ring);
}
```

**Error**:
```css
input.error {
  border-color: var(--color-error);
}
```

**Success**:
```css
input.success {
  border-color: var(--color-success);
}
```

**Disabled**:
```css
input:disabled {
  background-color: #F3F4F6;
  cursor: not-allowed;
  opacity: 0.6;
}
```

## Navigation Components

### Header
```css
.header {
  position: fixed;
  top: 0;
  width: 100%;
  height: 80px;
  background: var(--color-white);
  box-shadow: var(--shadow-sm);
  z-index: var(--z-index-header);
  transition: var(--transition-fast);
}

.headerScrolled {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: var(--shadow-md);
}
```

### Navigation Links
```css
.navLink {
  padding: var(--spacing-xs) var(--spacing-sm);
  color: var(--color-text-dark);
  font-weight: 500;
  transition: var(--transition-fast);
  border-radius: var(--radius-sm);
}

.navLink:hover {
  background: var(--color-primary);
  color: var(--color-text-dark);
}

.navLinkActive {
  background: var(--color-primary);
  color: var(--color-text-dark);
}
```

### Mobile Menu
```css
.mobileMenu {
  position: fixed;
  top: 80px;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--color-white);
  padding: var(--spacing-md);
  transform: translateX(-100%);
  transition: transform var(--transition-normal);
  z-index: 999;
}

.mobileMenuOpen {
  transform: translateX(0);
}

.mobileNavLink {
  display: block;
  padding: var(--spacing-sm);
  font-size: var(--font-size-lg);
  border-bottom: 1px solid #E5E7EB;
}
```

## Section Container

### Standard Section
```css
.section {
  padding: var(--spacing-xl) 0;
}

.sectionAlternate {
  background-color: var(--color-background);
}

.sectionContent {
  max-width: var(--container-max-width);
  margin: 0 auto;
  padding: 0 var(--spacing-md);
}
```

### Section Header
```css
.sectionHeader {
  text-align: center;
  margin-bottom: var(--spacing-lg);
}

.sectionTitle {
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  font-weight: 700;
  color: var(--color-text-dark);
  margin-bottom: var(--spacing-sm);
}

.sectionSubtitle {
  font-size: var(--font-size-lg);
  color: var(--color-text-light);
  max-width: 600px;
  margin: 0 auto;
}
```

## Icon Usage

### Icon with Text
```tsx
<div className={styles.iconText}>
  <FaHeart />
  <span>Con Amore</span>
</div>
```

**Style**:
```css
.iconText {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
}

.iconText svg {
  font-size: 1.25rem;
  color: var(--color-primary);
}
```

### Icon Sizes
```css
.iconSmall { font-size: 1rem; }      /* 16px */
.iconMedium { font-size: 1.5rem; }   /* 24px - Default */
.iconLarge { font-size: 2rem; }      /* 32px */
.iconXLarge { font-size: 3rem; }     /* 48px */
```

### Icon Colors
- Primary action: `var(--color-primary)`
- Success: `var(--color-success)`
- Error: `var(--color-error)`
- Neutral: `var(--color-text-light)`
- Decorative: `var(--color-accent)`

## Loading States

### Spinner
```css
.spinner {
  border: 3px solid #E5E7EB;
  border-top-color: var(--color-primary);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
```

### Skeleton Loading
```css
.skeleton {
  background: linear-gradient(
    90deg,
    #E5E7EB 0%,
    #F3F4F6 50%,
    #E5E7EB 100%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  border-radius: var(--radius-sm);
}

@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}
```

### Loading Button
```tsx
<Button disabled={isLoading}>
  {isLoading ? <Spinner /> : 'Invia'}
</Button>
```

## Modal/Dialog

```css
.modalOverlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: var(--spacing-md);
}

.modal {
  background: var(--color-white);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  max-width: 600px;
  width: 100%;
  box-shadow: var(--shadow-hero);
  animation: modalEnter 0.3s ease;
}

@keyframes modalEnter {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.modalHeader {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-md);
}

.modalClose {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  padding: var(--spacing-xs);
}
```

## Floating Action Button (FAB)

```css
.fab {
  position: fixed;
  bottom: var(--spacing-md);
  right: var(--spacing-md);
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: var(--color-whatsapp);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-lg);
  z-index: var(--z-index-fab);
  transition: var(--transition-fast);
}

.fab:hover {
  transform: scale(1.1);
  box-shadow: var(--shadow-hero);
}

.fab svg {
  font-size: 1.75rem;
}
```

## Image Component

### Responsive Image
```tsx
<img
  src="/assets/image.jpg"
  alt="Descriptive alt text"
  loading="lazy"
  className={styles.responsiveImage}
/>
```

**Style**:
```css
.responsiveImage {
  max-width: 100%;
  height: auto;
  display: block;
  border-radius: var(--radius-md);
}
```

### Cover Image
```css
.coverImage {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: var(--radius-md);
}
```

### Avatar
```css
.avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid var(--color-white);
  box-shadow: var(--shadow-sm);
}
```

## Badge/Tag

```css
.badge {
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.75rem;
  border-radius: var(--radius-full);
  font-size: var(--font-size-sm);
  font-weight: 500;
  background: var(--color-primary);
  color: var(--color-text-dark);
}

.badgeSecondary {
  background: var(--color-secondary);
}

.badgeAccent {
  background: var(--color-accent);
}
```

## Component Checklist

When creating or reviewing components:

- [ ] Uses design tokens (CSS variables)
- [ ] Responsive on all screen sizes
- [ ] Accessible (keyboard, screen reader, WCAG AA)
- [ ] Proper focus states
- [ ] TypeScript typed
- [ ] Reusable and composable
- [ ] Documented with examples
- [ ] Handles loading states
- [ ] Handles error states
- [ ] Handles empty states
- [ ] Touch-friendly (44x44px minimum)
- [ ] Smooth animations (60fps)
- [ ] No console errors/warnings
- [ ] Follows existing patterns
- [ ] CSS Module scoped styles

---

These component patterns ensure consistency, quality, and maintainability across the entire Cavalluccio Marino website.
