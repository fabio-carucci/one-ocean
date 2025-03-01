"use client";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

gsap.registerPlugin(ScrollTrigger);

const CardItem = ({
  imageSrc,
  subtitle,
  title,
  text,
}: {
  imageSrc: string;
  subtitle: string;
  title: string;
  text: string;
}) => {
  return (
    // eslint-disable-next-line tailwindcss/no-custom-classname
    <Card className="card-item relative mx-4 flex flex-col gap-[17.4px] rounded-[26.1px] bg-oof-blue-50 p-6 text-center opacity-0">
      <Image
        src={imageSrc}
        width={500}
        height={500}
        alt="Card Icon"
        className="absolute left-[-12px] top-[-28px] h-[89.94px] w-[93.51px]"
      />
      <CardHeader className="p-0">
        <CardDescription className="text-[17.4px] leading-[26.1px] text-oof-blue-200">
          {subtitle}
        </CardDescription>
        <CardTitle className="mt-0 font-raleway text-[42.41px] font-bold leading-[50.89px] tracking-[-1%] text-oof-blue">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <p className="max-w-[671px] text-[16px] leading-[24px] text-oof-blue">
          {text}
        </p>
      </CardContent>
    </Card>
  );
};

const imageSrcData = [
  "/icons/face-icon.png",
  "/icons/hand-icon.png",
  "/icons/flag-icon.png",
];

const CardsSection: React.FC<{
  cardsData: {
    subtitle: string;
    title: string;
    text: string;
  }[];
}> = ({ cardsData }) => {
  const cardsContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const messageContainer = document.getElementById("message-container");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: messageContainer,
        start: "center center",
        end: "+=2000", // Durata della sezione pin (puoi regolarla in base alla lunghezza)
        scrub: true, // Scrub controlla l'animazione in tempo reale con lo scroll
        pin: true, // Pin the container while scrolling
        pinType: "fixed",
        pinSpacing: true,
        toggleActions: "play reverse play reverse", // L'animazione parte quando scendi e ritorna indietro quando sali
      },
    });

    const cards = cardsContainerRef.current?.querySelectorAll(".card-item");

    if (cards) {
      // Ogni card appare e scompare in base alla posizione di scroll
      tl.to(cards, {
        y: -50,
        opacity: 1,
        stagger: 1, // L'animazione delle card è staggered
        ease: "power2.out",
      });
    }
  }, []);

  return (
    <div
      ref={cardsContainerRef}
      className="flex max-w-[1140px] gap-[16px] py-[56px] will-change-transform"
    >
      {cardsData.map((card, index) => (
        <CardItem
          key={index}
          imageSrc={imageSrcData[index]}
          subtitle={card.subtitle}
          title={card.title}
          text={card.text}
        />
      ))}
    </div>
  );
};

export default CardsSection;
