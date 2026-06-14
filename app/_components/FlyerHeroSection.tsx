import type { FC } from "react";
import Image from "next/image";

interface FlyerHeroSectionProps {
  phone: string;
  zone: string;
}

const FlyerHeroSection: FC<FlyerHeroSectionProps> = ({ phone, zone }) => {
  return (
    <header className="relative overflow-hidden pt-48">
      {/* Wave background — top dark-blue corner */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 80% -10%, #1a3a6b 0%, transparent 55%), radial-gradient(ellipse 60% 50% at 20% 110%, #c8e6c9 0%, transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-xl px-6 pb-12 text-center">
        {/* Logo */}
        <div className="mb-6 flex justify-center">
          <Image
            src="/amServices.png"
            alt="AM Services"
            width={120}
            height={120}
            className="h-28 w-auto drop-shadow-md"
            priority
          />
        </div>

        {/* Tag top-right style flyer */}
        <div className="absolute right-4 top-2 rounded-lg bg-[#1a3a6b] px-3 py-2 text-center text-xs font-semibold leading-tight text-white shadow-md">
          À vos côtés,
          <br />
          au quotidien !{" "}
          <span className="text-red-300">♥</span>
        </div>

        {/* Main title */}
        <h1 className="font-serif text-4xl font-extrabold leading-tight text-[#1a3a6b] sm:text-5xl">
          Aide à la personne
        </h1>

        {/* Subtitle */}
        <p className="mt-3 font-serif text-base italic text-gray-600">
          &ldquo;Avec bienveillance et professionnalisme&rdquo;
        </p>

        {/* Zone */}
        <p className="mt-2 text-sm font-medium text-gray-500">{zone}</p>

        {/* CTA */}
        <a
          href={`tel:${phone.replace(/\s/g, "")}`}
          className="mt-6 inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full bg-[#1a3a6b] px-8 py-2.5 text-base font-semibold text-white shadow-md transition-all duration-200 hover:bg-[#0f2a55] hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1a3a6b]"
        >
          📞 {phone}
        </a>
      </div>

      {/* Wave divider */}
      <div aria-hidden="true" className="relative h-12 overflow-hidden">
        <svg
          viewBox="0 0 1440 48"
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,0 C360,48 1080,0 1440,48 L1440,48 L0,48 Z"
            fill="#e8f5e9"
          />
        </svg>
      </div>
    </header>
  );
};

export default FlyerHeroSection;
