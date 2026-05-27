// Feature: aide-domicile-vitrine, Property 3: Services array has exactly 4 items
import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import * as fc from "fast-check";
import ServicesSection from "../app/_components/ServicesSection";
import type { ServiceItem } from "../app/_types";

/**
 * Property 3: Services array has exactly 4 items
 * Validates: Requirements 2.1
 */
const serviceItemArb: fc.Arbitrary<ServiceItem> = fc.record({
  id: fc.string({ minLength: 1 }),
  title: fc.string({ minLength: 1 }),
  description: fc.string({ minLength: 1 }),
  icon: fc.string({ minLength: 1 }),
});

describe("ServicesSection — Property 3: Services array has exactly 4 items", () => {
  it("renders exactly 4 <article> elements when given an array of 4 ServiceItems", () => {
    fc.assert(
      fc.property(
        fc.array(serviceItemArb, { minLength: 4, maxLength: 4 }),
        (services) => {
          const { container } = render(<ServicesSection services={services} />);
          const articles = container.querySelectorAll("article");
          expect(articles.length).toBe(4);
        },
      ),
    );
  });
});
