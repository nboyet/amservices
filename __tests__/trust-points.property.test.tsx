// Feature: aide-domicile-vitrine, Property 4: Trust points count is between 3 and 5
import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import * as fc from "fast-check";
import TrustSection from "../app/_components/TrustSection";
import type { TrustPoint } from "../app/_types";

/**
 * Property 4: Trust points count is between 3 and 5
 * Validates: Requirements 6.1
 */
const trustPointArb: fc.Arbitrary<TrustPoint> = fc.record({
  id: fc.string({ minLength: 1 }),
  title: fc.string({ minLength: 1 }),
  description: fc.string({ minLength: 1 }),
  icon: fc.string({ minLength: 1 }),
});

describe("TrustSection — Property 4: Trust points count is between 3 and 5", () => {
  it("renders exactly as many trust point items as the array length (for lengths 3–5)", () => {
    fc.assert(
      fc.property(
        fc.array(trustPointArb, { minLength: 3, maxLength: 5 }),
        (points) => {
          const { container } = render(<TrustSection points={points} />);
          const items = container.querySelectorAll("li");
          expect(items.length).toBe(points.length);
        },
      ),
    );
  });
});
