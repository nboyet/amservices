import type { FC } from "react";
import Image from "next/image";
import type { ServiceItem, TarifItem, TravelFees } from "../_types";

interface ServicesSectionCProps {
  services: ServiceItem[];
  tarifs: TarifItem[];
  travelFees: TravelFees;
  paymentMethods: string[];
}

// Static images per service — mapped by service id
const SERVICE_IMAGES: Record<string, { src: string; alt: string }> = {
  menage: {
    src: "/service-menage.png",
    alt: "Aide ménagère : entretien et nettoyage du domicile",
  },
  courses: {
    src: "/service-courses.png",
    alt: "Aide aux courses : accompagnement au supermarché",
  },
  repas: {
    src: "/service-repas.png",
    alt: "Aide aux repas : préparation et prise des repas",
  },
  quotidien: {
    src: "/service-quotidien.png",
    alt: "Actes de la vie quotidienne : accompagnement personnalisé",
  },
  menagePro: {
    src: "/service-menage-pro.png",
    alt: "Ménage professionnel : bureaux et locaux",
  },
};

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

const ServicesSectionC: FC<ServicesSectionCProps> = ({
  services,
  tarifs,
  travelFees,
  paymentMethods,
}) => {
  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section header */}
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-emerald-600">
            Ce que je propose
          </p>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Prestations & Tarifs
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-gray-500">
            Un accompagnement personnalisé pour chaque besoin, à votre domicile
            ou en déplacement.
          </p>
        </div>

        {/* Tax credit banner */}
        <div className="mb-12 flex items-center gap-4 rounded-2xl bg-gradient-to-r from-emerald-50 to-sky-50 px-6 py-4 ring-1 ring-emerald-200/60">
          <span className="text-2xl" aria-hidden="true">
            💰
          </span>
          <p className="text-sm text-gray-700">
            <strong className="text-gray-900">Crédit d&apos;impôt 50 %</strong>{" "}
            — L&apos;aide ménagère est éligible. Vous payez la moitié du tarif
            affiché après réduction fiscale.
          </p>
        </div>

        {/* Services list — alternating image sides */}
        <div className="flex flex-col gap-16">
          {services.map((service, index) => {
            const img = SERVICE_IMAGES[service.id];
            const tarifItem = tarifs.find(
              (t) =>
                t.id === service.id ||
                t.id === service.id + "" ||
                (service.id === "menage" && t.id === "aide-menagere") ||
                (service.id === "courses" && t.id === "aide-courses") ||
                (service.id === "repas" && t.id === "aide-repas") ||
                (service.id === "quotidien" && t.id === "actes-quotidiens") ||
                (service.id === "menagePro" && t.id === "menage-pro"),
            );
            const isImageRight = index % 2 === 1;

            return (
              <article
                key={service.id}
                className={`flex flex-col gap-6 lg:gap-12 ${
                  isImageRight ? "lg:flex-row-reverse" : "lg:flex-row"
                } items-center`}
              >
                {/* Image side */}
                <div className="relative w-full shrink-0 overflow-hidden rounded-2xl lg:w-[420px]">
                  {img ? (
                    <Image
                      src={img.src}
                      alt={img.alt}
                      width={420}
                      height={320}
                      className="h-[260px] w-full object-cover lg:h-[300px]"
                      loading="lazy"
                    />
                  ) : (
                    <div
                      className="flex h-[260px] w-full items-center justify-center rounded-2xl bg-emerald-50 text-6xl lg:h-[300px]"
                      aria-hidden="true"
                    >
                      {service.icon}
                    </div>
                  )}
                </div>

                {/* Content side */}
                <div className="flex-1 w-full">
                  <div className="mb-3 flex items-center gap-3">
                    <span
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-2xl"
                      aria-hidden="true"
                    >
                      {service.icon}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">
                      {service.title}
                    </h3>
                  </div>

                  <p className="mb-4 text-base leading-relaxed text-gray-600">
                    {service.description}
                  </p>

                  {tarifItem && (
                    <div className="mb-4 inline-flex items-baseline gap-1">
                      <span className="text-3xl font-bold text-gray-900">
                        {tarifItem.price}
                      </span>
                      {tarifItem.taxCredit && (
                        <span className="ml-3">
                          <TaxBadge />
                        </span>
                      )}
                    </div>
                  )}

                  <a
                    href="#contact"
                    className="inline-flex min-h-[44px] items-center justify-center rounded-full border-2 border-emerald-500 px-8 py-2 text-sm font-semibold text-emerald-700 hover:bg-emerald-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500"
                  >
                    En savoir plus
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        {/* Weekly packages */}
        <div className="mt-20">
          <h3 className="mb-6 text-center text-xl font-bold text-gray-900">
            Forfaits hebdomadaires — Aide ménagère
          </h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                id: "forfait-2h",
                label: "Forfait 2 h / semaine",
                price: "28 €",
                saving: "→ économisez 2 €",
                taxCredit: true,
              },
              {
                id: "forfait-4h",
                label: "Forfait 4 h / semaine",
                price: "55 €",
                saving: "→ économisez 5 €",
                taxCredit: true,
              },
            ].map((f) => (
              <div
                key={f.id}
                className="flex items-center justify-between rounded-2xl bg-white px-6 py-5 shadow-sm ring-1 ring-gray-200/80"
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

        {/* Travel + payment */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          <div className="rounded-2xl bg-white px-6 py-5 shadow-sm ring-1 ring-gray-200/80">
            <p className="mb-3 font-semibold text-gray-900">📍 Déplacements</p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center gap-2">
                <CheckIcon />
                <span>
                  <strong>Gratuit</strong> jusqu&apos;à {travelFees.freeRadius}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon />
                <span>
                  Au-delà : <strong>{travelFees.feePerKm} / km</strong>
                </span>
              </li>
            </ul>
          </div>
          <div className="rounded-2xl bg-white px-6 py-5 shadow-sm ring-1 ring-gray-200/80">
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
    </section>
  );
};

export default ServicesSectionC;
