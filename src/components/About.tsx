import { Github, Trophy } from "lucide-react";
import { MotionSection } from "@/components/animations/MotionSection";
import { proof } from "@/lib/site-data";

export function About() {
  return (
    <MotionSection id="about" className="scroll-mt-24 border-y border-white/10 bg-white/[0.025] px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div data-reveal>
          <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-volt">About</p>
          <h2 className="mt-4 font-display text-4xl font-black leading-[1.02] text-balance text-white md:text-6xl">
            Built like a product team, presented like a premium studio.
          </h2>
        </div>
        <div className="space-y-6 text-lg leading-9 text-white/70">
          <p data-reveal>
            This frontend is structured around a clear communication path: what is being built, why it is credible, what proof exists, and how a visitor should move next.
          </p>
          <p data-reveal>
            The stack uses Next.js App Router, Tailwind CSS, Framer Motion, and GSAP ScrollTrigger with lazy-loaded 3D space reserved for Spline or Three.js.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {proof.map((item) => (
              <div key={item.label} data-reveal className="glass rounded-3xl p-5">
                <div className="flex items-center gap-3">
                  {item.value === "TLF" ? <Trophy className="size-5 text-signal" /> : <Github className="size-5 text-volt" />}
                  <strong className="font-display text-3xl font-black text-white">{item.value}</strong>
                </div>
                <p className="mt-2 text-sm text-white/62">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
