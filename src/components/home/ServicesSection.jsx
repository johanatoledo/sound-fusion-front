import ServiceGrid from "@/components/services/ServiceGrid";
import { services } from "@/data/services";

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="sound-section sound-bg-b"
    >
      <div className="sound-container">
        <div className="mb-12 max-w-2xl lg:mb-16">
          <span className="sound-section-label">
            Our Services
          </span>

          <h2 className="sound-section-title">
            Everything Your Event Needs
          </h2>

          <p className="sound-section-description">
            Professional event solutions designed
            to create the right atmosphere, sound
            and experience for your guests.
          </p>
        </div>

        <ServiceGrid services={services} />
      </div>
    </section>
  );
}