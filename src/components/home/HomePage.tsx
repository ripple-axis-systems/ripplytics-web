import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AmbitionArc } from "@/components/visuals/AmbitionArc";
import { HeroRipple } from "@/components/visuals/HeroRipple";
import { InquiryField } from "@/components/visuals/InquiryField";
import { ProductEcosystem } from "@/components/visuals/ProductEcosystem";
import { RipplePath } from "@/components/visuals/RipplePath";
import { RippleSequence } from "@/components/visuals/RippleSequence";
import { SignalConnect } from "@/components/visuals/SignalConnect";
import { SixDimensions } from "@/components/visuals/SixDimensions";
import { brand } from "@/lib/theme";

export function HomePage() {
  return (
    <div>
      {/* 01 Hero — brand + headline + one line + figure */}
      <section className="bg-atmosphere relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-32 md:px-8 md:pb-28 md:pt-40 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="animate-fade-rise">
            <p className="font-display text-5xl leading-[1.02] tracking-[-0.03em] text-off-white md:text-6xl lg:text-[4.5rem]">
              Ripplytics
            </p>
            <h1 className="mt-7 max-w-xl font-display text-3xl leading-[1.15] text-mist md:text-[2.35rem] lg:text-[2.6rem]">
              A disruption rarely stays where it begins.
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted md:text-lg">
              The real story is not just what happened — it is where the consequences travel next.
            </p>
            <p className="mt-8 text-sm uppercase tracking-[0.16em] text-teal">
              {brand.positioning}
            </p>
            <p className="mt-2 font-display text-xl text-off-white">{brand.tagline}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button href="#intelligence">Explore Ripplytics</Button>
              <Button href="/ripplepoint" variant="secondary">
                Explore RipplePoint
              </Button>
            </div>
          </div>
          <div className="animate-fade-rise" style={{ animationDelay: "0.18s" }}>
            <HeroRipple />
          </div>
        </div>
      </section>

      {/* 02 Problem */}
      <section className="border-t border-[rgba(232,236,244,0.08)] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <SectionHeading title="The signal is visible. The consequence often isn't.">
              <p>
                Markets produce signals continuously. Most systems report what happened. Decisions
                depend on what happens after.
              </p>
            </SectionHeading>
          </Reveal>
          <div className="mt-12">
            <SignalConnect />
          </div>
          <Reveal>
            <p className="mt-10 max-w-2xl text-base text-muted md:text-lg">
              Ripplytics explores that chain — from origin through connection, transmission,
              exposure and absorption.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 03 Core idea */}
      <section className="bg-section-soft border-y border-[rgba(232,236,244,0.08)] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <SectionHeading eyebrow="Core idea" title="Every risk has a ripple.">
              <p>
                An event begins somewhere. Its consequences rarely end there. Sometimes the ripple
                weakens. Sometimes it amplifies. Risk moves — Ripplytics seeks to understand that
                movement.
              </p>
            </SectionHeading>
          </Reveal>
          <div className="mt-12">
            <RipplePath />
          </div>
        </div>
      </section>

      {/* 04 Beyond the event */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <SectionHeading title="Don't stop at what happened.">
              <p>
                Observing a signal is not the same as understanding its potential significance.
              </p>
            </SectionHeading>
          </Reveal>
          <div className="mt-12">
            <InquiryField />
          </div>
        </div>
      </section>

      {/* 05 Ripple sequence */}
      <section
        id="intelligence"
        className="scroll-mt-24 border-y border-[rgba(232,236,244,0.08)] bg-section-soft py-20 md:py-28"
      >
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <SectionHeading eyebrow="Follow the ripple" title="From origin to consequence.">
              <p>Select each stage to explore how pressure moves through a connected system.</p>
            </SectionHeading>
          </Reveal>
          <div className="mt-12">
            <RippleSequence />
          </div>
        </div>
      </section>

      {/* 06 Six dimensions */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <SectionHeading title="A signal becomes more useful when it has context.">
              <p>
                Influence, transmission, exposure, absorption, regime and confidence — dimensions
                that move analysis from isolated signals toward systemic understanding.
              </p>
            </SectionHeading>
          </Reveal>
          <div className="mt-12">
            <SixDimensions />
          </div>
        </div>
      </section>

      {/* 07 Human decision */}
      <section className="border-y border-[rgba(232,236,244,0.08)] py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
          <Reveal>
            <h2 className="font-display text-3xl text-off-white md:text-5xl">
              We don't seek to replace judgement.
              <span className="mt-3 block text-teal">We seek to inform it.</span>
            </h2>
            <p className="mt-8 text-base leading-relaxed text-muted md:text-lg">
              More context. More connections. More visibility into potential consequences. Better
              questions. The final judgement remains human.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 08 Ecosystem */}
      <section className="bg-section-soft py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <SectionHeading title="One intelligence philosophy. Multiple decision environments.">
              <p>
                Ripplytics is developing a family of intelligence applications around a common
                philosophy.
              </p>
            </SectionHeading>
          </Reveal>
          <div className="mt-12">
            <ProductEcosystem />
          </div>
        </div>
      </section>

      {/* 09 Ambition */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <SectionHeading title="From applications to connected intelligence.">
              <p>
                Ripplytics begins with specialised applications. Future stages are ambition — not a
                claim about what exists today.
              </p>
            </SectionHeading>
          </Reveal>
          <div className="mt-12">
            <AmbitionArc />
          </div>
        </div>
      </section>

      {/* Final */}
      <section className="border-t border-[rgba(232,236,244,0.08)] bg-atmosphere py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
          <Reveal>
            <h2 className="font-display text-4xl text-off-white md:text-5xl">
              The origin is only the beginning.
            </h2>
            <p className="mt-6 text-lg text-muted">
              The event is visible.
              <br />
              The ripple is where the story becomes interesting.
            </p>
            <p className="mt-10 font-display text-3xl text-off-white">Ripplytics</p>
            <p className="mt-3 text-sm uppercase tracking-[0.16em] text-teal">
              {brand.positioning}
            </p>
            <p className="mt-2 text-xl text-mist">{brand.tagline}</p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Button href="/intelligence">Explore the Intelligence</Button>
              <Button href="/ripplepoint" variant="secondary">
                Explore RipplePoint
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
