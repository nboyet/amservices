import { CONTENT } from "./_data/content";
import HeroSectionC from "./_components/HeroSectionC";
import ServicesPricingSection from "./_components/ServicesPricingSection";
import AudienceSection from "./_components/AudienceSection";
import PresentationSection from "./_components/PresentationSection";
import TrustSection from "./_components/TrustSection";
import ContactSection from "./_components/ContactSection";

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-mint/50 via-white to-sky/30">
      <section id="accueil">
        <HeroSectionC phone={CONTENT.phone} zone={CONTENT.zone} />
      </section>

      <section id="services">
        <ServicesPricingSection
          services={CONTENT.services}
          tarifs={CONTENT.tarifs}
          travelFees={CONTENT.travelFees}
          paymentMethods={CONTENT.paymentMethods}
        />
      </section>

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
