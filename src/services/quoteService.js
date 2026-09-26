const API_URL = process.env.NEXT_PUBLIC_API_URL;

function buildQuotePayload(formData) {
  return {
    customer_name: formData.customerName.trim(),
    email: formData.email.trim().toLowerCase(),
    phone: formData.phone.trim(),
    event_type: formData.eventType,
    event_date: formData.eventDate,
    event_location: formData.eventLocation.trim(),

    guest_count: formData.guestCount
      ? Number(formData.guestCount)
      : null,

    services: formData.services,

    message: formData.message.trim() || null,
  };
}

export async function createQuote(formData) {
  if (!API_URL) {
    throw new Error(
      "NEXT_PUBLIC_API_URL is not configured."
    );
  }

  const payload = buildQuotePayload(formData);

  const response = await fetch(
    `${API_URL}/api/quotes`,
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(payload),
    }
  );

  const data = await response
    .json()
    .catch(() => null);

  if (!response.ok) {
    throw new Error(
      data?.message ||
        "Unable to send quote request."
    );
  }

  return data;
}