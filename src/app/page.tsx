import { Hero } from "@/sections/hero";
import { About } from "@/sections/about";
import { Skills } from "@/sections/skills";
import { Projects } from "@/sections/projects";
import { Contact } from "@/sections/contact";
import { Marquee } from "@/components/motion/marquee";
import { marqueeItems } from "@/data";

export default function Page() {
  return (
    <main id="main">
      <Hero />
      <Marquee items={marqueeItems} />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}