async function postContactForm(formData, fallbackMessage) {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  const data = await response.json().catch(() => null);

  if (!response.ok) {
    throw new Error(
      data?.message || fallbackMessage
    );
  }

  return data;
}

export function sendContactMessage(formData) {
  return postContactForm(
    formData,
    "We couldn't send your message. Please try again."
  );
}

export function sendContactRequest(formData) {
  return postContactForm(
    formData,
    "Unable to send your request."
  );
}