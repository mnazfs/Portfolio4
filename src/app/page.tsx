import { Hero } from "@/sections/hero";
import { Marquee } from "@/components/motion/marquee";
import { Reveal } from "@/components/motion/reveal";
import { marqueeItems } from "@/data";

const placeholders = ["about", "skills", "projects", "contact"] as const;

export default function Page() {
  return (
    <main id="main">
      <Hero />
      <Marquee items={marqueeItems} />

      {placeholders.map((id) => (
        <section key={id} id={id} className="flex min-h-screen items-center px-6 md:px-10">
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