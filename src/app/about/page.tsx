import type { Metadata } from "next";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "About",
  description:
    "Ripplytics was created around a simple belief: understanding risk requires understanding the relationships around it.",
  path: "/about",
});

const chain = [
  "Geopolitics",
  "Commodities",
  "Inflation",
  "Policy",
  "Rates / Currency",
  "Markets",
  "Businesses / Portfolios",
];

const disciplines = [
  "Risk Intelligence",
  "Financial Markets",
  "Macroeconomics",
  "Geopolitics",
  "Business Intelligence",
  "Data Analytics",
  "Systemic Thinking",
  "Decision Support",
];

const principles = [
  { title: "Follow the connection.", body: "Don't stop at the obvious relationship." },
  { title: "Question the signal.", body: "Not everything that moves matters equally." },
  { title: "Understand the system.", body: "Context changes consequence." },
  { title: "Respect uncertainty.", body: "Intelligence without humility becomes false precision." },
  { title: "Improve the decision.", body: "The purpose of intelligence is ultimately practical." },
];

export default function AboutPage() {
  return (
    <div className="bg-atmosphere">
      <section className="mx-auto max-w-7xl px-5 pb-16 pt-32 md:px-8 md:pb-24 md:pt-40">
        <Reveal>
          <h1 className="max-w-4xl font-display text-4xl leading-tight text-off-white md:text-6xl">
            The world became interconnected. Risk did too.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            But our tools for understanding it have often remained fragmented. Ripplytics was
            created around a simple belief: understanding risk requires understanding the
            relationships around it.
          </p>
        </Reveal>
      </section>

      <section className="border-y border-[rgba(232,236,244,0.08)] bg-section-soft py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <SectionHeading title="We started with a question.">
              <p>What if we stopped looking at risk only as an event?</p>
              <p>What if we followed it?</p>
              <p>
                Back to its origin. Across its connections. Through its transmission pathways. Into
                the systems that may be exposed. And finally toward the consequences it may create.
              </p>
            </SectionHeading>
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <SectionHeading title="Nothing important happens in complete isolation.">
              <p>
                The challenge is not that information is unavailable. The challenge is that the
                relationships between pieces of information are difficult to see.
              </p>
            </SectionHeading>
          </Reveal>
          <div className="mt-12 flex flex-col gap-3 md:max-w-xl">
            {chain.map((node, index) => (
              <Reveal key={node} delay={index * 50}>
                <div className="rounded-sm border border-[rgba(232,236,244,0.12)] bg-white/[0.02] px-5 py-4">
                  <p className="font-display text-lg text-off-white">{node}</p>
                </div>
                {index < chain.length - 1 ? (
                  <p className="py-1 pl-5 text-teal/60" aria-hidden="true">
                    ↓
                  </p>
                ) : null}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[rgba(232,236,244,0.08)] bg-section-soft py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <SectionHeading title="A new generation of risk intelligence.">
              <p>
                Ripplytics is developing intelligence products that help people understand complex
                environments through a connected lens. These are not separate disciplines inside
                our thinking — they are different views of an interconnected system.
              </p>
            </SectionHeading>
          </Reveal>
          <div className="mt-12 flex flex-wrap gap-3">
            {disciplines.map((item) => (
              <span
                key={item}
                className="rounded-sm border border-[rgba(232,236,244,0.12)] px-4 py-2 text-sm text-mist/85"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <SectionHeading title="More information is not necessarily more intelligence.">
              <p>
                Ripplytics is interested in the layer between information and decision — where
                signals acquire context, relationships become visible, transmission can be
                examined, exposure and absorption matter, and uncertainty is acknowledged.
              </p>
            </SectionHeading>
          </Reveal>
          <Reveal delay={80}>
            <div className="mt-10 flex flex-wrap gap-2 text-sm text-muted">
              {["Information", "Context", "Relationships", "Interpretation", "Decision"].map(
                (step, index) => (
                  <span key={step} className="inline-flex items-center gap-2">
                    <span className="rounded-sm border border-teal/25 px-3 py-2 text-teal">{step}</span>
                    {index < 4 ? <span className="text-white/20">→</span> : null}
                  </span>
                ),
              )}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-[rgba(232,236,244,0.08)] py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
          <Reveal>
            <h2 className="font-display text-3xl text-off-white md:text-5xl">
              To become a global pioneer in Risk Intelligence Platform solutions.
            </h2>
            <p className="mt-6 text-muted md:text-lg">
              The long-term ambition is to move from isolated intelligence applications toward a
              broader connected intelligence environment.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="space-y-8">
            {principles.map((item, index) => (
              <Reveal key={item.title} delay={index * 40}>
                <div className="border-t border-[rgba(232,236,244,0.1)] pt-8">
                  <h3 className="font-display text-2xl uppercase tracking-[0.04em] text-off-white md:text-3xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-muted">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p className="mt-16 font-display text-2xl text-teal">Understand the Ripple.</p>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
