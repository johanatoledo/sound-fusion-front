import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-sound-black">
      
      {/* Video de fondo */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/hero/professional-sound-event-lighting.webp"
        aria-hidden="true"
      >
        <source
          src="/videos/events/sound-fusion-event-lighting.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Gradiente */}
      <div className="sound-hero-overlay" />

      {/* Contenido */}
      <div className="sound-container relative z-10 pt-24">
        <div className="max-w-3xl">
          
          <span className="sound-badge mb-5">
            Sound • Lighting • Events
          </span>

          <h1 className="sound-hero-title">
            Turn Your Event Into an
            <span className="sound-hero-highlight">
              Unforgettable Experience
            </span>
          </h1>

          <p className="sound-hero-description">
            Professional sound, lighting and entertainment solutions designed
            for weddings, private parties, corporate events and special
            celebrations.
          </p>

          <div className="sound-hero-actions">
            <Link
              href="/quote"
              className="sound-button-primary"
            >
              Get a Free Quote
            </Link>

            <Link
              href="/gallery"
              className="sound-button-secondary"
            >
              View Our Events
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}