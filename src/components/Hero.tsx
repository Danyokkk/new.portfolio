"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { MapPin, Sparkles } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";

const HeroStage = dynamic(() => import("@/components/HeroStage"), {
  ssr: false,
  loading: () => (
    <div className="min-h-[420px] rounded-[2rem] border border-white/15 bg-white/[0.035] md:min-h-[600px]" aria-label="Loading hero visual" />
  ),
});

const headline = "I build websites, AI tools, and digital products that actually work.";
const headlineWords = headline.split(" ");

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-hero-radial px-5 pb-16 pt-28 md:px-8 md:pb-24 md:pt-32">
      <div className="absolute inset-0 bg-mesh-lines bg-[size:78px_78px] opacity-35" aria-hidden="true" />
      <div className="absolute inset-x-0 top-0 h-56 bg-gradient-to-b from-volt/10 to-transparent" aria-hidden="true" />
      <div className="absolute right-[-12rem] top-24 size-96 rounded-full bg-aurora/10 blur-3xl motion-safe:animate-pulse" aria-hidden="true" />
      <div className="absolute bottom-0 left-[-10rem] size-80 rounded-full bg-volt/10 blur-3xl motion-safe:animate-float" aria-hidden="true" />
      <div className="absolute left-[-16%] top-1/2 h-px w-[70vw] rotate-[-14deg] bg-gradient-to-r from-transparent via-volt/80 to-transparent shadow-glow" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.92fr_1.08fr]">
        <motion.div
          data-reveal
          initial={false}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <div className="mb-7 flex flex-wrap items-center gap-3 text-sm text-white/62">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.045] px-3 py-2 font-bold text-white/78">
              <Sparkles className="size-4 text-volt" />
              Danylo Sakhno / daan1k
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-signal shadow-[0_0_18px_rgba(167,255,95,.8)]" />
              Developer based in Cyprus
            </span>
          </div>
          <h1 className="font-display text-[2.08rem] font-black leading-[1.08] text-balance text-white md:text-6xl xl:text-7xl" aria-label={headline}>
            {headlineWords.map((word, index) => (
              <span key={`${word}-${index}`} data-hero-word className="mr-[0.24em] inline-block will-change-transform">
                {word}
              </span>
            ))}
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-8 text-white/70 md:text-lg">
            I&apos;m Danylo Sakhno, a young developer from Ukraine based in Cyprus. I create fast websites, automation
            tools, Python projects, and clean digital experiences.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#work" variant="primary">
              View my work
            </ButtonLink>
            <ButtonLink href="#contact">
              Contact me
            </ButtonLink>
          </div>
          <div className="mt-7 inline-flex items-center gap-3 rounded-2xl border border-white/12 bg-white/[0.045] px-4 py-3 text-sm font-bold text-white/78">
            <MapPin className="size-4 text-volt" />
            Built in Cyprus
            <span className="size-2 rounded-full bg-signal shadow-[0_0_18px_rgba(167,255,95,.85)]" />
          </div>
        </motion.div>

        <div data-reveal data-parallax className="lg:pt-6">
          <HeroStage />
        </div>
      </div>
    </section>
  );
}
