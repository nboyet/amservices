import type { FC } from "react";

interface HeroSectionProps {
  phone: string;
  zone: string;
}

const HeroSection: FC<HeroSectionProps> = ({ phone, zone }) => {
  return (
    <header className="pt-20">
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
        <h1 className="text-2xl text-center font-bold leading-tight text-gray-900 lg:text-4xl">
          Amandine MACÉ
        </h1>
        <h1 className="text-xl text-center font-bold leading-tight text-gray-900 sm:text-xl lg:text-3xl">
          Aide à la personne
        </h1>

        <p className="mt-4 text-lg text-gray-600 sm:text-xl text-center ">
          {zone}
        </p>

        <div className="md:justify-center mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
          {/* Phone link */}
          <a
            href={`tel:${phone.replace(/\s/g, "")}`}
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full border-2 border-sky bg-sky/10 px-6 py-2 text-base font-semibold text-gray-900 hover:bg-sky/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky"
          >
            📞 {phone}
          </a>

          {/* Primary CTA */}
          <a
            href="#contact"
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full bg-mint px-6 py-2 text-base font-semibold text-gray-900 hover:bg-mint/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint"
          >
            Demander un devis
          </a>

          {/* Secondary CTA */}
          <a
            href="#contact"
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full border-2 border-mint bg-white px-6 py-2 text-base font-semibold text-gray-900 hover:bg-mint/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint"
          >
            Être rappelé
          </a>
        </div>
      </div>

      {/* Sky accent bar */}
      <div className="h-1 bg-sky" aria-hidden="true" />
    </header>
  );
};

export default HeroSection;
