import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { getProduct, outcomeGroups, products } from "@/lib/products";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Applications",
  description:
    "Insights and perspective for decisions — a suite of risk-intelligence applications, with RipplePoint available as Live Beta and deep R&D toward more launches.",
  path: "/applications",
});

export default function ApplicationsPage() {
  return (
    <div className="bg-atmosphere">
      <section className="mx-auto max-w-7xl px-5 pb-16 pt-32 md:px-8 md:pb-20 md:pt-40">
        <Reveal>
          <h1 className="max-w-4xl font-display text-4xl leading-tight text-off-white md:text-6xl">
            Insights that shape better decisions.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            Ripplytics builds applications that surface risk factors and related perspective —
            so decision-makers can see what may affect outcomes before they commit. Deep R&amp;D
            is critical: RipplePoint is available as Live Beta; the wider suite is in progress
            toward launch.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl space-y-10 px-5 pb-24 md:px-8">
        {outcomeGroups.map((group, groupIndex) => {
          const groupProducts = group.products
            .map((slug) => getProduct(slug))
            .filter((p): p is NonNullable<typeof p> => Boolean(p));

          return (
            <Reveal key={group.id} delay={groupIndex * 40}>
              <div
                className={`rounded-sm border p-6 md:p-8 ${
                  group.prominent
                    ? "border-teal/35 bg-gradient-to-r from-teal/10 to-transparent"
                    : "border-[rgba(28,33,40,0.1)] bg-[rgba(28,33,40,0.035)]"
                }`}
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.18em] text-teal">
                      {group.number} · Focus
                    </p>
                    <h2 className="mt-3 font-display text-2xl text-off-white md:text-3xl">
                      {group.title}
                    </h2>
                  </div>
                  <span
                    className={`inline-flex items-center rounded-sm border px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.14em] ${
                      group.prominent
                        ? "border-teal/50 text-teal bg-teal/10"
                        : "border-[rgba(28,33,40,0.22)] text-muted bg-[rgba(28,33,40,0.045)]"
                    }`}
                  >
                    {group.availability}
                  </span>
                </div>

                <div className="mt-8 grid gap-4">
                  {groupProducts.map((product) => (
                    <Link
                      key={product.slug}
                      href={product.route}
                      className="block rounded-sm border border-[rgba(28,33,40,0.08)] bg-navy/30 p-5 transition hover:border-[rgba(28,33,40,0.2)] md:p-6"
                    >
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div>
                          <h3 className="font-display text-xl text-off-white md:text-2xl">
                            {product.name}
                          </h3>
                          <p className="mt-2 text-xs uppercase tracking-[0.14em] text-teal/90">
                            {product.category}
                          </p>
                        </div>
                        <StatusBadge status={product.status} />
                      </div>
                      <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted md:text-base">
                        {product.description}
                      </p>
                      <p className="mt-3 max-w-3xl text-sm leading-relaxed text-mist/80">
                        {product.deliverable}
                      </p>
                      <span className="mt-5 inline-flex text-sm text-teal">
                        {product.available ? "Explore" : "Learn more"} →
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </Reveal>
          );
        })}
      </section>

      <section className="border-t border-[rgba(28,33,40,0.08)] bg-section-soft py-16">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <p className="max-w-2xl text-sm leading-relaxed text-muted">
              {products.length} applications in the family — RipplePoint Live Beta today; the rest
              in deep R&amp;D toward launch. Same intelligence philosophy across the suite.
              Technical model detail lives on Technology and product pages.
            </p>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
