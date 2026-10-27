"use client";

import { MoonLinearIcon, SunLinearIcon } from "@solar-icons/react";
import { Button, cn } from "@noarka/ui";
import * as React from "react";
import { useTheme } from "./theme-provider";

export function ThemeToggle({
  className,
  ...props
}: { className?: string } & React.ComponentProps<"button">) {
  const { theme, setTheme } = useTheme();
  const resolved = theme ?? "dark";
  return (
    <Button
    size="icon"
    variant="ghost"
      {...props}
      onClick={() => setTheme(resolved === "dark" ? "light" : "dark")}
      aria-label={`Switch to ${resolved === "dark" ? "light" : "dark"} mode`}
      className={cn(
        "flex items-center justify-center rounded-lg border border-transparent text-muted-foreground",
        className
      )}
    >
      {resolved === "dark" ? (
        <MoonLinearIcon size={16} />
      ) : (
        <SunLinearIcon size={16} />
      )}
    </Button>
  );
}
