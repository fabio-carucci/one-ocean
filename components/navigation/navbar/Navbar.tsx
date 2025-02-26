import { Inter } from "next/font/google";
import Image from "next/image";

import ROUTES from "@/constants/routes";
import { Link } from "@/i18n/routing";
import { cn } from "@/lib/utils";

import DesktopNavbar from "./desktop/DesktopNavbar";
import MobileNavbar from "./mobile/MobileNavbar";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const Navbar = () => {
  return (
    <nav
      className={cn(
        inter.className, // Aggiungi il font Inter
        "fixed left-0 top-0 z-50 flex h-[96px] w-full items-center justify-between px-[32px] py-[8px]"
      )}
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
