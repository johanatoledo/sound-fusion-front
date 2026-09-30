"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";

import { NAV_LINKS } from "@/data/navigation";

import MobileMenu from "@/components/layout/MobileMenu";
import Container from "@/components/ui/Container";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const abrirMenu = () => {
    setIsMenuOpen(true);
    setShowNavbar(true);
  };

  const cerrarMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      /*
       * Si el menú móvil está abierto,
       * mantenemos siempre visible el navbar.
       */
      if (isMenuOpen) {
        setShowNavbar(true);
        setLastScrollY(currentScrollY);
        return;
      }

      /*
       * Si baja y ya pasó los primeros 50px,
       * ocultamos el navbar.
       */
      if (
        currentScrollY > lastScrollY &&
        currentScrollY > 50
      ) {
        setShowNavbar(false);
      } else {
        /*
         * Si sube o está cerca del inicio,
         * mostramos nuevamente el navbar.
         */
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      }
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, [lastScrollY, isMenuOpen]);

  return (
    <>
      <header
        className={`sound-navbar z-10 w-full transition-transform duration-250 ease-in-out
          ${
            showNavbar
              ? "translate-y-0"
              : "-translate-y-full"
          }
        `}
      >
        <Container className="sound-navbar-container">
          <Link
            href="/"
            className="shrink-0"
            aria-label="Go to Sound Fusion homepage"
          >
            <Image
              src="/images/logo/logo-sound-fusion-entertainment.webp"
              alt="Sound Fusion Entertainment"
              width={50}
              height={50}
              priority
              className="sound-navbar-logo"
            />
          </Link>

          <nav
            className="sound-navbar-menu"
            aria-label="Main navigation"
          >
            {NAV_LINKS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="sound-nav-link font-bold"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            onClick={abrirMenu}
            aria-label="Open navigation menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-sound-black text-sound-black transition hover:border-sound-lime hover:text-sound-lime md:hidden"
          >
            <Menu
              size={21}
              aria-hidden="true"
            />
          </button>
        </Container>
      </header>

      <MobileMenu
        isOpen={isMenuOpen}
        onClose={cerrarMenu}
      />
    </>
  );
}