import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  episodePathHighlights,
  MiniPathSchematic,
} from "@/components/visuals/MiniPathSchematic";
import { ILLUSTRATIVE_DISCLAIMER, realWorldEpisodes } from "@/lib/content";

export function RealWorldRipples() {
  return (
    <section className="border-y border-[rgba(232,236,244,0.08)] bg-section-soft py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <SectionHeading eyebrow="Observatory" title="Ripples in the real world.">
            <p>
              Well-known public episodes, told as educational illustrations of how pressure can
              travel — not as product claims or predictions.
            </p>
          </SectionHeading>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {realWorldEpisodes.map((ep, index) => (
            <Reveal key={ep.id} delay={index * 50}>
              <article className="flex h-full flex-col border-t border-teal/35 pt-5">
                <p className="text-[11px] uppercase tracking-[0.18em] text-teal">{ep.period}</p>
                <h3 className="mt-3 font-display text-xl leading-snug text-off-white md:text-[1.35rem]">
                  {ep.title}
                </h3>
                <div className="mt-4">
                  <MiniPathSchematic
                    highlight={episodePathHighlights[ep.id] ?? [0, 4]}
                  />
                </div>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{ep.teaser}</p>
                <p className="mt-5 text-[11px] leading-relaxed text-muted/65">
                  {ILLUSTRATIVE_DISCLAIMER}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-10">
            <Link
              href="/observatory#real-world-cases"
              className="text-sm font-medium text-teal transition-colors hover:text-off-white"
            >
              Read the fuller case strips →
            </Link>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
