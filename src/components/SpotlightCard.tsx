import { useRef, type ReactNode, type CSSProperties, type MouseEvent } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  /** Spotlight color, e.g. "oklch(0.70 0.19 50 / 0.35)" */
  spotlight?: string;
};

export function SpotlightCard({ children, className, style, spotlight }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      className={`luxe-card group ${className ?? ""}`}
      style={
        {
          ...(style ?? {}),
          "--spotlight": spotlight ?? "color-mix(in oklab, var(--primary) 40%, transparent)",
        } as CSSProperties
      }
    >
      <div className="luxe-card__spot" aria-hidden />
      <div className="luxe-card__inner">{children}</div>
    </div>
  );
}
