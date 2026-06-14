import type { FC } from "react";
import Image from "next/image";

interface HeroSectionCProps {
  phone: string;
  zone: string;
}

const HeroSectionC: FC<HeroSectionCProps> = ({ phone, zone }) => {
  return (
    <header className="relative pt-20">
      {/* Full-width hero image */}
      <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[580px] overflow-hidden">
        <Image
          src="/hero-care.jpg"
          alt="Amandine, aide à domicile bienveillante, accompagne une personne âgée à son domicile"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Gradient overlay for text readability */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"
          aria-hidden="true"
        />

        {/* Hero text overlay */}
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
            <div className="max-w-xl">
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-emerald-300">
                Aide à la personne
              </p>
              <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                Amandine Macé
              </h1>
              <h2 className="mt-2 text-xl font-medium text-white/90 sm:text-2xl">
                Aide à domicile
              </h2>
              <p className="mt-3 text-base text-white/80 sm:text-lg">
                {zone}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <a
                  href={`tel:${phone.replace(/\s/g, "")}`}
                  className="inline-flex min-h-[44px] items-center justify-center rounded-full border-2 border-white bg-white/10 px-6 py-2 text-base font-semibold text-white backdrop-blur-sm hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  📞 {phone}
                </a>
                <a
                  href="#contact"
                  className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-emerald-500 px-6 py-2 text-base font-semibold text-white hover:bg-emerald-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500"
                >
                  Demander un devis
                </a>
                <a
                  href="#contact"
                  className="inline-flex min-h-[44px] items-center justify-center rounded-full border-2 border-white/70 bg-transparent px-6 py-2 text-base font-semibold text-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Être rappelé
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Emerald accent bar */}
      <div className="h-1 bg-emerald-500" aria-hidden="true" />
    </header>
  );
};

export default HeroSectionC;
