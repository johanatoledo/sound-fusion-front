"use client";

const EVENT_TYPES = [
  {
    value: "wedding",
    label: "Wedding",
  },
  {
    value: "corporate-event",
    label: "Corporate Event",
  },
  {
    value: "private-party",
    label: "Private Party",
  },
  {
    value: "birthday",
    label: "Birthday",
  },
  {
    value: "quinceanera",
    label: "Quinceañera",
  },
  {
    value: "other",
    label: "Other",
  },
];

export default function EventSelector({
  value,
  onChange,
  error,
}) {
  return (
    <div>
      <label
        htmlFor="eventType"
        className="sound-form-label"
      >
        Event Type
        <span className="sound-form-required">*</span>
      </label>

      <select
        id="eventType"
        name="eventType"
        value={value}
        onChange={onChange}
        className={`sound-input ${
          error ? "sound-input-error" : ""
        }`}
      >
        <option value="">
          Select your event type
        </option>

        {EVENT_TYPES.map((event) => (
          <option
            key={event.value}
            value={event.value}
          >
            {event.label}
          </option>
        ))}
      </select>

      {error && (
        <p className="sound-form-error">
          {error}
        </p>
      )}
    </div>
  );
}