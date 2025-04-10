"use client";
import { useEffect, useRef } from "react";
import "./globals.css";
import "../styles/Home.scss";
import gsap from "gsap";
import EducationTimeline from "@/components/Education";

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
      "Hi, I'm [Vipin Yadav]. I'm a Full Stack Developer passionate about building dynamic and responsive web applications.";

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
      <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <h1 className="text-3xl md:text-6xl font-extrabold text-[#19d3ad] drop-shadow-lg">
          FULL STACK DEVELOPER
        </h1>
        <p
          ref={typeRef}
          className="typewriter mt-6 text-md md:text-xl text-gray-300 max-w-2xl whitespace-pre-wrap relative inline-block"
        ></p>

        <p className="mt-4 text-md md:text-lg text-gray-400 italic max-w-xl">
          "From sleek UIs to solid APIs — building the web, end to end."
        </p>

        <a
          href="mailto:vipinyadav2k@gmail.com?subject=Hiring%20Opportunity&body=Hi%20Vipin%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20was%20impressed.%20We%20have%20a%20potential%20opportunity%20for%20you.%20Let's%20connect!%0A%0ABest%2CRegards%0A[Your%20Name]%0A[Your%20Company]"
          className="absolute bottom-20 left-30 mt-8 text-black bg-[#19d3ad] hover:bg-[#ffffff] text-2xl font-bold py-2 px-4 transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
        >
          HIRE ME
        </a>
      </div>

      {/* Additional Sections */}
      <div className="min-h-screen flex items-center justify-center text-white ">
        <EducationTimeline />
      </div>

      <div className="min-h-screen flex items-center justify-center text-white">
        <h2 className="text-4xl font-bold">Projects</h2>
      </div>

      <div className="min-h-screen flex items-center justify-center text-white">
        <h2 className="text-4xl font-bold">Education</h2>
      </div>

      <div className="min-h-screen flex items-center justify-center text-white ">
        <h2 className="text-4xl font-bold">Skills</h2>
      </div>

      <div className="min-h-screen flex items-center justify-center text-white">
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
    </>
  );
}
