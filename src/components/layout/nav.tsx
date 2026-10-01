"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { EASE_IN_OUT_EXPO, EASE_OUT_EXPO } from "@/lib/motion";
import { siteConfig } from "@/lib/site";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
] as const;

export function Nav() {
  const [open, setOpen] = useState(false);
  const [time, setTime] = useState("");
  const [active, setActive] = useState("");

  // Live clock (client-only, avoids hydration mismatch)
  useEffect(() => {
    const update = () =>
      setTime(
        new Date().toLocaleTimeString("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          timeZone: "Asia/Kolkata",
        }),
      );
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  // Scroll-spy
  useEffect(() => {
    const ids = links.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Lock scroll while the mobile menu is open
  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <motion.header
        className="text-paper fixed inset-x-0 top-0 z-[150] mix-blend-difference"
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8, ease: EASE_OUT_EXPO }}
      >
        <nav
          aria-label="Primary"
          className="flex items-center justify-between px-6 py-5 md:px-10"
        >
          <a
            href="#top"
            data-hover
            onClick={() => setOpen(false)}
            className="font-display text-lg font-extrabold tracking-tight"
            aria-label={`${siteConfig.name} — back to top`}
          >
            {siteConfig.shortName}
            <span className="align-super text-[10px]">©</span>
          </a>

          <ul className="hidden items-center gap-8 font-mono text-[11px] tracking-[0.25em] uppercase md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  data-hover
                  aria-current={active === l.href.slice(1) ? "location" : undefined}
                  className="link-sweep aria-[current=location]:opacity-100 opacity-70 transition-opacity"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-6">
            <span className="font-mono text-[11px] tracking-[0.25em] uppercase" aria-hidden>
              <span className="hidden sm:inline">IST </span>
              {time}
            </span>
            <button
              data-hover
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="relative flex h-8 w-8 flex-col items-center justify-center gap-1.5 md:hidden"
            >
              <span
                className={`block h-px w-6 bg-current transition-transform duration-300 ${
                  open ? "translate-y-[3.5px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-px w-6 bg-current transition-transform duration-300 ${
                  open ? "-translate-y-[3.5px] -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="bg-ink fixed inset-0 z-[140] flex flex-col justify-between px-6 pt-28 pb-10 md:hidden"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.6, ease: EASE_IN_OUT_EXPO }}
          >
            <ul className="flex flex-col">
              {links.map((l, i) => (
                <li key={l.href} className="border-paper/10 overflow-hidden border-b">
                  <motion.a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="font-display block py-4 text-5xl font-extrabold tracking-tighter uppercase"
                    initial={{ y: "110%" }}
                    animate={{ y: "0%" }}
                    exit={{ y: "110%" }}
                    transition={{ delay: 0.15 + i * 0.06, duration: 0.5, ease: EASE_OUT_EXPO }}
                  >
                    <span className="text-accent mr-4 font-mono text-xs tracking-[0.2em]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {l.label}
                  </motion.a>
                </li>
              ))}
            </ul>
            <p className="text-paper/50 font-mono text-[10px] tracking-[0.25em] uppercase">
              {siteConfig.location.locality}, {siteConfig.location.region}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}