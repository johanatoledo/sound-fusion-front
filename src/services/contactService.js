export async function sendContactRequest(
  formData
) {
  const response = await fetch(
    "/api/contact",
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(formData),
    }
  );

  const result = await response
    .json()
    .catch(() => null);

  if (!response.ok) {
    throw new Error(
      result?.message ||
        "Unable to send your request."
    );
  }

  return result;
}