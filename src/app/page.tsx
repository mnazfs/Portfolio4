import { SplitText } from "@/components/motion/split-text";
import { Reveal } from "@/components/motion/reveal";
import { Marquee } from "@/components/motion/marquee";

export default function Page() {
  return (
    <main id="main">
      <section id="top" className="flex min-h-screen flex-col justify-center px-6 md:px-10">
        <h1 className="font-display leading-[0.85] font-extrabold tracking-tighter">
          <SplitText text="PHASE" className="text-[19vw] md:text-[14vw]" />
          <SplitText text="ONE" className="text-accent text-[19vw] md:text-[14vw]" delay={0.5} />
        </h1>
      </section>

      <Marquee items={["Design system", "Motion", "Lenis", "Tokens"]} />

      {(["about", "skills", "projects", "contact"] as const).map((id) => (
        <section
          key={id}
          id={id}
          className="flex min-h-screen items-center px-6 md:px-10"
        >
          <Reveal>
            <h2 className="font-display text-6xl font-extrabold tracking-tighter uppercase md:text-8xl">
              {id}
            </h2>
          </Reveal>
        </section>
      ))}
    </main>
  );
}