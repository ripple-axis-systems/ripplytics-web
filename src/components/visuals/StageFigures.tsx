/** Annotated SVG figures for each Risk Path stage — educational schematics, not KPIs. */

import type { ReactNode } from "react";

type FigureProps = { className?: string };

const teal = "#0FA88F";
const mist = "#E8ECF4";
const muted = "#9AA3B5";
const soft = "rgba(232,236,244,0.12)";

function SvgShell({
  idPrefix,
  label,
  className = "",
  children,
}: {
  idPrefix: string;
  label: string;
  className?: string;
  children: (ids: { flow: string; arrow: string }) => ReactNode;
}) {
  const ids = { flow: `${idPrefix}-flow`, arrow: `${idPrefix}-arrow` };
  return (
    <svg
      viewBox="0 0 480 280"
      className={`h-auto w-full ${className}`}
      role="img"
      aria-label={label}
    >
      <defs>
        <linearGradient id={ids.flow} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={teal} stopOpacity="0.35" />
          <stop offset="100%" stopColor={teal} stopOpacity="0.9" />
        </linearGradient>
        <marker
          id={ids.arrow}
          markerWidth="7"
          markerHeight="7"
          refX="6"
          refY="3.5"
          orient="auto"
        >
          <path d="M0,0 L7,3.5 L0,7 Z" fill={teal} opacity="0.85" />
        </marker>
      </defs>
      {children(ids)}
    </svg>
  );
}

/** Origin — starting node with labeled outward pressure paths */
export function OriginFigure({ className }: FigureProps) {
  return (
    <SvgShell
      idPrefix="sf-origin"
      label="Origin: starting pressure with outward paths"
      className={className}
    >
      {(ids) => (
        <>
          <circle cx="120" cy="140" r="54" fill="none" stroke="rgba(15,168,143,0.18)" strokeWidth="1" />
          <circle cx="120" cy="140" r="34" fill="none" stroke="rgba(15,168,143,0.35)" strokeWidth="1.25" />
          <circle cx="120" cy="140" r="10" fill={teal} className="animate-node-pulse" />
          <text
            x="120"
            y="172"
            textAnchor="middle"
            fill={mist}
            fontSize="12"
            fontWeight="600"
            fontFamily="var(--font-display), sans-serif"
          >
            Origin
          </text>
          <text
            x="120"
            y="188"
            textAnchor="middle"
            fill={muted}
            fontSize="10"
            fontFamily="var(--font-body), sans-serif"
          >
            Pressure begins
          </text>

          <line
            x1="154"
            y1="118"
            x2="300"
            y2="58"
            stroke={`url(#${ids.flow})`}
            strokeWidth="1.6"
            markerEnd={`url(#${ids.arrow})`}
          />
          <line
            x1="160"
            y1="140"
            x2="320"
            y2="140"
            stroke={`url(#${ids.flow})`}
            strokeWidth="1.6"
            markerEnd={`url(#${ids.arrow})`}
          />
          <line
            x1="154"
            y1="162"
            x2="300"
            y2="222"
            stroke={`url(#${ids.flow})`}
            strokeWidth="1.6"
            markerEnd={`url(#${ids.arrow})`}
          />

          <circle cx="308" cy="54" r="5" fill={mist} opacity="0.85" />
          <text
            x="320"
            y="48"
            fill={mist}
            fontSize="11"
            fontWeight="600"
            fontFamily="var(--font-display), sans-serif"
          >
            Policy / event
          </text>
          <text x="320" y="62" fill={muted} fontSize="9" fontFamily="var(--font-body), sans-serif">
            First disturbance
          </text>

          <circle cx="328" cy="140" r="5" fill={mist} opacity="0.85" />
          <text
            x="340"
            y="136"
            fill={mist}
            fontSize="11"
            fontWeight="600"
            fontFamily="var(--font-display), sans-serif"
          >
            Market / system
          </text>
          <text x="340" y="150" fill={muted} fontSize="9" fontFamily="var(--font-body), sans-serif">
            Adjacent pressure
          </text>

          <circle cx="308" cy="226" r="5" fill={mist} opacity="0.85" />
          <text
            x="320"
            y="220"
            fill={mist}
            fontSize="11"
            fontWeight="600"
            fontFamily="var(--font-display), sans-serif"
          >
            Behaviour / shift
          </text>
          <text x="320" y="234" fill={muted} fontSize="9" fontFamily="var(--font-body), sans-serif">
            Structural change
          </text>
        </>
      )}
    </SvgShell>
  );
}

