"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

interface TimelineItem {
  title: string;
  subtitle: string;
  date: string;
  details: string[];
  icon: string;
}

const timelineData: TimelineItem[] = [
  {
    title: "B.Tech Computer Science (B.Tech )",
    subtitle: "The Northcap University, Gurugram, India",
    date: "2020 – 2024",
    details: ["CGPA – 8.5"],
    icon: "/ncu.svg",
  },
  {
    title: "High School",
    subtitle: "Lord Jesus Public School, Gurugram, India",
    date: "2008 – 2020",
    details: [""],
    icon: "/ljps.jpg",
  },
];

const EducationTimeline: React.FC = () => {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      if (!card) return;

      const direction = index % 2 === 0 ? -100 : 100;

      gsap.fromTo(
        card,
        { x: direction, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power1.easeInOut",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  return (
    <section className="relative py-20 text-white">
      <h3 className="text-center text-gray-400 text-sm mb-2 tracking-wider">
        WHAT I HAVE STUDIED SO FAR
      </h3>
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-26">
        Education.
      </h1>

      <div className="relative max-w-full mx-auto">
        {/* Center Line */}
        <div className="absolute left-1/2 top-[-40px] transform -translate-x-1/2 h-full w-[2px] bg-[#a4a4a0] z-10" />

        <div className="flex flex-col gap-15 relative z-10">
          {timelineData.map((item, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div key={index} className="relative flex items-start">
                {/* Timeline Icon */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white border-4 border-black rounded-full flex items-center justify-center z-150">
                  <Image
                    width={100}
                    height={100}
                    src={item.icon}
                    alt="icon"
                    className="w-7 h-7 object-contain"
                  />
                </div>

                {/* Card */}
                <div
                  className={`w-[80%] ${
                    isLeft
                      ? " mr-12 pr-80 justify-end flex"
                      : " pl-80 justify-start flex ml-auto"
                  }`}
                  ref={(el: HTMLDivElement | null) => {
                    cardsRef.current[index] = el;
                  }}
                >
                  <div className="bg-white/10 backdrop-blur-md border border-white/30 rounded-xl shadow-lg px-8 py-6 w-full">
                    <p className="text-sm text-gray-400 mb-2 tracking-wide">
                      {item.date}
                    </p>
                    <h2 className="text-xl md:text-2xl font-bold mb-1 leading-snug">
                      {item.title}
                    </h2>
                    <h3 className="text-sm text-gray-300 mb-4">
                      {item.subtitle}
                    </h3>
                    <ul className="text-sm leading-relaxed text-gray-200">
                      {item.details.length > 0 && (
                        <div>
                          {item.details.map((detail, i) => (
                            <p key={i}>{detail}</p>
                          ))}
                        </div>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EducationTimeline;
