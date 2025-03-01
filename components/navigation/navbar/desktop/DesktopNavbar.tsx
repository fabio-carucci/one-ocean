import { useTranslations } from "next-intl";

import { navLinks } from "@/constants/navLinks";
import { Link } from "@/i18n/routing";
import { cn } from "@/lib/utils";

import Menu from "./Menu";

const DesktopNavbar: React.FC = () => {
  const t = useTranslations("NavLinks");

  return (
    <nav className="flex items-center gap-[24px] text-white">
      {navLinks.map(({ label, route }) => {
        const isTakeActionButton = route === "/contribuisci";

        return (
          <Link
            key={route}
            href={route}
            className={cn(
              "w-fit text-[16px] font-light leading-[24px]",
              isTakeActionButton &&
                "px-[24px] py-[8px] rounded-[24px] border border-[#365BA5] bg-[#365BA5]/20"
            )}
          >
            {t(label)}
          </Link>
        );
      })}
      <Menu />
    </nav>
  );
};

export default DesktopNavbar;
