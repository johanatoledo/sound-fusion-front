import Link from "next/link";

export default function CTASection() {
  return (
    <section className="sound-section sound-bg-dark-soft">
      <div className="sound-container">
        <div className="sound-card sound-glow relative overflow-hidden px-6 py-16 text-center sm:px-10 lg:px-16 lg:py-20">
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sound-lime/10 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative z-10 mx-auto max-w-3xl">
            <span className="sound-section-label">
              Let's Create Something Amazing
            </span>

            <h2 className="sound-section-title">
              Ready to Make Your Event
              <span className="sound-text-lime">
                {" "}Unforgettable?
              </span>
            </h2>

            <p className="sound-section-description mx-auto">
              Tell us about your event and discover the sound, lighting and
              production solutions that best fit your needs.
            </p>

            <div className="mt-8">
              <Link
                href="/quote"
                className="sound-button-primary"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}