"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";

import { NAV_LINKS } from "@/data/navigation";

import MobileMenu from "@/components/layout/MobileMenu";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

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
        <Container className="sound-navbar-container">
          <Link
            href="/"
            className="shrink-0"
            aria-label="Go to Sound Fusion homepage"
          >
            <Image
              src="/images/logo/logoSoundFusion.webp"
              alt="Sound Fusion Entertainment"
              width={150}
              height={70}
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
                className="sound-nav-link"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Button
            href="/quote"
            className="sound-navbar-cta"
          >
            Get a Quote
          </Button>

          <button
            type="button"
            onClick={abrirMenu}
            aria-label="Open navigation menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-sound-white transition hover:border-sound-lime hover:text-sound-lime md:hidden"
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