import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ocean One Foundation",
  description:
    "La Ocean One Foundation è impegnata nella protezione degli oceani e nella salvaguardia della biodiversità marina. Lavoriamo per un futuro sostenibile, promuovendo pratiche oceaniche responsabili e sensibilizzando sul rispetto dell'ambiente marino.",
  appleWebApp: {
    capable: true,
    title: "Ocean One",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
