"use client";

import Lenis from "@studio-freight/lenis";
import { useEffect, useRef } from "react";

const ScrollManager: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Crea una nuova istanza di Lenis
    lenisRef.current = new Lenis({
      lerp: 0.1, // velocità di scorrimento
      smoothWheel: true, // rende il movimento della rotella più fluido
    });

    // Funzione per il rendering a 60 FPS
    function raf(time: number) {
      if (lenisRef.current) lenisRef.current.raf(time); // aggiorna Lenis ad ogni frame
      requestAnimationFrame(raf); // continua il ciclo di animazione
    }

    requestAnimationFrame(raf);

    return () => {
      if (lenisRef.current) lenisRef.current.destroy(); // pulizia quando il componente viene smontato
    };
  }, []);

  return <>{children}</>; // Rende il contenuto figlio all'interno del manager
};

export default ScrollManager;
