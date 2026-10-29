import type { Metadata } from "next";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ConnectionChain } from "@/components/visuals/ConnectionChain";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "About",
  description:
    "Ripplytics builds risk and decision-intelligence applications so investors, analysts and businesses can see connected risk more clearly.",
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

const teamPlaceholders = [
  {
    name: "Name",
    role: "Role",
    bio: "Short bio placeholder — founder will supply details.",
  },
  {
    name: "Name",
    role: "Role",
    bio: "Short bio placeholder — founder will supply details.",
  },
  {
    name: "Name",
    role: "Role",
    bio: "Short bio placeholder — founder will supply details.",
  },
];

const connectPlaceholders = [
  { label: "LinkedIn", href: null },
  { label: "X", href: null },
  { label: "Other", href: null },
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
            Ripplytics is a company building risk and decision-intelligence applications —
            helping investors, analysts and businesses see connected risk more clearly than
            headlines and isolated indicators allow.
          </p>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-mist/80">
            RipplePoint is available as Live Beta. Deep R&amp;D is in heavy progress toward
            launching more risk-intelligence applications across the suite. The long-term vision
            is connected intelligence across domains — ambition, not a claim about today.
          </p>
        </Reveal>
      </section>

      <section className="border-y border-[rgba(28,33,40,0.08)] bg-section-soft py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <SectionHeading title="We started with a question.">
              <p>
                What if we stopped looking at risk only as an event — and followed how pressure
                connects and where consequence may travel?
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
          <div className="mt-12">
            <ConnectionChain />
          </div>
        </div>
      </section>

      <section className="border-y border-[rgba(28,33,40,0.08)] bg-section-soft py-20 md:py-28">
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
                    <span className="hidden text-[rgba(28,33,40,0.2)] sm:inline" aria-hidden="true">
                      ·
                    </span>
                  ) : null}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section id="team" className="scroll-mt-24 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <SectionHeading eyebrow="Team" title="Leadership.">
              <p>
                Profiles will appear here as the founding team is published. Slots below are
                placeholders until names, roles and bios are supplied.
              </p>
            </SectionHeading>
          </Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {teamPlaceholders.map((person, index) => (
              <Reveal key={`team-${index}`} delay={index * 50}>
                <div className="h-full border border-dashed border-[rgba(28,33,40,0.18)] bg-[rgba(28,33,40,0.03)] p-6">
                  <div
                    className="mb-5 h-16 w-16 rounded-sm border border-[rgba(28,33,40,0.12)] bg-[rgba(28,33,40,0.045)]"
                    aria-hidden="true"
                  />
                  <p className="font-display text-xl text-off-white/70">{person.name}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.14em] text-teal/70">
                    {person.role}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-muted">{person.bio}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section
        id="connect"
        className="scroll-mt-24 border-y border-[rgba(28,33,40,0.08)] bg-section-soft py-20 md:py-28"
      >
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <SectionHeading eyebrow="Connect" title="Digital handles.">
              <p>
                Official channels will be listed here when ready. Until then, reach us through
                Contact.
              </p>
            </SectionHeading>
          </Reveal>
          <div className="mt-10 flex flex-wrap gap-3">
            {connectPlaceholders.map((item) => (
              <span
                key={item.label}
                className="inline-flex items-center gap-2 rounded-sm border border-[rgba(28,33,40,0.12)] px-4 py-2.5 text-sm text-mist/70"
              >
                {item.label}
                <span className="text-[11px] uppercase tracking-[0.12em] text-muted">
                  Coming soon
                </span>
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
                signals acquire context and relationships become visible.
              </p>
            </SectionHeading>
          </Reveal>
          <Reveal delay={80}>
            <div className="mt-12 overflow-hidden rounded-sm border border-[rgba(28,33,40,0.1)] bg-[rgba(28,33,40,0.035)] px-5 py-8 md:px-8">
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

      <section className="border-y border-[rgba(28,33,40,0.08)] py-20 md:py-28">
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
                <div className="grid gap-2 border-t border-[rgba(28,33,40,0.1)] py-8 md:grid-cols-[1.2fr_1fr] md:items-baseline md:gap-10">
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
