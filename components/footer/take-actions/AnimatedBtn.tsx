"use client";

import gsap from "gsap";
import Image from "next/image";
import { useRef, useEffect } from "react";

interface AnimatedButtonProps {
  btnText: string;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({ btnText }) => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const textRef = useRef<HTMLSpanElement | null>(null);
  const arrowRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const btn = buttonRef.current;
    const text = textRef.current;
    const arrow = arrowRef.current;

    if (!btn || !text || !arrow) return;

    const tl = gsap.timeline({ paused: true });

    tl.to(text, { x: -5, duration: 0.3, ease: "power2.out" }).to(
      arrow,
      { x: 5, duration: 0.3, ease: "power2.out" },
      "<"
    );

    btn.addEventListener("mouseenter", () => tl.play());
    btn.addEventListener("mouseleave", () => tl.reverse());

    return () => {
      btn.removeEventListener("mouseenter", () => tl.play());
      btn.removeEventListener("mouseleave", () => tl.reverse());
    };
  }, []);

  return (
    <button
      ref={buttonRef}
      className="relative flex w-fit items-center justify-center gap-[12px] overflow-hidden rounded-[24px] border border-[#365BA5] bg-[#365BA5]/20 p-[12px] pl-[20px]"
    >
      <span
        ref={textRef}
        className="whitespace-nowrap text-[16px] font-light leading-[19.2px] text-white"
      >
        {btnText}
      </span>
      <Image
        ref={arrowRef}
        src="/icons/right-arrow.svg"
        width={22}
        height={22}
        alt="Right arrow button"
      />
    </button>
  );
};

export default AnimatedButton;
