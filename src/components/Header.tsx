"use client";

import { useState } from "react";
import { Github, Mail, Menu, X } from "lucide-react";
import { links, navItems } from "@/lib/site-data";

const headerLinks = [
  { label: "GitHub", href: links.github, icon: Github },
  { label: "Kaggle", href: links.kaggle, letter: "k" },
  { label: "Contact", href: "#contact", icon: Mail },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/72 backdrop-blur-2xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8">
        <a
          href="#top"
          className="group flex items-center gap-3 font-display text-xl font-black text-white"
          aria-label="daan1k home"
          onClick={() => setOpen(false)}
        >
          <span className="size-3 rotate-45 rounded-sm bg-gradient-to-br from-volt via-plasma to-aurora shadow-glow transition duration-500 group-hover:rotate-[225deg]" />
          daan1k
        </a>

        <nav aria-label="Primary navigation" className="hidden items-center gap-7 text-sm font-semibold text-white/62 lg:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="group relative py-2 transition hover:text-white">
              {item.label}
              <span className="absolute inset-x-0 -bottom-1 h-px scale-x-0 bg-gradient-to-r from-volt to-aurora transition group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.035] p-1.5 md:flex">
            {headerLinks.map(({ label, href, icon: Icon, letter }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                aria-label={href.startsWith("#") ? label : `Open ${label}`}
                className="inline-flex h-9 items-center gap-2 rounded-xl px-3 text-sm font-bold text-white/78 transition hover:bg-white/[0.075] hover:text-white"
              >
                {Icon ? <Icon className="size-4 text-volt" /> : <span className="font-display text-lg font-black text-volt">{letter}</span>}
                <span className="hidden xl:inline">{label}</span>
              </a>
            ))}
          </div>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="grid size-10 place-items-center rounded-2xl border border-white/10 bg-white/[0.04] text-white lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-ink/96 px-5 py-5 shadow-violet lg:hidden">
          <nav aria-label="Mobile navigation" className="mx-auto grid max-w-7xl gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3 font-display text-sm font-bold text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mx-auto mt-3 grid max-w-7xl grid-cols-3 gap-2">
            {headerLinks.map(({ label, href, icon: Icon, letter }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                onClick={() => setOpen(false)}
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.045] text-sm font-bold text-white/78"
              >
                {Icon ? <Icon className="size-4 text-volt" /> : <span className="font-display font-black text-volt">{letter}</span>}
                {label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
