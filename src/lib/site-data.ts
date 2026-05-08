import type { LucideIcon } from "lucide-react";
import {
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  Bus,
  Code2,
  Cpu,
  DatabaseZap,
  Fish,
  Globe2,
  Hammer,
  Laptop,
  MonitorCog,
  Search,
  Settings2,
  TestTube2,
  Wand2,
} from "lucide-react";

export const links = {
  github: "https://github.com/Danyokkk",
  kaggle: "https://www.kaggle.com/daan1k",
  telegram: "https://t.me/daqxn",
  bus: "https://bus.daan1k.xyz",
  fish: "https://fish.daan1k.xyz",
  work: "https://work.daan1k.xyz",
  radanumero: "https://radanumero.com",
  email: "mailto:dsakhno@isl.cy",
};

export const navItems = [
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export type IconCard = {
  icon: LucideIcon;
  title: string;
  text: string;
};

export const proofCards: IconCard[] = [
  {
    icon: Laptop,
    title: "Webflow / Wix / Tilda / Next.js",
    text: "Comfortable moving from no-code builders to custom React and Next.js builds.",
  },
  {
    icon: DatabaseZap,
    title: "Python and data projects",
    text: "Kaggle work, scripts, dashboards, practical analysis, and data cleaning.",
  },
  {
    icon: Bot,
    title: "AI automation workflows",
    text: "AI-assisted research, Telegram workflows, chatbots, and repeatable systems.",
  },
  {
    icon: MonitorCog,
    title: "Custom PC systems",
    text: "PC building, troubleshooting, setup, airflow, peripherals, and networking.",
  },
  {
    icon: Globe2,
    title: "Built in Cyprus",
    text: "Local products and websites made around real problems, not portfolio filler.",
  },
];

export const processSteps = [
  {
    icon: Search,
    title: "Understand the goal",
    text: "Clarify what needs to be built, who it is for, and what success should look like.",
  },
  {
    icon: Wand2,
    title: "Design the structure",
    text: "Plan the user flow, content hierarchy, pages, components, and proof points before styling.",
  },
  {
    icon: Hammer,
    title: "Build the product",
    text: "Create the frontend, automation, data workflow, or website with clean reusable pieces.",
  },
  {
    icon: TestTube2,
    title: "Test and improve",
    text: "Check responsiveness, speed, real links, accessibility, and the small details that make it feel finished.",
  },
];

export const portfolio = [
  {
    title: "CyBus",
    href: links.bus,
    repo: "https://github.com/Danyokkk/cybus",
    icon: Bus,
    problem: "Cyprus bus information is hard to follow when you need routes, stops, and timing quickly.",
    value: "Turns transport data into a cleaner, faster product experience for people moving around Cyprus.",
    visual: "transit",
    tags: ["JavaScript", "Maps", "Public data"],
  },
  {
    title: "Fishing Cyprus Wiki",
    href: links.fish,
    icon: Fish,
    problem: "Local fishing knowledge is scattered across videos, forums, rules, and personal experience.",
    value: "Organizes spots, species, local context, and search-friendly pages into one practical knowledge base.",
    visual: "wiki",
    tags: ["Next.js", "Content", "Local SEO"],
  },
  {
    title: "Work / Marketplace",
    href: links.work,
    repo: "https://github.com/Danyokkk/cypmfinal",
    icon: Globe2,
    problem: "Small businesses and local projects need clean pages, clear offers, and fast execution.",
    value: "A client-facing direction for web work, project presentation, and marketplace-style digital services.",
    visual: "market",
    tags: ["TypeScript", "Business UX", "Launch"],
  },
  {
    title: "radanumero.com",
    href: links.radanumero,
    icon: BriefcaseBusiness,
    problem: "A business website needs to look credible, load fast, and be understandable immediately.",
    value: "Webflow website and SEO structure focused on credibility, clear pages, and search visibility.",
    visual: "seo",
    tags: ["Webflow", "SEO", "Website"],
  },
];

export const skillGroups = [
  {
    title: "Frontend",
    icon: Code2,
    skills: ["Next.js", "React", "Tailwind CSS", "Webflow", "Wix", "Tilda"],
  },
  {
    title: "AI & Automation",
    icon: BrainCircuit,
    skills: ["AI workflows", "Chatbots", "Telegram workflows", "Prompt systems", "Research automation"],
  },
  {
    title: "Data & Python",
    icon: DatabaseZap,
    skills: ["Python", "Kaggle", "Dashboards", "Scripts", "Pandas / NumPy"],
  },
  {
    title: "Hardware",
    icon: Cpu,
    skills: ["Custom PCs", "Troubleshooting", "Setups", "Networking", "Peripherals"],
  },
  {
    title: "Tools",
    icon: Settings2,
    skills: ["GitHub", "Vercel", "SEO basics", "Domains", "Deployment"],
  },
];
