"use client";
import Link from "next/link";
import { DocsHeader } from "../components/docs-header";

import { AltArrowRightLinearIcon, AddLinearIcon } from "@solar-icons/react";
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
            The modern library for modern developers.
          </h1>
          <p className="mt-3 max-w-xl text-md text-muted-foreground">
            Create modern user interfaces with Noarka UI, a shared component library built on Base UI primitives. Designed for every Noarka application.
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
                action: "Go to documentation",
              },
              {
                title: "Components",
                subtitle: "Buttons, inputs, dialogs, and more",
                href: "/components",
                action: "Go to components",
              },
            ].map((row, i) => (
              <div key={row.title}>
                {i > 0 && <Separator className="mb-7" />}
                <div className="flex items-center justify-between gap-4">
                  <div className="min-w-0">
                    <p className="text-sm font-medium">{row.title}</p>
                    <p className="truncate text-sm text-muted-foreground">{row.subtitle}</p>
                  </div>
                  <Button variant="outline" size="sm" className="shrink-0" render={<Link href={row.href}>{row.action}</Link>} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mx-auto w-full max-w-6xl pt-30 px-6 pb-20">
          <div className="flex items-center justify-between gap-4">
            <p className="max-w-xl font-medium text-foreground">
              Contact.{" "}
              <span className="text-muted-foreground">
                The only way to reach Noarka is through the Noarka account
                center. Open a support ticket and the team will get back to you.
              </span>
            </p>
            <Button variant="outline" size="sm" className="shrink-0" render={<a href="https://noarka.com/account/support" target="_blank" rel="noopener noreferrer">Contact support</a>} />
          </div>
        </section>
      </div>
    </TooltipProvider>
  );
}
