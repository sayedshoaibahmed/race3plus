"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/lib/site-config";

export default function Navbar() {
  const pathname   = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  /* Scroll listener */
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  /* Close drawer on outside click */
  useEffect(() => {
    function handleOutsideClick(e: MouseEvent) {
      if (menuOpen && navRef.current && !navRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [menuOpen]);

  /* Close drawer on route change */
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  /* Prevent body scroll when drawer is open on mobile */
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <header
      ref={navRef}
      className={`navbar${scrolled ? " scrolled" : ""}`}
      role="banner"
    >
      {/* Logo */}
      <Link href="/" className="flex items-center shrink-0" aria-label="Race3+ Home">
        <Image
          src="/logo.png"
          alt="Race3+ — Keep Performance Alive"
          width={140}
          height={48}
          priority
          className="h-[32px] md:h-[44px] w-auto"
          style={{ objectFit: "contain" }}
        />
      </Link>

      {/* Desktop nav */}
      <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
        {siteConfig.nav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`nav-link${pathname === item.href ? " active" : ""}`}
          >
            {item.label}
          </Link>
        ))}
        <Link href="/products" className="btn-primary text-sm ml-4">
          Shop Now
        </Link>
      </nav>

      {/* Mobile hamburger */}
      <button
        className="md:hidden flex flex-col gap-[5px] p-2 cursor-pointer"
        style={{ minWidth: "44px", minHeight: "44px", justifyContent: "center", alignItems: "center" }}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        aria-controls="mobile-nav-drawer"
        onClick={() => setMenuOpen((v) => !v)}
      >
        <span
          className="block w-6 h-0.5 bg-white transition-all duration-300"
          style={menuOpen ? { transform: "rotate(45deg) translate(4px,4px)" } : {}}
        />
        <span
          className="block w-6 h-0.5 bg-white transition-all duration-300"
          style={menuOpen ? { opacity: 0 } : {}}
        />
        <span
          className="block w-6 h-0.5 bg-white transition-all duration-300"
          style={menuOpen ? { transform: "rotate(-45deg) translate(4px,-4px)" } : {}}
        />
      </button>

      {/* Mobile drawer */}
      <div
        id="mobile-nav-drawer"
        role="navigation"
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
        className="md:hidden absolute top-[70px] left-0 right-0 flex flex-col gap-0 py-2 transition-all duration-300"
        style={{
          background: "rgba(0,0,0,0.97)",
          borderBottom: "1px solid #1F1F1F",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          pointerEvents: menuOpen ? "auto" : "none",
          opacity: menuOpen ? 1 : 0,
          transform: menuOpen ? "translateY(0)" : "translateY(-8px)",
          visibility: menuOpen ? "visible" : "hidden",
        }}
      >
        {siteConfig.nav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setMenuOpen(false)}
            className={`px-6 py-4 border-b border-[#1F1F1F] transition-colors${
              pathname === item.href ? " text-white" : " text-gray-400 hover:text-white hover:bg-[#111]"
            }`}
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 700,
              fontSize: "0.9rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              minHeight: "52px",
              display: "flex",
              alignItems: "center",
            }}
            aria-current={pathname === item.href ? "page" : undefined}
          >
            {item.label}
          </Link>
        ))}
        <div className="px-6 py-4">
          <Link
            href="/products"
            className="btn-primary w-full"
            style={{ minHeight: "48px" }}
            onClick={() => setMenuOpen(false)}
          >
            Shop Now
          </Link>
        </div>
      </div>
    </header>
  );
}
