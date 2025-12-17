# Claude Skills for Seahorse Project

Custom Claude Code skills tailored specifically for the Cavalluccio Marino daycare website project.

## Available Skills

### 1. TypeScript Master
**Location**: `.claude/skills/typescript-master/`
**Purpose**: Advanced TypeScript expertise for strict type safety and React patterns

**When to use**:
- Complex TypeScript type issues or errors
- Type refactoring and improvements
- Adding types to untyped code
- TypeScript best practices consultation
- Generic types, conditional types, utility types
- React + TypeScript patterns

**Example invocations**:
```
"Review the types in src/types/index.ts for improvements"
"Help me add proper typing to this component"
"Fix these TypeScript errors with strict mode"
"Suggest better types for this interface"
```

### 2. Code Reviewer (Type Safety Focus)
**Location**: `.claude/skills/code-reviewer/`
**Purpose**: Comprehensive code review with emphasis on TypeScript type safety

**When to use**:
- Before committing significant changes
- Pull request reviews
- Security audits
- Type safety verification
- Code quality assessment
- Best practices validation

**Example invocations**:
```
"Review this component for type safety issues"
"Full code review of the Contact form"
"Security review of form validation"
"Check accessibility compliance in Navigation"
```

**Review types**:
- `Full review` - Comprehensive analysis
- `Type safety only` - Focus on TypeScript
- `Security review` - Security concerns only
- `Performance review` - Performance optimization
- `Quick review` - High-level overview

### 3. SEO Expert
**Location**: `.claude/skills/seo-expert/`
**Purpose**: Search engine optimization and local SEO for Lodi, Italy market

**When to use**:
- SEO audit before launch
- Meta tags optimization
- Schema markup implementation
- Local SEO strategy
- Performance optimization for SEO
- Content optimization
- Analytics setup

**Example invocations**:
```
"Perform an SEO audit of the website"
"Add schema markup for local business"
"Optimize meta tags for better rankings"
"Review content for local SEO keywords"
"Suggest improvements for Google search visibility"
```

**Specialized knowledge**:
- Italian market SEO
- Local Lodi keywords
- Childcare industry SEO
- React SPA SEO considerations
- Google Business Profile optimization

### 4. Web Designer (With Design System)
**Location**: `.claude/skills/web-designer/`
**Purpose**: Visual consistency, accessibility, and design system maintenance

**When to use**:
- Design consistency audits
- New component design
- Responsive design review
- Accessibility assessment
- Visual polish
- Brand compliance checks
- Design system updates

**Example invocations**:
```
"Review the About section for design consistency"
"Check accessibility compliance across the site"
"Audit button components for brand alignment"
"Review responsive design for mobile devices"
"Design consistency check before deployment"
```

**Includes comprehensive directives**:
- `directives/design-system.md` - Complete design system overview
- `directives/colors.md` - Color palette and usage guidelines
- `directives/typography.md` - Font system and hierarchy
- `directives/spacing.md` - Spacing scale and layout rules
- `directives/components.md` - Component design patterns
- `directives/responsive.md` - Breakpoints and responsive guidelines

## How to Use Skills

### Via Claude Code CLI

Skills are invoked naturally in conversation:

```bash
# Start Claude Code
claude

# Then in conversation:
"I need a TypeScript expert to help with these type errors"
# Claude will automatically invoke the TypeScript Master skill

"Can you review this code for type safety?"
# Claude will invoke the Code Reviewer skill

"Perform an SEO audit"
# Claude will invoke the SEO Expert skill

"Check if our buttons follow the design system"
# Claude will invoke the Web Designer skill
```

### Skill Context

Each skill has:
- **Specific expertise** in its domain
- **Project knowledge** about Seahorse website
- **Best practices** for its area
- **Structured output** formats
- **Actionable recommendations**

### Combining Skills

Skills can work together:

```
"Review this new component (Code Reviewer) and ensure it follows
our design system (Web Designer)"

"Help me add TypeScript types (TypeScript Master) and then review
for type safety (Code Reviewer)"

"Optimize this page for SEO (SEO Expert) while maintaining design
consistency (Web Designer)"
```

## Project-Specific Context

All skills understand:
- **Technology**: React 18.3.1, TypeScript 5.9.3, Vite 5.1.0
- **Location**: Lodi, Italy (San Bernardo)
- **Business**: Family daycare (asilo nido famiglia)
- **Target Audience**: Local parents with young children
- **Language**: Italian
- **Design**: Pastel colors, rounded corners, warm aesthetic
- **Architecture**: Single-page app, CSS Modules, strict TypeScript

