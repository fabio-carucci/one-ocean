import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["it", "en"],

  // Used when no locale matches
  defaultLocale: "it",

  // The `pathnames` object holds pairs of internal and
  // external paths. Based on the locale, the external
  // paths are rewritten to the shared, internal ones.
  pathnames: {
    // If all locales use the same pathname, a single
    // external path can be used for all locales
    "/": "/",
    "/blue-economy": "/blue-economy",
    "/partner": "/partner",
    "/newsletter": "/newsletter",

    // If locales use different paths, we can
    // specify each external path per locale
    "/chi-siamo": {
      it: "/chi-siamo",
      en: "/about-us",
    },
    "/il-nostro-approccio": {
      it: "/il-nostro-approccio",
      en: "/our-approach",
    },
    "/progetti": {
      it: "/progetti",
      en: "/projects",
    },
    "/risorse": {
      it: "/risorse",
      en: "/resources",
    },
    "/i-nostri-eventi": {
      it: "/i-nostri-eventi",
      en: "/events",
    },
    "/contribuisci": {
      it: "/contribuisci",
      en: "/take-action",
    },
    "/missione": {
      it: "/missione",
      en: "/mission",
    },
    "/ambasciatori": {
      it: "/ambasciatori",
      en: "/ambassadors",
    },
    "/per-le-scuole": {
      it: "/per-le-scuole",
      en: "/for-schools",
    },
    "/notizie": {
      it: "/notizie",
      en: "/news",
    },
    "/contattaci": {
      it: "/contattaci",
      en: "/contact-us",
    },
  },
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export type Locale = (typeof routing.locales)[number];
export type Pathname = keyof typeof routing.pathnames;
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
