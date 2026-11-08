"use client";

import { useEffect, useState } from "react";

/**
 * Dark/light toggle for the Editorial theme. The actual theme lives on
 * <html data-theme="...">, set before paint by the inline script in the
 * layout (localStorage "nh-theme", falling back to the OS preference).
 */
export default function ThemeToggle() {
  const [theme, setTheme] = useState<string>("light");

  useEffect(() => {
    setTheme(document.documentElement.dataset.theme || "light");
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("nh-theme", next);
    } catch {
      /* private mode — theme just won't persist */
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
