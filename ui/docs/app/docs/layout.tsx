import type { Metadata } from "next";
import type * as React from "react";

export const metadata: Metadata = { title: "Installation" };

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
