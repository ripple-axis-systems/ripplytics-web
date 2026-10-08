export function HeroRipple() {
  return (
    <div
      className="relative mx-auto aspect-square w-full max-w-[560px]"
      aria-hidden="true"
    >
      {/* Soft field */}
      <div className="absolute inset-[6%] rounded-full bg-[radial-gradient(circle_at_center,rgba(15,168,143,0.12)_0%,transparent_62%)]" />
      <div className="absolute inset-[10%] rounded-full border border-[rgba(15,168,143,0.16)]" />
      <div className="absolute inset-[22%] rounded-full border border-[rgba(15,168,143,0.12)]" />
      <div className="absolute inset-[34%] rounded-full border border-[rgba(232,236,244,0.07)]" />

      {/* Propagation rings */}
      <div className="absolute inset-[14%] rounded-full border border-teal/35 animate-propagate" />
      <div
        className="absolute inset-[14%] rounded-full border border-teal/22 animate-propagate"
        style={{ animationDelay: "1.5s" }}
      />
      <div
        className="absolute inset-[14%] rounded-full border border-teal/12 animate-propagate"
        style={{ animationDelay: "3s" }}
      />

      <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full">
        <defs>
          <linearGradient id="hero-edge" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0FA88F" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#E8ECF4" stopOpacity="0.12" />
          </linearGradient>
        </defs>

        {/* Secondary lattice — quiet structure */}
        <g stroke="rgba(232,236,244,0.06)" strokeWidth="0.75" fill="none">
          <path d="M70 140 L140 110 L200 200" />
          <path d="M330 120 L280 160 L200 200" />
          <path d="M340 280 L270 260 L200 200" />
          <path d="M80 270 L130 250 L200 200" />
        </g>

        <g stroke="url(#hero-edge)" strokeWidth="1.15" fill="none">
          <path className="animate-path-draw" d="M200 200 L278 108" />
          <path
            className="animate-path-draw"
            d="M200 200 L318 188"
            style={{ animationDelay: "0.2s" }}
          />
          <path
            className="animate-path-draw"
            d="M200 200 L292 278"
            style={{ animationDelay: "0.4s" }}
          />
          <path
            className="animate-path-draw"
            d="M200 200 L168 312"
            style={{ animationDelay: "0.55s" }}
          />
          <path
            className="animate-path-draw"
            d="M200 200 L98 248"
            style={{ animationDelay: "0.7s" }}
          />
          <path
            className="animate-path-draw"
            d="M200 200 L108 142"
            style={{ animationDelay: "0.85s" }}
          />
          <path
            className="animate-path-draw"
            d="M278 108 L332 72"
            stroke="rgba(15,168,143,0.28)"
            style={{ animationDelay: "1.05s" }}
          />
          <path
            className="animate-path-draw"
            d="M318 188 L362 210"
            stroke="rgba(15,168,143,0.24)"
            style={{ animationDelay: "1.15s" }}
          />
          <path
            className="animate-path-draw"
            d="M292 278 L318 330"
            stroke="rgba(15,168,143,0.22)"
            style={{ animationDelay: "1.25s" }}
          />
          <path
            className="animate-path-draw"
            d="M98 248 L58 278"
            stroke="rgba(15,168,143,0.2)"
            style={{ animationDelay: "1.3s" }}
          />
        </g>

        <g>
          <circle cx="200" cy="200" r="8" fill="#0FA88F" className="animate-node-pulse" />
          <circle cx="200" cy="200" r="16" fill="none" stroke="#0FA88F" strokeOpacity="0.25" />
          <circle cx="278" cy="108" r="4.5" fill="#E8ECF4" opacity="0.9" />
          <circle cx="318" cy="188" r="4" fill="#E8ECF4" opacity="0.8" />
          <circle cx="292" cy="278" r="4" fill="#E8ECF4" opacity="0.75" />
          <circle cx="168" cy="312" r="3.5" fill="#9AA3B5" />
          <circle cx="98" cy="248" r="3.5" fill="#9AA3B5" />
          <circle cx="108" cy="142" r="3.5" fill="#9AA3B5" />
          <circle cx="332" cy="72" r="2.8" fill="#0FA88F" opacity="0.75" />
          <circle cx="362" cy="210" r="2.6" fill="#0FA88F" opacity="0.55" />
          <circle cx="318" cy="330" r="2.6" fill="#0FA88F" opacity="0.45" />
          <circle cx="58" cy="278" r="2.4" fill="#0FA88F" opacity="0.4" />
        </g>

        {/* Labels — restrained, not stickers */}
        <g
          fill="#9AA3B5"
          fontSize="9"
          fontFamily="var(--font-body), sans-serif"
          letterSpacing="0.08em"
        >
          <text x="338" y="68" fill="#0FA88F" fillOpacity="0.85">
            IMPACT
          </text>
          <text x="48" y="300">EXPOSURE</text>
          <text x="152" y="348">ABSORB</text>
        </g>
      </svg>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_32%,rgba(11,15,31,0.55)_80%)]" />
    </div>
  );
}
