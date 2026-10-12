"use client";

import { MoonLinearIcon, SunLinearIcon } from "@solar-icons/react";
import { cn } from "@noarka/ui";
import { useTheme } from "./theme-provider";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const resolved = theme ?? "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(resolved === "dark" ? "light" : "dark")}
      aria-label={`Switch to ${resolved === "dark" ? "light" : "dark"} mode`}
      title={`Switch to ${resolved === "dark" ? "light" : "dark"} mode`}
      className={cn(
        "flex size-8 items-center justify-center rounded-lg border border-transparent text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
        className
      )}
    >
      {resolved === "dark" ? (
        <MoonLinearIcon size={16} />
      ) : (
        <SunLinearIcon size={16} />
      )}
    </button>
  );
}