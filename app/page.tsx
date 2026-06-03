import { CONTENT } from "./_data/content";
import HeroSection from "./_components/HeroSection";
import ServicesSection from "./_components/ServicesSection";
import TarifsSection from "./_components/TarifsSection";
import AudienceSection from "./_components/AudienceSection";
import PresentationSection from "./_components/PresentationSection";
import TrustSection from "./_components/TrustSection";
import ContactSection from "./_components/ContactSection";

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-mint/50 via-white to-sky/30">
      <HeroSection phone={CONTENT.phone} zone={CONTENT.zone} />
      <ServicesSection services={CONTENT.services} />
      <TarifsSection
        tarifs={CONTENT.tarifs}
        travelFees={CONTENT.travelFees}
        paymentMethods={CONTENT.paymentMethods}
      />
      <AudienceSection profiles={CONTENT.audienceProfiles} />
      <PresentationSection provider={CONTENT.provider} />
      <TrustSection points={CONTENT.trustPoints} />
      <ContactSection
        phone={CONTENT.phone}
        email={CONTENT.email}
        availability={CONTENT.contactAvailability}
        invitationText={CONTENT.contactInvitation}
      />
    </div>
  );
}
