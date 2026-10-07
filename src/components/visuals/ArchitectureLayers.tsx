"use client";

import { useState } from "react";
import { architectureLayers } from "@/lib/content";

export function ArchitectureLayers() {
  const [active, setActive] = useState(0);

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
      <div className="space-y-2">
        {architectureLayers.map((layer, index) => {
          const selected = index === active;
          return (
            <button
              key={layer.id}
              type="button"
              onClick={() => setActive(index)}
              className={`flex w-full items-center gap-4 rounded-sm border px-4 py-3 text-left transition ${
                selected
                  ? "border-teal/45 bg-teal/10"
                  : "border-[rgba(232,236,244,0.08)] bg-white/[0.015] hover:border-[rgba(232,236,244,0.18)]"
              }`}
            >
              <span className="font-mono text-xs text-teal/80">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className={`font-display text-lg ${selected ? "text-off-white" : "text-muted"}`}>
                {layer.label}
              </span>
            </button>
          );
        })}
      </div>

      <div className="relative overflow-hidden rounded-sm border border-[rgba(232,236,244,0.12)] bg-navy-elevated/70 p-6 md:p-8">
        <div
          className="pointer-events-none absolute inset-x-8 top-8 bottom-8 border-l border-teal/25"
          aria-hidden="true"
        />
        <p className="text-[11px] uppercase tracking-[0.18em] text-teal">
          Layer {String(active + 1).padStart(2, "0")}
        </p>
        <h3 className="mt-3 font-display text-3xl text-off-white">
          {architectureLayers[active].label}
        </h3>
        <p className="mt-5 max-w-md text-base leading-relaxed text-muted">
          {architectureLayers[active].body}
        </p>
        <p className="mt-8 text-sm text-muted/80">
          Relationships can move in multiple directions — feedback, propagation and
          context matter as much as sequence.
        </p>
      </div>
    </div>
  );
}
