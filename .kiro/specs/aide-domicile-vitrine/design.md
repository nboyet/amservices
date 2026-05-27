# Design Document — aide-domicile-vitrine

## Overview

This feature delivers a single-page vitrine (showcase landing page) for a home-care service provider. The page is built with Next.js 16 App Router, React 19, Tailwind CSS v4, and TypeScript 5. It targets two audiences: people who need daily assistance and family caregivers looking for a reliable solution for a relative.

The page is entirely static — no server-side data fetching, no client-side interactivity, no forms. Every component is a React Server Component. Content is centralised in a typed data layer so the provider can update text, phone number, zone list, and trust points without touching component code.

**Key design goals:**

- Inspire trust through calm, clean visual design (white background, mint-green and sky-blue accents)
- Make contact information immediately accessible (phone number above the fold)
- Be fully accessible (WCAG AA contrast, semantic HTML, non-empty alt attributes, 44 × 44 px touch targets)
- Be mobile-first and render correctly from 320 px upward

---

## Architecture

### Rendering model

All components are React Server Components (RSC). No `'use client'` directive is needed because the page has no event handlers, no browser-only hooks, and no Web APIs that require the client. This means the entire page is rendered to HTML on the server and sent as a static document — optimal for SEO and Core Web Vitals.

```
app/
├── layout.tsx          ← root layout: <html lang="fr">, metadata, viewport, Footer
├── page.tsx            ← home page: imports and composes all sections
├── globals.css         ← Tailwind v4 import + @theme inline color tokens
├── _components/
│   ├── HeroSection.tsx
│   ├── ServicesSection.tsx
│   ├── ServiceCard.tsx
│   ├── AudienceSection.tsx
│   ├── ZoneSection.tsx
│   ├── PresentationSection.tsx
│   ├── TrustSection.tsx
│   ├── ContactSection.tsx
│   └── Footer.tsx
├── _data/
│   └── content.ts      ← typed content constants (single source of truth)
└── _types/
    └── index.ts        ← shared TypeScript interfaces
```

### Data flow

```
content.ts  ──imports──▶  page.tsx  ──props──▶  Section components
                │
                └──────────────────────────────▶  layout.tsx (Footer)
```

`content.ts` exports a single `CONTENT` constant. `page.tsx` and `layout.tsx` import it and pass the relevant slices as props to each section component. No component reads from `content.ts` directly — this keeps components pure and testable in isolation.

### Tailwind CSS v4 integration

Tailwind v4 uses a CSS-first configuration. The `globals.css` file uses `@import "tailwindcss"` (not the deprecated `@tailwind` directives) and defines custom color tokens inside `@theme inline`:

```css
@import "tailwindcss";

@theme inline {
  --color-mint: #c9fcd6;
  --color-sky: #9dc5f6;
  /* existing tokens preserved */
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
}
```

These tokens are then available as Tailwind utility classes: `bg-mint`, `text-mint`, `border-sky`, etc.

### Metadata and viewport

Next.js 16 separates viewport configuration from metadata. The root `layout.tsx` exports both:

```ts
export const metadata: Metadata = {
  /* title, description, openGraph */
};
export const viewport: Viewport = { width: "device-width", initialScale: 1 };
```

The `<meta name="viewport">` tag is generated automatically from the `viewport` export — it must **not** be added manually to the `<head>`.

---

## Components and Interfaces

### `app/layout.tsx`

Responsibilities:

- Sets `lang="fr"` on `<html>`
- Applies Geist Sans font variable
- Exports `metadata` (title, description, openGraph) and `viewport`
- Renders `<Footer>` inside `<body>` so it appears on every page
- Wraps `{children}` in `<main>`

```tsx
<html lang="fr" className={`${geistSans.variable} antialiased`}>
  <body className="min-h-full flex flex-col bg-white text-gray-900">
    <main className="flex-1">{children}</main>
    <Footer data={CONTENT.footer} />
  </body>
</html>
```

### `app/page.tsx`

Responsibilities:

- Imports `CONTENT` from `_data/content.ts`
- Composes all section components in document order
- Wraps sections in `<header>` (Hero) and `<article>` or bare `<>` for the rest

Section order:

1. `<HeroSection>`
2. `<ServicesSection>`
3. `<AudienceSection>`
4. `<ZoneSection>`
5. `<PresentationSection>`
6. `<TrustSection>`
7. `<ContactSection>`

### `HeroSection`

Props: `{ phone: string; zone: string }`

Renders:

- `<header>` element containing:
  - `<h1>` — "Aide à domicile pour les gestes du quotidien"
  - `<p>` subtitle — service type + zone
  - `<a href="tel:{phone}">` — phone number link (min 44 × 44 px touch target)
  - `<a href="#contact">` — primary CTA "Demander un devis" (styled as button)
  - `<a href="#contact">` — secondary CTA "Être rappelé" (styled as outlined button)
- Background uses `bg-mint` or a mint/sky gradient as structural accent

### `ServicesSection`

Props: `{ services: ServiceItem[] }`

Renders:

