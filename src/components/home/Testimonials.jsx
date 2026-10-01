import { Quote, Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section className="sound-section sound-bg-b">
      <div className="sound-container">
        <div className="mb-12 max-w-2xl lg:mb-16">
          <span className="sound-section-label">
            Testimonials
          </span>

          <h2 className="sound-section-title">
            What Our Clients
            <span className="sound-text-lime">
              {" "}Say
            </span>
          </h2>

          <p className="sound-section-description">
            Experiences from people who trusted Sound Fusion with their special
            events.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.id}
              className="sound-card flex flex-col p-6 sm:p-8"
            >
              <Quote
                size={32}
                strokeWidth={1.5}
                className="text-sound-lime"
              />

              <div className="mt-5 flex gap-1">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    size={16}
                    fill="currentColor"
                    className="text-sound-lime"
                  />
                ))}
              </div>

              <p className="sound-text-muted mt-5 flex-1 leading-7">
                “{testimonial.testimonial}”
              </p>

              <div className="mt-7 border-t border-white/10 pt-5">
                <h3 className="font-semibold text-sound-white">
                  {testimonial.name}
                </h3>

                <p className="mt-1 text-sm text-sound-lime">
                  {testimonial.event}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}