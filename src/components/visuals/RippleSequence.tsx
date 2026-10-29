"use client";

import { useState } from "react";
import { rippleSequence } from "@/lib/content";
import { StageFigure } from "./StageFigures";

export function RippleSequence() {
  const [active, setActive] = useState(0);
  const current = rippleSequence[active];

  return (
    <div className="overflow-hidden rounded-sm border border-[rgba(28,33,40,0.1)] figure-panel">
      <div className="grid gap-0 lg:grid-cols-[0.88fr_1.12fr]">
        {/* Stage list — connected spine */}
        <div className="border-b border-[rgba(28,33,40,0.08)] p-5 md:p-7 lg:border-b-0 lg:border-r">
          <p className="mb-4 text-[11px] uppercase tracking-[0.18em] text-teal">Risk Path</p>
          <div className="relative">
            <div
              className="absolute left-[15px] top-3 bottom-3 w-px bg-gradient-to-b from-teal/50 via-teal/20 to-white/10"
              aria-hidden="true"
            />
            <div className="flex flex-col gap-0.5" role="tablist" aria-label="Risk path stages">
              {rippleSequence.map((step, index) => {
                const selected = index === active;
                return (
                  <button
                    key={step.id}
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    onClick={() => setActive(index)}
                    className={`relative flex items-start gap-4 rounded-sm px-1 py-2 text-left transition ${
                      selected ? "bg-teal/8" : "hover:bg-[rgba(28,33,40,0.035)]"
                    }`}
                  >
                    <span
                      className={`relative z-10 mt-1.5 h-[11px] w-[11px] shrink-0 rounded-full border transition ${
                        selected
                          ? "border-teal bg-teal shadow-[0_0_0_4px_rgba(58,90,114,0.15)]"
                          : index < active
                            ? "border-teal/50 bg-teal/40"
                            : "border-white/25 bg-navy"
                      }`}
                      aria-hidden="true"
                    />
                    <span>
                      <span className="block text-[11px] uppercase tracking-[0.16em] text-teal/70">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={`mt-0.5 block font-display text-lg ${
                          selected ? "text-off-white" : "text-muted"
                        }`}
                      >
                        {step.label}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Annotated figure + copy for selected stage */}
        <div className="flex flex-col p-5 md:p-6 lg:p-7" role="tabpanel">
          <p className="text-[11px] uppercase tracking-[0.18em] text-teal">
            Stage {String(active + 1).padStart(2, "0")} · {current.label}
          </p>
          <h3 className="mt-2 font-display text-xl text-off-white md:text-2xl">
            {current.question}
          </h3>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
            {current.body}
          </p>

          {/* Figure is the primary surface — no nested empty card */}
          <div className="mt-4 -mx-1 md:mt-5">
            <StageFigure index={active} />
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2">
            <div className="flex flex-wrap gap-1.5" aria-hidden="true">
              {rippleSequence.map((step, index) => (
                <span
                  key={step.id}
                  className={`h-1 w-7 rounded-full transition-colors ${
                    index <= active ? "bg-teal" : "bg-[rgba(28,33,40,0.12)]"
                  }`}
                />
              ))}
            </div>
            <p className="text-xs leading-relaxed text-muted/75">
              Annotated schematic — educational lens, not a live RipplePoint output.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
