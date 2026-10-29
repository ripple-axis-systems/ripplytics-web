/** Theme B2 — full-bleed sketch atmosphere behind hero copy (not a radar orb). */
export function SketchFieldBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Faint graph / field paper */}
      <div
        className="absolute inset-0 opacity-[0.28]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(232,236,244,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(232,236,244,0.055) 1px, transparent 1px)",
          backgroundSize: "34px 34px",
          maskImage: "radial-gradient(ellipse 78% 72% at 72% 42%, black 18%, transparent 80%)",
        }}
      />

      <svg
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full"
      >
        <defs>
          <linearGradient id="b2-ink" x1="0%" y1="0%" x2="100%" y2="40%">
            <stop offset="0%" stopColor="#0FA88F" stopOpacity="0.7" />
            <stop offset="55%" stopColor="#0FA88F" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#E8ECF4" stopOpacity="0.08" />
          </linearGradient>
        </defs>

        {/* Contour / ripple sketches — slow drift */}
        <g
          className="animate-sketch-drift"
          fill="none"
          stroke="rgba(15,168,143,0.28)"
          strokeWidth="1.15"
          strokeLinecap="round"
        >
          <path d="M820 120 C910 145, 980 210, 1040 290 C1095 365, 1180 430, 1320 470" />
          <path d="M790 160 C890 190, 960 250, 1020 330 C1075 400, 1165 455, 1305 500" />
          <path d="M760 210 C870 240, 940 295, 995 370 C1055 445, 1150 490, 1285 540" />
          <path d="M735 255 C845 285, 915 340, 975 410 C1035 480, 1140 520, 1270 565" />
          <path
            d="M740 270 C850 295, 920 355, 970 425 C1030 500, 1135 540, 1260 585"
            stroke="rgba(232,236,244,0.1)"
          />
        </g>

        {/* Transmission / path ink — second drift layer, offset */}
        <g
          className="animate-sketch-drift-alt"
          fill="none"
          stroke="url(#b2-ink)"
          strokeWidth="1.45"
          strokeLinecap="round"
        >
          <path
            className="animate-path-draw-long"
            d="M640 640 C760 560, 860 480, 940 390 C1010 315, 1105 250, 1240 190"
          />
          <path
            d="M680 700 C790 615, 880 530, 955 445 C1030 355, 1130 285, 1280 220"
            stroke="rgba(15,168,143,0.32)"
            strokeDasharray="5 7"
          />
          <path
            d="M600 580 C720 520, 820 450, 900 370 C970 305, 1060 255, 1180 210"
            stroke="rgba(15,168,143,0.16)"
            strokeWidth="1"
          />
        </g>

        {/* Sparse node marks — soft pulse */}
        <g fill="#0FA88F">
          <circle cx="940" cy="390" r="3.4" className="animate-node-pulse" />
          <circle cx="1040" cy="290" r="2.8" className="animate-node-pulse" style={{ animationDelay: "0.5s" }} />
          <circle cx="1240" cy="190" r="3.2" className="animate-node-pulse" style={{ animationDelay: "1s" }} />
          <circle cx="1285" cy="540" r="2.4" fill="#9AA3B5" opacity="0.7" />
          <circle cx="820" cy="120" r="2.2" opacity="0.45" />
        </g>

        {/* Hatch / ink ticks */}
        <g stroke="rgba(232,236,244,0.14)" strokeWidth="0.95">
          <path d="M980 455 l9 -15" />
          <path d="M1010 430 l11 -13" />
          <path d="M1085 340 l10 -12" />
          <path d="M1185 255 l9 -11" />
          <path d="M900 500 l8 -12" />
          <path d="M1120 400 l10 -10" />
        </g>
      </svg>

      {/* Keep left copy legible */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,15,31,0.9)_0%,rgba(11,15,31,0.52)_40%,rgba(11,15,31,0.12)_70%,rgba(11,15,31,0.4)_100%)]" />
    </div>
  );
}
