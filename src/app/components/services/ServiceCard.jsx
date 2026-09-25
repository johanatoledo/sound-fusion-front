import Image from "next/image";
import Link from "next/link";

export default function ServiceCard({ service }) {
  return (
    <article className="group relative min-h-105 overflow-hidden rounded-3xl bg-sound-dark">
      <Image
        src={service.image}
        alt={service.title}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover transition duration-700 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-lineal-to-t from-black via-black/40 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 z-10 p-6 sm:p-8">
        <h3 className="text-2xl font-bold text-white">
          {service.title}
        </h3>

        <p className="mt-3 max-w-md text-sm leading-6 text-white/70">
          {service.shortDescription}
        </p>

        <Link
          href={`/services/${service.slug}`}
          className="mt-5 inline-flex font-semibold text-sound-lime transition group-hover:translate-x-1"
        >
          Learn More →
        </Link>
      </div>
    </article>
  );
}