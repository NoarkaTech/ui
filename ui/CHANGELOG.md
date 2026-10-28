# Changelog

## CLI 0.1.7

- `add` prompts per existing file (`... already exists. Replace it? (y/N)`), so local edits are never silently dropped. `--overwrite` still skips the prompt, and non-interactive runs (CI, pipes) keep existing files.
- `init` and `add` now wire the design tokens into the project's real stylesheet entry (`app/globals.css`, `styles/globals.css`, `src/index.css`, ...): the `@theme` imports from `tokens.css`/`base.css` plus the `@source` scan path for the dist. No manual step, `bg-surface` and friends work immediately. A missing entry is created and the import line is printed.

## CLI 0.1.6

- Cross-primitive imports are rewritten for the flat `components/ui/` layout (e.g. `../Button/Button` becomes `./button`), fixing scaffolded files that failed to typecheck.
- The `add` hint now suggests `npx @noarka/cli add <component>`.
- The published dependency uses a normal npm range instead of `workspace:`, so installs work outside this monorepo.

## 0.1.5

- Components scaffold as a single file. Variant definitions (Badge, Button, Card, Toggle) are merged into the component file; no more `.variants.ts` companions.
- `@noarka/cli`: cross-primitive imports are rewritten for the flat `components/ui/` layout (e.g. `../Button/Button` becomes `./button`). Fixes scaffolded files failing to typecheck.
- `@noarka/cli`: the `add` hint now suggests `npx @noarka/cli add <component>`.
- `@noarka/cli` dependency uses a normal npm range so installs work outside the monorepo.

## 0.1.4

- Base UI bumped to 1.9.0.
- Focus ring parity across primitives.
- Command palette floating modal with Kbd footer and hover backgrounds.
- Dialog/AlertDialog footers use `bg-surface` band.
- Mobile hamburger nav (Sheet), header tooltips.
- SEO metadata, sitemap, robots.txt, llms.txt.
- Skeleton shimmer visible in light mode.
- CLI scaffolds globals.css with design tokens.

## 0.1.3

- Initial release: primitives, variants, docs site.

## 0.1.2

- Component polish and bug fixes.