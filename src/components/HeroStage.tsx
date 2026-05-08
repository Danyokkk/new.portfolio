"use client";

export default function HeroStage() {
  return (
    <div
      className="relative min-h-[420px] overflow-hidden rounded-[2rem] border border-white/15 bg-midnight/60 shadow-violet md:min-h-[620px]"
      aria-label="3D hero placeholder ready for Spline or Three.js"
    >
      <div className="absolute inset-0 bg-mesh-lines bg-[size:44px_44px] opacity-40" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_48%,rgba(33,230,255,.18),transparent_18rem),radial-gradient(circle_at_60%_62%,rgba(248,77,255,.22),transparent_22rem)]" />
      <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-[2rem] border border-volt/55 bg-gradient-to-br from-volt/20 via-plasma/25 to-aurora/20 shadow-glow motion-safe:animate-float motion-reduce:animate-none md:h-80 md:w-80">
        <div className="absolute inset-5 rounded-[1.4rem] border border-white/18 bg-white/[0.035]" />
        <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-70" />
        <div className="absolute left-8 top-8 font-display text-xs font-bold uppercase tracking-[0.22em] text-white/70">
          Spline / Three.js
        </div>
        <div className="absolute bottom-8 left-8 right-8 text-sm leading-6 text-white/68">
          Lazy-loaded 3D mount point. Replace this component with a Spline scene or Three.js canvas when assets are ready.
        </div>
      </div>

      <div className="absolute left-1/2 top-1/2 h-[78%] w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-volt/25 motion-safe:animate-orbit motion-reduce:animate-none" />
      <div className="absolute left-1/2 top-1/2 h-[55%] w-[55%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-aurora/25 motion-safe:animate-[orbit_26s_linear_infinite_reverse] motion-reduce:animate-none" />

      <div className="absolute left-5 top-5 rounded-2xl border border-signal/30 bg-ink/55 px-4 py-3 text-sm text-signal backdrop-blur">
        AI systems
      </div>
      <div className="absolute bottom-5 right-5 rounded-2xl border border-volt/30 bg-ink/55 px-4 py-3 text-sm text-volt backdrop-blur">
        Shipped products
      </div>
    </div>
  );
}
