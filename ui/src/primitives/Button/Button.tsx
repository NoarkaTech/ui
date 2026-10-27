"use client";

import * as React from "react";
import { Button as BaseButton } from "@base-ui/react/button";
import type { VariantProps } from "class-variance-authority";

import { cn } from "../../utils/cn";
import { buttonVariants } from "./Button.variants";

export type ButtonProps = Omit<
  BaseButton.Props,
  "className" | "render"
> &
  VariantProps<typeof buttonVariants> & {
    className?: string;
    render?: BaseButton.Props["render"];
  };

/**
 * Base UI assumes the rendered element is a native `<button>` unless told
 * otherwise. When `render` swaps in a different element (e.g. an anchor or
 * Next.js Link), native button semantics don't apply, so infer that
 * automatically so consumers don't hit the `nativeButton` warning.
 * An explicit `nativeButton` prop always wins.
 */
function inferNativeButton(
  render: ButtonProps["render"]
): boolean | undefined {
  if (render && typeof render !== "function" && React.isValidElement(render)) {
    return render.type === "button";
  }
  return undefined;
}

/**
 * The `size` dimension owns the button's dimensions. Height and padding
 * utilities passed by a call site are stripped so every variant renders at the
 * box its size declares, keeping all variants visually identical.
 */
const DIMENSION_OVERRIDE_PATTERN = /^(h|py|px|size)-/;

function isDimensionOverride(cls: string): boolean {
  // Arbitrary variants (e.g. `[&_svg]:size-4`) target children, not the root.
  if (cls.startsWith("[")) return false;
  const utility = (cls.split(":").pop() ?? cls).replace(/[!?]/g, "");
  return DIMENSION_OVERRIDE_PATTERN.test(utility);
}

function withoutDimensionOverrides(className?: string): string | undefined {
  if (!className) return className;
  return (
    className
      .split(/\s+/)
      .filter((cls) => cls !== "" && !isDimensionOverride(cls))
      .join(" ") || undefined
  );
}

function Button({
  className,
  variant = "default",
  size = "default",
  render,
  nativeButton,
  ...props
}: ButtonProps) {
  return (
    <BaseButton
      data-slot="button"
      data-variant={variant ?? undefined}
      data-size={size ?? undefined}
      className={cn(
        buttonVariants({ variant, size }),
        withoutDimensionOverrides(className)
      )}
      render={render}
      nativeButton={nativeButton ?? inferNativeButton(render) ?? true}
      {...props}
    />
  );
}

export { Button, buttonVariants };
