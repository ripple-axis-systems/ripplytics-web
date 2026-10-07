import type { Metadata } from "next";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RippleSequence } from "@/components/visuals/RippleSequence";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "How We Think",
  description:
    "Most analysis starts with the event. Ripplytics starts with the ripple — following origin, connection, transmission, exposure and absorption.",
  path: "/how-we-think",
});

const significance = [
  "Influence",
  "Connections",
  "Transmission",
  "Exposure",
  "Absorption",
  "Context",
  "Confidence",
];

export default function HowWeThinkPage() {
  return (
    <div className="bg-atmosphere">
      <section className="mx-auto max-w-7xl px-5 pb-16 pt-32 md:px-8 md:pb-24 md:pt-40">
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.2em] text-teal">How Ripplytics thinks</p>
          <h1 className="mt-4 max-w-4xl font-display text-4xl leading-tight text-off-white md:text-6xl">
            Most analysis starts with the event.
            <span className="mt-3 block text-teal">We start with the ripple.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            An event is a starting point. It is not necessarily the whole story. The intelligence
            challenge begins when we ask what happens after the event enters a connected system.
          </p>
        </Reveal>
      </section>

      <section className="border-y border-[rgba(232,236,244,0.08)] bg-section-soft py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <SectionHeading title="When something changes, we ask:">
              <ul className="space-y-2 text-mist/90">
                <li>Where did it begin?</li>
                <li>What changed?</li>
                <li>What is connected to it?</li>
                <li>How can the pressure travel?</li>
                <li>Where can it become material?</li>
                <li>What can absorb it?</li>
                <li>What could amplify it?</li>
                <li>What does the surrounding regime look like?</li>
                <li>How confident are we?</li>
              </ul>
            </SectionHeading>
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <SectionHeading eyebrow="The Ripple Sequence" title="From origin to consequence." />
          </Reveal>
          <div className="mt-12">
            <RippleSequence />
          </div>
        </div>
      </section>

      <section className="border-t border-[rgba(232,236,244,0.08)] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <SectionHeading title="A risk is not defined only by its size.">
              <p>Its significance can depend on:</p>
            </SectionHeading>
          </Reveal>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {significance.map((item) => (
              <div
                key={item}
                className="rounded-sm border border-[rgba(232,236,244,0.1)] bg-white/[0.02] px-4 py-5 font-display text-xl text-off-white"
              >
                {item}
              </div>
            ))}
          </div>
          <p className="mt-10 max-w-2xl text-muted">
            This is why Ripplytics looks beyond simple signal magnitude.
          </p>
        </div>
      </section>
    </div>
  );
}
