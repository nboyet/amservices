import { CONTENT } from "../_data/content";
import HeroSection from "../_components/HeroSection";
import ServicesSection from "../_components/ServicesSection";
import TarifsSection from "../_components/TarifsSection";
import AudienceSection from "../_components/AudienceSection";
import PresentationSection from "../_components/PresentationSection";
import TrustSection from "../_components/TrustSection";
import ContactSection from "../_components/ContactSection";
import VersionSwitcher from "../_components/VersionSwitcher";

export default function VersionAPage() {
  return (
    <div className="bg-gradient-to-br from-mint/50 via-white to-sky/30">
      <VersionSwitcher />

      <section id="accueil">
        <HeroSection phone={CONTENT.phone} zone={CONTENT.zone} />
      </section>

      {/* Extra top-padding to clear the switcher bar */}
      <div className="pt-12">
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
