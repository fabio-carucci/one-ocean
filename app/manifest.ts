import { MetadataRoute } from "next";

export default async function manifest(): Promise<MetadataRoute.Manifest> {
  return {
    name: "Ocean One Foundation",
    short_name: "Ocean One",
    description:
      "La Ocean One Foundation è impegnata nella protezione degli oceani e nella salvaguardia della biodiversità marina. Lavoriamo per un futuro sostenibile, promuovendo pratiche oceaniche responsabili e sensibilizzando sul rispetto dell'ambiente marino.",
    icons: [
      {
        src: "/web-app-manifest-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/web-app-manifest-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    start_url: "/",
    theme_color: "#ffffff",
    background_color: "#ffffff",
  };
}
