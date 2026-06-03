import type { FC } from "react";
import Image from "next/image";
import type { PrestationItem } from "../_types";

interface PrestationsSectionProps {
  prestations: PrestationItem[];
}

const PrestationsSection: FC<PrestationsSectionProps> = ({ prestations }) => {
  return (
    <section className="bg-gradient-to-br from-mint/30 via-white to-sky/30 py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header with logo */}
        <div className="mb-12 flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-center sm:gap-8">
          <Image
            src="/si_logo.webp"
            alt="Logo"
            width={80}
            height={80}
            className="h-16 w-16 rounded-lg object-contain sm:h-20 sm:w-20"
          />
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Prestations
          </h2>
        </div>

        {/* 3-column grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {prestations.map((prestation) => (
            <article
              key={prestation.id}
              className="rounded-xl border-2 border-mint bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <h3 className="text-xl font-semibold text-gray-900">
                {prestation.title}
              </h3>
              <p className="mt-3 text-gray-600">{prestation.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrestationsSection;
