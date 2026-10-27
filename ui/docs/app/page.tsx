"use client";
import Link from "next/link";
import { DocsHeader } from "../components/docs-header";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  Avatar,
  AvatarFallback,
  AvatarImage,
  Badge,
  Button,
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Checkbox,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Input,
  Label,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Separator,
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  Switch,
  Toggle,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@noarka/ui";
import { ArrowRightIcon } from "@solar-icons/react/dynamic/arrow-right";
function Section({
  id,
  title,
  description,
  children,
}: {
  id: string;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mx-auto w-full max-w-5xl scroll-mt-20 px-6 py-14">
      <p className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
        {id}
      </p>
      <h2 className="mt-1 font-serif text-2xl font-medium">{title}</h2>
      <p className="mt-1 max-w-xl text-sm text-muted-foreground">{description}</p>
      <div className="mt-6 rounded-3xl border bg-card/80 p-6">{children}</div>
    </section>
  );
}

export default function DocsPage() {
  return (
    <TooltipProvider>
      <div className="min-h-svh max-w-6xl mx-auto">
        {/* Header */}
        <DocsHeader />

        {/* Hero */}
        <section id="overview" className="w-full mx-auto max-w-6xl px-6 pt-20 pb-10">
          <h1 className="mt-6 max-w-2xl font-serif text-4xl font-medium text-balance">
            The modern library for modern user interfaces.
          </h1>
          <p className="mt-3 max-w-xl text-base text-muted-foreground">
            Accessible, composable primitives for building product interfaces. Styled with Tailwind CSS v4 and driven by design tokens.
          </p>
        </section>

        {/* Links & Navigation */}
        <section id="links" className="mx-auto w-full max-w-6xl px-6 py-14">
          <p className="mb-8 max-w-xl font-medium text-foreground">
            Links &amp; Navigation.{" "}
            <span className="text-muted-foreground">
              Everything in the library is one click away. Jump straight to
              the guides, the component reference, or ready-made blocks.
            </span>
          </p>
          <div className="space-y-7">
            {[
              {
                title: "Documentation",
                subtitle: "Installation, theming, and usage guides",
                href: "/docs",
                action: "Go to Docs",
              },
              {
                title: "Components",
                subtitle: "Buttons, inputs, dialogs, and more",
                href: "/components",
                action: "Components",
              },
              {
                title: "Changelog",
                subtitle: "Updates and changes to the library",
                href: "/changelog",
                action: "Changelog",
              },
            ].map((row, i) => (
              <div key={row.title}>
                {i > 0 && <Separator className="mb-7" />}
                <div className="flex items-center justify-between gap-4">
                  <div className="min-w-0">
                    <p className="text-sm font-medium">{row.title}</p>
                    <p className="truncate text-sm text-muted-foreground">{row.subtitle}</p>
                  </div>
                  <Button size="sm" className="shrink-0" render={<Link href={row.href}>{row.action} <ArrowRightIcon /></Link>} />
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </TooltipProvider>
  );
}
