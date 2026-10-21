import Image from "next/image";
import Link from "next/link";

export default function ServiceCard({ service }) {
  return (
    <article className="sound-card sound-service-card group h-full">
      <Image
        src={service.image}
        alt={service.imageAlt || service.title}
        fill
        sizes="(max-width: 767px) 82vw, (max-width: 1024px) 50vw, 40vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />

      <div
        className="sound-image-overlay"
        aria-hidden="true"
      />

      <div className="sound-service-card-content">
        <h3 className="sound-service-card-title">
          {service.title}
        </h3>

        <p className="sound-service-card-description">
          {service.shortDescription}
        </p>

        <Link
          href={`/services/${service.slug}`}
          className="sound-service-card-link"
          aria-label={`Learn more about ${service.title}`}
        >
          Learn More
          <span aria-hidden="true"> →</span>
        </Link>
      </div>
    </article>
  );
}