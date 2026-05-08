"use client";

import { BrainCircuit, Code2, Cpu, DatabaseZap, Globe2 } from "lucide-react";

const orbitCards = [
  {
    label: "Web",
    text: "Fast websites and product UI",
    icon: Globe2,
    className: "left-5 top-8 md:left-10 md:top-10",
    line: "left-[22%] top-[28%] h-px w-[28%] rotate-[18deg] bg-volt/45",
  },
  {
    label: "AI",
    text: "Automation and chat flows",
    icon: BrainCircuit,
    className: "right-5 top-12 md:right-7 md:top-16",
    line: "right-[23%] top-[32%] h-px w-[24%] rotate-[-16deg] bg-aurora/45",
  },
  {
    label: "Python",
    text: "Scripts, tools, backend logic",
    icon: Code2,
    className: "right-4 bottom-28 md:right-10 md:bottom-32",
    line: "right-[28%] bottom-[34%] h-px w-[22%] rotate-[18deg] bg-plasma/45",
  },
  {
    label: "Data",
    text: "Dashboards and analysis",
    icon: DatabaseZap,
    className: "left-4 bottom-24 md:left-12 md:bottom-28",
    line: "left-[27%] bottom-[33%] h-px w-[22%] rotate-[-20deg] bg-volt/45",
  },
  {
    label: "Hardware",
    text: "PC builds and troubleshooting",
    icon: Cpu,
    className: "left-1/2 bottom-5 -translate-x-1/2",
    line: "left-1/2 bottom-[22%] h-[15%] w-px bg-signal/35",
  },
];

export default function HeroStage() {
  return (
    <div
      className="relative min-h-[420px] overflow-hidden rounded-[2rem] border border-white/15 bg-[linear-gradient(145deg,rgba(7,11,36,.92),rgba(3,5,18,.72))] shadow-violet md:min-h-[600px]"
      aria-label="Animated system visual showing Danylo's web, AI, Python, data, and hardware work"
    >
      <div className="absolute inset-0 bg-mesh-lines bg-[size:44px_44px] opacity-35" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(33,230,255,.22),transparent_17rem),radial-gradient(circle_at_62%_62%,rgba(139,92,255,.26),transparent_23rem),radial-gradient(circle_at_34%_66%,rgba(248,77,255,.16),transparent_18rem)]"
        aria-hidden="true"
      />

      <div className="absolute left-1/2 top-[48%] h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-[2rem] border border-volt/45 bg-gradient-to-br from-volt/18 via-plasma/18 to-aurora/14 shadow-glow motion-safe:animate-float motion-reduce:animate-none md:h-80 md:w-80">
        <div className="absolute inset-5 rounded-[1.45rem] border border-white/14 bg-ink/70 shadow-[inset_0_0_42px_rgba(33,230,255,.12)]" />
        <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-tr from-transparent via-white/18 to-transparent opacity-65" />
        <div className="absolute inset-x-12 top-12 rounded-2xl border border-white/10 bg-white/[0.055] p-3 md:inset-x-16 md:top-16">
          <div className="mb-3 flex gap-1.5" aria-hidden="true">
            <span className="size-2 rounded-full bg-aurora" />
            <span className="size-2 rounded-full bg-volt" />
            <span className="size-2 rounded-full bg-signal" />
          </div>
          <div className="space-y-2" aria-hidden="true">
            <span className="block h-2 w-4/5 rounded-full bg-white/34" />
            <span className="block h-2 w-2/3 rounded-full bg-volt/42" />
            <span className="block h-2 w-5/6 rounded-full bg-white/20" />
            <span className="block h-2 w-1/2 rounded-full bg-aurora/42" />
          </div>
        </div>
        <div className="absolute left-1/2 top-1/2 grid size-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-3xl border border-volt/35 bg-volt/15 text-volt shadow-glow md:size-20">
          <Code2 className="size-8 md:size-10" />
        </div>
      </div>

      <div className="absolute left-1/2 top-[48%] h-[72%] w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-volt/20 motion-safe:animate-orbit motion-reduce:animate-none" />
      <div className="absolute left-1/2 top-[48%] h-[52%] w-[52%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-aurora/18 motion-safe:animate-[orbit_24s_linear_infinite_reverse] motion-reduce:animate-none" />

      {orbitCards.map(({ label, text, icon: Icon, className, line }) => (
        <div key={label}>
          <span className={`absolute hidden md:block ${line}`} aria-hidden="true" />
          <article
            className={`absolute w-40 rounded-3xl border border-white/14 bg-ink/70 p-4 shadow-[0_20px_70px_rgba(0,0,0,.32)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-volt/40 md:w-48 ${className}`}
          >
            <div className="flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-2xl border border-white/10 bg-white/[0.055] text-volt">
                <Icon className="size-5" />
              </span>
              <h2 className="font-display text-sm font-black text-white">{label}</h2>
            </div>
            <p className="mt-3 text-xs leading-5 text-white/58">{text}</p>
          </article>
        </div>
      ))}
    </div>
  );
}
