"use client";

import { useEffect, useRef, type ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  /** Animation variant: 'up' (default) | 'left' | 'scale' | 'trust' */
  variant?: "up" | "left" | "scale" | "trust";
  delay?: number;
  as?: keyof JSX.IntrinsicElements;
}

const variantClass: Record<string, string> = {
  up: "reveal",
  left: "reveal-left",
  scale: "reveal-scale",
  trust: "trust-item",
};

export default function ScrollReveal({
  children,
  className = "",
  variant = "up",
  delay = 0,
  as: Tag = "div",
}: ScrollRevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect prefers-reduced-motion: mark visible immediately
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("visible");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const delayClass = delay ? `delay-${delay}` : "";
  const animClass = variantClass[variant] ?? "reveal";

  return (
    // @ts-expect-error dynamic tag
    <Tag
      ref={ref}
      className={`${animClass} ${delayClass} ${className}`.trim()}
    >
      {children}
    </Tag>
  );
}
