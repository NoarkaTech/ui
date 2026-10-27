"use client";

import * as React from "react";
import { cn } from "@noarka/ui";

export type TocChild = { label: string; href: string };
export type TocEntry = { label: string; href: string; children?: TocChild[] };

function useActiveSection(ids: string[]) {
  const key = ids.join("|");
  const [active, setActive] = React.useState<string>(ids[0] ?? "");
  React.useEffect(() => {
    const targets = key
      .split("|")
      .filter((href) => href.length > 0)
      .map((href) => document.querySelector(href))
      .filter((el): el is Element => el !== null);
    if (targets.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length === 0) return;
        visible.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        setActive(`#${visible[0].target.id}`);
      },
      { rootMargin: "-80px 0px -70% 0px", threshold: 0 }
    );
    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);
  return active;
}

export function PageToc({
  items,
  footer,
}: {
  items: TocEntry[];
  footer?: TocChild;
}) {
  const sectionIds = React.useMemo(
    () => items.flatMap((item) => [item.href, ...(item.children ?? []).map((child) => child.href)]),
    [items]
  );
  const activeSection = useActiveSection(sectionIds);

  if (items.length === 0) return null;

  return (
    <aside className="hidden xl:block">
      <nav className="sticky top-20 max-h-[calc(100svh-3rem)] overflow-y-auto pb-14">
        <p className="mb-2 text-xs font-medium">
          On This Page
        </p>
        <ul className="space-y-1 border-l">
          {items.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={cn(
                  "-ml-px block border-l-2 py-1 pr-2 pl-4 text-sm transition-colors",
                  activeSection === item.href
                    ? "border-foreground font-medium text-foreground"
                    : "border-transparent text-muted-foreground hover:border-muted-foreground/50 hover:text-foreground"
                )}
              >
                {item.label}
              </a>
              {item.children && (
                <ul className="mt-1 space-y-1">
                  {item.children.map((child) => (
                    <li key={child.href}>
                      <a
                        href={child.href}
                        className={cn(
                          "-ml-px block border-l-2 py-1 pr-2 pl-8 text-[13px] transition-colors",
                          activeSection === child.href
                            ? "border-foreground font-medium text-foreground"
                            : "border-transparent text-muted-foreground hover:border-muted-foreground/50 hover:text-foreground"
                        )}
                      >
                        {child.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
