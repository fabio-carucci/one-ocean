import Image from "next/image";
import { useTranslations } from "next-intl";

import ROUTES from "@/constants/routes";
import { Link } from "@/i18n/routing";

import { Button } from "./ui/button";

export default function NotFoundPage() {
  const t = useTranslations("NotFoundPage");

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-gray-100 px-4 py-12 sm:px-6 lg:px-8">
      <video
        className="absolute left-0 top-0 z-10 size-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src="/Hero_video.mov" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="z-20 text-center font-raleway">
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
        <h1 className="mt-8 text-2xl font-bold text-oof-blue-900 md:text-6xl">
          {t("title")}
        </h1>

        {/* Messaggio */}
        <p className="mt-4 text-lg text-white">{t("message")}</p>

        {/* Link per tornare alla home */}
        <Button
          className="mt-6 w-fit rounded-[24px] border border-[#365BA5] bg-[#365BA5]/40 px-[24px] py-[8px] text-[16px] font-light leading-[24px] text-oof-blue-200 hover:bg-[#365BA5]/80"
          aria-label={t("goBackHome")}
          asChild
        >
          <Link href={ROUTES.HOME}>{t("goBackHome")}</Link>
        </Button>
      </div>
    </div>
  );
}
