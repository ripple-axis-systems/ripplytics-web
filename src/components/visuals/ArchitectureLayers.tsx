"use client";

import { useState } from "react";
import { architectureLayers } from "@/lib/content";

export function ArchitectureLayers() {
  const [active, setActive] = useState(0);
  const progress = ((active + 1) / architectureLayers.length) * 100;

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_1.05fr]">
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
                  : "border-[rgba(28,33,40,0.08)] bg-[rgba(28,33,40,0.03)] hover:border-[rgba(28,33,40,0.18)]"
              }`}
            >
              <span className="font-mono text-xs text-teal/80">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className={`font-display text-lg ${selected ? "text-off-white" : "text-muted"}`}>
                {layer.label}
              </span>
              {selected ? (
                <span className="ml-auto h-1.5 w-1.5 rounded-full bg-teal animate-node-pulse" aria-hidden="true" />
              ) : null}
            </button>
          );
        })}
      </div>

      <div className="relative overflow-hidden rounded-sm border border-[rgba(28,33,40,0.12)] bg-[radial-gradient(ellipse_at_90%_10%,rgba(58,90,114,0.12),transparent_50%),linear-gradient(165deg,#f2efe8,#e4e1d9)] p-6 md:p-8">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal/50 to-transparent"
          aria-hidden="true"
        />
        <div className="mb-6 h-1 overflow-hidden rounded-full bg-[rgba(28,33,40,0.08)]" aria-hidden="true">
          <div
            className="h-full rounded-full bg-teal/70 transition-[width] duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-[11px] uppercase tracking-[0.18em] text-teal">
          Layer {String(active + 1).padStart(2, "0")} of{" "}
          {String(architectureLayers.length).padStart(2, "0")}
        </p>
        <h3 className="mt-3 font-display text-3xl text-off-white">
          {architectureLayers[active].label}
        </h3>
        <p className="mt-5 max-w-md text-base leading-relaxed text-muted">
          {architectureLayers[active].body}
        </p>
        <p className="mt-8 text-sm text-muted/80">
          Outcome of this layer: clearer inputs for human judgement — relationships can move in
          multiple directions; feedback and context matter as much as sequence.
        </p>
        <div
          className="pointer-events-none absolute -bottom-16 -right-10 h-48 w-48 rounded-full border border-teal/15"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-8 -right-2 h-28 w-28 rounded-full border border-teal/10"
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
