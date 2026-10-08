"use client";

import { useState } from "react";
import { sixDimensions } from "@/lib/content";

/** Short callout labels for the connected diagram. */
const callouts = [
  "Reach & importance",
  "Pathways of pressure",
  "Where it lands",
  "What can absorb it",
  "Surrounding state",
  "Strength of evidence",
] as const;

export function SixDimensions() {
  const [active, setActive] = useState(0);
  const current = sixDimensions[active];

  return (
    <div className="overflow-hidden rounded-sm border border-[rgba(232,236,244,0.1)] figure-panel px-4 py-8 md:px-8 md:py-10">
      <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
        <div className="relative mx-auto aspect-square w-full max-w-[420px]" aria-hidden="true">
          <svg viewBox="0 0 420 420" className="h-full w-full">
            <defs>
              <radialGradient id="dim-core" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#0FA88F" stopOpacity="0.22" />
                <stop offset="100%" stopColor="#0FA88F" stopOpacity="0" />
              </radialGradient>
            </defs>

            <circle cx="210" cy="210" r="168" fill="url(#dim-core)" />
            <circle
              cx="210"
              cy="210"
              r="132"
              fill="none"
              stroke="rgba(232,236,244,0.1)"
              strokeWidth="1"
            />
            <circle
              cx="210"
              cy="210"
              r="62"
              fill="none"
              stroke="rgba(15,168,143,0.32)"
              strokeWidth="1.25"
            />
            <circle cx="210" cy="210" r="7" fill="#0FA88F" className="animate-node-pulse" />
            <text
              x="210"
              y="214"
              textAnchor="middle"
              fill="#E8ECF4"
              fontSize="9"
              letterSpacing="0.12em"
              fontFamily="var(--font-body), sans-serif"
              dy="28"
            >
              CONTEXT
            </text>

            {/* Ring connecting all six nodes */}
            <circle
              cx="210"
              cy="210"
              r="132"
              fill="none"
              stroke="rgba(15,168,143,0.2)"
              strokeWidth="1"
              strokeDasharray="4 6"
            />

            {sixDimensions.map((dim, index) => {
              const angle = (index / sixDimensions.length) * Math.PI * 2 - Math.PI / 2;
              const x = 210 + Math.cos(angle) * 132;
              const y = 210 + Math.sin(angle) * 132;
              const next = (index + 1) % sixDimensions.length;
              const nextAngle = (next / sixDimensions.length) * Math.PI * 2 - Math.PI / 2;
              const nx = 210 + Math.cos(nextAngle) * 132;
              const ny = 210 + Math.sin(nextAngle) * 132;
              const selected = index === active;
              const lx = 210 + Math.cos(angle) * 178;
              const ly = 210 + Math.sin(angle) * 178;
              const short = dim.label.replace("Systemic ", "");

              return (
                <g key={dim.id}>
                  <line
                    x1={x}
                    y1={y}
                    x2={nx}
                    y2={ny}
                    stroke={
                      selected || next === active
                        ? "rgba(15,168,143,0.45)"
                        : "rgba(232,236,244,0.1)"
                    }
                    strokeWidth={selected || next === active ? 1.4 : 1}
                  />
                  <line
                    x1="210"
                    y1="210"
                    x2={x}
                    y2={y}
                    stroke={selected ? "rgba(15,168,143,0.7)" : "rgba(232,236,244,0.12)"}
                    strokeWidth={selected ? 1.6 : 1}
                  />
                  <circle
                    cx={x}
                    cy={y}
                    r={selected ? 8 : 5}
                    fill={selected ? "#0FA88F" : "#E8ECF4"}
                    opacity={selected ? 1 : 0.75}
                  />
                  {/* Callout label */}
                  <text
                    x={lx}
                    y={ly - 6}
                    textAnchor="middle"
                    fill={selected ? "#0FA88F" : "#F4F6FA"}
                    fontSize="11"
                    fontWeight="600"
                    fontFamily="var(--font-display), sans-serif"
                  >
                    {short}
                  </text>
                  <text
                    x={lx}
                    y={ly + 8}
                    textAnchor="middle"
                    fill="#9AA3B5"
                    fontSize="9"
                    fontFamily="var(--font-body), sans-serif"
                  >
                    {callouts[index]}
                  </text>
                </g>
              );
            })}
          </svg>

          {sixDimensions.map((dim, index) => {
            const angle = (index / sixDimensions.length) * Math.PI * 2 - Math.PI / 2;
            const x = 50 + Math.cos(angle) * 31.5;
            const y = 50 + Math.sin(angle) * 31.5;
            return (
              <button
                key={`hit-${dim.id}`}
                type="button"
                aria-label={dim.label}
                aria-pressed={index === active}
                onClick={() => setActive(index)}
                className="absolute h-11 w-11 -translate-x-1/2 -translate-y-1/2 rounded-full"
                style={{ left: `${x}%`, top: `${y}%` }}
              />
            );
          })}
        </div>

        <div>
          <p className="text-[11px] uppercase tracking-[0.18em] text-teal">Six dimensions</p>
          <p className="mt-3 font-display text-2xl text-off-white md:text-3xl">{current.label}</p>
          <p className="mt-4 max-w-md text-base leading-relaxed text-muted">{current.body}</p>
          <p className="mt-6 text-sm text-muted/80">
            Select a node on the diagram. Dimensions work together — none stands alone as a score
            or KPI.
          </p>
          <ol className="mt-6 grid gap-2 sm:grid-cols-2">
            {sixDimensions.map((dim, index) => {
              const selected = index === active;
              return (
                <li key={dim.id}>
                  <button
                    type="button"
                    onClick={() => setActive(index)}
                    className={`w-full border-l-2 py-1.5 pl-3 text-left text-sm transition ${
                      selected
                        ? "border-teal text-teal"
                        : "border-[rgba(232,236,244,0.14)] text-muted hover:border-teal/40 hover:text-mist"
                    }`}
                  >
                    {dim.label.replace("Systemic ", "")}
                  </button>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </div>
  );
}
