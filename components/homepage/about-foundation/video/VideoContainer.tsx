"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const VideoContainer: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!containerRef.current || !videoRef.current) return;

    const container = containerRef.current;
    const video = videoRef.current;

    // Fase 1: Rimuove gradualmente il border-radius mentre scrolla in alto
    gsap
      .timeline({
        scrollTrigger: {
          trigger: container,
          start: "top center",
          end: "top 96px",
          scrub: true,
        },
      })
      .to(video, {
        borderRadius: "0px",
        ease: "power1.inOut",
      })
      .to(
        container,
        {
          paddingRight: "0px",
          paddingLeft: "0px",
          ease: "power1.inOut",
        },
        "<"
      );

    // Fase 2: Pinning del video quando raggiunge la cima
    gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top 96px",
        end: "+=700px",
        pin: true,
        pinType: "fixed",
        pinSpacing: true,
        onEnter: () => {
          gsap.set(container, { paddingRight: "0px", paddingLeft: "0px" });
        },
        onLeave: () => {
          gsap.set(container, { paddingRight: "0px", paddingLeft: "0px" });
        },
        onEnterBack: () => {
          gsap.set(container, { paddingRight: "0px", paddingLeft: "0px" });
        },
        onLeaveBack: () => {
          gsap.set(container, { paddingRight: "0px", paddingLeft: "0px" });
        },
      },
    });

    // Fase 3: Ripristino del border-radius DOPO il pinning
    gsap
      .timeline({
        scrollTrigger: {
          trigger: container,
          start: "top 95px", // Quando il pinning è terminato
          end: "+=300px", // Durata del ritorno alla forma originale
          scrub: true,
        },
      })
      .to(video, {
        borderRadius: "50px",
        ease: "power1.inOut",
      })
      .to(
        container,
        {
          paddingRight: "32px",
          paddingLeft: "32px",
          ease: "power1.inOut",
        },
        "<"
      );
  }, []);

  return (
    <div
      ref={containerRef}
      className="h-[calc(100vh-96px)] w-full overflow-hidden px-8"
    >
      <video
        ref={videoRef}
        src="/Hero_video.mp4"
        className="size-full rounded-[50px] object-cover"
        autoPlay
        loop
        muted
      />
    </div>
  );
};

export default VideoContainer;