/** Signal — evidence markers rising from noise */
export function SignalFigure({ className }: FigureProps) {
  return (
    <SvgShell
      idPrefix="sf-signal"
      label="Signal: evidence emerging from background movement"
      className={className}
    >
      {() => (
        <>
          <path
            d="M40 200 Q70 185, 100 198 T160 195 T220 202 T280 190 T340 200 T400 195 T440 198"
            fill="none"
            stroke={soft}
            strokeWidth="1.5"
          />
          <text x="40" y="220" fill={muted} fontSize="9" fontFamily="var(--font-body), sans-serif">
            Background movement
          </text>

          {[
            { x: 120, h: 70, label: "Indicator" },
            { x: 220, h: 110, label: "Evidence" },
            { x: 320, h: 85, label: "Change" },
          ].map((p) => (
            <g key={p.label}>
              <line
                x1={p.x}
                y1={200}
                x2={p.x}
                y2={200 - p.h}
                stroke={teal}
                strokeWidth="2"
                opacity="0.85"
              />
              <circle cx={p.x} cy={200 - p.h} r="6" fill={teal} />
              <text
                x={p.x}
                y={200 - p.h - 14}
                textAnchor="middle"
                fill={mist}
                fontSize="11"
                fontWeight="600"
                fontFamily="var(--font-display), sans-serif"
              >
                {p.label}
              </text>
            </g>
          ))}

          <text
            x="240"
            y="48"
            textAnchor="middle"
            fill={teal}
            fontSize="10"
            letterSpacing="0.12em"
            fontFamily="var(--font-body), sans-serif"
          >
            MEANINGFUL CHANGE
          </text>
          <line
            x1="140"
            y1="58"
            x2="340"
            y2="58"
            stroke="rgba(15,168,143,0.35)"
            strokeWidth="1"
            strokeDasharray="3 4"
          />
        </>
      )}
    </SvgShell>
  );
}

/** Connection — network of related nodes */
export function ConnectionFigure({ className }: FigureProps) {
  const nodes = [
    { x: 240, y: 130, label: "Event", r: 9, primary: true },
    { x: 110, y: 70, label: "Sector", r: 6 },
    { x: 370, y: 65, label: "Market", r: 6 },
    { x: 90, y: 190, label: "Entity", r: 6 },
    { x: 380, y: 195, label: "Domain", r: 6 },
    { x: 240, y: 230, label: "Dependency", r: 6 },
  ];
  return (
    <SvgShell
      idPrefix="sf-connection"
      label="Connection: related systems around the event"
      className={className}
    >
      {() => (
        <>
          {nodes.slice(1).map((n) => (
            <line
              key={`e-${n.label}`}
              x1={240}
              y1={130}
              x2={n.x}
              y2={n.y}
              stroke="rgba(15,168,143,0.45)"
              strokeWidth="1.4"
            />
          ))}
          <line x1={110} y1={70} x2={90} y2={190} stroke={soft} strokeWidth="1" strokeDasharray="3 4" />
          <line x1={370} y1={65} x2={380} y2={195} stroke={soft} strokeWidth="1" strokeDasharray="3 4" />
          <line x1={90} y1={190} x2={240} y2={230} stroke={soft} strokeWidth="1" strokeDasharray="3 4" />
          <line x1={380} y1={195} x2={240} y2={230} stroke={soft} strokeWidth="1" strokeDasharray="3 4" />

          {nodes.map((n) => (
            <g key={n.label}>
              <circle
                cx={n.x}
                cy={n.y}
                r={n.r}
                fill={n.primary ? teal : mist}
                opacity={n.primary ? 1 : 0.8}
              />
              <text
                x={n.x}
                y={n.y + (n.primary ? 28 : 20)}
                textAnchor="middle"
                fill={n.primary ? mist : muted}
                fontSize={n.primary ? 12 : 10}
                fontWeight={n.primary ? 600 : 400}
                fontFamily="var(--font-display), sans-serif"
              >
                {n.label}
              </text>
            </g>
          ))}
          <text
            x="240"
            y="32"
            textAnchor="middle"
            fill={muted}
            fontSize="10"
            fontFamily="var(--font-body), sans-serif"
          >
            Related systems — not an isolated event
          </text>
        </>
      )}
    </SvgShell>
  );
}

