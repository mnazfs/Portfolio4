"use client";

import { motion, useReducedMotion } from "motion/react";
import { EASE_OUT_EXPO } from "@/lib/motion";
import { cn } from "@/lib/utils";

type SplitTextProps = {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
};

export function SplitText({ text, className, delay = 0.2, stagger = 0.05 }: SplitTextProps) {
  const reduce = useReducedMotion();

  return (
    <span
      aria-label={text}
      className={cn("block overflow-hidden whitespace-nowrap", className)}
    >
      {text.split("").map((ch, i) => (
        <motion.span
          key={i}
          aria-hidden
          className="inline-block"
          initial={reduce ? false : { y: "110%", rotate: 4 }}
          animate={{ y: "0%", rotate: 0 }}
          transition={{ delay: delay + i * stagger, duration: 1, ease: EASE_OUT_EXPO }}
        >
          {ch === " " ? "\u00A0" : ch}
        </motion.span>
      ))}
    </span>
  );
}