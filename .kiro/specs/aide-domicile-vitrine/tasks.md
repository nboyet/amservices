# Implementation Plan: aide-domicile-vitrine

## Overview

Build a fully static, single-page vitrine for a home-care service provider using Next.js 16 App Router, React 19, Tailwind CSS v4, and TypeScript 5. All components are React Server Components. Content is centralised in a typed data layer. The page is mobile-first, WCAG AA compliant, and SEO-ready.

## Tasks

- [x] 1. Foundation — types, data, and global styles
  - [x] 1.1 Create `app/_types/index.ts` with all shared TypeScript interfaces
    - Define `ServiceItem`, `AudienceProfile`, `TrustPoint`, `ProviderProfile`, `FooterData`, and `SiteContent` interfaces exactly as specified in the design
    - Use strict types; no `any`; export every interface
    - _Requirements: 11.4_

  - [x] 1.2 Create `app/_data/content.ts` with the `CONTENT` constant
    - Import `SiteContent` from `../_types`
    - Populate all fields with placeholder values (phone, email, zone, 4 services, 4 audience profiles, 3–5 trust points, provider, footer)
    - Mark placeholder fields with `// TODO: personalise` comments
    - Ensure `services` has exactly 4 items and `trustPoints` has between 3 and 5 items
    - _Requirements: 2.1–2.5, 3.2–3.5, 6.1–6.4, 11.3_

  - [x] 1.3 Update `app/globals.css` to add mint and sky color tokens
    - Keep the existing `@import "tailwindcss"` directive
    - Add `--color-mint: #c9fcd6` and `--color-sky: #9dc5f6` inside the existing `@theme inline` block
    - Remove the `@media (prefers-color-scheme: dark)` block (no dark mode)
    - _Requirements: 10.2, 10.6_

- [ ] 2. Root layout — `app/layout.tsx`
  - [~] 2.1 Rewrite `app/layout.tsx` with correct metadata, viewport, and Footer wiring
    - Set `lang="fr"` on `<html>`
    - Export `metadata: Metadata` with `title` (service + zone), `description` (50–160 chars), and `openGraph` fields (`title`, `description`, `type`, `url`, `locale`)
    - Export `viewport: Viewport` with `{ width: 'device-width', initialScale: 1 }` — do **not** add a manual `<meta name="viewport">` tag (Next.js generates it automatically from the `viewport` export)
    - Keep only Geist Sans font variable (drop Geist Mono — not used in the design)
    - Wrap `{children}` in `<main className="flex-1">` and render `<Footer data={CONTENT.footer} />` after `<main>` inside `<body>`
    - Import `CONTENT` from `./_data/content`
    - _Requirements: 8.7, 9.1–9.5, 10.8_

- [ ] 3. Leaf components
  - [~] 3.1 Create `app/_components/ServiceCard.tsx`
    - Accept `{ service: ServiceItem }` props
    - Render an `<article>` with icon/emoji area (`bg-mint` or `bg-sky` accent), `<h3>` title, and `<p>` description
    - Card styling: white background, border, rounded corners, subtle shadow
    - No `'use client'` directive
    - _Requirements: 2.1–2.5, 11.1–11.2_

