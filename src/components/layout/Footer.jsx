import Image from "next/image";
import Link from "next/link";

import { NAV_LINKS, FOOTER_INFO_LINKS } from "@/data/navigation";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";


export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-sound-black">
      <Container>
        <div className="grid gap-10 py-12 md:grid-cols-2 lg:grid-cols-4 lg:py-16">
          {/* Marca */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              aria-label="Go to Sound Fusion homepage"
              className="inline-flex"
            >
              <Image
                src="/images/logo/logo-sound-fusion-entertainment.webp"
                alt="Sound Fusion Entertainment"
                width={150}
                height={70}
                className="h-auto w-32.5"
              />
            </Link>

            <p className="sound-text-muted mt-5 max-w-md leading-7">
              Professional sound, lighting and event production solutions
              designed to create unforgettable experiences.
            </p>

            <div className="mt-6">
              <Button href="/quote">
                Get a Quote
              </Button>
            </div>
          </div>

          {/* Navegación */}
          <div>
            <h2 className="font-bold text-sound-white">
              Quick Links
            </h2>

            <nav
              className="mt-5 flex flex-col gap-3"
              aria-label="Footer navigation"
            >
              {NAV_LINKS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="sound-nav-link w-fit"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Información */}
          <div>
            <h2 className="font-bold text-sound-white">
              Information
            </h2>

            <nav
              className="mt-5 flex flex-col gap-3"
              aria-label="Legal navigation"
            >
              {FOOTER_INFO_LINKS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="sound-nav-link w-fit"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="sound-divider" />

        <div className="flex flex-col gap-3 py-6 text-sm text-sound-gray sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {currentYear} Sound Fusion Entertainment. All rights reserved.
          </p>

          <p>
            Professional Sound • Lighting • Events
          </p>
        </div>
      </Container>
    </footer>
  );
}