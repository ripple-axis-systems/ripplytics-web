import type { Metadata } from "next";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { QuestionOrbit } from "@/components/visuals/QuestionOrbit";
import { RipplePath } from "@/components/visuals/RipplePath";
import { RippleSequence } from "@/components/visuals/RippleSequence";
import { SixDimensions } from "@/components/visuals/SixDimensions";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "How We Think",
  description:
    "Most analysis starts with the event. Ripplytics starts with the ripple — following origin, connection, transmission, exposure and absorption.",
  path: "/how-we-think",
});

export default function HowWeThinkPage() {
  return (
    <div className="bg-atmosphere">
      <section className="mx-auto max-w-7xl px-5 pb-16 pt-36 md:px-8 md:pb-24 md:pt-44">
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.2em] text-teal">How Ripplytics thinks</p>
          <h1 className="mt-4 max-w-4xl font-display text-4xl leading-tight text-off-white md:text-6xl">
            Most analysis starts with the event.
            <span className="mt-3 block text-teal">We start with the ripple.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            An event is a starting point — not the whole story. The intelligence challenge begins
            when pressure enters a connected system: what travels, what absorbs, and what that
            means for the decision still ahead. That lens is the differentiator behind every
            Ripplytics application.
          </p>
        </Reveal>
      </section>

      <section className="border-y border-[rgba(232,236,244,0.08)] bg-section-soft py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <SectionHeading title="When something changes, we ask:" />
          </Reveal>
          <div className="mt-12">
            <QuestionOrbit />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <SectionHeading eyebrow="The Ripple Sequence" title="From origin to consequence.">
              <p>
                An annotated path from origin to decision — the same lens used across Ripplytics
                thinking.
              </p>
            </SectionHeading>
          </Reveal>
          <div className="mt-12">
            <RipplePath />
          </div>
          <div className="mt-14">
            <RippleSequence />
          </div>
        </div>
      </section>

      <section className="border-t border-[rgba(232,236,244,0.08)] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <SectionHeading title="A risk is not defined only by its size.">
              <p>
                Significance depends on influence, connections, transmission, exposure, absorption,
                context and confidence.
              </p>
            </SectionHeading>
          </Reveal>
          <div className="mt-12">
            <SixDimensions />
          </div>
          <p className="mt-10 max-w-2xl text-muted">
            This is why Ripplytics looks beyond simple signal magnitude.
          </p>
        </div>
      </section>
    </div>
  );
}