/** Transmission — pathway diagram */
export function TransmissionFigure({ className }: FigureProps) {
  const hops = [
    { x: 50, label: "Source" },
    { x: 155, label: "Channel" },
    { x: 260, label: "Relay" },
    { x: 365, label: "Destination" },
  ];
  return (
    <SvgShell
      idPrefix="sf-transmission"
      label="Transmission: pathways through which pressure travels"
      className={className}
    >
      {(ids) => (
        <>
          <path
            d="M70 120 C120 80, 180 160, 230 110 S320 60, 380 120"
            fill="none"
            stroke={`url(#${ids.flow})`}
            strokeWidth="2.2"
            markerEnd={`url(#${ids.arrow})`}
          />
          <path
            d="M70 160 C130 200, 190 140, 250 180 S330 210, 380 160"
            fill="none"
            stroke="rgba(15,168,143,0.35)"
            strokeWidth="1.4"
            strokeDasharray="5 4"
            markerEnd={`url(#${ids.arrow})`}
          />

          {hops.map((h, i) => (
            <g key={h.label}>
              <circle
                cx={h.x + 20}
                cy={i % 2 === 0 ? 120 : 155}
                r={i === 0 || i === 3 ? 8 : 5.5}
                fill={i === 0 ? teal : mist}
                opacity={0.9}
              />
              <text
                x={h.x + 20}
                y={i % 2 === 0 ? 148 : 183}
                textAnchor="middle"
                fill={mist}
                fontSize="11"
                fontWeight="600"
                fontFamily="var(--font-display), sans-serif"
              >
                {h.label}
              </text>
            </g>
          ))}

          <text x="160" y="58" fill={teal} fontSize="10" fontFamily="var(--font-body), sans-serif">
            Primary path
          </text>
          <text x="200" y="230" fill={muted} fontSize="10" fontFamily="var(--font-body), sans-serif">
            Secondary path
          </text>
          <text
            x="240"
            y="262"
            textAnchor="middle"
            fill={muted}
            fontSize="10"
            fontFamily="var(--font-body), sans-serif"
          >
            Influence moves through pathways — connection alone is not enough
          </text>
        </>
      )}
    </SvgShell>
  );
}

/** Exposure — map-of-impact style schematic */
export function ExposureFigure({ className }: FigureProps) {
  return (
    <SvgShell
      idPrefix="sf-exposure"
      label="Exposure: where pressure can matter across entities"
      className={className}
    >
      {() => (
        <>
          <ellipse cx="200" cy="140" rx="150" ry="95" fill="none" stroke="rgba(15,168,143,0.15)" strokeWidth="1" />
          <ellipse cx="200" cy="140" rx="100" ry="62" fill="none" stroke="rgba(15,168,143,0.28)" strokeWidth="1.2" />
          <ellipse cx="200" cy="140" rx="48" ry="30" fill="rgba(15,168,143,0.12)" stroke={teal} strokeWidth="1.4" />
          <circle cx="200" cy="140" r="7" fill={teal} />
          <text
            x="200"
            y="126"
            textAnchor="middle"
            fill={mist}
            fontSize="10"
            fontWeight="600"
            fontFamily="var(--font-display), sans-serif"
          >
            Origin
          </text>

          {[
            { x: 80, y: 70, label: "Portfolio A", note: "High" },
            { x: 340, y: 75, label: "Sector B", note: "Medium" },
            { x: 70, y: 210, label: "Region C", note: "Low" },
            { x: 350, y: 205, label: "Entity D", note: "High" },
          ].map((e) => (
            <g key={e.label}>
              <circle cx={e.x} cy={e.y} r="5" fill={mist} opacity="0.85" />
              <text
                x={e.x + (e.x < 200 ? -10 : 10)}
                y={e.y - 8}
                textAnchor={e.x < 200 ? "end" : "start"}
                fill={mist}
                fontSize="11"
                fontWeight="600"
                fontFamily="var(--font-display), sans-serif"
              >
                {e.label}
              </text>
              <text
                x={e.x + (e.x < 200 ? -10 : 10)}
                y={e.y + 6}
                textAnchor={e.x < 200 ? "end" : "start"}
                fill={muted}
                fontSize="9"
                fontFamily="var(--font-body), sans-serif"
              >
                Exposure: {e.note}
              </text>
            </g>
          ))}

          <text
            x="200"
            y="258"
            textAnchor="middle"
            fill={muted}
            fontSize="10"
            fontFamily="var(--font-body), sans-serif"
          >
            Same event — different relevance by exposure
          </text>
        </>
      )}
    </SvgShell>
  );
}

