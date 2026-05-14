import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    // Disable on touch / coarse pointer (mobile)
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!fine) return;
    setEnabled(true);

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;
    let raf = 0;

    let magnetTarget: HTMLElement | null = null;
    let magnetRect: DOMRect | null = null;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;

      // Magnetic pull
      const el = (e.target as HTMLElement | null)?.closest?.("[data-magnetic]") as HTMLElement | null;
      if (el !== magnetTarget) {
        if (magnetTarget) {
          magnetTarget.style.transform = "";
        }
        magnetTarget = el;
        magnetRect = el ? el.getBoundingClientRect() : null;
      }
      if (magnetTarget && magnetRect) {
        const cx = magnetRect.left + magnetRect.width / 2;
        const cy = magnetRect.top + magnetRect.height / 2;
        const dx = (mx - cx) * 0.25;
        const dy = (my - cy) * 0.25;
        magnetTarget.style.transform = `translate(${dx}px, ${dy}px)`;
        // Cursor snaps a bit toward target center
        mx = cx + (mx - cx) * 0.65;
        my = cy + (my - cy) * 0.65;
      }
    };

    const onLeave = () => {
      if (magnetTarget) {
        magnetTarget.style.transform = "";
        magnetTarget = null;
        magnetRect = null;
      }
    };

    const onClick = () => {
      if (!ring) return;
      ring.classList.remove("cursor-ring-burst");
      // force reflow
      void ring.offsetWidth;
      ring.classList.add("cursor-ring-burst");
    };

    const tick = () => {
      // Smooth lerp for ring
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      dot.style.transform = `translate3d(${mx}px, ${my}px, 0)`;
      ring.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseout", onLeave);
    window.addEventListener("click", onClick);
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseout", onLeave);
      window.removeEventListener("click", onClick);
      if (magnetTarget) magnetTarget.style.transform = "";
    };
  }, []);

  if (!enabled) return null;
  return (
    <>
      <div
        ref={ringRef}
        className="cursor-ring pointer-events-none fixed top-0 left-0 z-[9998] -translate-x-1/2 -translate-y-1/2"
        aria-hidden
      />
      <div
        ref={dotRef}
        className="cursor-dot pointer-events-none fixed top-0 left-0 z-[9999] -translate-x-1/2 -translate-y-1/2"
        aria-hidden
      />
    </>
  );
}
