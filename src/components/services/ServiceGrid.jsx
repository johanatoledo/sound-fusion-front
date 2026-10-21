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
    <div className="relative">
      <div
        className="
          flex snap-x snap-mandatory gap-5 overflow-x-auto pb-6
          [-ms-overflow-style:none]
          [scrollbar-width:none]
          [&::-webkit-scrollbar]:hidden
          md:grid
          md:grid-cols-2
          md:gap-6
          md:overflow-visible
          md:pb-0
          lg:gap-8
        "
      >
        {services.map((service) => (
          <div
            key={service.id}
            className="
              w-[82%] shrink-0 snap-start
              sm:w-[65%]
              md:w-auto
              md:shrink
            "
          >
            <ServiceCard service={service} />
          </div>
        ))}
      </div>
    </div>
  );
}