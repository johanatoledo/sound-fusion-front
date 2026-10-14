"use client";

import {
  useState,
} from "react";

import {
  CheckCircle2,
  LoaderCircle,
} from "lucide-react";

import ContactInput from "@/components/contact/ContactInput";
import ContactSelect from "@/components/contact/ContactSelect";
import ContactCheckboxGroup from "@/components/contact/ContactCheckboxGroup";

import {
  EVENT_TYPES,
  BASIC_PACKAGES,
  LIGHTING_ADDONS,
  WEDDING_VENUE_OPTIONS,
  WEDDING_REHEARSAL_OPTIONS,
  OFFICIANT_OPTIONS,
  COORDINATION_OPTIONS,
  INITIAL_CONTACT_FORM,
} from "@/data/contactForm";

import {
  isWeddingEvent,
  validateContactForm,
} from "@/lib/contactValidation";

import {
  sendContactRequest,
} from "@/services/contactService";

function getLocalDateString() {
  const now = new Date();

  const year =
    now.getFullYear();

  const month =
    String(
      now.getMonth() + 1
    ).padStart(2, "0");

  const day =
    String(
      now.getDate()
    ).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

export default function ContactForm() {
  const [
    formData,
    setFormData,
  ] = useState(
    INITIAL_CONTACT_FORM
  );

  const [
    errors,
    setErrors,
  ] = useState({});

  const [
    isSubmitting,
    setIsSubmitting,
  ] = useState(false);

  const [
    success,
    setSuccess,
  ] = useState(false);

  const isWedding =
    isWeddingEvent(
      formData.eventTypes
    );

  const today =
    getLocalDateString();

  const clearError = (field) => {
    setErrors((previous) => {
      if (!previous[field]) {
        return previous;
      }

      const next = {
        ...previous,
      };

      delete next[field];

      return next;
    });
  };

  const handleChange = (event) => {
    const {
      name,
      value,
    } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    clearError(name);

    if (success) {
      setSuccess(false);
    }
  };

  const toggleArrayValue = (
    field,
    value
  ) => {
    setFormData((previous) => {
      const values =
        previous[field];

      const selected =
        values.includes(value);

      let nextValues;

      /*
       * "none" debe ser exclusivo.
       */
      if (value === "none") {
        nextValues = selected
          ? []
          : ["none"];
      } else {
        nextValues = selected
          ? values.filter(
              (item) =>
                item !== value
            )
          : [
              ...values.filter(
                (item) =>
                  item !== "none"
              ),
              value,
            ];
      }

      return {
        ...previous,
        [field]: nextValues,
      };
    });

    clearError(field);
  };

  const handleSubmit =
    async (event) => {
      event.preventDefault();

      if (isSubmitting) {
        return;
      }

      setSuccess(false);

      const validationErrors =
        validateContactForm(
          formData
        );

      if (
        Object.keys(
          validationErrors
        ).length > 0
      ) {
        setErrors(
          validationErrors
        );

        return;
      }

      setErrors({});
      setIsSubmitting(true);

      try {
        await sendContactRequest(
          formData
        );

        setFormData(
          INITIAL_CONTACT_FORM
        );

        setSuccess(true);
      } catch (error) {
        setErrors({
          submit:
            error instanceof Error
              ? error.message
              : "Unable to send your request.",
        });
      } finally {
        setIsSubmitting(false);
      }
    };

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="sound-card p-6 sm:p-8 lg:p-10"
    >
      {/* Honeypot */}
      <div
        className="absolute left-[-9999px]"
        aria-hidden="true"
      >
        <label htmlFor="website">
          Website
        </label>

        <input
          id="website"
          name="website"
          type="text"
          value={formData.website}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* CONTACT */}
      <div>
        <span className="sound-section-label">
          Your Information
        </span>

        <h2 className="mt-3 text-2xl font-bold text-sound-white">
          Let's start with your details
        </h2>

        <div className="mt-7 grid gap-6 sm:grid-cols-2">
          <ContactInput
            id="name"
            name="name"
            label="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
            error={errors.name}
            autoComplete="name"
            maxLength={100}
          />

          <ContactInput
            id="email"
            name="email"
            type="email"
            label="Email Address"
            required
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            autoComplete="email"
            maxLength={254}
          />

          <ContactInput
            id="phone"
            name="phone"
            type="tel"
            label="Phone Number"
            required
            value={formData.phone}
            onChange={handleChange}
            error={errors.phone}
            autoComplete="tel"
            maxLength={30}
          />

          <ContactInput
            id="bestCallTime"
            name="bestCallTime"
            label="Best Time to Call"
            value={
              formData.bestCallTime
            }
            onChange={handleChange}
            placeholder="Example: After 5 PM"
            maxLength={100}
          />

          <ContactInput
            id="contractSigner"
            name="contractSigner"
            label="Who Will Sign the Contract?"
            required
            value={
              formData.contractSigner
            }
            onChange={handleChange}
            error={
              errors.contractSigner
            }
            maxLength={100}
          />
        </div>
      </div>

      <div className="sound-divider my-10" />

      {/* EVENT */}
      <div>
        <span className="sound-section-label">
          Event Details
        </span>

        <div className="mt-7">
          <ContactCheckboxGroup
            legend="Which type of event will we be covering?"
            options={EVENT_TYPES}
            selectedValues={
              formData.eventTypes
            }
            onChange={(value) =>
              toggleArrayValue(
                "eventTypes",
                value
              )
            }
            required
            error={
              errors.eventTypes
            }
          />
        </div>

        <div className="mt-7 grid gap-6 sm:grid-cols-3">
          <ContactInput
            id="eventDate"
            name="eventDate"
            type="date"
            label="Event Date"
            required
            min={today}
            value={
              formData.eventDate
            }
            onChange={handleChange}
            error={
              errors.eventDate
            }
          />

          <ContactInput
            id="eventStartTime"
            name="eventStartTime"
            type="time"
            label="Start Time"
            required
            value={
              formData.eventStartTime
            }
            onChange={handleChange}
            error={
              errors.eventStartTime
            }
          />

          <ContactInput
            id="eventEndTime"
            name="eventEndTime"
            type="time"
            label="End Time"
            required
            value={
              formData.eventEndTime
            }
            onChange={handleChange}
            error={
              errors.eventEndTime
            }
          />
        </div>

        <div className="mt-6">
          <ContactInput
            id="venue"
            name="venue"
            label="Venue Name & Address"
            required
            value={formData.venue}
            onChange={handleChange}
            error={errors.venue}
            placeholder="Venue, street, city, state and ZIP"
            maxLength={300}
          />

          <p className="sound-text-muted mt-2 text-xs">
            Additional travel charges may apply outside Garrett County, Maryland.
          </p>
        </div>
      </div>

      <div className="sound-divider my-10" />

      {/* PACKAGE */}
      <div>
        <span className="sound-section-label">
          Entertainment Package
        </span>

        <div className="mt-7">
          <ContactSelect
            id="basicPackage"
            label="Select Your Basic Package"
            required
            value={
              formData.basicPackage
            }
            onChange={handleChange}
            options={
              BASIC_PACKAGES
            }
            error={
              errors.basicPackage
            }
          />
        </div>

        <div className="mt-8">
          <ContactCheckboxGroup
            legend="Lighting Add-ons"
            options={
              LIGHTING_ADDONS
            }
            selectedValues={
              formData.lightingAddons
            }
            onChange={(value) =>
              toggleArrayValue(
                "lightingAddons",
                value
              )
            }
            required
            error={
              errors.lightingAddons
            }
          />
        </div>
      </div>

      {/* WEDDING ONLY */}
      {isWedding && (
        <>
          <div className="sound-divider my-10" />

          <div>
            <span className="sound-section-label">
              Wedding Details
            </span>

            <div className="mt-7 grid gap-6">
              <ContactSelect
                id="weddingVenueSetup"
                label="Are the ceremony and reception at the same venue?"
                required
                value={
                  formData.weddingVenueSetup
                }
                onChange={
                  handleChange
                }
                options={
                  WEDDING_VENUE_OPTIONS
                }
                error={
                  errors.weddingVenueSetup
                }
              />

              <ContactInput
                id="setupCount"
                name="setupCount"
                type="number"
                min="1"
                label="How Many Setups Will Sound Fusion Need?"
                required
                value={
                  formData.setupCount
                }
                onChange={
                  handleChange
                }
                error={
                  errors.setupCount
                }
              />

              <ContactSelect
                id="weddingRehearsal"
                label="Would You Like Sound Fusion at Your Wedding Rehearsal?"
                required
                value={
                  formData.weddingRehearsal
                }
                onChange={
                  handleChange
                }
                options={
                  WEDDING_REHEARSAL_OPTIONS
                }
                error={
                  errors.weddingRehearsal
                }
              />

              {formData.weddingRehearsal ===
                "yes" && (
                <ContactInput
                  id="rehearsalDetails"
                  name="rehearsalDetails"
                  label="Rehearsal Date, Start Time & End Time"
                  required
                  value={
                    formData.rehearsalDetails
                  }
                  onChange={
                    handleChange
                  }
                  error={
                    errors.rehearsalDetails
                  }
                  maxLength={300}
                />
              )}

              <ContactSelect
                id="officiant"
                label="Do You Need a Wedding Officiant?"
                required
                value={
                  formData.officiant
                }
                onChange={
                  handleChange
                }
                options={
                  OFFICIANT_OPTIONS
                }
                error={
                  errors.officiant
                }
              />

              <ContactSelect
                id="smallButLovelyPackage"
                label="Add Small But Lovely Coordination Package? — $950"
                value={
                  formData.smallButLovelyPackage
                }
                onChange={
                  handleChange
                }
                options={
                  COORDINATION_OPTIONS
                }
              />

              <ContactSelect
                id="itsYourDayPackage"
                label="Add It's Your Day Coordination Package? — $1,400"
                value={
                  formData.itsYourDayPackage
                }
                onChange={
                  handleChange
                }
                options={
                  COORDINATION_OPTIONS
                }
              />
            </div>
          </div>
        </>
      )}

      <div className="sound-divider my-10" />

      {/* MESSAGE */}
      <div>
        <label
          htmlFor="message"
          className="sound-form-label"
        >
          Additional Information
        </label>

        <textarea
          id="message"
          name="message"
          rows={6}
          maxLength={3000}
          value={
            formData.message
          }
          onChange={handleChange}
          placeholder="Tell us anything else we should know about your event..."
          className="sound-input resize-none"
        />
      </div>

      {errors.submit && (
        <div
          className="sound-form-submit-error"
          role="alert"
        >
          {errors.submit}
        </div>
      )}

      {success && (
        <div
          className="sound-form-success"
          role="status"
          aria-live="polite"
        >
          <CheckCircle2
            size={20}
            aria-hidden="true"
          />

          <p>
            Thank you! Your event request has been sent to Sound Fusion Entertainment.
          </p>
        </div>
      )}

      <div className="mt-8">
        <button
          type="submit"
          disabled={
            isSubmitting
          }
          aria-busy={
            isSubmitting
          }
          className="sound-button-primary disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? (
            <>
              <LoaderCircle
                size={18}
                className="animate-spin"
                aria-hidden="true"
              />

              Sending...
            </>
          ) : (
            "Send Event Request"
          )}
        </button>
      </div>

      <p className="sound-text-muted mt-5 text-xs leading-5">
        By submitting this form, you agree that Sound Fusion Entertainment may contact you regarding your event request.
      </p>
    </form>
  );
}