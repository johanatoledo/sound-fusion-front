import Link from "next/link";
import GalleryCard from "../gallery/GalleryCard";

const galleryItems = [
  {
    id: 1,
    title: "Wedding Reception",
    category: "Wedding",
    image: "/gallery/wedding-lighting-personalize.webp",
    alt: "Professional wedding reception lighting by Sound Fusion",
  },
  {
    id: 2,
    title: "Corporate Event",
    category: "Corporate",
    image: "/gallery/Professional-sound-lighting-events.webp",
    alt: "Professional sound and lighting for a corporate event",
  },
  {
    id: 3,
    title: "Dance Floor Experience",
    category: "Lighting",
    image: "/gallery/wedding-lighting-dance-floor1.webp",
    alt: "Colorful professional lighting on an event dance floor",
  },
];

export default function GallerySection() {
  return (
    <section className="sound-section sound-bg-black">
      <div className="sound-container">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end lg:mb-16">
          <div className="max-w-2xl">
            <span className="sound-section-label">
              Our Events
            </span>

            <h2 className="sound-section-title">
              See Sound Fusion
              <span className="sound-text-lime">
                {" "}In Action
              </span>
            </h2>

            <p className="sound-section-description">
              Explore some of the events where sound, lighting and production
              came together to create memorable experiences.
            </p>
          </div>

          <Link
            href="/gallery"
            className="sound-button-secondary shrink-0"
          >
            View Full Gallery
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item) => (
            <GalleryCard
              key={item.id}
              image={item.image}
              alt={item.alt}
              title={item.title}
              category={item.category}
            />
          ))}
        </div>
      </div>
    </section>
  );
}