"use client";

import * as React from "react";
import { Badge, Button, Separator } from "@noarka/ui";
import { ArrowLeftLinearIcon, CheckCircleLinearIcon, CopyLinearIcon } from "@solar-icons/react";

import Link from "next/link";
import Image from "next/image";
import { DocsHeader } from "../../components/docs-header";
import { DocsSidebar } from "../../components/docs-sidebar";
import { CodeBlock } from "../../components/code-block";
import { PageToc } from "../../components/page-toc";
import { InstallTabs, commandForPackages } from "../../components/install-tabs";

const TOC = [
  { label: "Install the packages", href: "#install-packages" },
  { label: "Import the design tokens", href: "#design-tokens" },
  { label: "Or paste the tokens", href: "#token-values" },
  { label: "Use the components", href: "#use-components" },
  { label: "Render as other elements", href: "#render-prop" },
  { label: "Theme per app", href: "#theming" },
];

function Step({
  n,
  title,
  id,
  children,
}: {
  n: number;
  title: string;
  id: string;
  children: React.ReactNode;
}) {
  return (
    <div id={id} className="flex scroll-mt-20 gap-4">
      <span className="flex size-7 items-center justify-center text-sm text-muted-foreground">
        {n}.
      </span>
      <div className="min-w-0 flex-1 space-y-3 pb-2">
        <h2 className="font-serif text-xl font-medium">{title}</h2>
        {children}
      </div>
    </div>
  );
}

const INSTALL_PACKAGES = [
  "@noarka/ui",
  "@base-ui/react",
  "@solar-icons/react",
  "class-variance-authority",
  "clsx",
  "tailwind-merge",
];

const CSS_SNIPPET = `@import "@noarka/ui/styles/tokens.css";
@import "@noarka/ui/styles/base.css";
@source "../node_modules/@noarka/ui/dist/**/*.js";`;

const USAGE_SNIPPET = `import { Button, Card, CardHeader, CardTitle, Input, Label } from "@noarka/ui";

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
        <Button render={<a href="/team">Send invite</a>} />
      </div>
    </Card>
  );
}`;

const ROOT_TOKENS = `:root {
  --font-serif: var(--font-bricolage), ui-serif, Georgia, serif;
  --solar-stroke-width: 2;
  --background: oklch(1 0 0);
  --foreground: oklch(0.148 0.004 228.8);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.148 0.004 228.8);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.148 0.004 228.8);
  --primary: #DA7756;
  --primary-foreground: oklch(0.97 0.014 254.604);
  --secondary: oklch(0.967 0.001 286.375);
  --secondary-foreground: oklch(0.21 0.006 285.885);
  --muted: oklch(0.963 0.002 197.1);
  --muted-foreground: oklch(0.56 0.021 213.5);
  --accent: oklch(0.963 0.002 197.1);
  --accent-foreground: oklch(0.218 0.008 223.9);
  --destructive: oklch(0.577 0.245 27.325);
  --destructive-foreground: oklch(0.92 0.06 27.325);
  --success: hsl(142 54% 54%);
  --success-foreground: hsl(142 80% 95%);
  --warning: hsl(36 35% 54%);
  --warning-foreground: hsl(36 70% 95%);
  --dead: hsl(0 0% 42%);
  --dead-foreground: hsl(0 0% 92%);
  --border: oklch(0.925 0.005 214.3);
  --input: oklch(94.007% 0.00011 271.152);
  --ring: oklch(0.723 0.014 214.4);
  --chart-1: oklch(0.872 0.007 219.6);
  --chart-2: oklch(0.56 0.021 213.5);
  --chart-3: oklch(0.45 0.017 213.2);
  --chart-4: oklch(0.378 0.015 216);
  --chart-5: oklch(0.275 0.011 216.9);
  --radius: 0.625rem;
  --sidebar: #f1f3f4;
  --sidebar-foreground: oklch(0.148 0.004 228.8);
  --sidebar-primary: oklch(0.55 0.22 263);
  --sidebar-primary-foreground: oklch(0.97 0.014 254.604);
  --sidebar-accent: #e2e6ea;
  --sidebar-accent-foreground: oklch(0.218 0.008 223.9);
  --sidebar-border: oklch(0.925 0.005 214.3);
  --sidebar-ring: oklch(0.723 0.014 214.4);
  --surface: oklch(100% 0.00011 271.152);
} `;

const DARK_TOKENS = `.dark {
  --background: oklch(16.9% 0.002 286.2);
  --foreground: oklch(96% 0.011 286.2);
  --card: oklch(20.1% 0.002 286.2);
  --card-foreground: oklch(0.987 0.002 197.1);
  --popover: oklch(20.1% 0.002 286.2);
  --popover-foreground: oklch(0.987 0.002 197.1);
  --primary: oklch(67.4% 0.132 39.1);
  --primary-foreground: oklch(0.97 0.014 254.604);
  --secondary: oklch(23.1% 0.002 286.3);
  --secondary-foreground: oklch(0.985 0 0);
  --muted: oklch(23.1% 0.002 286.3);
  --muted-foreground: oklch(70.811% 0.01569 264.51);
  --accent: oklch(25.3% 0.004 286.1);
  --accent-foreground: oklch(0.987 0.002 197.1);
  --destructive: oklch(58.6% 0.123 21.5);
  --success: oklch(74.6% 0.161 152.4);
  --warning: oklch(67.9% 0.077 76.8);
  --border: oklch(100% 0.00011 271.152 / 0.034);
  --input: oklch(23.1% 0.002 286.3);
  --ring: oklch(100% 0.00011 271.152 / 0.034);
  --chart-1: oklch(0.872 0.007 219.6);
  --chart-2: oklch(0.56 0.021 213.5);
  --chart-3: oklch(0.45 0.017 213.2);
  --chart-4: oklch(0.378 0.015 216);
  --chart-5: oklch(0.275 0.011 216.9);
  --sidebar: oklch(18.7% 0.002 286.2);
  --sidebar-foreground: oklch(0.987 0.002 197.1);
  --sidebar-primary: oklch(54.76% 0.22148 263.278 / 0.192);
  --sidebar-primary-foreground: oklch(0.97 0.014 254.604);
  --sidebar-accent: oklch(23.1% 0.002 286.3);
  --sidebar-accent-foreground: oklch(0.987 0.002 197.1);
  --sidebar-border: oklch(1 0 0 / 10%);
  --sidebar-ring: oklch(53.492% 0.02466 268.236);
  --surface: oklch(22.3% 0.002 286.2);
}`;

