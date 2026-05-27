import type { SiteContent } from "../_types";

export const CONTENT: SiteContent = {
  phone: "06 00 00 00 00", // TODO: personalise
  email: "contact@exemple.fr", // TODO: personalise
  zone: "Ville et communes voisines", // TODO: personalise

  services: [
    {
      id: "courses",
      title: "Aide aux courses",
      description:
        "Accompagnement au magasin, courses selon vos besoins et rangement des achats.",
      icon: "🛒",
    },
    {
      id: "menage",
      title: "Aide ménagère",
      description:
        "Entretien du logement, vaisselle, lessive, repassage et rangement courant.",
      icon: "🏠",
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
        "Accompagnement dans les gestes essentiels (toilette, habillage, déplacements) selon le niveau d'autonomie.",
      icon: "🤝",
    },
  ],

  audienceProfiles: [
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
  ],

  audienceFallback:
    "Vous ne vous reconnaissez pas dans ces profils ? Contactez-nous, nous trouverons ensemble la solution adaptée à votre situation.", // TODO: personalise

  zoneCities: ["Ville", "Commune A", "Commune B"], // TODO: personalise

  zoneSurroundingNote:
    "Nous intervenons également dans les communes voisines. N'hésitez pas à nous contacter pour vérifier votre secteur.", // TODO: personalise

  provider: {
    name: "Prénom Nom", // TODO: personalise
    role: "aide à domicile", // TODO: personalise
    photoSrc: null, // TODO: personalise — set to a path like "/photo-prestataire.jpg" once available
    photoWidth: 400,
    photoHeight: 400,
    experienceText:
      "Forte d'une expérience auprès de personnes âgées et en situation de handicap, j'interviens à domicile avec bienveillance et professionnalisme.", // TODO: personalise
    values: [
      "Bienveillance",
      "Discrétion",
      "Adaptation au rythme de la personne accompagnée",
    ],
  },

  trustPoints: [
    {
      id: "bienveillance",
      title: "Bienveillance et respect",
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
        "Nous adaptons notre aide à vos habitudes et veillons à préserver votre autonomie au quotidien.",
      icon: "👂",
    },
    {
      id: "contact",
      title: "Simplicité et réactivité",
      description:
        "Un contact direct, sans intermédiaire. Nous répondons rapidement à vos demandes et questions.",
      icon: "📞",
    },
  ],

  contactAvailability: "Disponible du lundi au vendredi, de 8 h à 18 h.", // TODO: personalise

  contactInvitation:
    "Appelez-nous ou envoyez-nous un e-mail pour échanger sur vos besoins. Nous vous répondons dans les plus brefs délais.", // TODO: personalise

  footer: {
    name: "Prénom Nom — Aide à domicile", // TODO: personalise
    zones: ["Ville", "Commune A", "Commune B"], // TODO: personalise — max 10 items
    phone: "06 00 00 00 00", // TODO: personalise
    email: "contact@exemple.fr", // TODO: personalise
    legalUrl: "/mentions-legales",
  },
};
