"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { useEffect } from "react";

import { Button } from "@/components/ui/button";
import logger from "@/lib/logger";

type Props = {
  error: Error;
  reset(): void;
};

export default function Error({ error, reset }: Props) {
  const t = useTranslations("Error");

  useEffect(() => {
    logger.error({ err: error });
  }, [error]);

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-gray-100 px-4 py-12 sm:px-6 lg:px-8">
      {/* Video di sfondo */}
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
        <Image
          src="/logos/Logo_Orizzontale.svg"
          alt="logo"
          width={512}
          height={512}
          style={{ height: "auto" }}
          className="mx-auto"
        />

        {/* Titolo */}
        <h1 className="mt-8 text-2xl font-bold text-oof-blue-900 md:text-6xl">
          {t("title")}
        </h1>

        {/* Descrizione */}
        <div className="mt-6 text-lg text-white">
          {t.rich("description", {
            p: (chunks) => <p className="mt-4">{chunks}</p>,
            retry: (chunks) => (
              <Button
                className="mt-6 w-fit rounded-[24px] border border-[#365BA5] bg-[#365BA5]/40 px-[24px] py-[8px] text-[16px] font-light leading-[24px] text-oof-blue-200 hover:bg-[#365BA5]/80"
                onClick={reset}
                type="button"
              >
                {chunks}
              </Button>
            ),
          })}
        </div>
      </div>
    </div>
  );
}
