import { siteConfig } from "@/lib/site";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
] as const;

const socials = [
  { label: "GitHub", href: siteConfig.links.github },
  { label: "LinkedIn", href: siteConfig.links.linkedin },
].filter((s) => !s.href.includes("your-username"));

const labelClass =
  "text-paper/55 font-mono text-[10px] tracking-[0.25em] uppercase";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="site-footer"
      className="border-paper/10 border-t px-6 pt-20 pb-[max(2rem,env(safe-area-inset-bottom))] md:px-10 md:pt-28"
    >
      <p className="text-accent mb-8 font-mono text-[11px] tracking-[0.35em] uppercase">
        ( Got a project? )
      </p>

      <a
        href={`mailto:${siteConfig.email}`}
        className="group block w-fit select-none"
      >
        <span className="font-display group-hover:text-accent block text-[16vw] leading-[0.85] font-extrabold tracking-tighter uppercase transition-colors duration-500 md:text-[10vw]">
          Let&apos;s
        </span>
        <span className="font-display text-accent group-hover:text-paper block text-[16vw] leading-[0.85] font-extrabold tracking-tighter uppercase transition-colors duration-500 md:text-[10vw]">
          Talk ↗
        </span>
        <span className="sr-only">Email {siteConfig.email}</span>
      </a>

      <div className="border-paper/10 mt-20 grid gap-10 border-t pt-10 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <p className={labelClass}>Based in</p>
          <p className="text-paper/80 mt-3 text-sm leading-relaxed">
            {siteConfig.location.locality}, {siteConfig.location.region}
            <br />
            India
          </p>
        </div>

        <nav aria-label="Footer">
          <p className={labelClass}>Navigate</p>
          <ul className="mt-3 space-y-1 text-sm">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="link-sweep text-paper/80 hover:text-paper inline-block py-1.5"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className={labelClass}>Contact</p>
          <a
            href={`mailto:${siteConfig.email}`}
            className="link-sweep text-paper/80 hover:text-paper mt-3 inline-block py-1.5 text-sm break-all"
          >
            {siteConfig.email}
          </a>
        </div>

        {socials.length > 0 && (
          <div>
            <p className={labelClass}>Elsewhere</p>
            <ul className="mt-3 space-y-1 text-sm">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-sweep text-paper/80 hover:text-paper inline-block py-1.5"
                  >
                    {s.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="text-paper/55 mt-16 flex flex-wrap items-center justify-between gap-4 font-mono text-[10px] tracking-[0.25em] uppercase">
        <span>
          © {year} {siteConfig.name}
        </span>
        <a href="#top" className="link-sweep inline-block py-2">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}