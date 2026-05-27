import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import ZoneSection from "../app/_components/ZoneSection";

const surroundingNote =
  "Nous intervenons également dans les communes voisines. N'hésitez pas à nous contacter pour vérifier votre secteur.";

describe("ZoneSection", () => {
  it("renders the surrounding areas note", () => {
    render(
      <ZoneSection
        cities={["Ville", "Commune A"]}
        surroundingNote={surroundingNote}
      />,
    );
    expect(screen.getByText(surroundingNote)).toBeDefined();
  });

  it("renders generic placeholder text when cities is an empty array", () => {
    render(<ZoneSection cities={[]} surroundingNote={surroundingNote} />);
    expect(
      screen.getByText("[Ville], [communes voisines] et alentours"),
    ).toBeDefined();
  });
});
