import QuoteForm from "@/components/quote/QuoteForm";

export const metadata = {
  title: "Get a Free Quote | Sound Fusion",
  description:
    "Request a free quote for professional sound, lighting, DJ and event production services from Sound Fusion.",
};

export default function QuotePage() {
  return (
    <main className="min-h-screen bg-sound-black pt-[var(--navbar-height)]">
      <section className="sound-section">
        <div className="sound-container">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="sound-section-label">
              Get a Free Quote
            </span>

            <h1 className="sound-section-title">
              Tell Us About
              <span className="sound-text-lime">
                {" "}Your Event
              </span>
            </h1>

            <p className="sound-section-description mx-auto">
              Share a few details about your upcoming event and our team will
              help you find the sound, lighting and production services that
              best fit your needs.
            </p>
          </div>

          <QuoteForm />
        </div>
      </section>
    </main>
  );
}