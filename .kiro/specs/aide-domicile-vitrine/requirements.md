# Requirements Document

## Introduction

Cette fonctionnalité consiste à créer une page vitrine (landing page) pour une prestataire d'aide à la personne à domicile. La page doit inspirer confiance, présenter les services de façon concrète, préciser la zone d'intervention, et inciter à la prise de contact par téléphone ou email. Elle cible deux audiences : les personnes ayant besoin d'aide au quotidien, et les proches aidants cherchant une solution fiable pour un membre de leur famille.

La page est construite avec Next.js (App Router), Tailwind CSS v4, TypeScript, en suivant les principes clean code (SOLID, composants à responsabilité unique). Le design est mobile-first, sobre et rassurant, avec les couleurs #c9fcd6 (vert menthe) et #9dc5f6 (bleu clair) sur fond blanc.

## Glossary

- **Page** : le composant racine `app/page.tsx` qui orchestre toutes les sections
- **Section** : un composant React autonome représentant un bloc visuel de la page (Hero, Services, etc.)
- **CTA** : Call To Action — bouton ou lien incitant à l'action (appel, devis)
- **Prestataire** : la personne physique proposant les services d'aide à domicile
- **Visiteur** : toute personne consultant la page (personne aidée ou proche aidant)
- **Zone_d_intervention** : les communes et secteurs géographiques couverts par la prestataire
- **Metadata** : les balises `<title>`, `<description>`, Open Graph exportées depuis `layout.tsx` ou `page.tsx` via l'API Next.js `Metadata`

---

## Requirements

### Requirement 1: Section Hero

**User Story:** En tant que visiteur, je veux voir immédiatement le service proposé, la zone couverte et un moyen de contact, afin de savoir en quelques secondes si l'offre correspond à mon besoin.

#### Acceptance Criteria

1. THE Page SHALL afficher un titre principal `<h1>` contenant le texte "Aide à domicile pour les gestes du quotidien"
2. THE Page SHALL afficher un sous-titre mentionnant au minimum le type de service (aide à domicile) et la zone géographique d'intervention
3. THE Page SHALL afficher le numéro de téléphone de la prestataire au-dessus de la ligne de flottaison, sous forme de lien `tel:` cliquable
4. THE Page SHALL afficher un bouton CTA principal libellé "Demander un devis" liant vers la section contact via une ancre `#contact`
5. THE Page SHALL afficher un bouton CTA secondaire libellé "Être rappelé" liant vers la section contact via une ancre `#contact`
6. WHEN le visiteur consulte la page sur un écran de largeur inférieure ou égale à 768px, THE Hero_Section SHALL afficher le numéro de téléphone et les boutons CTA sans défilement horizontal
7. THE Hero_Section SHALL utiliser les couleurs #c9fcd6 et #9dc5f6 comme accents visuels structurels (arrière-plan, bordure ou décoration) sur fond blanc ou très clair

---

### Requirement 2: Section Prestations

**User Story:** En tant que visiteur, je veux voir les services proposés avec des exemples concrets, afin de comprendre rapidement ce que la prestataire peut faire pour moi ou mon proche.

#### Acceptance Criteria

1. THE Page SHALL afficher une section "Prestations" contenant exactement 4 blocs de service
2. THE Services_Section SHALL afficher un bloc "Aide aux courses" décrivant l'accompagnement au magasin, les courses selon les besoins, et le rangement des achats
3. THE Services_Section SHALL afficher un bloc "Aide ménagère" décrivant l'entretien du logement, la vaisselle, la lessive, le repassage et le rangement courant
4. THE Services_Section SHALL afficher un bloc "Aide aux repas" décrivant la préparation des repas, l'aide à la prise des repas et le respect des habitudes alimentaires
5. THE Services_Section SHALL afficher un bloc "Aide pour les actes de la vie quotidienne" décrivant l'accompagnement dans les gestes essentiels (toilette, habillage, déplacements) selon le niveau d'autonomie
6. WHEN le visiteur consulte la page sur un écran de largeur inférieure ou égale à 767px, THE Services_Section SHALL afficher les 4 blocs en colonne unique, chaque bloc occupant toute la largeur disponible sans chevauchement avec un autre bloc
7. WHEN le visiteur consulte la page sur un écran de largeur comprise entre 768px et 1023px, THE Services_Section SHALL afficher les blocs en grille de 2 colonnes
8. WHEN le visiteur consulte la page sur un écran de largeur supérieure ou égale à 1024px, THE Services_Section SHALL afficher les blocs en grille de 4 colonnes

---

### Requirement 3: Section "Pour qui ?"

**User Story:** En tant que proche aidant, je veux savoir si les services s'adressent à la situation de mon proche, afin de décider rapidement si je dois contacter la prestataire.

#### Acceptance Criteria

