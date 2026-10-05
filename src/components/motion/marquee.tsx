import { cn } from "@/lib/utils";

export function Marquee({ items, className }: { items: readonly string[]; className?: string }) {
  const row = (hidden: boolean) => (
    <div className="flex w-max items-center" aria-hidden={hidden || undefined}>
      {items.map((item) => (
        <span key={item} className="flex items-center">
          <span className="font-display text-2xl font-bold tracking-tight uppercase md:text-4xl">
            {item}
          </span>
          <span className="text-accent mx-8 text-xl md:mx-12">✦</span>
        </span>
      ))}
    </div>
  );

  return (
    <div className={cn("border-paper/10 overflow-hidden border-y py-5", className)}>
      <div className="animate-marquee flex w-max items-center">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}