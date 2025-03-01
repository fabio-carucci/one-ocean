"use client";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const YearItem = ({
  year,
  title,
  text,
}: {
  year: number;
  title: string;
  text: string;
}) => {
  const itemRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: itemRef.current, // attiva quando entra nel viewport
        start: "top 90%", // Inizia quando il top dell'elemento raggiunge il 90% della viewport
        toggleActions: "play none none reverse", // Esegui in avanti quando entra e indietro quando esce
      },
    });

    tl.from([itemRef.current], {
      opacity: 0,
      duration: 1,
      ease: "power3.inOut",
    });
  }, []);

  return (
    <div
      ref={itemRef}
      className="flex items-center justify-between border-b border-oof-blue-300 pb-8"
    >
      <div className="flex flex-col gap-2 font-raleway text-oof-blue-300">
        <span className="text-[72px] font-bold leading-[86.4px] tracking-[-1%]">
          {year}
        </span>
        <h5 className="text-[31px] font-bold leading-[37.2px]">{title}</h5>
      </div>
      <p className="max-w-[671px] text-right text-[16px] leading-[24px] text-oof-blue">
        {text}
      </p>
    </div>
  );
};

const YearsSection: React.FC<{
  historyData: { year: number; title: string; text: string }[];
}> = ({ historyData }) => {
  return (
    <div className="flex w-full flex-col gap-[56px]">
      {historyData.map((item, index) => (
        <YearItem
          key={index}
          year={item.year}
          title={item.title}
          text={item.text}
        />
      ))}
    </div>
  );
};

export default YearsSection;
