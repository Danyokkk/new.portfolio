import { Github } from "lucide-react";
import { portfolio } from "@/lib/site-data";
import { MotionSection } from "@/components/animations/MotionSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function Portfolio() {
  return (
    <MotionSection id="portfolio" className="scroll-mt-24 border-y border-white/10 bg-white/[0.025] px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Portfolio"
          title="Live project anchors, not empty mockups."
          text="A premium portfolio still needs proof. These cards are built around external links, clear outcomes, and reusable project data."
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {portfolio.map(({ icon: Icon, title, summary, href, repo, tags }) => (
            <article key={title} data-reveal className="glass group flex min-h-[360px] flex-col overflow-hidden rounded-[2rem] p-6 transition duration-300 hover:-translate-y-1 hover:border-volt/40">
              <div className="relative min-h-36 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-volt/16 via-plasma/14 to-aurora/14">
                <div className="absolute inset-0 bg-mesh-lines bg-[size:34px_34px] opacity-35" />
                <Icon className="absolute bottom-5 right-5 size-16 text-white/28 transition duration-300 group-hover:scale-110 group-hover:text-volt/70" />
              </div>
              <h3 className="mt-6 font-display text-2xl font-black text-white">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-white/65">{summary}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-white/12 bg-white/[0.04] px-3 py-1 text-xs font-bold text-white/70">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-auto flex flex-col gap-3 pt-7 sm:flex-row">
                <ButtonLink href={href} target="_blank" rel="noreferrer" className="flex-1">
                  Open
                </ButtonLink>
                {repo ? (
                  <a
                    href={repo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/[0.04] text-sm font-bold text-white transition hover:border-volt/50"
                  >
                    Repo
                    <Github className="size-4" />
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
