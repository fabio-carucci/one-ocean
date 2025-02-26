import type { MetadataRoute } from "next";

import ROUTES from "@/constants/routes";
import { routing } from "@/i18n/routing";

// Lingue supportate
const locales = routing.locales;

// Pagine statiche (le cartelle nel tuo progetto)
const staticPages = Object.values(ROUTES);

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "http://localhost:3000";

  // Genera URL localizzati per ogni pagina statica con alternates
  const localizedUrls = staticPages.map((page) => {
    // Usa il tipo `Record<string, string>` per accedere correttamente ai percorsi localizzati
    const localizedPath =
      routing.pathnames[page as keyof typeof routing.pathnames];

    // Usa il pathname corretto basato sulla lingua
    const url = `${baseUrl}${localizedPath ? localizedPath : page}`;

    const alternates = {
      languages: locales.reduce(
        (acc, locale) => {
          // Assicurati che localizedPath sia tipizzato come un oggetto che ha come chiavi le lingue
          const localizedPathForLocale =
            localizedPath?.[locale as keyof typeof localizedPath] || page;
          acc[locale] = `${baseUrl}/${locale}${localizedPathForLocale}`;
          return acc;
        },
        {} as Record<string, string>
      ),
    };

    return {
      url,
      lastModified: new Date(), // Data ultima modifica
      changeFrequency: "weekly" as const, // Frequenza di aggiornamento
      priority: page === "/" ? 1 : 0.8, // Homepage con priorità più alta
      alternates, // Aggiungi lingue alternative
    };
  });

  return localizedUrls;
}
