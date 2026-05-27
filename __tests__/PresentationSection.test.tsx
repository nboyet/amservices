import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import PresentationSection from "../app/_components/PresentationSection";
import type { ProviderProfile } from "../app/_types";

const defaultProvider: ProviderProfile = {
  name: "Prénom Nom",
  role: "aide à domicile",
  photoSrc: null,
  photoWidth: 400,
  photoHeight: 400,
  experienceText:
    "Forte d'une expérience auprès de personnes âgées et en situation de handicap, j'interviens à domicile avec bienveillance et professionnalisme.",
  values: [
    "Bienveillance",
    "Discrétion",
    "Adaptation au rythme de la personne accompagnée",
  ],
};

describe("PresentationSection", () => {
  it("renders the provider name", () => {
    render(<PresentationSection provider={defaultProvider} />);
    const heading = screen.getByRole("heading", { level: 3 });
    expect(heading).toBeDefined();
    expect(heading.textContent).toBe(defaultProvider.name);
  });

  it("renders the experience text", () => {
    render(<PresentationSection provider={defaultProvider} />);
    const paragraph = screen.getByText(defaultProvider.experienceText);
    expect(paragraph).toBeDefined();
  });

  it("renders all 3 values", () => {
    render(<PresentationSection provider={defaultProvider} />);
    for (const value of defaultProvider.values) {
      expect(screen.getByText(value)).toBeDefined();
    }
  });
});
