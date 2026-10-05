import { projects } from "@/data";
import { siteConfig } from "@/lib/site";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { LinkButton } from "@/components/ui/link-button";

const hasGithub = !siteConfig.links.github.includes("your-username");

export function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="px-6 pt-16 pb-28 md:px-10 md:pt-24 md:pb-40"
    >
      <SectionHeading
        id="projects-heading"
        eyebrow="03 — Projects"
        title="Projects"
        aside={`${String(projects.length).padStart(2, "0")} projects`}
      />

      <Reveal
        as="p"
        className="text-paper/60 -mt-6 mb-14 max-w-xl text-base leading-relaxed"
      >
        Selected work across full-stack web, mobile, GIS, machine learning and embedded
        systems.
      </Reveal>

      <ol className="border-paper/15 border-t">
        {projects.map((project, i) => (
          <Reveal as="li" key={project.slug} className="border-paper/15 border-b">
            <article
              id={project.slug}
              aria-labelledby={`${project.slug}-title`}
              className="group hover:bg-paper/[0.03] grid scroll-mt-24 gap-6 py-10 transition-colors duration-500 md:grid-cols-[6rem_1.1fr_1.4fr] md:gap-10 md:px-4 md:py-14"
            >
              {/* index */}
              <span
                aria-hidden
                className="font-display group-hover:text-accent text-5xl leading-none font-extrabold text-transparent transition-colors duration-500 [-webkit-text-stroke:1px_var(--color-paper)] group-hover:[-webkit-text-stroke-color:var(--color-accent)] md:text-6xl"
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* title + summary */}
              <div>
                <p className="text-accent flex items-center gap-3 font-mono text-[11px] tracking-[0.25em] uppercase">
                  {project.category}
                  {project.featured && (
                    <span className="border-accent/40 border px-2 py-0.5 text-[9px] tracking-[0.2em]">
                      Featured
                    </span>
                  )}
                </p>
                <h3
                  id={`${project.slug}-title`}
                  className="font-display mt-4 text-3xl leading-[1.05] font-bold tracking-tight uppercase transition-transform duration-500 group-hover:translate-x-2 md:text-5xl"
                >
                  {project.title}
                </h3>
                <p className="text-paper/70 mt-5 max-w-md text-base leading-relaxed">
                  {project.summary}
                </p>
              </div>

              {/* detail */}
              <div>
                <p className="text-paper/60 max-w-xl text-sm leading-relaxed">
                  {project.description}
                </p>

                <ul className="marker:text-accent text-paper/70 mt-6 max-w-xl list-disc space-y-2 pl-5 text-sm leading-relaxed">
                  {project.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>

                <ul aria-label={`${project.title} tech stack`} className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <li
                      key={tech}
                      className="border-paper/25 text-paper/70 group-hover:border-paper/50 border px-3 py-1.5 font-mono text-[10px] tracking-[0.15em] uppercase transition-colors duration-300"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                {(project.links?.live || project.links?.repo) && (
                  <div className="mt-8 flex flex-wrap gap-3">
                    {project.links.live && (
                      <LinkButton
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} — live site (opens in a new tab)`}
                      >
                        Live site ↗
                      </LinkButton>
                    )}
                    {project.links.repo && (
                      <LinkButton
                        variant="ghost"
                        href={project.links.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} — source code (opens in a new tab)`}
                      >
                        Source ↗
                      </LinkButton>
                    )}
                  </div>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </ol>

      {hasGithub && (
        <Reveal className="mt-14">
          <LinkButton
            variant="ghost"
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            More on GitHub ↗
          </LinkButton>
        </Reveal>
      )}
    </section>
  );
}