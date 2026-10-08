import Image from "next/image";
import Link from "next/link";

export function Logo({
  variant = "dark",
  className = "",
  size = "nav",
}: {
  variant?: "dark" | "light";
  className?: string;
  size?: "nav" | "footer";
}) {
  // Cropped marks remove ~43% transparent padding from source PNGs so CSS
  // height maps to the visible wordmark (premium brand scale).
  const src =
    variant === "dark"
      ? "/logos/ripplytics-mark-dark.png"
      : "/logos/ripplytics-mark-light.png";

  // Cropped mark: ~1.5–1.65× previous visible wordmark (source PNGs had ~43% v-pad).
  const sizeClass =
    size === "footer" ? "h-7 w-auto md:h-8" : "h-9 w-auto md:h-10";

  return (
    <Link
      href="/"
      className={`inline-flex shrink-0 items-center ${className}`}
      aria-label="Ripplytics home"
    >
      <Image
        src={src}
        alt="Ripplytics"
        width={220}
        height={54}
        className={sizeClass}
        priority={size === "nav"}
      />
    </Link>
  );
}
