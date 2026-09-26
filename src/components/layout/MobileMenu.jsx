"use client";

import Link from "next/link";
import { X } from "lucide-react";

export default function MobileMenu({
  isOpen,
  onClose,
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] md:hidden">
      {/* Fondo */}
      <button
        type="button"
        aria-label="Close mobile menu"
        onClick={onClose}
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
      />

      {/* Panel */}
      <div className="absolute right-0 top-0 flex h-full w-[85%] max-w-sm flex-col border-l border-white/10 bg-sound-black px-6 py-6 shadow-2xl">
        {/* Encabezado */}
        <div className="flex items-center justify-between">
          <span className="text-sm font-bold uppercase tracking-[0.18em] text-sound-lime">
            Menu
          </span>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-sound-white transition hover:border-sound-lime hover:text-sound-lime"
          >
            <X size={20} />
          </button>
        </div>

        {/* Navegación */}
        <nav className="mt-10 flex flex-col gap-2">
          <Link
            href="/"
            onClick={onClose}
            className="sound-mobile-link"
          >
            Home
          </Link>

          <Link
            href="/services"
            onClick={onClose}
            className="sound-mobile-link"
          >
            Services
          </Link>

          <Link
            href="/gallery"
            onClick={onClose}
            className="sound-mobile-link"
          >
            Gallery
          </Link>

          <Link
            href="/about"
            onClick={onClose}
            className="sound-mobile-link"
          >
            About
          </Link>

          <Link
            href="/contact"
            onClick={onClose}
            className="sound-mobile-link"
          >
            Contact
          </Link>
        </nav>

        {/* CTA */}
        <div className="mt-auto pt-8">
          <Link
            href="/quote"
            onClick={onClose}
            className="sound-button-primary w-full"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </div>
  );
}