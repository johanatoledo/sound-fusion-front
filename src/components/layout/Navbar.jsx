"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";

import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const abrirMenu = () => {
    setIsMenuOpen(true);
  };

  const cerrarMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="sound-navbar fixed left-0 top-0 z-50 w-full">
        <nav className="sound-container sound-navbar-container">
          <Link
            href="/"
            className="shrink-0"
            aria-label="Sound Fusion home"
          >
            <Image
              src="/images/logo/logoSoundFusion.webp"
              alt="Sound Fusion"
              width={150}
              height={70}
              priority
              className="sound-navbar-logo"
            />
          </Link>

          <div className="sound-navbar-menu">
            <Link
              href="/"
              className="sound-nav-link"
            >
              Home
            </Link>

            <Link
              href="/services"
              className="sound-nav-link"
            >
              Services
            </Link>

            <Link
              href="/gallery"
              className="sound-nav-link"
            >
              Gallery
            </Link>

            <Link
              href="/about"
              className="sound-nav-link"
            >
              About
            </Link>

            <Link
              href="/contact"
              className="sound-nav-link"
            >
              Contact
            </Link>
          </div>

          <Link
            href="/quote"
            className="sound-button-primary sound-navbar-cta"
          >
            Get a Quote
          </Link>

          {/* Botón móvil */}
          <button
            type="button"
            onClick={abrirMenu}
            aria-label="Open menu"
            aria-expanded={isMenuOpen}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-sound-white transition hover:border-sound-lime hover:text-sound-lime md:hidden"
          >
            <Menu size={21} />
          </button>
        </nav>
      </header>

      <MobileMenu
        isOpen={isMenuOpen}
        onClose={cerrarMenu}
      />
    </>
  );
}