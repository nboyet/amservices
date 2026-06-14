"use client";

import { useEffect } from "react";

/**
 * Injecte une fine barre de progression en haut de page au fil du scroll.
 * Accessible : aria-hidden, pointer-events none, respecte prefers-reduced-motion.
 */
export default function ScrollProgressBar() {
  useEffect(() => {
    const bar = document.getElementById("scroll-progress");
    if (!bar) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const onScroll = () => {
      const scrolled =
        window.scrollY / (document.body.scrollHeight - window.innerHeight);
      bar.style.width = `${Math.min(scrolled * 100, 100)}%`;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      id="scroll-progress"
      role="presentation"
      aria-hidden="true"
    />
  );
}
