"use client";

import { ArrowUpRight } from "lucide-react";
import { motion, type HTMLMotionProps } from "framer-motion";
import type { MouseEvent, ReactNode } from "react";
import { useRef, useState } from "react";

type ButtonLinkProps = HTMLMotionProps<"a"> & {
  children: ReactNode;
  variant?: "primary" | "secondary";
};

export function ButtonLink({ children, className = "", variant = "secondary", onMouseLeave, onMouseMove, ...props }: ButtonLinkProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const variantClass =
    variant === "primary"
      ? "border-transparent bg-gradient-to-r from-volt via-plasma to-aurora text-ink shadow-violet hover:shadow-glow"
      : "border-white/15 bg-white/[0.045] text-white hover:border-volt/50 hover:bg-white/[0.075]";

  function handleMouseMove(event: MouseEvent<HTMLAnchorElement>) {
    onMouseMove?.(event);
    if (window.matchMedia("(prefers-reduced-motion: reduce), (pointer: coarse)").matches) return;

    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;

    setOffset({
      x: (event.clientX - rect.left - rect.width / 2) * 0.16,
      y: (event.clientY - rect.top - rect.height / 2) * 0.18,
    });
  }

  function handleMouseLeave(event: MouseEvent<HTMLAnchorElement>) {
    onMouseLeave?.(event);
    setOffset({ x: 0, y: 0 });
  }

  return (
    <motion.a
      ref={ref}
      animate={offset}
      transition={{ type: "spring", stiffness: 230, damping: 18, mass: 0.55 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`group relative inline-flex min-h-12 items-center justify-center gap-2 overflow-hidden rounded-2xl border px-5 text-sm font-bold transition duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-volt/60 ${variantClass} ${className}`}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      <ArrowUpRight aria-hidden="true" className="relative z-10 size-4 transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      {variant === "primary" ? (
        <span aria-hidden="true" className="absolute inset-y-0 -left-1/2 w-1/3 skew-x-[-18deg] bg-white/35 motion-safe:animate-[shimmer_2.6s_ease-in-out_infinite]" />
      ) : null}
    </motion.a>
  );
}
