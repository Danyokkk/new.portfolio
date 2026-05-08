import { services } from "@/lib/site-data";
import { MotionSection } from "@/components/animations/MotionSection";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Services() {
  return (
    <MotionSection id="services" className="scroll-mt-24 px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Services"
          title="A premium tech stack for AI-native websites."
          text="Built for a modern agency feel: strong communication, fast interaction, accessible components, and animation that supports the story."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {services.map(({ icon: Icon, title, text }) => (
            <article key={title} data-reveal className="glass min-h-[260px] rounded-[1.75rem] p-6 transition duration-300 hover:-translate-y-1 hover:border-volt/40">
              <div className="grid size-12 place-items-center rounded-2xl bg-volt/10 text-volt">
                <Icon className="size-6" />
              </div>
              <h3 className="mt-7 font-display text-xl font-black text-white">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-white/64">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
