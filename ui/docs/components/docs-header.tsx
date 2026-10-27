"use client";

import Link from "next/link";
import Image from "next/image";
import * as React from "react";
import { Button, Sheet, SheetContent, SheetHeader, SheetTitle, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@noarka/ui";
import { HamburgerMenuLinearIcon } from "@solar-icons/react";
import { DocsSearch } from "./docs-search";
import { DocsSidebarContent } from "./docs-sidebar";
import { ThemeToggle } from "./theme-toggle";


function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="currentColor"
      className={className}
    >
      <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.2 11.39.6.11.82-.26.82-.58l-.01-2.04c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.08 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .1-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.11-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.62-5.48 5.92.43.37.82 1.1.82 2.22l-.01 3.29c0 .32.21.7.82.58A12.01 12.01 0 0 0 24 12.5C24 5.87 18.63.5 12 .5Z" />
    </svg>
  );
}

export function DocsHeader() {
  const [open, setOpen] = React.useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <div className="mx-auto w-full max-w-6xl bg-background py-2 backdrop-blur-sm backdrop-saturate-150">
        <div className="flex h-10 w-full items-center justify-between gap-4 px-5">
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon-sm"
              className="lg:hidden"
              aria-label="Open navigation"
              onClick={() => setOpen(true)}
            >
              <HamburgerMenuLinearIcon className="size-5" />
            </Button>
            {open && (
              <Sheet open onOpenChange={setOpen}>
                <SheetContent side="left" className="w-64">
                  <SheetHeader>
                    <SheetTitle>Navigation</SheetTitle>
                  </SheetHeader>
                  <div className="overflow-y-auto px-4 pb-6">
                    <DocsSidebarContent closeOnNavigate />
                  </div>
                </SheetContent>
              </Sheet>
            )}
            <Link href="/" className="flex w-fit shrink-0 items-center gap-2">
              <Image
                src="/logo.svg"
                alt="Noarka UI logo"
                width={20}
                height={20}
                className="size-5 invert dark:invert-0"
              />
              <span className="font-serif text-lg font-medium">noarka ui</span>
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <DocsSearch className="hidden w-40 sm:block sm:w-52" />

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger
                  render={
                    <a
                      href="https://github.com/NoarkaTech/ui"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Noarka on GitHub"
                      className="flex size-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                    >
                      <GitHubIcon className="size-4" />
                    </a>
                  }
                />
                <TooltipContent side="bottom">GitHub</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger render={<ThemeToggle />} />
                <TooltipContent side="bottom">Toggle theme</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </div>
    </header>
  );
}
