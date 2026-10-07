import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { HeroRipple } from "@/components/visuals/HeroRipple";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "RipplePoint",
  description:
    "RipplePoint is Ripplytics' global risk and macro intelligence application — designed to move from event awareness to connected risk understanding. Live Beta.",
  path: "/ripplepoint",
});

const lens = [
  { label: "Identify", body: "What is happening?" },
  { label: "Classify", body: "What kind of risk are we seeing?" },
  { label: "Connect", body: "What is related to it?" },
  { label: "Trace", body: "Where could the pressure travel?" },
  { label: "Assess", body: "How significant could it become?" },
  { label: "Interpret", body: "What does the broader environment tell us?" },
];

const audiences = [
  {
    title: "Investment professionals",
    body: "Global markets are influenced by forces that frequently originate outside the asset being analysed. RipplePoint provides a broader context for understanding those forces — alongside existing research, market data and professional judgement.",
  },
  {
    title: "Strategy teams",
    body: "External risks can enter an organisation through multiple pathways. RipplePoint provides a way to monitor the broader environment in which strategic decisions are made.",
  },
  {
    title: "Analysts",
    body: "Research often becomes fragmented across sources. RipplePoint is intended to provide a more connected perspective on the signals that matter.",
  },
  {
    title: "Business leaders",
    body: "Monitor developments beyond the boundaries of the organisation and understand how external pressure may become relevant.",
  },
];

export default function RipplePointPage() {
  return (
    <div className="bg-atmosphere">
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-16 pt-32 md:px-8 md:pb-24 md:pt-40 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <StatusBadge status="live-beta" />
          <h1 className="mt-6 max-w-3xl font-display text-4xl leading-tight text-off-white md:text-6xl">
            The world moves in ripples.
            <span className="mt-3 block text-teal">See beyond the first movement.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            RipplePoint is Ripplytics' global risk and macro intelligence application. It is
            designed to help users move from event awareness to connected risk understanding.
          </p>
          <div className="mt-8">
            <Button href="/contact?interest=RipplePoint">Enter RipplePoint</Button>
            <p className="mt-3 text-xs text-muted">
              Live Beta — request access via contact. No public product URL is published yet.
            </p>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <HeroRipple />
        </Reveal>
      </section>

      <section className="border-y border-[rgba(232,236,244,0.08)] bg-section-soft py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <SectionHeading title="The headline is rarely the whole story.">
              <p>
                A geopolitical event may appear in the news. But what happens after it? Does it
                affect commodities? Change market expectations? Alter currency pressure? Create
                supply-chain stress? Interact with an already fragile environment? Matter to a
                particular portfolio or business?
              </p>
              <p>RipplePoint is built around these questions.</p>
            </SectionHeading>
          </Reveal>
          <Reveal delay={80}>
            <div className="mt-12 flex flex-wrap gap-2 text-sm text-muted">
              {["Event", "Signal", "Connection", "Transmission", "Exposure", "Interpretation", "Decision"].map(
                (step, index) => (
                  <span key={step} className="inline-flex items-center gap-2">
                    <span className="rounded-sm border border-teal/25 px-3 py-2 text-teal">{step}</span>
                    {index < 6 ? <span className="text-white/20">→</span> : null}
                  </span>
                ),
              )}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <SectionHeading eyebrow="The RipplePoint lens" title="From information to interpretation." />
          </Reveal>
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {lens.map((item) => (
              <div
                key={item.label}
                className="rounded-sm border border-[rgba(232,236,244,0.1)] bg-white/[0.02] p-5"
              >
                <p className="font-display text-xl text-off-white">{item.label}</p>
                <p className="mt-2 text-sm text-muted">{item.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 max-w-2xl text-muted">
            RipplePoint is not intended to be another news dashboard. Its purpose is to move beyond
            information aggregation toward risk interpretation — relationships, systemic influence,
            transmission, exposure, stress, regime, absorption and confidence.
          </p>
        </div>
      </section>

      <section className="border-y border-[rgba(232,236,244,0.08)] bg-section-soft py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <SectionHeading title="Who it is for" />
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {audiences.map((item) => (
              <div
                key={item.title}
                className="rounded-sm border border-[rgba(232,236,244,0.1)] bg-navy/40 p-6"
              >
                <h3 className="font-display text-xl text-off-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
          <Reveal>
            <h2 className="font-display text-3xl text-off-white md:text-4xl">
              Don't just ask what moved.
              <span className="mt-3 block">Ask what moved it.</span>
              <span className="mt-3 block text-teal">And then ask what it may move next.</span>
            </h2>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Button href="/contact?interest=RipplePoint">Enter RipplePoint</Button>
              <Button href="/contact?interest=RipplePoint" variant="secondary">
                Discuss access
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
