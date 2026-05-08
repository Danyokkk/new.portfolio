import { GraduationCap, MapPin, PcCase, Trophy } from "lucide-react";
import { MotionSection } from "@/components/animations/MotionSection";

const facts = [
  { icon: MapPin, label: "Based in Cyprus", value: "Larnaca" },
  { icon: Trophy, label: "Recognition", value: "TLF Scholar" },
  { icon: GraduationCap, label: "Education", value: "IB CP student" },
  { icon: PcCase, label: "Hands-on tech", value: "Custom PCs" },
];

export function About() {
  return (
    <MotionSection id="about" className="scroll-mt-24 border-y border-white/10 bg-white/[0.02] px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div data-reveal>
          <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-volt">About</p>
          <h2 className="mt-4 font-display text-[2.1rem] font-black leading-[1.06] text-balance text-white md:text-5xl lg:text-6xl">
            Young, technical, curious, and building from real problems.
          </h2>
          <div className="mt-8 space-y-5 text-base leading-8 text-white/68 md:text-lg">
            <p>
              Danylo Sakhno is from Ukraine and based in Cyprus. He is interested in IT, web development, AI, Python,
              networking, PC building, and practical problem solving.
            </p>
            <p>
              The work is shaped by a simple idea: build things that are useful in the real world, then make them clear
              enough that other people can understand, trust, and use them.
            </p>
          </div>
        </div>

        <div data-reveal className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.075] to-white/[0.025] p-5 shadow-violet md:p-6">
          <div className="absolute inset-0 bg-mesh-lines bg-[size:48px_48px] opacity-25" aria-hidden="true" />
          <div className="relative min-h-[330px] overflow-hidden rounded-[1.5rem] border border-white/10 bg-ink/70">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_26%,rgba(33,230,255,.2),transparent_14rem),radial-gradient(circle_at_24%_78%,rgba(139,92,255,.2),transparent_16rem)]" />
            <div className="absolute left-7 top-7 w-[58%] rounded-2xl border border-white/10 bg-white/[0.055] p-4">
              <div className="flex gap-1.5">
                <span className="size-2 rounded-full bg-aurora" />
                <span className="size-2 rounded-full bg-volt" />
                <span className="size-2 rounded-full bg-signal" />
              </div>
              <div className="mt-5 space-y-2">
                <span className="block h-2 w-5/6 rounded bg-white/26" />
                <span className="block h-2 w-2/3 rounded bg-volt/36" />
                <span className="block h-2 w-4/5 rounded bg-white/18" />
                <span className="block h-2 w-1/2 rounded bg-aurora/32" />
              </div>
            </div>
            <div className="absolute bottom-7 right-7 h-36 w-36 rounded-[1.75rem] border border-volt/25 bg-volt/10 shadow-glow">
              <div className="absolute inset-5 rounded-2xl border border-white/10 bg-ink/70" />
              <div className="absolute inset-x-7 top-8 h-3 rounded-full bg-volt/45" />
              <div className="absolute bottom-7 left-7 right-7 h-14 rounded-2xl border border-white/10 bg-white/[0.055]" />
            </div>
            <div className="absolute bottom-7 left-7 max-w-[58%] text-sm leading-7 text-white/62">
              Portfolio for web products, AI workflows, data tools, and hardware work.
            </div>
          </div>

          <div className="relative mt-4 grid gap-3 sm:grid-cols-2">
            {facts.map(({ icon: Icon, label, value }) => (
              <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.045] p-4">
                <div className="flex items-center gap-3 text-volt">
                  <Icon className="size-5" />
                  <span className="text-xs font-bold uppercase tracking-[0.16em] text-white/46">{label}</span>
                </div>
                <p className="mt-3 font-display text-lg font-black text-white">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
