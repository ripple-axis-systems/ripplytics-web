"use client";

import { Reveal } from "@/components/ui/Reveal";

const questions = [
  "Where did it begin?",
  "What changed?",
  "What is connected to it?",
  "How can the pressure travel?",
  "Where can it become material?",
  "What can absorb it?",
  "What could amplify it?",
  "What does the surrounding regime look like?",
  "How confident are we?",
];

export function QuestionOrbit() {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
      <Reveal>
        <div className="relative mx-auto aspect-square w-full max-w-sm">
          <svg viewBox="0 0 300 300" className="h-full w-full" aria-hidden="true">
            <circle
              cx="150"
              cy="150"
              r="110"
              fill="none"
              stroke="rgba(28,33,40,0.08)"
              strokeWidth="1"
            />
            <circle
              cx="150"
              cy="150"
              r="62"
              fill="none"
              stroke="rgba(58,90,114,0.28)"
              strokeWidth="1.25"
            />
            <circle cx="150" cy="150" r="7" fill="#3A5A72" className="animate-node-pulse" />
            <text
              x="150"
              y="175"
              textAnchor="middle"
              fill="#1C2128"
              fontSize="11"
              letterSpacing="0.12em"
              fontFamily="var(--font-display), sans-serif"
            >
              CHANGE
            </text>
            {questions.map((_, index) => {
              const angle = (index / questions.length) * Math.PI * 2 - Math.PI / 2;
              const x = 150 + Math.cos(angle) * 110;
              const y = 150 + Math.sin(angle) * 110;
              return (
                <g key={index}>
                  <line
                    x1="150"
                    y1="150"
                    x2={x}
                    y2={y}
                    stroke="rgba(58,90,114,0.28)"
                    strokeWidth="1"
                  />
                  <circle cx={x} cy={y} r="3.5" fill="#1C2128" opacity="0.8" />
                </g>
              );
            })}
          </svg>
        </div>
      </Reveal>

      <ol className="columns-1 gap-x-8 sm:columns-2">
        {questions.map((q, index) => (
          <Reveal key={q} delay={index * 40}>
            <li className="mb-4 break-inside-avoid border-l border-teal/35 pl-4">
              <span className="text-[11px] uppercase tracking-[0.14em] text-teal/70">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="mt-1 text-[15px] text-mist/90">{q}</p>
            </li>
          </Reveal>
        ))}
      </ol>
    </div>
  );
}