- [ ] 4. Section components
  - [~] 4.1 Create `app/_components/HeroSection.tsx`
    - Accept `{ phone: string; zone: string }` props
    - Render a `<header>` element containing: `<h1>` with exact text "Aide à domicile pour les gestes du quotidien", `<p>` subtitle mentioning service type and zone, `<a href="tel:{phone}">` phone link (min 44×44 px touch target via `min-h-[44px] min-w-[44px]`), `<a href="#contact">` primary CTA "Demander un devis" (styled as button), `<a href="#contact">` secondary CTA "Être rappelé" (styled as outlined button)
    - Use `bg-mint` or a mint/sky gradient as structural accent on white/very-light background
    - Mobile-first layout; no horizontal overflow at ≤768 px
    - _Requirements: 1.1–1.7_

  - [~] 4.2 Create `app/_components/ServicesSection.tsx`
    - Accept `{ services: ServiceItem[] }` props
    - Render a `<section>` with `<h2>` "Nos prestations"
    - Responsive grid: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6`
    - Map `services` to `<ServiceCard>` components
    - _Requirements: 2.1–2.8, 11.1_

  - [~] 4.3 Create `app/_components/AudienceSection.tsx`
    - Accept `{ profiles: AudienceProfile[]; fallbackInvitation: string }` props
    - Render a `<section>` with `<h2>` "Pour qui ?"
    - Render 4 profile cards, each with `<h3>` and description; no stigmatising language
    - Render fallback invitation paragraph at the bottom
    - _Requirements: 3.1–3.7_

  - [~] 4.4 Create `app/_components/ZoneSection.tsx`
    - Accept `{ cities: string[]; surroundingNote: string }` props
    - Render a `<section>` with `<h2>` "Zone d'intervention"
    - Render `<ul>` with one `<li>` per city; if `cities` is empty, render the generic placeholder text "[Ville], [communes voisines] et alentours"
    - Render `<p>` for the surrounding areas note
    - _Requirements: 4.1–4.4_

  - [~] 4.5 Create `app/_components/PresentationSection.tsx`
    - Accept `{ provider: ProviderProfile }` props
    - Render a `<section>` with `<h2>` "Votre prestataire"
    - When `provider.photoSrc` is non-null: render `<Image>` from `next/image` with `width`, `height`, `alt` set to `"{name}, {role}"`, and `preload={true}` (replaces the deprecated `priority` prop — see Next.js 16 Image docs)
    - When `provider.photoSrc` is null: render a neutral avatar `<div>` with `aria-label="{name}, {role}"`
    - Render `<h3>` provider name, `<p>` experience text, and a list of the 3 values
    - _Requirements: 5.1–5.6, 10.5, 10.7_

  - [~] 4.6 Create `app/_components/TrustSection.tsx`
    - Accept `{ points: TrustPoint[] }` props
    - Render a `<section>` with `<h2>` "Pourquoi nous faire confiance ?"
    - Render each trust point with a visual marker (SVG icon or styled bullet using `bg-mint`/`bg-sky`), `<h3>` short title, and `<p>` descriptive text
    - _Requirements: 6.1–6.7_

  - [~] 4.7 Create `app/_components/ContactSection.tsx`
    - Accept `{ phone: string; email: string; availability: string; invitationText: string }` props
    - Render `<section id="contact">` with `<h2>` "Nous contacter"
    - Render `<a href="tel:{phone}">` displaying the real number, `<a href="mailto:{email}">` displaying the real address, `<p>` availability, `<p>` invitation text
    - **No `<form>` element**
    - Ensure touch targets ≥ 44×44 px
    - _Requirements: 7.1–7.7_

  - [~] 4.8 Create `app/_components/Footer.tsx`
    - Accept `{ name: string; zones: string[]; phone: string; email: string; legalUrl: string }` props (i.e. `FooterData`)
    - Render a `<footer>` with provider name, zone list (max 10 entries), `<a href="tel:{phone}">`, `<a href="mailto:{email}">`, `<a href="{legalUrl}">` legal link
    - Dark background with ≥ 4.5:1 contrast ratio (WCAG AA)
    - _Requirements: 8.1–8.7_

- [ ] 5. Page composition — `app/page.tsx`
  - [~] 5.1 Rewrite `app/page.tsx` to compose all sections
    - Import `CONTENT` from `./_data/content`
    - Import all section components from `./_components/`
    - Render sections in order: `<HeroSection>`, `<ServicesSection>`, `<AudienceSection>`, `<ZoneSection>`, `<PresentationSection>`, `<TrustSection>`, `<ContactSection>`
    - Pass the relevant `CONTENT` slice as props to each section
    - Wrap `<HeroSection>` in `<header>`; remaining sections in a React fragment or bare wrapper
    - No `'use client'` directive
    - _Requirements: 1.1–1.7, 9.6, 10.1, 10.4, 11.1–11.6_

- [~] 6. Checkpoint — build verification
  - Run `pnpm build` and confirm zero TypeScript errors and zero Next.js build errors before proceeding to tests. Ask the user if any issues arise.

- [ ] 7. Testing setup and property-based tests
  - [~] 7.1 Install test dependencies and configure Vitest
    - Add to `devDependencies` in `package.json`: `vitest`, `@vitejs/plugin-react`, `jsdom`, `@testing-library/react`, `@testing-library/dom`, `vite-tsconfig-paths`, `fast-check`
    - Create `vitest.config.mts` at project root with `plugins: [tsconfigPaths(), react()]` and `test: { environment: 'jsdom' }`
    - Add `"test": "vitest --run"` script to `package.json`
    - Create `__tests__/` directory at project root
    - _Requirements: 11.6 (no new runtime deps; test deps are devDependencies)_

  - [~] 7.2 Write unit tests for layout and metadata
    - File: `__tests__/layout.test.tsx`
    - Test: root layout renders `<html lang="fr">`
    - Test: `metadata` export has non-empty `openGraph.title`, `openGraph.description`, `openGraph.type`, `openGraph.url`, `openGraph.locale`
    - _Requirements: 9.1–9.5_

  - [~] 7.3 Write property test — Property 7: metadata description length
    - File: `__tests__/metadata.property.test.ts`
    - `// Feature: aide-domicile-vitrine, Property 7: Metadata description length is in [50, 160]`
    - Use `fc.string({ minLength: 50, maxLength: 160 })` to generate valid descriptions; assert `CONTENT`'s actual description satisfies the constraint
    - **Property 7: Metadata description length is in [50, 160]**
    - **Validates: Requirements 9.3**

  - [~] 7.4 Write unit tests for HeroSection
    - File: `__tests__/HeroSection.test.tsx`
    - Test: renders `<h1>` with exact text "Aide à domicile pour les gestes du quotidien"
    - Test: renders primary CTA `<a href="#contact">` with label "Demander un devis"
    - Test: renders secondary CTA `<a href="#contact">` with label "Être rappelé"
    - _Requirements: 1.1, 1.4, 1.5_

  - [~] 7.5 Write property test — Property 1: tel links are non-empty
    - File: `__tests__/tel-links.property.test.tsx`
    - `// Feature: aide-domicile-vitrine, Property 1: Tel links are non-empty`
    - Generate arbitrary non-empty phone strings with `fc.string({ minLength: 1 })`; render HeroSection, ContactSection, Footer; assert every `[href^="tel:"]` equals `"tel:" + phone` and is non-empty
    - **Property 1: Tel links are non-empty**
    - **Validates: Requirements 1.3, 7.2, 8.3**

  - [~] 7.6 Write property test — Property 2: mailto links are non-empty
    - File: `__tests__/mailto-links.property.test.tsx`
    - `// Feature: aide-domicile-vitrine, Property 2: Mailto links are non-empty`
    - Generate arbitrary non-empty email strings; render ContactSection and Footer; assert every `[href^="mailto:"]` equals `"mailto:" + email` and is non-empty
    - **Property 2: Mailto links are non-empty**
    - **Validates: Requirements 7.3, 8.4**

  - [~] 7.7 Write unit tests for ServicesSection
    - File: `__tests__/ServicesSection.test.tsx`
    - Test: renders all 4 required service titles ("Aide aux courses", "Aide ménagère", "Aide aux repas", "Actes de la vie quotidienne")
    - _Requirements: 2.2–2.5_

  - [~] 7.8 Write property test — Property 3: services array has exactly 4 items
    - File: `__tests__/services.property.test.tsx`
    - `// Feature: aide-domicile-vitrine, Property 3: Services array has exactly 4 items`
    - Generate arbitrary arrays of exactly 4 `ServiceItem` objects; render ServicesSection; assert exactly 4 `<article>` elements are present
    - **Property 3: Services array has exactly 4 items**
    - **Validates: Requirements 2.1**

  - [~] 7.9 Write unit tests for AudienceSection
    - File: `__tests__/AudienceSection.test.tsx`
    - Test: renders all 4 audience profiles and the fallback invitation paragraph
    - _Requirements: 3.1–3.7_

  - [~] 7.10 Write unit tests for ZoneSection
    - File: `__tests__/ZoneSection.test.tsx`
    - Test: renders the surrounding areas note
    - Test: renders generic placeholder text when `cities` is an empty array
    - _Requirements: 4.3, 4.4_

  - [~] 7.11 Write unit tests for PresentationSection
    - File: `__tests__/PresentationSection.test.tsx`
    - Test: renders provider name, experience text, and all 3 values
    - _Requirements: 5.3–5.5_

  - [~] 7.12 Write property test — Property 5: all image alt attributes are non-empty
    - File: `__tests__/image-alt.property.test.tsx`
    - `// Feature: aide-domicile-vitrine, Property 5: All image alt attributes are non-empty`
    - Generate arbitrary `ProviderProfile` objects (with and without `photoSrc`); render PresentationSection; assert every `<img>` has a non-empty `alt` attribute
    - **Property 5: All image alt attributes are non-empty**
    - **Validates: Requirements 5.2, 5.6, 10.5**

  - [~] 7.13 Write unit tests for ContactSection
    - File: `__tests__/ContactSection.test.tsx`
    - Test: renders `<section id="contact">`
    - Test: renders availability text
    - _Requirements: 7.1, 7.4_

  - [~] 7.14 Write property test — Property 6: ContactSection renders no form element
    - File: `__tests__/contact-no-form.property.test.tsx`
    - `// Feature: aide-domicile-vitrine, Property 6: ContactSection renders no form element`
    - Generate arbitrary ContactSection props; render ContactSection; assert zero `<form>` elements are present
    - **Property 6: ContactSection renders no form element**
    - **Validates: Requirements 7.6**

  - [~] 7.15 Write property test — Property 4: trust points count is between 3 and 5
    - File: `__tests__/trust-points.property.test.tsx`
    - `// Feature: aide-domicile-vitrine, Property 4: Trust points count is between 3 and 5`
    - Generate arbitrary `TrustPoint` arrays with length in [3, 5] using `fc.array(trustPointArb, { minLength: 3, maxLength: 5 })`; render TrustSection; assert rendered item count equals array length
    - **Property 4: Trust points count is between 3 and 5**
    - **Validates: Requirements 6.1**

  - [~] 7.16 Write unit tests for Footer
    - File: `__tests__/Footer.test.tsx`
    - Test: renders legal link
    - _Requirements: 8.5_

  - [~] 7.17 Write property test — Property 8: all anchor CTAs have non-empty href values
    - File: `__tests__/anchor-hrefs.property.test.tsx`
    - `// Feature: aide-domicile-vitrine, Property 8: All anchor CTAs have non-empty href values`
    - Generate arbitrary content data; render HeroSection, ContactSection, Footer together; assert every `<a>` element has a non-empty `href` attribute
    - **Property 8: All anchor CTAs have non-empty href values**
    - **Validates: Requirements 1.3, 1.4, 1.5, 7.2, 7.3, 8.3, 8.4**