1. THE Page SHALL afficher une section "Pour qui ?" listant les publics concernés
2. THE Audience_Section SHALL mentionner les personnes âgées comme public cible
3. THE Audience_Section SHALL mentionner les personnes en perte d'autonomie (ponctuelle ou durable) comme public cible
4. THE Audience_Section SHALL mentionner les personnes en situation de handicap comme public cible
5. THE Audience_Section SHALL mentionner les familles ayant besoin d'un relais dans l'organisation du quotidien comme public cible
6. THE Audience_Section SHALL décrire chaque public en termes de situation ou de besoin concret, sans utiliser de qualificatifs négatifs ou stigmatisants (ex. : pas de "dépendant", "invalide", "incapable")
7. THE Audience_Section SHALL afficher une invitation explicite à contacter la prestataire pour les visiteurs dont la situation ne correspond à aucun des publics listés

---

### Requirement 4: Section Zone d'intervention

**User Story:** En tant que visiteur, je veux savoir si la prestataire intervient dans ma commune, afin de ne pas perdre de temps à contacter quelqu'un qui ne couvre pas ma zone.

#### Acceptance Criteria

1. THE Page SHALL afficher une section dédiée à la zone d'intervention avec un titre de section visible
2. THE Zone_Section SHALL lister les villes et communes couvertes sous forme de liste scannable (liste à puces ou tags)
3. THE Zone_Section SHALL mentionner explicitement que les communes environnantes sont également couvertes, en les nommant ou en indiquant le rayon d'intervention
4. IF la zone d'intervention n'est pas encore définie, THEN THE Zone_Section SHALL afficher un texte générique de type "[Ville], [communes voisines] et alentours" en attendant la personnalisation

---

### Requirement 5: Section Présentation de la prestataire

**User Story:** En tant que visiteur, je veux connaître la personne qui interviendra chez moi ou mon proche, afin de me sentir en confiance avant de prendre contact.

#### Acceptance Criteria

1. WHEN la page se charge, THE Presentation_Section SHALL être visible sans interaction de l'utilisateur
2. THE Presentation_Section SHALL afficher une photo de la prestataire avec un attribut `alt` contenant le prénom, le nom et le rôle (ex. : "Marie Dupont, aide à domicile")
3. THE Presentation_Section SHALL afficher le prénom et nom de la prestataire
4. THE Presentation_Section SHALL afficher une description de l'expérience professionnelle mentionnant au minimum le domaine d'activité et le nombre d'années d'expérience
5. THE Presentation_Section SHALL afficher explicitement les trois valeurs suivantes : bienveillance, discrétion, et adaptation au rythme de la personne accompagnée
6. IF aucune photo n'est disponible, THEN THE Presentation_Section SHALL afficher un avatar neutre avec un attribut `alt` contenant le prénom, le nom et le rôle de la prestataire

---

### Requirement 6: Section Confiance et points forts

**User Story:** En tant que visiteur hésitant, je veux voir des éléments rassurants sur le sérieux et la fiabilité de la prestataire, afin de me décider à prendre contact.

#### Acceptance Criteria

1. THE Page SHALL afficher une section listant exactement entre 3 et 5 points forts rassurants, visibles sans interaction de l'utilisateur au chargement de la page
2. THE Trust_Section SHALL inclure un point sur l'accompagnement bienveillant et respectueux
3. THE Trust_Section SHALL inclure un point sur la régularité et la fiabilité des interventions
4. THE Trust_Section SHALL inclure un point sur l'écoute des habitudes de vie et le respect de l'autonomie
5. THE Trust_Section SHALL inclure un point sur la simplicité du contact et la réactivité
6. THE Trust_Section SHALL présenter chaque point avec un marqueur visuel distinct (icône ou puce stylisée) visuellement séparé du texte, rendant chaque élément différenciable des autres
7. THE Trust_Section SHALL afficher pour chaque point un titre court (1 à 7 mots) et un texte descriptif (1 à 3 phrases)

---

### Requirement 7: Section Contact

**User Story:** En tant que visiteur convaincu, je veux trouver facilement le moyen de contacter la prestataire, afin de demander un devis ou un rappel sans effort.

#### Acceptance Criteria

1. THE Page SHALL afficher une section contact identifiée par l'ancre `id="contact"`
2. THE Contact_Section SHALL afficher le numéro de téléphone sous forme de lien `tel:` cliquable dont le libellé visible affiche le numéro réel (ex. : "06 12 34 56 78")
3. THE Contact_Section SHALL afficher l'adresse email sous forme de lien `mailto:` cliquable dont le libellé visible affiche l'adresse email réelle
4. THE Contact_Section SHALL indiquer les jours de disponibilité et une plage horaire (ex. : "du lundi au vendredi, de 8h à 19h")
5. THE Contact_Section SHALL afficher un message d'invitation au contact dont le texte ne contient ni jargon technique ni formule commerciale agressive, et qui mentionne explicitement la possibilité de demander un devis ou un rappel
6. THE Contact_Section SHALL ne PAS inclure de formulaire (le formulaire sera ajouté dans une phase ultérieure nécessitant un backend)
7. WHEN le visiteur clique sur le numéro de téléphone depuis un mobile, THE Contact_Section SHALL déclencher l'application téléphone native via le lien `tel:`

