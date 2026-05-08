import { About } from "@/components/About";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Portfolio } from "@/components/Portfolio";
import { Process } from "@/components/Process";
import { Services } from "@/components/Services";
import { ScrollAnimations } from "@/components/animations/ScrollAnimations";

export default function HomePage() {
  return (
    <>
      <ScrollAnimations />
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Process />
        <Portfolio />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