- `<section>` with `<h2>` heading "Nos prestations"
- Responsive grid: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6`
- Maps `services` array to `<ServiceCard>` components

### `ServiceCard`

Props: `{ service: ServiceItem }`

Renders:

- `<article>` with icon/emoji, `<h3>` title, `<p>` description
- Card styling: white background, border, rounded corners, subtle shadow
- Accent color on icon area using `bg-mint` or `bg-sky`

### `AudienceSection`

Props: `{ profiles: AudienceProfile[]; fallbackInvitation: string }`

Renders:

- `<section>` with `<h2>` "Pour qui ?"
- Grid or list of 4 audience profile cards, each with `<h3>` and description
- Fallback invitation paragraph at the bottom

### `ZoneSection`

Props: `{ cities: string[]; surroundingNote: string }`

Renders:

- `<section>` with `<h2>` "Zone d'intervention"
- `<ul>` with one `<li>` per city (scannable list)
- `<p>` for the surrounding areas note

### `PresentationSection`

Props: `{ provider: ProviderProfile }`

Renders:

- `<section>` with `<h2>` "Votre prestataire"
- `<Image>` from `next/image` with `alt` containing name + role (or neutral avatar fallback)
- `<h3>` provider name
- `<p>` experience description
- List of 3 values (bienveillance, discrétion, adaptation)

The `<Image>` component uses `width` and `height` props (not `fill`) since the image has a known intrinsic size. The deprecated `priority` prop is replaced by `preload={true}` since this is an above-the-fold image.

### `TrustSection`

Props: `{ points: TrustPoint[] }`

Renders:

- `<section>` with `<h2>` "Pourquoi nous faire confiance ?"
- List of 3–5 trust points, each with:
  - Visual marker (SVG icon or styled bullet using `bg-mint` or `bg-sky`)
  - `<h3>` short title (1–7 words)
  - `<p>` descriptive text (1–3 sentences)

### `ContactSection`

Props: `{ phone: string; email: string; availability: string; invitationText: string }`

Renders:

- `<section id="contact">` with `<h2>` "Nous contacter"
- `<a href="tel:{phone}">` — phone link displaying the real number
- `<a href="mailto:{email}">` — email link displaying the real address
- `<p>` availability hours
- `<p>` invitation text
- **No `<form>` element** — forms are deferred to a future backend phase

### `Footer`

Props: `{ name: string; zones: string[]; phone: string; email: string; legalUrl: string }`

Renders:

- `<footer>` element
- Provider name
- Zone list (max 10 entries) as comma-separated text or compact `<ul>`
- `<a href="tel:{phone}">` phone link
- `<a href="mailto:{email}">` email link
- `<a href="{legalUrl}">` legal mentions link
- Dark background with sufficient contrast (≥ 4.5:1 WCAG AA)

---

## Data Models

### `app/_types/index.ts`

```ts
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
}

export interface FooterData {
  name: string;
  zones: string[]; // max 10 items
  phone: string;
  email: string;
  legalUrl: string;
}

export interface SiteContent {
  phone: string;
  email: string;
  zone: string; // short zone string for Hero subtitle
  services: ServiceItem[]; // exactly 4 items
  audienceProfiles: AudienceProfile[]; // exactly 4 items
  audienceFallback: string;
  zoneCities: string[];
  zoneSurroundingNote: string;
  provider: ProviderProfile;
  trustPoints: TrustPoint[]; // 3–5 items
  contactAvailability: string;
  contactInvitation: string;
  footer: FooterData;
}
```

### `app/_data/content.ts`

```ts
import type { SiteContent } from "../_types";

export const CONTENT: SiteContent = {
  phone: "06 00 00 00 00",
  email: "contact@exemple.fr",
  zone: "Ville et communes voisines",
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
        "Accompagnement dans les gestes essentiels (toilette, habillage, déplacements) selon votre niveau d'autonomie.",
      icon: "🤝",
    },
  ],
  // ... remaining fields populated at personalisation time
};
```

---

## Correctness Properties

_A property is a characteristic or behavior that should hold true across all valid executions of a system — essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees._

### Property 1: Tel links are non-empty

_For any_ non-empty phone number string, every `tel:` link rendered by the page (in HeroSection, ContactSection, and Footer) must have an `href` attribute that equals `"tel:" + phone` and is a non-empty string.

**Validates: Requirements 1.3, 7.2, 8.3**

---

### Property 2: Mailto links are non-empty

_For any_ non-empty email address string, every `mailto:` link rendered by the page (in ContactSection and Footer) must have an `href` attribute that equals `"mailto:" + email` and is a non-empty string.

**Validates: Requirements 7.3, 8.4**

---

### Property 3: Services array has exactly 4 items

_For any_ rendering of ServicesSection, the number of ServiceCard components rendered must equal exactly 4.

**Validates: Requirements 2.1**

---

### Property 4: Trust points count is between 3 and 5

_For any_ trust points array with length in the range [3, 5], TrustSection must render exactly that many trust point items — no more, no fewer.

**Validates: Requirements 6.1**

---

### Property 5: All image alt attributes are non-empty

_For any_ image rendered by the page via `next/image`, the `alt` attribute must be a non-empty string. This applies to the provider photo and any avatar fallback.

**Validates: Requirements 5.2, 5.6, 10.5**

---

### Property 6: ContactSection renders no form element

_For any_ content data passed to ContactSection, the rendered output must contain zero `<form>` elements.

**Validates: Requirements 7.6**

---

### Property 7: Metadata description length is in [50, 160]

_For any_ metadata description string used in the site, its character length must be greater than or equal to 50 and less than or equal to 160.

**Validates: Requirements 9.3**

---

### Property 8: All anchor CTAs have non-empty href values

_For any_ rendering of the page, every interactive anchor element (tel: links, mailto: links, #contact anchor buttons) must have an `href` attribute that is a non-empty string.

**Validates: Requirements 1.3, 1.4, 1.5, 7.2, 7.3, 8.3, 8.4**

> **Property reflection note:** Property 8 subsumes Properties 1 and 2 for the non-emptiness check. Properties 1 and 2 are retained because they additionally verify the correct protocol prefix (`tel:` / `mailto:`), which Property 8 does not assert. Property 8 adds coverage for the `#contact` anchor buttons not covered by Properties 1 and 2.

