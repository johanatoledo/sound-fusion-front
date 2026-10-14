import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";


export default function AboutSection() {
  return (
    <section className="sound-section bg-sound-dark-soft">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Content */}
          <div className="max-w-xl">
            <span className="sound-section-label">
              About Sound Fusion Entertainment
            </span>

            <h3 className="sound-section-title">
              Creating Experiences That
              <span className="sound-text-lime">
                {" "}
                People Remember
              </span>
            </h3>

            <p className="sound-section-description text-justify">
              Our owner has over 20 years of experience in the field of Sound Engineering, and has worked in Baltimore City clubs.
              The owner has trained all staff above production standard. All of our staff love working with sound equipment and production lighting, and specialize in knowing how to tune it to create the best listening and lighting experience for our customers.
              Our equipment is of the highest quality and receives regular maintenance. Our lighting is of the newest variety and technology.
            </p>

            <p className="sound-text-muted mt-5 max-w-xl leading-7 text-justify">
             We have receive lots and lots of kudos from previous clients in regards to our customer service. We strive to provide you with a custom entertainment schedule for your event. 
             Each event comes with a complementary sit-down consultation, so that we can be sure you will love our service.
            </p>

            <div className="mt-8">
              <Button
                href="/contact"
                variant="secondary"
              >
                Contact
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