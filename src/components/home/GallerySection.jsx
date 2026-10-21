import { galleryItems } from "@/data/gallery";
import GalleryCard from "@/components/gallery/GalleryCard";

export default function GallerySection() {
  if (!Array.isArray(galleryItems) || galleryItems.length === 0) {
    return null;
  }

  const carouselItems = [...galleryItems, ...galleryItems];

  return (
    <section className="sound-section sound-bg-b">
      <div className="sound-container">
        <div className="mb-12 max-w-2xl lg:mb-16">
          <span className="sound-section-label">
            Our Events
          </span>

          <h2 className="sound-section-title">
            See Sound Fusion
            <span className="sound-text-lime"> In Action</span>
          </h2>

          <p className="sound-section-description">
            Explore some of the events where sound, lighting and production
            came together to create memorable experiences.
          </p>
        </div>

        <div className="sound-gallery-carousel">
          <div className="sound-gallery-track">
            {carouselItems.map((item, index) => {
              const isDuplicate = index >= galleryItems.length;

              return (
                <div
                  key={`${item.id}-${index}`}
                  className="sound-gallery-slide"
                  aria-hidden={isDuplicate ? "true" : undefined}
                >
                  <GalleryCard
                    image={item.image}
                    alt={isDuplicate ? "" : item.alt}
                    title={item.title}
                    category={item.category}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}