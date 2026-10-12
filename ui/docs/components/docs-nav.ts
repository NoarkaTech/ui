export type NavItem = { label: string; href: string };
export type NavGroup = { label: string; items: NavItem[] };

/** Single source of truth for docs navigation, shared by the sidebar and the
 *  header search. Keep alphabetical within each group. */
export const GROUPS: NavGroup[] = [
  {
    label: "Getting Started",
    items: [
      { label: "Introduction", href: "/introduction" },
      { label: "Installation", href: "/docs" },
      { label: "Theming", href: "/theming" },
    ],
  },
  {
    label: "Components",
    items: [
      { label: "Accordion", href: "/components/accordion" },
      { label: "Alert Dialog", href: "/components/alert-dialog" },
      { label: "Autocomplete", href: "/components/autocomplete" },
      { label: "Avatar", href: "/components/avatar" },
      { label: "Badge", href: "/components/badge" },
      { label: "Breadcrumb", href: "/components/breadcrumb" },
      { label: "Button", href: "/components/button" },
      { label: "Card", href: "/components/card" },
      { label: "Checkbox", href: "/components/checkbox" },
      { label: "Collapsible", href: "/components/collapsible" },
      { label: "Command", href: "/components/command" },
      { label: "Context Menu", href: "/components/context-menu" },
      { label: "Dialog", href: "/components/dialog" },
      { label: "Input", href: "/components/input" },
      { label: "Kbd", href: "/components/kbd" },
      { label: "Label", href: "/components/label" },
      { label: "Menu", href: "/components/menu" },
      { label: "Pagination", href: "/components/pagination" },
      { label: "Popover", href: "/components/popover" },
      { label: "Scroll Area", href: "/components/scroll-area" },
      { label: "Select", href: "/components/select" },
      { label: "Separator", href: "/components/separator" },
      { label: "Sheet", href: "/components/sheet" },
      { label: "Skeleton", href: "/components/skeleton" },
      { label: "Switch", href: "/components/switch" },
      { label: "Tabs", href: "/components/tabs" },
      { label: "Toggle", href: "/components/toggle" },
      { label: "Tooltip", href: "/components/tooltip" },
    ],
  },
  {
    label: "Explore",
    items: [
      { label: "Component test bench", href: "/test" },
      { label: "Back to home", href: "/" },
    ],
  },
];

/** Flattened label + href list used by the header search. */
export const SEARCH_ITEMS: (NavItem & { group: string })[] = GROUPS.flatMap(
  (group) => group.items.map((item) => ({ ...item, group: group.label }))
);