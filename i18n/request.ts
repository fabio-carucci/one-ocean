import { IntlErrorCode } from "next-intl";
import { getRequestConfig } from "next-intl/server";

import { Locale, routing } from "./routing";

import handleError from "@/lib/handlers/errors";

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !routing.locales.includes(locale as Locale)) {
    locale = routing.defaultLocale;
  }

  return {
    onError(error) {
      if (error.code === IntlErrorCode.MISSING_MESSAGE) {
        handleError(error);
      } else {
        handleError(error);
        // altre azioni da eseguire lato server
      }
    },

    getMessageFallback({ namespace, key, error }) {
      const path = [namespace, key].filter((part) => part != null).join(".");

      if (error.code === IntlErrorCode.MISSING_MESSAGE) {
        return path + " is not yet translated";
      } else {
        return "Dear developer, please fix this message: " + path;
      }
    },

    locale,
    messages: (
      await (locale === "it"
        ? import("../messages/it.json")
        : import(`../messages/${locale}.json`))
    ).default,
  };
});
