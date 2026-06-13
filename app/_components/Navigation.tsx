"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  { href: "#services", label: "Services" },
  { href: "#tarifs", label: "Tarifs" },
  { href: "#qui-suis-je", label: "Qui suis-je" },
  { href: "#contact", label: "Contact" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);

    if (element) {
      const offset = 80; // Account for fixed header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center md:justify-center justify-between h-32">
          {/* Logo */}
          <Link
            href="#accueil"
            onClick={(e) => scrollToSection(e, "#accueil")}
            className="flex items-center group mr-4"
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
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className={`px-3 lg:px-4 py-2 rounded-lg text-sm lg:text-base font-medium transition-all duration-300 hover:bg-gradient-to-r hover:from-mint/30 hover:to-sky/30 ${
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
              className="ml-4 px-4 lg:px-6 py-2 lg:py-2.5 bg-gradient-to-r from-emerald-500 to-sky-500 text-white rounded-lg font-medium text-sm lg:text-base transition-all duration-300 hover:shadow-lg hover:scale-105 hover:from-emerald-600 hover:to-sky-600"
            >
              📞 Appelez-moi
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg transition-colors hover:bg-gray-100"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`block h-0.5 w-full bg-gray-900 transition-all duration-300 ${
                  isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-full bg-gray-900 transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-full bg-gray-900 transition-all duration-300 ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 space-y-2 border-t border-gray-200">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="block px-4 py-3 rounded-lg text-base font-medium text-gray-700 transition-all duration-200 hover:bg-gradient-to-r hover:from-mint/30 hover:to-sky/30 hover:text-gray-900"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="tel:0782687954"
              className="block mx-4 mt-4 px-4 py-3 bg-gradient-to-r from-emerald-500 to-sky-500 text-white text-center rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:from-emerald-600 hover:to-sky-600"
            >
              📞 Appelez-moi
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
