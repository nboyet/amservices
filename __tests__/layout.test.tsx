import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { metadata } from "../app/layout";
import RootLayout from "../app/layout";

describe("RootLayout", () => {
  it('renders <html> with lang="fr"', () => {
    // Vitest + jsdom: render the layout with a simple child
    const { container } = render(
      <RootLayout>
        <div />
      </RootLayout>,
    );

    // The rendered output is placed inside jsdom's document body by
    // @testing-library/react, so we look for the html element in the
    // container's ownerDocument rather than in the container itself.
    const html = container.ownerDocument.documentElement;
    expect(html.getAttribute("lang")).toBe("fr");
  });
});

describe("metadata export", () => {
  it("has a non-empty openGraph.title", () => {
    expect(metadata.openGraph?.title).toBeTruthy();
  });

  it("has a non-empty openGraph.description", () => {
    expect(metadata.openGraph?.description).toBeTruthy();
  });

  it("has a non-empty openGraph.type", () => {
    expect(metadata.openGraph?.type).toBeTruthy();
  });

  it("has a non-empty openGraph.url", () => {
    expect(metadata.openGraph?.url).toBeTruthy();
  });

  it("has a non-empty openGraph.locale", () => {
    // locale lives on the website-specific shape; cast to access it
    const og = metadata.openGraph as Record<string, unknown> | undefined;
    expect(og?.locale).toBeTruthy();
  });
});
