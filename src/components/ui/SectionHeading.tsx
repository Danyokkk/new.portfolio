type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  text: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, text, align = "left" }: SectionHeadingProps) {
  return (
    <div className={`mx-auto max-w-4xl ${align === "center" ? "text-center" : ""}`}>
      <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-volt">{eyebrow}</p>
      <h2 className="mt-4 font-display text-[2.1rem] font-black leading-[1.06] text-balance text-white md:text-5xl lg:text-6xl">{title}</h2>
      <p className="mt-5 text-base leading-8 text-white/68 md:text-lg">{text}</p>
    </div>
  );
}
