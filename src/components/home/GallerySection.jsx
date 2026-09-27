import Link from "next/link";
import { galleryItems } from "@/data/gallery";
import GalleryCard from "../gallery/GalleryCard";



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