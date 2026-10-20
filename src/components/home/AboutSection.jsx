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

            <p className="sound-text-muted mt-5 max-w-xl leading-7 text-justify">
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
                Contact Sound Fusion
              </Button>
            </div>
          </div>

          {/* The Knot recognition */}
          <div className="relative min-h-[360px] overflow-hidden rounded-3xl border border-white/10 bg-sound-black sm:min-h-[420px]">
            <Image
              src="/images/reconocimiento-de-bodas-sound-fusion.png"
              alt="Sound Fusion Entertainment recognition on The Knot"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain p-8 sm:p-10"
            />

            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-br from-sound-lime/5 via-transparent to-transparent"
              aria-hidden="true"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}