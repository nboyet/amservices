import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { CONTENT } from "./_data/content";
import Footer from "./_components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AM Services - Aide à domicile — Laventie et communes voisines",
  description:
    "Aide à domicile pour les personnes âgées et en perte d'autonomie : courses, ménage, repas et actes du quotidien à Ville et communes voisines.",
  openGraph: {
    title: "Aide à domicile — Ville et communes voisines",
    description:
      "Aide à domicile pour les personnes âgées et en perte d'autonomie : courses, ménage, repas et actes du quotidien à Ville et communes voisines.",
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
    <html lang="fr" className={`${geistSans.variable} antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-gray-900">
        <main className="flex-1">{children}</main>
        <Footer data={CONTENT.footer} />
      </body>
    </html>
  );
}
