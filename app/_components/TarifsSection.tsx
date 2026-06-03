import type { FC } from "react";
import Image from "next/image";
import type { TarifItem } from "../_types";

interface TarifsSectionProps {
  tarifs: TarifItem[];
  paymentMethods: string[];
}

const TarifsSection: FC<TarifsSectionProps> = ({ tarifs, paymentMethods }) => {
  return (
    <section className="bg-gradient-to-br from-sky/30 via-white to-mint/30 py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header with logo */}
        <div className="mb-8 flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-center sm:gap-8">
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

        {/* Tax credit highlight - PROMINENT */}
        <div className="mb-10 rounded-2xl border-4 border-mint bg-gradient-to-r from-mint/40 to-sky/40 p-6 text-center shadow-lg sm:p-8">
          <div className="mx-auto max-w-3xl">
            <div className="mb-3 text-4xl" aria-hidden="true">
              💰
            </div>
            <h3 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
              50% de crédit d&apos;impôt
            </h3>
            <p className="mt-3 text-lg font-semibold text-gray-800">
              L&apos;<strong>Aide ménagère </strong>ouvre droit à une réduction
              d&apos;impôt de 50%
            </p>
            <p className="mt-2 text-base text-gray-700">
              Exemple : <strong className="text-xl">40€</strong> ne vous coûte
              réellement que <strong className="text-xl">20€ </strong> après
              crédit d&apos;impôt
            </p>
          </div>
        </div>

        {/* 3-column grid for tarifs */}
        <div className="mb-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tarifs.map((tarif) => (
            <article
              key={tarif.id}
              className="rounded-xl border-2 border-sky bg-white p-6 shadow-sm transition-all hover:shadow-md"
            >
              <h3 className="text-lg font-bold text-gray-900">{tarif.title}</h3>
              <div className="mt-3 text-3xl font-extrabold text-mint-800">
                {tarif.price}
              </div>
              <p className="mt-3 text-sm text-gray-600">{tarif.description}</p>
              {tarif.taxCredit && (
                <div className="mt-4 inline-flex items-center gap-1 rounded-full bg-mint/30 px-3 py-1 text-xs font-semibold text-gray-900">
                  ✓ Crédit d&apos;impôt 50%
                </div>
              )}
            </article>
          ))}
        </div>

        {/* Payment methods */}
        <div className="rounded-xl bg-white p-6 shadow-sm">
          <h3 className="mb-4 text-xl font-bold text-gray-900">
            Moyens de paiement acceptés
          </h3>
          <ul className="space-y-2">
            {paymentMethods.map((method) => (
              <li
                key={method}
                className="flex items-center gap-3 text-gray-700"
              >
                <span
                  className="flex h-6 w-6 items-center justify-center rounded-full bg-mint text-sm"
                  aria-hidden="true"
                >
                  ✓
                </span>
                <span className="font-medium">{method}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TarifsSection;
