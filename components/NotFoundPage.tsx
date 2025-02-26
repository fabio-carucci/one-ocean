import Image from "next/image";
import { useTranslations } from "next-intl";

import ROUTES from "@/constants/routes";
import { Link } from "@/i18n/routing";

import { Button } from "./ui/button";

export default function NotFoundPage() {
  const t = useTranslations("NotFoundPage");

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center">
        {/* Logo Ocean One */}
        <Link
          href={ROUTES.HOME}
          className="mx-auto flex cursor-pointer items-center justify-center"
        >
          <Image
            src="/logos/Logo_Orizzontale.svg"
            alt="logo"
            width={512}
            height={512}
            style={{ height: "auto" }}
          />
        </Link>

        {/* Titolo */}
        <h1 className="mt-8 text-2xl font-bold md:text-6xl">{t("title")}</h1>

        {/* Messaggio */}
        <p className="mt-4 text-lg text-gray-500">{t("message")}</p>

        {/* Link per tornare alla home */}
        <Button className="mt-4" aria-label={t("goBackHome")} asChild>
          <Link href={ROUTES.HOME}>{t("goBackHome")}</Link>
        </Button>
      </div>
    </div>
  );
}
