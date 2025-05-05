"use client";
import React, { useEffect, useRef } from "react";
import "../styles/Intro.scss";
import { gsap } from "gsap";

const IntroScreen: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const letters = gsap.utils.toArray<HTMLDivElement>(".intro-letter");

    // VIPIN letters
    const vipinLetters = letters.slice(2, 7);
    // YADAV letters (reversed for animation symmetry)
    const yadavLetters = letters.slice(9, 14).reverse();

    const tl = gsap.timeline();

    // Animate both VIPIN and YADAV together
    vipinLetters.forEach((el, i) => {
      tl.to(
        el,
        {
          y: -100,
          opacity: 0,
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 0.5,
          ease: "power1.inOut",
        },
        i * 0.2
      );
    });

    yadavLetters.forEach((el, i) => {
      tl.to(
        el,
        {
          y: -100,
          opacity: 0,
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 0.5,
          ease: "power1.inOut",
        },
        i * 0.2 // same time sync as VIPIN
      );
    });

    // Fade out the whole screen
    tl.to(
      containerRef.current,
      {
        opacity: 0,
        duration: 0.9,
        delay: 0.4,
        onComplete: () => {
          if (containerRef.current) {
            containerRef.current.style.display = "none";
            containerRef.current.style.pointerEvents = "none";
          }
        },
      },
      "+=0.5"
    );
  }, []);

  return (
    <div className="intro-screen" ref={containerRef}>
      {[" ", " ", "V", "I", "P", "I", "N", " ", " ", "Y", "A", "D", "A", "V", " ", " "].map(
        (letter, i) => (
          <div key={i} className="intro-letter">
            {letter}
          </div>
        )
      )}
    </div>
  );
};

export default IntroScreen;
