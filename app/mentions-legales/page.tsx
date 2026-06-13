import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mentions légales | AM Services",
  description:
    "Mentions légales du site AM Services : éditeur, hébergement, propriété intellectuelle et données personnelles.",
};

const sections: { title: string; content: string[] }[] = [
  {
    title: "Informations sur l'entreprise",
    content: [
      "Mention: entrepreneur individuel",
      "Identité: Amandine Macé",
      "SIRET : 10269273800010",
      "SIREN : 102692738",
      "SAP : 102692738",
      "Adresse du domicile: *** rue ***, 62840 Laventie",
      "Adresse de courrier électronique: amandine.mace2@gmail.com",
      "Téléphone : 07 82 68 79 54",
    ],
  },
  {
    title: "Nature du site",
    content: [
      "Ce site est un site vitrine à vocation exclusivement informative, présentant les services d'aide à domicile et de ménage proposés par AM Services.",
      "Il ne permet pas la conclusion de contrats en ligne ni le paiement de prestations.",
    ],
  },
  {
    title: "Hébergement du site web",
    content: [
      "Hébergeur : Vercel Inc.",
      "Adresse :  201 Mission St #300, San Francisco, CA 94105, États-Unis",
      "Site web : https://vercel.com",
    ],
  },
  {
    title: "Propriété intellectuelle",
    content: [
      "L'ensemble des contenus présents sur ce site (textes, visuels, logos, structure) sont la propriété exclusive d'AM Services et sont protégés par le droit de la propriété intellectuelle.",
      "Toute reproduction, représentation, modification ou exploitation, totale ou partielle, sans autorisation écrite préalable, est interdite et constitue une contrefaçon sanctionnée par le Code de la propriété intellectuelle.",
    ],
  },
  {
    title: "Données personnelles",
    content: [
      "Les données personnelles collectées via les moyens de contact du site (nom, téléphone, adresse e-mail) sont utilisées uniquement pour répondre aux demandes formulées.",
      "Elles ne font l'objet d'aucune cession ni transmission à des tiers.",
      "Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez d'un droit d'accès, de rectification, de portabilité et de suppression de vos données. Pour exercer ces droits, contactez : amandine.mace2@gmail.com.",
    ],
  },
  {
    title: "Cookies",
    content: [
      "Ce site n'utilise pas de cookies à des fins publicitaires ou de traçage.",
      "Des cookies techniques strictement nécessaires au bon fonctionnement du site peuvent être déposés.",
    ],
  },
  {
    title: "Responsabilité",
    content: [
      "AM Services s'efforce de maintenir les informations de ce site à jour et exactes. Toutefois, l'exactitude et l'exhaustivité des contenus ne peuvent être garanties.",
      "La responsabilité d'AM Services ne saurait être engagée en cas d'erreur ou d'omission dans les informations diffusées, ni pour tout préjudice résultant de l'utilisation du site.",
      "AM Services se réserve le droit de modifier les contenus du site à tout moment et sans préavis.",
    ],
  },
  {
    title: "Droit applicable",
    content: [
      "Le présent site et les présentes mentions légales sont soumis au droit français.",
      "En cas de litige, les tribunaux compétents seront ceux du ressort du domicile de l'éditeur, sauf disposition légale contraire.",
    ],
  },
];

export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-mint/40 via-white to-sky/20">
      <div className="mx-auto max-w-4xl px-4 pb-24 pt-40 sm:px-6 lg:px-8">
        {/* Header card */}
        <div className="mb-10 rounded-3xl border border-white/70 bg-white/90 p-8 shadow-xl shadow-sky-100/50 backdrop-blur-sm sm:p-10">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-600">
            Informations légales
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Mentions légales
          </h1>
          <p className="mt-4 max-w-xl text-base leading-7 text-gray-500">
            Conformément à la loi n° 2004‑575 du 21 juin 2004 pour la confiance
            dans l&apos;économie numérique (LCEN), voici les informations
            légales relatives à ce site.
          </p>
          <div className="mt-8">
            <Link
              href="/#accueil"
              className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-sky-500 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:from-emerald-600 hover:to-sky-600 hover:shadow-lg"
            >
              ← Retour à l&apos;accueil
            </Link>
          </div>
        </div>

        {/* Sections */}
        <div className="grid gap-5">
          {sections.map((section, index) => (
            <section
              key={section.title}
              className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8"
            >
              <h2 className="text-lg font-semibold text-gray-900 sm:text-xl">
                {index + 1}. {section.title}
              </h2>
              <div className="mt-4 space-y-3 text-sm leading-7 text-gray-600 sm:text-base">
                {section.content.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Footer note */}
        <p className="mt-12 text-center text-xs text-gray-400">
          Dernière mise à jour : juin 2026
        </p>
      </div>
    </div>
  );
}
