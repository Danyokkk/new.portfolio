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

        const animatedSelectors = [
          "[data-hero-word]",
          "[data-reveal]",
          "[data-project-card]",
          "[data-skill-card]",
          "[data-process-step]",
          "[data-contact-card]",
          "[data-process-line]",
        ].join(",");

        if (reduceMotion) {
          gsap.set(animatedSelectors, { autoAlpha: 1, x: 0, y: 0, scale: 1, clearProps: "filter" });
          gsap.set("[data-process-line]", { scaleX: 1 });
          return;
        }

        gsap.fromTo(
          "[data-hero-word]",
          { autoAlpha: 0, y: 26, filter: "blur(8px)" },
          {
            autoAlpha: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.78,
            ease: "power3.out",
            stagger: 0.045,
            delay: 0.08,
          },
        );

        gsap.to("[data-floating-card]", {
          y: desktop ? -8 : -4,
          duration: 2.8,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
          stagger: 0.18,
        });

        gsap.utils
          .toArray<HTMLElement>(
            "[data-reveal]:not([data-project-card]):not([data-skill-card]):not([data-process-step]):not([data-contact-card])",
          )
          .forEach((element) => {
            gsap.fromTo(
              element,
              { autoAlpha: 0, y: desktop ? 42 : 20 },
              {
                autoAlpha: 1,
                y: 0,
                duration: desktop ? 0.9 : 0.55,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: element,
                  start: "top 86%",
                  once: true,
                },
              },
            );
          });

        const projectCards = gsap.utils.toArray<HTMLElement>("[data-project-card]");
        if (projectCards.length) {
          gsap.fromTo(
            projectCards,
            { autoAlpha: 0, y: desktop ? 54 : 24, scale: desktop ? 0.96 : 1 },
            {
              autoAlpha: 1,
              y: 0,
              scale: 1,
              duration: desktop ? 0.86 : 0.5,
              ease: "power3.out",
              stagger: desktop ? 0.12 : 0.06,
              scrollTrigger: {
                trigger: "#work",
                start: "top 72%",
                once: true,
              },
            },
          );
        }

        const skillCards = gsap.utils.toArray<HTMLElement>("[data-skill-card]");
        if (skillCards.length) {
          gsap.fromTo(
            skillCards,
            { autoAlpha: 0, x: desktop ? -28 : 0, y: desktop ? 22 : 18 },
            {
              autoAlpha: 1,
              x: 0,
              y: 0,
              duration: 0.68,
              ease: "power3.out",
              stagger: 0.09,
              scrollTrigger: {
                trigger: "#skills",
                start: "top 72%",
                once: true,
              },
            },
          );
        }

        const processSteps = gsap.utils.toArray<HTMLElement>("[data-process-step]");
        if (processSteps.length) {
          gsap.fromTo(
            processSteps,
            { autoAlpha: 0, y: desktop ? 36 : 18 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.7,
              ease: "power3.out",
              stagger: 0.12,
              scrollTrigger: {
                trigger: "#process",
                start: "top 70%",
                once: true,
              },
            },
          );
        }

        gsap.to("[data-process-line]", {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            trigger: "#process",
            start: "top 76%",
            end: "bottom 58%",
            scrub: desktop ? 0.7 : false,
          },
        });

        gsap.fromTo(
          "[data-contact-card]",
          { autoAlpha: 0, y: desktop ? 46 : 22, scale: desktop ? 0.97 : 1 },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: desktop ? 0.92 : 0.55,
            ease: "power3.out",
            scrollTrigger: {
              trigger: "#contact",
              start: "top 78%",
              once: true,
            },
          },
        );

        gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((element) => {
          if (!desktop) return;

          gsap.to(element, {
            yPercent: -10,
            ease: "none",
            scrollTrigger: {
              trigger: element,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.7,
            },
          });
        });

        ScrollTrigger.refresh();
      },
    );

    return () => mm.revert();
  }, []);

  return null;
}
