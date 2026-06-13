"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "#services", label: "Services" },
  { href: "#tarifs", label: "Tarifs" },
  { href: "#qui-suis-je", label: "Qui suis-je" },
  { href: "#contact", label: "Contact" },
];

export default function Navigation() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    // On sub-pages, let the <Link href="/#section"> do a full navigation
    if (!isHomePage) {
      setIsMobileMenuOpen(false);
      return;
    }

    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);

    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }

    setIsMobileMenuOpen(false);
  };

  // On the homepage, keep hash-only hrefs for smooth scroll.
  // On other pages, prepend "/" so Next.js navigates back to homepage + hash.
  const getNavHref = (hash: string) => (isHomePage ? hash : `/${hash}`);
  const logoHref = isHomePage ? "#accueil" : "/#accueil";

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 shadow-lg backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-32 items-center justify-between md:justify-center">
          {/* Logo */}
          <Link
            href={logoHref}
            onClick={(e) =>
              scrollToSection(e as React.MouseEvent<HTMLAnchorElement>, "#accueil")
            }
            className="group mr-4 flex items-center"
          >
            <Image
              src="/amServices.png"
              alt="AM Services"
              width={120}
              height={120}
              className="h-32 w-auto transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-1 md:flex lg:space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={getNavHref(item.href)}
                onClick={(e) => scrollToSection(e, item.href)}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-all duration-300 hover:bg-gradient-to-r hover:from-mint/30 hover:to-sky/30 lg:px-4 lg:text-base ${
                  isScrolled
                    ? "text-gray-700 hover:text-gray-900"
                    : "text-gray-900"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="tel:0782687954"
              className="ml-4 rounded-lg bg-gradient-to-r from-emerald-500 to-sky-500 px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:scale-105 hover:from-emerald-600 hover:to-sky-600 hover:shadow-lg lg:px-6 lg:py-2.5 lg:text-base"
            >
              📞 Appelez-moi
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="rounded-lg p-2 transition-colors hover:bg-gray-100 md:hidden"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <div className="flex h-5 w-6 flex-col justify-between">
              <span
                className={`block h-0.5 w-full bg-gray-900 transition-all duration-300 ${
                  isMobileMenuOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-full bg-gray-900 transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-full bg-gray-900 transition-all duration-300 ${
                  isMobileMenuOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`overflow-hidden bg-white transition-all duration-300 ease-in-out md:hidden ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="space-y-2 border-t border-gray-200 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={getNavHref(item.href)}
                onClick={(e) => scrollToSection(e, item.href)}
                className="block rounded-lg px-4 py-3 text-base font-medium text-gray-700 transition-all duration-200 hover:bg-gradient-to-r hover:from-mint/30 hover:to-sky/30 hover:text-gray-900"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="tel:0782687954"
              className="mx-4 mt-4 block rounded-lg bg-gradient-to-r from-emerald-500 to-sky-500 px-4 py-3 text-center font-medium text-white transition-all duration-300 hover:from-emerald-600 hover:to-sky-600 hover:shadow-lg"
            >
              📞 Appelez-moi
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
