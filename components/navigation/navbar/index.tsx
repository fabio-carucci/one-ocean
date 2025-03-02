"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef } from "react";

import ROUTES from "@/constants/routes";
import { Link } from "@/i18n/routing";

import DesktopNavbar from "./desktop/DesktopNavbar";
import MobileNavbar from "./mobile/MobileNavbar";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const navbarRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "body",
        start: "top -200px",
        toggleActions: "play none none reverse",
      },
    });

    tl.to(navbarRef.current, {
      backgroundColor: "rgba(29, 49, 88)",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      duration: 0.3,
    });
  }, []);

  return (
    <nav
      ref={navbarRef}
      className="fixed left-0 top-0 z-50 flex h-[96px] w-full items-center justify-between bg-transparent px-[32px] py-[8px]"
    >
      <Link href={ROUTES.HOME} className="mr-10 xl:mr-20">
        <Image
          src="/logos/Logo_Orizzontale.svg"
          width={3000}
          height={1000}
          style={{ height: "40px", width: "203px" }}
          alt="Logo Ocean One Foundation"
          priority
        />
      </Link>
      <div className="flex flex-row-reverse items-center gap-10 xl:flex-row xl:justify-between">
        <div className="xl:hidden">
          <MobileNavbar />
        </div>
        <div className="hidden xl:block">
          <DesktopNavbar />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