/** Absorption — capacity / buffer schematic */
export function AbsorptionFigure({ className }: FigureProps) {
  return (
    <SvgShell
      idPrefix="sf-absorption"
      label="Absorption: what can take the shock versus what may amplify it"
      className={className}
    >
      {(ids) => (
        <>
          <path
            d="M40 140 L140 140"
            stroke={`url(#${ids.flow})`}
            strokeWidth="2"
            markerEnd={`url(#${ids.arrow})`}
          />
          <text x="70" y="128" fill={muted} fontSize="10" fontFamily="var(--font-body), sans-serif">
            Pressure
          </text>

          <rect
            x="150"
            y="70"
            width="120"
            height="140"
            rx="4"
            fill="rgba(15,168,143,0.08)"
            stroke={teal}
            strokeWidth="1.4"
          />
          <text
            x="210"
            y="100"
            textAnchor="middle"
            fill={mist}
            fontSize="12"
            fontWeight="600"
            fontFamily="var(--font-display), sans-serif"
          >
            System
          </text>
          <text
            x="210"
            y="118"
            textAnchor="middle"
            fill={muted}
            fontSize="9"
            fontFamily="var(--font-body), sans-serif"
          >
            Absorb · Adapt
          </text>
          <text
            x="210"
            y="134"
            textAnchor="middle"
            fill={muted}
            fontSize="9"
            fontFamily="var(--font-body), sans-serif"
          >
            Amplify · Fail
          </text>

          <path
            d="M270 100 L380 70"
            stroke="rgba(15,168,143,0.55)"
            strokeWidth="1.4"
            markerEnd={`url(#${ids.arrow})`}
          />
          <path
            d="M270 140 L390 140"
            stroke="rgba(15,168,143,0.55)"
            strokeWidth="1.4"
            markerEnd={`url(#${ids.arrow})`}
          />
          <path
            d="M270 180 L380 210"
            stroke="rgba(232,236,244,0.35)"
            strokeWidth="1.4"
            markerEnd={`url(#${ids.arrow})`}
          />

          <text
            x="390"
            y="66"
            fill={mist}
            fontSize="11"
            fontWeight="600"
            fontFamily="var(--font-display), sans-serif"
          >
            Resists
          </text>
          <text
            x="400"
            y="144"
            fill={mist}
            fontSize="11"
            fontWeight="600"
            fontFamily="var(--font-display), sans-serif"
          >
            Adapts
          </text>
          <text
            x="390"
            y="214"
            fill={muted}
            fontSize="11"
            fontWeight="600"
            fontFamily="var(--font-display), sans-serif"
          >
            Amplifies
          </text>

          <text
            x="240"
            y="250"
            textAnchor="middle"
            fill={muted}
            fontSize="10"
            fontFamily="var(--font-body), sans-serif"
          >
            Absorption changes the outcome
          </text>
        </>
      )}
    </SvgShell>
  );
}

