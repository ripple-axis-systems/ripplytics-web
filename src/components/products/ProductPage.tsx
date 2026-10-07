import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StatusBadge } from "@/components/ui/StatusBadge";
import type { Product } from "@/lib/products";

export function ProductPage({ product }: { product: Product }) {
  return (
    <div className="bg-atmosphere">
      <section className="mx-auto max-w-7xl px-5 pb-16 pt-32 md:px-8 md:pb-24 md:pt-40">
        <Reveal>
          <StatusBadge status={product.status} />
          <p className="mt-6 text-[11px] uppercase tracking-[0.2em] text-teal">
            {product.category}
          </p>
          <h1 className="mt-4 max-w-4xl font-display text-4xl leading-[1.08] text-off-white md:text-6xl">
            {product.tagline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{product.description}</p>
          <div className="mt-8">
            <Button href={product.cta.href} variant={product.available ? "primary" : "secondary"}>
              {product.cta.label}
            </Button>
          </div>
        </Reveal>
      </section>

      <section className="border-t border-[rgba(232,236,244,0.08)] bg-section-soft py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-2 md:px-8">
          <Reveal>
            <SectionHeading title="The problem">
              <p>{product.problem}</p>
            </SectionHeading>
          </Reveal>
          <Reveal delay={80}>
            <SectionHeading title="The intelligence approach">
              <p>{product.philosophy}</p>
              {!product.available ? (
                <p className="text-sm text-muted">
                  This page describes intent and direction. Visualisations below are conceptual
                  and labelled as such — not product screenshots.
                </p>
              ) : null}
            </SectionHeading>
          </Reveal>
        </div>
      </section>

      {!product.available ? (
        <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <Reveal>
            <div className="rounded-sm border border-dashed border-[rgba(232,236,244,0.18)] bg-white/[0.02] p-8 md:p-12">
              <p className="text-[11px] uppercase tracking-[0.18em] text-muted">Conceptual</p>
              <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-muted">
                <span className="rounded-sm border border-teal/30 px-3 py-2 text-teal">Signal</span>
                <span aria-hidden="true">→</span>
                <span className="rounded-sm border border-white/15 px-3 py-2">Context</span>
                <span aria-hidden="true">→</span>
                <span className="rounded-sm border border-white/15 px-3 py-2">Interpretation</span>
                <span aria-hidden="true">→</span>
                <span className="rounded-sm border border-white/15 px-3 py-2">Decision support</span>
              </div>
              <p className="mt-8 max-w-2xl text-muted">
                {product.name} is part of the Ripplytics ecosystem and shares the same
                intelligence philosophy as RipplePoint — connections, transmission, exposure and
                absorption — applied to a different decision environment.
              </p>
              <div className="mt-8">
                <Button href={product.cta.href}>{product.cta.label}</Button>
              </div>
            </div>
          </Reveal>
        </section>
      ) : null}
    </div>
  );
}
