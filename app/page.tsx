import { CONTENT } from "./_data/content";
import HeroSection from "./_components/HeroSection";
import ServicesSection from "./_components/ServicesSection";
import TarifsSection from "./_components/TarifsSection";
import ServicesPricingSection from "./_components/ServicesPricingSection";
import AudienceSection from "./_components/AudienceSection";
import PresentationSection from "./_components/PresentationSection";
import TrustSection from "./_components/TrustSection";
import ContactSection from "./_components/ContactSection";

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-mint via-white to-sky">
      <section id="accueil">
        <HeroSection phone={CONTENT.phone} zone={CONTENT.zone} />
      </section>

      {/* ─────────────────────────────────────────────────────────────────────
          VERSION A — Composants actuels (ServicesSection + TarifsSection)
          ───────────────────────────────────────────────────────────────── */}
      <div className="relative">
        <div className="sticky top-20 z-40 flex justify-center">
          <span className="rounded-full bg-gray-800/90 px-4 py-1.5 text-xs font-semibold tracking-widest text-white shadow backdrop-blur">
            VERSION A — Actuelle
          </span>
        </div>
        <section id="services">
          <ServicesSection services={CONTENT.services} />
        </section>
        <section id="tarifs">
          <TarifsSection
            tarifs={CONTENT.tarifs}
            travelFees={CONTENT.travelFees}
            paymentMethods={CONTENT.paymentMethods}
          />
        </section>
      </div>

      {/* Separator */}
      <div className="relative my-4 flex items-center gap-4 px-8">
        <div className="h-px flex-1 bg-gray-300" />
        <span className="rounded-full border border-gray-300 bg-white px-4 py-1 text-xs font-medium text-gray-500">
          — ou —
        </span>
        <div className="h-px flex-1 bg-gray-300" />
      </div>

      {/* ─────────────────────────────────────────────────────────────────────
          VERSION B — Nouveau composant ServicesPricingSection
          ───────────────────────────────────────────────────────────────── */}
      <div className="relative">
        <div className="sticky top-20 z-40 flex justify-center">
          <span className="rounded-full bg-gradient-to-r from-emerald-500 to-sky-500 px-4 py-1.5 text-xs font-semibold tracking-widest text-white shadow">
            VERSION B — Nouvelle
          </span>
        </div>
        <section id="services-v2">
          <ServicesPricingSection
            tarifs={CONTENT.tarifs}
            travelFees={CONTENT.travelFees}
            paymentMethods={CONTENT.paymentMethods}
          />
        </section>
      </div>

      <AudienceSection profiles={CONTENT.audienceProfiles} />
      <section id="qui-suis-je">
        <PresentationSection provider={CONTENT.provider} />
        <TrustSection points={CONTENT.trustPoints} />
      </section>
      <section id="contact">
        <ContactSection
          phone={CONTENT.phone}
          email={CONTENT.email}
          availability={CONTENT.contactAvailability}
          invitationText={CONTENT.contactInvitation}
        />
      </section>
    </div>
  );
}
