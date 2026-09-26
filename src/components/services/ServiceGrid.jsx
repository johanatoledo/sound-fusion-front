import ServiceCard from "@/components/services/ServiceCard";

export default function ServiceGrid({ services = [] }) {
  if (!Array.isArray(services) || services.length === 0) {
    return (
      <p className="sound-text-muted">
        No services are currently available.
      </p>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
      {services.map((service) => (
        <ServiceCard
          key={service.id}
          service={service}
        />
      ))}
    </div>
  );
}