async function sendContactRequest(formData, request = fetch) {
  const response = await request("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  });
  if (!response.ok)
    throw new Error(
      "Unable to send your enquiry. Please try again or contact our team directly.",
    );
}
module.exports = { sendContactRequest };
