import { Separator } from "@noarka/ui";
import Link from "next/link";
import { DocsHeader } from "../../components/docs-header";
import { DocsSidebar } from "../../components/docs-sidebar";
import { COMPONENTS } from "../../components/component-registry";

export default function ComponentsPage() {
  // The registry is in creation order; the index reads alphabetically.
  const entries = [...COMPONENTS].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="min-h-svh max-w-6xl mx-auto">
      <DocsHeader />

      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 pt-14 lg:grid-cols-[240px_minmax(0,1fr)]">
        <DocsSidebar />

        <main className="min-w-0 space-y-8 pb-14">
          <div>
            <h1 className="mt-1 font-serif text-4xl font-medium">Components</h1>
            <p className="mt-2 max-w-xl text-muted-foreground">
              {COMPONENTS.length} primitives to build with. Open one for live
              examples, usage, and the API reference.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {entries.map((c) => (
              <Link
                key={c.slug}
                href={`/components/${c.slug}`}
                className="rounded-2xl border bg-card p-5 transition-colors hover:bg-accent"
              >
                <p className="font-semibold">{c.name}</p>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  {c.description}
                </p>
              </Link>
            ))}
          </div>

          <Separator />
        </main>
      </div>
    </div>
  );
}
