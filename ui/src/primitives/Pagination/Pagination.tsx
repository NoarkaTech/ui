"use client";

import * as React from "react";
import type { VariantProps } from "class-variance-authority";

import { cn } from "../../utils/cn";
import { buttonVariants } from "../Button/Button";
import { AltArrowLeftIcon, AltArrowRightIcon } from "@solar-icons/react/linear";

function Pagination({ className, ...props }: React.ComponentProps<"nav">) {
  return (
    <nav
      data-slot="pagination"
      role="navigation"
      aria-label="pagination"
      className={cn("mx-auto flex w-full justify-center", className)}
      {...props}
    />
  );
}

function PaginationContent({ className, ...props }: React.ComponentProps<"ul">) {
  return (
    <ul
      data-slot="pagination-content"
      className={cn("flex flex-row items-center gap-1", className)}
      {...props}
    />
  );
}

function PaginationItem({ className, ...props }: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="pagination-item"
      className={cn(className)}
      {...props}
    />
  );
}

export type PaginationLinkProps = Omit<
  React.ComponentProps<"a">,
  "children"
> &
  VariantProps<typeof buttonVariants> & {
    children?: React.ReactNode;
    isActive?: boolean;
  };

function PaginationLink({
  className,
  isActive,
  variant = "ghost",
  size = "icon",
  ...props
}: PaginationLinkProps) {
  return (
    <a
      data-slot="pagination-link"
      data-active={isActive || undefined}
      aria-current={isActive ? "page" : undefined}
      className={cn(
        buttonVariants({ variant: isActive ? "outline" : variant, size, className })
      )}
      {...props}
    />
  );
}

function PaginationPrevious({
  className,
  children = "Previous",
  ...props
}: React.ComponentProps<"a">) {
  return (
    <PaginationLink
      aria-label="Go to previous page"
      size="default"
      className={cn("gap-1 px-2.5", className)}
      {...props}
    >
      <AltArrowLeftIcon />
      <span className="hidden sm:block">{children}</span>
    </PaginationLink>
  );
}

function PaginationNext({
  className,
  children = "Next",
  ...props
}: React.ComponentProps<"a">) {
  return (
    <PaginationLink
      aria-label="Go to next page"
      size="default"
      className={cn("gap-1 px-2.5", className)}
      {...props}
    >
      <span className="hidden sm:block">{children}</span>
      <AltArrowRightIcon />
    </PaginationLink>
  );
}

function PaginationEllipsis({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="pagination-ellipsis"
      aria-hidden="true"
      className={cn("flex size-9 items-center justify-center", className)}
      {...props}
    >
      &#8230;
      <span className="sr-only">More pages</span>
    </span>
  );
}

export {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
};
