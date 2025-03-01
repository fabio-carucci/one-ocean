import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

import { cn } from "@/lib/utils";
import { inter, raleway } from "@/styles/fonts";

import ScrollManager from "./ScrollManager";

type Props = {
  children: React.ReactNode;
  locale: string;
};

export default async function BaseLayout({ children, locale }: Props) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <ScrollManager>
      <html lang={locale}>
        <body className={cn(inter.variable, raleway.variable, "font-inter")}>
          {/* Provider per l'internazionalizzazione */}
          <NextIntlClientProvider messages={messages}>
            <main>{children}</main>
          </NextIntlClientProvider>
        </body>
      </html>
    </ScrollManager>
  );
}
