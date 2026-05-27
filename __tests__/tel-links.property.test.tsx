// Feature: aide-domicile-vitrine, Property 1: Tel links are non-empty
import { describe, it } from "vitest";
import * as fc from "fast-check";
import { render, cleanup } from "@testing-library/react";
import HeroSection from "../app/_components/HeroSection";
import ContactSection from "../app/_components/ContactSection";
import Footer from "../app/_components/Footer";
import type { FooterData } from "../app/_types";

/**
 * Property 1: Tel links are non-empty
 * Validates: Requirements 1.3, 7.2, 8.3
 *
 * For any non-empty phone string, every tel: href rendered by
 * HeroSection, ContactSection, and Footer is a non-empty string
 * that starts with "tel:".
 */
describe("Property 1: Tel links are non-empty", () => {
  it("HeroSection — every tel: href is non-empty and starts with 'tel:'", () => {
    fc.assert(
      fc.property(fc.string({ minLength: 1 }), (phone) => {
        const { container } = render(
          <HeroSection phone={phone} zone="Paris" />,
        );
        const telLinks = container.querySelectorAll('[href^="tel:"]');
        cleanup();

        for (const link of telLinks) {
          const href = link.getAttribute("href") ?? "";
          if (href.length === 0) return false;
          if (!href.startsWith("tel:")) return false;
        }
        return true;
      }),
    );
  });

  it("ContactSection — every tel: href is non-empty and starts with 'tel:'", () => {
    fc.assert(
      fc.property(fc.string({ minLength: 1 }), (phone) => {
        const { container } = render(
          <ContactSection
            phone={phone}
            email="contact@example.com"
            availability="Lun–Ven 9h–18h"
            invitationText="Contactez-nous"
          />,
        );
        const telLinks = container.querySelectorAll('[href^="tel:"]');
        cleanup();

        for (const link of telLinks) {
          const href = link.getAttribute("href") ?? "";
          if (href.length === 0) return false;
          if (!href.startsWith("tel:")) return false;
        }
        return true;
      }),
    );
  });

  it("Footer — every tel: href is non-empty and starts with 'tel:'", () => {
    const baseFooterData: Omit<FooterData, "phone"> = {
      name: "AM Services",
      zones: ["Paris", "Lyon"],
      email: "contact@example.com",
      legalUrl: "/mentions-legales",
    };

    fc.assert(
      fc.property(fc.string({ minLength: 1 }), (phone) => {
        const footerData: FooterData = { ...baseFooterData, phone };
        const { container } = render(<Footer data={footerData} />);
        const telLinks = container.querySelectorAll('[href^="tel:"]');
        cleanup();

        for (const link of telLinks) {
          const href = link.getAttribute("href") ?? "";
          if (href.length === 0) return false;
          if (!href.startsWith("tel:")) return false;
        }
        return true;
      }),
    );
  });
});
