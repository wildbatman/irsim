/**
 * Stylized Indian Railways train: WAP-7 electric loco + 3 LHB coaches.
 * Livery: IR red/maroon body with cream stripes, signal-orange roof accents.
 * Width is intrinsic; scale via wrapper.
 */
export function IndianTrainSVG({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1200 200"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Indian Railways train"
    >
      <defs>
        <linearGradient id="locoBody" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#a83232" />
          <stop offset="1" stopColor="#6f1f1f" />
        </linearGradient>
        <linearGradient id="coachBody" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#c44a2a" />
          <stop offset="1" stopColor="#8a3220" />
        </linearGradient>
        <linearGradient id="window" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fef7c2" />
          <stop offset="1" stopColor="#f5c042" />
        </linearGradient>
        <radialGradient id="headlight" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#fffbe0" stopOpacity="1" />
          <stop offset="0.5" stopColor="#fff2a8" stopOpacity="0.6" />
          <stop offset="1" stopColor="#fff2a8" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* WAP-7 LOCO (right end, train moves left → right) */}
      <g transform="translate(900,40)">
        {/* Headlight glow */}
        <circle cx="290" cy="70" r="35" fill="url(#headlight)" />
        {/* Body */}
        <rect x="20" y="20" width="270" height="80" rx="6" fill="url(#locoBody)" stroke="#3a0e0e" strokeWidth="1.5" />
        {/* Cream stripe */}
        <rect x="20" y="55" width="270" height="8" fill="#f1e4c2" />
        {/* Roof equipment (pantograph base + AC) */}
        <rect x="60" y="6" width="60" height="14" fill="#2a2a2a" />
        <rect x="170" y="6" width="50" height="14" fill="#2a2a2a" />
        {/* Pantograph */}
        <g stroke="#1a1a1a" strokeWidth="1.5" fill="none">
          <line x1="90" y1="6" x2="75" y2="-18" />
          <line x1="90" y1="6" x2="105" y2="-18" />
          <line x1="75" y1="-18" x2="105" y2="-18" />
          <line x1="60" y1="-22" x2="120" y2="-22" />
        </g>
        {/* Cab windows */}
        <rect x="240" y="30" width="40" height="22" rx="2" fill="#1a3340" stroke="#0d1a22" strokeWidth="1" />
        {/* Side windows */}
        {Array.from({ length: 4 }).map((_, i) => (
          <rect key={i} x={50 + i * 40} y={32} width={28} height={18} rx={1} fill="#1a3340" stroke="#0d1a22" strokeWidth="1" />
        ))}
        {/* IR logo plate */}
        <rect x="200" y="70" width="30" height="18" fill="#f1e4c2" stroke="#3a0e0e" strokeWidth="1" />
        <text x="215" y="83" textAnchor="middle" fontFamily="monospace" fontSize="11" fontWeight="700" fill="#a83232">IR</text>
        {/* Cab nose */}
        <path d="M290,20 L300,40 L300,80 L290,100 Z" fill="#7a2424" stroke="#3a0e0e" strokeWidth="1.5" />
        {/* Bogies / wheels */}
        <rect x="40" y="100" width="80" height="14" fill="#1a1a1a" />
        <rect x="180" y="100" width="80" height="14" fill="#1a1a1a" />
        <circle cx="60" cy="120" r="12" fill="#2a2a2a" stroke="#0a0a0a" strokeWidth="2" />
        <circle cx="100" cy="120" r="12" fill="#2a2a2a" stroke="#0a0a0a" strokeWidth="2" />
        <circle cx="200" cy="120" r="12" fill="#2a2a2a" stroke="#0a0a0a" strokeWidth="2" />
        <circle cx="240" cy="120" r="12" fill="#2a2a2a" stroke="#0a0a0a" strokeWidth="2" />
      </g>

      {/* LHB COACHES (3 of them) */}
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(${20 + i * 290},40)`}>
          {/* Body */}
          <rect x="0" y="20" width="280" height="80" rx="4" fill="url(#coachBody)" stroke="#3a0e0e" strokeWidth="1.5" />
          {/* Roof */}
          <rect x="0" y="14" width="280" height="8" fill="#3a3a3a" />
          {/* Cream waist stripe */}
          <rect x="0" y="58" width="280" height="6" fill="#f1e4c2" />
          {/* Windows */}
          {Array.from({ length: 6 }).map((_, w) => (
            <rect
              key={w}
              x={20 + w * 42}
              y={32}
              width={28}
              height={20}
              rx={2}
              fill="url(#window)"
              stroke="#3a0e0e"
              strokeWidth="1"
            />
          ))}
          {/* Door */}
          <rect x="245" y="32" width="22" height="48" rx="2" fill="#7a2424" stroke="#3a0e0e" strokeWidth="1" />
          {/* Coach number */}
          <text x="10" y="78" fontFamily="monospace" fontSize="9" fontWeight="700" fill="#f1e4c2">
            {`A${i + 1} · LHB`}
          </text>
          {/* Bogies */}
          <rect x="20" y="100" width="80" height="14" fill="#1a1a1a" />
          <rect x="180" y="100" width="80" height="14" fill="#1a1a1a" />
          <circle cx="40" cy="120" r="12" fill="#2a2a2a" stroke="#0a0a0a" strokeWidth="2" />
          <circle cx="80" cy="120" r="12" fill="#2a2a2a" stroke="#0a0a0a" strokeWidth="2" />
          <circle cx="200" cy="120" r="12" fill="#2a2a2a" stroke="#0a0a0a" strokeWidth="2" />
          <circle cx="240" cy="120" r="12" fill="#2a2a2a" stroke="#0a0a0a" strokeWidth="2" />
          {/* Couplers */}
          <rect x="-6" y="78" width="10" height="6" fill="#1a1a1a" />
          <rect x="276" y="78" width="10" height="6" fill="#1a1a1a" />
        </g>
      ))}
    </svg>
  );
}
