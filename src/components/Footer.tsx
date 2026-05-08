import { links } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-10 text-sm text-white/50 md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <p>© 2026 Danylo Sakhno / daan1k. Premium AI and web portfolio frontend.</p>
        <nav aria-label="Footer navigation" className="flex flex-wrap gap-5">
          <a href={links.github} target="_blank" rel="noreferrer" className="transition hover:text-white">
            GitHub
          </a>
          <a href={links.kaggle} target="_blank" rel="noreferrer" className="transition hover:text-white">
            Kaggle
          </a>
          <a href={links.telegram} target="_blank" rel="noreferrer" className="transition hover:text-white">
            Telegram
          </a>
          <a href="#top" className="transition hover:text-white">
            Back to top
          </a>
        </nav>
      </div>
    </footer>
  );
}
