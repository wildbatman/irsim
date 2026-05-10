export function TrackDivider() {
  return (
    <div aria-hidden className="relative h-6 w-full overflow-hidden">
      {/* Two rails */}
      <div className="absolute left-0 right-0 top-1/2 -translate-y-[5px] h-[2px] bg-border" />
      <div className="absolute left-0 right-0 top-1/2 translate-y-[3px] h-[2px] bg-border" />
      {/* Sleepers */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, var(--border) 0 6px, transparent 6px 28px)",
          opacity: 0.5,
        }}
      />
    </div>
  );
}
