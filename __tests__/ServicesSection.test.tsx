import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import ServicesSection from "../app/_components/ServicesSection";
import { CONTENT } from "../app/_data/content";

describe("ServicesSection", () => {
  it("renders all 4 required service titles", () => {
    render(<ServicesSection services={CONTENT.services} />);

    expect(
      screen.getByRole("heading", { name: "Aide aux courses", level: 3 }),
    ).toBeDefined();
    expect(
      screen.getByRole("heading", { name: "Aide ménagère", level: 3 }),
    ).toBeDefined();
    expect(
      screen.getByRole("heading", { name: "Aide aux repas", level: 3 }),
    ).toBeDefined();
    expect(
      screen.getByRole("heading", {
        name: "Actes de la vie quotidienne",
        level: 3,
      }),
    ).toBeDefined();
  });
});
