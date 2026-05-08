"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function ScrollAnimations() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();

    mm.add(
      {
        reduceMotion: "(prefers-reduced-motion: reduce)",
        desktop: "(min-width: 768px)",
      },
      (context) => {
        const { reduceMotion, desktop } = context.conditions ?? {};

        if (reduceMotion) {
          gsap.set("[data-reveal]", { autoAlpha: 1, y: 0 });
          return;
        }

        gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
          gsap.fromTo(
            element,
            { autoAlpha: 0, y: desktop ? 46 : 22 },
            {
              autoAlpha: 1,
              y: 0,
              duration: desktop ? 0.9 : 0.55,
              ease: "power3.out",
              scrollTrigger: {
                trigger: element,
                start: "top 84%",
                once: true,
              },
            },
          );
        });

        gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((element) => {
          if (!desktop) return;

          gsap.to(element, {
            yPercent: -12,
            ease: "none",
            scrollTrigger: {
              trigger: element,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.7,
            },
          });
        });
      },
    );

    return () => mm.revert();
  }, []);

  return null;
}
