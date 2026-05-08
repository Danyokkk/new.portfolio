import { Github, Menu, MessageCircle } from "lucide-react";
import { links, navItems } from "@/lib/site-data";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/70 backdrop-blur-2xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8">
        <a href="#top" className="group flex items-center gap-3 font-display text-xl font-black text-white" aria-label="daan1k home">
          <span className="size-3 rotate-45 rounded-sm bg-gradient-to-br from-volt via-plasma to-aurora shadow-glow transition group-hover:rotate-[225deg]" />
          daan1k
        </a>

        <nav aria-label="Primary navigation" className="hidden items-center gap-7 text-sm font-semibold text-white/62 lg:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={links.github}
            target="_blank"
            rel="noreferrer"
            aria-label="Open GitHub"
            className="grid size-10 place-items-center rounded-2xl border border-white/10 bg-white/[0.04] text-white transition hover:border-volt/50 hover:text-volt"
          >
            <Github className="size-5" />
          </a>
          <a
            href={links.kaggle}
            target="_blank"
            rel="noreferrer"
            aria-label="Open Kaggle"
            className="grid size-10 place-items-center rounded-2xl border border-white/10 bg-white/[0.04] text-xl font-black text-volt transition hover:border-volt/50"
          >
            k
          </a>
          <a
            href={links.telegram}
            target="_blank"
            rel="noreferrer"
            aria-label="Open Telegram"
            className="grid size-10 place-items-center rounded-2xl border border-white/10 bg-white/[0.04] text-white transition hover:border-volt/50 hover:text-volt"
          >
            <MessageCircle className="size-5" />
          </a>
          <button
            type="button"
            aria-label="Menu"
            className="grid size-10 place-items-center rounded-2xl border border-white/10 bg-white/[0.04] text-white lg:hidden"
          >
            <Menu className="size-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
