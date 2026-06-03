import type { FC } from "react";
import Image from "next/image";

interface HeroSectionProps {
  phone: string;
  zone: string;
}

const HeroSection: FC<HeroSectionProps> = ({ phone, zone }) => {
  return (
    <header className="bg-white">
      {/* Mint accent bar */}
      <div className="h-2 bg-mint" aria-hidden="true" />

      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <Image
            src="/amServices.png"
            alt="AM Services Logo"
            width={300}
            height={150}
            priority
            className="h-auto w-auto max-w-[200px] sm:max-w-[300px]"
          />
        </div>

        <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
          AMServices - Aide à domicile pour les gestes du quotidien
        </h1>

        <p className="mt-4 text-lg text-gray-600 sm:text-xl">
          Service d&apos;aide à domicile — {zone}
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
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
