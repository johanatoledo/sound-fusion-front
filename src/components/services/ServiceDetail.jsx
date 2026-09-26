import Image from "next/image";
import Link from "next/link";

export default function ServiceDetail({ service }) {
  if (!service) {
    return null;
  }

  return (
    <article className="sound-section sound-bg-black">
      <div className="sound-container">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative min-h-105 overflow-hidden rounded-3xl sm:min-h-135">
            <Image
              src={service.image}
              alt={service.imageAlt || service.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />

            <div className="sound-image-overlay" />
          </div>

          <div>
            <span className="sound-section-label">
              Sound Fusion Services
            </span>

            <h1 className="sound-section-title">
              {service.title}
            </h1>

            <p className="sound-section-description">
              {service.description}
            </p>

            {Array.isArray(service.features) &&
              service.features.length > 0 && (
                <ul className="mt-8 space-y-3">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sound-white"
                    >
                      <span
                        className="mt-2 h-2 w-2 shrink-0 rounded-full bg-sound-lime"
                        aria-hidden="true"
                      />

                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              )}

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/quote"
                className="sound-button-primary"
              >
                Get a Free Quote
              </Link>

              <Link
                href="/services"
                className="sound-button-secondary"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}