- [~] 8. Final checkpoint — tests and accessibility audit
  - Run `pnpm test` (Vitest `--run`) and confirm all tests pass.
  - Verify heading hierarchy: one `<h1>` in HeroSection, `<h2>` per section, `<h3>` only nested under a `<h2>`.
  - Verify touch targets ≥ 44×44 px for all interactive elements (phone links, CTA buttons, email links).
  - Verify WCAG AA contrast (≥ 4.5:1) for all text elements, especially in the Footer.
  - Ask the user if any issues arise.

## Notes

- Tasks marked with `*` are optional and can be skipped for a faster MVP
- `priority` is **deprecated** in Next.js 16 — use `preload={true}` on the provider `<Image>` instead
- The viewport `<meta>` tag is auto-generated by Next.js from the `viewport` export — do not add it manually
- Vitest does not support `async` Server Components; unit tests render components synchronously (all components here are synchronous RSCs, so this is fine)
- `fast-check` is a devDependency — it does not violate the "no new npm dependencies" rule (Requirement 11.6), which applies to runtime dependencies
- Each property test runs a minimum of 100 iterations (fast-check default)
- All test files live in `__tests__/` at the project root

## Task Dependency Graph

```json
{
  "waves": [
    { "id": 0, "tasks": ["1.1"] },
    { "id": 1, "tasks": ["1.2", "1.3"] },
    { "id": 2, "tasks": ["2.1", "3.1"] },
    {
      "id": 3,
      "tasks": ["4.1", "4.2", "4.3", "4.4", "4.5", "4.6", "4.7", "4.8"]
    },
    { "id": 4, "tasks": ["5.1"] },
    { "id": 5, "tasks": ["7.1"] },
    {
      "id": 6,
      "tasks": ["7.2", "7.4", "7.7", "7.9", "7.10", "7.11", "7.13", "7.16"]
    },
    {
      "id": 7,
      "tasks": ["7.3", "7.5", "7.6", "7.8", "7.12", "7.14", "7.15", "7.17"]
    }
  ]
}
```
