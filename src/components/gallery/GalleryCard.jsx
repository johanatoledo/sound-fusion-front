import Image from "next/image";

export default function GalleryCard({
  image,
  alt,
  title,
  category,
  className = "",
}) {
  return (
    <article
      className={`sound-card group relative min-h-90 ${className}`}
    >
      <Image
        src={image}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover transition duration-700 group-hover:scale-105"
      />

      <div className="sound-image-overlay" />

      <div className="absolute inset-x-0 bottom-0 z-10 p-6">
        {category && (
          <span className="sound-section-label">
            {category}
          </span>
        )}

        <h3 className="mt-2 text-xl font-bold text-sound-white sm:text-2xl">
          {title}
        </h3>
      </div>
    </article>
  );
}