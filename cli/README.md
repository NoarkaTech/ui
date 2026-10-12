# @noarka/cli

Scaffold Noarka UI primitives into your project, shadcn-style.

```bash
npx @noarka/cli init
npx @noarka/cli add button
npx @noarka/cli list
```

- `init` writes `utils/cn.ts` once per project.
- `add <component>` copies the primitive to `components/ui/` (lowercase
  basenames, same-dir imports rewritten) and writes `utils/cn.ts` if missing.
  Components that use another primitive print a follow-up `add` command.
- Templates ship inside `@noarka/ui` itself, so scaffolded code always
  matches the installed library version.

Options: `--dir <path>` scaffolds into another project root, `--overwrite`
replaces existing files.
