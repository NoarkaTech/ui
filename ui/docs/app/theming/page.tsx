import { Separator } from "@noarka/ui";
import Link from "next/link";
import { DocsHeader } from "../../components/docs-header";
import { DocsSidebar } from "../../components/docs-sidebar";
import { CodeBlock } from "../../components/code-block";
import { PageToc } from "../../components/page-toc";

const TOC = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Color tokens", href: "#colors" },
  { label: "Dark mode", href: "#dark-mode" },
  { label: "Per-app overrides", href: "#overrides" },
  { label: "Radius", href: "#radius" },
  { label: "Fonts", href: "#fonts" },
  { label: "Surface", href: "#surface" },
  { label: "Next steps", href: "#next-steps" },
];

function DocSection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-20">
      <h2 className="font-serif text-2xl font-medium">{title}</h2>
      <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground">
        {children}
      </div>
    </section>
  );
}

const TOKENS: { name: string; value: string; note: string }[] = [
  { name: "--background", value: "oklch(16.9% 0.002 286.2)", note: "Page background." },
  { name: "--foreground", value: "oklch(96% 0.011 286.2)", note: "Default text." },
  { name: "--card", value: "oklch(20.1% 0.002 286.2)", note: "Card background." },
  { name: "--popover", value: "oklch(20.1% 0.002 286.2)", note: "Dialog and tooltip background." },
  { name: "--surface", value: "oklch(22.3% 0.002 286.2)", note: "Shared popup and menu background." },
  { name: "--secondary", value: "oklch(23.1% 0.002 286.3)", note: "Secondary fills." },
  { name: "--muted", value: "oklch(23.1% 0.002 286.3)", note: "Muted fills and skeleton base." },
  { name: "--accent", value: "oklch(25.3% 0.004 286.1)", note: "Hover and focus fills." },
  { name: "--primary", value: "oklch(67.4% 0.132 39.1)", note: "Brand actions and accents." },
  { name: "--destructive", value: "oklch(58.6% 0.123 21.5)", note: "Danger actions." },
  { name: "--success", value: "oklch(74.6% 0.161 152.4)", note: "Positive status." },
  { name: "--warning", value: "oklch(67.9% 0.077 76.8)", note: "Warning status." },
  { name: "--border", value: "oklch(100% 0.00011 271.152 / 0.034)", note: "Hairline borders." },
  { name: "--input", value: "oklch(23.1% 0.002 286.3)", note: "Input borders." },
  { name: "--ring", value: "oklch(100% 0.00011 271.152 / 0.034)", note: "Focus rings." },
];

const CSS_SNIPPET = `@import "@noarka/ui/styles/tokens.css";
@import "@noarka/ui/styles/base.css";
@source "../node_modules/@noarka/ui/dist/**/*.js";`;

const OVERRIDE_SNIPPET = `[data-theme="acme"] {
  --primary: oklch(0.65 0.2 150);
}`;

/* A light theme is just the same variables re-declared. */
const LIGHT_SNIPPET = `:root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.148 0.004 228.8);
  --card: oklch(1 0 0);
  --popover: oklch(1 0 0);
  --surface: oklch(0.967 0.001 286.375);
  /* ...every other token follows the same pattern. */
}`;

const RADIUS_SNIPPET = `:root {
  --radius: 0.625rem;
  /* sm: -4px · md: -2px · lg: base · xl: +4px */
  /* 2xl: +8px · 3xl: +12px · 4xl: +16px */
}`;

const FONTS_SNIPPET = `import { Geist, Geist_Mono } from "next/font/google";

const sans = Geist({ subsets: ["latin"], variable: "--font-sans" });
const mono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });`;

