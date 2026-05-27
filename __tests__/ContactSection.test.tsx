import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import ContactSection from "../app/_components/ContactSection";
import { CONTENT } from "../app/_data/content";

const defaultProps = {
  phone: CONTENT.phone,
  email: CONTENT.email,
  availability: CONTENT.contactAvailability,
  invitationText: CONTENT.contactInvitation,
};

describe("ContactSection", () => {
  it('renders <section id="contact">', () => {
    const { container } = render(<ContactSection {...defaultProps} />);
    const section = container.querySelector("section#contact");
    expect(section).toBeDefined();
    expect(section).not.toBeNull();
  });

  it("renders availability text", () => {
    render(<ContactSection {...defaultProps} />);
    const availability = screen.getByText(CONTENT.contactAvailability);
    expect(availability).toBeDefined();
  });
});
