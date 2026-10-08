"use client";

import { Reveal } from "@/components/ui/Reveal";

/** Annotated Origin→Decision path — educational figure, not a live product output. */
const stages = [
  {
    label: "Origin",
    note: "Where pressure begins",
  },
  {
    label: "Signal",
    note: "Evidence of change",
  },
  {
    label: "Connection",
    note: "Related systems",
  },
  {
    label: "Transmission",
    note: "How it travels",
  },
  {
    label: "Exposure",
    note: "Where it can matter",
  },
  {
    label: "Absorption",
    note: "What can take the shock",
  },
  {
    label: "Impact",
    note: "Resulting consequence",
  },
  {
    label: "Decision",
    note: "What deserves attention",
  },
] as const;

/** Wave y-offsets so labels stay readable without overlap. */
const WAVE_Y = [78, 108, 72, 112, 76, 108, 80, 70] as const;

export function RipplePath() {
  return (
    <Reveal>
      <figure className="relative overflow-hidden rounded-sm border border-[rgba(232,236,244,0.1)] figure-panel px-4 py-10 md:px-8 md:py-12">
        <figcaption className="sr-only">
          Annotated ripple path from Origin through Signal, Connection, Transmission, Exposure,
          Absorption, Impact, to Decision.
        </figcaption>

        <svg
          viewBox="0 0 920 220"
          className="mx-auto hidden h-auto w-full max-w-5xl md:block"
          role="img"
          aria-label="Ripple path: Origin to Decision"
        >
          <defs>
            <linearGradient id="path-flow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0FA88F" stopOpacity="0.25" />
              <stop offset="45%" stopColor="#0FA88F" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#E8ECF4" stopOpacity="0.4" />
            </linearGradient>
          </defs>

          <path
            d="M56 96 C130 48, 210 144, 288 88 S440 34, 528 104 S670 158, 760 84 S840 54, 864 78"
            fill="none"
            stroke="url(#path-flow)"
            strokeWidth="2"
            className="animate-path-draw"
            strokeDasharray="1100"
          />
          <path
            d="M56 96 C130 48, 210 144, 288 88 S440 34, 528 104 S670 158, 760 84 S840 54, 864 78"
            fill="none"
            stroke="rgba(15,168,143,0.1)"
            strokeWidth="12"
          />

          {stages.map((stage, index) => {
            const x = 56 + index * 112;
            const y = WAVE_Y[index];
            const labelAbove = index % 2 === 0;
            const isFirst = index === 0;
            const isLast = index === stages.length - 1;
            return (
              <g key={stage.label}>
                {index < stages.length - 1 ? (
                  <line
                    x1={x + 10}
                    y1={y}
                    x2={x + 102}
                    y2={WAVE_Y[index + 1]}
                    stroke="rgba(15,168,143,0.18)"
                    strokeWidth="1"
                    strokeDasharray="3 4"
                  />
                ) : null}
                <circle
                  cx={x}
                  cy={y}
                  r={isFirst || isLast ? 8 : 5.5}
                  fill={isFirst ? "#0FA88F" : isLast ? "#E8ECF4" : "#E8ECF4"}
                  opacity={isLast ? 0.85 : 1}
                  className={isFirst ? "animate-node-pulse" : undefined}
                />
                <text
                  x={x}
                  y={labelAbove ? y - 28 : y + 26}
                  textAnchor="middle"
                  fill="#F4F6FA"
                  fontSize="12"
                  fontWeight="600"
                  letterSpacing="0.04em"
                  fontFamily="var(--font-display), sans-serif"
                >
                  {stage.label}
                </text>
                <text
                  x={x}
                  y={labelAbove ? y - 14 : y + 40}
                  textAnchor="middle"
                  fill="#9AA3B5"
                  fontSize="10"
                  letterSpacing="0.02em"
                  fontFamily="var(--font-body), sans-serif"
                >
                  {stage.note}
                </text>
              </g>
            );
          })}
        </svg>

        {/* Mobile: annotated vertical path */}
        <ol className="relative mx-auto flex max-w-md flex-col gap-0 md:hidden">
          {stages.map((stage, index) => (
            <li key={stage.label} className="relative flex items-start gap-4 py-3">
              {index < stages.length - 1 ? (
                <span
                  className="absolute left-[9px] top-9 h-[calc(100%-2px)] w-px bg-teal/30"
                  aria-hidden="true"
                />
              ) : null}
              <span
                className={`relative z-10 mt-0.5 h-[18px] w-[18px] shrink-0 rounded-full border ${
                  index === 0
                    ? "border-teal bg-teal animate-node-pulse"
                    : index === stages.length - 1
                      ? "border-mist/50 bg-mist/30"
                      : "border-teal/40 bg-navy-elevated"
                }`}
              />
              <span>
                <span className="block font-display text-base text-off-white">{stage.label}</span>
                <span className="mt-0.5 block text-sm text-muted">{stage.note}</span>
              </span>
            </li>
          ))}
        </ol>

        <p className="mt-8 text-center text-sm leading-relaxed text-muted md:mt-7">
          <span className="text-mist/90">How to read this:</span> follow left to right (or top to
          bottom). Each step is a lens on the same disturbance — not a prediction, and not a live
          RipplePoint output.
        </p>
      </figure>
    </Reveal>
  );
}
