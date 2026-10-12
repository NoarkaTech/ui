import { Button, Separator } from "@noarka/ui";
import Link from "next/link";
import Image from "next/image";
import { DocsHeader } from "../../components/docs-header";
import { DocsSidebar } from "../../components/docs-sidebar";
import { PageToc } from "../../components/page-toc";

const TOC = [
  { label: "What is Noarka UI?", href: "#what-is" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Design principles", href: "#principles" },
  { label: "Contributing", href: "#contributing" },
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

export default function IntroductionPage() {
  return (
    <div className="min-h-svh max-w-6xl mx-auto">
      <DocsHeader />

      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 pt-14 lg:grid-cols-[200px_minmax(0,1fr)] xl:grid-cols-[200px_minmax(0,1fr)_180px]">
        <DocsSidebar />

        {/* Middle content */}
        <main className="min-w-0 space-y-10 pb-14">
          <div>
            <h1 className="mt-1 font-serif text-4xl font-medium">Introduction</h1>
            <p className="mt-2 max-w-xl text-muted-foreground">
              Welcome to Noarka UI, an open-source React component library built on Base UI headless primitives and styled with Tailwind CSS v4.
            </p>
          </div>

          <DocSection id="what-is" title="What is Noarka UI?">
            <p>
              Noarka UI is the design system used to build Noarka applications. We have decided to open-source it so that other teams can use the same components and design tokens in their own products.
            </p>
            <p>
              It is built on top of Base UI headless primitives, which means that all the accessibility and keyboard handling is already taken care of. Noarka UI adds a layer of styling and theming on top of these primitives, so that you can use them in your own applications without having to worry about the underlying implementation.
            </p>
          </DocSection>

          <DocSection id="how-it-works" title="How it works">
            <p>
              Install the package, import the design tokens once in your global
              stylesheet, and render primitives directly. There are no
              providers to configure and no build plugins required.
            </p>
            <p>
              When you need a different underlying element, every interactive
              primitive accepts a{" "}
              <code className="rounded bg-muted px-1 py-0.5 text-xs">render</code>{" "}
              prop instead of Radix-style{" "}
              <code className="rounded bg-muted px-1 py-0.5 text-xs">asChild</code>.
              Theming is plain CSS variables, so each app can override the
              palette without forking components.
            </p>
          </DocSection>

          <DocSection id="principles" title="Design principles">
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <span className="text-foreground">Accessible by default.</span> All components are built on top of Base UI headless primitives, which means that all the accessibility and keyboard handling is already taken care of.
              </li>
              <li>
                <span className="text-foreground">Ready to use.</span> The exact components are used in Noarka applications and is ready for production use.
              </li>
              <li>
                <span className="text-foreground">Composition over configuration.</span>{" "}
                Small primitives combine into app-specific patterns instead of
                growing mega-props.
              </li>
            </ul>
          </DocSection>

          <DocSection id="contributing" title="Contributing">
            <p>
              Noarka UI is open-source and we welcome contributions. If you have
              an idea for a new component or a bug fix, please open an issue or a
              pull request on the{" "}
              <a
                className="text-primary underline"
                href="https://github.com/noarkahq/Noarka"
                rel="noreferrer"
                target="_blank"
              >
                Noarka repository
              </a>
              .
            </p>
          </DocSection>

          <DocSection id="next-steps" title="Next steps">
            <ul className="list-disc space-y-2 pl-5">
              <li>
                Follow the{" "}
                <Link className="text-primary underline" href="/docs">
                  installation guide
                </Link>{" "}
                to add the packages and import the design tokens.
              </li>
              <li>
                Re-skin the whole library from the{" "}
                <Link className="text-primary underline" href="/theming">
                  Theming
                </Link>{" "}
                page.
              </li>
              <li>
                Browse every primitive in the{" "}
                <Link className="text-primary underline" href="/components">
                  components
                </Link>{" "}
                reference.
              </li>
            </ul>
          </DocSection>

          <Separator />
        </main>

        {/* Right table of contents */}
        <PageToc items={TOC} />
      </div>
    </div>
  );
}
