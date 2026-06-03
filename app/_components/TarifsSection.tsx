import type { FC } from "react";
import Image from "next/image";
import type { TarifItem } from "../_types";

interface TarifsSectionProps {
  tarifs: TarifItem[];
}

const TarifsSection: FC<TarifsSectionProps> = ({ tarifs }) => {
  return (
    <section className="bg-gradient-to-br from-sky/30 via-white to-mint/30 py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
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
            Tarifs
          </h2>
        </div>

        {/* 2-column grid */}
        <div className="grid gap-6 sm:grid-cols-2">
          {tarifs.map((tarif) => (
            <article
              key={tarif.id}
              className={`rounded-xl border-2 p-8 shadow-sm transition-all hover:shadow-lg ${
                tarif.highlight
                  ? "border-mint bg-mint/10 ring-2 ring-mint"
                  : "border-sky bg-white"
              }`}
            >
              <h3 className="text-2xl font-bold text-gray-900">
                {tarif.title}
              </h3>
              <div className="mt-4 text-4xl font-extrabold text-gray-900">
                {tarif.price}
              </div>
              <p className="mt-4 text-gray-600">{tarif.description}</p>
              {tarif.highlight && (
                <div className="mt-4 inline-block rounded-full bg-mint px-4 py-1 text-sm font-semibold text-gray-900">
                  Recommandé
                </div>
              )}
            </article>
          ))}
        </div>

        {/* Tax deduction notice */}
        <div className="mt-8 rounded-lg bg-sky/20 p-4 text-center">
          <p className="text-sm text-gray-700">
            💡 <strong>Crédit d&apos;impôt :</strong> Bénéficiez de 50% de
            crédit d&apos;impôt sur vos dépenses d&apos;aide à domicile
          </p>
        </div>
      </div>
    </section>
  );
};

export default TarifsSection;
