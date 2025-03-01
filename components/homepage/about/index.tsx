import { useTranslations } from "next-intl";
import React from "react";

import AboutText from "./AboutText";

const AboutSection: React.FC = () => {
  const t = useTranslations("Homepage.About");

  return (
    <section className="flex h-[calc(100vh-96px)] w-full items-center justify-center bg-oof-blue font-raleway">
      {/* Contenuto centrato */}
      <AboutText subtitle={t("subtitle")} title={t("title")} />
    </section>
  );
};

export default AboutSection;
