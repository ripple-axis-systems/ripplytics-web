import type { Metadata } from "next";
import { EventCaseStrips } from "@/components/observatory/EventCaseStrips";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { observatoryCategories } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Research — Risk Intelligence",
  description:
    "Deep focus on Risk Intelligence — positive and negative risk — as Ripplytics builds toward a pioneer risk-intelligence systems company. Research supports products; it does not replace them.",
  path: "/observatory",
});

const studyAreas = [
  {
    title: "Risk Intelligence",
    body: "Positive and negative risk — opportunity and threat — read as decision inputs, not after-the-fact commentary.",
  },
  {
    title: "Global Risk",
    body: "Emerging developments that may affect the wider economic and financial environment.",
  },
  {
    title: "Geopolitics",
    body: "Events and structural shifts that can influence markets, economies and strategic environments.",
  },
  {
    title: "Markets",
    body: "Changes in market behaviour, structure and risk conditions.",
  },
  {
    title: "Transmission",
    body: "How pressure moves between connected systems.",
  },
  {
    title: "Absorption & regimes",
    body: "How systems respond when pressure arrives — and how context changes the meaning of a signal.",
  },
];

export default function ObservatoryPage() {
  return (
    <div className="bg-atmosphere">
      <section className="mx-auto max-w-7xl px-5 pb-16 pt-32 md:px-8 md:pb-24 md:pt-40">
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.2em] text-teal">Research & Insights</p>
          <h1 className="mt-4 max-w-4xl font-display text-4xl leading-tight text-off-white md:text-6xl">
            Deep focus on Risk Intelligence.
            <span className="mt-3 block text-teal">
              Building toward a pioneer systems company.
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            The Observatory centres on Risk Intelligence — both the downside that threatens
            outcomes and the upside risk that creates opportunity. Research here sharpens the
            models and questions behind Ripplytics applications. It supports the product suite; it
            does not replace it.
          </p>
        </Reveal>
      </section>

      <section className="border-y border-[rgba(232,236,244,0.08)] bg-section-soft py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  title: "Negative risk",
                  body: "Threats, fragility and pressure that can damage portfolios, businesses and regimes.",
                },
                {
                  title: "Positive risk",
                  body: "Opportunity that emerges when conditions shift — insight that informs where to lean in.",
                },
                {
                  title: "Systems ambition",
                  body: "Toward a pioneer risk-intelligence systems company — applications today, connected infrastructure over time.",
                },
              ].map((item) => (
                <div key={item.title} className="border-t border-teal/30 pt-5">
                  <h3 className="font-display text-xl text-off-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{item.body}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
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
