"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../utils/cn";

export const badgeVariants = cva(
  "h-5.5 gap-1 rounded-md border border-transparent px-1.5 py-1 text-xs font-medium transition-all has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&>svg]:size-3! inline-flex items-center justify-center w-fit whitespace-nowrap shrink-0 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive overflow-hidden group/badge",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground [a]:hover:bg-primary/80",
        secondary:
          "bg-secondary text-secondary-foreground [a]:hover:bg-secondary/80",
        destructive:
          "bg-destructive/10 [a]:hover:bg-destructive/20 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 text-destructive dark:bg-destructive/20",
        outline:
          "border-border text-foreground [a]:hover:bg-muted [a]:hover:text-muted-foreground",
        ghost: "hover:bg-muted hover:text-muted-foreground dark:hover:bg-muted/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export type BadgeVariants = VariantProps<typeof badgeVariants>;

export type BadgeProps = Omit<React.ComponentProps<"span">, "children"> &
  VariantProps<typeof badgeVariants> & {
    children?: React.ReactNode;
    /**
     * Replace the rendered `<span>` with a custom element (e.g. a link).
     * Badge styling and data attributes are merged onto it.
     * Replaces the old Radix `asChild` prop.
     */
    render?: React.ReactElement;
  };

function Badge({
  className,
  variant = "default",
  render,
  ...props
}: BadgeProps) {
  const mergedClassName = cn(badgeVariants({ variant }), className);

  if (render && React.isValidElement(render)) {
    const {
      className: renderClassName,
      ...renderProps
    } = render.props as Record<string, unknown> & { className?: string };
    return React.cloneElement(render, {
      "data-slot": "badge",
      "data-variant": variant ?? undefined,
      ...props,
      ...renderProps,
      className: cn(mergedClassName, renderClassName),
    } as React.Attributes & Record<string, unknown>);
  }

  return (
    <span
      data-slot="badge"
      data-variant={variant ?? undefined}
      className={mergedClassName}
      {...props}
    />
  );
}

export { Badge };
