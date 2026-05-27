// Feature: aide-domicile-vitrine, Property 5: All image alt attributes are non-empty
import { describe, it } from "vitest";
import * as fc from "fast-check";
import { render, cleanup } from "@testing-library/react";
import PresentationSection from "../app/_components/PresentationSection";
import type { ProviderProfile } from "../app/_types";

/**
 * Property 5: All image alt attributes are non-empty
 * Validates: Requirements 5.2, 5.6, 10.5
 *
 * For any arbitrary ProviderProfile (with or without photoSrc),
 * every <img> rendered by PresentationSection has a non-empty alt attribute.
 */
describe("Property 5: All image alt attributes are non-empty", () => {
  it("PresentationSection — every img has a non-empty alt attribute", () => {
    const providerArb = fc.record<ProviderProfile>({
      name: fc.string({ minLength: 1 }),
      role: fc.string({ minLength: 1 }),
      photoSrc: fc.oneof(fc.constant(null), fc.string({ minLength: 1 })),
      photoWidth: fc.integer({ min: 1, max: 1000 }),
      photoHeight: fc.integer({ min: 1, max: 1000 }),
      experienceText: fc.string({ minLength: 1 }),
      values: fc.array(fc.string({ minLength: 1 }), { minLength: 1 }),
    });

    fc.assert(
      fc.property(providerArb, (provider) => {
        const { container } = render(
          <PresentationSection provider={provider} />,
        );
        const imgs = container.querySelectorAll("img");
        cleanup();

        for (const img of imgs) {
          const alt = img.getAttribute("alt") ?? "";
          if (alt.length === 0) return false;
        }
        return true;
      }),
    );
  });
});