---

### Requirement 8: Pied de page (Footer)

**User Story:** En tant que visiteur, je veux trouver les informations essentielles et les mentions légales en bas de page, afin d'avoir confiance dans le sérieux du site.

#### Acceptance Criteria

1. THE Footer SHALL afficher le nom de la prestataire
2. THE Footer SHALL afficher la zone d'intervention sous forme d'une liste de communes ou départements couverts, limitée à 10 entrées maximum
3. THE Footer SHALL afficher le numéro de téléphone sous forme de lien `tel:` cliquable
4. THE Footer SHALL afficher l'adresse email sous forme de lien `mailto:` cliquable
5. THE Footer SHALL afficher un lien cliquable vers les mentions légales
6. THE Footer SHALL présenter un ratio de contraste d'au moins 4,5:1 entre le texte et son arrière-plan (conformité WCAG AA)
7. THE Footer SHALL être présent sur toutes les pages du site (rendu via le layout racine)

---

### Requirement 9: SEO et métadonnées

**User Story:** En tant que proche aidant cherchant de l'aide en ligne, je veux que la page apparaisse dans les résultats de recherche avec un titre et une description pertinents, afin de trouver rapidement ce service local.

#### Acceptance Criteria

1. THE Page SHALL exporter un objet `metadata` conforme à l'API Next.js `Metadata`
2. THE Metadata SHALL définir un `title` contenant à la fois le type de service (aide à domicile) et la zone géographique d'intervention
3. THE Metadata SHALL définir une `description` comprise entre 50 et 160 caractères décrivant le service et la zone
4. THE Metadata SHALL définir les balises Open Graph `og:title`, `og:description`, `og:type`, `og:url` et `og:locale` pour le partage sur les réseaux sociaux
5. THE Page SHALL utiliser `lang="fr"` sur la balise `<html>`
6. THE Page SHALL utiliser une hiérarchie de titres sémantique avec un `h1` unique, des `h2` pour les sections, et des `h3` uniquement imbriqués sous un `h2` parent

---

### Requirement 10: Design mobile-first et accessibilité

**User Story:** En tant que visiteur consultant la page depuis un smartphone, je veux une expérience fluide et lisible, afin de trouver l'information et contacter la prestataire sans friction.

#### Acceptance Criteria

1. THE Page SHALL être conçue mobile-first avec des breakpoints Tailwind (`sm:`, `md:`, `lg:`) pour les adaptations desktop
2. THE Page SHALL utiliser les couleurs #c9fcd6 (vert menthe) et #9dc5f6 (bleu clair) comme couleurs d'accent définies via `@theme inline` dans `globals.css`
3. THE Page SHALL maintenir un ratio de contraste d'au moins 4,5:1 (WCAG AA) entre le texte et son arrière-plan pour tous les éléments textuels
4. THE Page SHALL utiliser des balises HTML sémantiques (`<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`)
5. WHEN une image est présente, THE Page SHALL fournir un attribut `alt` non vide décrivant le contenu ou la fonction de l'image
6. THE Page SHALL ne pas utiliser de mode sombre (dark mode) — fond blanc uniquement
7. THE Page SHALL utiliser le composant `<Image>` de `next/image` pour toutes les images afin d'optimiser le chargement
8. THE Page SHALL inclure une balise `<meta name="viewport" content="width=device-width, initial-scale=1">` dans le `<head>`
9. THE Page SHALL garantir que toutes les cibles tactiles interactives (boutons, liens) ont une taille minimale de 44×44px

---

### Requirement 11: Architecture et qualité du code

**User Story:** En tant que développeur maintenant ce projet, je veux un code organisé, lisible et conforme aux principes clean code, afin de pouvoir faire évoluer la page facilement.

#### Acceptance Criteria

1. THE Page SHALL être composée de composants React à responsabilité unique — chaque composant représente une section ou une fonctionnalité distincte — chacun dans un fichier dédié sous `app/_components/`
2. THE Page SHALL utiliser uniquement des Server Components sauf si le composant contient des gestionnaires d'événements, des hooks dépendant du navigateur, ou des Web APIs non disponibles côté serveur, auquel cas la directive `'use client'` est requise
3. THE Page SHALL isoler la logique de récupération de données, de transformation et les règles métier dans des fichiers séparés des composants de présentation
4. THE Page SHALL utiliser TypeScript avec des types explicites pour toutes les props de composants, sans recours au type `any` ni à l'inférence implicite de `any`
5. THE Page SHALL suivre les conventions de nommage Next.js App Router (PascalCase pour les composants, kebab-case pour les fichiers de route)
6. THE Page SHALL ne pas introduire de dépendances npm supplémentaires non présentes dans `package.json`
