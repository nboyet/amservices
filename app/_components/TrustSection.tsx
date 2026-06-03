import type { FC } from "react";
import type { TrustPoint } from "../_types";

interface TrustSectionProps {
  points: TrustPoint[];
}

const TrustSection: FC<TrustSectionProps> = ({ points }) => {
  return (
    <section className="px-4 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-8 text-2xl font-bold text-gray-900 sm:text-3xl">
          Pourquoi me faire confiance ?
        </h2>

        <ul className="flex flex-col gap-6">
          {points.map((point) => (
            <li key={point.id} className="flex items-start gap-4">
              {/* Visual marker */}
              <span
                className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-mint text-2xl"
                aria-hidden="true"
              >
                {point.icon}
              </span>

              <div className="flex flex-col gap-1">
                <h3 className="text-base font-semibold text-gray-900">
                  {point.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  {point.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TrustSection;
