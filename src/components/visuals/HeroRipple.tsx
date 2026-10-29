/** Theme B hero — annotated risk field map (not radar orb). */
export function HeroRipple() {
  return (
    <div
      className="relative mx-auto aspect-[5/4] w-full max-w-[580px]"
      aria-hidden="true"
    >
      <div className="absolute inset-0 border border-[rgba(28,33,40,0.14)] bg-[linear-gradient(165deg,#f2efe8_0%,#e8e4db_55%,#ddd8cf_100%)]" />

      {/* Quiet print grid */}
      <div
        className="absolute inset-3 opacity-[0.45]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(28,33,40,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(28,33,40,0.05) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <svg viewBox="0 0 520 420" className="absolute inset-0 h-full w-full">
        <defs>
          <linearGradient id="hero-path" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3A5A72" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#3A5A72" stopOpacity="0.25" />
          </linearGradient>
        </defs>

        {/* Contour / field bands */}
        <g fill="none" stroke="rgba(58,90,114,0.14)" strokeWidth="1">
          <path d="M40 310 C120 290, 180 250, 240 210 C300 170, 360 140, 480 120" />
          <path d="M36 280 C130 255, 190 220, 250 185 C310 150, 380 118, 484 95" />
          <path d="M48 340 C140 325, 200 290, 255 250 C320 200, 390 165, 476 150" />
        </g>

        {/* Annotated decision path */}
        <path
          className="animate-path-draw"
          d="M72 300 C130 285, 155 250, 188 220 C230 182, 268 168, 312 150 C360 130, 400 118, 448 108"
          fill="none"
          stroke="url(#hero-path)"
          strokeWidth="2"
        />
        <path
          className="animate-path-draw"
          d="M188 220 C210 235, 235 268, 258 302"
          fill="none"
          stroke="rgba(58,90,114,0.45)"
          strokeWidth="1.4"
          strokeDasharray="4 3"
          style={{ animationDelay: "0.35s" }}
        />
        <path
          className="animate-path-draw"
          d="M312 150 C340 175, 365 210, 392 248"
          fill="none"
          stroke="rgba(58,90,114,0.35)"
          strokeWidth="1.25"
          strokeDasharray="4 3"
          style={{ animationDelay: "0.55s" }}
        />

        {/* Nodes along path */}
        <g>
          <circle cx="72" cy="300" r="5.5" fill="#3A5A72" className="animate-node-pulse" />
          <circle cx="72" cy="300" r="11" fill="none" stroke="#3A5A72" strokeOpacity="0.28" />
          <circle cx="188" cy="220" r="4.5" fill="#1C2128" />
          <circle cx="312" cy="150" r="4.5" fill="#1C2128" />
          <circle cx="448" cy="108" r="5" fill="#3A5A72" />
          <circle cx="258" cy="302" r="3.5" fill="#5C6570" />
          <circle cx="392" cy="248" r="3.5" fill="#5C6570" />
        </g>

        {/* Callout ticks + labels — print annotations */}
        <g stroke="rgba(28,33,40,0.35)" strokeWidth="0.9">
          <path d="M72 300 L72 268" />
          <path d="M188 220 L188 188" />
          <path d="M312 150 L312 118" />
          <path d="M448 108 L448 78" />
          <path d="M258 302 L278 322" />
          <path d="M392 248 L412 268" />
        </g>

        <g
          fill="#5C6570"
          fontSize="10"
          fontFamily="var(--font-body), sans-serif"
          letterSpacing="0.1em"
        >
          <text x="48" y="258" fill="#3A5A72" fillOpacity="0.95">
            ORIGIN
          </text>
          <text x="158" y="178">SIGNAL</text>
          <text x="278" y="108">PATH</text>
          <text x="418" y="68" fill="#3A5A72" fillOpacity="0.95">
            DECISION
          </text>
          <text x="282" y="338">EXPOSURE</text>
          <text x="416" y="284">ABSORB</text>
        </g>

        {/* Scale bar — print instrument feel */}
        <g stroke="rgba(28,33,40,0.35)" strokeWidth="1" fill="#5C6570">
          <path d="M40 380 L140 380" />
          <path d="M40 376 L40 384" />
          <path d="M90 377 L90 383" />
          <path d="M140 376 L140 384" />
          <text
            x="148"
            y="384"
            fontSize="9"
            fontFamily="var(--font-body), sans-serif"
            letterSpacing="0.08em"
            fill="#5C6570"
          >
            FIELD MAP
          </text>
        </g>
      </svg>
    </div>
  );
}
