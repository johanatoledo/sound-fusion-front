import ContactForm from "@/components/contact/ContactForm";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

export const metadata = {
  title:
    "Contact & Event Request | Sound Fusion Entertainment",

  description:
    "Contact Sound Fusion Entertainment for professional DJ, sound, lighting and event production services.",

  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-sound-black pt-[var(--navbar-height)]">
      <section className="sound-section">
        <Container>
          <SectionTitle
            label="Contact Sound Fusion"
            title="Tell Us About Your Event"
            description="Complete the form below and our team will review your event details, services and production requirements."
            centered
          />

          <div className="mx-auto mt-12 max-w-5xl">
            <ContactForm />
          </div>
        </Container>
      </section>
    </main>
  );
}