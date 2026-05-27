// Feature: aide-domicile-vitrine, Property 6: ContactSection renders no form element
import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import * as fc from "fast-check";
import ContactSection from "../app/_components/ContactSection";

/**
 * Property 6: ContactSection renders no form element
 * Validates: Requirements 7.6
 */
describe("ContactSection — Property 6: ContactSection renders no form element", () => {
  it("never renders a <form> element regardless of props", () => {
    fc.assert(
      fc.property(
        fc.record({
          phone: fc.string(),
          email: fc.string(),
          availability: fc.string(),
          invitationText: fc.string(),
        }),
        (props) => {
          const { container } = render(<ContactSection {...props} />);
          const forms = container.querySelectorAll("form");
          expect(forms.length).toBe(0);
        },
      ),
    );
  });
});
