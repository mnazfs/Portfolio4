import { profile } from "@/data";
import { siteConfig } from "@/lib/site";
import { SplitText } from "@/components/motion/split-text";
import { Reveal } from "@/components/motion/reveal";
import { HeroParallax } from "@/components/motion/hero-parallax";
import { LinkButton } from "@/components/ui/link-button";

// Display split of the name for the big type. The full name is in the sr-only heading text.
const FIRST = "Muhammed";
const LAST = "Naseef";

export function Hero() {
  return (
    <HeroParallax className="relative flex min-h-svh flex-col justify-between overflow-hidden px-6 pt-28 pb-8 md:px-10">
      <Reveal as="p" y={0} delay={0.9} className="text-paper/60 font-mono text-[11px] tracking-[0.35em] uppercase">
        ( {profile.hero.eyebrow} )
      </Reveal>

      <h1 className="font-display leading-[0.85] font-extrabold tracking-tighter select-none">
        <span className="sr-only">
          {siteConfig.name} — {siteConfig.jobTitle}
        </span>
        <span aria-hidden className="block">
          <SplitText
            text={FIRST}
            className="pr-[1vw] text-[7.5vw] uppercase md:text-[8vw]"
            delay={0.2}
          />
          <SplitText
            text={LAST}
            className="text-accent text-[7.5vw] uppercase md:text-[8vw]"
            delay={0.55}
          />
        </span>
      </h1>

      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div className="max-w-md">
          <Reveal as="p" y={20} delay={1.1} className="text-paper/70 text-sm leading-relaxed md:text-base">
            {profile.hero.intro}
          </Reveal>
          <Reveal y={20} delay={1.25} className="mt-6 flex flex-wrap gap-3">
            <LinkButton href="#projects">View projects ↓</LinkButton>
            <LinkButton href="#contact" variant="ghost">
              Get in touch
            </LinkButton>
          </Reveal>
        </div>

        <Reveal
          y={0}
          delay={1.3}
          className="text-paper/60 flex items-center gap-10 font-mono text-[11px] tracking-[0.25em] uppercase"
        >
          <span className="flex items-center gap-2">
            <span className="bg-accent inline-block h-1.5 w-1.5 rounded-full motion-safe:animate-pulse" />
            {profile.hero.availability}
          </span>
          <a href="#about" className="link-sweep hidden md:inline">
            Scroll ↓
          </a>
        </Reveal>
      </div>
    </HeroParallax>
  );
}