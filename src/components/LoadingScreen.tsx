import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import irsimLogo from "@/assets/irsim-logo.png";

const VARIANTS = ["signal", "dashboard", "routemap", "terminal"] as const;
type Variant = (typeof VARIANTS)[number];

export function LoadingScreen() {
  const [done, setDone] = useState(false);
  const variant = useMemo<Variant>(
    () => VARIANTS[Math.floor(Math.random() * VARIANTS.length)],
    [],
  );

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 2400);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-background overflow-hidden"
        >
          {/* Smoke layer */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              initial={{ opacity: 0.7 }}
              animate={{ opacity: 0 }}
              transition={{ duration: 2.4, ease: "easeOut" }}
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(120,120,140,0.55), transparent 70%)",
                filter: "blur(40px)",
              }}
            />
          </div>

          {/* Animated logo with shimmer + signal flash + vibration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, filter: "blur(14px)" }}
            animate={{
              opacity: 1,
              scale: 1,
              filter: "blur(0px)",
              x: [0, -1, 1, -1, 1, 0],
            }}
            transition={{
              opacity: { duration: 1, ease: "easeOut" },
              scale: { duration: 1.2, ease: "easeOut" },
              filter: { duration: 1.2 },
              x: { repeat: Infinity, duration: 0.18, ease: "linear", delay: 1 },
            }}
            className="relative"
          >
            <img
              src={irsimLogo}
              alt="IRSIM"
              width={120}
              height={120}
              className="w-28 h-28 object-contain relative z-10 drop-shadow-[0_0_30px_oklch(0.62_0.24_27/0.6)]"
            />
            {/* Shimmer sweep */}
            <motion.div
              initial={{ x: "-120%" }}
              animate={{ x: "120%" }}
              transition={{ duration: 1.4, delay: 0.6, ease: "easeInOut" }}
              className="absolute inset-0 z-20 pointer-events-none"
              style={{
                background:
                  "linear-gradient(110deg, transparent 35%, rgba(255,255,255,0.85) 50%, transparent 65%)",
                mixBlendMode: "overlay",
              }}
            />
            {/* Red signal flash */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 0.5, delay: 1.4 }}
              className="absolute -inset-6 rounded-full pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, oklch(0.62 0.24 27 / 0.5), transparent 60%)",
              }}
            />
          </motion.div>

          {/* Variant-specific bottom content */}
          <div className="mt-10 w-full max-w-md px-6">
            {variant === "signal" && <SignalVariant />}
            {variant === "dashboard" && <DashboardVariant />}
            {variant === "routemap" && <RoutemapVariant />}
            {variant === "terminal" && <TerminalVariant />}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function SignalVariant() {
  const colors = ["oklch(0.62 0.24 27)", "oklch(0.78 0.18 75)", "oklch(0.68 0.18 145)"];
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex items-center gap-3 p-3 rounded-sm border border-border bg-card/50">
        {colors.map((c, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0.15 }}
            animate={{ opacity: [0.15, 1, 0.15] }}
            transition={{ duration: 0.6, delay: 0.6 + i * 0.55, times: [0, 0.5, 1] }}
            className="block w-6 h-6 rounded-full"
            style={{ backgroundColor: c, boxShadow: `0 0 18px ${c}` }}
          />
        ))}
      </div>
      <div className="font-mono-rail text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
        Aspect cleared · Proceed
      </div>
    </div>
  );
}

function DashboardVariant() {
  const lines = [
    "MU CONTROL · ONLINE",
    "BRAKE PIPE · 5.0 KGF",
    "TRACTION · READY",
    "VCB · CLOSED",
  ];
  return (
    <div className="space-y-2 font-mono-rail text-[11px] uppercase tracking-widest">
      {lines.map((l, i) => (
        <motion.div
          key={l}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 + i * 0.35 }}
          className="flex items-center justify-between border border-border px-3 py-1.5 bg-card/30"
        >
          <span className="text-muted-foreground">{l}</span>
          <span className="text-accent">OK</span>
        </motion.div>
      ))}
    </div>
  );
}

function RoutemapVariant() {
  return (
    <div className="flex flex-col items-center gap-3">
      <svg viewBox="0 0 320 60" className="w-full">
        <motion.path
          d="M10 30 Q 80 5, 160 30 T 310 30"
          fill="none"
          stroke="oklch(0.62 0.24 27)"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
        />
        {[10, 90, 160, 230, 310].map((cx, i) => (
          <motion.circle
            key={cx}
            cx={cx}
            cy={30}
            r={4}
            fill="oklch(0.68 0.18 145)"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.4 + i * 0.3 }}
          />
        ))}
      </svg>
      <div className="font-mono-rail text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
        Plotting route · WTJ → MDG
      </div>
    </div>
  );
}

function TerminalVariant() {
  const lines = [
    "> Initializing Railway Systems…",
    "> Loading block sections…",
    "> Syncing signal cabin…",
    "> Network ready.",
  ];
  return (
    <div className="font-mono-rail text-[11px] uppercase tracking-widest text-accent space-y-1.5">
      {lines.map((l, i) => (
        <motion.div
          key={l}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 + i * 0.45 }}
        >
          {l}
        </motion.div>
      ))}
    </div>
  );
}
