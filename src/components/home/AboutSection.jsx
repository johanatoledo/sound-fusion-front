import Image from "next/image";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function AboutSection() {
  return (
    <section className="sound-section bg-sound-dark">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Content */}
          <div className="max-w-xl">
            <span className="sound-section-label">
              About Sound Fusion Entertainment
            </span>

            <h2 className="sound-section-title">
              Creating Experiences That
              <span className="sound-text-lime">
                {" "}
                People Remember
              </span>
            </h2>

            <p className="sound-section-description text-justify">
              Our owner has over 20 years of experience in the field of Sound
              Engineering and has worked in Baltimore City clubs. The owner has
              trained all staff above production standards. Our team loves
              working with sound equipment and production lighting and
              specializes in creating the best listening and lighting
              experience possible for our customers. Our equipment receives
              regular maintenance, and our lighting systems use modern
              technology.
            </p>

            <p className="sound-text-muted mt-5 max-w-xl text-justify leading-7">
              Sound Fusion Entertainment is also present on The Knot, where
              couples can discover our wedding entertainment services and see
              our work, reviews and recognition. Our presence on the platform
              reflects the trust clients have placed in us for wedding sound,
              DJ entertainment and event lighting.
            </p>

            <p className="sound-text-muted mt-5 max-w-xl text-justify leading-7">
              We have received many compliments from previous clients regarding
              our customer service. We strive to provide a custom entertainment
              schedule for every event. Each event includes a complimentary
              sit-down consultation so we can better understand your needs and
              help create an experience you will enjoy.
            </p>

            <div className="mt-8">
              <Button
                href="/contact"
                variant="secondary"
              >
                Tell Us About Your Event
              </Button>
            </div>
          </div>

          {/* The Knot recognition */}
          <div className="relative mx-auto w-full max-w-2xl">
            {/* Decorative background */}
            <div
              className="absolute -inset-2 translate-x-3 translate-y-3 border border-sound-lime/30 sm:-inset-3 sm:translate-x-4 sm:translate-y-4"
              style={{
                clipPath:
                  "polygon(0 0, 92% 0, 100% 10%, 100% 100%, 8% 100%, 0 90%)",
              }}
              aria-hidden="true"
            />

            {/* Image */}
            <div
              className="relative aspect-[4/3] w-full overflow-hidden bg-sound-black"
              style={{
                clipPath:
                  "polygon(0 0, 92% 0, 100% 10%, 100% 100%, 8% 100%, 0 90%)",
              }}
            >
              <Image
                src="/images/reconocimiento-de-bodas-sound-fusion.png"
                alt="Sound Fusion Entertainment profile and wedding recognition on The Knot"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 50vw"
                className="object-contain"
              />

              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-sound-black/10"
                aria-hidden="true"
              />
            </div>

            {/* Recognition information */}
            <div className="relative z-10 mt-6 flex items-center gap-4 sm:mt-7">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-sound-lime/40" />

              <div className="shrink-0 border border-sound-lime/30 bg-sound-black px-5 py-3 text-center shadow-xl">
                <span className="block text-[10px] font-semibold uppercase tracking-[0.24em] text-sound-lime">
                  Featured On
                </span>

                <span className="mt-1 block text-sm font-semibold text-sound-white">
                  The Knot
                </span>
              </div>

              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-sound-lime/40" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}