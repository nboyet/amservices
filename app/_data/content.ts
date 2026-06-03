import type { SiteContent } from "../_types";

export const CONTENT: SiteContent = {
  phone: "07 82 68 79 54",
  email: "amandine.mace2@gmail.com",
  zone: "Laventie et communes voisines (20km)",

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

  zoneCities: ["Laventie", "Fleurbaix", "Sailly-sur-la-Lys", "La Gorgue"], // TODO: personalise

  zoneSurroundingNote:
    "Nous intervenons également dans les communes voisines. N'hésitez pas à nous contacter pour vérifier votre secteur.", // TODO: personalise

  provider: {
    name: "Amandine Macé", // TODO: personalise
    role: "aide à domicile", // TODO: personalise
    photoSrc: null, // TODO: personalise — set to a path like "/photo-prestataire.jpg" once available
    photoWidth: 400,
    photoHeight: 400,
    experienceText:
      "Forte d'une expérience auprès de personnes âgées et en situation de handicap grâce à mon parcours d'aide soignante, j'interviens à domicile avec bienveillance et professionnalisme.",
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

  prestations: [
    {
      id: "accompagnement-courses",
      title: "Accompagnement aux courses",
      description:
        "Je vous accompagne pour faire vos courses en toute sérénité.",
    },
    {
      id: "entretien-logement",
      title: "Entretien du logement",
      description:
        "Ménage, vaisselle, lessive et rangement adaptés à vos besoins.",
    },
    {
      id: "preparation-repas",
      title: "Préparation des repas",
      description: "Repas équilibrés préparés selon vos goûts et habitudes.",
    },
    {
      id: "aide-toilette",
      title: "Aide à la toilette",
      description:
        "Accompagnement respectueux pour les soins d'hygiène quotidiens.",
    },
    {
      id: "aide-habillage",
      title: "Aide à l'habillage",
      description:
        "Assistance pour vous habiller dans le respect de votre autonomie.",
    },
    {
      id: "accompagnement-sorties",
      title: "Accompagnement sorties",
      description:
        "Sorties médicales, administratives ou de loisirs en toute sécurité.",
    },
  ],

  tarifs: [
    {
      id: "cesu",
      title: "Tarif avec CESU",
      price: "15€/heure",
      description: "Paiement par Chèque Emploi Service Universel",
      highlight: true,
    },
    {
      id: "standard",
      title: "Tarif standard",
      price: "18€/heure",
      description: "Tarif applicable sans CESU, déductible fiscalement à 50%",
      highlight: false,
    },
  ],

  footer: {
    name: "AM Services — Aide à domicile", // TODO: personalise
    zones: ["Laventie", "Fleurbaix", "Sailly-sur-la-Lys", "La Gorgue"], // TODO: personalise — max 10 items
    phone: "07 82 68 79 54",
    email: "amandine.mace2@gmail.com",
    legalUrl: "/mentions-legales",
  },
};
