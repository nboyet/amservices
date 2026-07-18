import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { CONTENT } from "./_data/content";
import Footer from "./_components/Footer";
import Navigation from "./_components/Navigation";
import ScrollProgressBar from "./_components/ScrollProgressBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "AM Services - Aide à la personne - 2014 Laventie et communes voisines",
  description:
    "Aide à la personne pour les personnes âgées et en perte d'autonomie : courses, ménage, repas et actes du quotidien à Ville et communes voisines.",
  openGraph: {
    title: "Aide à la personne - 2014 Ville et communes voisines",
    description:
      "Aide à la personne pour les personnes âgées et en perte d'autonomie : courses, ménage, repas et actes du quotidien à Ville et communes voisines.",
    type: "website",
    url: "https://exemple.fr", // TODO: Change
    locale: "fr_FR",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-white text-gray-900">
        {/* Barre de progression au scroll */}
        <ScrollProgressBar />
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer data={CONTENT.footer} />
      </body>
    </html>
  );
}
