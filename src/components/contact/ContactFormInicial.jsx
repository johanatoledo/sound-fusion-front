"use client";

import { useState } from "react";
import { CheckCircle2, LoaderCircle, Send } from "lucide-react";

import Button from "@/components/ui/Button";
import FormFieldError from "@/components/ui/FormFieldError";
import { INITIAL_CONTACT_FORM } from "@/data/contact";
import { validateContact } from "@/lib/contactValidation";
import { sendContactMessage } from "@/services/contactService";

export default function ContactForm() {
  const [formData, setFormData] = useState(INITIAL_CONTACT_FORM);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const clearError = (field) => {
    setErrors((previous) => {
      if (!previous[field]) return previous;

      const nextErrors = { ...previous };
      delete nextErrors[field];

      return nextErrors;
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    clearError(name);

    if (success) {
      setSuccess(false);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isSubmitting) return;

    setSuccess(false);

    const validationErrors = validateContact(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      await sendContactMessage(formData);

      setFormData(INITIAL_CONTACT_FORM);
      setSuccess(true);
    } catch (error) {
      setErrors({
        submit:
          error instanceof Error
            ? error.message
            : "We couldn't send your message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="sound-contact-form"
    >
      {/* Honeypot */}
      <div className="absolute left-[-9999px]" aria-hidden="true">
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

      {/* Name + Email */}
      <div className="grid gap-7 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="sound-contact-label">
            Name
            <span aria-hidden="true"> *</span>
          </label>

          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            autoComplete="name"
            maxLength={100}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={`sound-contact-input ${
              errors.name ? "sound-contact-input-error" : ""
            }`}
          />

          <FormFieldError
            id="name-error"
            message={errors.name}
          />
        </div>

        <div>
          <label htmlFor="email" className="sound-contact-label">
            Email
            <span aria-hidden="true"> *</span>
          </label>

          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            autoComplete="email"
            inputMode="email"
            maxLength={254}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={`sound-contact-input ${
              errors.email ? "sound-contact-input-error" : ""
            }`}
          />

          <FormFieldError
            id="email-error"
            message={errors.email}
          />
        </div>
      </div>

      {/* Phone */}
      <div className="mt-7">
        <label htmlFor="phone" className="sound-contact-label">
          Phone
        </label>

        <input
          id="phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          autoComplete="tel"
          inputMode="tel"
          maxLength={30}
          aria-invalid={Boolean(errors.phone)}
          aria-describedby={errors.phone ? "phone-error" : undefined}
          className={`sound-contact-input ${
            errors.phone ? "sound-contact-input-error" : ""
          }`}
        />

        <FormFieldError
          id="phone-error"
          message={errors.phone}
        />
      </div>

      {/* Address */}
      <div className="mt-7">
        <label htmlFor="address" className="sound-contact-label">
          Address
        </label>

        <input
          id="address"
          name="address"
          type="text"
          value={formData.address}
          onChange={handleChange}
          autoComplete="street-address"
          maxLength={200}
          aria-invalid={Boolean(errors.address)}
          aria-describedby={errors.address ? "address-error" : undefined}
          className={`sound-contact-input ${
            errors.address ? "sound-contact-input-error" : ""
          }`}
        />

        <FormFieldError
          id="address-error"
          message={errors.address}
        />
      </div>

      {/* Subject */}
      <div className="mt-7">
        <label htmlFor="subject" className="sound-contact-label">
          Subject
        </label>

        <input
          id="subject"
          name="subject"
          type="text"
          value={formData.subject}
          onChange={handleChange}
          maxLength={150}
          aria-invalid={Boolean(errors.subject)}
          aria-describedby={errors.subject ? "subject-error" : undefined}
          className={`sound-contact-input ${
            errors.subject ? "sound-contact-input-error" : ""
          }`}
        />

        <FormFieldError
          id="subject-error"
          message={errors.subject}
        />
      </div>

      {/* Message */}
      <div className="mt-7">
        <label htmlFor="message" className="sound-contact-label">
          Message
        </label>

        <textarea
          id="message"
          name="message"
          rows={6}
          value={formData.message}
          onChange={handleChange}
          maxLength={3000}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={`sound-contact-input sound-contact-textarea ${
            errors.message ? "sound-contact-input-error" : ""
          }`}
        />

        <FormFieldError
          id="message-error"
          message={errors.message}
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
          <CheckCircle2 size={20} aria-hidden="true" />

          <p>
            Thank you! Your message has been sent to Sound Fusion Entertainment.
          </p>
        </div>
      )}

      <div className="mt-9">
        <Button
          type="submit"
          disabled={isSubmitting}
          aria-busy={isSubmitting}
          className="min-w-40"
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
            <>
              Send Message
              <Send size={17} aria-hidden="true" />
            </>
          )}
        </Button>
      </div>
    </form>
  );
}