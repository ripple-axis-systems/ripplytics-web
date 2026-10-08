import Link from "next/link";
import { products } from "@/lib/products";
import { StatusBadge } from "@/components/ui/StatusBadge";

export function ProductEcosystem() {
  const [primary, ...rest] = products;

  return (
    <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-stretch">
      <Link
        href={primary.route}
        className="group relative flex flex-col justify-between overflow-hidden border border-teal/35 bg-[radial-gradient(ellipse_at_80%_0%,rgba(15,168,143,0.22),transparent_55%),linear-gradient(160deg,#12182b,#0b0f1f)] p-8 transition hover:border-teal/55 md:p-10"
      >
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <svg viewBox="0 0 400 280" className="absolute right-0 top-0 h-full w-[70%] opacity-70">
            <circle
              cx="300"
              cy="80"
              r="90"
              fill="none"
              stroke="rgba(15,168,143,0.22)"
              strokeWidth="1"
            />
            <circle
              cx="300"
              cy="80"
              r="54"
              fill="none"
              stroke="rgba(15,168,143,0.16)"
              strokeWidth="1"
            />
            <circle cx="300" cy="80" r="5" fill="#0FA88F" className="animate-node-pulse" />
            <line
              x1="300"
              y1="80"
              x2="220"
              y2="160"
              stroke="rgba(15,168,143,0.3)"
              strokeWidth="1"
            />
            <line
              x1="300"
              y1="80"
              x2="340"
              y2="190"
              stroke="rgba(15,168,143,0.22)"
              strokeWidth="1"
            />
            <circle cx="220" cy="160" r="3" fill="#E8ECF4" opacity="0.7" />
            <circle cx="340" cy="190" r="3" fill="#E8ECF4" opacity="0.55" />
          </svg>
        </div>

        <div className="relative">
          <StatusBadge status={primary.status} />
          <h3 className="mt-5 font-display text-3xl text-off-white md:text-4xl">{primary.name}</h3>
          <p className="mt-2 text-sm uppercase tracking-[0.14em] text-teal/90">{primary.category}</p>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted">{primary.description}</p>
        </div>
        <span className="relative mt-10 inline-flex text-sm text-teal transition group-hover:translate-x-1">
          {primary.cta.label} →
        </span>
      </Link>

      <div className="relative flex flex-col justify-center gap-0 border border-[rgba(232,236,244,0.1)] bg-white/[0.015] px-2 py-2">
        <div
          className="pointer-events-none absolute left-6 top-6 bottom-6 w-px bg-gradient-to-b from-teal/40 via-white/10 to-transparent"
          aria-hidden="true"
        />
        {rest.map((product, index) => (
          <Link
            key={product.slug}
            href={product.route}
            className="group relative pl-10 pr-4 py-5 transition hover:bg-white/[0.03]"
          >
            <span
              className="absolute left-[18px] top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full border border-teal/50 bg-navy"
              style={{ opacity: 1 - index * 0.12 }}
              aria-hidden="true"
            />
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="font-display text-xl text-off-white transition group-hover:text-teal">
                  {product.name}
                </h3>
                <p className="mt-1 text-xs uppercase tracking-[0.12em] text-muted">
                  {product.category}
                </p>
              </div>
              <StatusBadge status={product.status} />
            </div>
            <p className="mt-2 text-sm leading-relaxed text-muted">{product.tagline}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
