"use client";

import * as React from "react";
import { Combobox as ComboboxPrimitive } from "@base-ui/react/combobox";

import { cn } from "../../utils/cn";

export type AutocompleteFilter = (
  item: { value: unknown; label: React.ReactNode },
  query: string
) => boolean;

function defaultMatch(
  item: { value: unknown; label: React.ReactNode },
  query: string
) {
  const q = query.trim().toLowerCase();
  if (!q) return true;
  const label =
    typeof item.label === "string" || typeof item.label === "number"
      ? String(item.label)
      : "";
  const valueText =
    typeof item.value === "string" || typeof item.value === "number"
      ? String(item.value)
      : "";
  const haystack = (label || valueText).toLowerCase();
  return haystack.includes(q);
}

const AutocompleteQueryContext = React.createContext("");
const AutocompleteFilterContext =
  React.createContext<AutocompleteFilter | null>(defaultMatch);

type DerivedAutocompleteItem = { value: unknown; label: React.ReactNode };

function textLabel(children: React.ReactNode): string | undefined {
  let text = "";
  let plain = true;
  React.Children.forEach(children, (child) => {
    if (typeof child === "string" || typeof child === "number") {
      text += String(child);
    } else if (child !== null && child !== undefined && typeof child !== "boolean") {
      plain = false;
    }
  });
  return plain && text !== "" ? text : undefined;
}

function collectAutocompleteItems(children: React.ReactNode): DerivedAutocompleteItem[] {
  const items: DerivedAutocompleteItem[] = [];
  const seen = new Set<unknown>();
  const walk = (nodes: React.ReactNode) => {
    React.Children.forEach(nodes, (child) => {
      if (!React.isValidElement(child)) return;
      const childProps = child.props as {
        value?: unknown;
        children?: React.ReactNode;
      };
      const label = textLabel(childProps.children);
      if (childProps.value !== undefined && label !== undefined) {
        if (!seen.has(childProps.value)) {
          seen.add(childProps.value);
          items.push({ value: childProps.value, label });
        }
        return;
      }
      walk(childProps.children);
    });
  };
  walk(children);
  return items;
}

export type AutocompleteProps = Omit<
  ComboboxPrimitive.Root.Props<string, false>,
  "items" | "filter" | "itemToStringLabel" | "onInputValueChange" | "children"
> & {
  items?: ComboboxPrimitive.Root.Props<string, false>["items"];
  filter?: ComboboxPrimitive.Root.Props<string, false>["filter"];
  itemToStringLabel?: (itemValue: unknown) => string;
  onInputValueChange?: ComboboxPrimitive.Root.Props<string, false>["onInputValueChange"];
  children?: React.ReactNode;
  /**
   * Show the popup on click regardless of the query.
   * @default false
   */
  openOnInputClick?: boolean;
};

function Autocomplete({
  items,
  itemToStringLabel,
  filter,
  onInputValueChange,
  openOnInputClick = false,
  children,
  ...props
}: AutocompleteProps) {
  const [query, setQuery] = React.useState("");
  const collected = React.useMemo(() => collectAutocompleteItems(children), [children]);
  const derivedItems = React.useMemo(() => {
    if (items != null) return items;
    return collected.length > 0 ? collected : undefined;
  }, [items, collected]);
  const labelMap = React.useMemo(() => {
    const map = new Map<unknown, string>();
    for (const item of collected) {
      if (typeof item.label === "string" || typeof item.label === "number") {
        map.set(item.value, String(item.label));
      }
    }
    return map;
  }, [collected]);
  const resolvedItemToStringLabel = React.useMemo(() => {
    if (itemToStringLabel) return itemToStringLabel;
    return (itemValue: unknown) => {
      if (
        typeof itemValue === "object" &&
        itemValue !== null &&
        "label" in itemValue
      ) {
        const label = (itemValue as { label?: unknown }).label;
        return label == null ? "" : String(label);
      }
      const hit = labelMap.get(itemValue);
      if (hit != null) return hit;
      return String(itemValue ?? "");
    };
  }, [itemToStringLabel, labelMap]);
  const effectiveFilter = React.useMemo<AutocompleteFilter | null>(() => {
    if (filter === null) return null;
    if (filter) {
      return (item, q) => filter(item.value as string, q);
    }
    return defaultMatch;
  }, [filter]);
  const handleInputValueChange: NonNullable<
    ComboboxPrimitive.Root.Props<string, false>["onInputValueChange"]
  > = (value, eventDetails) => {
    setQuery(value);
    onInputValueChange?.(value, eventDetails);
  };
  // Mirror Base's own filtering for static children so non-matches unmount,
  // exactly like the data-driven Collection pattern does.
  const baseFilter = React.useMemo(() => {
    if (effectiveFilter === null) return null;
    const fn = effectiveFilter;
    return (itemValue: unknown, q: string) =>
      fn(
        typeof itemValue === "object" && itemValue !== null && "label" in itemValue
          ? (itemValue as { value: unknown; label: React.ReactNode })
          : { value: itemValue, label: itemValue as React.ReactNode },
        q
      );
  }, [effectiveFilter]);
  return (
    <AutocompleteQueryContext.Provider value={query}>
      <AutocompleteFilterContext.Provider value={effectiveFilter}>
        <ComboboxPrimitive.Root
          data-slot="autocomplete"
          items={derivedItems}
          itemToStringLabel={resolvedItemToStringLabel}
          filter={baseFilter}
          openOnInputClick={openOnInputClick}
          onInputValueChange={handleInputValueChange}
          {...props}
        >
          {children}
        </ComboboxPrimitive.Root>
      </AutocompleteFilterContext.Provider>
    </AutocompleteQueryContext.Provider>
  );
}

