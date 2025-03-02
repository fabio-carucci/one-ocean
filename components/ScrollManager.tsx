"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { useEffect, useRef } from "react";
import "lenis/dist/lenis.css";

gsap.registerPlugin(ScrollTrigger);

const ScrollManager: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Nuova istanza di Lenis
    const lenis = new Lenis({
      autoRaf: false,
      smoothWheel: true,
      lerp: 0.1,
    });

    lenisRef.current = lenis;

    // Sincronizza Lenis con ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    // Aggiunge Lenis al ticker di GSAP
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000); // GSAP usa il tempo in secondi, Lenis in ms
    });

    // Disabilita la lag smoothing di GSAP per evitare ritardi nelle animazioni
    gsap.ticker.lagSmoothing(0);

    // Funzione per il rendering a 60 FPS
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      // Cleanup: rimuove Lenis dal ticker di GSAP e distrugge l'istanza
      gsap.ticker.remove((time) => lenis.raf(time * 1000));
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
};

export default ScrollManager;
