import ServiceCard from "@/components/services/ServiceCard";
import { services } from "@/data/services";

export default function ServicesSection() {
  return (
    <section className="bg-sound-black px-5 py-20 sm:px-6 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-sound-lime">
            Our Services
          </span>

          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Everything Your Event Needs
          </h2>

          <p className="mt-5 leading-7 text-white/60">
            Professional event solutions designed to create the right
            atmosphere, sound and experience for your guests.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
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