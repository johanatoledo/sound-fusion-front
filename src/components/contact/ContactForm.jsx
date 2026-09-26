"use client";

import { useState } from "react";
import {
  CheckCircle2,
  LoaderCircle,
} from "lucide-react";

const INITIAL_FORM = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

export default function ContactForm() {
  const [formData, setFormData] =
    useState(INITIAL_FORM);

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] =
    useState(false);
  const [success, setSuccess] =
    useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((previous) => ({
        ...previous,
        [name]: "",
      }));
    }

    if (success) {
      setSuccess(false);
    }
  };

  const validate = () => {
    const nextErrors = {};

    if (!formData.name.trim()) {
      nextErrors.name =
        "Please enter your name.";
    }

    if (!formData.email.trim()) {
      nextErrors.email =
        "Please enter your email.";
    }

    if (!formData.message.trim()) {
      nextErrors.message =
        "Please enter your message.";
    }

    return nextErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isSubmitting) return;

    const validationErrors = validate();

    if (
      Object.keys(validationErrors).length
    ) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      /*
       * Cuando implementemos backend:
       *
       * await sendContactMessage(formData);
       */

      setSuccess(true);
      setFormData(INITIAL_FORM);
    } catch {
      setErrors({
        submit:
          "We couldn't send your message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="sound-card p-6 sm:p-8"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="contactName"
            className="sound-form-label"
          >
            Full Name
            <span className="sound-form-required">
              *
            </span>
          </label>

          <input
            id="contactName"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            autoComplete="name"
            maxLength={100}
            className={`sound-input ${
              errors.name
                ? "sound-input-error"
                : ""
            }`}
          />

          {errors.name && (
            <p className="sound-form-error">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="contactEmail"
            className="sound-form-label"
          >
            Email
            <span className="sound-form-required">
              *
            </span>
          </label>

          <input
            id="contactEmail"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            autoComplete="email"
            maxLength={254}
            className={`sound-input ${
              errors.email
                ? "sound-input-error"
                : ""
            }`}
          />

          {errors.email && (
            <p className="sound-form-error">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="mt-6">
        <label
          htmlFor="contactPhone"
          className="sound-form-label"
        >
          Phone Number
        </label>

        <input
          id="contactPhone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          autoComplete="tel"
          maxLength={30}
          className="sound-input"
        />
      </div>

      <div className="mt-6">
        <label
          htmlFor="contactMessage"
          className="sound-form-label"
        >
          Message
          <span className="sound-form-required">
            *
          </span>
        </label>

        <textarea
          id="contactMessage"
          name="message"
          rows={6}
          value={formData.message}
          onChange={handleChange}
          maxLength={2000}
          className={`sound-input resize-none ${
            errors.message
              ? "sound-input-error"
              : ""
          }`}
        />

        {errors.message && (
          <p className="sound-form-error">
            {errors.message}
          </p>
        )}
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

          <span>
            Your message has been sent.
          </span>
        </div>
      )}

      <div className="mt-8">
        <button
          type="submit"
          disabled={isSubmitting}
          aria-busy={isSubmitting}
          className="sound-button-primary"
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
            "Send Message"
          )}
        </button>
      </div>
    </form>
  );
}