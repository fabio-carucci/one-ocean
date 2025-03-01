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

  useEffect(() => {
    gsap.to([subtitleRef.current, titleRef.current], {
      opacity: 1,
      duration: 1,
      ease: "power3.inOut",
    });
  }, []);

  return (
    <div className="z-10 mx-8 flex h-[407px] max-w-[1140px] flex-col items-center justify-end gap-[8px] text-center font-raleway">
      <h6
        ref={subtitleRef}
        className="text-[25px] font-semibold leading-[30px] text-oof-blue-200 opacity-0"
      >
        {subtitle}
      </h6>
      <h1
        ref={titleRef}
        className="mb-4 text-[76px] font-bold leading-[91.2px] tracking-[-2%] text-white opacity-0"
      >
        {title}
      </h1>
    </div>
  );
};

export default HeroText;
