import Link from "next/link";
import {
  Mail,
  MessageCircle,
  MapPin,
} from "lucide-react";

export default function ContactSection() {
  return (
    <section className="sound-section sound-bg-dark-soft">
      <div className="sound-container">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <span className="sound-section-label">
              Contact Us
            </span>

            <h2 className="sound-section-title">
              Let's Talk About
              <span className="sound-text-lime">
                {" "}Your Event
              </span>
            </h2>

            <p className="sound-section-description">
              Have questions or already know what you need? Contact Sound Fusion
              and tell us about your upcoming event.
            </p>

            <div className="mt-8">
              <Link
                href="/contact"
                className="sound-button-primary"
              >
                Contact Sound Fusion
              </Link>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="sound-card flex items-center gap-5 p-5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sound-lime/10">
                <Mail
                  size={21}
                  className="text-sound-lime"
                />
              </div>

              <div>
                <p className="text-sm text-sound-gray">
                  Email
                </p>

                <p className="mt-1 font-semibold text-sound-white">
                  Contact Sound Fusion
                </p>
              </div>
            </div>

            <div className="sound-card flex items-center gap-5 p-5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sound-lime/10">
                <MessageCircle
                  size={21}
                  className="text-sound-lime"
                />
              </div>

              <div>
                <p className="text-sm text-sound-gray">
                  Request Information
                </p>

                <p className="mt-1 font-semibold text-sound-white">
                  Tell us about your event
                </p>
              </div>
            </div>

            <div className="sound-card flex items-center gap-5 p-5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sound-lime/10">
                <MapPin
                  size={21}
                  className="text-sound-lime"
                />
              </div>

              <div>
                <p className="text-sm text-sound-gray">
                  Service Area
                </p>

                <p className="mt-1 font-semibold text-sound-white">
                  Event services in the United States
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}