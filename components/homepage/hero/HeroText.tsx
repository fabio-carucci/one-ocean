"use client";

import { gsap } from "gsap";
import React, { useEffect, useRef } from "react";

interface HeroTextProps {
  subtitle: string;
  title: string;
}

const HeroText: React.FC<HeroTextProps> = ({ subtitle, title }) => {
  const subtitleRef = useRef<HTMLHeadingElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);

  // Funzione per separare il titolo in lettere mantenendo gli spazi
  const splitTextIntoLetters = (text: string) => {
    return text.split("").map((char, index) => (
      <span
        key={index}
        className="inline-block opacity-30"
        style={{ display: char === " " ? "inline-block" : "inline" }} // Mantiene gli spazi visibili
      >
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };

  useEffect(() => {
    const tl = gsap.timeline();

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
        "-=1"
      ); // Inizia insieme al sottotitolo
    }
  }, []);

  return (
    <div className="z-10 flex h-[407px] w-[1140px] flex-col items-center justify-end gap-[8px] text-center">
      <h6
        ref={subtitleRef}
        className="text-[25px] font-semibold leading-[30px] text-[#7CC9D3] opacity-0"
      >
        {subtitle}
      </h6>
      <h1
        ref={titleRef}
        className="mb-4 text-[76px] font-bold leading-[91.2px] tracking-[-2%] text-white"
      >
        {splitTextIntoLetters(title)}
      </h1>
    </div>
  );
};

export default HeroText;
