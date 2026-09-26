"use client";

import { useState } from "react";
import { CheckCircle2, LoaderCircle, } from "lucide-react";
import EventSelector from "@/components/quote/EventSelector";
import FormFieldError from "@/components/quote/FormFieldError";
import QuoteSidebar from "@/components/quote/QuoteSidebar";
import ServicesSelector from "@/components/quote/ServicesSelector";
import { INITIAL_QUOTE_FORM } from "@/data/quote";
import { getLocalDateString } from "@/lib/date";
import { validateQuoteForm } from "@/lib/quoteValidation";
import { createQuote } from "@/services/quoteService";

export default function QuoteForm() {
  const [formData, setFormData] = useState( INITIAL_QUOTE_FORM );
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const today = getLocalDateString();

  const clearFieldError = (fieldName) => {
    setErrors((previous) => {
      if (!previous[fieldName]) {
        return previous;
      }

      const nextErrors = { ...previous, };

      delete nextErrors[fieldName];

      return nextErrors;
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    clearFieldError(name);

    if (success) {
      setSuccess(false);
    }
  };

  const handleServiceChange = (serviceId) => {
    setFormData((previous) => {
      const isSelected = previous.services.includes(serviceId);

      return {
        ...previous,

        services: isSelected
          ? previous.services.filter( (service) => service !== serviceId )
          : [ ...previous.services, serviceId, ],
      };
    });

    clearFieldError("services");

    if (success) {
      setSuccess(false);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    setSuccess(false);

    const validationErrors =
      validateQuoteForm(formData);

    if (
      Object.keys(validationErrors).length > 0
    ) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      await createQuote(formData);

      setFormData(INITIAL_QUOTE_FORM);
      setSuccess(true);
    } catch (error) {
      console.error(
        "Quote request failed:",
        error
      );

      setErrors({
        submit:
          error instanceof Error
            ? error.message
            : "We couldn't send your request. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mx-auto max-w-5xl">
      <div className="sound-card overflow-hidden">
        <div className="grid lg:grid-cols-[1fr_1.8fr]">
          <QuoteSidebar />

          <form
            onSubmit={handleSubmit}
            noValidate
            className="p-6 sm:p-8 lg:p-10"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              {/* Full name */}
              <div>
                <label
                  htmlFor="customerName"
                  className="sound-form-label"
                >
                  Full Name
                  <span className="sound-form-required">
                    *
                  </span>
                </label>

                <input
                  id="customerName"
                  name="customerName"
                  type="text"
                  value={formData.customerName}
                  onChange={handleChange}
                  placeholder="John Smith"
                  autoComplete="name"
                  maxLength={100}
                  aria-invalid={Boolean( errors.customerName )}
                  aria-describedby={ errors.customerName
                      ? "customerName-error"
                      : undefined
                  }
                  className={`sound-input ${ errors.customerName
                      ? "sound-input-error"
                      : ""
                  }`}
                />

                <FormFieldError
                  id="customerName-error"
                  message={ errors.customerName }
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="sound-form-label"
                >
                  Email
                  <span className="sound-form-required">
                    *
                  </span>
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  autoComplete="email"
                  inputMode="email"
                  maxLength={254}
                  aria-invalid={Boolean(
                    errors.email
                  )}
                  aria-describedby={
                    errors.email
                      ? "email-error"
                      : undefined
                  }
                  className={`sound-input ${
                    errors.email
                      ? "sound-input-error"
                      : ""
                  }`}
                />

                <FormFieldError
                  id="email-error"
                  message={errors.email}
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="sound-form-label"
                >
                  Phone Number
                  <span className="sound-form-required">
                    *
                  </span>
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 123-4567"
                  autoComplete="tel"
                  inputMode="tel"
                  maxLength={30}
                  aria-invalid={Boolean(
                    errors.phone
                  )}
                  aria-describedby={
                    errors.phone
                      ? "phone-error"
                      : undefined
                  }
                  className={`sound-input ${
                    errors.phone
                      ? "sound-input-error"
                      : ""
                  }`}
                />

                <FormFieldError
                  id="phone-error"
                  message={errors.phone}
                />
              </div>

              <EventSelector
                value={formData.eventType}
                onChange={handleChange}
                error={errors.eventType}
              />

              {/* Event date */}
              <div>
                <label
                  htmlFor="eventDate"
                  className="sound-form-label"
                >
                  Event Date
                  <span className="sound-form-required">
                    *
                  </span>
                </label>

                <input
                  id="eventDate"
                  name="eventDate"
                  type="date"
                  min={today}
                  value={formData.eventDate}
                  onChange={handleChange}
                  aria-invalid={Boolean(
                    errors.eventDate
                  )}
                  aria-describedby={
                    errors.eventDate
                      ? "eventDate-error"
                      : undefined
                  }
                  className={`sound-input ${
                    errors.eventDate
                      ? "sound-input-error"
                      : ""
                  }`}
                />

                <FormFieldError
                  id="eventDate-error"
                  message={errors.eventDate}
                />
              </div>

              {/* Guests */}
              <div>
                <label
                  htmlFor="guestCount"
                  className="sound-form-label"
                >
                  Estimated Guests
                </label>

                <input
                  id="guestCount"
                  name="guestCount"
                  type="number"
                  min="1"
                  step="1"
                  value={formData.guestCount}
                  onChange={handleChange}
                  placeholder="150"
                  inputMode="numeric"
                  aria-invalid={Boolean(
                    errors.guestCount
                  )}
                  aria-describedby={
                    errors.guestCount
                      ? "guestCount-error"
                      : undefined
                  }
                  className={`sound-input ${
                    errors.guestCount
                      ? "sound-input-error"
                      : ""
                  }`}
                />

                <FormFieldError
                  id="guestCount-error"
                  message={errors.guestCount}
                />
              </div>
            </div>

            {/* Location */}
            <div className="mt-6">
              <label
                htmlFor="eventLocation"
                className="sound-form-label"
              >
                Event Location
                <span className="sound-form-required">
                  *
                </span>
              </label>

              <input
                id="eventLocation"
                name="eventLocation"
                type="text"
                value={formData.eventLocation}
                onChange={handleChange}
                placeholder="City, State or venue name"
                autoComplete="street-address"
                maxLength={200}
                aria-invalid={Boolean(
                  errors.eventLocation
                )}
                aria-describedby={
                  errors.eventLocation
                    ? "eventLocation-error"
                    : undefined
                }
                className={`sound-input ${
                  errors.eventLocation
                    ? "sound-input-error"
                    : ""
                }`}
              />

              <FormFieldError
                id="eventLocation-error"
                message={
                  errors.eventLocation
                }
              />
            </div>

            <ServicesSelector
              selectedServices={
                formData.services
              }
              onChange={
                handleServiceChange
              }
              error={errors.services}
            />

            {/* Message */}
            <div className="mt-8">
              <label
                htmlFor="message"
                className="sound-form-label"
              >
                Tell Us About Your Event
              </label>

              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                maxLength={2000}
                placeholder="Tell us about your event, venue, schedule or any special requirements..."
                className="sound-input resize-none"
              />
            </div>

            <FormFieldError
              id="submit-error"
              message={errors.submit}
            />

            {success && (
              <div
                className="sound-form-success"
                role="status"
                aria-live="polite"
              >
                <CheckCircle2
                  size={20}
                  className="shrink-0"
                  aria-hidden="true"
                />

                <p> Thank you! Your quote request has been received. </p>
              </div>
            )}

            <div className="mt-8">
              <button
                type="submit"
                disabled={isSubmitting}
                aria-busy={isSubmitting}
                className="sound-button-primary w-full disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              >
                {isSubmitting ? (
                  <>
                    <LoaderCircle
                      size={18}
                      className="animate-spin"
                      aria-hidden="true"
                    />

                    Sending Request...
                  </>
                ) : (
                  "Request My Free Quote"
                )}
              </button>
            </div>

            <p className="sound-text-muted mt-5 text-xs leading-5">
              By submitting this form, you agree
              that Sound Fusion may contact you
              regarding your event request.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}