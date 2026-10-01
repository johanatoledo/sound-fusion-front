import {
  Headphones,
  Lightbulb,
  ShieldCheck,
  Users,
} from "lucide-react";

const benefits = [
  {
    id: 1,
    icon: Headphones,
    title: "Professional Equipment",
    description:
      "Reliable professional-grade sound systems designed to deliver clear and powerful audio.",
  },
  {
    id: 2,
    icon: Lightbulb,
    title: "Creative Lighting",
    description:
      "Lighting solutions designed to transform your venue and create the right atmosphere.",
  },
  {
    id: 3,
    icon: ShieldCheck,
    title: "Reliable Service",
    description:
      "Professional setup, technical support and attention to every detail of your event.",
  },
  {
    id: 4,
    icon: Users,
    title: "Personalized Experience",
    description:
      "Every event is different. We adapt our services to your venue, vision and guests.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="sound-section sound-bg-b">
      <div className="sound-container">
        <div className="mx-auto mb-12 max-w-3xl text-center lg:mb-16">
          <span className="sound-section-label">
            Why Sound Fusion
          </span>

          <h2 className="sound-section-title">
            More Than Equipment.
            <span className="sound-text-lime">
              {" "}We Create Experiences.
            </span>
          </h2>

          <p className="sound-section-description mx-auto">
            Professional service, reliable equipment and creative production
            designed around your event.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map(({ id, icon: Icon, title, description }) => (
            <article
              key={id}
              className="sound-card p-6 sm:p-7"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-sound-lime/10">
                <Icon
                  size={24}
                  strokeWidth={1.8}
                  className="text-sound-lime"
                />
              </div>

              <h3 className="text-lg font-bold text-sound-white">
                {title}
              </h3>

              <p className="sound-text-muted mt-3 text-sm leading-6">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}