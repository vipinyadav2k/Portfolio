"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Image from "next/image";

gsap.registerPlugin(ScrollToPlugin);

const RocketScrollButton = () => {
  const rocketRef = useRef<HTMLButtonElement>(null);
  const flameRef = useRef<HTMLDivElement>(null);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);
  const lastScrollY = useRef(0);
  const isScrollingDown = useRef(false);

  // === Scroll Direction Handler ===
  useEffect(() => {
    const handleScroll = () => {
      if (!rocketRef.current) return;

      const rocket = rocketRef.current;
      const currentScroll = window.scrollY;

      const scrollingDown = currentScroll > lastScrollY.current;

      if (scrollingDown !== isScrollingDown.current) {
        isScrollingDown.current = scrollingDown;

        gsap.to(rocket, {
          rotate: scrollingDown ? 180 : 0,
          duration: 0.4,
          ease: "power2.out",
        });
      }

      lastScrollY.current = currentScroll;

      // Clear any existing timeout
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);

      // Set a timeout to rotate rocket back after scrolling stops
      scrollTimeout.current = setTimeout(() => {
        isScrollingDown.current = false;
        gsap.to(rocket, {
          rotate: 0,
          duration: 0.4,
          ease: "power2.out",
        });
      }, 300); // adjust delay as needed
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // === Click Scroll Handler (your original rocket scroll logic) ===
  const handleScroll = () => {
    if (!rocketRef.current) return;

    const rocket = rocketRef.current;
    const flame = flameRef.current;
    const sections = document.querySelectorAll("[data-section]");
    const currentScroll = window.scrollY;
    let nextSectionTop: number | null = null;

    for (let i = 0; i < sections.length; i++) {
      const section = sections[i] as HTMLElement;
      const offsetTop = section.offsetTop;
      if (offsetTop > currentScroll + 10) {
        nextSectionTop = offsetTop;
        break;
      }
    }

    if (nextSectionTop === null) {
      gsap.to(window, {
        scrollTo: { y: 0 },
        duration: 2,
        ease: "power4.in",
      });
      return;
    }

    const tl = gsap.timeline();

    tl.set(flame, { opacity: 1 });

    tl.to(rocket, {
      rotate: 180,
      duration: 0.4,
      ease: "power1.inOut",
    });

    tl.to(rocket, {
      y: -40,
      x: -20,
      duration: 0.5,
      ease: "power1.inOut",
    });

    tl.to(
      [window, rocket],
      {
        scrollTo: { y: nextSectionTop },
        y: 100,
        x: 20,
        duration: 2.5,
        ease: "power2.inOut",
      },
      "<"
    );

    tl.to(
      rocket,
      {
        x: 0,
        y: 0,
        rotate: 0,
        duration: 0.2,
        ease: "power2.out",
      },
      "-=0.2"
    );

    tl.set(flame, { opacity: 0 });
  };

  return (
    <button
      ref={rocketRef}
      onClick={handleScroll}
      className="cursor-pointer fixed bottom-6 right-2 z-50 p-2 rounded-full shadow-xl hover:scale-105 transition duration-300 ease-in-out flex items-center justify-center"
      style={{
        willChange: "transform",
        transformOrigin: "center center",
      }}
      aria-label="Scroll to next section"
    >
      <div className="relative flex justify-center items-center">
        <Image
          src="/rocket.png"
          alt="Rocket"
          width={120}
          height={120}
          className="transition-transform duration-300"
        />
        <div
          ref={flameRef}
          className="absolute bottom-[-30px] w-3 h-20 bg-gradient-to-b from-yellow-300 via-orange-500 to-transparent rounded-full opacity-30 flame-animation pointer-events-none"
        />
      </div>
    </button>
  );
};

export default RocketScrollButton;
