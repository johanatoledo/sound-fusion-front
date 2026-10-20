import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone, } from "lucide-react";
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube,} from "react-icons/fa6";
import { NAV_LINKS, SERVICE_LINKS, FOOTER_INFO_LINKS, SOCIAL_LINKS, } from "@/data/navigation";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

const SOCIAL_ICONS = {
  instagram: FaInstagram,
  facebook: FaFacebookF,
  tiktok: FaTiktok,
  youtube: FaYoutube,
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-sound-black">
      <Container>
        <div className="grid gap-12 py-12 md:grid-cols-2 lg:grid-cols-5 lg:py-16">
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
              Professional sound, lighting, DJ and event production solutions
              for weddings, private celebrations, corporate events and special
              occasions.
            </p>

            <div className="mt-6">
              <Button href="/contact">
                Get a Free Quote
              </Button>
            </div>

            {/* Redes sociales */}
            <div className="mt-8">
              

              <div className="mt-4 flex flex-wrap gap-3">
                {SOCIAL_LINKS.map((social) => {
                  const Icon = SOCIAL_ICONS[social.platform];

                  return (
                    <a
                      key={social.platform}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit Sound Fusion on ${social.label}`}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-sound-white transition hover:border-sound-lime hover:bg-sound-lime hover:text-sound-black"
                    >
                      {Icon && (
                        <Icon
                          size={18}
                          aria-hidden="true"
                        />
                      )}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Servicios */}
          <div>
            <h2 className="font-bold text-sound-lime">
              Services
            </h2>

            <nav
              className="mt-5 flex flex-col gap-3"
              aria-label="Footer services"
            >
              {SERVICE_LINKS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="sound-nav-link-footer w-fit"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div> 

          {/* Navegación */}
          <div>
            <h2 className="font-bold text-sound-lime">
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
                  className="sound-nav-link-footer w-fit "
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contacto */}
          <div>
            <h2 className="font-bold text-sound-lime">
              Contact
            </h2>

            <div className="mt-5 flex flex-col gap-4">
              <a
                href="tel:+10000000000"
                className="flex items-start gap-3 text-sm text-sound-gray transition hover:text-sound-lime"
              >
                <Phone
                  size={18}
                  className="mt-0.5 shrink-0 text-sound-lime"
                  aria-hidden="true"
                />

                <span  className=" text-sound-white">
                  +1 (000) 000-0000
                </span>
              </a>

              <a
                href="mailto:info@soundfusion.com"
                className="flex items-start gap-3 text-sm text-sound-gray transition hover:text-sound-lime"
              >
                <Mail
                  size={18}
                  className="mt-0.5 shrink-0 text-sound-lime"
                  aria-hidden="true"
                />

                <span  className=" text-sound-white">
                  info@soundfusion.com
                </span>
              </a>

              <div className="flex items-start gap-3 text-sm text-sound-gray">
                <MapPin
                  size={18}
                  className="mt-0.5 shrink-0 text-sound-lime"
                  aria-hidden="true"
                />

                <span>
                  Serving weddings, private parties and corporate events
                </span>
              </div>
            </div>

            {/* Legal */}
            <nav
              className="mt-7 flex flex-col gap-3"
              aria-label="Legal navigation"
            >
              {FOOTER_INFO_LINKS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="sound-footer-link w-fit "
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
            Professional Sound • Lighting • DJ • Event Production
          </p>
        </div>
      </Container>
    </footer>
  );
}