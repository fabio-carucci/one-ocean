"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { hamburgerLinks } from "@/constants/navLinks";
import { Link } from "@/i18n/routing";
import { cn } from "@/lib/utils";

import LocaleSwitcher from "../../LocaleSwitcher";

const Menu: React.FC = () => {
  const t = useTranslations("NavLinks");
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Image
          src="/icons/menu-icon.svg"
          alt="Menu"
          width={24}
          height={16}
          className="cursor-pointer"
        />
      </DialogTrigger>
      <DialogTitle className="sr-only">*</DialogTitle>
      <DialogDescription className="sr-only">*</DialogDescription>
      <DialogContent className="flex h-screen w-screen max-w-none items-center justify-center rounded-none border-none bg-oof-blue-900 font-raleway text-white sm:rounded-none">
        <div className="flex h-[643px] w-full max-w-[1140px] flex-col gap-[16px] px-6 pt-[121px] md:px-12">
          <h6 className="text-[16px] font-light leading-[24px] text-oof-blue-200">
            {t("discover_more")}
          </h6>
          <div className="flex flex-col gap-2">
            {hamburgerLinks.map(({ label, route }) => {
              const isTakeActionButton = route === "/contribuisci";
              return (
                <Link
                  key={route}
                  href={route}
                  className={cn(
                    "text-[28px] font-semibold leading-[33.6px] text-left",
                    isTakeActionButton && "text-oof-blue-200"
                  )}
                  onClick={() => setOpen(false)}
                >
                  {t(label)}
                </Link>
              );
            })}
          </div>
          <LocaleSwitcher />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Menu;
