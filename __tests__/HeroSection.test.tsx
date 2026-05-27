import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import HeroSection from "../app/_components/HeroSection";

const defaultProps = {
  phone: "06 00 00 00 00",
  zone: "Paris et alentours",
};

describe("HeroSection", () => {
  it('renders <h1> with exact text "Aide à domicile pour les gestes du quotidien"', () => {
    render(<HeroSection {...defaultProps} />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeDefined();
    expect(heading.textContent).toBe(
      "Aide à domicile pour les gestes du quotidien",
    );
  });

  it('renders primary CTA <a href="#contact"> with label "Demander un devis"', () => {
    render(<HeroSection {...defaultProps} />);
    const link = screen.getByRole("link", { name: "Demander un devis" });
    expect(link).toBeDefined();
    expect(link.getAttribute("href")).toBe("#contact");
  });

  it('renders secondary CTA <a href="#contact"> with label "Être rappelé"', () => {
    render(<HeroSection {...defaultProps} />);
    const link = screen.getByRole("link", { name: "Être rappelé" });
    expect(link).toBeDefined();
    expect(link.getAttribute("href")).toBe("#contact");
  });
});
