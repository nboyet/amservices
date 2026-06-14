import type { FC } from "react";

interface HeroSectionDProps {
  phone: string;
  zone: string;
}

const HeroSectionD: FC<HeroSectionDProps> = ({ phone, zone }) => {
  return (
    <header
      className="relative pt-20 pb-0 overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #e8f5e9 0%, #ffffff 40%, #e3f2fd 100%)",
      }}
    >
      {/* Decorative leaf top-left */}
      <div className="absolute top-16 left-0 pointer-events-none select-none" aria-hidden="true">
        <svg width="80" height="100" viewBox="0 0 80 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 90 C10 90 -10 40 30 10 C50 0 70 20 60 50 C50 75 10 90 10 90Z" fill="#a5d6a7" opacity="0.5" />
          <path d="M5 95 C5 95 30 70 30 10" stroke="#66bb6a" strokeWidth="1.5" fill="none" />
        </svg>
      </div>

      {/* Decorative leaf top-right */}
      <div className="absolute top-16 right-0 pointer-events-none select-none" aria-hidden="true">
        <svg width="80" height="100" viewBox="0 0 80 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M70 90 C70 90 90 40 50 10 C30 0 10 20 20 50 C30 75 70 90 70 90Z" fill="#90caf9" opacity="0.4" />
          <path d="M75 95 C75 95 50 70 50 10" stroke="#42a5f5" strokeWidth="1.5" fill="none" />
        </svg>
      </div>

      {/* Top-right badge */}
      <div className="absolute top-24 right-6 sm:right-10 flex flex-col items-center" aria-hidden="true">
        <div
          className="rounded-2xl px-4 py-2 text-center shadow-md"
          style={{ background: "#1a3a6b", color: "white" }}
        >
          <p className="text-xs font-semibold leading-tight">À vos côtés,</p>
          <p className="text-xs font-semibold leading-tight">au quotidien&nbsp;!</p>
        </div>
        <span className="mt-1 text-rose-400 text-lg" aria-hidden="true">♡</span>
      </div>

      {/* Logo area */}
      <div className="mx-auto flex max-w-3xl flex-col items-center px-4 pt-8 text-center">
        {/* Circular logo illustration */}
        <div
          className="mb-4 flex h-20 w-20 items-center justify-center rounded-full shadow-md"
          style={{ background: "linear-gradient(135deg, #1a3a6b 0%, #2e7d32 100%)" }}
          aria-hidden="true"
        >
          <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            {/* House */}
            <path d="M22 8 L36 20 L36 36 L28 36 L28 26 L16 26 L16 36 L8 36 L8 20 Z" fill="white" opacity="0.9" />
            {/* Heart */}
            <path d="M22 29 C22 29 17 25 17 22 C17 20 18.5 19 20 19 C21 19 22 20 22 20 C22 20 23 19 24 19 C25.5 19 27 20 27 22 C27 25 22 29 22 29Z" fill="#ef5350" />
          </svg>
        </div>

        <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700 mb-1">AM Services</p>
        <h1
          className="text-4xl font-extrabold sm:text-5xl"
          style={{ color: "#1a3a6b" }}
        >
          Aide à la personne
        </h1>
        <p
          className="mt-3 text-lg italic font-medium"
          style={{ color: "#1a3a6b" }}
        >
          &ldquo;Avec bienveillance et professionnalisme&rdquo;
        </p>
        <p className="mt-2 text-sm text-gray-500">{zone}</p>
      </div>

      {/* CTA + phone block */}
      <div className="mx-auto mt-8 flex max-w-xl flex-col items-center gap-4 px-4 sm:flex-row sm:justify-center">
        {/* CESU pill */}
        <div
          className="rounded-full px-5 py-2.5 text-sm font-semibold text-white shadow"
          style={{ background: "#2e7d32" }}
        >
          Si je n&apos;ai pas le cours · Contact CESU accepté
        </div>

        {/* 50% tax credit badge */}
        <div className="flex items-center gap-2">
          <div
            className="flex items-center gap-1 rounded-lg px-3 py-2 text-xs font-bold text-white shadow"
            style={{ background: "#1565c0" }}
          >
            <span>Services à</span>
            <span>la personne</span>
          </div>
          <div
            className="flex h-12 w-12 items-center justify-center rounded-full text-sm font-extrabold text-white shadow"
            style={{ background: "#e91e63" }}
          >
            50%
          </div>
        </div>

        {/* Phone */}
        <a
          href={`tel:${phone.replace(/\s/g, "")}`}
          className="inline-flex min-h-[44px] items-center gap-2 rounded-full px-6 py-2 text-base font-bold text-white shadow-md hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          style={{ background: "#1a3a6b" }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
          </svg>
          {phone}
        </a>
      </div>

      {/* Decorative wave bottom */}
      <div className="mt-10" aria-hidden="true">
        <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 20 C240 40 480 0 720 20 C960 40 1200 0 1440 20 L1440 40 L0 40 Z"
            fill="#1a3a6b"
            opacity="0.08"
          />
        </svg>
      </div>
    </header>
  );
};

export default HeroSectionD;
