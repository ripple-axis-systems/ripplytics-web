import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  children,
  align = "left",
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  children?: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={`${align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"} ${className}`}
    >
      {eyebrow ? (
        <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.22em] text-teal">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-3xl leading-tight text-off-white md:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      {children ? (
        <div className="mt-5 space-y-4 text-base leading-relaxed text-muted md:text-lg">
          {children}
        </div>
      ) : null}
    </div>
  );
}
