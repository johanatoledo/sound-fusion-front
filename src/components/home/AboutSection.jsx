import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="sound-section bg-sound-white">
      <div className="sound-container">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Imagen */}
          <div className="relative min-h-105 overflow-hidden rounded-3xl sm:min-h-130">
            <Image
              src="/gallery/professional-sound-corporate-event.webp"
              alt="Sound Fusion professional event production team"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />

            <div className="sound-image-overlay" />
          </div>

          {/* Contenido */}
          <div>
            <span className="sound-section-label">
              About Sound Fusion
            </span>

            <h2 className="sound-section-title">
              Creating Experiences That
              <span className="sound-text-lime">
                {" "}People Remember
              </span>
            </h2>

            <p className="sound-section-description">
              Sound Fusion delivers professional sound, lighting and event
              production solutions designed to transform ordinary spaces into
              unforgettable experiences.
            </p>

            <p className="sound-text-muted mt-5 max-w-xl leading-7">
              From weddings and private celebrations to corporate events, we
              combine professional equipment, creative lighting and reliable
              technical support to make every event look and sound its best.
            </p>

            <div className="mt-8">
              <Link
                href="/about"
                className="sound-button-secondary"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}