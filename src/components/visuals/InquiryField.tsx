"use client";

import { Reveal } from "@/components/ui/Reveal";

const questions = [
  { short: "Origin", full: "Where did the pressure originate?" },
  { short: "Signal", full: "What signals indicate that it is becoming meaningful?" },
  { short: "Connection", full: "What is it connected to?" },
  { short: "Pathway", full: "Through what pathways can it travel?" },
  { short: "Exposure", full: "Where can the consequences become material?" },
  { short: "Absorption", full: "How much pressure can the affected system absorb?" },
  { short: "Regime", full: "What does the wider environment look like?" },
  { short: "Attention", full: "What deserves attention now?" },
];

export function InquiryField() {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
      <Reveal>
        <div className="relative mx-auto aspect-square w-full max-w-md">
          <svg viewBox="0 0 320 320" className="h-full w-full" aria-hidden="true">
            <circle
              cx="160"
              cy="160"
              r="118"
              fill="none"
              stroke="rgba(232,236,244,0.08)"
              strokeWidth="1"
            />
            <circle
              cx="160"
              cy="160"
              r="72"
              fill="none"
              stroke="rgba(15,168,143,0.22)"
              strokeWidth="1"
            />
            <circle cx="160" cy="160" r="8" fill="#0FA88F" className="animate-node-pulse" />
            <text
              x="160"
              y="188"
              textAnchor="middle"
              fill="#E8ECF4"
              fontSize="11"
              letterSpacing="0.14em"
              fontFamily="var(--font-display), sans-serif"
            >
              EVENT
            </text>

            {questions.map((q, index) => {
              const angle = (index / questions.length) * Math.PI * 2 - Math.PI / 2;
              const x = 160 + Math.cos(angle) * 118;
              const y = 160 + Math.sin(angle) * 118;
              const lx = 160 + Math.cos(angle) * 72;
              const ly = 160 + Math.sin(angle) * 72;
              return (
                <g key={q.short}>
                  <line
                    x1={lx}
                    y1={ly}
                    x2={x}
                    y2={y}
                    stroke="rgba(15,168,143,0.35)"
                    strokeWidth="1"
                    className="animate-path-draw"
                    style={{ animationDelay: `${index * 0.08}s` }}
                    strokeDasharray="80"
                  />
                  <circle cx={x} cy={y} r="4" fill="#E8ECF4" opacity="0.85" />
                </g>
              );
            })}
          </svg>
        </div>
      </Reveal>

      <div className="grid gap-3 sm:grid-cols-2">
        {questions.map((q, index) => (
          <Reveal key={q.short} delay={index * 45}>
            <div className="border-l border-teal/40 pl-4 py-1">
              <p className="text-[11px] uppercase tracking-[0.16em] text-teal/80">{q.short}</p>
              <p className="mt-1.5 text-sm leading-snug text-mist/90 md:text-[15px]">{q.full}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
