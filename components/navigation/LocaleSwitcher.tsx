"use client";

import { usePathname } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { useTransition } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { routing, useRouter, Pathname } from "@/i18n/routing";

import { Button } from "../ui/button";

export default function LocaleSwitcher(): React.ReactNode {
  const t = useTranslations("LocaleSwitcher");
  const locale = useLocale();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();

  // Function to handle the language change
  function onSelectChange(nextLocale: string) {
    startTransition(() => {
      // Get the selected language and build the new URL
      const newPath = `/${pathname.replace(/^\/[a-z]{2}/, "")}` as Pathname;

      // Replace the URL with the correct language
      router.replace(newPath, { locale: nextLocale });

      // Save the selected language in localStorage
      localStorage.setItem("i18nextLng", nextLocale);
    });
  }

  return (
    <Select
      defaultValue={locale}
      onValueChange={onSelectChange}
      disabled={isPending}
    >
      <Button
        asChild
        className="w-fit border-[#365BA5] bg-[#365BA5]/20 text-oof-blue-200 hover:bg-[#365BA5]/40"
      >
        <SelectTrigger>
          <SelectValue placeholder="🌐" />
        </SelectTrigger>
      </Button>
      <SelectContent className="bg-[#365BA5]/20 text-oof-blue-200">
        {routing.locales.map((cur) => (
          <SelectItem key={cur} value={cur}>
            {t("locale", { locale: cur })}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
