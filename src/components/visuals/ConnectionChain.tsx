"use client";

import { Reveal } from "@/components/ui/Reveal";

const chain = [
  "Geopolitics",
  "Commodities",
  "Inflation",
  "Policy",
  "Rates / Liquidity",
  "Markets",
  "Businesses / Portfolios",
] as const;

export function ConnectionChain() {
  return (
    <Reveal>
      <div className="overflow-hidden rounded-sm border border-[rgba(232,236,244,0.1)] bg-[linear-gradient(180deg,rgba(18,24,43,0.7),rgba(11,15,31,0.3))] px-4 py-8 md:px-8 md:py-10">
        <svg
          viewBox="0 0 760 100"
          className="mx-auto hidden h-auto w-full max-w-5xl md:block"
          aria-hidden="true"
        >
          <path
            d="M30 50 H730"
            stroke="rgba(15,168,143,0.35)"
            strokeWidth="1.5"
            fill="none"
            className="animate-path-draw"
            strokeDasharray="800"
          />
          {chain.map((node, index) => {
            const x = 40 + index * 110;
            return (
              <g key={node}>
                <circle
                  cx={x}
                  cy="50"
                  r={index === 0 || index === chain.length - 1 ? 6 : 4.5}
                  fill={index === 0 ? "#0FA88F" : "#E8ECF4"}
                  opacity={index === chain.length - 1 ? 0.75 : 1}
                  className={index === 0 ? "animate-node-pulse" : undefined}
                />
                <text
                  x={x}
                  y="78"
                  textAnchor="middle"
                  fill="#9AA3B5"
                  fontSize="10"
                  letterSpacing="0.04em"
                  fontFamily="var(--font-body), sans-serif"
                >
                  {node}
                </text>
              </g>
            );
          })}
        </svg>

        <ol className="flex flex-col gap-0 md:hidden">
          {chain.map((node, index) => (
            <li key={node} className="relative flex items-center gap-4 py-2">
              {index < chain.length - 1 ? (
                <span
                  className="absolute left-[9px] top-7 h-full w-px bg-teal/30"
                  aria-hidden="true"
                />
              ) : null}
              <span className="relative z-10 h-[18px] w-[18px] shrink-0 rounded-full border border-teal/40 bg-navy-elevated" />
              <span className="font-display text-lg text-off-white">{node}</span>
            </li>
          ))}
        </ol>
      </div>
    </Reveal>
  );
}
