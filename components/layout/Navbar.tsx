"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { REGISTER_URL } from "@/lib/data";

const navLinks = [
  { label: "How It Works", href: "#blueprint" },
  { label: "Timeline", href: "#timeline" },
  { label: "Past Nights", href: "/saturday-hack-night/archive/" },
  { label: "Campus", href: "/saturday-hack-night/campus/" },
  { label: "Community", href: "#community" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [mobileOpen]);

  return (
    <>
      <nav
        aria-label="Main navigation"
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-md bg-[#090909]/80 border-b border-white/8"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="font-mono text-xl font-bold text-[#00ff87]">
            SHN
            <span className="text-white/30 text-sm font-normal ml-2">
              by TinkerHub
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[#666666] hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-4">
            <a
              href={REGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 bg-[#00ff87] text-black font-bold text-sm px-4 py-2 rounded-lg hover:shadow-[0_0_20px_rgba(0,255,135,0.4)] transition-all duration-300"
            >
              Register Now
            </a>
            <button
              className="md:hidden text-white/60 hover:text-white transition-colors touch-target"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              aria-haspopup="true"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          className="fixed inset-0 z-40 bg-[#090909]/95 backdrop-blur-md md:hidden flex flex-col items-center justify-center gap-8"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-2xl font-semibold text-white hover:text-[#00ff87] transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href={REGISTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 bg-[#00ff87] text-black font-bold text-lg px-8 py-3 rounded-lg"
          >
            Register Now
          </a>
        </div>
      )}
    </>
  );
}
