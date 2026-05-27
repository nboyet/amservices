import type { FC } from "react";

interface ZoneSectionProps {
  cities: string[];
  surroundingNote: string;
}

const ZoneSection: FC<ZoneSectionProps> = ({ cities, surroundingNote }) => {
  return (
    <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
      <h2 className="mb-6 text-2xl font-bold text-gray-900 sm:text-3xl">
        Zone d&apos;intervention
      </h2>

      {cities.length > 0 ? (
        <ul className="mb-4 flex flex-wrap gap-2">
          {cities.map((city) => (
            <li
              key={city}
              className="rounded-full border border-mint bg-mint/20 px-4 py-1 text-sm font-medium text-gray-800"
            >
              {city}
            </li>
          ))}
        </ul>
      ) : (
        <p className="mb-4 text-base text-gray-600">
          [Ville], [communes voisines] et alentours
        </p>
      )}

      <p className="text-base text-gray-600">{surroundingNote}</p>
    </section>
  );
};

export default ZoneSection;
