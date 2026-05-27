import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Footer from "../app/_components/Footer";

const footerData = {
  name: "Prénom Nom — Aide à domicile",
  zones: ["Ville", "Commune A", "Commune B"],
  phone: "06 00 00 00 00",
  email: "contact@exemple.fr",
  legalUrl: "/mentions-legales",
};

describe("Footer", () => {
  it("renders legal link", () => {
    render(<Footer data={footerData} />);
    const legalLink = screen.getByRole("link", { name: /mentions légales/i });
    expect(legalLink).toBeDefined();
    expect(legalLink.getAttribute("href")).toBe("/mentions-legales");
  });
});
