"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { links } from "@/lib/site-data";

const HeroStage = dynamic(() => import("@/components/HeroStage"), {
  ssr: false,
  loading: () => (
    <div className="min-h-[420px] rounded-[2rem] border border-white/15 bg-white/[0.035] md:min-h-[620px]" aria-label="Loading 3D preview" />
  ),
});

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-hero-radial px-5 pb-20 pt-32 md:px-8 md:pb-28 md:pt-36">
      <div className="absolute inset-0 bg-mesh-lines bg-[size:72px_72px] opacity-40" aria-hidden="true" />
      <div className="absolute left-[-12%] top-1/3 h-px w-[70vw] rotate-[-14deg] bg-gradient-to-r from-transparent via-volt to-transparent shadow-glow" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.94fr_1.06fr]">
        <motion.div
          initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <h1 className="font-display text-5xl font-black leading-[0.94] text-balance text-white md:text-7xl xl:text-8xl">
            Danylo Sakhno
            <span className="mt-3 block bg-gradient-to-r from-volt via-white to-aurora bg-[length:220%_100%] bg-clip-text text-transparent motion-safe:animate-shimmer">
              daan1k
            </span>
          </h1>
          <p className="mt-8 max-w-2xl font-display text-xl font-bold leading-tight text-white md:text-3xl">
            AI-powered web products for people who need more than a template.
          </p>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/70 md:text-lg">
            Premium interfaces, data workflows, automation, and modern product systems for AI, web, and technology-driven teams.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#portfolio" variant="primary">
              View portfolio
            </ButtonLink>
            <ButtonLink href={links.github} target="_blank" rel="noreferrer">
              GitHub proof
            </ButtonLink>
          </div>
          <div className="mt-7 inline-flex items-center gap-3 rounded-2xl border border-white/12 bg-white/[0.045] px-4 py-3 text-sm font-bold text-white/78">
            <MapPin className="size-4 text-volt" />
            Built in Cyprus
            <span className="size-2 rounded-full bg-signal shadow-[0_0_18px_rgba(167,255,95,.85)]" />
          </div>
        </motion.div>

        <div data-parallax>
          <HeroStage />
        </div>
      </div>
    </section>
  );
}
