import type { FC } from "react";
import type { ServiceItem, TarifItem, TravelFees } from "../_types";

interface ServicesSectionDProps {
  services: ServiceItem[];
  tarifs: TarifItem[];
  travelFees: TravelFees;
  paymentMethods: string[];
}

// Illustrated SVG icons per service — circular, flyer-style
const SERVICE_SVG: Record<string, JSX.Element> = {
  menage: (
    // Cleaning bucket + brush
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="24" cy="24" r="24" fill="#e8f5e9" />
      {/* bucket */}
      <rect x="14" y="22" width="14" height="14" rx="3" fill="#66bb6a" />
      <path d="M14 25 Q21 28 28 25" stroke="#388e3c" strokeWidth="1.5" fill="none" />
      <path d="M16 22 Q20 16 28 22" stroke="#66bb6a" strokeWidth="2" fill="none" />
      {/* brush */}
      <rect x="29" y="14" width="4" height="14" rx="2" fill="#1a3a6b" />
      <rect x="28" y="26" width="6" height="5" rx="1" fill="#42a5f5" />
    </svg>
  ),
  courses: (
    // Shopping bag
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="24" cy="24" r="24" fill="#fff8e1" />
      <path d="M14 20 L16 34 H32 L34 20 Z" fill="#ffa726" />
      <path d="M19 20 C19 16 29 16 29 20" stroke="#e65100" strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* veggies suggestion */}
      <circle cx="22" cy="26" r="2" fill="#66bb6a" />
      <circle cx="26" cy="24" r="1.5" fill="#ef5350" />
      <circle cx="25" cy="28" r="1.5" fill="#ffca28" />
    </svg>
  ),
  repas: (
    // Heart with fruits
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="24" cy="24" r="24" fill="#e3f2fd" />
      {/* heart outline */}
      <path d="M24 34 C24 34 13 27 13 20 C13 16 16 14 19 14 C21 14 23 15.5 24 17 C25 15.5 27 14 29 14 C32 14 35 16 35 20 C35 27 24 34 24 34Z" fill="#ef5350" opacity="0.15" stroke="#ef5350" strokeWidth="1.5" />
      {/* apple */}
      <circle cx="21" cy="22" r="3" fill="#ef5350" />
      <path d="M21 19 Q22 17 23 19" stroke="#388e3c" strokeWidth="1" fill="none" />
      {/* grape */}
      <circle cx="27" cy="21" r="2" fill="#7e57c2" />
      <circle cx="26" cy="24" r="2" fill="#7e57c2" />
      <circle cx="28" cy="24" r="2" fill="#7e57c2" />
    </svg>
  ),
  quotidien: (
    // Two people / care
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="24" cy="24" r="24" fill="#fce4ec" />
      {/* elderly person */}
      <circle cx="17" cy="16" r="4" fill="#90a4ae" />
      <path d="M13 34 C13 28 21 28 21 34" fill="#90a4ae" />
      <line x1="17" y1="26" x2="17" y2="30" stroke="#90a4ae" strokeWidth="2" />
      <line x1="15" y1="31" x2="19" y2="31" stroke="#90a4ae" strokeWidth="1.5" />
      {/* caregiver */}
      <circle cx="30" cy="15" r="4" fill="#66bb6a" />
      <path d="M26 34 C26 28 34 28 34 34" fill="#66bb6a" />
      {/* heart between them */}
      <path d="M24 26 C24 26 22 24.5 22 23.5 C22 22.5 22.8 22 23.5 22 C24 22 24 22.5 24 22.5 C24 22.5 24 22 24.5 22 C25.2 22 26 22.5 26 23.5 C26 24.5 24 26 24 26Z" fill="#e91e63" />
    </svg>
  ),
  menagePro: (
    // Briefcase + sparkle
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="24" cy="24" r="24" fill="#e8eaf6" />
      {/* briefcase */}
      <rect x="12" y="20" width="24" height="16" rx="3" fill="#3f51b5" />
      <path d="M19 20 L19 17 Q19 15 21 15 H27 Q29 15 29 17 L29 20" stroke="#3f51b5" strokeWidth="1.5" fill="none" />
      <line x1="12" y1="26" x2="36" y2="26" stroke="white" strokeWidth="1.5" opacity="0.4" />
      <rect x="21" y="24" width="6" height="4" rx="1" fill="#7986cb" />
      {/* sparkles */}
      <path d="M34 13 L35 10 L36 13 L39 14 L36 15 L35 18 L34 15 L31 14 Z" fill="#ffca28" />
    </svg>
  ),
};

