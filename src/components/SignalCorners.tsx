export function SignalCorners() {
  return (
    <div className="pointer-events-none fixed inset-0 z-40">
      <span
        className="absolute top-20 left-3 w-2 h-2 rounded-full signal-pulse"
        style={{ backgroundColor: "oklch(0.62 0.24 27)", color: "oklch(0.62 0.24 27)" }}
      />
      <span
        className="absolute bottom-3 right-3 w-2 h-2 rounded-full signal-pulse"
        style={{ backgroundColor: "oklch(0.68 0.18 145)", color: "oklch(0.68 0.18 145)" }}
      />
    </div>
  );
}
