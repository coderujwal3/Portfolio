const errorMessages = {
  MISSING_FIELDS: 'Please complete every field.',
  INVALID_EMAIL: 'That email address does not look valid.',
  MESSAGE_TOO_SHORT: 'Please add a little more detail to your message.',
  FIELD_TOO_LONG: 'One of the fields is longer than allowed.',
  EMAIL_NOT_CONFIGURED: 'The contact service is not configured yet. Please try again later.',
  EMAIL_SEND_FAILED: 'Your message could not be sent right now. Please try again shortly.',
  INTERNAL_ERROR: 'Something went wrong. Please try again shortly.',
};

export async function sendContactMessage(form) {
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(form),
  });
  const result = await response.json().catch(() => ({}));

  if (!response.ok || !result.ok) {
    throw new Error(errorMessages[result.error] || 'Unable to send your message. Please try again.');
  }
}
