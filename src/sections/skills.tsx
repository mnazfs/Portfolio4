import { skillGroups, softSkills } from "@/data";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="px-6 pt-16 pb-28 md:px-10 md:pt-24 md:pb-40"
    >
      <SectionHeading
        id="skills-heading"
        eyebrow="02 — Skills"
        title="Skills"
        aside="What I work with"
      />

      <ul className="border-paper/15 border-t">
        {skillGroups.map((group, i) => (
          <Reveal
            as="li"
            key={group.id}
            delay={i * 0.08}
            className="group border-paper/15 relative overflow-hidden border-b"
          >
            {/* hover fill */}
            <div
              aria-hidden
              className="bg-paper absolute inset-0 origin-bottom scale-y-0 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-y-100 motion-reduce:transition-none"
            />

            <div className="group-hover:text-ink relative grid gap-5 py-8 transition-colors duration-500 md:grid-cols-[4rem_1fr_1.6fr] md:items-center md:gap-8 md:px-4 md:py-12">
              <span
                aria-hidden
                className="text-paper/40 group-hover:text-accent font-mono text-[11px] tracking-[0.2em] transition-colors duration-500"
              >
                ({String(i + 1).padStart(2, "0")})
              </span>

              <h3 className="font-display text-3xl font-bold tracking-tight uppercase md:text-4xl">
                {group.label}
              </h3>

              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="border-paper/25 text-paper/75 group-hover:border-ink/30 group-hover:text-ink/80 hover:!bg-ink hover:!text-paper border px-3 py-1.5 font-mono text-[11px] tracking-[0.15em] uppercase transition-colors duration-300"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </ul>

      <div className="mt-16 grid gap-6 md:grid-cols-[1fr_2fr] md:gap-20">
        <h3 className="text-paper/50 font-mono text-[11px] tracking-[0.3em] uppercase">
          Soft skills
        </h3>
        <Reveal>
          <ul className="flex flex-wrap gap-x-8 gap-y-3">
            {softSkills.map((s) => (
              <li
                key={s}
                className="font-display text-xl font-semibold tracking-tight md:text-2xl"
              >
                <span aria-hidden className="text-accent mr-3">
                  ✦
                </span>
                {s}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}