const SERVICE_ID_TO_TARIF: Record<string, string> = {
  menage: "aide-menagere",
  courses: "aide-courses",
  repas: "aide-repas",
  quotidien: "actes-quotidiens",
  menagePro: "menage-pro",
};

const ServicesSectionD: FC<ServicesSectionDProps> = ({
  services,
  tarifs,
  travelFees,
  paymentMethods,
}) => {
  return (
    <section
      className="py-12 sm:py-16"
      style={{ background: "linear-gradient(180deg, #ffffff 0%, #e8f5e9 40%, #e3f2fd 100%)" }}
    >
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        {/* Section header — flyer style */}
        <div className="mb-10 flex items-center justify-center gap-3 text-center">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M3 10 C3 10 2 4 8 2 C12 1 14 5 10 8 C6 11 3 10 3 10Z" fill="#66bb6a" />
          </svg>
          <h2 className="text-2xl font-extrabold sm:text-3xl" style={{ color: "#1a3a6b" }}>
            Ce que je vous propose
          </h2>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M17 10 C17 10 18 4 12 2 C8 1 6 5 10 8 C14 11 17 10 17 10Z" fill="#42a5f5" />
          </svg>
        </div>

        {/* Service list — flyer style: icon left, text right */}
        <div className="flex flex-col gap-6">
          {services.map((service) => {
            const tarifId = SERVICE_ID_TO_TARIF[service.id];
            const tarifItem = tarifs.find((t) => t.id === tarifId);

            return (
              <article
                key={service.id}
                className="flex items-start gap-5 rounded-2xl bg-white/80 px-5 py-5 shadow-sm"
                style={{ border: "1px solid rgba(26,58,107,0.09)" }}
              >
                {/* Illustrated icon */}
                <div className="shrink-0">
                  {SERVICE_SVG[service.id] ?? (
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-full text-2xl"
                      style={{ background: "#e8f5e9" }}
                      aria-hidden="true"
                    >
                      {service.icon}
                    </div>
                  )}
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-rose-400 text-base" aria-hidden="true">♡</span>
                    <h3 className="text-base font-extrabold" style={{ color: "#1a3a6b" }}>
                      {service.title}
                    </h3>
                    {tarifItem && (
                      <span
                        className="ml-auto shrink-0 rounded-full px-3 py-0.5 text-xs font-bold text-white"
                        style={{ background: "#2e7d32" }}
                      >
                        {tarifItem.price}
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-sm leading-relaxed text-gray-600">{service.description}</p>
                  {tarifItem?.taxCredit && (
                    <span
                      className="mt-2 inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-semibold text-white"
                      style={{ background: "#e91e63" }}
                    >
                      50% crédit d&apos;impôt
                    </span>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        {/* Payment & travel — flyer-style info boxes */}
        <div
          className="mt-10 rounded-2xl px-6 py-5 text-center text-sm text-white shadow"
          style={{ background: "linear-gradient(135deg, #1565c0 0%, #1a3a6b 100%)" }}
        >
          <p className="font-semibold mb-1">🚗 Déplacements</p>
          <p className="opacity-90">
            Gratuit jusqu&apos;à {travelFees.freeRadius} · Au-delà : {travelFees.feePerKm}&nbsp;/&nbsp;km
          </p>
          <div className="mt-3 flex flex-wrap justify-center gap-2">
            {paymentMethods.map((m) => (
              <span
                key={m}
                className="rounded-full bg-white/20 px-3 py-1 text-xs font-medium"
              >
                {m}
              </span>
            ))}
          </div>
        </div>

        {/* CTA contact */}
        <div className="mt-8 text-center">
          <a
            href="#contact"
            className="inline-flex min-h-[44px] items-center gap-2 rounded-full px-8 py-3 text-base font-bold text-white shadow-md hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            style={{ background: "#1a3a6b" }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
            </svg>
            Me contacter
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSectionD;
