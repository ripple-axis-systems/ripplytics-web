"use client";

import { useState } from "react";
import { rippleSequence } from "@/lib/content";

export function RippleSequence() {
  const [active, setActive] = useState(0);
  const current = rippleSequence[active];

  return (
    <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
      <div>
        {/* Connected vertical spine */}
        <div className="relative">
          <div
            className="absolute left-[15px] top-3 bottom-3 w-px bg-gradient-to-b from-teal/50 via-teal/20 to-white/10"
            aria-hidden="true"
          />
          <div className="flex flex-col gap-1">
            {rippleSequence.map((step, index) => {
              const selected = index === active;
              return (
                <button
                  key={step.id}
                  type="button"
                  onClick={() => setActive(index)}
                  className={`relative flex items-start gap-4 rounded-sm px-1 py-2.5 text-left transition ${
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

      <div className="relative overflow-hidden border border-[rgba(232,236,244,0.12)] bg-navy-elevated/70 p-6 md:p-9">
        <div aria-hidden="true" className="pointer-events-none absolute -right-10 -top-10 opacity-60">
          <svg width="220" height="220" viewBox="0 0 220 220">
            <circle
              cx="110"
              cy="110"
              r={40 + active * 8}
              fill="none"
              stroke="rgba(15,168,143,0.25)"
              strokeWidth="1"
              className="transition-all duration-500"
            />
            <circle
              cx="110"
              cy="110"
              r={24 + active * 5}
              fill="none"
              stroke="rgba(15,168,143,0.18)"
              strokeWidth="1"
            />
            <circle cx="110" cy="110" r="5" fill="#0FA88F" />
          </svg>
        </div>

        <p className="text-[11px] uppercase tracking-[0.18em] text-teal">Risk Path</p>
        <h3 className="mt-3 font-display text-2xl text-off-white md:text-3xl">{current.label}</h3>
        <p className="mt-4 text-lg text-mist/90">{current.question}</p>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-muted md:text-base">
          {current.body}
        </p>

        <div className="mt-8 flex flex-wrap gap-1.5" aria-hidden="true">
          {rippleSequence.map((step, index) => (
            <span
              key={step.id}
              className={`h-1 w-7 rounded-full transition-colors ${
                index <= active ? "bg-teal" : "bg-white/10"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
