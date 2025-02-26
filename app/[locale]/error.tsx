"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { useEffect } from "react";

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
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 px-4 py-12 sm:px-6 lg:px-8">
      {/* Logo Ocean One */}
      <Image
        src="/logos/Logo_Orizzontale.svg"
        alt="logo"
        width={512}
        height={512}
        style={{ height: "auto" }}
      />

      {/* Titolo */}
      <h1 className="mt-4 text-2xl font-bold md:text-4xl">{t("title")}</h1>

      {/* Descrizione */}
      <div className="mt-6 text-center text-gray-500">
        {t.rich("description", {
          p: (chunks) => <p className="mt-4">{chunks}</p>,
          retry: (chunks) => (
            <button
              className="mt-4 underline underline-offset-2"
              onClick={reset}
              type="button"
            >
              {chunks}
            </button>
          ),
        })}
      </div>
    </div>
  );
}