const THEME_SNIPPET = `[data-theme="acme"] {
  --primary: oklch(0.65 0.2 150);
}`;

export default function InstallationPage() {
  return (
    <div className="min-h-svh max-w-6xl mx-auto">
      <DocsHeader/>

      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 pt-14 lg:grid-cols-[200px_minmax(0,1fr)] xl:grid-cols-[200px_minmax(0,1fr)_180px]">
        <DocsSidebar />

        {/* Middle content */}
        <main className="min-w-0 space-y-10 pb-14">
          <div>
            <h1 className="mt-1 font-serif text-4xl font-medium">Installation</h1>
            <p className="mt-2 max-w-xl text-muted-foreground">
              Add <code className="rounded bg-muted px-1.5 py-0.5 text-sm">@noarka/ui</code> to
              any React 19 project styled with Tailwind CSS v4. Then import the design tokens once and start rendering components. To customise the palette, fonts, or radius, see the{" "}
              <Link className="text-primary underline" href="/theming">
                Theming
              </Link>{" "}
              page.
            </p>
          </div>

          <div className="space-y-8">
            <Step n={1} id="install-packages" title="Install the packages">
              <p className="text-sm text-muted-foreground">
                The library itself plus its peer dependencies:
              </p>
              <InstallTabs commands={commandForPackages(INSTALL_PACKAGES)} />
            </Step>

            <Step n={2} id="design-tokens" title="Import the design tokens">
              <p className="text-sm text-muted-foreground">
                Add both stylesheets once in your global CSS file. This is also
                where Tailwind v4 picks up the theme. The{" "}
                <code className="rounded bg-muted px-1 py-0.5 text-xs">@source</code>{" "}
                line registers the library&apos;s classes, which Tailwind would
                otherwise skip inside node_modules.
              </p>
              <CodeBlock code={CSS_SNIPPET} lang="css" />
            </Step>

            <Step n={3} id="token-values" title="Or paste the tokens directly">
              <p className="text-sm text-muted-foreground">
                Prefer not to import the stylesheets? Copy these two blocks into
                your own global CSS instead. They are the same tokens the
                library ships, split into a light default and a dark override,
                so your app gets both modes with no extra config. Toggle by
                adding or removing the{" "}
                <code className="rounded bg-muted px-1 py-0.5 text-xs">dark</code>{" "}
                class on <code className="rounded bg-muted px-1 py-0.5 text-xs">&lt;html&gt;</code>.
              </p>
              <p className="text-sm text-muted-foreground">
                You still need the{" "}
                <code className="rounded bg-muted px-1 py-0.5 text-xs">@source</code>{" "}
                line from step 2 so Tailwind scans the library&apos;s classes.
              </p>
              <div className="space-y-3">
                <div>
                  <p className="mb-1.5 text-xs font-medium">Light</p>
                  <CodeBlock code={ROOT_TOKENS} lang="css" />
                </div>
                <div>
                  <p className="mb-1.5 text-xs font-medium">Dark</p>
                  <CodeBlock code={DARK_TOKENS} lang="css" />
                </div>
              </div>
            </Step>

            <Step n={4} id="use-components" title="Use the components">
              <p className="text-sm text-muted-foreground">
                Import primitives directly, no providers or setup required
                (wrap tooltips in a{" "}
                <code className="rounded bg-muted px-1 py-0.5 text-xs">TooltipProvider</code>{" "}
                once near the root of your app).
              </p>
              <CodeBlock code={USAGE_SNIPPET} lang="tsx" />
            </Step>

            <Step n={5} id="render-prop" title="Render as other elements">
              <p className="text-sm text-muted-foreground">
                Every interactive primitive accepts{" "}
                <code className="rounded bg-muted px-1 py-0.5 text-xs">render</code> to
                swap the underlying element, this replaces Radix-style{" "}
                <code className="rounded bg-muted px-1 py-0.5 text-xs">asChild</code>.
                Non-button elements automatically opt out of native button
                semantics.
              </p>
            </Step>

            <Step n={6} id="theming" title="Theme per app">
              <p className="text-sm text-muted-foreground">
                Everything is a CSS variable. Scope overrides under any selector:
              </p>
              <CodeBlock code={THEME_SNIPPET} lang="css" />
              <p className="text-sm text-muted-foreground">
                The full token list, radius scale, and font slots are covered on
                the{" "}
                <Link className="text-primary underline" href="/theming">
                  Theming
                </Link>{" "}
                page.
              </p>
            </Step>
          </div>

          <Separator />
        </main>

        {/* Right table of contents */}
        <PageToc items={TOC} />
      </div>
    </div>
  );
}
