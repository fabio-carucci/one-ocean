export function getPageMetadata({
  locale,
  description,
  slug = "",
  pageTitle,
  pageImage = "http://localhost:3000/logos/Logo_Orizzontale.svg",
}: {
  locale: string;
  description: string;
  slug?: string;
  pageTitle?: string;
  pageImage?: string;
}) {
  // Se il titolo è fornito, aggiungi " - Ocean One Foundation", altrimenti usa solo "Ocean One Foundation"
  const finalTitle = pageTitle
    ? `${pageTitle} - Ocean One Foundation`
    : "Ocean One Foundation";

  // Genera l'URL canonico
  const canonicalUrl = `http://localhost:3000${locale === "it" ? "" : `/${locale}`}${slug}`;

  return {
    title: finalTitle,
    description,
    keywords:
      "Ocean conservation, Marine biodiversity, Sustainable ocean practices, Protecting marine life, Clean oceans, One Ocean Foundation",
    openGraph: {
      title: finalTitle,
      description,
      url: canonicalUrl,
      images: pageImage,
      locale,
    },
    twitter: {
      card: "summary_large_image",
      title: finalTitle,
      description,
      images: pageImage,
    },
    canonical: canonicalUrl,
  };
}
