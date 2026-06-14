"use client";

import { useState } from "react";
import { CONTENT } from "./_data/content";
import HeroSection from "./_components/HeroSection";
import HeroSectionC from "./_components/HeroSectionC";
import ServicesSection from "./_components/ServicesSection";
import ServicesSectionC from "./_components/ServicesSectionC";
import TarifsSection from "./_components/TarifsSection";
import ServicesPricingSection from "./_components/ServicesPricingSection";
import AudienceSection from "./_components/AudienceSection";
import PresentationSection from "./_components/PresentationSection";
import TrustSection from "./_components/TrustSection";
import ContactSection from "./_components/ContactSection";

export default function Home() {
  const [activeVersion, setActiveVersion] = useState<"A" | "B" | "C">("A");

  return (
    <div className="bg-gradient-to-br from-mint/50 via-white to-sky/30">
      <div className="sticky top-30 z-40 flex justify-center px-4 pt-6">
        <div className="w-full max-w-3xl rounded-2xl border border-gray-200 bg-white/90 p-4 shadow-lg backdrop-blur md:p-5">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-600">
                Comparaison des versions
              </p>
              <p className="mt-1 text-sm text-gray-500">
                Seul le bloc Services / Tarifs change.
              </p>
            </div>
            <div className="flex gap-2 rounded-full bg-gray-100 p-1.5">
              <button
                type="button"
                onClick={() => setActiveVersion("A")}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200 ${
                  activeVersion === "A"
                    ? "bg-gray-800 text-white shadow"
                    : "text-gray-600 hover:text-gray-800"
                }`}
                aria-pressed={activeVersion === "A"}
              >
                Version A
              </button>
              <button
                type="button"
                onClick={() => setActiveVersion("B")}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200 ${
                  activeVersion === "B"
                    ? "bg-gradient-to-r from-emerald-500 to-sky-500 text-white shadow"
                    : "text-gray-600 hover:text-gray-800"
                }`}
                aria-pressed={activeVersion === "B"}
              >
                Version B
              </button>
              <button
                type="button"
                onClick={() => setActiveVersion("C")}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200 ${
                  activeVersion === "C"
                    ? "bg-gradient-to-r from-emerald-600 to-teal-500 text-white shadow"
                    : "text-gray-600 hover:text-gray-800"
                }`}
                aria-pressed={activeVersion === "C"}
              >
                Version C
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Hero — Version C has its own full-width image hero */}
      {activeVersion === "C" ? (
        <section id="accueil">
          <HeroSectionC phone={CONTENT.phone} zone={CONTENT.zone} />
        </section>
      ) : (
        <section id="accueil">
          <HeroSection phone={CONTENT.phone} zone={CONTENT.zone} />
        </section>
      )}

      {activeVersion === "A" ? (
        <>
          <section id="services">
            <ServicesSection services={CONTENT.services} />
          </section>
          <section id="tarifs">
            <TarifsSection
              tarifs={CONTENT.tarifs}
              travelFees={CONTENT.travelFees}
              paymentMethods={CONTENT.paymentMethods}
            />
          </section>
        </>
      ) : activeVersion === "B" ? (
        <section id="services">
          <ServicesPricingSection
            tarifs={CONTENT.tarifs}
            travelFees={CONTENT.travelFees}
            paymentMethods={CONTENT.paymentMethods}
          />
        </section>
      ) : (
        <section id="services">
          <ServicesSectionC
            services={CONTENT.services}
            tarifs={CONTENT.tarifs}
            travelFees={CONTENT.travelFees}
            paymentMethods={CONTENT.paymentMethods}
          />
        </section>
      )}

      <AudienceSection profiles={CONTENT.audienceProfiles} />
      <section id="qui-suis-je">
        <PresentationSection provider={CONTENT.provider} />
        <TrustSection points={CONTENT.trustPoints} />
      </section>
      <section id="contact">
        <ContactSection
          phone={CONTENT.phone}
          email={CONTENT.email}
          availability={CONTENT.contactAvailability}
          invitationText={CONTENT.contactInvitation}
        />
      </section>
    </div>
  );
}
