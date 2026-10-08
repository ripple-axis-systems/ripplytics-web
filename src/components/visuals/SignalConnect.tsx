"use client";

import { Reveal } from "@/components/ui/Reveal";

const nodes = [
  { label: "Markets", x: 18, y: 22 },
  { label: "Policy", x: 42, y: 12 },
  { label: "Conflict", x: 68, y: 18 },
  { label: "Currency", x: 86, y: 38 },
  { label: "Commodities", x: 78, y: 68 },
  { label: "Supply chains", x: 48, y: 82 },
  { label: "Behaviour", x: 16, y: 62 },
];

export function SignalConnect() {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
      <Reveal>
        <div className="relative aspect-[16/11] w-full overflow-hidden rounded-sm border border-[rgba(232,236,244,0.1)] bg-[linear-gradient(160deg,rgba(18,24,43,0.9),rgba(11,15,31,0.4))]">
          <svg viewBox="0 0 100 70" className="h-full w-full" aria-hidden="true">
            <defs>
              <radialGradient id="signal-glow" cx="50%" cy="45%" r="45%">
                <stop offset="0%" stopColor="#0FA88F" stopOpacity="0.18" />
                <stop offset="100%" stopColor="#0FA88F" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect width="100" height="70" fill="url(#signal-glow)" />

            {/* Connection lattice */}
            <g stroke="rgba(15,168,143,0.28)" strokeWidth="0.35" fill="none">
              {nodes.map((node, i) => (
                <line
                  key={`line-${node.label}`}
                  x1={node.x}
                  y1={node.y}
                  x2={50}
                  y2={36}
                  className="animate-path-draw"
                  style={{ animationDelay: `${i * 0.12}s` }}
                  strokeDasharray="120"
                />
              ))}
              <path
                d="M18 22 L42 12 L68 18 L86 38 L78 68 L48 82 L16 62 Z"
                stroke="rgba(232,236,244,0.08)"
                strokeWidth="0.3"
              />
            </g>

            {/* Center — visible signal */}
            <circle cx="50" cy="36" r="3.2" fill="#0FA88F" className="animate-node-pulse" />
            <circle
              cx="50"
              cy="36"
              r="7"
              fill="none"
              stroke="#0FA88F"
              strokeOpacity="0.35"
              className="animate-propagate"
            />
            <text
              x="50"
              y="48"
              textAnchor="middle"
              fill="#E8ECF4"
              fontSize="2.6"
              letterSpacing="0.12em"
              fontFamily="var(--font-display), sans-serif"
            >
              SIGNAL
            </text>

            {nodes.map((node) => (
              <g key={node.label}>
                <circle cx={node.x} cy={node.y} r="1.4" fill="#E8ECF4" opacity="0.75" />
                <text
                  x={node.x}
                  y={node.y - 2.8}
                  textAnchor="middle"
                  fill="#9AA3B5"
                  fontSize="2.4"
                  fontFamily="var(--font-body), sans-serif"
                >
                  {node.label}
                </text>
              </g>
            ))}
          </svg>
        </div>
      </Reveal>

      <Reveal delay={120}>
        <div className="space-y-6">
          <p className="font-display text-2xl leading-snug text-off-white md:text-3xl">
            The information is there.
          </p>
          <p className="text-base leading-relaxed text-muted md:text-lg">
            The difficult part is understanding what it means{" "}
            <span className="text-mist">together</span> — and where the consequence travels next.
          </p>
          <div className="h-px w-16 bg-teal/50" aria-hidden="true" />
          <p className="text-sm uppercase tracking-[0.16em] text-teal/90">
            Visible signal → hidden consequence
          </p>
        </div>
      </Reveal>
    </div>
  );
}
