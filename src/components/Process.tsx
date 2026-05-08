import { processSteps } from "@/lib/site-data";
import { MotionSection } from "@/components/animations/MotionSection";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Process() {
  return (
    <MotionSection id="process" className="scroll-mt-24 px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Process"
          title="Scroll-driven storytelling without sacrificing performance."
          text="GSAP handles progressive reveal and parallax on desktop. Framer Motion handles component entrances. Reduced-motion users get stable, readable content."
          align="center"
        />
        <div className="mt-14 grid gap-4 lg:grid-cols-4">
          {processSteps.map(({ icon: Icon, title, text }, index) => (
            <article key={title} data-reveal className="relative glass rounded-[1.75rem] p-6">
              <span className="font-display text-sm font-black text-aurora">0{index + 1}</span>
              <div className="mt-8 grid size-11 place-items-center rounded-2xl bg-white/[0.06] text-volt">
                <Icon className="size-5" />
              </div>
              <h3 className="mt-6 font-display text-lg font-black text-white">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-white/64">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
