"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation"; // Added this hook
import { MobileMenuOverlay } from "@/components/landing/MobileMenuOverlay";

type NavItem = {
  label: string;
  href: string;
};

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact us", href: "/contact" },
];

export function JamboNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname(); // Get current route

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 w-full bg-[#01382F] backdrop-blur-xl">
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-[linear-gradient(90deg,rgba(4,234,108,0)_0%,rgba(4,234,108,0.95)_18%,rgba(130,251,142,1)_50%,rgba(4,234,108,0.95)_82%,rgba(4,234,108,0)_100%)]" />
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="flex items-center justify-between h-14 sm:h-16">
            {/* Logo */}
            <Link href="/" className="block flex-shrink-0">
              <img 
                src="/creditJambo.png" 
                alt="Credit Jambo" 
                className="object-cover object-center drop-shadow-[0_0_22px_rgba(130,251,142,0.18)]"
                style={{ width: "var(--cj-logo-w)", height: "var(--cj-logo-h)" }}
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 xl:space-x-10">
              {navItems.map((item) => {
                const isActive = pathname === item.href; // Check if active
                
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`transition-colors font-inter ${
                      isActive ? "text-[#82FB8E] font-semibold" : "text-white font-normal"
                    } hover:text-[#82FB8E]`}
                    style={{
                      fontSize: "18px",
                      lineHeight: "28px",
                      letterSpacing: "0em",
                      height: "28px",
                      opacity: 1
                    }}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA Button */}
            <Link
              href="/"
              className="hidden md:inline-flex items-center justify-center px-6 py-2 rounded-full border border-[#04EA6C] bg-[#82FB8E] text-[#01382F] text-sm font-medium hover:bg-[#6CFF7B] transition-colors"
            >
              Get started
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-white focus:outline-none"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>
      
      <div className="h-14 sm:h-16 w-full" aria-hidden="true" />

      {/* Passing pathname to mobile menu overlay so it can also show active state */}
      <MobileMenuOverlay 
        open={mobileMenuOpen} 
        items={navItems} 
        onClose={() => setMobileMenuOpen(false)} 
        currentPath={pathname}
      />
    </>
  );
}
