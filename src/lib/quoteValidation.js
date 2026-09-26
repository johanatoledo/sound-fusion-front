import { isPastDate } from "@/lib/date";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateQuoteForm(formData) {
  const errors = {};

  const customerName = formData.customerName.trim();
  const email = formData.email.trim();
  const phone = formData.phone.trim();
  const eventLocation = formData.eventLocation.trim();

  if (!customerName) {
    errors.customerName = "Please enter your name.";
  }

  if (!email) {
    errors.email = "Please enter your email.";
  } else if (!EMAIL_REGEX.test(email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!phone) {
    errors.phone = "Please enter your phone number.";
  }

  if (!formData.eventType) {
    errors.eventType = "Please select an event type.";
  }

  if (!formData.eventDate) {
    errors.eventDate = "Please select your event date.";
  } else if (isPastDate(formData.eventDate)) {
    errors.eventDate = "The event date cannot be in the past.";
  }

  if (!eventLocation) {
    errors.eventLocation = "Please enter the event location.";
  }

  if (
    formData.guestCount &&
    Number(formData.guestCount) < 1
  ) {
    errors.guestCount =
      "Guest count must be greater than zero.";
  }

  if (
    !Array.isArray(formData.services) ||
    formData.services.length === 0
  ) {
    errors.services =
      "Please select at least one service.";
  }

  return errors;
}