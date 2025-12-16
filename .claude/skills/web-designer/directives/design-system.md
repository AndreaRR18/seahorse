# Design System - Cavalluccio Marino

Complete design system documentation for the Seahorse daycare website.

## Overview

The Cavalluccio Marino design system creates a warm, trustworthy, and professional aesthetic that appeals to parents while reflecting the nurturing environment of a family daycare.

### Design Philosophy

1. **Soft & Welcoming**: Pastel colors, rounded corners, gentle transitions
2. **Professional & Trustworthy**: Clean layouts, clear hierarchy, consistent patterns
3. **Child-Friendly**: Playful without being childish, warm without being unprofessional
4. **Accessible**: WCAG 2.1 AA compliance, keyboard navigation, screen reader support
5. **Responsive**: Mobile-first, works beautifully on all devices

### Brand Attributes

- **Nurturing**: Like a warm embrace
- **Professional**: Competent and experienced
- **Personal**: Small group, individual attention
- **Trustworthy**: Safe, reliable, established
- **Local**: Rooted in the Lodi community

## Design System Structure

### Foundation Layer
- **Colors**: Brand palette, semantic colors, state colors
- **Typography**: Font family, scale, hierarchy, weights
- **Spacing**: 8px base grid, consistent rhythm
- **Shadows**: Depth and elevation system
- **Borders**: Radius values for different components

### Component Layer
- **Buttons**: Primary, secondary, outline, hero variants
- **Forms**: Inputs, textareas, validation states
- **Cards**: Content containers with consistent styling
- **Navigation**: Header, mobile menu, footer
- **Sections**: Page sections with alternating backgrounds

### Pattern Layer
- **Layouts**: Container, grid, flexbox patterns
- **Animations**: Transitions, entrance effects, micro-interactions
- **States**: Hover, focus, active, disabled, loading, error
- **Responsive**: Breakpoints, mobile menu, fluid typography

## CSS Architecture

### Variables System
All design tokens live in `src/styles/variables.css`:

```css
:root {
  /* Colors */
  --color-primary: #ADD8E6;
  --color-secondary: #98FF98;
  --color-accent: #FFB6C1;

  /* Spacing */
  --spacing-xs: 0.5rem;
  --spacing-sm: 1rem;
  --spacing-md: 2rem;
  /* ... */

  /* Typography */
  --font-family-primary: 'Quicksand', sans-serif;
  --font-size-base: 16px;
  /* ... */
}
```

### CSS Modules
Components use CSS Modules for scoped styling:
- File pattern: `ComponentName.module.css`
- Import: `import styles from './Component.module.css'`
- Usage: `className={styles.componentName}`

### Global Styles
- `global.css`: Resets, base styles, utility classes
- `typography.css`: Heading and text styles
- `variables.css`: Design tokens

## File Organization

```
src/styles/
├── variables.css           # Design tokens
├── global.css             # Global resets and utilities
├── typography.css         # Typography styles
└── components/            # Component-specific styles
    ├── Button.module.css
    ├── Card.module.css
    ├── Header.module.css
    └── ...
```

## Design Tokens Reference

### Color Tokens
See `colors.md` for complete palette and usage guidelines.

### Typography Tokens
See `typography.md` for font system and hierarchy.

### Spacing Tokens
See `spacing.md` for spacing scale and layout guidelines.

### Component Patterns
See `components.md` for component-specific design rules.

### Responsive Guidelines
See `responsive.md` for breakpoints and mobile design.

## Key Measurements

### Container
- Max width: `1200px`
- Side padding: `1rem` mobile, `2rem` desktop

### Header
- Height: `80px`
- Fixed position
- Background blur on scroll

### Sections
- Padding: `3rem` mobile, `4rem` desktop
- Alternating background colors

### Cards
- Border radius: `12px`
- Shadow: `--shadow-md`
- Padding: `2rem`

### Buttons
- Min height: `44px` (touch-friendly)
- Border radius: `--radius-full` (pill shape)
- Padding: `0.75rem 2rem`

## Accessibility Standards

### WCAG 2.1 Level AA Compliance

