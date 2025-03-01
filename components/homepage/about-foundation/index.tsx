"use client";

import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";
import React, { useRef, useEffect } from "react";

import CardsSection from "./message/CardsSection";
import MessageText from "./message/MessageText";
import TimelineText from "./timeline/TimelineText";
import YearsSection from "./timeline/YearsSection";
import VideoContainer from "./video/VideoContainer";
import VideoText from "./video/VideoText";

gsap.registerPlugin(ScrollTrigger);

const AboutFoundation: React.FC = () => {
  const t = useTranslations("Homepage.AboutFoundation");

  const containerRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerRef.current, // Attiva quando il container di MessageText entra nello schermo
        start: "top 60%", // Inizia quando il top del titolo raggiunge il 60% della viewport
        toggleActions: "play none none reverse", // Esegue solo una volta
      },
    });

    tl.to(containerRef.current, {
      backgroundColor: "#C9D5ED",
      duration: 0.2,
      ease: "power3.inOut",
    });
  }, []);

  const historyData = t.raw("Timeline.history");
  const cardsData = t.raw("Message.cards");

  return (
    <div ref={containerRef} className="bg-oof-blue-50">
      <section className="flex w-full flex-col items-center gap-[80px] pt-[216px]">
        <VideoText
          subtitle={t("Video.subtitle")}
          title={t("Video.title")}
          text={t("Video.text")}
        />
        <VideoContainer />
      </section>
      <section className="flex w-full flex-col items-center gap-[116px] px-8 py-[216px]">
        <TimelineText
          title={t("Timeline.title")}
          subtitle={t("Timeline.subtitle")}
        />
        <YearsSection historyData={historyData} />
      </section>
      <section
        ref={triggerRef}
        id="message-container"
        className="flex w-full flex-col items-center gap-[80px] pb-[216px]"
      >
        <MessageText
          subtitle={t.rich("Message.subtitle", {
            important: (chunks) => <b>{chunks}</b>,
          })}
          title={t("Message.title")}
          text={[t("Message.text-1"), t("Message.text-2"), t("Message.text-3")]}
        />
        <CardsSection cardsData={cardsData} />
      </section>
    </div>
  );
};

export default AboutFoundation;
