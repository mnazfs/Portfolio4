import { Hero } from "@/sections/hero";
import { About } from "@/sections/about";
import { Skills } from "@/sections/skills";
import { Projects } from "@/sections/projects";
import { Marquee } from "@/components/motion/marquee";
import { Reveal } from "@/components/motion/reveal";
import { marqueeItems } from "@/data";

export default function Page() {
  return (
    <main id="main">
      <Hero />
      <Marquee items={marqueeItems} />
      <About />
      <Skills />
      <Projects />

      <section id="contact" className="flex min-h-screen items-center px-6 md:px-10">
        <Reveal>
          <h2 className="font-display text-6xl font-extrabold tracking-tighter uppercase md:text-8xl">
            contact
          </h2>
        </Reveal>
      </section>
    </main>
  );
}