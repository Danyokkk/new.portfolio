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
  PenTool,
  Route,
  Search,
  TestTube2,
  Wand2,
} from "lucide-react";

export const links = {
  github: "https://github.com/Danyokkk",
  kaggle: "https://www.kaggle.com/daan1k",
  telegram: "https://t.me/daqxn",
  bus: "https://bus.daan1k.xyz",
  fish: "https://fish.daan1k.xyz",
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
    title: "3+ years building websites",
    text: "Hands-on work with real pages, client needs, structure, speed, and launch details.",
  },
  {
    icon: Globe2,
    title: "Webflow, Wix, Tilda, Next.js",
    text: "Uses the right level of tool for the project, from builder platforms to custom React.",
  },
  {
    icon: DatabaseZap,
    title: "Python and data projects",
    text: "Scripts, experiments, Kaggle work, dashboards, and practical data analysis.",
  },
  {
    icon: Bot,
    title: "AI automation workflows",
    text: "ChatGPT workflows, Telegram automation, assistant-style tools, and prompt systems.",
  },
  {
    icon: MonitorCog,
    title: "Custom PC building",
    text: "PC builds, troubleshooting, device setup, networking basics, and hardware problem solving.",
  },
];

export const processSteps = [
  {
    icon: Search,
    title: "Understand the goal",
    text: "Clarify the real problem, audience, constraints, and what the finished product should do.",
  },
  {
    icon: Route,
    title: "Plan the structure",
    text: "Map the pages, content hierarchy, data, tools, and user flow before design starts.",
  },
  {
    icon: PenTool,
    title: "Design the interface",
    text: "Create a clean visual system that feels modern, readable, and easy to trust.",
  },
  {
    icon: Hammer,
    title: "Build the product",
    text: "Turn the structure into a fast website, automation, script, dashboard, or digital tool.",
  },
  {
    icon: TestTube2,
    title: "Test and improve",
    text: "Check responsiveness, links, performance, edge cases, copy clarity, and real usability.",
  },
];

export const portfolio = [
  {
    title: "CyBus",
    href: links.bus,
    repo: "https://github.com/Danyokkk/cybus",
    icon: Bus,
    description: "A Cyprus bus tracking concept designed to make public transport easier to understand and use.",
    visual: "transit",
    tags: ["Next.js", "UI/UX", "Maps", "Transport"],
  },
  {
    title: "Fishing Cyprus Wiki",
    href: links.fish,
    icon: Fish,
    description: "A local fishing knowledge platform for Cyprus with spots, species, guides, and community-focused information.",
    visual: "wiki",
    tags: ["Web platform", "Research", "Local SEO", "Content"],
  },
  {
    title: "radanumero.com",
    href: links.radanumero,
    icon: BriefcaseBusiness,
    description: "A Webflow website and SEO improvement project focused on structure, search visibility, and trust.",
    visual: "seo",
    tags: ["Webflow", "SEO", "Schema", "Client work"],
  },
  {
    title: "AI / Python Projects",
    href: links.kaggle,
    repo: links.github,
    icon: BrainCircuit,
    description: "Small tools, scripts, and experiments using Python, automation, data, and AI workflows.",
    visual: "automation",
    tags: ["Python", "AI", "Automation", "Data"],
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
    icon: Wand2,
    skills: ["ChatGPT workflows", "AI assistants", "Telegram automation", "Prompt systems"],
  },
  {
    title: "Python & Data",
    icon: DatabaseZap,
    skills: ["Python", "Scripts", "Data analysis", "Kaggle", "Dashboards"],
  },
  {
    title: "Hardware & IT",
    icon: Cpu,
    skills: ["Custom PCs", "Troubleshooting", "Networking basics", "Device setup"],
  },
];