**Color Contrast:**
- Normal text: minimum 4.5:1
- Large text (18pt+): minimum 3:1
- Interactive elements: 3:1 against background

**Keyboard Navigation:**
- All interactive elements focusable
- Visible focus indicators
- Logical tab order
- No keyboard traps

**Screen Readers:**
- Semantic HTML structure
- Descriptive alt text for images
- ARIA labels where needed
- Form labels properly associated

**Touch Targets:**
- Minimum size: 44x44px
- Adequate spacing between targets
- Visual feedback on interaction

## Animation Guidelines

### Transition Speeds
- Fast: `0.2s` - Hovers, small changes
- Normal: `0.3s` - Most transitions
- Animation: `0.4s-1.2s` - Entrance effects

### Easing Functions
- Standard: `ease` - Most transitions
- Expo: `cubic-bezier(0.16, 1, 0.3, 1)` - Smooth deceleration
- Back: `cubic-bezier(0.68, -0.55, 0.265, 1.55)` - Playful bounce

### When to Animate
- ✅ Hover states, focus states
- ✅ Page transitions, section reveals
- ✅ Modal/menu open/close
- ✅ Form feedback
- ❌ Avoid excessive motion (respect prefers-reduced-motion)
- ❌ Don't animate critical information
- ❌ Keep animations subtle and purposeful

## Usage Guidelines

### DO ✓
- Use design tokens (CSS variables) exclusively
- Follow the 8px spacing grid
- Use Quicksand font family
- Implement mobile-first responsive design
- Add proper focus states to all interactive elements
- Use semantic HTML
- Provide alt text for all images
- Test with keyboard navigation
- Check color contrast ratios

### DON'T ✗
- Hardcode color values - always use variables
- Use arbitrary spacing - stick to spacing scale
- Mix different design patterns for same component type
- Forget mobile responsiveness
- Skip accessibility considerations
- Use non-semantic HTML (divs for buttons, etc.)
- Ignore focus states
- Forget loading and error states

## Testing Checklist

Before any design goes live:

- [ ] Tested on mobile (320px, 375px, 414px)
- [ ] Tested on tablet (768px, 1024px)
- [ ] Tested on desktop (1200px, 1920px)
- [ ] Keyboard navigation works
- [ ] Focus states visible
- [ ] Screen reader tested
- [ ] Color contrast checked (WCAG AA)
- [ ] Touch targets minimum 44x44px
- [ ] Text readable at all sizes
- [ ] Images have alt text
- [ ] Forms have labels
- [ ] Loading states work
- [ ] Error states clear
- [ ] Animations smooth (60fps)
- [ ] No console errors
- [ ] Lighthouse score > 90

## Brand Applications

### Logo Usage
- Primary logo: Seahorse SVG placeholder
- Minimum size: 40px height
- Clear space: 16px around logo
- Placement: Top left of header

### Photography Style
- Natural lighting
- Children in authentic play situations
- Warm, inviting environments
- Professional but not staged
- Italian setting context

### Iconography
- React Icons library
- Solid style for filled icons
- Line style for outlined icons
- Size: 24px standard, 20px small, 32px large
- Color: Inherit from parent or use primary color

## Version & Maintenance

**Design System Version**: 1.0.0
**Last Updated**: 2024
**Maintained by**: Development team

### Change Process
1. Propose change with reasoning
2. Review impact on existing components
3. Update design tokens
4. Update documentation
5. Implement across components
6. Test thoroughly
7. Deploy

### Breaking Changes
Breaking changes to the design system require:
- Major version bump
- Migration guide
- Deprecation warnings
- Backwards compatibility period

## Resources

**Internal Files:**
- `src/styles/variables.css` - All design tokens
- `src/styles/global.css` - Global styles
- `src/styles/typography.css` - Typography system
- `src/types/index.ts` - Component prop types

**External References:**
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Quicksand Font](https://fonts.google.com/specimen/Quicksand)
- [React Icons](https://react-icons.github.io/react-icons/)

---

This design system ensures consistency, accessibility, and maintainability across the entire Cavalluccio Marino website.