/** Impact — consequence fan-out */
export function ImpactFigure({ className }: FigureProps) {
  return (
    <SvgShell
      idPrefix="sf-impact"
      label="Impact: resulting consequences across the system"
      className={className}
    >
      {(ids) => (
        <>
          <circle cx="100" cy="140" r="8" fill={teal} />
          <text
            x="100"
            y="168"
            textAnchor="middle"
            fill={mist}
            fontSize="11"
            fontWeight="600"
            fontFamily="var(--font-display), sans-serif"
          >
            Shock
          </text>

          {[
            { y: 60, label: "Market consequence", note: "Prices · liquidity" },
            { y: 110, label: "Operational consequence", note: "Supply · capacity" },
            { y: 160, label: "Policy consequence", note: "Response · rules" },
            { y: 210, label: "Confidence consequence", note: "Sentiment · trust" },
          ].map((b) => (
            <g key={b.label}>
              <path
                d={`M110 140 Q180 ${b.y}, 260 ${b.y}`}
                fill="none"
                stroke="rgba(15,168,143,0.55)"
                strokeWidth="1.5"
                markerEnd={`url(#${ids.arrow})`}
              />
              <circle cx="268" cy={b.y} r="5" fill={mist} opacity="0.85" />
              <text
                x="282"
                y={b.y - 4}
                fill={mist}
                fontSize="11"
                fontWeight="600"
                fontFamily="var(--font-display), sans-serif"
              >
                {b.label}
              </text>
              <text x="282" y={b.y + 10} fill={muted} fontSize="9" fontFamily="var(--font-body), sans-serif">
                {b.note}
              </text>
            </g>
          ))}
        </>
      )}
    </SvgShell>
  );
}

/** Decision — attention / focus lens */
export function DecisionFigure({ className }: FigureProps) {
  return (
    <SvgShell
      idPrefix="sf-decision"
      label="Decision: focusing attention on what deserves judgement"
      className={className}
    >
      {() => (
        <>
          {[
            { x: 80, y: 80 },
            { x: 160, y: 55 },
            { x: 240, y: 70 },
            { x: 320, y: 50 },
            { x: 400, y: 85 },
            { x: 100, y: 200 },
            { x: 200, y: 220 },
            { x: 300, y: 210 },
            { x: 380, y: 190 },
          ].map((p, i) => (
            <circle
              key={i}
              cx={p.x}
              cy={p.y}
              r="4"
              fill={soft}
              stroke={muted}
              strokeWidth="0.5"
              opacity="0.5"
            />
          ))}

          <circle cx="240" cy="140" r="72" fill="rgba(15,168,143,0.06)" stroke={teal} strokeWidth="1.6" />
          <circle
            cx="240"
            cy="140"
            r="42"
            fill="none"
            stroke="rgba(15,168,143,0.4)"
            strokeWidth="1"
            strokeDasharray="4 3"
          />
          <circle cx="240" cy="140" r="8" fill={teal} className="animate-node-pulse" />

          <text
            x="240"
            y="128"
            textAnchor="middle"
            fill={mist}
            fontSize="11"
            fontWeight="600"
            fontFamily="var(--font-display), sans-serif"
          >
            Attention
          </text>
          <text
            x="240"
            y="232"
            textAnchor="middle"
            fill={mist}
            fontSize="12"
            fontWeight="600"
            fontFamily="var(--font-display), sans-serif"
          >
            What deserves judgement
          </text>
          <text
            x="240"
            y="250"
            textAnchor="middle"
            fill={muted}
            fontSize="10"
            fontFamily="var(--font-body), sans-serif"
          >
            Intelligence narrows the field — decision remains human
          </text>
        </>
      )}
    </SvgShell>
  );
}

const figures = [
  OriginFigure,
  SignalFigure,
  ConnectionFigure,
  TransmissionFigure,
  ExposureFigure,
  AbsorptionFigure,
  ImpactFigure,
  DecisionFigure,
] as const;

export function StageFigure({ index, className }: { index: number; className?: string }) {
  const Figure = figures[Math.min(Math.max(index, 0), figures.length - 1)];
  return <Figure className={className} />;
}
