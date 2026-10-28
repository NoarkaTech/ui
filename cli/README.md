# @noarka/cli

Scaffold Noarka UI primitives into your project.

```bash
npx @noarka/cli init
npx @noarka/cli add button
npx @noarka/cli list
```

- `init` writes `utils/cn.ts` once per project and wires the design tokens into
  your existing stylesheet entry (`app/globals.css`, `styles/globals.css`,
  `src/index.css`, ...), creating one if none exists.
- `add <component>` copies the primitive to `components/ui/` (lowercase
  basenames, imports rewritten for the flat layout) and ensures the token
  wiring above. Components that use another primitive print a follow-up
  `add` command.
- Templates ship inside `@noarka/ui` itself, so scaffolded code always
  matches the installed library version.

## Conflicts

When a scaffolded file already exists, you are asked per file whether to
replace it, so local edits are never silently dropped. Pass `--overwrite`
to replace everything without prompting (non-interactive runs, like CI,
also keep existing files unless the flag is used).

Options: `--dir <path>` scaffolds into another project root, `--overwrite`
replaces existing files.
