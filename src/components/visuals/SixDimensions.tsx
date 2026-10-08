"use client";

import { useState } from "react";
import { sixDimensions } from "@/lib/content";

export function SixDimensions() {
  const [active, setActive] = useState(0);

  return (
    <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr]">
      <div className="relative mx-auto aspect-square w-full max-w-md" aria-hidden="true">
        <svg viewBox="0 0 320 320" className="h-full w-full">
          <defs>
            <radialGradient id="dim-core" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#0FA88F" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#0FA88F" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="160" cy="160" r="130" fill="url(#dim-core)" />
          <circle
            cx="160"
            cy="160"
            r="108"
            fill="none"
            stroke="rgba(232,236,244,0.1)"
            strokeWidth="1"
          />
          <circle
            cx="160"
            cy="160"
            r="58"
            fill="none"
            stroke="rgba(15,168,143,0.28)"
            strokeWidth="1.25"
          />
          <circle cx="160" cy="160" r="6" fill="#0FA88F" className="animate-node-pulse" />

          {sixDimensions.map((dim, index) => {
            const angle = (index / sixDimensions.length) * Math.PI * 2 - Math.PI / 2;
            const x = 160 + Math.cos(angle) * 108;
            const y = 160 + Math.sin(angle) * 108;
            const selected = index === active;
            const short = dim.label.replace("Systemic ", "");
            return (
              <g key={dim.id}>
                <line
                  x1="160"
                  y1="160"
                  x2={x}
                  y2={y}
                  stroke={selected ? "rgba(15,168,143,0.65)" : "rgba(232,236,244,0.12)"}
                  strokeWidth={selected ? 1.5 : 1}
                />
                <circle
                  cx={x}
                  cy={y}
                  r={selected ? 7 : 4.5}
                  fill={selected ? "#0FA88F" : "#E8ECF4"}
                  opacity={selected ? 1 : 0.7}
                />
                <text
                  x={160 + Math.cos(angle) * 138}
                  y={160 + Math.sin(angle) * 138 + 3}
                  textAnchor="middle"
                  fill={selected ? "#0FA88F" : "#9AA3B5"}
                  fontSize="10"
                  letterSpacing="0.06em"
                  fontFamily="var(--font-body), sans-serif"
                >
                  {short.toUpperCase()}
                </text>
              </g>
            );
          })}
        </svg>

        {/* Invisible hit targets over nodes */}
        {sixDimensions.map((dim, index) => {
          const angle = (index / sixDimensions.length) * Math.PI * 2 - Math.PI / 2;
          const x = 50 + Math.cos(angle) * 33.75;
          const y = 50 + Math.sin(angle) * 33.75;
          return (
            <button
              key={`hit-${dim.id}`}
              type="button"
              aria-label={dim.label}
              onClick={() => setActive(index)}
              className="absolute h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{ left: `${x}%`, top: `${y}%` }}
            />
          );
        })}
      </div>

      <div>
        <div className="flex flex-wrap gap-2">
          {sixDimensions.map((dim, index) => {
            const selected = index === active;
            return (
              <button
                key={dim.id}
                type="button"
                onClick={() => setActive(index)}
                className={`rounded-sm border px-3.5 py-2 text-sm transition ${
                  selected
                    ? "border-teal/50 bg-teal/12 text-teal"
                    : "border-[rgba(232,236,244,0.12)] text-muted hover:text-mist"
                }`}
              >
                {dim.label}
              </button>
            );
          })}
        </div>
        <div className="mt-8 border-l-2 border-teal/50 pl-5">
          <p className="font-display text-2xl text-off-white md:text-3xl">
            {sixDimensions[active].label}
          </p>
          <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
            {sixDimensions[active].body}
          </p>
        </div>
      </div>
    </div>
  );
}
