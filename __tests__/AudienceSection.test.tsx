import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import AudienceSection from "../app/_components/AudienceSection";
import { CONTENT } from "../app/_data/content";

describe("AudienceSection", () => {
  it("renders all 4 audience profile headings", () => {
    const { getByText } = render(
      <AudienceSection
        profiles={CONTENT.audienceProfiles}
        fallbackInvitation={CONTENT.audienceFallback}
      />,
    );

    for (const profile of CONTENT.audienceProfiles) {
      expect(getByText(profile.title)).toBeTruthy();
    }
  });

  it("renders all 4 audience profile descriptions", () => {
    const { getByText } = render(
      <AudienceSection
        profiles={CONTENT.audienceProfiles}
        fallbackInvitation={CONTENT.audienceFallback}
      />,
    );

    for (const profile of CONTENT.audienceProfiles) {
      expect(getByText(profile.description)).toBeTruthy();
    }
  });

  it("renders the fallback invitation paragraph", () => {
    const { getByText } = render(
      <AudienceSection
        profiles={CONTENT.audienceProfiles}
        fallbackInvitation={CONTENT.audienceFallback}
      />,
    );

    expect(getByText(CONTENT.audienceFallback)).toBeTruthy();
  });

  it("renders exactly 4 profile cards", () => {
    const { container } = render(
      <AudienceSection
        profiles={CONTENT.audienceProfiles}
        fallbackInvitation={CONTENT.audienceFallback}
      />,
    );

    // Each profile is wrapped in a <div> containing an <h3>
    const headings = container.querySelectorAll("h3");
    expect(headings).toHaveLength(4);
  });
});
