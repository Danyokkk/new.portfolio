import { MessageCircle } from "lucide-react";
import { MotionSection } from "@/components/animations/MotionSection";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { links } from "@/lib/site-data";

export function CTA() {
  return (
    <MotionSection id="contact" className="scroll-mt-24 px-5 py-20 md:px-8 md:py-28">
      <div className="glass relative mx-auto grid max-w-7xl gap-8 overflow-hidden rounded-[2.25rem] p-8 md:p-12 lg:grid-cols-[1fr_auto] lg:items-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_40%,rgba(33,230,255,.16),transparent_24rem),radial-gradient(circle_at_82%_36%,rgba(248,77,255,.16),transparent_24rem)]" />
        <div className="relative">
          <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-volt">CTA</p>
          <h2 className="mt-4 max-w-4xl font-display text-4xl font-black leading-[1.02] text-balance text-white md:text-6xl">
            Ready for a modern AI/web presence that feels alive?
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/68">
            Built for internships, client work, technical collaborations, and ambitious product ideas.
          </p>
        </div>
        <div className="relative flex flex-col gap-3 sm:flex-row lg:flex-col">
          <ButtonLink href={links.telegram} target="_blank" rel="noreferrer" variant="primary">
            Start a conversation
          </ButtonLink>
          <a
            href={links.telegram}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/[0.045] px-5 text-sm font-bold text-white transition hover:border-volt/50"
          >
            Telegram
            <MessageCircle className="size-4" />
          </a>
        </div>
      </div>
    </MotionSection>
  );
}
