import { RealWorldRipples } from "@/components/home/RealWorldRipples";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { AmbitionArc } from "@/components/visuals/AmbitionArc";
import { HeroRipple } from "@/components/visuals/HeroRipple";
import { InquiryField } from "@/components/visuals/InquiryField";
import { ProductEcosystem } from "@/components/visuals/ProductEcosystem";
import { RipplePath } from "@/components/visuals/RipplePath";
import { RippleSequence } from "@/components/visuals/RippleSequence";
import { SignalConnect } from "@/components/visuals/SignalConnect";
import { SixDimensions } from "@/components/visuals/SixDimensions";
import { getProduct } from "@/lib/products";
import { brand } from "@/lib/theme";
import Link from "next/link";

export function HomePage() {
  const ripplepoint = getProduct("ripplepoint")!;

  return (
    <div>
      {/* 01 Hero — locked Round 5 promise */}
      <section className="bg-atmosphere relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-32 md:px-8 md:pb-28 md:pt-40 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="animate-fade-rise">
            <p className="font-display text-5xl leading-[1.02] tracking-[-0.03em] text-off-white md:text-6xl lg:text-[4.5rem]">
              Ripplytics
            </p>
            <h1 className="mt-7 max-w-xl font-display text-3xl leading-[1.15] text-mist md:text-[2.35rem] lg:text-[2.6rem]">
              Risk insight that informs the decision.
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted md:text-lg">
              Prevailing and emerging risk as inputs before you decide — not a post-mortem of
              choices already made.
            </p>
            <p className="mt-6 max-w-lg text-sm leading-relaxed text-mist/80 md:text-[0.95rem]">
              Ripplytics develops intelligence tools that help investors, analysts and businesses
              move beyond isolated information to a clearer view of risk, context and potential
              consequences.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button href="/ripplepoint">Explore RipplePoint</Button>
              <Button href="/how-we-think" variant="secondary">
                How we think
              </Button>
            </div>
          </div>
          <div className="animate-fade-rise" style={{ animationDelay: "0.18s" }}>
            <HeroRipple />
          </div>
        </div>
      </section>

      {/* 02 What you can use — RipplePoint Live Beta, no primary hierarchy */}
      <section className="border-t border-[rgba(28,33,40,0.08)] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Available now"
              title="RipplePoint — Live Beta."
            >
              <p>
                RipplePoint is available as Live Beta: a credentialed dashboard that helps you read
                global conditions, follow connected signals and see where pressure may travel —
                insight for decisions, not forecasts or portfolio recommendations.
              </p>
            </SectionHeading>
          </Reveal>
          <Reveal delay={60}>
            <Link
              href="/ripplepoint"
              className="mt-12 block overflow-hidden border border-teal/35 bg-[radial-gradient(ellipse_at_80%_0%,rgba(58,90,114,0.18),transparent_55%),linear-gradient(160deg,#f2efe8,#e4e1d9)] p-8 transition hover:border-teal/55 md:p-10"
            >
              <div className="flex flex-wrap items-center gap-3">
                <StatusBadge status="live-beta" />
                <span className="text-xs uppercase tracking-[0.14em] text-teal/90">
                  {ripplepoint.category}
                </span>
              </div>
              <h3 className="mt-5 font-display text-3xl text-off-white md:text-4xl">
                {ripplepoint.name}
              </h3>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted">
                {ripplepoint.description}
              </p>
              <span className="mt-8 inline-flex text-sm text-teal">Explore RipplePoint →</span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 03 Contrast — isolated tools vs connected consequence */}
      <section className="border-y border-[rgba(28,33,40,0.08)] bg-section-soft py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <SectionHeading title="Most tools report the event or the indicator.">
              <p>
                Ripplytics helps you see how pressure connects and where consequence may travel —
                so decisions start from relationships, not isolated prints.
              </p>
            </SectionHeading>
          </Reveal>
          <div className="mt-12">
            <SignalConnect />
          </div>
          <Reveal>
            <p className="mt-10 max-w-2xl text-base text-muted md:text-lg">
              The information is often already there. The difficult part is understanding what it
              means together — and what deserves attention next.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 04 Application family — equal suite; Live Beta where available */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Applications"
              title="A family of risk-intelligence applications."
            >
              <p>
                RipplePoint is available as Live Beta. The wider suite — portfolio, market,
                business and signal intelligence — is in deep R&amp;D toward launch. One philosophy;
                equal ambition across the family.
              </p>
            </SectionHeading>
          </Reveal>
          <div className="mt-12">
            <ProductEcosystem />
          </div>
        </div>
      </section>

      {/* 05 Supporting — ripple philosophy */}
      <section className="border-y border-[rgba(28,33,40,0.08)] bg-section-soft py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <SectionHeading eyebrow="How we think" title="Every risk has a ripple.">
              <p>
                A disruption rarely stays where it begins. An event starts somewhere; its
                consequences rarely end there. Sometimes the ripple weakens. Sometimes it
                amplifies. Risk moves — Ripplytics seeks to understand that movement.
              </p>
            </SectionHeading>
          </Reveal>
          <div className="mt-12">
            <RipplePath />
          </div>
        </div>
      </section>

      {/* 06 Beyond the event */}
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

      {/* 07 Ripple sequence */}
      <section
        id="intelligence"
        className="scroll-mt-24 border-y border-[rgba(28,33,40,0.08)] bg-section-soft py-20 md:py-28"
      >
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <SectionHeading eyebrow="Follow the ripple" title="From origin to consequence.">
              <p>
                Select each stage to explore how pressure moves through a connected system — an
                educational lens, not a live RipplePoint screen.
              </p>
            </SectionHeading>
          </Reveal>
          <div className="mt-12">
            <RippleSequence />
          </div>
        </div>
      </section>

      {/* 08 Six dimensions */}
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

      {/* 09 Real-world ripples teaser */}
      <RealWorldRipples />

      {/* 10 Human decision */}
      <section className="border-y border-[rgba(28,33,40,0.08)] py-20 md:py-28">
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

      {/* 11 Roadmap */}
      <section className="bg-section-soft py-20 md:py-28">
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
      <section className="border-t border-[rgba(28,33,40,0.08)] bg-atmosphere py-24 md:py-32">
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
              <Button href="/ripplepoint">Explore RipplePoint</Button>
              <Button href="/applications" variant="secondary">
                View applications
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
