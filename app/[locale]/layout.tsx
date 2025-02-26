import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ReactNode } from "react";

import BaseLayout from "@/components/BaseLayout";
import Navbar from "@/components/navigation/navbar/Navbar";
import { Locale, routing } from "@/i18n/routing";
import { getPageMetadata } from "@/lib/metadata";

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Omit<Props, "children">) {
  const { locale } = await params; // Attendi i parametri dinamici

  const t = await getTranslations({ locale, namespace: "Metadata" });

  // Usa l'helper per generare i metadata dinamici
  return getPageMetadata({
    locale,
    description: t("general-description"),
  });
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params; // Attendi i parametri dinamici

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <BaseLayout locale={locale}>
      <Navbar />

      <div>{children}</div>
    </BaseLayout>
  );
}
