"use client";

import * as React from "react";
import type { VariantProps } from "class-variance-authority";

import { cn } from "../../utils/cn";
import { badgeVariants } from "./Badge.variants";

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

export { Badge, badgeVariants };
