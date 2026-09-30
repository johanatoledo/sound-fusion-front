"use client";

import { useEffect } from "react";
import { X } from "lucide-react";

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
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
      className="fixed inset-0 z-100 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/75 backdrop-blur-sm"
        onClick={onClose}
        aria-label="Close modal"
      />

      <div className="sound-card relative z-10 max-h-[90vh] w-full max-w-2xl overflow-y-auto bg-sound-dark p-6 sm:p-8">
        <div className="flex items-start justify-between gap-5">
          {title && (
            <h2
              id="modal-title"
              className="text-xl font-bold text-sound-white"
            >
              {title}
            </h2>
          )}

          <button
            type="button"
            onClick={onClose}
            className="ml-auto flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 text-sound-white transition hover:border-sound-lime hover:text-sound-lime"
            aria-label="Close modal"
          >
            <X
              size={19}
              aria-hidden="true"
            />
          </button>
        </div>

        <div className="mt-6">
          {children}
        </div>
      </div>
    </div>
  );
}