"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";
import { cn } from "@noarka/ui";
import { GROUPS } from "./docs-nav";

export function DocsSidebar() {
  const pathname = usePathname();
  const [hash, setHash] = React.useState("");
  const navRef = React.useRef<HTMLElement>(null);
  const [topFade, setTopFade] = React.useState(0);

  React.useEffect(() => {
    const update = () => setHash(window.location.hash);
    update();
    window.addEventListener("hashchange", update);
    return () => window.removeEventListener("hashchange", update);
  }, [pathname]);

  React.useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;
    const update = () => setTopFade(Math.min(1, nav.scrollTop / 48));
    update();
    nav.addEventListener("scroll", update, { passive: true });
    return () => nav.removeEventListener("scroll", update);
  }, []);

  return (
    <aside className="hidden lg:block">
      <nav
        ref={navRef}
        className="docs-sidebar-scroll fixed top-15 max-h-[calc(100svh-3rem)] space-y-7 overflow-y-auto pb-14"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none sticky top-0 z-10 -mb-8 h-8 bg-gradient-to-b from-background to-transparent"
          style={{ opacity: topFade }}
        />
        {GROUPS.map((group) => (
          <div key={group.label}>
            <p className="mb-2 text-xs font-medium">
              {group.label}
            </p>
            <ul className="space-y-1 mr-2">
              {group.items.map((item) => {
                const [itemPath, itemHash] = item.href.split("#");
                const active = itemHash
                  ? pathname === itemPath && hash === `#${itemHash}`
                  : pathname === item.href;
                return (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "block rounded-lg px-2 py-1.5 text-sm transition-colors",
                        active
                          ? "bg-muted font-medium text-foreground"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}
