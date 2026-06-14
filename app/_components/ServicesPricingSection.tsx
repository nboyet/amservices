import type { FC } from "react";
import type { TarifItem, TravelFees } from "../_types";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface PricingCard {
  id: string;
  icon: string;
  title: string;
  price: string;
  unit?: string; // e.g. "/ heure"
  features: string[];
  taxCredit?: boolean;
  badge?: string; // optional top badge label ("Particuliers" | "Professionnels")
  highlight?: boolean; // draws the emerald ring
}

interface ServicesPricingSectionProps {
  tarifs: TarifItem[];
  travelFees: TravelFees;
  paymentMethods: string[];
}

// ---------------------------------------------------------------------------
// Static card definitions
// Keep all editorial content here so content.ts isn't touched.
// ---------------------------------------------------------------------------

const PRICING_CARDS: PricingCard[] = [
  {
    id: "aide-menagere",
    icon: "🏠",
    title: "Aide ménagère",
    price: "15",
    unit: "€ / heure",
    highlight: true,
    taxCredit: true,
    badge: "Le plus populaire",
    features: [
      "Entretien des sols, cuisine, salle de bain",
      "Chambre, vitres, mobilier",
      "Aspirateur filaire inclus",
      "Produits d'entretien inclus",
    ],
  },
  {
    id: "actes-quotidiens",
    icon: "🤝",
    title: "Actes du quotidien",
    price: "20",
    unit: "€ / heure",
    features: [
      "Toilette partielle",
      "Habillage",
      "Aide aux déplacements",
      "Adapté au niveau d'autonomie",
    ],
  },
  {
    id: "menage-pro",
    icon: "💼",
    title: "Ménage professionnel",
    price: "25",
    unit: "€ / heure",
    badge: "Professionnels",
    features: [
      "Fin de location",
      "Fin de chantier",
      "Entretien de bureaux et commerces",
      "Locaux professionnels",
    ],
  },
  {
    id: "aide-courses",
    icon: "🛒",
    title: "Aide aux courses",
    price: "12",
    unit: "€ / heure",
    features: [
      "Accompagnement au magasin",
      "Courses selon vos besoins",
      "Rangement des achats à domicile",
    ],
  },
  {
    id: "aide-repas",
    icon: "🍽️",
    title: "Aide aux repas",
    price: "12",
    unit: "€ / heure",
    features: [
      "Préparation des repas",
      "Aide à la prise des repas",
      "Respect des habitudes alimentaires",
    ],
  },
];

const FORFAITS = [
  {
    id: "forfait-2h",
    label: "Forfait 2 h / semaine",
    price: "28 €",
    saving: "→ économisez 2 €",
    taxCredit: true,
  },
  {
    id: "forfait-4h",
    label: "Forfait 4 h / semaine",
    price: "55 €",
    saving: "→ économisez 5 €",
    taxCredit: true,
  },
];

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

function CheckIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className="mt-0.5 shrink-0 text-emerald-500"
    >
      <circle cx="8" cy="8" r="8" fill="currentColor" fillOpacity="0.12" />
      <path
        d="M5 8.5l2 2 4-4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TaxBadge() {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-200">
      💰 Crédit d&apos;impôt 50 %
    </span>
  );
}