export default function ThemingPage() {
  return (
    <div className="min-h-svh max-w-6xl mx-auto">
      <DocsHeader />

      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 pt-14 lg:grid-cols-[200px_minmax(0,1fr)] xl:grid-cols-[200px_minmax(0,1fr)_180px]">
        <DocsSidebar />

        <main className="min-w-0 space-y-10 pb-14">
          <div>
            <h1 className="mt-1 font-serif text-4xl font-medium">Theming</h1>
            <p className="mt-2 max-w-xl text-muted-foreground">
              Every color, radius, and font in Noarka UI is a CSS variable.
              Override them to re-skin the whole library without forking a
              single component.
            </p>
          </div>

          <DocSection id="how-it-works" title="How it works">
            <p>
              Two stylesheets carry the theme.{" "}
              <code className="rounded bg-muted px-1 py-0.5 text-xs">tokens.css</code>{" "}
              declares every variable once in{" "}
              <code className="rounded bg-muted px-1 py-0.5 text-xs">:root</code>,
              and an{" "}
              <code className="rounded bg-muted px-1 py-0.5 text-xs">@theme inline</code>{" "}
              block maps them to Tailwind utilities:{" "}
              <code className="rounded bg-muted px-1 py-0.5 text-xs">--primary</code>{" "}
              becomes{" "}
              <code className="rounded bg-muted px-1 py-0.5 text-xs">bg-primary</code>,{" "}
              <code className="rounded bg-muted px-1 py-0.5 text-xs">--radius-lg</code>{" "}
              becomes{" "}
              <code className="rounded bg-muted px-1 py-0.5 text-xs">rounded-lg</code>,
              and so on.{" "}
              <code className="rounded bg-muted px-1 py-0.5 text-xs">base.css</code>{" "}
              adds keyframes and small structural styles on top. The{" "}
              <code className="rounded bg-muted px-1 py-0.5 text-xs">@source</code>{" "}
              line registers the library&apos;s classes, which Tailwind would
              otherwise skip inside node_modules.
            </p>
            <CodeBlock code={CSS_SNIPPET} lang="css" />
          </DocSection>

          <DocSection id="colors" title="Color tokens">
            <p>
              The default palette is dark-first. Swatches show the exact
              shipped values:
            </p>
            <div className="overflow-x-auto rounded-xl border">
              <table className="w-full min-w-[520px] text-sm">
                <thead>
                  <tr className="border-b bg-muted/50 text-left">
                    <th className="px-4 py-2.5 font-medium">Token</th>
                    <th className="px-4 py-2.5 font-medium">Swatch</th>
                    <th className="px-4 py-2.5 font-medium">Value</th>
                  </tr>
                </thead>
                <tbody>
                  {TOKENS.map((t) => (
                    <tr key={t.name} className="border-b align-top last:border-b-0">
                      <td className="px-4 py-3">
                        <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[13px]">
                          {t.name}
                        </code>
                        <p className="mt-1 text-[13px] text-muted-foreground">
                          {t.note}
                        </p>
                      </td>
                      <td className="px-4 py-3">
                        <span
                          aria-hidden="true"
                          className="block size-8 rounded-lg border"
                          style={{ background: t.value }}
                        />
                      </td>
                      <td className="px-4 py-3">
                        <code className="font-mono text-[13px] text-muted-foreground">
                          {t.value}
                        </code>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </DocSection>

          <DocSection id="dark-mode" title="Dark mode">
            <p>
              The shipped palette is dark, defined once in{" "}
              <code className="rounded bg-muted px-1 py-0.5 text-xs">:root</code>.
              There is no bundled light theme. A light mode is simply the same
              variables re-declared with light values:
            </p>
            <CodeBlock code={LIGHT_SNIPPET} lang="css" />
          </DocSection>

          <DocSection id="overrides" title="Per-app overrides">
            <p>
              Scope variables under a{" "}
              <code className="rounded bg-muted px-1 py-0.5 text-xs">data-theme</code>{" "}
              attribute to theme one app (or one subtree) without touching the
              rest:
            </p>
            <CodeBlock code={OVERRIDE_SNIPPET} lang="css" />
          </DocSection>

          <DocSection id="radius" title="Radius">
            <p>
              One base radius drives the whole scale. Change{" "}
              <code className="rounded bg-muted px-1 py-0.5 text-xs">--radius</code>{" "}
              and every rounded utility follows:
            </p>
            <CodeBlock code={RADIUS_SNIPPET} lang="css" />
          </DocSection>

          <DocSection id="fonts" title="Fonts">
            <p>
              Three font tokens cover every surface:{" "}
              <code className="rounded bg-muted px-1 py-0.5 text-xs">--font-sans</code>{" "}
              for UI text,{" "}
              <code className="rounded bg-muted px-1 py-0.5 text-xs">--font-serif</code>{" "}
              for display headings, and{" "}
              <code className="rounded bg-muted px-1 py-0.5 text-xs">--font-mono</code>{" "}
              for code. They follow the{" "}
              <code className="rounded bg-muted px-1 py-0.5 text-xs">next/font</code>{" "}
              variable convention, so any variable font can be slotted in:
            </p>
            <CodeBlock code={FONTS_SNIPPET} lang="tsx" />
          </DocSection>

          <DocSection id="surface" title="Surface">
            <p>
              Floating UI shares one background so popups read as a single
              layer:{" "}
              <code className="rounded bg-muted px-1 py-0.5 text-xs">--surface</code>{" "}
              (<code className="rounded bg-muted px-1 py-0.5 text-xs">#1b1b1c</code>),
              exposed as{" "}
              <code className="rounded bg-muted px-1 py-0.5 text-xs">bg-surface</code>,{" "}
              <code className="rounded bg-muted px-1 py-0.5 text-xs">text-surface</code>,
              and{" "}
              <code className="rounded bg-muted px-1 py-0.5 text-xs">border-surface</code>.
              Menus, tooltips, popovers, sheets, selects, and the dialog
              footer bands use it; dialog bodies stay on{" "}
              <code className="rounded bg-muted px-1 py-0.5 text-xs">bg-card</code>.
              Like every token, re-declare it per theme or per app to retint
              every floating surface at once.
            </p>
          </DocSection>

          <DocSection id="next-steps" title="Next steps">
            <p>
              Ready to apply this to a project? The{" "}
              <Link className="text-primary underline" href="/docs">
                installation guide
              </Link>{" "}
              covers importing both stylesheets and the one extra line Tailwind
              needs.
            </p>
          </DocSection>

          <Separator />
        </main>

        {/* Right table of contents */}
        <PageToc items={TOC} />
      </div>
    </div>
  );
}
