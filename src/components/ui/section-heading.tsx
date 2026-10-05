import { Reveal } from "@/components/motion/reveal";

type SectionHeadingProps = {
  id: string;
  eyebrow: string;
  title: string;
  aside?: string;
};

export function SectionHeading({ id, eyebrow, title, aside }: SectionHeadingProps) {
  return (
    <div className="mb-14 flex items-end justify-between gap-6">
      <Reveal>
        <p className="text-accent mb-6 font-mono text-[11px] tracking-[0.35em] uppercase">
          ( {eyebrow} )
        </p>
        <h2
          id={id}
          className="font-display text-5xl font-extrabold tracking-tighter uppercase md:text-7xl"
        >
          {title}
        </h2>
      </Reveal>
      {aside && (
        <span className="text-paper/50 hidden font-mono text-[11px] tracking-[0.3em] uppercase md:block">
          ( {aside} )
        </span>
      )}
    </div>
  );
}   