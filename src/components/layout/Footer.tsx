import Link from "next/link";
import { footerExplore, footerProducts } from "@/lib/navigation";
import { brand } from "@/lib/theme";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-[rgba(232,236,244,0.08)] bg-[#090d1a]">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-[1.4fr_1fr_1fr] md:px-8">
        <div>
          <Logo size="footer" />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">
            {brand.positioning}
          </p>
          <p className="mt-3 text-sm text-teal">{brand.tagline}</p>
        </div>

        <div>
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted">
            Explore
          </p>
          <ul className="mt-4 space-y-2.5">
            {footerExplore.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-mist/80 transition-colors hover:text-teal">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted">
            Products
          </p>
          <ul className="mt-4 space-y-2.5">
            {footerProducts.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-mist/80 transition-colors hover:text-teal">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-[rgba(232,236,244,0.08)]">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-xs text-muted md:flex-row md:items-center md:justify-between md:px-8">
          <p>{brand.legalName}</p>
          <p>© {new Date().getFullYear()} Ripplytics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
