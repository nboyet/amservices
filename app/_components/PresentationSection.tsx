import type { FC } from "react";
import Image from "next/image";
import type { ProviderProfile } from "../_types";

interface PresentationSectionProps {
  provider: ProviderProfile;
}

const PresentationSection: FC<PresentationSectionProps> = ({ provider }) => {
  const altText = `${provider.name}, ${provider.role}`;

  return (
    <section className="px-4 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-8 text-2xl font-bold text-gray-900 sm:text-3xl">
          Votre prestataire
        </h2>

        <div className="flex flex-col gap-8 sm:flex-row sm:items-start">
          {/* Photo or avatar */}
          <div className="flex-shrink-0">
            {provider.photoSrc === null ? (
              <div
                aria-label={altText}
                className="flex h-40 w-40 items-center justify-center rounded-2xl bg-mint text-6xl shadow-md"
              >
                👤
              </div>
            ) : (
              <Image
                src={provider.photoSrc}
                width={provider.photoWidth}
                height={provider.photoHeight}
                alt={altText}
                preload={true}
                className="rounded-2xl object-cover shadow-md"
                style={{ width: "160px", height: "160px" }}
              />
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

            {/* Likes section */}
            <div className="mt-6 rounded-xl bg-white/80 p-5 shadow-sm ring-1 ring-gray-100">
              <h4 className="mb-3 flex items-center gap-2 text-base font-semibold text-gray-900">
                <span className="text-xl" aria-hidden="true">
                  💖
                </span>
                Ce que j&apos;aime
              </h4>
              <ul className="flex flex-wrap gap-2">
                {provider.likes.map((like) => (
                  <li
                    key={like}
                    className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-mint/20 to-sky/20 px-4 py-2 text-sm font-medium text-gray-700 transition-all hover:from-mint/30 hover:to-sky/30 hover:shadow-sm"
                  >
                    <span className="text-base" aria-hidden="true">
                      ✨
                    </span>
                    {like}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PresentationSection;
