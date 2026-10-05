import { profile } from "@/data";
import { siteConfig } from "@/lib/site";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { ContactForm } from "@/components/contact/contact-form";

const socials = [
  { label: "GitHub", href: siteConfig.links.github },
  { label: "LinkedIn", href: siteConfig.links.linkedin },
].filter((s) => !s.href.includes("your-username"));

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="px-6 pt-16 pb-28 md:px-10 md:pt-24 md:pb-40"
    >
      <SectionHeading
        id="contact-heading"
        eyebrow="04 — Contact"
        title="Contact"
        aside="Let's talk"
      />

      <div className="grid gap-16 md:grid-cols-[1fr_1.2fr] md:gap-20">
        <div>
          <Reveal>
            <h3 className="font-display max-w-md text-3xl leading-[1.1] font-bold tracking-tight md:text-5xl">
              {profile.contact.heading}
            </h3>
          </Reveal>
          <Reveal as="p" delay={0.1} className="text-paper/70 mt-6 max-w-md text-base leading-relaxed">
            {profile.contact.blurb}
          </Reveal>

          <Reveal delay={0.2} className="mt-10 space-y-8">
            <div>
              <p className="text-paper/40 font-mono text-[10px] tracking-[0.25em] uppercase">
                Email
              </p>
              <a
                href={`mailto:${profile.contact.email}`}
                className="link-sweep font-display hover:text-accent mt-2 inline-block text-xl font-bold tracking-tight break-all transition-colors duration-500 md:text-2xl"
              >
                {profile.contact.email}
              </a>
            </div>

            <div>
              <p className="text-paper/40 font-mono text-[10px] tracking-[0.25em] uppercase">
                Based in
              </p>
              <p className="text-paper/80 mt-2 text-base">{profile.location}, India</p>
            </div>

            {socials.length > 0 && (
              <div>
                <p className="text-paper/40 font-mono text-[10px] tracking-[0.25em] uppercase">
                  Elsewhere
                </p>
                <ul className="mt-2 flex gap-6">
                  {socials.map((s) => (
                    <li key={s.label}>
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-sweep text-paper/80 hover:text-accent transition-colors duration-500"
                      >
                        {s.label} ↗
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}