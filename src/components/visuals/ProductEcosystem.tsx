import Link from "next/link";
import { products } from "@/lib/products";
import { StatusBadge } from "@/components/ui/StatusBadge";

export function ProductEcosystem() {
  const [primary, ...rest] = products;

  return (
    <div className="grid gap-5 lg:grid-cols-[1.35fr_1fr]">
      <Link
        href={primary.route}
        className="group relative overflow-hidden rounded-sm border border-teal/35 bg-gradient-to-br from-teal/15 via-navy-elevated to-navy p-7 transition hover:border-teal/60 md:p-9"
      >
        <div
          className="pointer-events-none absolute -right-8 top-0 h-40 w-40 rounded-full border border-teal/25 opacity-70"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -right-2 top-8 h-24 w-24 rounded-full border border-teal/20"
          aria-hidden="true"
        />
        <StatusBadge status={primary.status} />
        <h3 className="mt-5 font-display text-3xl text-off-white md:text-4xl">{primary.name}</h3>
        <p className="mt-2 text-sm uppercase tracking-[0.14em] text-teal/90">{primary.category}</p>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-muted">{primary.description}</p>
        <span className="mt-8 inline-flex text-sm text-teal transition group-hover:translate-x-1">
          {primary.cta.label} →
        </span>
      </Link>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
        {rest.map((product, index) => (
          <Link
            key={product.slug}
            href={product.route}
            className="rounded-sm border border-[rgba(232,236,244,0.1)] bg-white/[0.02] p-5 transition hover:border-[rgba(232,236,244,0.22)] hover:bg-white/[0.035]"
            style={{ marginLeft: index % 2 === 1 ? undefined : undefined }}
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="font-display text-xl text-off-white">{product.name}</h3>
                <p className="mt-1 text-xs uppercase tracking-[0.12em] text-muted">
                  {product.category}
                </p>
              </div>
              <StatusBadge status={product.status} />
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted">{product.tagline}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
