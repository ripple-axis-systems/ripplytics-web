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
  const src =
    variant === "dark"
      ? "/logos/ripplytics-logo-dark-bg.png"
      : "/logos/ripplytics-logo-light-bg.png";

  const sizeClass =
    size === "footer" ? "h-9 w-auto md:h-10" : "h-11 w-auto md:h-[3.35rem]";

  return (
    <Link
      href="/"
      className={`inline-flex shrink-0 items-center ${className}`}
      aria-label="Ripplytics home"
    >
      <Image
        src={src}
        alt="Ripplytics"
        width={252}
        height={60}
        className={sizeClass}
        priority={size === "nav"}
      />
    </Link>
  );
}