function AutocompleteInput({
  className,
  ...props
}: ComboboxPrimitive.Input.Props) {
  return (
    <ComboboxPrimitive.Input
      data-slot="autocomplete-input"
      className={cn(
        "h-9 w-full min-w-0 rounded-lg bg-input bg-clip-padding px-[calc(--spacing(3)-1px)] text-base leading-9 outline-none placeholder:text-muted-foreground/72 focus-visible:border-ring sm:h-8 sm:text-sm sm:leading-8",
        className
      )}
      {...props}
    />
  );
}

export type AutocompleteContentProps = Omit<
  ComboboxPrimitive.Popup.Props,
  "className" | "render"
> & {
  className?: string;
  render?: ComboboxPrimitive.Popup.Props["render"];
  side?: ComboboxPrimitive.Positioner.Props["side"];
  sideOffset?: ComboboxPrimitive.Positioner.Props["sideOffset"];
  align?: ComboboxPrimitive.Positioner.Props["align"];
  alignOffset?: ComboboxPrimitive.Positioner.Props["alignOffset"];
};

function AutocompleteContent({
  className,
  side = "bottom",
  sideOffset = 4,
  align = "center",
  alignOffset = 0,
  children,
  render,
  ...props
}: AutocompleteContentProps) {
  return (
    <ComboboxPrimitive.Portal>
      <ComboboxPrimitive.Positioner
        side={side}
        sideOffset={sideOffset}
        align={align}
        alignOffset={alignOffset}
        className="isolate z-50"
      >
        <ComboboxPrimitive.Popup
          data-slot="autocomplete-content"
          className={cn(
            "relative z-50 max-h-(--available-height) w-(--anchor-width) origin-(--transform-origin) overflow-x-hidden overflow-y-auto rounded-xl border bg-surface p-1 text-popover-foreground duration-200 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
            className
          )}
          render={render}
          {...props}
        >
          <ComboboxPrimitive.List>{children}</ComboboxPrimitive.List>
        </ComboboxPrimitive.Popup>
      </ComboboxPrimitive.Positioner>
    </ComboboxPrimitive.Portal>
  );
}

export type AutocompleteItemProps = Omit<
  ComboboxPrimitive.Item.Props,
  "className" | "render"
> & {
  className?: string;
  render?: ComboboxPrimitive.Item.Props["render"];
};

function AutocompleteItem({
  className,
  children,
  render,
  ...props
}: AutocompleteItemProps) {
  const query = React.useContext(AutocompleteQueryContext);
  const filter = React.useContext(AutocompleteFilterContext);
  const value = (props as { value?: unknown }).value;
  if (filter) {
    const text = textLabel(children);
    const label: React.ReactNode =
      text ?? (value as React.ReactNode);
    const visible = filter({ value, label }, query);
    if (!visible) return null;
  }
  return (
    <ComboboxPrimitive.Item
      data-slot="autocomplete-item"
      className={cn(
        "relative flex w-full cursor-default items-center gap-2 rounded-lg px-2 py-1.5 text-[13px] text-foreground/80 min-h-8 outline-hidden select-none hover:bg-accent hover:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      render={render}
      {...props}
    >
      {children}
    </ComboboxPrimitive.Item>
  );
}

function AutocompleteEmpty({
  className,
  children = "No results found.",
  ...props
}: ComboboxPrimitive.Empty.Props) {
  const filteredItems = ComboboxPrimitive.useFilteredItems();
  // Base always renders the Empty div and only nulls its children, which
  // would leave its padding behind as an empty gap. Unmount instead.
  if (filteredItems.length !== 0) return null;
  return (
    <ComboboxPrimitive.Empty
      data-slot="autocomplete-empty"
      className={cn(
        "px-2 py-6 text-center text-sm text-muted-foreground",
        className
      )}
      {...props}
    >
      {children}
    </ComboboxPrimitive.Empty>
  );
}

export {
  Autocomplete,
  AutocompleteInput,
  AutocompleteContent,
  AutocompleteItem,
  AutocompleteEmpty,
};
