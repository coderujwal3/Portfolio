import { ContactError, submitContactMessage } from '../server/contact-service.js';

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'METHOD_NOT_ALLOWED' });
  }

  try {
    const result = await submitContactMessage(req.body);
    return res.status(200).json({ ok: true });
  } catch (error) {
    if (error instanceof ContactError) {
      const publicErrors = new Set([
        'INVALID_PAYLOAD', 'MISSING_FIELDS', 'FIELD_TOO_LONG',
        'INVALID_EMAIL', 'MESSAGE_TOO_SHORT', 'EMAIL_NOT_CONFIGURED',
      ]);
      return res.status(error.status || 400).json({
        ok: false,
        error: publicErrors.has(error.code) ? error.code : 'EMAIL_SEND_FAILED',
      });
    }

    console.error('Unexpected portfolio contact API error:', error?.name || 'unknown_error');
    return res.status(500).json({ ok: false, error: 'INTERNAL_ERROR' });
  }
}
