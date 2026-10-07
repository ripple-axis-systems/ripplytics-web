import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { HeroRipple } from "@/components/visuals/HeroRipple";
import { ProductEcosystem } from "@/components/visuals/ProductEcosystem";
import { RippleSequence } from "@/components/visuals/RippleSequence";
import { SignalConnect } from "@/components/visuals/SignalConnect";
import { SixDimensions } from "@/components/visuals/SixDimensions";
import { brand } from "@/lib/theme";

const beyondQuestions = [
  "Where did the pressure originate?",
  "What signals indicate that it is becoming meaningful?",
  "What is it connected to?",
  "Through what pathways can it travel?",
  "Where can the consequences become material?",
  "How much pressure can the affected system absorb?",
  "What does the wider environment look like?",
  "What deserves attention now?",
];

export function HomePage() {
  return (
    <div>
      {/* 01 Hero */}
      <section className="bg-atmosphere relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-28 md:px-8 md:pb-28 md:pt-36 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="animate-fade-rise">
            <p className="font-display text-5xl leading-[1.05] text-off-white md:text-6xl lg:text-[4.25rem]">
              Ripplytics
            </p>
            <h1 className="mt-6 max-w-2xl font-display text-3xl leading-tight text-mist md:text-4xl lg:text-[2.65rem]">
              A disruption rarely stays where it begins.
            </h1>
            <div className="mt-6 max-w-xl space-y-3 text-base leading-relaxed text-muted md:text-lg">
              <p>A tremor in one market can become pressure in another.</p>
              <p>
                A decision made thousands of miles away can alter the cost of doing business here.
              </p>
              <p>A shift in confidence can travel from a headline to a balance sheet.</p>
              <p className="text-mist/90">
                The real story is not just what happened. It is where the consequences travel next.
              </p>
            </div>
            <p className="mt-8 text-sm uppercase tracking-[0.16em] text-teal">
              {brand.positioning}
            </p>
            <p className="mt-2 font-display text-xl text-off-white">{brand.tagline}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="#intelligence">Explore Ripplytics</Button>
              <Button href="/ripplepoint" variant="secondary">
                Explore RipplePoint
              </Button>
            </div>
          </div>
          <div className="animate-fade-rise" style={{ animationDelay: "0.2s" }}>
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
                The world produces signals continuously. A development that appears isolated may be
                connected to forces much larger than itself.
              </p>
            </SectionHeading>
          </Reveal>
          <div className="mt-12">
            <SignalConnect />
          </div>
          <Reveal>
            <p className="mt-10 max-w-2xl text-base text-muted md:text-lg">
              Ripplytics is built to explore that chain — from origin through connection,
              transmission, exposure and absorption.
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
                weakens. Sometimes it travels further than expected. Sometimes different ripples
                meet and amplify one another. Sometimes the pressure is absorbed.
              </p>
              <p>
                That is why we believe risk should not be viewed as a static point on a chart. Risk
                moves. Ripplytics seeks to understand that movement.
              </p>
            </SectionHeading>
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-12 flex flex-wrap gap-2 text-xs uppercase tracking-[0.12em] text-muted md:gap-3 md:text-sm">
              {[
                "Origin",
                "Signal",
                "Connection",
                "Transmission",
                "Exposure",
                "Absorption",
                "Impact",
              ].map((step, index) => (
                <span key={step} className="inline-flex items-center gap-2 md:gap-3">
                  <span className="rounded-sm border border-teal/25 bg-teal/5 px-3 py-2 text-teal">
                    {step}
                  </span>
                  {index < 6 ? <span className="text-white/20">→</span> : null}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 04 Beyond the event */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <SectionHeading title="Don't stop at what happened.">
              <p>
                Traditional analysis often begins and ends with the event. Ripplytics asks what
                comes after it. This is the difference between observing a signal and understanding
                its potential significance.
              </p>
            </SectionHeading>
          </Reveal>
          <div className="mt-12 grid gap-3 md:grid-cols-2">
            {beyondQuestions.map((question, index) => (
              <Reveal key={question} delay={index * 40}>
                <div className="border-l border-teal/35 bg-white/[0.02] px-5 py-4 text-mist/90">
                  {question}
                </div>
              </Reveal>
            ))}
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
              <p>
                Select each stage to explore how Ripplytics follows pressure through a connected
                system.
              </p>
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
                Ripplytics considers multiple dimensions when interpreting risk — influence,
                transmission, exposure, absorption, regime and confidence.
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
              Ripplytics is not designed to make decisions on behalf of people. It is designed to
              help decision-makers see more of the environment surrounding those decisions. More
              context. More connections. More visibility into potential consequences. Better
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
                Different people experience risk differently. Yet the underlying intelligence
                challenge remains connected. Ripplytics is developing a family of intelligence
                applications around this common philosophy.
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
                Ripplytics begins with specialised applications. The larger opportunity lies in
                what happens when intelligence becomes connected. Future stages are ambition — not
                a claim about what exists today.
              </p>
            </SectionHeading>
          </Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {[
              {
                stage: "Today",
                title: "Purpose-built intelligence applications.",
              },
              {
                stage: "Next",
                title: "Connected intelligence across domains.",
              },
              {
                stage: "Longer term",
                title: "An intelligence infrastructure for understanding interconnected risk.",
              },
            ].map((item, index) => (
              <Reveal key={item.stage} delay={index * 80}>
                <div className="h-full rounded-sm border border-[rgba(232,236,244,0.1)] bg-white/[0.02] p-6">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-teal">{item.stage}</p>
                  <p className="mt-4 font-display text-xl text-off-white">{item.title}</p>
                </div>
              </Reveal>
            ))}
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
