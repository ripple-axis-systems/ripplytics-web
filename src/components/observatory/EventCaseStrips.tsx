import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ILLUSTRATIVE_DISCLAIMER, realWorldEpisodes } from "@/lib/content";

const fields = [
  { key: "happened", label: "What happened" },
  { key: "began", label: "Where it began" },
  { key: "traveled", label: "Where pressure traveled" },
  { key: "needed", label: "What decision-makers needed to see" },
] as const;

export function EventCaseStrips() {
  return (
    <section
      id="real-world-cases"
      className="scroll-mt-28 border-y border-[rgba(232,236,244,0.08)] bg-section-soft py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <SectionHeading eyebrow="Illustrative cases" title="Ripples in the real world.">
            <p>
              Three public episodes people can recognise. Used only to illustrate how origin,
              transmission and exposure can differ from the first headline — not as live
              intelligence output.
            </p>
          </SectionHeading>
        </Reveal>

        <div className="mt-14 space-y-14">
          {realWorldEpisodes.map((ep, index) => (
            <Reveal key={ep.id} delay={index * 40}>
              <article className="border-t border-[rgba(232,236,244,0.12)] pt-10">
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-teal">{ep.period}</p>
                  <h3 className="font-display text-2xl text-off-white md:text-3xl">{ep.title}</h3>
                </div>

                <div className="mt-8 grid gap-8 md:grid-cols-2">
                  {fields.map((field) => (
                    <div key={field.key} className="border-l border-teal/30 pl-4">
                      <p className="text-[11px] uppercase tracking-[0.16em] text-teal/80">
                        {field.label}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-muted md:text-[0.95rem]">
                        {ep[field.key]}
                      </p>
                    </div>
                  ))}
                </div>

                <p className="mt-8 text-[12px] leading-relaxed text-muted/70">
                  {ILLUSTRATIVE_DISCLAIMER}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
