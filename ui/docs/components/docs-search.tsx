"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import {
  Autocomplete,
  AutocompleteContent,
  AutocompleteEmpty,
  AutocompleteInput,
  AutocompleteItem,
  Kbd,
} from "@noarka/ui";
import { MagnifierLinearIcon } from "@solar-icons/react";
import { SEARCH_ITEMS } from "./docs-nav";

/** Header search. Built on our own Autocomplete so the docs dogfood the
 *  library: typing filters, arrows move, Enter navigates. */
export function DocsSearch({ className }: { className?: string }) {
  const router = useRouter();

  // Items are static children with `value` = href, so the filter receives the
  // href and can match against more than the visible label.
  const filter = React.useCallback((value: string, query: string) => {
    const q = query.trim().toLowerCase();
    if (!q) return true;
    const hit = SEARCH_ITEMS.find((item) => item.href === value);
    const haystack = hit
      ? `${hit.label} ${hit.group} ${hit.href}`.toLowerCase()
      : String(value).toLowerCase();
    return haystack.includes(q);
  }, []);

  return (
    <Autocomplete
      items={SEARCH_ITEMS.map((item) => item.href)}
      filter={filter}
      onValueChange={(value) => {
        if (typeof value === "string" && value) router.push(value);
      }}
    >
      <div className={className}>
        <div className="relative">
          <MagnifierLinearIcon
            size={15}
            className="pointer-events-none absolute top-1/2 left-2.5 z-10 -translate-y-1/2 text-muted-foreground opacity-100"
          />
          <AutocompleteInput
            aria-label="Search the documentation"
            placeholder="Search"
            className="w-full pr-12 pl-8 text-sm"
          />
        </div>
      </div>

      <AutocompleteContent align="start" sideOffset={6} className="w-[--anchor-width]">
        {SEARCH_ITEMS.map((item) => (
          <AutocompleteItem key={item.href} value={item.href}>
            <span className="min-w-0 flex-1 truncate">{item.label}</span>
            <span className="shrink-0 text-xs text-muted-foreground">
              {item.group}
            </span>
          </AutocompleteItem>
        ))}
        <AutocompleteEmpty>No results found.</AutocompleteEmpty>
      </AutocompleteContent>
    </Autocomplete>
  );
}