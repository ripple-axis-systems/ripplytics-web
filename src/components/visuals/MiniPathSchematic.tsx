/** Compact Origin→… path strip for case cards — matches RipplePath visual language. */

const STEPS = ["O", "S", "C", "T", "E", "A", "I", "D"] as const;

/** Highlight a short span of the path relevant to the episode (indices inclusive). */
export function MiniPathSchematic({
  highlight = [0, 4],
  className = "",
}: {
  highlight?: [number, number];
  className?: string;
}) {
  const [from, to] = highlight;
  return (
    <svg
      viewBox="0 0 220 28"
      className={`h-7 w-full max-w-[220px] ${className}`}
      role="img"
      aria-label="Illustrative ripple path schematic"
    >
      <line
        x1="10"
        y1="14"
        x2="210"
        y2="14"
        stroke="rgba(58,90,114,0.25)"
        strokeWidth="1"
      />
      {STEPS.map((letter, i) => {
        const x = 12 + i * 28;
        const on = i >= from && i <= to;
        return (
          <g key={letter}>
            {i < STEPS.length - 1 ? (
              <line
                x1={x + 5}
                y1={14}
                x2={x + 23}
                y2={14}
                stroke={i >= from && i < to ? "rgba(58,90,114,0.7)" : "rgba(28,33,40,0.12)"}
                strokeWidth="1.2"
              />
            ) : null}
            <circle
              cx={x}
              cy={14}
              r={on ? 5 : 3.5}
              fill={on ? "#3A5A72" : "rgba(28,33,40,0.2)"}
            />
            <text
              x={x}
              y={26}
              textAnchor="middle"
              fill={on ? "#3A5A72" : "#5C6570"}
              fontSize="7"
              fontFamily="var(--font-body), sans-serif"
            >
              {letter}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

/** Per-episode highlight spans along O-S-C-T-E-A-I-D */
export const episodePathHighlights: Record<string, [number, number]> = {
  "covid-supply-inflation": [0, 4],
  "energy-shock-2022": [0, 5],
  "svb-banking-2023": [2, 6],
};
