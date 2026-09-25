import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-sound-black/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Link href="/" className="shrink-0">
          <Image
            src="/images/logo/sound-fusion-logo.webp"
            alt="Sound Fusion"
            width={150}
            height={70}
            priority
            className="h-auto w-[110px] sm:w-[130px]"
          />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="text-sm font-medium text-sound-white transition hover:text-sound-lime"
          >
            Home
          </Link>

          <Link
            href="/services"
            className="text-sm font-medium text-sound-white transition hover:text-sound-lime"
          >
            Services
          </Link>

          <Link
            href="/gallery"
            className="text-sm font-medium text-sound-white transition hover:text-sound-lime"
          >
            Gallery
          </Link>

          <Link
            href="/about"
            className="text-sm font-medium text-sound-white transition hover:text-sound-lime"
          >
            About
          </Link>

          <Link
            href="/contact"
            className="text-sm font-medium text-sound-white transition hover:text-sound-lime"
          >
            Contact
          </Link>
        </div>

        <Link
          href="/quote"
          className="hidden rounded-full bg-sound-lime px-6 py-3 text-sm font-bold text-black transition hover:scale-[1.03] md:inline-flex"
        >
          Get a Quote
        </Link>
      </nav>
    </header>
  );
}