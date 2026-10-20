import Image from "next/image";
import { Check, Headphones, } from "lucide-react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function ServiceDetail({ service, }) {
  if (!service) {
    return null;
  }

  const features = Array.isArray(service.features) ? service.features : [];
  const idealFor = Array.isArray(service.idealFor) ? service.idealFor : [];
  const process = Array.isArray(service.process) ? service.process : [];

  const contactHref = service.cta?.href || "/contact";
  const contactLabel = service.cta?.buttonLabel || "Tell Us About Your Event";

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[70svh] overflow-hidden">
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="absolute inset-0 bg-linear-to-r from-black via-black/65 to-black/20" />

        <Container className="relative z-10 flex min-h-[70svh] items-center pt-[var(--navbar-height)]">
          <div className="max-w-3xl py-16">
            <span className="sound-section-label">
              {service.eyebrow}
            </span>

            <h1 className="mt-4 text-4xl font-black leading-tight text-sound-white sm:text-5xl lg:text-6xl">
              {service.headline}
            </h1>

            <p className="sound-text-muted mt-6 max-w-2xl text-base leading-8 sm:text-lg">
              {service.description}
            </p>

            <div className="mt-8">
              <Button href="/contact">
                Tell Us About Your Event
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* WHAT'S INCLUDED */}
      {features.length > 0 && (
        <section className="sound-section bg-sound-dark-soft">
          <Container>
            <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
              <div>
                <span className="sound-section-label">
                  What's Included
                </span>

                <h2 className="sound-section-title">
                  Professional
                  <span className="sound-text-lime">
                    {" "}
                    {service.title}
                  </span>
                </h2>

                <p className="sound-section-description">
                  Every event is different. Our services can be configured
                  around your venue, audience and production requirements.
                </p>
              </div>

              <ul className="grid gap-4 sm:grid-cols-2">
                {features.map((feature) => (
                  <li
                    key={feature}
                    className="sound-card flex items-start gap-4 p-5"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sound-lime/10">
                      <Check
                        size={17}
                        className="text-sound-lime"
                        aria-hidden="true"
                      />
                    </span>

                    <span className="pt-1 text-sm leading-6 text-sound-white">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Container>
        </section>
      )}

      {/* IDEAL FOR */}
      {idealFor.length > 0 && (
        <section className="sound-section bg-sound-black">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <span className="sound-section-label">
                Perfect For
              </span>

              <h2 className="sound-section-title">
                Designed for
                <span className="sound-text-lime">
                  {" "}
                  Every Kind of Event
                </span>
              </h2>
            </div>

            <div className="mt-12 flex flex-wrap justify-center gap-3">
              {idealFor.map((event) => (
                <span
                  key={event}
                  className="rounded-full border border-sound-lime/20 bg-sound-lime/5 px-5 py-3 text-sm font-semibold text-sound-white"
                >
                  {event}
                </span>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* PROCESS */}
      {process.length > 0 && (
        <section className="sound-section bg-sound-dark-soft">
          <Container>
            <div className="mb-12 max-w-2xl">
              <span className="sound-section-label">
                Our Process
              </span>

              <h2 className="sound-section-title">
                From Planning to
                <span className="sound-text-lime">
                  {" "}
                  Event Day
                </span>
              </h2>

              <p className="sound-section-description">
                We coordinate every technical detail so you can focus on
                enjoying your event.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {process.map((step, index) => (
                <article
                  key={step.title}
                  className="sound-card p-6"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-4xl font-black text-sound-lime/20">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <Headphones
                      size={22}
                      className="text-sound-lime"
                      aria-hidden="true"
                    />
                  </div>

                  <h3 className="mt-6 text-lg font-bold text-sound-white">
                    {step.title}
                  </h3>

                  <p className="sound-text-muted mt-3 text-sm leading-6">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* FINAL CTA */}
      <section className="sound-section bg-sound-black">
        <Container>
          <div className="sound-card sound-glow px-6 py-14 text-center sm:px-10 lg:py-16">
            <div className="mx-auto max-w-3xl">
              <span className="sound-section-label">
                Sound Fusion Entertainment
              </span>

              <h2 className="sound-section-title">
                {service.cta?.title || (
                  <>
                    Ready to Plan Your
                    <span className="sound-text-lime">
                      {" "}
                      Event?
                    </span>
                  </>
                )}
              </h2>

              <p className="sound-section-description mx-auto">
                {service.cta?.description ||
                  "Tell us about your event and we'll help you determine the sound, lighting and entertainment setup that best fits your needs."}
              </p>

              <div className="mt-8 flex justify-center">
                <Button href={contactHref}>
                  {contactLabel}
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}