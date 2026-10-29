/** Theme B2 hero — sketchy risk field (ink contours + transmission paths), not radar orb. */
export function HeroRipple() {
  return (
    <div
      className="relative mx-auto aspect-[5/4] w-full max-w-[580px]"
      aria-hidden="true"
    >
      <div className="absolute inset-0 border border-[rgba(232,236,244,0.1)] bg-[linear-gradient(165deg,rgba(18,24,43,0.95)_0%,rgba(11,15,31,0.88)_55%,rgba(14,20,38,0.92)_100%)]" />

      {/* Quiet field grid */}
      <div
        className="absolute inset-3 opacity-[0.5]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(232,236,244,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(232,236,244,0.04) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />

      <svg viewBox="0 0 520 420" className="absolute inset-0 h-full w-full">
        <defs>
          <linearGradient id="hero-b2-path" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0FA88F" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#0FA88F" stopOpacity="0.28" />
          </linearGradient>
        </defs>

        {/* Hand-drawn contour bands — irregular, sketch energy */}
        <g
          className="animate-sketch-drift"
          fill="none"
          stroke="rgba(15,168,143,0.28)"
          strokeWidth="1.1"
          strokeLinecap="round"
        >
          <path d="M38 318 C95 292, 148 268, 198 238 C255 202, 318 168, 402 148 C445 138, 478 132, 498 128" />
          <path d="M42 288 C108 258, 158 238, 210 208 C268 172, 335 142, 418 118 C455 108, 482 100, 502 96" />
          <path d="M36 348 C110 328, 165 298, 218 262 C278 218, 348 182, 430 162 C462 154, 486 150, 504 148" />
          <path
            d="M48 258 C120 232, 170 210, 222 182 C280 148, 348 118, 428 92"
            stroke="rgba(232,236,244,0.08)"
          />
        </g>

        {/* Primary transmission path — draw-on */}
        <path
          className="animate-path-draw-long"
          d="M68 305 C125 288, 152 262, 186 228 C228 188, 268 172, 308 154 C358 132, 402 118, 452 108"
          fill="none"
          stroke="url(#hero-b2-path)"
          strokeWidth="2.05"
          strokeLinecap="round"
        />

        {/* Branch exposures — dashed ink */}
        <path
          className="animate-path-draw"
          d="M186 228 C208 248, 232 278, 252 312"
          fill="none"
          stroke="rgba(15,168,143,0.45)"
          strokeWidth="1.35"
          strokeDasharray="3.5 4"
          strokeLinecap="round"
          style={{ animationDelay: "0.4s" }}
        />
        <path
          className="animate-path-draw"
          d="M308 154 C336 182, 362 218, 388 258"
          fill="none"
          stroke="rgba(15,168,143,0.32)"
          strokeWidth="1.2"
          strokeDasharray="3.5 4"
          strokeLinecap="round"
          style={{ animationDelay: "0.6s" }}
        />

        {/* Secondary ink strokes / hatch */}
        <g stroke="rgba(232,236,244,0.14)" strokeWidth="0.85" strokeLinecap="round">
          <path d="M142 270 l6 -11" />
          <path d="M220 198 l7 -10" />
          <path d="M276 168 l6 -9" />
          <path d="M360 138 l8 -9" />
          <path d="M252 312 l14 10" />
          <path d="M388 258 l12 11" />
        </g>

        {/* Nodes — origin pulse + decision */}
        <g>
          <circle cx="68" cy="305" r="5.5" fill="#0FA88F" className="animate-node-pulse" />
          <circle cx="68" cy="305" r="12" fill="none" stroke="#0FA88F" strokeOpacity="0.28" />
          <path
            d="M68 293 v6 M62 305 h6"
            stroke="#E8ECF4"
            strokeOpacity="0.35"
            strokeWidth="0.8"
            fill="none"
          />
          <circle cx="186" cy="228" r="4.2" fill="#E8ECF4" opacity="0.85" />
          <circle cx="308" cy="154" r="4.2" fill="#E8ECF4" opacity="0.8" />
          <circle
            cx="452"
            cy="108"
            r="5"
            fill="#0FA88F"
            className="animate-node-pulse"
            style={{ animationDelay: "0.8s" }}
          />
          <circle cx="252" cy="312" r="3.4" fill="#9AA3B5" />
          <circle cx="388" cy="258" r="3.4" fill="#9AA3B5" />
        </g>

        {/* Annotation ticks */}
        <g stroke="rgba(232,236,244,0.28)" strokeWidth="0.9">
          <path d="M68 305 L68 272" />
          <path d="M186 228 L186 196" />
          <path d="M308 154 L308 122" />
          <path d="M452 108 L452 78" />
          <path d="M252 312 L272 332" />
          <path d="M388 258 L408 278" />
        </g>

        <g
          fill="#9AA3B5"
          fontSize="10"
          fontFamily="var(--font-body), sans-serif"
          letterSpacing="0.1em"
        >
          <text x="44" y="262" fill="#0FA88F" fillOpacity="0.95">
            ORIGIN
          </text>
          <text x="156" y="186">SIGNAL</text>
          <text x="274" y="112">PATH</text>
          <text x="418" y="68" fill="#0FA88F" fillOpacity="0.95">
            DECISION
          </text>
          <text x="276" y="348">EXPOSURE</text>
          <text x="412" y="294">ABSORB</text>
        </g>

        {/* Scale / instrument mark */}
        <g stroke="rgba(232,236,244,0.28)" strokeWidth="1" fill="#9AA3B5">
          <path d="M40 382 L148 382" />
          <path d="M40 378 L40 386" />
          <path d="M94 379 L94 385" />
          <path d="M148 378 L148 386" />
          <text
            x="156"
            y="386"
            fontSize="9"
            fontFamily="var(--font-body), sans-serif"
            letterSpacing="0.1em"
            fill="#9AA3B5"
          >
            RISK FIELD
          </text>
        </g>
      </svg>
    </div>
  );
}
