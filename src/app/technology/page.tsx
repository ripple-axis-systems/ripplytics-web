import type { Metadata } from "next";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { models } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Technology & Methodology",
  description:
    "Intelligence begins with a question. Technology makes it scalable. Explore Ripplytics data categories, system thinking and a light view of models.",
  path: "/technology",
});

const dataCategories = [
  "Market data",
  "Macroeconomic indicators",
  "Geopolitical information",
  "Commodity data",
  "Financial indicators",
  "Structured events",
  "Derived variables",
  "Proprietary analytical constructs",
];

const validation = [
  "Historical testing",
  "Model validation",
  "Backtesting",
  "Data quality",
  "Coverage",
  "Confidence",
  "Signal consistency",
  "Model hygiene",
  "Avoiding double-counting",
  "Understanding limitations",
];

const responses = ["Absorb", "Adapt", "Amplify", "Deteriorate"];

export default function TechnologyPage() {
  return (
    <div className="bg-atmosphere">
      <section className="mx-auto max-w-7xl px-5 pb-16 pt-32 md:px-8 md:pb-24 md:pt-40">
        <Reveal>
          <h1 className="max-w-4xl font-display text-4xl leading-tight text-off-white md:text-6xl">
            Intelligence begins with a question.
            <span className="mt-3 block text-teal">Technology makes it scalable.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            Ripplytics combines structured data, analytical models and system-level thinking to
            develop intelligence products. Technology is not the philosophy — it is the means
            through which the philosophy becomes usable.
          </p>
        </Reveal>
      </section>

      <section className="border-y border-[rgba(232,236,244,0.08)] bg-section-soft py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <SectionHeading title="Data">
              <p>
                Ripplytics works across multiple categories of information relevant to its
                intelligence models. The objective is not simply to collect more data — it is to
                create useful relationships between signals.
              </p>
            </SectionHeading>
          </Reveal>
          <div className="mt-10 flex flex-wrap gap-3">
            {dataCategories.map((item) => (
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

      <section className="border-y border-[rgba(232,236,244,0.08)] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <Reveal>
              <SectionHeading title="Systemic influence">
                <p>
                  Not every variable deserves equal weight. Some factors have greater ability to
                  influence the wider system through economic scale, financial centrality, exposure,
                  connectivity or propagation capability.
                </p>
              </SectionHeading>
              <div className="mt-8 space-y-3">
                {["Low influence", "Moderate influence", "High systemic influence"].map(
                  (label, index) => (
                    <div key={label} className="flex items-center gap-4">
                      <div
                        className="h-2 rounded-full bg-teal"
                        style={{ width: `${28 + index * 28}%`, opacity: 0.35 + index * 0.3 }}
                      />
                      <span className="text-sm text-muted">{label}</span>
                    </div>
                  ),
                )}
              </div>
            </Reveal>
            <Reveal delay={80}>
              <SectionHeading title="Absorption & adaptive capacity">
                <p>
                  Pressure is only half the story. Two systems can experience the same shock and
                  produce very different outcomes.
                </p>
              </SectionHeading>
              <div className="mt-8 flex flex-col items-start gap-2 text-sm">
                <span className="rounded-sm border border-white/15 px-3 py-2">Shock</span>
                <span className="text-teal/60">↓</span>
                <span className="rounded-sm border border-white/15 px-3 py-2">System</span>
                <span className="text-teal/60">↓</span>
                <div className="flex flex-wrap gap-2">
                  {responses.map((item) => (
                    <span key={item} className="rounded-sm border border-teal/30 px-3 py-2 text-teal">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <SectionHeading title="Validation">
              <p>
                Intelligence must withstand scrutiny. The objective is not to manufacture certainty
                — it is to make uncertainty more intelligible.
              </p>
            </SectionHeading>
          </Reveal>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {validation.map((item) => (
              <div
                key={item}
                className={`rounded-sm border px-4 py-4 text-sm ${
                  item.toLowerCase().includes("limitation")
                    ? "border-teal/35 bg-teal/10 text-teal"
                    : "border-[rgba(232,236,244,0.1)] bg-white/[0.02] text-mist/85"
                }`}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Softened models — later / lighter; not a methodology playbook on first read */}
      <section className="border-t border-[rgba(232,236,244,0.08)] bg-section-soft py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <SectionHeading eyebrow="Going deeper" title="Models & indices — a light view.">
              <p>
                Named engines power parts of RipplePoint Live Beta. The list below is an
                orientation, not a methodology handoff — purpose in one line each; detail belongs
                in product evaluation conversations.
              </p>
            </SectionHeading>
          </Reveal>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {models.map((model) => (
              <div
                key={model.acronym}
                className="border border-[rgba(232,236,244,0.08)] bg-white/[0.015] px-4 py-4"
              >
                <p className="font-display text-lg text-teal">{model.acronym}</p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.12em] text-muted">
                  {model.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
