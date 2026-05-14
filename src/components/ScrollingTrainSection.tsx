import { useEffect, useRef } from "react";
import { IndianTrainSVG } from "./IndianTrainSVG";

const STOPS = [
  { code: "WTJ", name: "Waltan Junction", km: "000" },
  { code: "LDB", name: "Ludhiyana Bypass", km: "112" },
  { code: "SVS", name: "Sulivar South", km: "248" },
  { code: "MDG", name: "Milindagar", km: "412" },
];

export function ScrollingTrainSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const trainRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const stopsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const train = trainRef.current;
    if (!section || !train) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      train.style.transform = "translateX(50%)";
      return;
    }

    let raf = 0;
    let ticking = false;

    const update = () => {
      ticking = false;
      const rect = section.getBoundingClientRect();
      const winH = window.innerHeight;
      // Progress: 0 when section top hits viewport top, 1 when section bottom hits viewport bottom
      const total = rect.height - winH;
      const scrolled = -rect.top;
      const p = Math.max(0, Math.min(1, scrolled / total));
      // Train travels from off-screen left (-30%) to off-screen right (130%)
      const x = -30 + p * 160;
      train.style.transform = `translateX(${x}%)`;

      // Highlight active stop
      if (stopsRef.current) {
        const activeIdx = Math.min(STOPS.length - 1, Math.floor(p * STOPS.length));
        const dots = stopsRef.current.querySelectorAll<HTMLElement>("[data-stop]");
        dots.forEach((dot, i) => {
          dot.dataset.active = i <= activeIdx ? "true" : "false";
        });
      }
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="route"
      className="relative border-t border-border"
      style={{ height: "260vh" }}
      aria-label="Scrolling route showcase"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-gradient-to-b from-background via-card/40 to-background flex flex-col">
        <div className="max-w-7xl mx-auto px-6 pt-24 w-full">
          <div className="font-mono-rail text-xs uppercase tracking-[0.4em] text-secondary mb-4">
            §05 — The Route
          </div>
          <h2 className="font-display text-5xl md:text-7xl uppercase leading-[0.95]">
            From Waltan
            <span className="block text-primary">to Milindagar.</span>
          </h2>
          <p className="mt-4 max-w-xl text-muted-foreground">
            412 km of running line. Scroll to ride the route — junction, bypass, through halt, terminus.
          </p>
        </div>

        {/* Sky / horizon glow */}
        <div className="absolute inset-x-0 top-0 h-1/2 pointer-events-none"
             style={{ background: "radial-gradient(ellipse at 50% 60%, oklch(0.70 0.19 50 / 0.18), transparent 60%)" }} />

        {/* Track + train */}
        <div className="relative mt-auto mb-24 w-full">
          <div ref={trackRef} className="relative w-full">
            {/* Track ballast */}
            <div className="absolute inset-x-0 bottom-0 h-3 bg-[var(--rail-steel)] opacity-30" />
            {/* Sleepers */}
            <div className="absolute inset-x-0 bottom-3 h-2 bg-rails opacity-60" />
            {/* Rails */}
            <div className="absolute inset-x-0 bottom-5 h-[2px] bg-foreground/40" />
            <div className="absolute inset-x-0 bottom-7 h-[2px] bg-foreground/40" />

            {/* Train */}
            <div
              ref={trainRef}
              className="relative w-[160%] sm:w-[120%] md:w-[100%] -mb-2 will-change-transform"
              style={{ transform: "translateX(-30%)" }}
            >
              <IndianTrainSVG className="w-full h-auto" />
            </div>
          </div>

          {/* Stops bar */}
          <div ref={stopsRef} className="max-w-7xl mx-auto px-6 mt-6 grid grid-cols-4 gap-2">
            {STOPS.map((s, i) => (
              <div
                key={s.code}
                data-stop
                data-active="false"
                className="route-stop font-mono-rail text-[10px] uppercase tracking-widest border-t-2 pt-2"
              >
                <div className="text-secondary">{s.code} · {s.km} km</div>
                <div className="text-foreground text-xs mt-0.5 hidden sm:block">{s.name}</div>
                <div className="text-foreground text-xs mt-0.5 sm:hidden">{i === 0 || i === STOPS.length - 1 ? s.name : ""}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
