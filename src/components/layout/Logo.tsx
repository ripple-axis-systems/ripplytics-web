import Image from "next/image";
import Link from "next/link";

export function Logo({
  variant = "dark",
  className = "",
}: {
  variant?: "dark" | "light";
  className?: string;
}) {
  const src =
    variant === "dark"
      ? "/logos/ripplytics-logo-dark-bg.png"
      : "/logos/ripplytics-logo-light-bg.png";

  return (
    <Link href="/" className={`inline-flex items-center ${className}`} aria-label="Ripplytics home">
      <Image
        src={src}
        alt="Ripplytics"
        width={168}
        height={40}
        className="h-8 w-auto md:h-9"
        priority
      />
    </Link>
  );
}
