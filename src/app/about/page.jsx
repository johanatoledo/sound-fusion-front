import { Headphones, Lightbulb, Settings, Users, } from "lucide-react";
import AboutSection from "@/components/home/AboutSection";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export const metadata = {
  title: "About Sound Fusion Entertainment",

  description: "Learn about Sound Fusion Entertainment, our experience in sound engineering, professional event production, lighting technology and personalized entertainment services.",

  alternates: {
     canonical: "/about",
  },

  openGraph: {
    title: "About Sound Fusion Entertainment",

    description: "More than 20 years of experience in sound engineering, entertainment and professional event production.",

    type: "website",
  },
};

const HIGHLIGHTS = [
  {
    id: "experience",
    icon: Headphones,
    title: "20+ Years of Experience",
    description:
      "Our owner brings more than 20 years of experience in sound engineering, including work in Baltimore City clubs.",
  },
  {
    id: "team",
    icon: Users,
    title: "Trained Production Team",
    description:
      "Our staff is trained above production standards and shares a passion for professional sound and event lighting.",
  },
  {
    id: "equipment",
    icon: Settings,
    title: "Professional Equipment",
    description:
      "Our equipment is maintained regularly to help provide reliable sound and production performance for every event.",
  },
  {
    id: "lighting",
    icon: Lightbulb,
    title: "Modern Lighting Technology",
    description:
      "We work with modern lighting equipment and technology designed to enhance the atmosphere of each event.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-sound-black">
      {/* Page Hero */}
      <section className="relative overflow-hidden bg-sound-black pt-(--navbar-height)">
        <Container>
          <div className="flex min-h-[52svh] items-center py-16 lg:py-20">
            <div className="max-w-4xl">
              <span className="sound-section-label">
                About Sound Fusion Entertainment
              </span>

              <h1 className="mt-4 text-4xl font-black leading-tight text-sound-white sm:text-5xl lg:text-6xl">
                Experience Behind Every
                <span className="sound-text-lime">
                  {" "}
                  Sound, Light & Event
                </span>
              </h1>

              <p className="sound-text-muted mt-6 max-w-3xl text-base leading-8 sm:text-lg">
                Sound Fusion Entertainment combines decades of sound
                engineering experience, trained production staff and modern
                equipment to create professional entertainment experiences for
                our clients.
              </p>

              <div className="mt-8">
                <Button href="/contact">
                  Tell Us About Your Event
                </Button>
              </div>
            </div>
          </div>
        </Container>

        <div
          className="pointer-events-none absolute right-0 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-sound-lime/10 blur-3xl"
          aria-hidden="true"
        />
      </section>

      {/* Existing Home About Section */}
      <AboutSection />

      {/* Experience / Highlights */}
      <section className="sound-section bg-sound-black">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span className="sound-section-label">
              Why Sound Fusion
            </span>

            <h2 className="sound-section-title">
              Built on Experience,
              <span className="sound-text-lime">
                {" "}
                Equipment & Service
              </span>
            </h2>

            <p className="sound-section-description mx-auto">
              Every event is supported by experience, technical preparation
              and a team focused on delivering a professional sound and
              lighting experience.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {HIGHLIGHTS.map(({ id, icon: Icon, title, description }) => (
              <article
                key={id}
                className="sound-card p-6 sm:p-7"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sound-lime/10">
                  <Icon
                    size={23}
                    strokeWidth={1.8}
                    className="text-sound-lime"
                    aria-hidden="true"
                  />
                </div>

                <h3 className="mt-6 text-lg font-bold text-sound-white">
                  {title}
                </h3>

                <p className="sound-text-muted mt-3 text-sm leading-6">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Personalized Service */}
      <section className="sound-section bg-sound-dark-soft">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <span className="sound-section-label">
                Personalized Service
              </span>

              <h2 className="sound-section-title">
                Your Event Deserves More Than a
                <span className="sound-text-lime">
                  {" "}
                  Standard Package
                </span>
              </h2>
            </div>

            <div>
              <p className="sound-section-description mt-0">
                Sound Fusion Entertainment works with each client to build a
                custom entertainment schedule around the event.
              </p>

              <p className="sound-text-muted mt-5 leading-7">
                Each event includes a complimentary sit-down consultation so
                our team can understand your expectations, schedule and
                entertainment needs before the event takes place.
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
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="sound-section bg-sound-black">
        <Container>
          <div className="sound-card sound-glow px-6 py-14 text-center sm:px-10 lg:py-16">
            <div className="mx-auto max-w-3xl">
              <span className="sound-section-label">
                Let's Work Together
              </span>

              <h2 className="sound-section-title">
                Ready to Start Planning
                <span className="sound-text-lime">
                  {" "}
                  Your Event?
                </span>
              </h2>

              <p className="sound-section-description mx-auto">
                Tell us about your event, venue and entertainment needs and
                we'll help you determine how Sound Fusion Entertainment can
                support your production.
              </p>

              <div className="mt-8 flex justify-center">
                <Button href="/contact">
                  Tell Us About Your Event
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}