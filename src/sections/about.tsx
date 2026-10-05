import {
  profile,
  experience,
  education,
  certifications,
  awards,
  languages,
} from "@/data";
import { Reveal } from "@/components/motion/reveal";
import { ScrollWords } from "@/components/motion/scroll-words";
import { SectionHeading } from "@/components/ui/section-heading";

const range = (start: string, end: string) => (start === end ? start : `${start} — ${end}`);

type TimelineItem = {
  title: string;
  subtitle: string;
  meta: string;
  dates: string;
  bullets?: readonly string[];
};

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="text-paper/50 mb-8 font-mono text-[11px] tracking-[0.3em] uppercase">
        {title}
      </h3>
      {children}
    </div>
  );
}

function Timeline({ items }: { items: readonly TimelineItem[] }) {
  return (
    <ol className="border-paper/15 relative border-l">
      {items.map((item, i) => (
        <Reveal as="li" key={item.title + item.dates} delay={i * 0.08} className="relative pb-12 pl-8 last:pb-0">
          <span
            aria-hidden
            className="bg-accent absolute top-2 -left-[4.5px] h-2 w-2 rounded-full"
          />
          <p className="text-accent font-mono text-[11px] tracking-[0.2em] uppercase">
            <time>{item.dates}</time>
          </p>
          <h4 className="font-display mt-3 text-2xl font-bold tracking-tight md:text-3xl">
            {item.title}
          </h4>
          <p className="text-paper/70 mt-1 text-base">{item.subtitle}</p>
          <p className="text-paper/40 mt-1 font-mono text-[10px] tracking-[0.2em] uppercase">
            {item.meta}
          </p>
          {item.bullets && (
            <ul className="text-paper/60 mt-5 max-w-xl list-disc space-y-3 pl-5 text-sm leading-relaxed marker:text-accent">
              {item.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          )}
        </Reveal>
      ))}
    </ol>
  );
}

function RowList({ rows }: { rows: readonly { title: string; sub: string }[] }) {
  return (
    <ul className="border-paper/15 border-t">
      {rows.map((r, i) => (
        <Reveal
          as="li"
          key={r.title}
          delay={i * 0.06}
          className="group border-paper/15 hover:bg-paper/5 grid grid-cols-[1fr_auto] items-baseline gap-4 border-b py-5 transition-colors duration-500 md:px-3"
        >
          <span className="font-display text-lg font-bold tracking-tight transition-transform duration-500 group-hover:translate-x-2 md:text-xl">
            {r.title}
          </span>
          <span className="text-paper/50 font-mono text-[10px] tracking-[0.2em] uppercase">
            {r.sub}
          </span>
        </Reveal>
      ))}
    </ul>
  );
}

export function About() {
  const experienceItems: TimelineItem[] = experience.map((e) => ({
    title: e.role,
    subtitle: e.org,
    meta: e.location,
    dates: range(e.start, e.end),
    bullets: e.bullets,
  }));

  const educationItems: TimelineItem[] = education.map((e) => ({
    title: e.degree,
    subtitle: e.institution,
    meta: e.location,
    dates: range(e.start, e.end),
  }));

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="px-6 py-28 md:px-10 md:py-40"
    >
      <SectionHeading id="about-heading" eyebrow="01 — About" title="About" aside="Background" />

      <ScrollWords
        text={profile.about.statement}
        className="font-display max-w-5xl text-3xl leading-[1.15] font-semibold tracking-tight md:text-6xl"
      />

      <div className="mt-20 grid gap-10 md:grid-cols-[1fr_2fr] md:gap-20">
        <p className="text-accent font-mono text-[11px] tracking-[0.35em] uppercase">
          ( In a bit more detail )
        </p>
        <div className="max-w-2xl space-y-6">
          {profile.about.paragraphs.map((p, i) => (
            <Reveal as="p" key={i} delay={i * 0.1} className="text-paper/75 text-lg leading-relaxed">
              {p}
            </Reveal>
          ))}
        </div>
      </div>

      <dl className="border-paper/10 mt-20 grid grid-cols-2 gap-8 border-t pt-10 md:grid-cols-4">
        {profile.stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08}>
            <dt className="text-paper/50 order-2 mt-2 font-mono text-[10px] tracking-[0.25em] uppercase">
              {s.label}
            </dt>
            <dd className="font-display text-4xl font-extrabold tracking-tight md:text-6xl">
              {s.value}
            </dd>
          </Reveal>
        ))}
      </dl>

      <div className="mt-28 grid gap-20 md:grid-cols-2 md:gap-16">
        <Block title="Experience">
          <Timeline items={experienceItems} />
        </Block>
        <Block title="Education">
          <Timeline items={educationItems} />
        </Block>
      </div>

      <div className="mt-24 grid gap-20 md:grid-cols-2 md:gap-16">
        <Block title="Certifications">
          <RowList rows={certifications.map((c) => ({ title: c.title, sub: c.issuer }))} />
        </Block>
        <Block title="Awards & languages">
          <RowList rows={awards.map((a) => ({ title: a.title, sub: a.org }))} />
          <p className="text-paper/50 mt-8 font-mono text-[11px] tracking-[0.2em] uppercase">
            Languages — {languages.join(", ")}
          </p>
        </Block>
      </div>
    </section>
  );
}