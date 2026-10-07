"use client";

import { useState } from "react";
import { sixDimensions } from "@/lib/content";

export function SixDimensions() {
  const [active, setActive] = useState(0);

  return (
    <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
      <div className="relative mx-auto aspect-square w-full max-w-md" aria-hidden="true">
        <div className="absolute inset-[12%] rounded-full border border-[rgba(232,236,244,0.1)]" />
        <div className="absolute inset-[28%] rounded-full border border-teal/20" />
        <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal" />
        {sixDimensions.map((dim, index) => {
          const angle = (index / sixDimensions.length) * Math.PI * 2 - Math.PI / 2;
          const x = 50 + Math.cos(angle) * 38;
          const y = 50 + Math.sin(angle) * 38;
          const selected = index === active;
          return (
            <button
              key={dim.id}
              type="button"
              onClick={() => setActive(index)}
              className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full border px-2.5 py-1 text-[10px] uppercase tracking-[0.12em] transition ${
                selected
                  ? "border-teal bg-teal/15 text-teal"
                  : "border-white/15 bg-navy-elevated text-muted hover:text-mist"
              }`}
              style={{ left: `${x}%`, top: `${y}%` }}
            >
              {dim.label.split(" ").pop()}
            </button>
          );
        })}
      </div>

      <div>
        <div className="grid gap-3 sm:grid-cols-2">
          {sixDimensions.map((dim, index) => {
            const selected = index === active;
            return (
              <button
                key={dim.id}
                type="button"
                onClick={() => setActive(index)}
                className={`rounded-sm border p-4 text-left transition ${
                  selected
                    ? "border-teal/45 bg-teal/10"
                    : "border-[rgba(232,236,244,0.1)] bg-white/[0.02] hover:border-[rgba(232,236,244,0.2)]"
                }`}
              >
                <p className="font-display text-lg text-off-white">{dim.label}</p>
              </button>
            );
          })}
        </div>
        <div className="mt-6 rounded-sm border border-[rgba(232,236,244,0.12)] bg-navy-elevated/60 p-5">
          <p className="text-[11px] uppercase tracking-[0.18em] text-teal">
            {sixDimensions[active].label}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
            {sixDimensions[active].body}
          </p>
        </div>
      </div>
    </div>
  );
}
