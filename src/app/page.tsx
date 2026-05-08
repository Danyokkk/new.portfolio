import { About } from "@/components/About";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Portfolio } from "@/components/Portfolio";
import { ProofStrip } from "@/components/ProofStrip";
import { Process } from "@/components/Process";
import { Skills } from "@/components/Skills";
import { ScrollAnimations } from "@/components/animations/ScrollAnimations";

export default function HomePage() {
  return (
    <>
      <ScrollAnimations />
      <Header />
      <main>
        <Hero />
        <ProofStrip />
        <Portfolio />
        <Skills />
        <Process />
        <About />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
