"use client";

import React, { useEffect, useRef, useState } from "react";
import { DocsHeader } from "../../components/docs-header";
import { motion, AnimatePresence, useInView } from "motion/react";
import { AltArrowDownLinearIcon } from "@solar-icons/react";

function FadeIn({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 32 }} animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }} transition={{ duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] }} className={className}>
      {children}
    </motion.div>
  );
}

type ChangeCategory = "new" | "improved" | "fixed";

interface ChangelogEntry {
  version: string;
  date: string;
  title: string;
  body: string[];
  groups: { category: ChangeCategory; items: string[] }[];
}

const groupLabels: Record<ChangeCategory, string> = {
  new: "New features",
  improved: "Improvements",
  fixed: "Fixes",
};

const changelogs: ChangelogEntry[] = [
  {
    version: "0.1.4",
    date: "October 26, 2026",
    title: "Focus ring parity and component polish",
    body: [
      "Every interactive primitive now shares one focus treatment: a 2px solid primary halo with a 2px gap, applied via focus-visible:border-primary/50 + outline-2 outline-offset-2 outline-primary/50. The transition is scoped to color/background/border/outline/box-shadow/filter so the offset never animates. Tailwind v4's outline-none (which suppresses later halos) was removed from Button, Checkbox, InputGroup, Autocomplete, Switch, Select trigger, Tabs tab, and Toggle.",
      "The Command palette is now a floating modal menu (CommandDialog) with a centered, blurred backdrop, a Kbd hints footer, and hover backgrounds on items. Cards gained w-full on the default and border variants so standalone cards fill their container. Dialog and AlertDialog footers render their band by default (footer prop removed). Base UI bumped to 1.9.0. Docs site gained a mobile hamburger nav (Sheet), hover tooltips on header buttons, SEO metadata, sitemap/robots, and llms.txt. Skeleton shimmer is now visible in light mode. The CLI scaffolds a globals.css with design tokens so bg-surface works out of the box.",
    ],
    groups: [
      {
        category: "new",
        items: [
          "CommandDialog primitive: centered modal palette with trigger or controlled open/onOpenChange",
          "Footer band renders by default on Dialog and AlertDialog",
        ],
      },
      {
        category: "improved",
        items: [
          "Unified focus ring across Button, Checkbox, Switch, Select trigger, Tabs tab, Toggle",
          "CommandItem now highlights on hover (hover:bg-accent) in addition to keyboard selection",
          "Card default and border variants gained w-full",
          "Button sizing: call-site classes no longer override the size dimension",
          "Base UI bumped to 1.9.0",
          "Docs site: mobile hamburger nav (Sheet), header tooltips, SEO metadata, sitemap/robots, llms.txt",
          "Skeleton shimmer visible in light mode",
        ],
      },
      {
        category: "fixed",
        items: [
          "Fixed Command items having pointer-events: none (data-disabled=\"false\" matched the presence-based selector)",
          "Fixed docs avatar demos using the GitHub avatar URL (now /placeholder-image.png)",
          "Fixed Input/Autocomplete being overwritten; restored user-tuned values",
        ],
      },
    ],
  },
  {
    version: "0.1.3",
    date: "October 2026",
    title: "Initial release",
    body: [
      "First published version of @noarka/ui: primitives, variants, and the docs site.",
    ],
    groups: [
      {
        category: "new",
        items: [
          "Primitive components: Button, Card, Dialog, AlertDialog, Command, Select, Tabs, Switch, Toggle, Checkbox, Input, Autocomplete, and more",
          "Variant system via class-variance-authority",
          "Docs site with live previews and API reference",
        ],
      },
    ],
  },
];

function ChangeGroup({ label, items, defaultOpen = false }: { label: string; items: string[]; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-dashed">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 py-3.5 text-left text-sm"
      >
        <span className="font-medium">
          {label} <span className="font-normal text-muted-foreground">({items.length})</span>
        </span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0 text-muted-foreground"
        >
          <AltArrowDownLinearIcon className="h-4 w-4" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <ul className="pb-4 pl-5 space-y-1.5 list-disc text-sm text-muted-foreground marker:text-muted-foreground/50">
              {items.map((item, i) => (
                <li key={i} className="leading-relaxed">{item}</li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ChangelogPage() {
  return (
    <>
      <DocsHeader />
      <main className="relative max-w-6xl mx-auto [overflow-x:clip]">
        <section className="relative pt-32 pb-20">
          <div className="mx-auto max-w-[88rem] px-6">
            <div className="max-w-3xl">
              <h1 className="text-4xl mt-2 font-serif font-medium text-balance">
                Changelog<br />
              </h1>
              <p className="text-muted-foreground mt-2 max-w-xl text-base leading-relaxed">
                Noarka UI is an actively maintained and evolving library, lots of new features and improvements are added regularly.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-[88rem] px-6">
            <div className="space-y-20">
              {changelogs.map((entry, index) => {
                const isLatest = index === 0;
                return (
                  <FadeIn key={entry.version} delay={Math.min(index * 0.05, 0.2)}>
                    <div className="relative">
                      {index < changelogs.length - 1 && (
                        <span className="absolute left-[7px] top-2 bottom-[-105px] w-px bg-border/60 hidden md:block" />
                      )}
                      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                        <div className="lg:col-span-2">
                          <div className={`flex items-center gap-3 ${index < changelogs.length - 1 ? 'lg:sticky lg:top-24' : ''}`}>
                            <span className={`hidden size-[15px] shrink-0 items-center justify-center rounded-full md:flex ${isLatest ? 'bg-primary/20' : 'bg-muted-foreground/15'}`}>
                              <span className={`relative inline-flex size-[7px] rounded-full ${isLatest ? 'bg-primary' : 'bg-muted-foreground/50'}`} />
                            </span>
                            <p className="text-muted-foreground">{entry.date}</p>
                          </div>
                        </div>
                        <div className="lg:col-span-3">
                          <p className="font-mono text-xs text-muted-foreground">Version {entry.version}</p>
                          <h2 className="text-3xl font-serif font-medium mt-2 text-balance">{entry.title}</h2>
                          <div className="mt-4 space-y-4">
                            {entry.body.map((paragraph, i) => (
                              <p key={i} className="text-sm text-muted-foreground leading-relaxed">{paragraph}</p>
                            ))}
                          </div>
                          <div className="mt-6 border-t border-dashed border-border/40">
                            {entry.groups.map((group, gi) => (
                              <ChangeGroup
                                key={group.category}
                                label={groupLabels[group.category]}
                                items={group.items}
                                defaultOpen={isLatest && gi === 0}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
