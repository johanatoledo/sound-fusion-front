"use client";

import { useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";

import { NAV_LINKS } from "@/data/navigation";


export default function MobileMenu({
  isOpen,
  onClose,
}) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      document.body.style.overflow =
        previousOverflow;

      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      id="mobile-navigation"
      className="fixed inset-0 z-60 md:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
    >
      {/* Overlay */}
      <button
        type="button"
        aria-label="Close mobile menu"
        onClick={onClose}
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
      />

      {/* Panel */}
      <aside className="absolute right-0 top-0 flex h-full w-[85%] max-w-sm flex-col border-l  text-sound-lime  bg-sound-black/70 px-6 py-6 shadow-2xl">
        {/* Header */}
        <div className="flex items-end justify-between">
        

          <button
            type="button"
            onClick={onClose}
            aria-label="Close navigation menu"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-sound-lime text-sound-lime transition hover:bg-sound-lime hover:text-sound-black"
          >
            <X
              size={20}
              aria-hidden="true"
            />
          </button>
        </div>

        {/* Navigation */}
        <nav
          className="mt-5 flex flex-col gap-2"
          aria-label="Mobile navigation"
        >
          {NAV_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="sound-mobile-link"
            >
              {item.label}
            </Link>
          ))}
        </nav>

       
      </aside>
    </div>
  );
}