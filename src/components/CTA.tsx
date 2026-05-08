import { Github, Mail, Send } from "lucide-react";
import { MotionSection } from "@/components/animations/MotionSection";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { links } from "@/lib/site-data";

export function CTA() {
  return (
    <MotionSection id="contact" className="scroll-mt-24 px-5 py-20 md:px-8 md:py-28">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.25rem] border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.025] p-8 shadow-violet md:p-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_38%,rgba(33,230,255,.16),transparent_25rem),radial-gradient(circle_at_82%_44%,rgba(248,77,255,.16),transparent_25rem)]" />
        <div className="relative grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-end">
          <div>
            <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-volt">Contact</p>
            <h2 className="mt-4 max-w-4xl font-display text-[2.1rem] font-black leading-[1.06] text-balance text-white md:text-5xl lg:text-6xl">
              Have an idea, project, or collaboration?
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/68">
              Send the goal, the problem, or even a messy first idea. I can help turn it into a clear website, tool,
              automation, or technical plan.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            <ButtonLink href={links.telegram} target="_blank" rel="noreferrer" variant="primary">
              Telegram
            </ButtonLink>
            <ButtonLink href={links.github} target="_blank" rel="noreferrer">
              GitHub
            </ButtonLink>
            <ButtonLink href={links.email}>
              Email
            </ButtonLink>
          </div>
        </div>

        <div className="relative mt-10 grid gap-3 md:grid-cols-3">
          {[
            { icon: Send, label: "Telegram", value: "@daqxn" },
            { icon: Github, label: "GitHub", value: "Danyokkk" },
            { icon: Mail, label: "Email", value: "dsakhno@isl.cy" },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="rounded-3xl border border-white/10 bg-ink/45 p-5">
              <Icon className="size-5 text-volt" />
              <p className="mt-4 text-xs font-bold uppercase tracking-[0.18em] text-white/42">{label}</p>
              <p className="mt-2 font-display text-lg font-black text-white">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
