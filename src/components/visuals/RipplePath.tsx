"use client";

import { Reveal } from "@/components/ui/Reveal";

const stages = [
  "Origin",
  "Signal",
  "Connection",
  "Transmission",
  "Exposure",
  "Absorption",
  "Impact",
] as const;

export function RipplePath() {
  return (
    <Reveal>
      <div className="relative overflow-hidden rounded-sm border border-[rgba(232,236,244,0.1)] bg-[linear-gradient(180deg,rgba(18,24,43,0.75),rgba(11,15,31,0.35))] px-4 py-10 md:px-8 md:py-12">
        <svg
          viewBox="0 0 760 160"
          className="mx-auto hidden h-auto w-full max-w-5xl md:block"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="path-flow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0FA88F" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#0FA88F" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#E8ECF4" stopOpacity="0.35" />
            </linearGradient>
          </defs>

          {/* Wave backbone */}
          <path
            d="M40 90 C120 40, 200 140, 280 80 S440 30, 520 95 S660 150, 720 70"
            fill="none"
            stroke="url(#path-flow)"
            strokeWidth="2"
            className="animate-path-draw"
            strokeDasharray="900"
          />
          <path
            d="M40 90 C120 40, 200 140, 280 80 S440 30, 520 95 S660 150, 720 70"
            fill="none"
            stroke="rgba(15,168,143,0.12)"
            strokeWidth="10"
          />

          {stages.map((stage, index) => {
            const x = 40 + index * 110;
            const y = index % 2 === 0 ? 78 : 102;
            return (
              <g key={stage}>
                <circle
                  cx={x}
                  cy={y}
                  r={index === 0 || index === stages.length - 1 ? 7 : 5}
                  fill={index === 0 ? "#0FA88F" : "#E8ECF4"}
                  opacity={index === stages.length - 1 ? 0.7 : 1}
                  className={index === 0 ? "animate-node-pulse" : undefined}
                />
                <text
                  x={x}
                  y={y + (index % 2 === 0 ? -16 : 24)}
                  textAnchor="middle"
                  fill="#9AA3B5"
                  fontSize="11"
                  letterSpacing="0.08em"
                  fontFamily="var(--font-body), sans-serif"
                >
                  {stage.toUpperCase()}
                </text>
              </g>
            );
          })}
        </svg>

        {/* Mobile stacked path */}
        <ol className="relative mx-auto flex max-w-sm flex-col gap-0 md:hidden">
          {stages.map((stage, index) => (
            <li key={stage} className="relative flex items-center gap-4 py-2.5">
              {index < stages.length - 1 ? (
                <span
                  className="absolute left-[9px] top-8 h-[calc(100%-4px)] w-px bg-teal/30"
                  aria-hidden="true"
                />
              ) : null}
              <span
                className={`relative z-10 h-[18px] w-[18px] shrink-0 rounded-full border ${
                  index === 0
                    ? "border-teal bg-teal animate-node-pulse"
                    : "border-teal/40 bg-navy-elevated"
                }`}
              />
              <span className="text-sm uppercase tracking-[0.14em] text-mist/85">{stage}</span>
            </li>
          ))}
        </ol>

        <p className="mt-8 text-center text-sm text-muted md:mt-6">
          From origin to consequence — the foundation of how we think about risk.
        </p>
      </div>
    </Reveal>
  );
}
