import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Check } from "lucide-react";

type Theme = "day" | "night";
const KEY = "irsim-theme";
const PICKED_KEY = "irsim-theme-picked";

export function ThemePickerModal() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Theme>("day");

  useEffect(() => {
    const picked = localStorage.getItem(PICKED_KEY);
    const current = (localStorage.getItem(KEY) as Theme | null) ?? "day";
    setSelected(current);
    if (!picked) {
      const t = setTimeout(() => setOpen(true), 350);
      return () => clearTimeout(t);
    }
  }, []);

  const apply = (t: Theme) => {
    document.documentElement.classList.toggle("theme-night", t === "night");
    localStorage.setItem(KEY, t);
    localStorage.setItem(PICKED_KEY, "1");
  };

  const confirm = () => {
    apply(selected);
    setOpen(false);
  };

  const options: { id: Theme; label: string; sub: string; icon: typeof Sun; ring: string }[] = [
    { id: "day", label: "Orange & White", sub: "Daylight livery", icon: Sun, ring: "oklch(0.70 0.19 50)" },
    { id: "night", label: "Deep Night Blue", sub: "After sundown", icon: Moon, ring: "oklch(0.62 0.24 27)" },
  ];

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-md"
        >
          <motion.div
            initial={{ scale: 0.92, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: "spring", damping: 22, stiffness: 220 }}
            className="relative w-full max-w-xl rounded-sm border border-border bg-background p-8 shadow-[0_30px_120px_rgba(0,0,0,0.6)]"
          >
            <div className="font-mono-rail text-xs uppercase tracking-[0.4em] text-secondary mb-3">
              § Welcome to IRSIM
            </div>
            <h2 className="font-display text-3xl md:text-4xl uppercase leading-tight mb-2">
              Pick your <span className="text-primary">livery</span>
            </h2>
            <p className="text-sm text-muted-foreground mb-6">
              Choose a theme — you can switch any time from the navbar.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {options.map((o) => {
                const isSel = selected === o.id;
                const Icon = o.icon;
                return (
                  <button
                    key={o.id}
                    type="button"
                    onClick={() => setSelected(o.id)}
                    className="relative group text-left p-5 rounded-sm border-2 transition overflow-hidden"
                    style={{
                      borderColor: isSel ? o.ring : "var(--border)",
                      boxShadow: isSel ? `0 0 28px ${o.ring}55` : "none",
                    }}
                  >
                    <div
                      className="absolute inset-0 opacity-30 transition group-hover:opacity-50"
                      style={{
                        background:
                          o.id === "day"
                            ? "linear-gradient(135deg, oklch(0.98 0.02 80), oklch(0.92 0.05 60))"
                            : "linear-gradient(135deg, oklch(0.16 0.03 255), oklch(0.20 0.05 260))",
                      }}
                    />
                    <div className="relative flex items-start gap-3">
                      <div
                        className="w-10 h-10 rounded-sm flex items-center justify-center shrink-0"
                        style={{ backgroundColor: o.ring, color: "white" }}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <div className="font-display text-xl uppercase">{o.label}</div>
                        <div className="font-mono-rail text-[10px] uppercase tracking-widest text-muted-foreground mt-1">
                          {o.sub}
                        </div>
                      </div>
                      {isSel && (
                        <Check className="w-5 h-5" style={{ color: o.ring }} />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="mt-7 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => {
                  apply("day");
                  setOpen(false);
                }}
                className="font-mono-rail text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition"
              >
                Skip
              </button>
              <button
                type="button"
                onClick={confirm}
                className="btn-tactile font-mono-rail text-xs uppercase tracking-widest bg-primary text-primary-foreground px-6 py-3 rounded-sm"
              >
                Confirm theme
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
