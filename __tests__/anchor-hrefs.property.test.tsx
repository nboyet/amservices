// Feature: aide-domicile-vitrine, Property 8: All anchor CTAs have non-empty href values
import { describe, it, expect } from "vitest";
import * as fc from "fast-check";
import { render, cleanup } from "@testing-library/react";
import HeroSection from "../app/_components/HeroSection";
import ContactSection from "../app/_components/ContactSection";
import Footer from "../app/_components/Footer";
import type { FooterData } from "../app/_types";

/**
 * Property 8: All anchor CTAs have non-empty href values
 * Validates: Requirements 1.3, 1.4, 1.5, 7.2, 7.3, 8.3, 8.4
 *
 * For any arbitrary content data, every <a> element rendered by
 * HeroSection, ContactSection, and Footer must have a non-empty href attribute
 * (not null, not undefined, and not an empty string).
 */
describe("Property 8: All anchor CTAs have non-empty href values", () => {
  it("every <a> element in HeroSection, ContactSection, and Footer has a non-empty href", () => {
    const arbPhone = fc.string({ minLength: 1 });
    const arbEmail = fc.string({ minLength: 1 });
    const arbZone = fc.string({ minLength: 1 });
    const arbLegalUrl = fc.string({ minLength: 1 });
    const arbName = fc.string({ minLength: 1 });
    const arbAvailability = fc.string({ minLength: 1 });
    const arbInvitationText = fc.string({ minLength: 1 });
    const arbZones = fc.array(fc.string({ minLength: 1 }), {
      minLength: 0,
      maxLength: 10,
    });

    fc.assert(
      fc.property(
        arbPhone,
        arbEmail,
        arbZone,
        arbLegalUrl,
        arbName,
        arbAvailability,
        arbInvitationText,
        arbZones,
        (
          phone,
          email,
          zone,
          legalUrl,
          name,
          availability,
          invitationText,
          zones,
        ) => {
          const footerData: FooterData = {
            name,
            phone,
            email,
            legalUrl,
          };

          const { container } = render(
            <div>
              <HeroSection phone={phone} zone={zone} />
              <ContactSection
                phone={phone}
                email={email}
                availability={availability}
                invitationText={invitationText}
              />
              <Footer data={footerData} />
            </div>,
          );

          const anchors = container.querySelectorAll("a");
          cleanup();

          for (const anchor of anchors) {
            const href = anchor.getAttribute("href");
            expect(href).not.toBeNull();
            expect(href).not.toBeUndefined();
            expect(href).not.toBe("");
          }
        },
      ),
    );
  });
});
