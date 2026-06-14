"use client";

import { useState } from "react";
import { CONTENT } from "../_data/content";
import ServicesSection from "../_components/ServicesSection";
import TarifsSection from "../_components/TarifsSection";
import ServicesPricingSection from "../_components/ServicesPricingSection";

export default function VersionsPage() {
  const [activeVersion, setActiveVersion] = useState<"A" | "B">("A");

  return (
    <div className="min-h-screen bg-gradient-to-br from-mint/50 via-white to-sky/30">
      {/* Header */}
      <div className="pt-40 pb-6 text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Comparaison des versions
        </h1>
        <p className="text-gray-500 text-sm">
          Compare les deux mises en page et choisis celle que tu préfères.
        </p>
      </div>

      {/* Tab switcher */}
      <div className="sticky top-20 z-40 flex justify-center pb-4">
        <div className="flex gap-2 rounded-full bg-white/90 shadow-md backdrop-blur p-1.5 border border-gray-200">
          <button
            onClick={() => setActiveVersion("A")}
            className={`rounded-full px-6 py-2 text-sm font-semibold transition-all duration-200 ${
              activeVersion === "A"
                ? "bg-gray-800 text-white shadow"
                : "text-gray-500 hover:text-gray-800"
            }`}
          >
            Version A — Actuelle
          </button>
          <button
            onClick={() => setActiveVersion("B")}
            className={`rounded-full px-6 py-2 text-sm font-semibold transition-all duration-200 ${
              activeVersion === "B"
                ? "bg-gradient-to-r from-emerald-500 to-sky-500 text-white shadow"
                : "text-gray-500 hover:text-gray-800"
            }`}
          >
            Version B — Nouvelle
          </button>
        </div>
      </div>

      {/* Version content */}
      <div key={activeVersion}>
        {activeVersion === "A" ? (
          <>
            <ServicesSection services={CONTENT.services} />
            <TarifsSection
              tarifs={CONTENT.tarifs}
              travelFees={CONTENT.travelFees}
              paymentMethods={CONTENT.paymentMethods}
            />
          </>
        ) : (
          <ServicesPricingSection
            tarifs={CONTENT.tarifs}
            travelFees={CONTENT.travelFees}
            paymentMethods={CONTENT.paymentMethods}
          />
        )}
      </div>

      {/* Footer note */}
      <div className="py-10 text-center">
        <p className="text-xs text-gray-400">
          Cette page est temporaire — elle sera supprimée une fois la version choisie.
        </p>
      </div>
    </div>
  );
}
