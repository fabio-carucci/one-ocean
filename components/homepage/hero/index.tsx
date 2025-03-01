import { useTranslations } from "next-intl";
import React from "react";

import HeroText from "./HeroText";

const HeroSection: React.FC = () => {
  const t = useTranslations("Homepage.Hero");

  return (
    <section className="relative flex h-screen w-full items-center justify-center">
      {/* Video in background */}
      <video
        className="absolute left-0 top-0 size-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src="/Hero_video.mov" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay con gradiente */}
      <div className="absolute left-0 top-0 size-full bg-gradient-to-b from-transparent via-[rgba(8,13,23,0.34)] to-[#080D17]" />

      {/* Contenuto centrato */}
      <HeroText subtitle={t("subtitle")} title={t("title")} />
    </section>
  );
};

export default HeroSection;
