import type { FC } from "react";
import type { TrustPoint } from "../_types";
import ScrollReveal from "./ScrollReveal";

interface TrustSectionProps {
  points: TrustPoint[];
}

const TrustSection: FC<TrustSectionProps> = ({ points }) => {
  return (
    <section className="px-4 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-4xl">
        <ScrollReveal variant="up">
          <h2 className="mb-8 text-2xl font-bold text-gray-900 sm:text-3xl">
            Pourquoi me faire confiance\u00a0?
          </h2>
        </ScrollReveal>

        <ul className="flex flex-col gap-6">
          {points.map((point, index) => (
            <ScrollReveal
              key={point.id}
              as="li"
              variant="trust"
              delay={[0, 100, 200, 300, 400][index] ?? 0}
              className="flex items-start gap-4"
            >
              {/* Visual marker */}
              <span
                className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-mint text-2xl transition-transform duration-300 hover:scale-110"
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
            </ScrollReveal>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TrustSection;
