"use client";

import { Reveal } from "@/components/ui/Reveal";

const stages = [
  {
    stage: "Today",
    title: "Purpose-built intelligence applications.",
  },
  {
    stage: "Next",
    title: "Connected intelligence across domains.",
  },
  {
    stage: "Longer term",
    title: "An intelligence infrastructure for understanding interconnected risk.",
  },
] as const;

export function AmbitionArc() {
  return (
    <Reveal>
      <div className="relative overflow-hidden rounded-sm border border-[rgba(232,236,244,0.1)] bg-[linear-gradient(180deg,rgba(18,24,43,0.7),rgba(11,15,31,0.25))] px-5 py-10 md:px-10 md:py-12">
        <svg
          viewBox="0 0 720 120"
          className="mx-auto mb-10 hidden h-auto w-full max-w-4xl md:block"
          aria-hidden="true"
        >
          <path
            d="M60 90 C180 20, 300 20, 360 60 S540 110, 660 40"
            fill="none"
            stroke="rgba(15,168,143,0.45)"
            strokeWidth="2"
            className="animate-path-draw"
            strokeDasharray="800"
          />
          {[60, 360, 660].map((x, i) => (
            <g key={x}>
              <circle
                cx={x}
                cy={i === 0 ? 88 : i === 1 ? 58 : 42}
                r={i === 2 ? 6 : 7}
                fill={i === 0 ? "#0FA88F" : "#E8ECF4"}
                opacity={i === 2 ? 0.65 : 1}
                className={i === 0 ? "animate-node-pulse" : undefined}
              />
            </g>
          ))}
        </svg>

        <div className="grid gap-8 md:grid-cols-3 md:gap-6">
          {stages.map((item, index) => (
            <div key={item.stage} className="relative">
              <p className="text-[11px] uppercase tracking-[0.18em] text-teal">
                {String(index + 1).padStart(2, "0")} · {item.stage}
              </p>
              <p className="mt-3 font-display text-xl leading-snug text-off-white md:text-2xl">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
