import type { SiteContent } from "../_types";

export const CONTENT: SiteContent = {
  phone: "07 82 68 79 54",
  email: "amandine.mace2@gmail.com",
  zone: "Laventie et communes voisines",

  services: [
    {
      id: "menage",
      title: "Aide ménagère",
      description:
        "Entretien des sols, cuisine, salle de bain, chambre, vitres, mobilier.",
      icon: "🏠",
    },
    {
      id: "courses",
      title: "Aide aux courses",
      description:
        "Accompagnement au magasin, courses selon vos besoins et rangement des achats.",
      icon: "🛒",
    },
    {
      id: "repas",
      title: "Aide aux repas",
      description:
        "Préparation des repas, aide à la prise des repas et respect des habitudes alimentaires.",
      icon: "🍽️",
    },
    {
      id: "quotidien",
      title: "Actes de la vie quotidienne",
      description:
        "Accompagnement dans les gestes essentiels (toilette partielle, habillage, déplacements) selon le niveau d'autonomie.",
      icon: "🤝",
    },
    {
      id: "menagePro",
      title: "Ménage (Professionnels)",
      description:
        "Ménage de fin de location, fin de chantier, entretien de bureaux, commerces et locaux professionnels.",
      icon: "💼",
    },
  ],

  audienceProfiles: [
    {
      id: "all",
      title: "Tous publics", // TODO: personalise
      description:
        "Un accompagnement personnalisé pour répondre aux besoins du quotidien.",
    },
    {
      id: "personnes-agees",
      title: "Personnes âgées", // TODO: personalise
      description:
        "Un accompagnement bienveillant pour maintenir l'autonomie et le confort à domicile au quotidien.",
    },
    {
      id: "perte-autonomie",
      title: "Personnes en perte d'autonomie", // TODO: personalise
      description:
        "Une aide adaptée pour les gestes du quotidien, dans le respect du rythme et des habitudes de chacun.",
    },
    {
      id: "handicap",
      title: "Personnes en situation de handicap", // TODO: personalise
      description:
        "Un soutien sur mesure pour faciliter la vie à domicile et favoriser l'inclusion au quotidien.",
    },
    {
      id: "familles",
      title: "Familles ayant besoin d'un relais", // TODO: personalise
      description:
        "Un appui fiable pour les proches aidants qui souhaitent souffler tout en assurant un suivi de qualité.",
    },
    {
      id: "professionnels",
      title: "Professionnels et entreprises",
      description:
        "Des prestations de nettoyage adaptées aux bureaux, commerces, locaux professionnels, fins de chantier et remises en état.",
    },
  ],

  zoneSurroundingNote:
    "Les interventions peuvent également se dérouler dans les communes voisines. N'hésitez pas à me contacter pour vérifier votre secteur.", // TODO: personalise

  provider: {
    name: "Amandine Macé", // TODO: personalise
    role: "aide à domicile", // TODO: personalise
    photoSrc: "/amandine.jpg", // TODO: personalise — set to a path like "/photo-prestataire.jpg" once available
    photoWidth: 400,
    photoHeight: 400,
    experienceText:
      "Forte de 7 années d'expérience hospitalière, j'ai accompagné chaque jour des personnes âgées et des nouveau-nés, développant une expertise fondée sur l'écoute, la confiance et l'attention portée à chacun.",
    values: [
      "Dynamique",
      "Bienveillante",
      "Discrète",
      "Efficace",
      "Respectueuse",
      "Soigneuse",
    ],
    likes: [
      "Le social",
      "La propreté (un tantinet maniaque)",
      "Le rangement",
      "Apporter mon aide",
      "Le bien-être",
    ],
  },

  trustPoints: [
    {
      id: "bienveillance",
      title: "Bienveillance et discrétion",
      description:
        "Chaque intervention est réalisée dans le respect de la personne, de son espace et de ses habitudes.",
      icon: "💚",
    },
    {
      id: "regularite",
      title: "Régularité et fiabilité",
      description:
        "Vous pouvez compter sur une présence ponctuelle et constante, semaine après semaine.",
      icon: "📅",
    },
    {
      id: "ecoute",
      title: "Écoute et autonomie",
      description:
        "J'adapte mon aide à vos habitudes et je veille à préserver votre autonomie au quotidien.",
      icon: "👂",
    },
    {
      id: "respect",
      title: "Respectueuse et soigneuse",
      description:
        "Intervention discrète et professionnelle, dans le respect de votre intimité et de votre domicile.",
      icon: "🏠",
    },
    {
      id: "contact",
      title: "Dynamisme et réactivité",
      description:
        "Un contact direct, sans intermédiaire. Je réponds rapidement à vos demandes et questions.",
      icon: "📞",
    },
  ],

  contactAvailability: "Disponible du lundi au vendredi, de 8 h à 18 h.", // TODO: personalise

  contactInvitation:
    "Appelez-moi ou envoyez-moi un e-mail pour échanger sur vos besoins. Je vous répondrai dans les plus brefs délais.", // TODO: personalise

  tarifs: [
    {
      id: "aide-menagere",
      title: "Aide ménagère",
      price: "15€/h ",
      description: "Entretien du logement",
      taxCredit: true,
    },
    {
      id: "menage-pro",
      title: "Ménage professionnel",
      price: "25€/h",
      description: "Nettoyage approfondi et entretien professionnel",
      taxCredit: false,
    },
    {
      id: "actes-quotidiens",
      title: "Aide actes quotidiens",
      price: "20€/h",
      description: "Toilette partielle, habillage, déplacements",
      taxCredit: false,
    },
    {
      id: "aide-courses",
      title: "Aide aux courses",
      price: "12€/h",
      description: "Accompagnement et réalisation des courses",
      taxCredit: false,
    },
    {
      id: "aide-repas",
      title: "Aide aux repas",
      price: "12€/h",
      description: "Préparation et aide à la prise des repas",
      taxCredit: false,
    },
    {
      id: "forfait-2h",
      title: "Forfait hebdomadaire 2h",
      price: "28€",
      description: "A valoir sur l'aide ménagère",
      taxCredit: true,
    },
    {
      id: "forfait-4h",
      title: "Forfait hebdomadaire 4h",
      price: "55€",
      description: "A valoir sur l'aide ménagère",
      taxCredit: true,
    },
  ],

  travelFees: {
    freeRadius: "10km autour de Laventie",
    feePerKm: "0,25€",
  },

  paymentMethods: [
    "CESU (Chèque Emploi Service Universel)",
    "Virement bancaire",
    "Espèces",
  ],

  footer: {
    name: "AM Services — Aide à domicile", // TODO: personalise // TODO: personalise — max 10 items
    phone: "07 82 68 79 54",
    email: "amandine.mace2@gmail.com",
    legalUrl: "/mentions-legales",
  },
};