function PricingCardComponent({ card }: { card: PricingCard }) {
  return (
    <article
      className={`relative flex flex-col rounded-2xl bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md ${
        card.highlight ? "ring-2 ring-emerald-400" : "ring-1 ring-gray-200/80"
      }`}
    >
      {/* Top badge */}
      {card.badge && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span
            className={`whitespace-nowrap rounded-full px-3 py-1 text-xs font-semibold shadow-sm ${
              card.highlight
                ? "bg-gradient-to-r from-emerald-500 to-sky-500 text-white"
                : "bg-gray-800 text-white"
            }`}
          >
            {card.badge}
          </span>
        </div>
      )}

      {/* Icon + title */}
      <div className="mb-4 flex items-center gap-3">
        <span
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-mint/60 to-sky/40 text-2xl"
          aria-hidden="true"
        >
          {card.icon}
        </span>
        <h3 className="text-base font-semibold text-gray-900">{card.title}</h3>
      </div>

      {/* Price */}
      <div className="mb-5">
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-bold tracking-tight text-gray-900">
            {card.price}
          </span>
          {card.unit && (
            <span className="text-sm text-gray-500">{card.unit}</span>
          )}
        </div>
        {card.taxCredit && (
          <p className="mt-1 text-xs text-emerald-600">
            Soit{" "}
            <strong>
              {(Number(card.price) / 2)
                .toPrecision(3)
                .toString()
                .replace(".", ",")}{" "}
              €/h{" "}
            </strong>{" "}
            après crédit d&apos;impôt
          </p>
        )}
      </div>

      {/* Divider */}
      <div className="mb-4 h-px bg-gray-100" />

      {/* Features */}
      <ul className="flex flex-col gap-2.5">
        {card.features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
            <CheckIcon />
            {f}
          </li>
        ))}
      </ul>
    </article>
  );
}

// ---------------------------------------------------------------------------
// Main section
// ---------------------------------------------------------------------------

const ServicesPricingSection: FC<ServicesPricingSectionProps> = ({
  travelFees,
  paymentMethods,
}) => {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mb-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Prestations
          </h2>
        </div>

        {/* Tax credit highlight banner */}
        <div className="mx-auto mb-10 mt-8 flex max-w-2xl items-center gap-4 rounded-2xl bg-gradient-to-r from-emerald-50 to-sky-50 px-6 py-4 ring-1 ring-emerald-200/60">
          <span className="text-2xl" aria-hidden="true">
            💰
          </span>
          <p className="text-sm text-gray-700">
            <strong className="text-gray-900">Crédit d&apos;impôt 50 %</strong>{" "}
            — L&apos;aide ménagère est éligible.
          </p>
        </div>

        {/* Pricing cards grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PRICING_CARDS.map((card) => (
            <PricingCardComponent key={card.id} card={card} />
          ))}
        </div>

        {/* Weekly packages */}
        <div className="mt-12">
          <h3 className="mb-5 text-center text-lg font-semibold text-gray-900">
            Forfaits hebdomadaires — Aide ménagère
          </h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {FORFAITS.map((f) => (
              <div
                key={f.id}
                className="flex items-center justify-between rounded-xl bg-white px-6 py-4 ring-1 ring-gray-200/80"
              >
                <div>
                  <p className="font-semibold text-gray-900">{f.label}</p>
                  <p className="mt-0.5 text-xs text-gray-500">{f.saving}</p>
                  {f.taxCredit && (
                    <div className="mt-2">
                      <TaxBadge />
                    </div>
                  )}
                </div>
                <span className="text-2xl font-bold text-gray-900">
                  {f.price}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <h3 className="mb-5 text-center text-lg font-semibold text-gray-900">
            Frais annexes et moyens de paiement
          </h3>
          {/* Info row: travel fees + payment */}
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {/* Travel fees */}
            <div className="rounded-xl bg-white px-6 py-5 ring-1 ring-gray-200/80">
              <p className="mb-3 font-semibold text-gray-900">
                📍 Déplacements
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckIcon />
                  <span>
                    <strong>Gratuit</strong> jusqu&apos;à{" "}
                    {travelFees.freeRadius}
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon />
                  <span>
                    Au-delà : <strong>{travelFees.feePerKm} / km</strong>
                  </span>
                </li>
              </ul>
            </div>

            {/* Payment */}
            <div className="rounded-xl bg-white px-6 py-5 ring-1 ring-gray-200/80">
              <p className="mb-3 font-semibold text-gray-900">💳 Paiement</p>
              <ul className="space-y-2 text-sm text-gray-600">
                {paymentMethods.map((m) => (
                  <li key={m} className="flex items-center gap-2">
                    <CheckIcon />
                    {m}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPricingSection;
