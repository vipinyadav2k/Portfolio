"use client";
import React, { useEffect, useRef, useState } from "react";
import "../styles/Home.scss";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import Project1 from "./Project1";
import Project2 from "./Project2";
import Project3 from "./Project3";
import Project4 from "./Project4";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  { id: 1, Component: Project1 },
  { id: 2, Component: Project2 },
  { id: 3, Component: Project3 },
  { id: 4, Component: Project4 },
];

const Projects = () => {
  const containerRefs = useRef<HTMLDivElement[]>([]);
  const textRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    containerRefs.current.forEach((el, i) => {
      if (!el) return;

      if (i === 0) {
        // Only register ScrollTrigger to update activeIndex
        ScrollTrigger.create({
          trigger: el,
          start: "top 90%",
          end: "top 10%",
          scrub: true,
          onEnter: () => setActiveIndex(i),
          onEnterBack: () => setActiveIndex(i),
        });
      } else {
        // Animation + scroll-triggered index update for others
        gsap.fromTo(
          el,
          { scale: 0.8, opacity: 1 },
          {
            scale: 1,
            opacity: 1,
            ease: "power4.out",
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
              end: "bottom 5%",
              scrub: true,
              onEnter: () => setActiveIndex(i),
              onEnterBack: () => setActiveIndex(i),
            },
          }
        );
      }
    });

    // Pin the text content area
    if (textRef.current) {
      ScrollTrigger.create({
        trigger: textRef.current,
        start: "top center",
        end: `+=${projects.length * 600}`,
        pin: true,
        pinSpacing: false,
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const borderColors = [
    "border-pink-500",
    "border-green-500",
    "border-blue-500",
    "border-purple-500",
  ];

  const ActiveComponent = projects[activeIndex].Component;

  return (
    <>
      <div className="flex flex-row gap-10 px-10">
        {/* Picture Scroll Section */}
        <div className=" flex flex-col gap-40 py-20">
          {projects.map(({ id }, idx) => (
            <div
              key={id}
              ref={(el) => {
                if (el) containerRefs.current[idx] = el;
              }}
              className={`m-10 top-[100px] flex justify-center text-center border-4 rounded-4xl ${borderColors[idx]}`}
              // className={`m-10 top-[100px] flex justify-center text-center `}
            >
              <HoverBorderGradient
                containerClassName="rounded-3xl"
                as="button"
                className="bg-black w-[800px] h-[500px] text-white flex items-center space-x-2"
              >
                <span className="cursor-pointer w-full h-full flex items-center justify-center">
                  Picture {id}
                </span>
              </HoverBorderGradient>
            </div>
          ))}
        </div>

        {/* Text Section: Pinned */}
        <div className="w-[500px] sticky top-20 h-[500px] flex items-center">
          <ActiveComponent />
        </div>
      </div>
    </>
  );
};

export default Projects;
