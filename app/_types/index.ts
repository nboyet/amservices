export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string; // emoji or SVG path identifier
}

export interface AudienceProfile {
  id: string;
  title: string;
  description: string; // no stigmatising language
}

export interface TrustPoint {
  id: string;
  title: string; // 1–7 words
  description: string; // 1–3 sentences
  icon: string; // emoji or SVG path identifier
}

export interface ProviderProfile {
  name: string;
  role: string; // e.g. "aide à domicile"
  photoSrc: string | null; // null triggers avatar fallback
  photoWidth: number;
  photoHeight: number;
  experienceText: string;
  values: string[]; // exactly 3 items
  likes: string[]; // ce que j'aime
}

export interface TarifItem {
  id: string;
  title: string;
  price: string;
  description: string;
  taxCredit: boolean;
}

export interface FooterData {
  name: string;
  phone: string;
  email: string;
  legalUrl: string;
}

export interface TravelFees {
  freeRadius: string; // e.g. "10km autour de Laventie"
  feePerKm: string; // e.g. "0,25€"
}

export interface SiteContent {
  phone: string;
  email: string;
  zone: string; // short zone string for Hero subtitle
  services: ServiceItem[]; // exactly 4 items
  audienceProfiles: AudienceProfile[]; // exactly 4 items
  zoneSurroundingNote: string;
  provider: ProviderProfile;
  trustPoints: TrustPoint[]; // 3–5 items
  tarifs: TarifItem[];
  travelFees: TravelFees;
  paymentMethods: string[];
  contactAvailability: string;
  contactInvitation: string;
  footer: FooterData;
}
