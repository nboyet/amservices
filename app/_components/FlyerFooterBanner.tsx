import type { FC } from "react";

interface FlyerFooterBannerProps {
  phone: string;
  siret?: string;
  cesuAccepted?: boolean;
  taxCredit?: boolean;
}

const FlyerFooterBanner: FC<FlyerFooterBannerProps> = ({
  phone,
  siret = "984 502 989 00016",
  cesuAccepted = true,
  taxCredit = true,
}) => {
  return (
    <>
      {/* Middle info row */}
      <div
        className="px-4 py-6 sm:px-6"
        style={{ background: "linear-gradient(160deg, #e8f5e9 0%, #e0f2fe 100%)" }}
      >
        <div className="mx-auto flex max-w-xl flex-col items-center gap-4 sm:flex-row sm:justify-between">
          {/* CESU */}
          {cesuAccepted && (
            <div className="rounded-2xl border-2 border-[#1a3a6b]/30 bg-white/80 px-5 py-3 text-center text-sm italic text-[#1a3a6b]">
              Si je n&apos;ai pas le courage —
              <br />
              <span className="font-semibold not-italic">Contact CESU accepté</span>
            </div>
          )}

          {/* Tax credit badge */}
          {taxCredit && (
            <div className="flex items-center gap-2 rounded-2xl bg-[#1a3a6b] px-5 py-3 text-white shadow-md">
              <div className="text-center">
                <p className="text-xs font-semibold uppercase tracking-wide opacity-80">
                  Services à la personne
                </p>
                <p className="mt-0.5 text-xl font-extrabold">50%</p>
                <p className="text-[10px] opacity-70">crédit d&apos;impôt</p>
              </div>
            </div>
          )}

          {/* Contact */}
          <div className="text-center">
            <p className="text-sm font-semibold text-gray-700">MACZ Amandine</p>
            <a
              href={`tel:${phone.replace(/\s/g, "")}`}
              className="mt-1 inline-flex min-h-[44px] items-center gap-2 text-xl font-bold text-[#1a3a6b] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1a3a6b]"
            >
              📞 {phone}
            </a>
          </div>
        </div>
      </div>

      {/* Bottom dark banner */}
      <div className="bg-[#1a3a6b] px-4 py-5 text-center text-white">
        <p className="text-sm font-semibold uppercase tracking-wider">
          Un service de proximité, humain et adapté à vos besoins.
        </p>
        <div className="mt-1 flex flex-wrap items-center justify-center gap-2 text-xs text-[#c8e6c9]">
          <span>Disponibilité</span>
          <span aria-hidden="true">•</span>
          <span>Écoute</span>
          <span aria-hidden="true">•</span>
          <span>Discrétion</span>
          <span aria-hidden="true">•</span>
          <span>Confiance</span>
        </div>
      </div>

      {/* Legal bottom strip */}
      <div className="bg-[#e8f5e9] px-4 py-3 text-center text-xs text-gray-500">
        <span className="mr-1">🌿</span>
        Professionnelle déclarée en micro-entreprise — SIRET : {siret}{" "}
        · Selon la législation en vigueur.
      </div>
    </>
  );
};

export default FlyerFooterBanner;
