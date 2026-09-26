import { CalendarDays, MapPin, Users, } from "lucide-react";

const FEATURES = [
  {
    id: "date",
    icon: CalendarDays,
    title: "Event Date",
    description:
      "Let us know when your event will take place.",
  },
  {
    id: "location",
    icon: MapPin,
    title: "Event Location",
    description:
      "Tell us where your event is being held.",
  },
  {
    id: "guests",
    icon: Users,
    title: "Guest Count",
    description:
      "An estimated guest count helps us understand the scale.",
  },
];

export default function QuoteSidebar() {
  return (
    <aside className="sound-quote-sidebar">
      <span className="sound-section-label">
        Sound Fusion
      </span>

      <h2 className="mt-4 text-2xl font-bold text-sound-white sm:text-3xl">
        Let's Create Your
        <span className="block text-sound-lime">
          Perfect Event
        </span>
      </h2>

      <p className="sound-text-muted mt-5 leading-7">
        Tell us what you're planning and we'll
        use these details to better understand
        your event.
      </p>

      <div className="mt-8 space-y-6">
        {FEATURES.map( ({
             id,
            icon: Icon,
            title,
            description,
          }) => (
            <div
              key={id}
              className="sound-quote-feature"
            >
              <Icon
                size={21}
                className="text-sound-lime"
                aria-hidden="true"
              />

              <div>
                <h3 className="sound-quote-feature-title">
                  {title}
                </h3>

                <p className="sound-quote-feature-text">
                  {description}
                </p>
              </div>
            </div>
          )
        )}
      </div>
    </aside>
  );
}