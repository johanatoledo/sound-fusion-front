import ServiceCard from "../../components/services/ServiceCard";
import { services } from "@/data/services";

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="sound-section sound-bg-black"
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
            Professional event solutions designed to create the right
            atmosphere, sound and experience for your guests.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
            />
          ))}
        </div>
      </div>
    </section>
  );
}