import { proofCards } from "@/lib/site-data";

export function ProofStrip() {
  return (
    <section aria-label="Proof points" className="relative border-y border-white/10 bg-white/[0.025] px-5 py-6 md:px-8">
      <div className="mx-auto grid max-w-7xl gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {proofCards.map(({ icon: Icon, title, text }) => (
          <article
            key={title}
            data-reveal
            className="group rounded-3xl border border-white/10 bg-white/[0.035] p-5 shadow-[0_18px_70px_rgba(0,0,0,.18)] transition duration-300 hover:-translate-y-1 hover:border-volt/35 hover:bg-white/[0.055]"
          >
            <div className="flex items-center gap-3">
              <span className="grid size-10 shrink-0 place-items-center rounded-2xl border border-volt/25 bg-volt/10 text-volt">
                <Icon className="size-5" />
              </span>
              <h2 className="font-display text-sm font-black leading-snug text-white">{title}</h2>
            </div>
            <p className="mt-4 text-sm leading-6 text-white/58">{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
