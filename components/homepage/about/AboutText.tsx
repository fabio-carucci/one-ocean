"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

interface AboutTextProps {
  subtitle: string;
  title: string;
}

const AboutText: React.FC<AboutTextProps> = ({ subtitle, title }) => {
  const subtitleRef = useRef<HTMLHeadingElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);

  // Funzione per separare il titolo in lettere mantenendo gli spazi
  const splitTextIntoLetters = (text: string) => {
    return text.split("").map((char, index) => (
      <span
        key={index}
        className="inline-block opacity-30"
        style={{ display: char === " " ? "inline-block" : "inline" }}
      >
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: titleRef.current, // Attiva quando il titolo entra nello schermo
        start: "top 90%", // Inizia quando il top del titolo raggiunge il 90% della viewport
        toggleActions: "play none none none", // Esegue solo una volta
      },
    });

    // 1. Animazione sottotitolo (fade-in)
    tl.to(subtitleRef.current, {
      opacity: 1,
      duration: 1,
    });

    // 2. Animazione lettere titolo (da opacity-30 a opacity-100 una alla volta)
    const letters = titleRef.current?.querySelectorAll("span");

    if (letters) {
      tl.to(
        letters,
        {
          opacity: 1,
          duration: 0.1,
          stagger: 0.02, // Ritardo tra ogni lettera
          ease: "power2.out",
        },
        "-=1" // Inizia insieme al sottotitolo
      );
    }
  }, []);

  return (
    <div className="z-10 mx-8 flex h-[407px] max-w-[1140px] flex-col items-start justify-end gap-[8px]">
      <h6
        ref={subtitleRef}
        className="text-[16px] leading-[24px] text-oof-blue-200 opacity-0"
      >
        {subtitle}
      </h6>
      <h3
        ref={titleRef}
        className="mb-4 text-[49px] font-bold leading-[58.8px] tracking-[-1%] text-white"
      >
        {splitTextIntoLetters(title)}
      </h3>
    </div>
  );
};

export default AboutText;
