/**
 * Hero atmospheric overlay: drifting fog + slow rotating light beams.
 * Pure CSS animations — cheap on mobile.
 */
export function HeroFX() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Light beams */}
      <div
        className="absolute -top-1/4 left-1/2 w-[140vw] h-[140vh] -translate-x-1/2 opacity-[0.18] mix-blend-screen hero-beams"
        style={{
          background:
            "conic-gradient(from 200deg at 50% 0%, transparent 0deg, oklch(0.92 0.05 80 / 0.55) 8deg, transparent 16deg, transparent 60deg, oklch(0.92 0.05 80 / 0.4) 70deg, transparent 80deg, transparent 360deg)",
          filter: "blur(40px)",
        }}
      />
      {/* Drifting fog (two layers, opposite directions) */}
      <div
        className="absolute inset-0 hero-fog hero-fog--a opacity-[0.35] mix-blend-screen"
        style={{
          background:
            "radial-gradient(60% 40% at 30% 70%, rgba(220,210,200,0.5), transparent 70%), radial-gradient(50% 35% at 75% 60%, rgba(200,190,180,0.4), transparent 70%)",
          filter: "blur(30px)",
        }}
      />
      <div
        className="absolute inset-0 hero-fog hero-fog--b opacity-[0.25] mix-blend-screen"
        style={{
          background:
            "radial-gradient(55% 35% at 60% 80%, rgba(230,220,210,0.45), transparent 70%), radial-gradient(45% 30% at 20% 50%, rgba(190,180,170,0.4), transparent 70%)",
          filter: "blur(40px)",
        }}
      />
    </div>
  );
}
