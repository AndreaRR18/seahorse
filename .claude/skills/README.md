# Project Skills

Four skills for the Cavalluccio Marino website, shared by **Claude Code** and
**Mistral Vibe**.

## Layout

```
.claude/skills/
├── README.md                  # this file
├── typescript-master/
│   └── SKILL.md
├── code-reviewer/
│   └── SKILL.md
├── seo-expert/
│   └── SKILL.md
└── web-designer/
    ├── SKILL.md
    └── directives/
        ├── design-system.md
        ├── colors.md
        ├── typography.md
        ├── spacing.md
        ├── components.md
        └── responsive.md
```

Each skill is a directory containing a `SKILL.md` with YAML frontmatter:

```yaml
---
name: typescript-master
description: Load when a task involves TypeScript types in this project — ...
---
```

`name` must be lowercase, hyphenated, and match the directory name.
`description` is the routing text the model sees before loading the skill, so
it says *when* to load, not just what the skill contains.

## How each agent finds them

**Claude Code** discovers `.claude/skills/` natively. Nothing to configure.

**Mistral Vibe** reads the same directory because `.vibe/config.toml` sets:

```toml
skill_paths = [".claude/skills"]
```

That path is relative to the working directory — launch Vibe from the
repository root. `.vibe/config.toml` only loads in a trusted folder.

One copy, two agents. Do not duplicate skills into `.vibe/skills/` or
`.agents/skills/`; a second copy will drift.

## The skills

### `typescript-master`

Load for type errors, strict-mode complaints, typing a new component or hook,
or refactoring an interface.

Covers the flags that actually bite here — `noUncheckedIndexedAccess`,
`isolatedModules`, `noUnusedLocals` — the `@types/react` v19 / React 18
mismatch, and the conventions in `src/types/index.ts`.

```
"Fix these type errors"
"Type this new component"
"Why does array[i] complain about undefined?"
```

### `code-reviewer`

Load before committing, or when asked to review a component, a diff or the
whole codebase.

Reviews in priority order: content correctness, type safety, React
correctness, accessibility, security, performance, styling. Knows the
`--max-warnings 0` gate and the eleven known defects, so it does not re-report
them as new.

```
"Review this component"
"Security review of the contact form"
"Quick review of my diff"
```

Modes: full · type safety only · security · performance · accessibility ·
quick.

### `seo-expert`

Load for meta tags, JSON-LD, local SEO, sitemap and robots, Open Graph
previews, or Core Web Vitals.

Holds the exact NAP data, the Italian keyword targets for Lodi, the current
state of `StructuredData.tsx`, and the SPA constraint that makes runtime
meta tags useless to crawlers.

```
"Audit the SEO"
"Fix the schema markup"
"Why do social shares have no image?"
```

### `web-designer`

Load for design-token compliance, component design, responsive review,
accessibility and contrast, or visual polish.

Ships six reference files in `directives/`. Read the one you need rather than
loading all of them — `colors.md` for palette and contrast, `typography.md`
for the type scale, `spacing.md` for the 8px rhythm, `components.md` for
component patterns, `responsive.md` for breakpoints, `design-system.md` for
the overview.

```
"Check this section against the design system"
"Audit accessibility"
"Review the mobile layout"
```

## Combining skills

They compose. A new section typically wants `web-designer` for the layout and
`typescript-master` for the props; a pre-launch pass wants `seo-expert` and
`code-reviewer` together.

```
"Build the new section, then review it for types, design and SEO"
```

## Maintaining them

- **Edit in place.** Change `SKILL.md`; both agents pick it up. Vibe reloads
  on `/reload` or automatically when the file watcher is on.
- **Keep the description current.** It is the only text the model sees before
  deciding to load the skill. A stale description means the skill never fires.
- **Keep the facts current.** Versions, file paths, token values and the known
  issues list all drift. When the codebase changes, update the skill in the
  same commit.
- **Do not duplicate `AGENTS.md`.** Project-wide conventions belong there.
  A skill holds domain expertise, not a second copy of the ground rules.

## Related

- `AGENTS.md` — canonical project instructions, read by both agents
- `CLAUDE.md` — Claude Code entry point, imports `AGENTS.md`
- `.vibe/config.toml` — points Vibe at this directory
