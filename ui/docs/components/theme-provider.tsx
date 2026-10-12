"use client";

import * as React from "react";

const STORAGE_KEY = "noarka-theme";

export type Theme = "light" | "dark";

type ThemeContextValue = {
  /** null until mounted, so server markup matches the `dark` class on <html>. */
  theme: Theme | null;
  setTheme: (theme: Theme) => void;
};

const ThemeContext = React.createContext<ThemeContextValue>({
  theme: null,
  setTheme: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = React.useState<Theme | null>(null);

  // Read the class rather than localStorage: the inline script in layout.tsx
  // may have already applied the stored theme before hydration.
  React.useEffect(() => {
    setThemeState(
      document.documentElement.classList.contains("dark") ? "dark" : "light"
    );
  }, []);

  const setTheme = React.useCallback((next: Theme) => {
    document.documentElement.classList.toggle("dark", next === "dark");
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Storage unavailable (private mode), still applies for this visit.
    }
    setThemeState(next);
  }, []);

  const value = React.useMemo(() => ({ theme, setTheme }), [theme, setTheme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  return React.useContext(ThemeContext);
}