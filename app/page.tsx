import { CONTENT } from "./_data/content";
import HeroSection from "./_components/HeroSection";
import ServicesSection from "./_components/ServicesSection";
import TarifsSection from "./_components/TarifsSection";
import AudienceSection from "./_components/AudienceSection";
import ZoneSection from "./_components/ZoneSection";
import PresentationSection from "./_components/PresentationSection";
import TrustSection from "./_components/TrustSection";
import ContactSection from "./_components/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection phone={CONTENT.phone} zone={CONTENT.zone} />
      <ServicesSection services={CONTENT.services} />
      <TarifsSection
        tarifs={CONTENT.tarifs}
        paymentMethods={CONTENT.paymentMethods}
      />
      <AudienceSection profiles={CONTENT.audienceProfiles} />
      <ZoneSection
        cities={CONTENT.zoneCities}
        surroundingNote={CONTENT.zoneSurroundingNote}
      />
      <PresentationSection provider={CONTENT.provider} />
      <TrustSection points={CONTENT.trustPoints} />
      <ContactSection
        phone={CONTENT.phone}
        email={CONTENT.email}
        availability={CONTENT.contactAvailability}
        invitationText={CONTENT.contactInvitation}
      />
    </>
  );
}
