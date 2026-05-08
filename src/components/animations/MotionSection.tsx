"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

type MotionSectionProps = HTMLMotionProps<"section"> & {
  children: ReactNode;
  id?: string;
};

export function MotionSection({ children, className = "", ...props }: MotionSectionProps) {
  return (
    <motion.section
      initial={false}
      viewport={{ once: true, margin: "-90px" }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      {...props}
    >
      {children}
    </motion.section>
  );
}
