import Image from "next/image";
import Link from "next/link";

export default function ServiceCard({ service }) {
  return (
    <article className="sound-card sound-service-card group">
      <Image
        src={service.image}
        alt={service.title}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover transition duration-700 group-hover:scale-105"
      />

      <div className="sound-image-overlay" />

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
        >
          Learn More →
        </Link>
      </div>
    </article>
  );
}