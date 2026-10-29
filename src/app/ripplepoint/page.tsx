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
    "RipplePoint Live Beta: global conditions, connected signals, transmission and absorption — verified dashboard outputs for investors and analysts. Credentialed subscriber access.",
  path: "/ripplepoint",
});

/** Verified Live Beta surfaces only — from ripplepoint-react inventory. */
const seeSurfaces = [
  {
    title: "System signal & briefing",
    body: "Net-regime view and plain-English briefing: what changed, monitoring conditions, and curated paths into investigation.",
  },
  {
    title: "Pillar scores & reasoning",
    body: "GCPI, GFSI and GRCI condition scores; SSI systemic stability reasoning; operational alert levels derived from SSI.",
  },
  {
    title: "Transmission & the Ripple Field",
    body: "TRI pathways and a map-first Ripple Field — click a country to explore residual-ripple arcs and related patches.",
  },
  {
    title: "Absorption & assurance",
    body: "MASI market absorption intelligence; EII evidence integrity; ACI adaptive capacity (structural, quarterly).",
  },
  {
    title: "19-country geography",
    body: "Country and cluster lenses across featured markets (including India and the United States) with regime-band context.",
  },
  {
    title: "Investigation layers",
    body: "Risk events with a Signal → Story → Impact walkthrough; curated sectors, instruments and relationships — deliberately not a full securities database.",
  },
];

const useMoments = [
  {
    title: "Before a macro or geopolitics meeting",
    body: "Open briefing and system signal to see condition scores, SSI regime and alert level — then decide what needs a deeper look.",
  },
  {
    title: "When a headline hits",
    body: "Check whether related pressure shows up in transmission (TRI / Ripple Field) or country lenses — not only in the first story.",
  },
  {
    title: "When you need the chain, not the print",
    body: "Walk a risk event through signal, story, impact and transmission so the discussion stays on pathways and exposure.",
  },
  {
    title: "When absorption matters",
    body: "Read MASI horizons and assurance (EII) to ask how much shock a market context might absorb — methodology views, not predicted loss.",
  },
];

const interpretActions = [
  "See system state — scores, regime and alert level together.",
  "See what changed over recent days.",
  "Interpret via Questions Answered and the Emerging Risks Matrix.",
  "Trace transmission on TRI pathways or the Ripple Field map.",
  "Drill into pillar evidence pages and country views.",
];

const notClaims = [
  "Forecasts or predictions of future conditions",
  "Investment advice, buy/sell signals or portfolio recommendations",
  "Open self-serve signup or a public app-store style product",
  "Comprehensive global security monitoring",
  "CCI or Ripple Impact as live surfaces (marked SOON in product)",
];

export default function RipplePointPage() {
  return (
    <div className="bg-atmosphere">
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-16 pt-32 md:px-8 md:pb-24 md:pt-40 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <StatusBadge status="live-beta" />
          <h1 className="mt-6 max-w-3xl font-display text-4xl leading-tight text-off-white md:text-6xl">
            Global risk, connected.
            <span className="mt-3 block text-teal">See what you can use today.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            RipplePoint is Ripplytics&apos; Live Beta for global risk and macro intelligence —
            diagnostic conditions, relationships and transmission, not forecasts or trade advice.
          </p>
          <div className="mt-8">
            <Button href="/contact?interest=RipplePoint">Request Live Beta access</Button>
            <p className="mt-3 max-w-md text-xs leading-relaxed text-muted">
              Access is credentialed subscriber login (email/password). Request evaluation access
              via contact; accounts are provisioned for approved subscribers — not open public
              signup.
            </p>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <HeroRipple />
        </Reveal>
      </section>

      <section className="border-y border-[rgba(28,33,40,0.08)] bg-section-soft py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="What you can see"
              title="Verified Live Beta surfaces."
            >
              <p>
                Only outputs present in the live RipplePoint dashboard. Instrument coverage is
                curated for transmission investigation — not Bloomberg-style security coverage.
              </p>
            </SectionHeading>
          </Reveal>
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {seeSurfaces.map((item) => (
              <div
                key={item.title}
                className="rounded-sm border border-[rgba(28,33,40,0.1)] bg-[rgba(28,33,40,0.035)] p-5"
              >
                <p className="font-display text-xl text-off-white">{item.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="What you can do"
              title="Interpret conditions. Investigate pathways."
            >
              <p>
                RipplePoint describes conditions and relationships so human judgement stays in the
                loop.
              </p>
            </SectionHeading>
          </Reveal>
          <ul className="mt-10 max-w-3xl space-y-3">
            {interpretActions.map((item) => (
              <li key={item} className="flex gap-3 text-muted">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal/70" aria-hidden />
                <span className="text-base leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-y border-[rgba(28,33,40,0.08)] bg-section-soft py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <SectionHeading title="Example use moments">
              <p>Decision context — not a promise that every session looks the same.</p>
            </SectionHeading>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {useMoments.map((item) => (
              <div
                key={item.title}
                className="rounded-sm border border-[rgba(28,33,40,0.1)] bg-navy/40 p-6"
              >
                <h3 className="font-display text-xl text-off-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <SectionHeading eyebrow="Access" title="How to evaluate RipplePoint.">
              <p>
                Live Beta runs as an authenticated dashboard for approved institutional
                subscribers. Partner preview may be enabled in controlled environments; the public
                site path is request access via contact, then credentialed login.
              </p>
            </SectionHeading>
          </Reveal>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button href="/contact?interest=RipplePoint">Request access</Button>
            <Button href="/applications" variant="secondary">
              See other applications
            </Button>
          </div>
        </div>
      </section>

      <section className="border-y border-[rgba(28,33,40,0.08)] bg-section-soft py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="The ripple lens"
              title="How connection shows up in the product."
            >
              <p>
                Supporting philosophy: move from the event or indicator toward connection,
                transmission, exposure and absorption — visible in TRI, Ripple Field, risk-event
                walkthroughs and country lenses.
              </p>
            </SectionHeading>
          </Reveal>
          <Reveal delay={80}>
            <div className="mt-12 flex flex-wrap gap-2 text-sm text-muted">
              {[
                "Event",
                "Signal",
                "Connection",
                "Transmission",
                "Exposure",
                "Absorption",
                "Interpretation",
              ].map((step, index) => (
                <span key={step} className="inline-flex items-center gap-2">
                  <span className="rounded-sm border border-teal/25 px-3 py-2 text-teal">{step}</span>
                  {index < 6 ? <span className="text-[rgba(28,33,40,0.25)]">→</span> : null}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <SectionHeading title="What RipplePoint is not">
              <p>Honesty protects trust. We do not claim the following in Live Beta.</p>
            </SectionHeading>
          </Reveal>
          <ul className="mt-10 max-w-3xl space-y-3">
            {notClaims.map((item) => (
              <li key={item} className="flex gap-3 text-muted">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[rgba(28,33,40,0.28)]" aria-hidden />
                <span className="text-base leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-[rgba(28,33,40,0.08)] py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
          <Reveal>
            <h2 className="font-display text-3xl text-off-white md:text-4xl">
              Don&apos;t just ask what moved.
              <span className="mt-3 block">Ask what moved it.</span>
              <span className="mt-3 block text-teal">And then ask what it may move next.</span>
            </h2>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Button href="/contact?interest=RipplePoint">Request Live Beta access</Button>
              <Button href="/how-we-think" variant="secondary">
                How we think
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
