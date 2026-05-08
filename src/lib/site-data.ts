import type { LucideIcon } from "lucide-react";
import { BrainCircuit, Bus, Code2, Cpu, DatabaseZap, Fish, Globe2, Rocket, Search, Sparkles, Wand2 } from "lucide-react";

export const links = {
  github: "https://github.com/Danyokkk",
  kaggle: "https://www.kaggle.com/daan1k",
  telegram: "https://t.me/daqxn",
  bus: "https://bus.daan1k.xyz",
  fish: "https://fish.daan1k.xyz",
  work: "https://work.daan1k.xyz",
};

export const navItems = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

export type IconCard = {
  icon: LucideIcon;
  title: string;
  text: string;
};

export const services: IconCard[] = [
  {
    icon: BrainCircuit,
    title: "AI Product Systems",
    text: "Practical AI workflows, data-powered features, and interfaces that make models useful for real people.",
  },
  {
    icon: Code2,
    title: "Premium Web Frontends",
    text: "Responsive Next.js experiences with motion, strong messaging, and performance-aware component architecture.",
  },
  {
    icon: DatabaseZap,
    title: "Data & Automation",
    text: "Python, Kaggle-style analysis, dashboards, Telegram workflows, and operations that reduce manual work.",
  },
  {
    icon: Cpu,
    title: "Hardware Craft",
    text: "Custom PCs, clean setup, troubleshooting, and a maker mindset that connects software with physical systems.",
  },
];

export const processSteps = [
  {
    icon: Search,
    title: "Decode the objective",
    text: "Clarify the audience, the promise, the proof, and what a visitor should do next.",
  },
  {
    icon: Wand2,
    title: "Design the signal",
    text: "Turn the message into a visual system with hierarchy, motion, and credible details.",
  },
  {
    icon: Rocket,
    title: "Ship the system",
    text: "Build with reusable components, accessible markup, optimized assets, and production deployment in mind.",
  },
  {
    icon: Sparkles,
    title: "Refine by evidence",
    text: "Test responsive states, console health, interaction paths, motion fallback, and performance budgets.",
  },
];

export const portfolio = [
  {
    title: "CyBus",
    href: links.bus,
    repo: "https://github.com/Danyokkk/cybus",
    icon: Bus,
    summary: "Live Cyprus bus tracking product with routes, stops, maps, and real-time transport logic.",
    tags: ["JavaScript", "Maps", "Real-time"],
  },
  {
    title: "Fishing Cyprus Wiki",
    href: links.fish,
    icon: Fish,
    summary: "Local knowledge product for fishing spots, species, rules, licenses, and useful Cyprus context.",
    tags: ["Knowledge base", "SEO", "Local data"],
  },
  {
    title: "Work / Marketplace",
    href: links.work,
    icon: Globe2,
    summary: "Client-facing web work, marketplace direction, business UX, and shipped digital surfaces.",
    tags: ["Next.js", "Business UX", "Launch"],
  },
];

export const proof = [
  { value: "19", label: "public GitHub repositories" },
  { value: "3", label: "live product anchors" },
  { value: "TLF", label: "Technology Leaders of the Future scholar" },
  { value: "CY", label: "built in Cyprus" },
];
