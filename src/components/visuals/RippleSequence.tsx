"use client";

import { useState } from "react";
import { rippleSequence } from "@/lib/content";

export function RippleSequence() {
  const [active, setActive] = useState(0);
  const current = rippleSequence[active];

  return (
    <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
      <div className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible">
        {rippleSequence.map((step, index) => {
          const selected = index === active;
          return (
            <button
              key={step.id}
              type="button"
              onClick={() => setActive(index)}
              className={`min-w-[9.5rem] rounded-sm border px-4 py-3 text-left transition-colors lg:min-w-0 ${
                selected
                  ? "border-teal/50 bg-teal/10 text-off-white"
                  : "border-[rgba(232,236,244,0.1)] bg-white/[0.02] text-muted hover:border-[rgba(232,236,244,0.22)] hover:text-mist"
              }`}
            >
              <span className="block text-[11px] uppercase tracking-[0.16em] text-teal/80">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="mt-1 block font-display text-lg">{step.label}</span>
            </button>
          );
        })}
      </div>

      <div className="rounded-sm border border-[rgba(232,236,244,0.12)] bg-navy-elevated/70 p-6 md:p-8">
        <p className="text-[11px] uppercase tracking-[0.18em] text-teal">Risk Path</p>
        <h3 className="mt-3 font-display text-2xl text-off-white md:text-3xl">
          {current.label}
        </h3>
        <p className="mt-4 text-lg text-mist/90">{current.question}</p>
        <p className="mt-4 text-sm leading-relaxed text-muted md:text-base">{current.body}</p>

        <div className="mt-8 flex flex-wrap gap-2" aria-hidden="true">
          {rippleSequence.map((step, index) => (
            <span
              key={step.id}
              className={`h-1.5 w-8 rounded-full transition-colors ${
                index <= active ? "bg-teal" : "bg-white/10"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
