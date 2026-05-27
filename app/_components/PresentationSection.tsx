import type { FC } from "react";
import Image from "next/image";
import type { ProviderProfile } from "../_types";

interface PresentationSectionProps {
  provider: ProviderProfile;
}

const PresentationSection: FC<PresentationSectionProps> = ({ provider }) => {
  const altText = `${provider.name}, ${provider.role}`;

  return (
    <section className="bg-gray-50 px-4 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-8 text-2xl font-bold text-gray-900 sm:text-3xl">
          Votre prestataire
        </h2>

        <div className="flex flex-col gap-8 sm:flex-row sm:items-start">
          {/* Photo or avatar */}
          <div className="flex-shrink-0">
            {provider.photoSrc !== null ? (
              <Image
                src={provider.photoSrc}
                width={provider.photoWidth}
                height={provider.photoHeight}
                alt={altText}
                preload={true}
                className="rounded-2xl object-cover shadow-md"
                style={{ width: "160px", height: "160px" }}
              />
            ) : (
              <div
                aria-label={altText}
                className="flex h-40 w-40 items-center justify-center rounded-2xl bg-mint text-6xl shadow-md"
              >
                👤
              </div>
            )}
          </div>

          {/* Content */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-semibold text-gray-900">
              {provider.name}
            </h3>

            <p className="text-base leading-relaxed text-gray-600">
              {provider.experienceText}
            </p>

            <ul className="flex flex-col gap-2">
              {provider.values.map((value) => (
                <li
                  key={value}
                  className="flex items-center gap-2 text-gray-700"
                >
                  <span
                    className="inline-block h-3 w-3 flex-shrink-0 rounded-full bg-mint"
                    aria-hidden="true"
                  />
                  {value}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PresentationSection;
