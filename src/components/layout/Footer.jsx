import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-sound-black">
      <div className="sound-container">
        <div className="grid gap-10 py-12 md:grid-cols-2 lg:grid-cols-4 lg:py-16">
          {/* Marca */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              aria-label="Sound Fusion home"
            >
              <Image
                src="/images/logo/logoSoundFusion.webp"
                alt="Sound Fusion"
                width={150}
                height={70}
                className="h-auto w-32.5"
              />
            </Link>

            <p className="sound-text-muted mt-5 max-w-md leading-7">
              Professional sound, lighting and event production solutions
              designed to create unforgettable experiences.
            </p>
          </div>

          {/* Navegación */}
          <div>
            <h3 className="font-bold text-sound-white">
              Quick Links
            </h3>

            <nav className="mt-5 flex flex-col gap-3">
              <Link href="/" className="sound-nav-link w-fit">
                Home
              </Link>

              <Link href="/services" className="sound-nav-link w-fit">
                Services
              </Link>

              <Link href="/gallery" className="sound-nav-link w-fit">
                Gallery
              </Link>

              <Link href="/about" className="sound-nav-link w-fit">
                About
              </Link>

              <Link href="/contact" className="sound-nav-link w-fit">
                Contact
              </Link>
            </nav>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold text-sound-white">
              Information
            </h3>

            <nav className="mt-5 flex flex-col gap-3">
              <Link
                href="/quote"
                className="sound-nav-link w-fit"
              >
                Get a Quote
              </Link>

              <Link
                href="/privacy-policy"
                className="sound-nav-link w-fit"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms"
                className="sound-nav-link w-fit"
              >
                Terms
              </Link>
            </nav>
          </div>
        </div>

        <div className="sound-divider" />

        <div className="flex flex-col gap-3 py-6 text-sm text-sound-gray sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {currentYear} Sound Fusion. All rights reserved.
          </p>

          <p>
            Professional Sound • Lighting • Events
          </p>
        </div>
      </div>
    </footer>
  );
}