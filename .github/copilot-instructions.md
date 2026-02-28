# gooey AI helper guide

This document tells Copilot-style agents how this repo is structured and what patterns are
important for quickly becoming productive. The project is a **personal playground** for
building React + Tailwind CSS UI components. It's explicitly _not_ a polished, maintained
library — the README clearly warns about that. When in doubt, follow the existing code.

## Big picture

- **Monorepo?** No. Single package under `src/` with React components, hooks and utils.
- **Build tools**: Vite + TypeScript, output is not published anywhere. `yarn dev` starts
  vite, `yarn build` runs `tsc && vite build`. Storybook is configured using
  `@storybook/react-vite` (see `package.json` scripts).
- **Design**: every component lives in `src/components/<category>/`. Each folder usually
  contains:
  - `Component.tsx` (main implementation)
  - `Component.test.tsx` (Vitest/Testing Library smoke tests)
  - `Component.stories.tsx` (Storybook stories)
  - `index.ts`/`index.tsx` re‑exporting the default component.
- **Styling**: Tailwind CSS only. The codebase uses `ctl` (`@netlify/classnames-template-literals`)
  to build multiline class strings, and `tailwind-merge` (`twMerge`) when combining
  classes from props. Variants are often implemented as maps of `ctl` templates.

```
// example from Button.tsx
const variantClassNameMap = {
  default: ctl(`text-white bg-blue-600 ...`),
  danger: ctl(`text-white bg-red-600 ...`),
  // ...
};

const className = twMerge(cx(baseStyles, getVariantClassName(variant)), inputtedClassName);
```

- **Utilities & hooks**: minimal. `src/utils` has helpers (`clamp`, `round`).
  `src/hooks` currently contains `useKeyPress` with its own test.
- **Testing**: Vitest configured via `package.json`. `src/test/setup.tsx` imports
  `@testing-library/jest-dom`. Import components by relative paths (no absolute
  imports except alias `~/*` in tsconfig, although it's rarely used).
- **Paths**: `~/*` points to `src/*` (see `tsconfig.json`). Most code uses relative
  imports; feel free to use alias when it makes sense.

## Developer workflows

1. **Install**: Use `bun` to install. Do not use npm or yarn.
2. **Run locally**
   - Dependencies are installed with `bun install` (preferred). `yarn` or `npm` also work but may pull different versions of storybook.
   - `bun run dev` for the component library via Vite (not strictly needed; UI exists only
     inside Storybook).
   - `bun run storybook` to boot Storybook at `http://localhost:6006`.
3. **Build**: `bun run build` produces a Vite dist (never published) and runs TypeScript
   checks. `bun run build-storybook` builds the static Storybook.
4. **Tests**: `bun run test` for headless Vitest, `bun run test-ui` to open the interactive
   runner.
5. **Adding a component**: mimic pattern in `src/components/buttons` or `input`; always
   include a story and a test and export from an `index` file.
6. **Styling changes**: modify `tailwind.config.cjs` if you need new utilities.
   Dark mode is enabled by `class` strategy; add `dark:` variants accordingly.

> **Note:** The library is intentionally rough. Don't refactor the entire tree for
> consistency unless you're prepared to maintain it; simple incremental changes are fine.

## Conventions & quirks

- Components default to functional components with `export const X` and `export default X`.
- Class names are built with `ctl` strings and merged with `twMerge`. Do _not_ hardcode
  tailwind classes directly in JSX when combinations are likely to collide; follow the
  existing pattern.
- Prop types are `React.DetailedHTMLProps<..., ...>` extended with custom props when
  needed (e.g. `variant` or `isOpen`).
- `isBoxInput` pattern inside `Input.tsx` for checkbox/radio styling variations.
- Avoid external dependencies beyond what already exists; this repo is a sandbox.
- When writing tests use `@testing-library/react` and prefer `render` + simple
  assertions (e.g. `expect(screen.getByRole('button')).toBeInTheDocument()`).

## Integration points

- No backend, no external APIs.
- **Package manager**: bun is the canonical installer. The repo currently pins Storybook to `^7.0.0-beta.19` because newer releases could not be resolved by bun; feel free to upgrade if you switch to yarn/npm instead.
- The only non‑React dependency is Tailwind CSS plus a few build tools (Storybook,
  Vitest, Babel). Most runtime logic lives inside components.
- Storybook stories can be used as manual test cases and examples for new components.

## What to avoid

- Don't assume stable public API; the project is for personal experimentation.
- Do not add large frameworks or change the build system unless there is a clear
  benefit for the playground.
