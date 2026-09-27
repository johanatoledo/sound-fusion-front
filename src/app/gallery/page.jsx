import GalleryGrid from "@/components/gallery/GalleryGrid";
import VideoGallery from "@/components/gallery/VideoGallery";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

import {
  galleryItems,
  galleryVideos,
} from "@/data/gallery";

export const metadata = {
  title: "Event Gallery | Sound Fusion Entertainment",

  description:
    "Explore Sound Fusion Entertainment events featuring professional sound, lighting, DJ services and event production.",

  alternates: {
    canonical: "/gallery",
  },

  openGraph: {
    title: "Event Gallery | Sound Fusion Entertainment",

    description:
      "Explore professional sound, lighting and event production by Sound Fusion Entertainment.",

    type: "website",

    images: [
      {
        url: "/gallery/wedding-lighting-dance-florr.webp",
        width: 1200,
        height: 630,
        alt: "Professional event lighting by Sound Fusion Entertainment",
      },
    ],
  },
};

export default function GalleryPage() {
  const hasImages =
    Array.isArray(galleryItems) &&
    galleryItems.length > 0;

  const hasVideos =
    Array.isArray(galleryVideos) &&
    galleryVideos.length > 0;

  return (
    <main className="min-h-screen bg-sound-black pt-(--navbar-height)">
      {/* Header */}
      <section className="sound-section">
        <Container>
          <SectionTitle
            label="Our Gallery"
            title="See Sound Fusion in Action"
            description="Explore weddings, private celebrations, corporate events and productions where professional sound and lighting came together to create unforgettable experiences."
            centered
          />
        </Container>
      </section>

      {/* Photos */}
      {hasImages && (
        <section
          className="pb-20 lg:pb-28"
          aria-labelledby="gallery-photos-title"
        >
          <Container>
            <div className="mb-10">
              <span className="sound-section-label">
                Event Photography
              </span>

              <h2
                id="gallery-photos-title"
                className="mt-3 text-2xl font-bold text-sound-white sm:text-3xl"
              >
                Moments From Our Events
              </h2>
            </div>

            <GalleryGrid items={galleryItems} />
          </Container>
        </section>
      )}

      {/* Videos */}
      {hasVideos && (
        <section
          className="sound-section sound-bg-dark"
          aria-labelledby="gallery-videos-title"
        >
          <Container>
            <div className="mb-10 max-w-2xl">
              <span className="sound-section-label">
                Event Videos
              </span>

              <h2
                id="gallery-videos-title"
                className="mt-3 text-2xl font-bold text-sound-white sm:text-3xl"
              >
                Experience the Atmosphere
              </h2>

              <p className="sound-text-muted mt-4 leading-7">
                Watch Sound Fusion Entertainment bring events to life through
                professional lighting, sound and production.
              </p>
            </div>

            <VideoGallery videos={galleryVideos} />
          </Container>
        </section>
      )}

      {/* Empty state */}
      {!hasImages && !hasVideos && (
        <section className="pb-20 lg:pb-28">
          <Container>
            <div className="sound-card mx-auto max-w-2xl p-8 text-center">
              <h2 className="text-xl font-bold text-sound-white">
                Gallery Coming Soon
              </h2>

              <p className="sound-text-muted mt-3 leading-7">
                We're currently preparing photos and videos from our latest
                events.
              </p>
            </div>
          </Container>
        </section>
      )}
    </main>
  );
}