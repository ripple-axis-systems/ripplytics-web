"use client";

import { useState } from "react";
import { rippleSequence } from "@/lib/content";
import { StageFigure } from "./StageFigures";

export function RippleSequence() {
  const [active, setActive] = useState(0);
  const current = rippleSequence[active];

  return (
    <div className="overflow-hidden rounded-sm border border-[rgba(232,236,244,0.1)] figure-panel">
      <div className="grid gap-0 lg:grid-cols-[0.88fr_1.12fr]">
        {/* Stage list — connected spine */}
        <div className="border-b border-[rgba(232,236,244,0.08)] p-5 md:p-7 lg:border-b-0 lg:border-r">
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
                      selected ? "bg-teal/8" : "hover:bg-white/[0.02]"
                    }`}
                  >
                    <span
                      className={`relative z-10 mt-1.5 h-[11px] w-[11px] shrink-0 rounded-full border transition ${
                        selected
                          ? "border-teal bg-teal shadow-[0_0_0_4px_rgba(15,168,143,0.15)]"
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
        <div className="flex flex-col p-5 md:p-7 lg:p-8" role="tabpanel">
          <div className="mb-5">
            <p className="text-[11px] uppercase tracking-[0.18em] text-teal">
              Stage {String(active + 1).padStart(2, "0")} · {current.label}
            </p>
            <h3 className="mt-2 font-display text-2xl text-off-white md:text-3xl">
              {current.question}
            </h3>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted md:text-base">
              {current.body}
            </p>
          </div>

          <div className="mt-auto overflow-hidden rounded-sm border border-[rgba(232,236,244,0.08)] bg-[rgba(11,15,31,0.45)] px-2 py-3 md:px-4 md:py-4">
            <StageFigure index={active} />
          </div>

          <div className="mt-5 flex flex-wrap gap-1.5" aria-hidden="true">
            {rippleSequence.map((step, index) => (
              <span
                key={step.id}
                className={`h-1 w-7 rounded-full transition-colors ${
                  index <= active ? "bg-teal" : "bg-white/10"
                }`}
              />
            ))}
          </div>
          <p className="mt-3 text-xs leading-relaxed text-muted/75">
            Annotated schematic — educational lens, not a live RipplePoint output.
          </p>
        </div>
      </div>
    </div>
  );
}
