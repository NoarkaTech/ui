import { notFound } from "next/navigation";
import { TooltipProvider } from "@noarka/ui";
import Link from "next/link";
import Image from "next/image";
import { DocsHeader } from "../../../components/docs-header";
import { ComponentDetailView } from "../../../components/component-detail-view";
import { COMPONENTS } from "../../../components/component-registry";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = COMPONENTS.find((c) => c.slug === slug);
  return {
    title: entry ? entry.name : "Component",
    description: entry?.description,
  };
}

export function generateStaticParams() {
  return COMPONENTS.map((c) => ({ slug: c.slug }));
}

export default async function ComponentDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = COMPONENTS.find((c) => c.slug === slug);
  if (!entry) notFound();

  const importSnippet = `import { ${entry.imports.join(", ")} } from "@noarka/ui";`;
  const previewCode = entry.code ?? importSnippet;

  return (
    <TooltipProvider>
      <div className="min-h-svh max-w-6xl mx-auto">
        <DocsHeader />

        <ComponentDetailView
          name={entry.name}
          description={entry.description}
          previewCode={previewCode}
          demo={entry.demo}
          details={entry.details}
        />
      </div>
    </TooltipProvider>
  );
}
