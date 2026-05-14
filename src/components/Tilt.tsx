import { useEffect, useRef, type ReactNode, type CSSProperties } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  max?: number;
  glare?: boolean;
};

function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function Tilt({ children, className, style, max = 8, glare = true }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (prefersReducedMotion()) return;

    let instance: { destroy: () => void } | null = null;
    let cancelled = false;

    import("vanilla-tilt").then((mod) => {
      if (cancelled || !el) return;
      const VanillaTilt = (mod as unknown as { default: { init: (el: HTMLElement, opts: Record<string, unknown>) => void } }).default;
      VanillaTilt.init(el, {
        max,
        speed: 600,
        glare,
        "max-glare": 0.18,
        scale: 1.02,
        perspective: 1000,
        "gyroscope": false,
      });
      instance = (el as unknown as { vanillaTilt: { destroy: () => void } }).vanillaTilt;
    });

    return () => {
      cancelled = true;
      instance?.destroy();
    };
  }, [max, glare]);

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}
