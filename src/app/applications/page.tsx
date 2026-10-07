import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { products } from "@/lib/products";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Applications",
  description:
    "Different decisions. One intelligence philosophy. Explore the Ripplytics product ecosystem.",
  path: "/applications",
});

export default function ApplicationsPage() {
  return (
    <div className="bg-atmosphere">
      <section className="mx-auto max-w-7xl px-5 pb-16 pt-32 md:px-8 md:pb-20 md:pt-40">
        <Reveal>
          <h1 className="max-w-4xl font-display text-4xl leading-tight text-off-white md:text-6xl">
            Different decisions.
            <span className="mt-3 block">One intelligence philosophy.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            Risk looks different depending on where you stand. Ripplytics develops specialised
            applications for different decision environments — around common intelligence
            principles.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 md:px-8">
        <div className="grid gap-4">
          {products.map((product, index) => (
            <Reveal key={product.slug} delay={index * 40}>
              <Link
                href={product.route}
                className={`block rounded-sm border p-6 transition md:p-8 ${
                  product.available
                    ? "border-teal/35 bg-gradient-to-r from-teal/10 to-transparent hover:border-teal/55"
                    : "border-[rgba(232,236,244,0.1)] bg-white/[0.02] hover:border-[rgba(232,236,244,0.22)]"
                }`}
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h2 className="font-display text-2xl text-off-white md:text-3xl">
                      {product.name}
                    </h2>
                    <p className="mt-2 text-xs uppercase tracking-[0.14em] text-teal/90">
                      {product.category}
                    </p>
                  </div>
                  <StatusBadge status={product.status} />
                </div>
                <p className="mt-5 max-w-3xl text-muted">{product.description}</p>
                <span className="mt-6 inline-flex text-sm text-teal">
                  {product.available ? "Explore" : "Learn more"} →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
