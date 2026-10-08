import type { Metadata } from "next";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ConnectionChain } from "@/components/visuals/ConnectionChain";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "About",
  description:
    "Ripplytics was created around a simple belief: understanding risk requires understanding the relationships around it.",
  path: "/about",
});

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
      <section className="mx-auto max-w-7xl px-5 pb-16 pt-36 md:px-8 md:pb-24 md:pt-44">
        <Reveal>
          <h1 className="max-w-4xl font-display text-4xl leading-tight text-off-white md:text-6xl">
            The world became interconnected. Risk did too.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            Understanding risk requires understanding the relationships around it.
          </p>
        </Reveal>
      </section>

      <section className="border-y border-[rgba(232,236,244,0.08)] bg-section-soft py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <SectionHeading title="We started with a question.">
              <p>What if we stopped looking at risk only as an event — and followed it instead?</p>
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
          <div className="mt-12">
            <ConnectionChain />
          </div>
        </div>
      </section>

      <section className="border-y border-[rgba(232,236,244,0.08)] bg-section-soft py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <SectionHeading title="A new generation of risk intelligence.">
              <p>
                Different views of an interconnected system — not separate disciplines inside our
                thinking.
              </p>
            </SectionHeading>
          </Reveal>
          <Reveal delay={80}>
            <div className="mt-12 flex flex-wrap gap-x-6 gap-y-3">
              {disciplines.map((item, index) => (
                <span key={item} className="inline-flex items-center gap-3 text-sm text-mist/85">
                  <span className="h-1.5 w-1.5 rounded-full bg-teal/70" aria-hidden="true" />
                  {item}
                  {index < disciplines.length - 1 ? (
                    <span className="hidden text-white/15 sm:inline" aria-hidden="true">
                      ·
                    </span>
                  ) : null}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <SectionHeading title="More information is not necessarily more intelligence.">
              <p>
                Ripplytics is interested in the layer between information and decision — where
                signals acquire context and relationships become visible.
              </p>
            </SectionHeading>
          </Reveal>
          <Reveal delay={80}>
            <div className="mt-12 overflow-hidden rounded-sm border border-[rgba(232,236,244,0.1)] bg-white/[0.02] px-5 py-8 md:px-8">
              <div className="flex flex-wrap items-center gap-2 text-sm md:gap-3 md:text-base">
                {["Information", "Context", "Relationships", "Interpretation", "Decision"].map(
                  (step, index) => (
                    <span key={step} className="inline-flex items-center gap-2 md:gap-3">
                      <span className="rounded-sm border border-teal/30 bg-teal/5 px-3 py-2 text-teal">
                        {step}
                      </span>
                      {index < 4 ? <span className="text-teal/40">→</span> : null}
                    </span>
                  ),
                )}
              </div>
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
          <div className="space-y-0">
            {principles.map((item, index) => (
              <Reveal key={item.title} delay={index * 40}>
                <div className="grid gap-2 border-t border-[rgba(232,236,244,0.1)] py-8 md:grid-cols-[1.2fr_1fr] md:items-baseline md:gap-10">
                  <h3 className="font-display text-2xl text-off-white md:text-3xl">{item.title}</h3>
                  <p className="text-muted md:text-lg">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p className="mt-12 font-display text-2xl text-teal">Understand the Ripple.</p>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
