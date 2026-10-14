export const EVENT_TYPES = [
  {
    value: "wedding-rehearsal",
    label: "Wedding Rehearsal",
  },
  {
    value: "wedding-ceremony",
    label: "Wedding Ceremony",
  },
  {
    value: "wedding-reception",
    label: "Wedding Reception",
  },
  {
    value: "private-party",
    label: "Private Party",
  },
  {
    value: "company-party",
    label: "Company Party",
  },
  {
    value: "community-event",
    label: "Community Event",
  },
];

export const BASIC_PACKAGES = [
  {
    value: "dj-only",
    label: "$100/Hr — DJ Only",
  },
  {
    value: "dj-basic-lighting",
    label: "$135/Hr — DJ + Basic Dance Floor Lighting",
  },
  {
    value: "dj-mc",
    label: "$135/Hr — DJ + MC Service",
  },
  {
    value: "dj-mc-lighting",
    label: "$150/Hr — DJ + MC + Basic Dance Floor Lighting",
  },
  {
    value: "lighting-only",
    label: "$100/Hr — Lighting Only",
  },
  {
    value: "live-sound-band",
    label: "$125/Hr — Live Sound for Band",
  },
];

export const LIGHTING_ADDONS = [
  {
    value: "room-uplighting",
    label: "Color-Customized Room Uplighting — $250 per room",
  },
  {
    value: "intelligent-lighting",
    label:
      "Intelligent Lighting, Haze Machine, Moving Dance Floor Beams & Lighted Truss Towers — $200 per party hour",
  },
  {
    value: "gobo-projection",
    label:
      "Customized Gobo Projection — Logo, Shape or Couple Name — $200",
  },
  {
    value: "geyser-flame",
    label: "Geyser Flame Effect — $150",
  },
  {
    value: "photo-projection",
    label:
      "Photo Slideshow / Animated Graphic Projection — $250",
  },
  {
    value: "none",
    label: "No additional lighting add-ons",
  },
];

export const WEDDING_VENUE_OPTIONS = [
  {
    value: "same-room",
    label: "Yes, ceremony and reception are in the same room",
  },
  {
    value: "outside-ceremony",
    label:
      "Yes, but we will need an outside setup for the ceremony",
  },
  {
    value: "different-venues",
    label:
      "No, ceremony and reception are at different venues / locations",
  },
];

export const WEDDING_REHEARSAL_OPTIONS = [
  {
    value: "yes",
    label:
      "Yes — include Sound Fusion at our wedding rehearsal ($100/Hr)",
  },
  {
    value: "no",
    label: "No, thanks",
  },
];

export const OFFICIANT_OPTIONS = [
  {
    value: "with-rehearsal",
    label:
      "Yes — include officiant and rehearsal ($150)",
  },
  {
    value: "without-rehearsal",
    label:
      "Yes — officiant without rehearsal ($100)",
  },
  {
    value: "questions",
    label: "Call us about this — we have questions",
  },
  {
    value: "already-have-officiant",
    label:
      "We already have an officiant and only need entertainment services",
  },
];

export const COORDINATION_OPTIONS = [
  {
    value: "yes",
    label: "Yes",
  },
  {
    value: "no",
    label: "No, thanks",
  },
];

export const INITIAL_CONTACT_FORM = {
  name: "",
  email: "",
  eventDate: "",
  phone: "",
  bestCallTime: "",
  contractSigner: "",

  eventTypes: [],

  eventStartTime: "",
  eventEndTime: "",

  venue: "",

  basicPackage: "",

  lightingAddons: [],

  weddingVenueSetup: "",
  setupCount: "",

  weddingRehearsal: "",
  rehearsalDetails: "",

  officiant: "",

  smallButLovelyPackage: "",
  itsYourDayPackage: "",

  message: "",

  // Honeypot anti-bot
  website: "",
};