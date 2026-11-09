"use client";

import { useEffect, useState } from "react";

/**
 * Dark/light toggle for the Editorial theme.
 *
 * The theme FOLLOWS THE DEVICE by default: the layout's inline script sets
 * <html data-theme> from prefers-color-scheme before paint, and this
 * component keeps listening — if the device theme changes and the visitor
 * hasn't manually overridden during this session, the page follows live.
 * A manual toggle is a per-session override (sessionStorage "nh-theme");
 * the next visit goes back to following the device.
 */
export default function ThemeToggle() {
  const [theme, setTheme] = useState<string>("light");

  useEffect(() => {
    setTheme(document.documentElement.dataset.theme || "light");

    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const followDevice = (e: MediaQueryListEvent) => {
      let manual: string | null = null;
      try {
        manual = sessionStorage.getItem("nh-theme");
      } catch {
        /* ignore */
      }
      if (manual) return;
      const next = e.matches ? "dark" : "light";
      document.documentElement.dataset.theme = next;
      setTheme(next);
    };
    mq.addEventListener("change", followDevice);
    return () => mq.removeEventListener("change", followDevice);
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      sessionStorage.setItem("nh-theme", next);
    } catch {
      /* private mode — override just won't persist for the session */
    }
    setTheme(next);
  };

  return (
    <button
      type="button"
      className="ed-theme-btn"
      onClick={toggle}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
    >
      {theme === "dark" ? "☀ Light" : "☾ Dark"}
    </button>
  );
}
