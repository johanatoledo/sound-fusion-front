import { Mail, MapPin, Phone } from "lucide-react";

import ContactFormInicial from "@/components/contact/ContactFormInicial";
import Container from "@/components/ui/Container";

export const metadata = {
  title: "Contact | Sound Fusion Entertainment",

  description:
    "Contact Sound Fusion Entertainment for professional DJ, live sound, wedding entertainment and event lighting services.",

  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-sound-black pt-(--navbar-height)">
      <section className="sound-section">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[0.75fr_1.5fr] lg:gap-20">
            {/* Información */}
            <div>
              <span className="sound-section-label">
                Contact
              </span>

              <h1 className="sound-section-title">
                Let's Talk About
                <span className="sound-text-lime">
                  {" "}Your Event
                </span>
              </h1>

              <p className="sound-section-description">
                Have questions about our sound, DJ, wedding or lighting
                services? Send us a message and we'll get back to you.
              </p>

              <div className="mt-10 space-y-6">
                <div className="flex items-start gap-4">
                  <Mail
                    size={20}
                    className="mt-1 shrink-0 text-sound-lime"
                    aria-hidden="true"
                  />

                  <div>
                    <p className="text-sm font-semibold text-sound-white">
                      Email
                    </p>

                    <p className="sound-text-muted mt-1 text-sm">
                      Contact Sound Fusion
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone
                    size={20}
                    className="mt-1 shrink-0 text-sound-lime"
                    aria-hidden="true"
                  />

                  <div>
                    <p className="text-sm font-semibold text-sound-white">
                      Phone
                    </p>

                    <p className="sound-text-muted mt-1 text-sm">
                      Call us to discuss your event
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin
                    size={20}
                    className="mt-1 shrink-0 text-sound-lime"
                    aria-hidden="true"
                  />

                  <div>
                    <p className="text-sm font-semibold text-sound-white">
                      Event Services
                    </p>

                    <p className="sound-text-muted mt-1 text-sm">
                      Serving events throughout our service area
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Formulario */}
            <div className="sound-card p-6 sm:p-8 lg:p-10">
              <ContactFormInicial />
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}