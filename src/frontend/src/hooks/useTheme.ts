import type { Theme } from "@/types";
import { useCallback, useEffect, useState } from "react";

const THEME_STORAGE_KEY = "portfolio-theme";
const DARK_CLASS = "dark";

function applyTheme(theme: Theme) {
  const root = document.documentElement;

  // Both themes use dark backgrounds — always keep the dark class
  root.classList.add(DARK_CLASS);
  root.setAttribute("data-theme", theme);
  root.style.colorScheme = "dark";

  // Update meta theme-color
  const metaThemeColor = document.querySelector('meta[name="theme-color"]');
  if (metaThemeColor) {
    metaThemeColor.setAttribute(
      "content",
      theme === "colorful" ? "#1a0d2e" : "#0d0b1a",
    );
  }
}

export function useTheme() {
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window === "undefined") return "dark";
    const stored = localStorage.getItem(THEME_STORAGE_KEY) as Theme | null;
    return stored === "colorful" ? "colorful" : "dark";
  });

  // Apply on mount and on every theme change
  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const setTheme = useCallback((newTheme: Theme) => {
    localStorage.setItem(THEME_STORAGE_KEY, newTheme);
    setThemeState(newTheme);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(theme === "dark" ? "colorful" : "dark");
  }, [theme, setTheme]);

  return { theme, setTheme, toggleTheme };
}
