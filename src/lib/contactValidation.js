const EMAIL_REGEX =
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isWeddingEvent(eventTypes = []) {
  return eventTypes.some((event) =>
    event.startsWith("wedding-")
  );
}

export function validateContact(formData) {
  const errors = {};

  const name = formData.name.trim();
  const email = formData.email.trim();

  if (!name) {
    errors.name = "Please enter your name.";
  } else if (name.length > 100) {
    errors.name = "Name is too long.";
  }

  if (!email) {
    errors.email = "Please enter your email address.";
  } else if (!EMAIL_REGEX.test(email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (formData.phone.trim().length > 30) {
    errors.phone = "Phone number is too long.";
  }

  if (formData.address.trim().length > 200) {
    errors.address = "Address is too long.";
  }

  if (formData.subject.trim().length > 150) {
    errors.subject = "Subject is too long.";
  }

  if (formData.message.trim().length > 3000) {
    errors.message = "Message is too long.";
  }

  return errors;
}

export function validateContactForm(data) {
  const errors = {};

  const name = data.name.trim();
  const email = data.email.trim();
  const phone = data.phone.trim();
  const contractSigner = data.contractSigner.trim();
  const venue = data.venue.trim();

  if (!name) {
    errors.name = "Please enter your name.";
  }

  if (!email) {
    errors.email = "Please enter your email address.";
  } else if (!EMAIL_REGEX.test(email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!data.eventDate) {
    errors.eventDate = "Please select the event date.";
  }

  if (!phone) {
    errors.phone = "Please enter your phone number.";
  }

  if (!contractSigner) {
    errors.contractSigner = "Please enter the name of the person signing the contract.";
  }

  if (
    !Array.isArray(data.eventTypes) || data.eventTypes.length === 0
  ) {
    errors.eventTypes = "Please select at least one event type.";
  }

  if (!data.eventStartTime) {
    errors.eventStartTime = "Please enter the event start time.";
  }

  if (!data.eventEndTime) {
    errors.eventEndTime = "Please enter the event end time.";
  }

  if (!venue) {
    errors.venue = "Please enter the venue name and address.";
  }

  if (!data.basicPackage) {
    errors.basicPackage = "Please select a basic package.";
  }

  if (
    !Array.isArray(data.lightingAddons) || data.lightingAddons.length === 0
  ) {
    errors.lightingAddons = "Please select an option.";
  }

  if (isWeddingEvent(data.eventTypes)) {
    if (!data.weddingVenueSetup) {
      errors.weddingVenueSetup = "Please select the ceremony and reception setup.";
    }

    if (!data.setupCount.trim()) {
      errors.setupCount = "Please enter the number of setups required.";
    }

    if (!data.weddingRehearsal) {
      errors.weddingRehearsal = "Please select a rehearsal option.";
    }

    if (
      data.weddingRehearsal === "yes" && !data.rehearsalDetails.trim()
    ) {
      errors.rehearsalDetails = "Please provide the rehearsal date and times.";
    }

    if (!data.officiant) {
      errors.officiant = "Please select an officiant option.";
    }
  }

  return errors;
}