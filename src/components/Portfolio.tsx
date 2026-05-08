import { Github } from "lucide-react";
import { portfolio } from "@/lib/site-data";
import { MotionSection } from "@/components/animations/MotionSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/ButtonLink";

function ProjectVisual({ visual, title }: { visual: string; title: string }) {
  return (
    <div className="relative min-h-56 overflow-hidden rounded-[1.5rem] border border-white/10 bg-[linear-gradient(145deg,rgba(33,230,255,.12),rgba(139,92,255,.12),rgba(248,77,255,.08))]">
      <div className="absolute inset-0 bg-mesh-lines bg-[size:36px_36px] opacity-35" aria-hidden="true" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_22%,rgba(33,230,255,.28),transparent_13rem),radial-gradient(circle_at_80%_70%,rgba(248,77,255,.18),transparent_15rem)]" />

      {visual === "transit" ? (
        <>
          <div className="absolute bottom-8 left-7 right-7 h-1 rounded-full bg-volt/60 shadow-glow" />
          <div className="absolute left-9 top-10 h-28 w-44 rounded-2xl border border-white/12 bg-ink/75 p-3 shadow-[0_24px_70px_rgba(0,0,0,.32)]">
            <div className="h-5 w-24 rounded bg-volt/30" />
            <div className="mt-5 space-y-2">
              <span className="block h-2 w-full rounded bg-white/22" />
              <span className="block h-2 w-3/4 rounded bg-white/18" />
              <span className="block h-2 w-5/6 rounded bg-aurora/30" />
            </div>
          </div>
          <div className="absolute right-8 top-12 grid size-24 place-items-center rounded-full border border-volt/30 bg-volt/10">
            <span className="size-3 rounded-full bg-volt shadow-glow" />
            <span className="absolute left-5 top-10 size-2 rounded-full bg-aurora/80" />
            <span className="absolute bottom-7 right-6 size-2 rounded-full bg-signal/90" />
          </div>
        </>
      ) : null}

      {visual === "wiki" ? (
        <>
          <div className="absolute inset-x-7 top-8 grid grid-cols-3 gap-3">
            {[0, 1, 2].map((item) => (
              <span key={item} className="h-16 rounded-2xl border border-white/10 bg-white/[0.055]" />
            ))}
          </div>
          <div className="absolute bottom-8 left-7 right-7 rounded-2xl border border-white/10 bg-ink/70 p-4">
            <span className="block h-2 w-1/3 rounded bg-volt/40" />
            <span className="mt-3 block h-2 w-5/6 rounded bg-white/20" />
            <span className="mt-2 block h-2 w-2/3 rounded bg-white/16" />
          </div>
        </>
      ) : null}

      {visual === "market" ? (
        <>
          <div className="absolute left-7 top-7 h-40 w-24 rounded-2xl border border-white/10 bg-ink/70 p-3">
            <span className="block h-2 w-12 rounded bg-volt/35" />
            <span className="mt-6 block h-2 w-full rounded bg-white/18" />
            <span className="mt-3 block h-2 w-4/5 rounded bg-white/14" />
            <span className="mt-3 block h-2 w-5/6 rounded bg-white/14" />
          </div>
          <div className="absolute bottom-8 right-7 h-36 w-48 rounded-2xl border border-white/10 bg-white/[0.055] p-4">
            <span className="block h-16 rounded-xl bg-gradient-to-r from-volt/35 to-aurora/30" />
            <span className="mt-4 block h-2 w-3/4 rounded bg-white/20" />
          </div>
        </>
      ) : null}

      {visual === "seo" ? (
        <>
          <div className="absolute inset-x-7 top-8 rounded-2xl border border-white/10 bg-ink/70 p-4">
            <div className="flex items-center justify-between">
              <span className="h-2 w-20 rounded bg-volt/35" />
              <span className="h-7 w-16 rounded-full border border-signal/30 bg-signal/10" />
            </div>
            <div className="mt-6 grid grid-cols-4 gap-2">
              {[55, 74, 46, 86].map((height) => (
                <span key={height} className="self-end rounded bg-gradient-to-t from-volt/55 to-aurora/40" style={{ height }} />
              ))}
            </div>
          </div>
          <div className="absolute bottom-8 left-8 h-16 w-40 rounded-2xl border border-white/10 bg-white/[0.055]" />
        </>
      ) : null}

      <p className="absolute bottom-5 right-6 font-display text-xs font-black uppercase tracking-[0.18em] text-white/36">{title}</p>
    </div>
  );
}

export function Portfolio() {
  return (
    <MotionSection id="work" className="scroll-mt-24 border-y border-white/10 bg-white/[0.02] px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <span id="portfolio" className="block scroll-mt-24" aria-hidden="true" />
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Work"
            title="Featured projects with real links and clear purpose."
            text="Each project is presented around the problem it solves, the tools behind it, and the value it creates. No empty showcase language."
          />
          <a href="https://github.com/Danyokkk" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-white/62 transition hover:text-white">
            More on GitHub
            <Github className="size-4 text-volt" />
          </a>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {portfolio.map(({ icon: Icon, title, problem, value, href, repo, tags, visual }) => (
            <article
              key={title}
              data-reveal
              className="group overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.025] p-5 shadow-[0_30px_100px_rgba(0,0,0,.24)] transition duration-300 hover:-translate-y-1 hover:border-volt/35 md:p-6"
            >
              <ProjectVisual visual={visual} title={title} />
              <div className="mt-6 flex items-start gap-4">
                <span className="grid size-12 shrink-0 place-items-center rounded-2xl border border-white/10 bg-white/[0.055] text-volt">
                  <Icon className="size-6" />
                </span>
                <div>
                  <h3 className="font-display text-2xl font-black text-white">{title}</h3>
                  <p className="mt-2 text-sm leading-7 text-white/62">{problem}</p>
                </div>
              </div>

              <div className="mt-5 rounded-3xl border border-white/10 bg-ink/45 p-4">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-volt/80">Result / value</p>
                <p className="mt-3 text-sm leading-7 text-white/68">{value}</p>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-white/12 bg-white/[0.04] px-3 py-1 text-xs font-bold text-white/70">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href={href} target="_blank" rel="noreferrer" variant="primary" className="flex-1">
                  Open link
                </ButtonLink>
                {repo ? (
                  <ButtonLink href={repo} target="_blank" rel="noreferrer" className="flex-1">
                    GitHub repo
                  </ButtonLink>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
