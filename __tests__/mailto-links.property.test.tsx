// Feature: aide-domicile-vitrine, Property 2: Mailto links are non-empty
import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import * as fc from "fast-check";
import ContactSection from "../app/_components/ContactSection";
import Footer from "../app/_components/Footer";
import type { FooterData } from "../app/_types";

/**
 * Property 2: Mailto links are non-empty
 * Validates: Requirements 7.3, 8.4
 *
 * For any non-empty email string, every mailto link rendered by
 * ContactSection and Footer must equal "mailto:" + email and must be non-empty.
 */
describe("Property 2: Mailto links are non-empty", () => {
  it("ContactSection — every mailto href equals 'mailto:' + email and is non-empty", () => {
    fc.assert(
      fc.property(fc.string({ minLength: 1 }), (email) => {
        const { container } = render(
          <ContactSection
            phone="01 23 45 67 89"
            email={email}
            availability="Disponible du lundi au vendredi"
            invitationText="Contactez-nous"
          />,
        );

        const links = container.querySelectorAll('[href^="mailto:"]');
        expect(links.length).toBeGreaterThan(0);

        links.forEach((link) => {
          const href = link.getAttribute("href") ?? "";
          expect(href).toBe(`mailto:${email}`);
          expect(href.length).toBeGreaterThan(0);
        });
      }),
    );
  });

  it("Footer — every mailto href equals 'mailto:' + email and is non-empty", () => {
    fc.assert(
      fc.property(fc.string({ minLength: 1 }), (email) => {
        const footerData: FooterData = {
          name: "AM Services",
          zones: ["Paris"],
          phone: "01 23 45 67 89",
          email,
          legalUrl: "/mentions-legales",
        };

        const { container } = render(<Footer data={footerData} />);

        const links = container.querySelectorAll('[href^="mailto:"]');
        expect(links.length).toBeGreaterThan(0);

        links.forEach((link) => {
          const href = link.getAttribute("href") ?? "";
          expect(href).toBe(`mailto:${email}`);
          expect(href.length).toBeGreaterThan(0);
        });
      }),
    );
  });
});
