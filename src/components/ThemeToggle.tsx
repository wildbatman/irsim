import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "day" | "night";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("day");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = (localStorage.getItem("irsim-theme") as Theme | null) ?? "day";
    setTheme(stored);
    document.documentElement.classList.toggle("theme-night", stored === "night");
    setMounted(true);
  }, []);

  const toggle = () => {
    const next: Theme = theme === "day" ? "night" : "day";
    setTheme(next);
    localStorage.setItem("irsim-theme", next);
    document.documentElement.classList.toggle("theme-night", next === "night");
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${theme === "day" ? "night" : "day"} theme`}
      className="font-mono-rail text-xs uppercase tracking-widest border border-border px-3 py-2 rounded-sm hover:border-primary hover:text-primary transition flex items-center gap-2"
      suppressHydrationWarning
    >
      {mounted && theme === "night" ? (
        <>
          <Sun className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Day</span>
        </>
      ) : (
        <>
          <Moon className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Night</span>
        </>
      )}
    </button>
  );
}
