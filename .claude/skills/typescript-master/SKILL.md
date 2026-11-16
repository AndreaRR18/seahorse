---
name: typescript-master
description: Load when a task involves TypeScript types in this project — a type error, a strict-mode complaint, typing a new component or hook, refactoring an interface, or choosing between a union and optional props. Covers this repo's strict tsconfig flags, React 18 typing, and the shared types in src/types/index.ts.
---

# TypeScript Master

TypeScript expertise for this repository specifically. The general advice is
easy to find; what follows is what actually applies here.

## The configuration you are working against

`tsconfig.json` is stricter than a default Vite React template:

```jsonc
"strict": true,
"noUnusedLocals": true,
"noUnusedParameters": true,
"noFallthroughCasesInSwitch": true,
"noUncheckedIndexedAccess": true,   // array[i] is T | undefined
"noImplicitReturns": true,
"moduleResolution": "bundler",
"allowImportingTsExtensions": true,
"isolatedModules": true,
"noEmit": true
```

`noUncheckedIndexedAccess` is the flag that causes most of the friction in
this codebase. Every indexed read is `T | undefined`, including
`Object.keys(x)[0]` and `arr[i]` inside a `for` loop.

`isolatedModules` means every type-only import must say so:
`import type { Service } from '../types'`. A plain `import { Service }` fails
at build time.

## Installed versions

| Package | Installed | Note |
|---|---|---|
| `typescript` | 5.9.3 | `satisfies`, `const` type params, `using` all available |
| `react` / `react-dom` | 18.3.1 | Not 19 — no `use()`, no ref-as-prop |
| `@types/react` | **19.2.7** | A major version ahead of the runtime |
| `@types/react-dom` | **19.2.3** | Same mismatch |

The `@types/react` mismatch is the single most likely cause of a confusing
error here. If a type error looks impossible — a prop that should exist, a
`React.FC` that behaves oddly, a `JSX` namespace complaint — check whether the
v19 types are describing a v18 runtime before you change any code. Do not
"fix" it by adopting React 19 APIs; the runtime is 18.

## How types are organised

**`src/types/index.ts` holds every shared interface.** One file, no barrel
exports, no per-domain folders. It currently defines:

`Address`, `ContactInfo`, `Schedule`, `SocialLinks`, `SiteInfo`, `NavItem`,
`Value`, `Service`, `Testimonial`, `ContactFormData`, `FormErrors`,
`ButtonProps`, `CardProps`, `NavigationProps`, `SectionContainerProps`,
`Course`, `TrainingArea`, `GalleryImage`.

Component-local prop interfaces are acceptable when they are not reused —
`TestimonialPopup` declares its own. Follow that precedent rather than
promoting a one-off interface into `types/index.ts`.

**`src/utils/constants.ts` is the only place content is typed into data.**
Every export is annotated with its interface and closed with `as const`:

```ts
export const NAV_ITEMS: readonly NavItem[] = [...] as const;
```

Keep that shape. `as const` on a `readonly T[]` annotation gives literal
types for the values while keeping the array immutable.

## Patterns this codebase uses

**Discriminated unions for variants.** `ButtonProps` uses string literal
unions rather than booleans:

```ts
variant?: 'primary' | 'secondary' | 'outline' | 'hero';
size?: 'small' | 'medium' | 'large';
```

Prefer this over `isPrimary?: boolean; isLarge?: boolean`, which permits
illegal combinations.

**Optional error maps, not nullable fields.** `FormErrors` is a partial map
of field name to message:

```ts
export interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}
```

Validation builds a fresh object and checks `Object.keys(newErrors).length`.
When indexing it dynamically, the key needs narrowing:

```ts
if (errors[name as keyof FormErrors]) { ... }
```

That assertion is the established pattern in `ContactForm.tsx`. It is safe
because `name` comes from a form field that is a key of `FormErrors`.

**`React.FC` with explicit handler types.** Components are declared
`const X: React.FC<Props> = ({ ... }) => {}`. Event handlers are typed
explicitly rather than inferred:

```ts
const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {}
const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {}
```

**Refs are typed with the DOM element, and null-checked.** `useRef<HTMLDivElement>(null)`
then `if (!container) return;`. Never `container!`.

**Timers are `NodeJS.Timeout`.** `@types/node` is installed, so
`useRef<NodeJS.Timeout | null>(null)` is correct here — not `number`, which is
the browser-only answer.

## Rules

1. **No `any`.** ESLint warns and `--max-warnings 0` turns that into a failed
   build. Use `unknown` plus a narrowing guard.
2. **No non-null assertions.** `!` hides the exact bug `strict` exists to
   catch. Narrow with an early return or a type guard.
3. **No `as` casts except at a genuine boundary** — a DOM event target, a
   `keyof` index that is provably in range. If you need a cast to make an
   object literal fit, the interface is wrong; fix the interface.
4. **Prefer inference for locals, annotate exports.** `const total = items.length`
   needs nothing. An exported function's return type is worth writing.
5. **Make illegal states unrepresentable.** Two optional fields that must
   always appear together should be a union of two object shapes.
6. **`import type` for every type-only import.** `isolatedModules` requires it.
7. **Do not widen a type to silence an error.** If `Service.highlights` is
   `string[]` and you are passing `string | undefined`, the fix is upstream.

## Working method

When asked to fix or improve types:

1. Read `src/types/index.ts` and the file in question end to end.
2. Run `npm run type-check` to see the real error, not a paraphrase of it.
3. Identify whether the error is in the type, the value, or the interface.
   Most "type errors" in this repo are an interface that does not match the
   data in `constants.ts`.
4. Make the smallest change that removes the error without a cast.
5. Re-run `npm run type-check` and `npm run lint`.

Report what you changed and why the type is now correct. If you had to accept
a trade-off — a cast at a boundary, a widened union — say so explicitly
rather than leaving it for the reader to find.
