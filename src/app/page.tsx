"use client";
import { useEffect, useRef } from "react";
import "./globals.css";
import "../styles/Home.scss";
import gsap from "gsap";
import EducationTimeline from "@/components/Education";
import SpaceshipButton from "@/components/Spaceship";
import SkillsGalaxy from "@/components/Skills";
import ProjectShowcase from "@/components/Projects";

export default function Home() {
  const typeRef = useRef<HTMLParagraphElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;

      if (scrollRef.current) {
        scrollRef.current.style.height = `${scrollPercent}%`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!typeRef.current) return;

    const rawText =
      `Hi, I'm [Vipin Yadav] -- a Full Stack Developer with a focus on creating clean, responsive, and user-friendly web applications.`;

    typeRef.current.innerText = "";

    let insideHighlight = false;

    rawText.split("").forEach((char) => {
      if (char === "[") {
        insideHighlight = true;
        return;
      }
      if (char === "]") {
        insideHighlight = false;
        return;
      }

      const span = document.createElement("span");
      span.textContent = char;

      if (insideHighlight) {
        span.className = "font-bold text-white";
      }

      typeRef.current?.appendChild(span);
    });

    gsap.fromTo(
      typeRef.current.querySelectorAll("span"),
      { opacity: 0 },
      {
        opacity: 1,
        stagger: 0.05,
        ease: "power1.inOut",
        duration: 0.2,
      }
    );
  }, []);

  return (
    <>
      <div className="relative h-screen flex items-center justify-center min-h-screen overflow-hidden ">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#c5741133] via-transparent to-[#55afd900]  " />

        {/* Card */}
        <div className="relative z-10 w-full max-w-3xl text-center bg-white/5 backdrop-blur-md rounded-2xl shadow-2xl p-10 border border-white/20">
          <h1 className="text-3xl md:text-6xl font-extrabold border-white bg-gradient-to-br from-[#11c577] via-[#0e948b] to-[#20c511] bg-clip-text text-transparent  tracking-tight">
            FULL STACK DEVELOPER
          </h1>

          <p
            ref={typeRef}
            className="typewriter mt-6 text-md md:text-xl text-gray-300 max-w-2xl mx-auto whitespace-pre-wrap relative inline-block"
          ></p>

          <p className="mt-4 text-md md:text-lg text-gray-400 italic max-w-xl mx-auto">
          &quot;From sleek UIs to solid APIs — building the web, end to end.&quot;
          </p>

          <a
            href="mailto:vipinyadav2k@gmail.com?subject=Hiring%20Opportunity&body=Hi%20Vipin%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20was%20impressed.%20We%20have%20a%20potential%20opportunity%20for%20you.%20Let's%20connect!%0A%0ABest%2CRegards%0A[Your%20Name]%0A[Your%20Company]"
            className="group relative inline-block mt-10 px-5 py-2 text-xl font-semibold text-black bg-[#d5d905] hover:bg-white transition-all duration-300 ease-in-out shadow-md"
            style={{
              clipPath: "polygon(0 0, 100% 0, 100% 75%, 90% 100%, 0 100%)",
            }}
          >
            <span className="flex items-center gap-2 transition-all duration-300 group-hover:gap-4">
              HIRE ME <span className="text-2xl font-bold">→</span>
            </span>
          </a>
        </div>
      </div>

      {/* Additional Sections */}

      <h2 className=" flex justify-center align-center md:text-7xl text-7xl bg-gradient-to-b from-zinc-100 to-zinc-700/80 bg-clip-text text-transparent p-4 tracking-tight">Personal Projects</h2>
      
      <div
        data-section
        className="min-h-screen flex items-center justify-center text-white"
      >
        <ProjectShowcase />
      </div>
      
      <div
        data-section
        className="min-h-screen flex items-center justify-center text-white "
      >
        <EducationTimeline />
      </div>

      <div
        data-section
        className="min-h-screen flex items-center justify-center text-white"
      >
        <SkillsGalaxy />
      </div>

      

      <div
        data-section
        className="min-h-screen flex items-center justify-center text-white "
      >
        <h2 className="text-4xl font-bold">Projects</h2>
      </div>

      <div
        data-section
        className="min-h-screen flex items-center justify-center text-white"
      >
        <h2 className="text-4xl font-bold">Certifications</h2>
      </div>

      {/* Small Custom Scroll Bar */}
      <div className="fixed right-5 top-1/2 -translate-y-1/2 w-[8px] h-[100px] bg-gray-700 rounded-md overflow-hidden z-50">
        <div
          ref={scrollRef}
          className="bg-[#36e0ca] w-full transition-all duration-200"
          style={{ height: "0%" }}
        ></div>
      </div>

      <SpaceshipButton />
    </>
  );
}
