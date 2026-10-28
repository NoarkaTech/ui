"use client";

import * as React from "react";
import { Button as BaseButton } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../utils/cn";

export const buttonVariants = cva(
  "cursor-pointer [&>*]:opacity-80 rounded-lg border-none bg-clip-padding text-sm font-medium aria-invalid:ring-3 [&_svg:not([class*='size-'])]:size-4 inline-flex items-center justify-center whitespace-nowrap transition-[color,background-color,border-color,outline-color,box-shadow,filter] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none shrink-0 [&_svg]:shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary/50 group/button select-none",
  {
    variants: {
      variant: {
        default:
          "[&>*]:opacity-80 bg-primary text-primary-foreground dark:bg-primary/80 transition-[color,background-color,border-color,outline-color,box-shadow,filter] duration-200 hover:bg-primary/90 dark:hover:bg-primary/70 inset-shadow-sm inset-shadow-white/15",
        outline:
          "border-border text-muted-foreground border border-solid hover:bg-muted aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:brightness-110 transition-[color,background-color,border-color,outline-color,box-shadow,filter] duration-200",
        secondary:
          "[&>*]:opacity-80 bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost:
          "[&>*]:opacity-80 hover:bg-muted hover:text-foreground dark:hover:bg-muted/50 aria-expanded:bg-muted aria-expanded:text-foreground",
        destructive:
          "[&>*]:opacity-80 bg-destructive/10 border-none hover:bg-destructive/20 focus-visible:outline-destructive/20 dark:focus-visible:outline-destructive/40 dark:bg-destructive/20 text-destructive dark:hover:bg-destructive/30",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default:
          "h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        xs: "h-6 gap-1 px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-7 gap-1 px-2.5 text-[13px] leading-[18px] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3",
        icon: "size-8",
        "icon-xs": "size-6 rounded-full [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-7 rounded-full",
        "icon-lg": "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export type ButtonVariants = VariantProps<typeof buttonVariants>;

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

export { Button };
