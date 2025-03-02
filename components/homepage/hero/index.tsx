"use client";

import gsap from "gsap";
import { useTranslations } from "next-intl";
import React, { useRef, useEffect } from "react";

import HeroText from "./HeroText";

const HeroSection: React.FC = () => {
  const t = useTranslations("Homepage.Hero");
  const rippleContainerRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);

  const createRipple = (x: number, y: number) => {
    if (!sectionRef.current) return;

    // Ottengo posizione della sezione per evitare che funzioni anche quando non mi trovo "dentro" questa
    const rect = sectionRef.current.getBoundingClientRect();
    const relativeX = x - rect.left;
    const relativeY = y - rect.top;

    // Se il mouse è fuori dalla Hero Section, non creo il ripple
    if (
      relativeX < 0 ||
      relativeX > rect.width ||
      relativeY < 0 ||
      relativeY > rect.height
    )
      return;

    const ripple = document.createElement("div");
    ripple.className = "absolute size-[20px] rounded-full bg-oof-blue/20";
    ripple.style.left = `${relativeX - 10}px`;
    ripple.style.top = `${relativeY - 10}px`;
    ripple.style.pointerEvents = "none";
    rippleContainerRef.current?.appendChild(ripple);

    gsap.to(ripple, {
      scale: 5,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      onComplete: () => ripple.remove(),
    });
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      createRipple(e.clientX, e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex h-screen w-full items-center justify-center overflow-hidden"
    >
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

      {/* Container per i ripple */}
      <div
        ref={rippleContainerRef}
        className="pointer-events-none absolute inset-0"
      />

      {/* Contenuto centrato */}
      <HeroText subtitle={t("subtitle")} title={t("title")} />
    </section>
  );
};

export default HeroSection;

/*
  Questo componente React implementa un effetto "ripple" (cerchio espandente) che si attiva al passaggio del mouse all'interno di una sezione. L'effetto viene creato ogni volta che il mouse si muove sopra la sezione specificata (Hero Section) e si espande da quel punto.

  1. Il riferimento alla sezione (sectionRef) viene utilizzato per calcolare la posizione relativa del mouse rispetto alla sezione.
  2. Quando il mouse si sposta, la funzione createRipple calcola la posizione del mouse rispetto alla sezione e crea un elemento 'div' (il ripple) che si espande e scompare rapidamente.
  3. L'elemento ripple viene animato utilizzando la libreria GSAP, che gestisce l'espansione e l'animazione di dissolvenza in modo fluido.
  4. Il ripple viene rimosso dal DOM una volta completata l'animazione per evitare che il DOM venga intasato con elementi inutilizzati.
  5. L'evento 'mousemove' viene gestito tramite un useEffect, che registra e rimuove l'evento al momento giusto per garantire che il comportamento sia efficiente.
*/
