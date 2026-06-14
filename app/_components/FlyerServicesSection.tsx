import type { FC } from "react";

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

interface FlyerServicesSectionProps {
  services: ServiceItem[];
}

// Illustrated circular icons per service using SVG inline art
// Pastel palette matching the flyer aesthetic
const SERVICE_COLORS: Record<string, { bg: string; ring: string }> = {
  menage: { bg: "#e0f2fe", ring: "#bae6fd" },
  courses: { bg: "#fef9c3", ring: "#fde68a" },
  repas: { bg: "#dcfce7", ring: "#bbf7d0" },
  quotidien: { bg: "#fce7f3", ring: "#fbcfe8" },
  menagePro: { bg: "#ede9fe", ring: "#ddd6fe" },
};

// Inline SVG illustrations per service
function ServiceIllustration({ id }: { id: string }) {
  if (id === "menage") {
    return (
      <svg viewBox="0 0 80 80" width="80" height="80" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
        {/* Bucket */}
        <rect x="28" y="38" width="24" height="22" rx="4" fill="#60a5fa" opacity="0.9"/>
        <rect x="30" y="36" width="20" height="4" rx="2" fill="#3b82f6"/>
        <path d="M36 36 Q40 28 44 36" stroke="#3b82f6" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        {/* Spray bottle */}
        <rect x="14" y="30" width="12" height="22" rx="3" fill="#4ade80" opacity="0.85"/>
        <rect x="14" y="26" width="8" height="6" rx="2" fill="#22c55e"/>
        <line x1="22" y1="29" x2="30" y2="25" stroke="#22c55e" strokeWidth="2" strokeLinecap="round"/>
        {/* Mop */}
        <line x1="55" y1="20" x2="50" y2="58" stroke="#a16207" strokeWidth="3" strokeLinecap="round"/>
        <ellipse cx="48" cy="59" rx="8" ry="4" fill="#d4d4d8" opacity="0.8"/>
        {/* Bubbles */}
        <circle cx="60" cy="30" r="3" fill="#bae6fd" opacity="0.7"/>
        <circle cx="66" cy="22" r="2" fill="#bae6fd" opacity="0.5"/>
      </svg>
    );
  }
  if (id === "courses") {
    return (
      <svg viewBox="0 0 80 80" width="80" height="80" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
        {/* Bag */}
        <path d="M22 35 L24 60 Q24 62 26 62 L54 62 Q56 62 56 60 L58 35 Z" fill="#fb923c" opacity="0.9"/>
        <path d="M30 35 Q30 25 40 25 Q50 25 50 35" stroke="#ea580c" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        {/* Vegetables */}
        <circle cx="36" cy="46" r="7" fill="#4ade80" opacity="0.9"/>
        <circle cx="48" cy="44" r="5" fill="#f87171" opacity="0.9"/>
        <path d="M36 40 Q36 35 38 33" stroke="#16a34a" strokeWidth="2" strokeLinecap="round"/>
        <path d="M48 40 Q48 36 50 34" stroke="#16a34a" strokeWidth="2" strokeLinecap="round"/>
        {/* Bread top */}
        <ellipse cx="42" cy="36" rx="6" ry="4" fill="#fde68a" opacity="0.9"/>
      </svg>
    );
  }
  if (id === "repas") {
    return (
      <svg viewBox="0 0 80 80" width="80" height="80" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
        {/* Heart plate */}
        <circle cx="40" cy="44" r="22" fill="#f0fdf4" stroke="#bbf7d0" strokeWidth="2"/>
        <path d="M40 54 C30 46 24 40 28 34 C30 30 36 30 40 36 C44 30 50 30 52 34 C56 40 50 46 40 54Z" fill="#f87171" opacity="0.85"/>
        {/* Fork */}
        <line x1="20" y1="28" x2="20" y2="60" stroke="#6b7280" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="17" y1="28" x2="17" y2="36" stroke="#6b7280" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="23" y1="28" x2="23" y2="36" stroke="#6b7280" strokeWidth="1.5" strokeLinecap="round"/>
        {/* Knife */}
        <line x1="60" y1="28" x2="60" y2="60" stroke="#6b7280" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M60 28 Q66 34 60 42" fill="#d1d5db" stroke="#9ca3af" strokeWidth="1"/>
        {/* Veggies */}
        <circle cx="35" cy="42" r="4" fill="#4ade80" opacity="0.8"/>
        <circle cx="45" cy="38" r="3" fill="#fdba74" opacity="0.8"/>
      </svg>
    );
  }
  if (id === "quotidien") {
    return (
      <svg viewBox="0 0 80 80" width="80" height="80" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
        {/* Person 1 (caregiver - standing) */}
        <circle cx="50" cy="24" r="8" fill="#86efac"/>
        <path d="M42 36 Q44 58 50 60 Q56 58 58 36" fill="#4ade80" opacity="0.9"/>
        {/* Person 2 (elderly - seated) */}
        <circle cx="28" cy="30" r="7" fill="#fcd34d"/>
        <path d="M22 40 Q22 56 28 58 Q34 56 34 40" fill="#fbbf24" opacity="0.9"/>
        {/* Arm link - helping hand */}
        <path d="M34 48 Q40 50 42 46" stroke="#34d399" strokeWidth="3" fill="none" strokeLinecap="round"/>
        {/* Heart */}
        <path d="M38 22 C35 18 30 20 32 24 C34 28 38 30 38 30 C38 30 42 28 44 24 C46 20 41 18 38 22Z" fill="#f87171" opacity="0.8"/>
      </svg>
    );
  }
  // menagePro
  return (
    <svg viewBox="0 0 80 80" width="80" height="80" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      {/* Briefcase */}
      <rect x="18" y="34" width="44" height="30" rx="4" fill="#818cf8" opacity="0.9"/>
      <rect x="28" y="28" width="24" height="8" rx="3" fill="#6366f1" opacity="0.9"/>
      <line x1="18" y1="50" x2="62" y2="50" stroke="white" strokeWidth="1.5" opacity="0.4"/>
      <rect x="34" y="46" width="12" height="8" rx="2" fill="white" opacity="0.6"/>
      {/* Star quality badge */}
      <circle cx="60" cy="26" r="10" fill="#fde68a"/>
      <path d="M60 19 L61.5 23.5 L66 23.5 L62.5 26.5 L64 31 L60 28 L56 31 L57.5 26.5 L54 23.5 L58.5 23.5 Z" fill="#f59e0b"/>
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 21C12 21 3 14 3 8.5C3 5.42 5.42 3 8.5 3C10.24 3 11.91 3.81 13 5.09C14.09 3.81 15.76 3 17.5 3C20.58 3 23 5.42 23 8.5C23 14 12 21 12 21Z"
        stroke="#1a3a6b"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const FlyerServicesSection: FC<FlyerServicesSectionProps> = ({ services }) => {
  return (
    <section
      className="px-4 py-10 sm:px-6"
      style={{ background: "linear-gradient(160deg, #e8f5e9 0%, #e0f2fe 100%)" }}
    >
      <div className="mx-auto max-w-xl">
        {/* Section title — flyer style */}
        <div className="mb-8 flex items-center justify-center gap-3">
          <span className="text-[#1a3a6b] text-lg">❧</span>
          <h2 className="font-serif text-2xl font-bold text-[#1a3a6b] sm:text-3xl">
            Ce que je vous propose
          </h2>
          <span className="text-[#1a3a6b] text-lg">❧</span>
        </div>

        {/* Heart divider */}
        <div className="mb-8 flex justify-center">
          <span className="text-[#1a3a6b] opacity-40">♡</span>
        </div>

        {/* Service list */}
        <ul className="flex flex-col gap-5" role="list">
          {services.map((service) => {
            const colors = SERVICE_COLORS[service.id] ?? { bg: "#f3f4f6", ring: "#e5e7eb" };
            return (
              <li
                key={service.id}
                className="flex items-start gap-5 rounded-2xl bg-white/70 px-5 py-4 shadow-sm backdrop-blur-sm"
              >
                {/* Circular illustrated icon */}
                <div
                  className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full shadow-sm"
                  style={{ background: colors.bg, border: `2px solid ${colors.ring}` }}
                >
                  <ServiceIllustration id={service.id} />
                </div>

                {/* Text */}
                <div className="flex-1 pt-1">
                  <div className="mb-1 flex items-center gap-2">
                    <HeartIcon />
                    <h3 className="font-serif text-lg font-bold text-[#1a3a6b] leading-tight">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default FlyerServicesSection;