## Design System Quick Reference

### Colors
- Primary: `#ADD8E6` (Light Blue) - Trust, professionalism
- Secondary: `#98FF98` (Mint Green) - Growth, freshness
- Accent: `#FFB6C1` (Soft Pink) - Care, warmth

### Spacing Scale (8px base)
- XS: 8px, SM: 16px, MD: 32px, LG: 48px, XL: 64px, 2XL: 96px

### Typography
- Font: Quicksand (300-700 weights)
- Base size: 16px
- Fluid headings with `clamp()`

### Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1023px
- Desktop: 1024px+

### Accessibility
- WCAG 2.1 Level AA compliance
- Minimum contrast: 4.5:1
- Touch targets: 44x44px minimum

## Best Practices

### When to Invoke Skills

**TypeScript Master**:
- Complex type errors
- Type system refactoring
- Adding types to new code
- Generic programming patterns

**Code Reviewer**:
- Before committing code
- After completing features
- Security concerns
- Quality assurance

**SEO Expert**:
- Before launch
- Content updates
- Meta tag changes
- Performance issues

**Web Designer**:
- New components
- Layout changes
- Visual bugs
- Accessibility issues

### Skill Limitations

Skills provide:
- ✅ Expert guidance and recommendations
- ✅ Code examples and implementations
- ✅ Best practices and patterns
- ✅ Problem identification

Skills don't:
- ❌ Replace your judgment
- ❌ Make business decisions
- ❌ Guarantee perfect solutions
- ❌ Eliminate need for testing

## Maintenance

### Updating Skills

To modify or extend a skill:

1. Navigate to skill directory: `.claude/skills/{skill-name}/`
2. Edit `skill.md` to update instructions
3. For Web Designer, edit directive files in `directives/`
4. Test changes by invoking the skill
5. Document changes in git commit

### Adding New Skills

To create a new skill:

1. Create directory: `.claude/skills/{new-skill-name}/`
2. Create `skill.md` with skill definition
3. Include project context
4. Define clear responsibilities
5. Provide output format
6. Add examples and guidelines
7. Update this README

### Design System Updates

When design system changes:

1. Update CSS variables in `src/styles/variables.css`
2. Update directive files in `.claude/skills/web-designer/directives/`
3. Update components to match
4. Run Web Designer skill to audit compliance
5. Document changes

## Examples

### Example 1: Type Safety Review
```
User: "I just updated the ContactForm component with new validation.
Can you review it for type safety?"

Claude: [Invokes Code Reviewer skill]
- Reviews TypeScript types
- Checks form validation logic
- Verifies error handling
- Provides specific feedback with line references
```

### Example 2: SEO Optimization
```
User: "We're launching next week. Please do a complete SEO audit."

Claude: [Invokes SEO Expert skill]
- Checks meta tags
- Validates schema markup
- Reviews local SEO keywords
- Provides implementation checklist
- Suggests Google Business Profile optimization
```

### Example 3: Design Consistency
```
User: "I added a new Services section. Make sure it follows our design system."

Claude: [Invokes Web Designer skill]
- Checks color usage against palette
- Verifies spacing scale compliance
- Reviews typography hierarchy
- Tests responsive breakpoints
- Validates accessibility
```

### Example 4: Combined Skills
```
User: "Review the entire Contact page - types, design, and SEO."

Claude: [Invokes multiple skills]
1. Code Reviewer - Type safety and code quality
2. Web Designer - Visual consistency and accessibility
3. SEO Expert - Meta tags and local keywords
- Provides comprehensive multi-perspective review
```

## Troubleshooting

### Skill Not Working
- Ensure skill.md file exists and is properly formatted
- Check file permissions
- Verify Claude Code version is up to date

### Outdated Recommendations
- Review and update skill.md content
- Update directive files for Web Designer
- Sync with current project state

### Conflicting Advice
- Skills may have different priorities (e.g., SEO vs Design)
- Use judgment to balance recommendations
- Document trade-offs and decisions

## Resources

**Internal Documentation**:
- Design system: `.claude/skills/web-designer/directives/`
- Type definitions: `src/types/index.ts`
- CSS variables: `src/styles/variables.css`
- ESLint config: `.eslintrc.cjs`
- TypeScript config: `tsconfig.json`

**External References**:
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Google SEO Guide](https://developers.google.com/search/docs)

---

These skills are living documents. Update them as the project evolves to maintain their relevance and effectiveness.
