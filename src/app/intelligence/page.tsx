import type { Metadata } from "next";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArchitectureLayers } from "@/components/visuals/ArchitectureLayers";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Intelligence Architecture",
  description:
    "Behind every Ripplytics application is a common way of thinking — observation, connection, transmission, exposure, absorption, regime and decision intelligence.",
  path: "/intelligence",
});

export default function IntelligencePage() {
  return (
    <div className="bg-atmosphere">
      <section className="mx-auto max-w-7xl px-5 pb-16 pt-32 md:px-8 md:pb-24 md:pt-40">
        <Reveal>
          <h1 className="max-w-4xl font-display text-4xl leading-tight text-off-white md:text-6xl">
            Behind every Ripplytics application is a common way of thinking.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            Different products solve different problems. The underlying intelligence architecture
            seeks to understand the movement of risk across systems.
          </p>
        </Reveal>
      </section>

      <section className="border-y border-[rgba(232,236,244,0.08)] bg-section-soft py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Architecture"
              title="A living system of observation, relationship and judgement."
            >
              <p>
                The architecture is conceptually sequential, but relationships can move in multiple
                directions. Feedback, propagation and context matter as much as linear flow.
              </p>
            </SectionHeading>
          </Reveal>
          <div className="mt-12">
            <ArchitectureLayers />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
          <Reveal>
            <h2 className="font-display text-3xl text-off-white md:text-4xl">
              Data tells us what is happening.
              <span className="mt-3 block text-teal">Intelligence seeks to understand what it means.</span>
            </h2>
            <p className="mt-6 text-muted">
              Don't simply show the signal — show its significance. Don't simply show the risk —
              show its potential reach. Don't simply show the exposure — show the context around it.
            </p>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
