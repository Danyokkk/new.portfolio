import { processSteps } from "@/lib/site-data";
import { MotionSection } from "@/components/animations/MotionSection";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Process() {
  return (
    <MotionSection id="process" className="scroll-mt-24 px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Process"
          title="Simple enough to trust. Structured enough to ship."
          text="A professional build is not magic. It is a clear goal, a good structure, careful implementation, and testing before anything gets shown as finished."
          align="center"
        />
        <div className="relative mt-14 grid gap-4 lg:grid-cols-4">
          <div className="absolute left-8 right-8 top-10 hidden h-px bg-gradient-to-r from-transparent via-volt/45 to-transparent lg:block" aria-hidden="true" />
          {processSteps.map(({ icon: Icon, title, text }, index) => (
            <article key={title} data-reveal className="relative rounded-[1.75rem] border border-white/10 bg-white/[0.035] p-6 shadow-[0_24px_90px_rgba(0,0,0,.2)]">
              <span className="font-display text-sm font-black text-aurora">0{index + 1}</span>
              <div className="relative mt-8 grid size-12 place-items-center rounded-2xl border border-white/10 bg-ink text-volt shadow-glow">
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
