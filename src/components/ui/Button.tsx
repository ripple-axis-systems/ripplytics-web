import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const styles: Record<Variant, string> = {
  primary:
    "bg-teal text-[#f2efe8] hover:bg-[#4a6d88] border border-transparent",
  secondary:
    "bg-transparent text-mist border border-[rgba(28,33,40,0.22)] hover:border-teal hover:text-teal",
  ghost: "bg-transparent text-muted hover:text-mist border border-transparent",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  type,
}: {
  href?: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  type?: "button" | "submit";
}) {
  const cls = `inline-flex items-center justify-center gap-2 rounded-sm px-5 py-3 text-sm font-medium tracking-wide transition-colors duration-300 ${styles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type ?? "button"} className={cls}>
      {children}
    </button>
  );
}
