import type { Metadata } from "next";
import { EventCaseStrips } from "@/components/observatory/EventCaseStrips";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { observatoryCategories } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "The Ripplytics Observatory",
  description:
    "The research and insight layer of the Ripplytics ecosystem — examining emerging risks, regimes, systemic relationships and intelligence methodologies.",
  path: "/observatory",
});

const studyAreas = [
  { title: "Global Risk", body: "Emerging developments that may affect the wider economic and financial environment." },
  { title: "Geopolitics", body: "Events and structural shifts that can influence markets, economies and strategic environments." },
  { title: "Markets", body: "Changes in market behaviour, structure and risk conditions." },
  { title: "Transmission", body: "How pressure moves between connected systems." },
  { title: "Absorption", body: "How systems respond when pressure arrives." },
  { title: "Regimes", body: "How changing environments alter the meaning of individual signals." },
];

export default function ObservatoryPage() {
  return (
    <div className="bg-atmosphere">
      <section className="mx-auto max-w-7xl px-5 pb-16 pt-32 md:px-8 md:pb-24 md:pt-40">
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.2em] text-teal">Research & Insights</p>
          <h1 className="mt-4 max-w-4xl font-display text-4xl leading-tight text-off-white md:text-6xl">
            The world generates signals continuously.
            <span className="mt-3 block text-teal">We want to understand which ones matter.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            The Ripplytics Observatory is the research and insight layer of the Ripplytics
            ecosystem. It is where we examine emerging risks, changing regimes, systemic
            relationships and the ideas behind our intelligence models.
          </p>
        </Reveal>
      </section>

      <EventCaseStrips />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <SectionHeading title="What we study" />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {studyAreas.map((item) => (
              <div key={item.title} className="border-t border-[rgba(232,236,244,0.12)] pt-5">
                <h3 className="font-display text-xl text-off-white">{item.title}</h3>
                <p className="mt-3 text-sm text-muted">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[rgba(232,236,244,0.08)] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <SectionHeading title="We don't want to add to the noise.">
              <p>
                A good research note should leave the reader with a better question than the one
                they started with. Our research therefore focuses on: What changed? Why does it
                matter? What connects to it? Where could it travel? What should we watch next?
              </p>
            </SectionHeading>
          </Reveal>
          <div className="mt-12 space-y-4">
            {observatoryCategories.map((item, index) => (
              <Reveal key={item.id} delay={index * 40}>
                <article className="border-t border-[rgba(232,236,244,0.1)] py-8">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-teal">{item.label}</p>
                  <h3 className="mt-3 font-display text-2xl text-off-white md:text-3xl">
                    {item.label}
                  </h3>
                  <p className="mt-3 max-w-2xl text-muted">{item.description}</p>
                  <p className="mt-4 text-sm text-muted/70">Publications coming soon.</p>
                </article>
              </Reveal>
            ))}
          </div>
          <div className="mt-12">
            <Button href="/contact?interest=Research">Discuss research interest</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
