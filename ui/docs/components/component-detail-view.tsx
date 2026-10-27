"use client";

import * as React from "react";
import { Tabs, TabsList, TabsPanel, TabsTab } from "@noarka/ui";
import { PreviewTabs } from "./preview-tabs";
import { InstallTabs, commandForCli, commandForPackages } from "./install-tabs";
import { DocsSidebar } from "./docs-sidebar";
import { CodeBlock } from "./code-block";
import { PageToc, type TocEntry } from "./page-toc";
import type { ComponentDetails, PropReference } from "./component-registry";

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function apiSectionId(component: string) {
  return `api-${slugify(component)}`;
}

export function exampleId(title: string) {
  return `example-${slugify(title)}`;
}

function ApiReferenceTable({ rows }: { rows: PropReference[] }) {
  return (
    <div className="overflow-x-auto rounded-xl border">
      <table className="w-full min-w-[560px] text-sm">
        <thead>
          <tr className="border-b bg-muted/50 text-left">
            <th className="px-4 py-2.5 font-medium">Prop</th>
            <th className="px-4 py-2.5 font-medium">Type</th>
            <th className="px-4 py-2.5 font-medium">Default</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.name} className="border-b align-top last:border-b-0">
              <td className="px-4 py-3">
                <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[13px]">
                  {row.name}
                </code>
                {row.required && (
                  <span className="ml-2 rounded-full border px-1.5 py-0.5 text-[11px] text-muted-foreground">
                    Required
                  </span>
                )}
                <p className="mt-1 text-[13px] text-muted-foreground">{row.description}</p>
              </td>
              <td className="px-4 py-3">
                <code className="font-mono text-[13px] text-muted-foreground">{row.type}</code>
              </td>
              <td className="px-4 py-3">
                <code className="font-mono text-[13px] text-muted-foreground">
                  {row.default ?? "-"}
                </code>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

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
      <div className="mt-4 space-y-4">{children}</div>
    </section>
  );
}

export function ComponentDetailView({
  name,
  description,
  previewCode,
  demo,
  details,
}: {
  name: string;
  description: string;
  previewCode: string;
  demo: React.ReactNode;
  details?: ComponentDetails;
}) {
  const toc: TocEntry[] = React.useMemo(() => {
    if (!details) return [];
    return [
      { label: "Installation", href: "#installation" },
      { label: "Usage", href: "#usage" },
      ...(details.examples.length > 0
        ? [
            {
              label: "Examples",
              href: "#examples",
              children: details.examples.map((example) => ({
                label: example.title,
                href: `#${exampleId(example.title)}`,
              })),
            },
          ]
        : []),
      ...(details.api && details.api.length > 0
        ? [
            {
              label: "API reference",
              href: "#api-reference",
              children: details.api.map((section) => ({
                label: section.component,
                href: `#${apiSectionId(section.component)}`,
              })),
            },
          ]
        : []),
    ];
  }, [details]);

  return (
    <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 pt-14 lg:grid-cols-[240px_minmax(0,1fr)] xl:grid-cols-[240px_minmax(0,1fr)_180px]">
      <DocsSidebar />

      {/* Middle content */}
      <main className="min-w-0 space-y-10 pb-14">
        <div>
          <h1 className="mt-1 font-serif text-4xl font-medium">{name}</h1>
          <p className="mt-2 max-w-xl text-muted-foreground">{description}</p>
        </div>

        <div id="preview" className="scroll-mt-20">
          <PreviewTabs preview={demo} code={previewCode} />
        </div>

        {details && (
          <>
            <DocSection id="installation" title="Installation">
              <Tabs defaultValue="cli">
                <TabsList>
                  <TabsTab value="cli">CLI</TabsTab>
                  <TabsTab value="manual">Manual</TabsTab>
                </TabsList>
                <TabsPanel value="cli" className="mt-2 animate-in fade-in-0 duration-200">
                  <InstallTabs commands={commandForCli(details.installCli)} />
                </TabsPanel>
                <TabsPanel value="manual" className="mt-2 animate-in fade-in-0 duration-200">
                  <div className="space-y-4">
                    <InstallTabs commands={commandForPackages(details.installPackages)} />
                    {details.source && (
                      <CodeBlock code={details.source} lang="tsx" filename={details.sourceFilename ?? "components/ui/accordion.tsx"} collapsible />
                    )}
                    {details.extraFiles?.map((file) => (
                      <CodeBlock key={file.filename} code={file.code} lang="tsx" filename={file.filename} />
                    ))}
                  </div>
                </TabsPanel>
              </Tabs>
            </DocSection>

            <DocSection id="usage" title="Usage">
              <div className="space-y-4">
                {details.usageImport && (
                  <CodeBlock code={details.usageImport} lang="tsx" />
                )}
                <CodeBlock code={details.usage} lang="tsx" />
              </div>
            </DocSection>

            {details.examples.length > 0 && (
              <DocSection id="examples" title="Examples">
                {details.examples.map((example) => (
                  <div
                    key={example.title}
                    id={exampleId(example.title)}
                    className="scroll-mt-20 space-y-2"
                  >
                    <div>
                      <p className="text-sm font-medium">{example.title}</p>
                      <p className="text-sm text-muted-foreground">
                        {example.description}
                      </p>
                    </div>
                    <PreviewTabs preview={example.demo} code={example.code} />
                  </div>
                ))}
              </DocSection>
            )}

            {details.api && details.api.length > 0 && (
              <DocSection id="api-reference" title="API reference">
                <div className="space-y-6">
                  {details.api.map((section) => (
                    <div
                      key={section.component}
                      id={apiSectionId(section.component)}
                      className="scroll-mt-20 space-y-2"
                    >
                      <p className="font-mono text-sm font-medium">{section.component}</p>
                      <ApiReferenceTable rows={section.props} />
                    </div>
                  ))}
                </div>
              </DocSection>
            )}
          </>
        )}
      </main>

      {/* Right table of contents */}
      <PageToc
        items={toc}
        footer={{ label: "All components", href: "/components" }}
      />
    </div>
  );
}
