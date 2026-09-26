"use client";

import { CheckCircle2 } from "lucide-react";
import { QUOTE_SERVICES } from "@/data/quote";
import FormFieldError from "@/components/quote/FormFieldError";

export default function ServicesSelector({
  selectedServices,
  onChange,
  error,
}) {
  return (
    <fieldset className="mt-8">
      <legend className="sound-form-label">
        Services You're Interested In
        <span className="sound-form-required">
          *
        </span>
      </legend>

      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        {QUOTE_SERVICES.map((service) => {
          const isSelected =
            selectedServices.includes(service.id);

          return (
            <label
              key={service.id}
              className={`sound-service-option ${
                isSelected
                  ? "sound-service-option-selected"
                  : ""
              }`}
            >
              <input
                type="checkbox"
                value={service.id}
                checked={isSelected}
                onChange={() =>
                  onChange(service.id)
                }
                className="sr-only"
              />

              <span
                className="sound-service-check"
                aria-hidden="true"
              >
                {isSelected && (
                  <CheckCircle2 size={17} />
                )}
              </span>

              <span>{service.label}</span>
            </label>
          );
        })}
      </div>

      <FormFieldError
        id="services-error"
        message={error}
      />
    </fieldset>
  );
}