---

## Error Handling

Since this is a fully static page with no data fetching, runtime errors are limited to:

**Missing or null provider photo:** The `ProviderProfile.photoSrc` field is typed as `string | null`. When `null`, `PresentationSection` renders a neutral avatar `<div>` with an `aria-label` containing the provider's name and role. The `<Image>` component is not rendered in this case, avoiding a broken image.

**Empty zone list:** If `zoneCities` is an empty array, `ZoneSection` renders the generic placeholder text `"[Ville], [communes voisines] et alentours"` as specified in Requirement 4.4.

**Content not yet personalised:** The `content.ts` file ships with placeholder values (phone, email, zone, provider name). These are clearly marked with comments. The page renders correctly with placeholders — no runtime error occurs.

**TypeScript compile-time safety:** All props are strictly typed. Passing wrong types (e.g. a services array with 3 items) will produce a TypeScript error at build time, not a runtime error. The `SiteContent` type documents the expected cardinalities.

---

## Testing Strategy

### Dual testing approach

Unit tests verify specific examples and edge cases. Property-based tests verify universal properties across all valid inputs. Both are complementary.

### Property-based testing

The feature involves typed data transformations (content → rendered HTML), universal invariants (services count, trust points range, link href format, description length), and pure rendering functions — all well-suited for property-based testing.

**Library:** [fast-check](https://fast-check.dev/) for TypeScript/JavaScript. It integrates with Vitest (the standard test runner for Next.js projects without a custom setup).

**Configuration:** Each property test runs a minimum of 100 iterations.

**Tag format:** Each test is tagged with a comment:
`// Feature: aide-domicile-vitrine, Property {N}: {property_text}`

**Property test implementations:**

- **Property 1** — Generate arbitrary non-empty phone strings; render HeroSection, ContactSection, Footer; assert all `tel:` hrefs equal `"tel:" + phone`.
- **Property 2** — Generate arbitrary non-empty email strings; render ContactSection, Footer; assert all `mailto:` hrefs equal `"mailto:" + email`.
- **Property 3** — Generate arbitrary arrays of exactly 4 ServiceItem objects; render ServicesSection; assert exactly 4 ServiceCard elements are present.
- **Property 4** — Generate arbitrary TrustPoint arrays with length in [3, 5]; render TrustSection; assert rendered item count equals array length.
- **Property 5** — Generate arbitrary ProviderProfile objects (with and without photoSrc); render PresentationSection; assert every `<img>` alt is a non-empty string.
- **Property 6** — Generate arbitrary ContactSection props; render ContactSection; assert no `<form>` element is present.
- **Property 7** — Generate arbitrary strings with length in [50, 160]; assert `CONTENT.metadata.description.length` satisfies the constraint (or test the constraint function directly).
- **Property 8** — Generate arbitrary content data; render the full page; assert every `<a>` element has a non-empty `href`.

### Unit tests (example-based)

- HeroSection renders the exact h1 text "Aide à domicile pour les gestes du quotidien"
- HeroSection renders primary CTA with `href="#contact"` and label "Demander un devis"
- HeroSection renders secondary CTA with `href="#contact"` and label "Être rappelé"
- ServicesSection renders all 4 required service titles
- AudienceSection renders all 4 audience profiles and the fallback invitation
- ZoneSection renders the surrounding areas note
- ZoneSection renders generic placeholder when `zoneCities` is empty
- PresentationSection renders provider name, experience text, and all 3 values
- ContactSection renders `id="contact"` on the section element
- ContactSection renders availability text
- Footer renders legal link
- Root layout has `lang="fr"` on `<html>`
- `metadata` export has `openGraph.title`, `openGraph.description`, `openGraph.type`, `openGraph.url`, `openGraph.locale` all as non-empty strings

### Accessibility checks

- Manual audit with a screen reader (VoiceOver / NVDA) for heading hierarchy and link labels
- Automated contrast check with axe-core or Lighthouse (WCAG AA, 4.5:1 minimum)
- Touch target size verified at 44 × 44 px minimum via browser DevTools
