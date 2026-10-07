export function HeroRipple() {
  return (
    <div
      className="relative mx-auto aspect-square w-full max-w-[520px]"
      aria-hidden="true"
    >
      <div className="absolute inset-[8%] rounded-full border border-[rgba(15,168,143,0.18)]" />
      <div className="absolute inset-[18%] rounded-full border border-[rgba(15,168,143,0.14)]" />
      <div className="absolute inset-[28%] rounded-full border border-[rgba(232,236,244,0.08)]" />

      <div className="absolute inset-[12%] rounded-full border border-teal/30 animate-propagate" />
      <div
        className="absolute inset-[12%] rounded-full border border-teal/20 animate-propagate"
        style={{ animationDelay: "1.6s" }}
      />
      <div
        className="absolute inset-[12%] rounded-full border border-teal/10 animate-propagate"
        style={{ animationDelay: "3.2s" }}
      />

      <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full">
        <g stroke="rgba(15,168,143,0.35)" strokeWidth="1" fill="none">
          <path className="animate-path-draw" d="M200 200 L285 118" />
          <path className="animate-path-draw" d="M200 200 L312 210" style={{ animationDelay: "0.25s" }} />
          <path className="animate-path-draw" d="M200 200 L248 298" style={{ animationDelay: "0.45s" }} />
          <path className="animate-path-draw" d="M200 200 L118 286" style={{ animationDelay: "0.65s" }} />
          <path className="animate-path-draw" d="M200 200 L92 168" style={{ animationDelay: "0.85s" }} />
          <path
            className="animate-path-draw"
            d="M285 118 L330 90"
            stroke="rgba(15,168,143,0.22)"
            style={{ animationDelay: "1.1s" }}
          />
          <path
            className="animate-path-draw"
            d="M312 210 L355 240"
            stroke="rgba(15,168,143,0.22)"
            style={{ animationDelay: "1.2s" }}
          />
          <path
            className="animate-path-draw"
            d="M248 298 L270 345"
            stroke="rgba(15,168,143,0.22)"
            style={{ animationDelay: "1.3s" }}
          />
        </g>
        <g>
          <circle cx="200" cy="200" r="7" fill="#0FA88F" className="animate-node-pulse" />
          <circle cx="285" cy="118" r="4" fill="#E8ECF4" opacity="0.85" />
          <circle cx="312" cy="210" r="4" fill="#E8ECF4" opacity="0.75" />
          <circle cx="248" cy="298" r="4" fill="#E8ECF4" opacity="0.7" />
          <circle cx="118" cy="286" r="3.5" fill="#9AA3B5" />
          <circle cx="92" cy="168" r="3.5" fill="#9AA3B5" />
          <circle cx="330" cy="90" r="2.5" fill="#0FA88F" opacity="0.7" />
          <circle cx="355" cy="240" r="2.5" fill="#0FA88F" opacity="0.55" />
          <circle cx="270" cy="345" r="2.5" fill="#0FA88F" opacity="0.45" />
        </g>
      </svg>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(11,15,31,0.55)_78%)]" />
    </div>
  );
}
