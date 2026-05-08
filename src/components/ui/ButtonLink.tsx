import { ArrowUpRight } from "lucide-react";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary";
};

export function ButtonLink({ children, className = "", variant = "secondary", ...props }: ButtonLinkProps) {
  const variantClass =
    variant === "primary"
      ? "border-transparent bg-gradient-to-r from-volt via-plasma to-aurora text-ink shadow-violet hover:shadow-glow"
      : "border-white/15 bg-white/[0.045] text-white hover:border-volt/50 hover:bg-white/[0.075]";

  return (
    <a
      className={`group inline-flex min-h-12 items-center justify-center gap-2 overflow-hidden rounded-2xl border px-5 text-sm font-bold transition duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-volt/60 ${variantClass} ${className}`}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      <ArrowUpRight aria-hidden="true" className="relative z-10 size-4 transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      {variant === "primary" ? (
        <span aria-hidden="true" className="absolute inset-y-0 -left-1/2 w-1/3 skew-x-[-18deg] bg-white/35 motion-safe:animate-[shimmer_2.6s_ease-in-out_infinite]" />
      ) : null}
    </a>
  );
}
