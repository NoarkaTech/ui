# @noarka/ui

An open-source React component library built on [Base UI](https://base-ui.com)
primitives and styled with Tailwind CSS v4. Accessible behavior comes from Base
UI; the Noarka look, feel, and API live here.

- Full documentation site: run `pnpm --filter @noarka/ui-docs dev`
- Zero Radix dependencies. Polymorphism via the `render` prop (no `asChild`).

## Installation

Requires React 19 and Tailwind CSS v4.

```bash
npm install @noarka/ui @base-ui/react @solar-icons/react class-variance-authority clsx tailwind-merge
```

Import the design tokens once in your global stylesheet (Tailwind v4):

```css
@import "@noarka/ui/styles/tokens.css";
@import "@noarka/ui/styles/base.css";

/* Required: node_modules is skipped by Tailwind v4's automatic content
   detection, so register the library's classes explicitly. */
@source "../node_modules/@noarka/ui/dist/**/*.js";
```

## Usage

```tsx
import { Button, Card, CardHeader, CardTitle, Input, Label } from "@noarka/ui";

export function Example() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Invite a teammate</CardTitle>
      </CardHeader>
      <div className="space-y-1.5 px-4">
        <Label htmlFor="email">Email</Label>
        <Input id="email" placeholder="teammate@company.com" />
      </div>
      <div className="p-4">
        {/* `render` replaces Radix-style `asChild` */}
        <Button render={<a href="/team">Send invite</a>} />
      </div>
    </Card>
  );
}
```

### Rendering a different element

Every interactive primitive accepts `render` to swap the underlying element:

```tsx
<Button render={<a href="/pricing">See pricing</a>} />
<DropdownMenuTrigger render={<button className="avatar-btn">Open</button>} />
```

If the `render` element is not a native `<button>`, `nativeButton` is inferred
as `false` automatically. Pass it explicitly to override.

### Theming

All styling flows through CSS variables defined in `tokens.css`. Override any
of them in your own stylesheet to theme per app:

```css
[data-theme="acme"] {
  --primary: oklch(0.65 0.2 150);
}
```

## Development

```bash
pnpm install
pnpm --filter @noarka/ui build      # ESM + .d.ts into dist/
pnpm --filter @noarka/ui-docs dev   # docs site on http://localhost:3100
```

## License

MIT — see [LICENSE](./LICENSE).
