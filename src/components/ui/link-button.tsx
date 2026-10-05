import { cn } from "@/lib/utils";

type LinkButtonProps = React.ComponentProps<"a"> & {
  variant?: "primary" | "ghost";
};

export function LinkButton({
  variant = "primary",
  className,
  children,
  ...props
}: LinkButtonProps) {
  return (
    <a
      className={cn(
        "inline-flex items-center gap-2 px-6 py-3 font-mono text-[11px] tracking-[0.25em] uppercase transition-colors duration-500",
        variant === "primary" && "bg-accent text-ink hover:bg-paper",
        variant === "ghost" &&
          "border-paper/30 text-paper hover:border-paper hover:bg-paper hover:text-ink border",
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
}