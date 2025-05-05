"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

export default function TechStackShowcase() {
  const moonRef = useRef(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  
    // Continuous moon rotation
    if (moonRef.current) {
      gsap.to(moonRef.current, {
        rotate: 360,
        duration: 120,
        ease: "linear",
        repeat: -1,
      });
    }
  
    // Improved flip animation for skill cards with additional scale and elastic easing
    gsap.fromTo(
      cardsRef.current,
      {
        rotateY: -180,
        opacity: 0,
        scale: 0.6,
      },
      {
        rotateY: 0,
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        duration: 0.8, // Super smooth and slow
        ease: "power1.out", // Nice gradual acceleration/deceleration
        stagger: 0.1, // Delay of 0.1 seconds between each card's animation
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom", // Start animation when the bottom of the container hits the bottom of the viewport
          end: "top bottom", // End animation when the bottom of the container hits the top of the viewport
          toggleActions: "play none none none", // Play on enter, no action on leave
          once: false, // Ensures animation plays every time it enters the viewport
          onEnter: () => {
            // Restart animation when the section enters the viewport
            gsap.fromTo(
              cardsRef.current,
              {
                rotateY: -180,
                opacity: 0,
                scale: 0.6,
              },
              {
                rotateY: 0,
                opacity: 1,
                scale: 1,
                filter: "blur(0px)",
                duration: 0.8,
                ease: "power1.out",
                stagger: 0.1,
              }
            );
          },
          onLeaveBack: () => {
            // When scrolling back out, the trigger will reset the animation
            gsap.set(cardsRef.current, {
              rotateY: -180,
              opacity: 0,
              scale: 0.6,
            });
          },
        },
      }
    );
  }, []);
  

  const skills = [
    "HTML", "CSS", "JavaScript", "TypeScript", "ReactJS", "NextJS",
    "Tailwind CSS", "Framer Motion", "Shadcn", "NodeJS", "ExpressJS",
    "MongoDB", "MySQL", "PostgreSQL", "Prisma", "Zustand", "Zod",
    "Git", "GitHub", "Vercel", "Postman", "Java", "Linux", "pnpm"
  ];

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen text-white flex flex-col items-center justify-center px-4 py-16 overflow-hidden"
    >
      {/* Rotating Moon Background */}
      <div
        ref={moonRef}
        className="absolute top-[-120px] left-[-30px] -translate-x-1/2 z-0 w-[800px] h-[800px] md:w-[1800px] md:h-[1000px] opacity-40 pointer-events-none"
        style={{
          WebkitMaskImage: "linear-gradient(to bottom, white 60%, transparent 100%)",
          maskImage: "linear-gradient(to bottom, white 60%, transparent 100%)",
          filter: "blur(0px)",
        }}
      >
        <Image
          src="/planets.png"
          alt="Rotating Moon"
          layout="fill"
          className="object-contain"
        />
      </div>

      {/* Headings */}
      <h2 className="text-center text-lg text-neutral-400 mb-5 mt-80 tracking-widest z-10">
        I CONSTANTLY TRY TO IMPROVE
      </h2>
      <h1 className="text-4xl md:text-5xl font-semibold text-center mb-12 z-10">
        My Tech Stack
      </h1>

      {/* Skill Cards */}
      <div
        className="cursor-pointer flex flex-wrap gap-4 justify-center max-w-5xl z-10"
        style={{ perspective: "1000px" }}
      >
        {skills.map((skill, index) => (
          <div
            key={skill}
            ref={(el) => {
              cardsRef.current[index] = el;
            }}
            className="flex items-center group relative justify-center gap-2 rounded-xl border border-white/[0.14] bg-neutral-900 px-4 py-1.5 text-sm text-white/80 lg:text-base hover:text-white transition-all duration-300 ease-in-out shadow-md"
            style={{
              transformStyle: "preserve-3d",
              backfaceVisibility: "hidden",
            }}
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
