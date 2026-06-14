import { CONTENT } from "../_data/content";
import FlyerHeroSection from "../_components/FlyerHeroSection";
import FlyerServicesSection from "../_components/FlyerServicesSection";
import FlyerFooterBanner from "../_components/FlyerFooterBanner";
import AudienceSection from "../_components/AudienceSection";
import PresentationSection from "../_components/PresentationSection";
import TrustSection from "../_components/TrustSection";
import ContactSection from "../_components/ContactSection";
import VersionSwitcher from "../_components/VersionSwitcher";

// Version C — Style flyer client
// Reproduit fidèlement l'esthétique du flyer :
//   • Dégradé blanc → bleu marine (coin haut-droit) + vert clair (bas)
//   • Typographie serif pour les titres
//   • Illustrations rondes par service
//   • Bandeau sombre « Un service de proximité... »
//   • Bande légale verte en bas

export default function VersionCPage() {
  // Only show the 4 personal services from the flyer (no menagePro)
  const flyerServices = CONTENT.services.filter((s) =>
    ["menage", "courses", "repas", "quotidien"].includes(s.id),
  );

  return (
    <div style={{ background: "linear-gradient(170deg, #ffffff 0%, #e8f5e9 50%, #e0f2fe 100%)" }}>
      <VersionSwitcher />

      {/* Hero */}
      <FlyerHeroSection phone={CONTENT.phone} zone={CONTENT.zone} />

      {/* Services list — flyer style */}
      <FlyerServicesSection services={flyerServices} />

      {/* Flyer-style info banners */}
      <FlyerFooterBanner
        phone={CONTENT.phone}
        siret="984 502 989 00016"
        cesuAccepted
        taxCredit
      />

      {/* Shared lower sections */}
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
