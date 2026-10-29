/** Theme B2 — full-bleed sketch atmosphere behind hero copy (not a radar orb). */
export function SketchFieldBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Faint graph / field paper */}
      <div
        className="absolute inset-0 opacity-[0.22]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(232,236,244,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(232,236,244,0.045) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
          maskImage: "radial-gradient(ellipse 75% 70% at 70% 45%, black 20%, transparent 78%)",
        }}
      />

      <svg
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full"
      >
        <defs>
          <linearGradient id="b2-ink" x1="0%" y1="0%" x2="100%" y2="40%">
            <stop offset="0%" stopColor="#0FA88F" stopOpacity="0.55" />
            <stop offset="55%" stopColor="#0FA88F" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#E8ECF4" stopOpacity="0.06" />
          </linearGradient>
        </defs>

        {/* Contour / ripple sketches — slow drift */}
        <g
          className="animate-sketch-drift"
          fill="none"
          stroke="rgba(15,168,143,0.18)"
          strokeWidth="1.1"
          strokeLinecap="round"
        >
          <path d="M820 120 C910 145, 980 210, 1040 290 C1095 365, 1180 430, 1320 470" />
          <path d="M790 160 C890 190, 960 250, 1020 330 C1075 400, 1165 455, 1305 500" />
          <path d="M760 210 C870 240, 940 295, 995 370 C1055 445, 1150 490, 1285 540" />
          <path
            d="M740 270 C850 295, 920 355, 970 425 C1030 500, 1135 540, 1260 585"
            stroke="rgba(232,236,244,0.08)"
          />
        </g>

        {/* Transmission / path ink — second drift layer, offset */}
        <g
          className="animate-sketch-drift-alt"
          fill="none"
          stroke="url(#b2-ink)"
          strokeWidth="1.35"
          strokeLinecap="round"
        >
          <path d="M640 640 C760 560, 860 480, 940 390 C1010 315, 1105 250, 1240 190" />
          <path
            d="M680 700 C790 615, 880 530, 955 445 C1030 355, 1130 285, 1280 220"
            stroke="rgba(15,168,143,0.22)"
            strokeDasharray="5 7"
          />
        </g>

        {/* Sparse node marks */}
        <g fill="#0FA88F" opacity="0.55">
          <circle cx="940" cy="390" r="3.2" />
          <circle cx="1040" cy="290" r="2.6" />
          <circle cx="1240" cy="190" r="3" />
          <circle cx="1285" cy="540" r="2.2" fill="#9AA3B5" />
        </g>

        {/* Hatch / ink ticks */}
        <g stroke="rgba(232,236,244,0.1)" strokeWidth="0.9">
          <path d="M980 455 l8 -14" />
          <path d="M1010 430 l10 -12" />
          <path d="M1085 340 l9 -11" />
          <path d="M1185 255 l8 -10" />
        </g>
      </svg>

      {/* Keep left copy legible */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,15,31,0.88)_0%,rgba(11,15,31,0.55)_42%,rgba(11,15,31,0.18)_72%,rgba(11,15,31,0.45)_100%)]" />
    </div>
  );
}
