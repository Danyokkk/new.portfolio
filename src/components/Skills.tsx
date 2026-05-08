import { skillGroups } from "@/lib/site-data";
import { MotionSection } from "@/components/animations/MotionSection";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Skills() {
  return (
    <MotionSection id="skills" className="scroll-mt-24 px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Skills"
          title="Tools I can combine into useful technical work."
          text="The strength is the mix: frontend, automation, Python, data, hardware, and enough practical IT thinking to debug real-world problems."
        />

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {skillGroups.map(({ icon: Icon, title, skills }) => (
            <article
              key={title}
              data-reveal
              data-skill-card
              className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-b from-white/[0.075] to-white/[0.025] p-6 shadow-[0_24px_80px_rgba(0,0,0,.22)] transition duration-300 hover:-translate-y-1 hover:border-volt/35"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-volt/55 to-transparent" />
              <div className="grid size-11 place-items-center rounded-2xl border border-white/10 bg-white/[0.055] text-volt">
                <Icon className="size-5" />
              </div>
              <h3 className="mt-6 font-display text-lg font-black text-white">{title}</h3>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-white/62">
                {skills.map((skill) => (
                  <li key={skill} className="flex gap-3">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-volt/80" aria-hidden="true" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
