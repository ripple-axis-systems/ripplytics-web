"use client";

import { Reveal } from "@/components/ui/Reveal";

const signals = [
  "Markets move.",
  "Policies change.",
  "Conflicts emerge.",
  "Currencies react.",
  "Commodity prices shift.",
  "Supply chains tighten.",
  "Investor behaviour changes.",
];

export function SignalConnect() {
  return (
    <div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {signals.map((signal, index) => (
          <Reveal key={signal} delay={index * 70}>
            <div className="relative rounded-sm border border-[rgba(232,236,244,0.1)] bg-white/[0.02] px-4 py-4 text-sm text-mist/90">
              <span className="mb-3 block h-1.5 w-1.5 rounded-full bg-teal" aria-hidden="true" />
              {signal}
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal delay={120}>
        <div className="mt-8 rounded-sm border border-teal/25 bg-teal/5 px-5 py-5 text-base text-mist md:text-lg">
          The information is there.
          <span className="mt-2 block text-muted">
            The difficult part is understanding what it means together.
          </span>
        </div>
      </Reveal>
    </div>
  );
}
