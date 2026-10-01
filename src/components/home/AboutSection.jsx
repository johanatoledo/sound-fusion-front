import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function AboutSection() {
  return (
    <section className="sound-section bg-sound-dark-soft">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Content */}
          <div className="max-w-2xl">
            <span className="sound-section-label">
              About Sound Fusion
            </span>

            <h2 className="sound-section-title">
              Creating Experiences That
              <span className="sound-text-lime">
                {" "}
                People Remember
              </span>
            </h2>

            <p className="sound-section-description">
              Sound Fusion Entertainment delivers professional sound, lighting
              and event production solutions designed to transform ordinary
              spaces into unforgettable experiences.
            </p>

            <p className="sound-text-muted mt-5 max-w-xl leading-7">
              From weddings and private celebrations to corporate events, we
              combine professional equipment, creative lighting and reliable
              technical support to make every event look and sound its best.
            </p>

            <div className="mt-8">
              <Button
                href="/about"
                variant="secondary"
              >
                Learn More About Us
              </Button>
            </div>
          </div>

          {/* Animated lighting */}
          <div
            className="sound-light-show"
            aria-hidden="true"
          >
            <div className="sound-light-stage-glow" />

            <span className="sound-beam sound-beam-1" />
            <span className="sound-beam sound-beam-2" />
            <span className="sound-beam sound-beam-3" />
            <span className="sound-beam sound-beam-4" />

            <span className="sound-light-head sound-light-head-1" />
            <span className="sound-light-head sound-light-head-2" />
            <span className="sound-light-head sound-light-head-3" />
            <span className="sound-light-head sound-light-head-4" />

            <div className="sound-light-floor">
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}