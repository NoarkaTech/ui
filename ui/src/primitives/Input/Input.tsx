"use client";

import { Input as InputPrimitive } from "@base-ui/react/input";
import type * as React from "react";

import { cn } from "../../utils/cn";

export type InputProps = Omit<
  InputPrimitive.Props & React.RefAttributes<HTMLInputElement>,
  "size"
> & {
  size?: "sm" | "default" | "lg" | number;
  unstyled?: boolean;
};

function Input({
  className,
  size = "default",
  unstyled = false,
  ...props
}: InputProps) {
  return (
    <span
      className={
        cn(
          !unstyled &&
            "relative text-foreground/70 inline-flex w-full rounded-lg border bg-clip-padding text-base ring-ring/24 before:absolute transition-shadow cursor-default not-has-disabled:not-has-focus-visible:not-has-aria-invalid:before:shadow-[0_1px_--theme(--color-black/4%)] has-focus-visible:has-aria-invalid:border-destructive/64 has-focus-visible:has-aria-invalid:ring-destructive/16 has-aria-invalid:border-destructive/36 has-focus-visible:border-ring has-disabled:opacity-64 has-[:disabled,:focus-visible,[aria-invalid]]:shadow-none has-focus-visible:ring-[2px] sm:text-sm dark:bg-input dark:hover:brightness-110 transition-all duration-200 dark:has-aria-invalid:ring-destructive/24 dark:not-has-disabled:not-has-focus-visible:not-has-aria-invalid:before:shadow-[0_-1px_--theme(--color-white/8%)]",
          className
        ) || undefined
      }
      data-size={size}
      data-slot="input-control"
    >
      <InputPrimitive
        className={cn(
          "h-9 w-full min-w-0 rounded-[inherit] px-[calc(--spacing(3)-1px)] leading-9 outline-none placeholder:text-muted-foreground/72 sm:h-8 sm:leading-8",
          size === "sm" &&
            "h-8 px-[calc(--spacing(2.5)-1px)] leading-8 sm:h-7 sm:leading-7",
          size === "lg" && "h-10 leading-10 sm:h-9 sm:leading-9",
          props.type === "search" &&
            "[&::-webkit-search-cancel-button]:appearance-none [&::-webkit-search-decoration]:appearance-none [&::-webkit-search-results-button]:appearance-none [&::-webkit-search-results-decoration]:appearance-none",
          props.type === "file" &&
            "text-muted-foreground file:me-3 file:bg-transparent file:font-medium file:text-foreground file:text-sm"
        )}
        data-slot="input"
        size={typeof size === "number" ? size : undefined}
        {...props}
      />
    </span>
  );
}

export { Input };
