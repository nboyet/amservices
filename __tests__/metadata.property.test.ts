// Feature: aide-domicile-vitrine, Property 7: Metadata description length is in [50, 160]
import { describe, it, expect } from "vitest";
import * as fc from "fast-check";
import { metadata } from "../app/layout";

/**
 * Property 7: Metadata description length is in [50, 160]
 * Validates: Requirements 9.3
 */
describe("metadata — Property 7: Metadata description length is in [50, 160]", () => {
  const isValidDescriptionLength = (desc: string): boolean =>
    desc.length >= 50 && desc.length <= 160;

  it("constraint function accepts any string with length between 50 and 160", () => {
    fc.assert(
      fc.property(fc.string({ minLength: 50, maxLength: 160 }), (validDesc) => {
        expect(isValidDescriptionLength(validDesc)).toBe(true);
      }),
    );
  });

  it("metadata.description satisfies the [50, 160] length constraint", () => {
    const desc = metadata.description;
    expect(typeof desc).toBe("string");
    expect((desc as string).length).toBeGreaterThanOrEqual(50);
    expect((desc as string).length).toBeLessThanOrEqual(160);
  });
});
