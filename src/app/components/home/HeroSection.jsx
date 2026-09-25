import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-black">
      <Image
        src="/images/hero/hero-event.webp"
        alt="Professional event lighting and sound by Sound Fusion"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Gradiente */}
      <div className="absolute inset-0 bg-lineal-to-r from-black via-black/70 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pt-24 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="mb-5 inline-flex rounded-full border border-sound-lime/40 bg-sound-lime/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-sound-lime">
            Sound • Lighting • Events
          </span>

          <h1 className="text-4xl font-black leading-[1.05] text-sound-white sm:text-5xl md:text-6xl lg:text-7xl">
            Turn Your Event Into an
            <span className="block text-sound-lime">
              Unforgettable Experience
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-white/75 sm:text-lg">
            Professional sound, lighting and entertainment solutions designed
            for weddings, private parties, corporate events and special
            celebrations.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center rounded-full bg-sound-lime px-7 py-4 text-sm font-bold text-black transition duration-300 hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(170,227,0,0.35)]"
            >
              Get a Free Quote
            </Link>

            <Link
              href="/gallery"
              className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/5 px-7 py-4 text-sm font-semibold text-sound-white backdrop-blur-sm transition hover:border-sound-white"
            >
              View Our Events
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}