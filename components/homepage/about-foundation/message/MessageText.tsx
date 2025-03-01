"use client";

import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

interface MessageTextProps {
  subtitle: React.ReactNode;
  title: string;
  text: string[];
}

const MessageText: React.FC<MessageTextProps> = ({ subtitle, title, text }) => {
  const subtitleRef = useRef<HTMLHeadingElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: subtitleRef.current, // Attiva quando il sottotitolo entra nello schermo
        start: "top 90%", // Inizia quando il top del titolo raggiunge il 90% della viewport
        toggleActions: "play none none none", // Esegue solo una volta
      },
    });

    tl.to([subtitleRef.current, titleRef.current, textRef.current], {
      opacity: 1,
      duration: 1,
      ease: "power3.inOut",
    });
  }, []);

  return (
    <div className="z-10 mx-8 flex max-w-[1140px] flex-col gap-[48px]">
      <div className="flex flex-col gap-[8px] font-raleway">
        <h6
          id="hero-text"
          ref={subtitleRef}
          className="text-[25px] font-semibold leading-[30px] text-oof-blue-300 opacity-0"
        >
          {subtitle}
        </h6>
        <h2
          ref={titleRef}
          className="mb-4 text-[61px] font-bold leading-[61px] tracking-[-2%] text-oof-blue opacity-0"
        >
          {title}
        </h2>
      </div>

      <div className="flex justify-center">
        <div
          ref={textRef}
          className="flex max-w-[1023px] flex-col gap-[8px] text-[16px] leading-[24px] text-oof-blue opacity-0"
        >
          {text.map((content, index) => (
            <div key={index}>
              <p>{content}</p>
              <br />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MessageText;
