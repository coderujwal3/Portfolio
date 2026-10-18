import { Resend } from 'resend';

const MAX = { name: 100, email: 254, subject: 140, message: 5000 };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export class ContactError extends Error {
  constructor(code, status = 400) {
    super(code);
    this.name = 'ContactError';
    this.code = code;
    this.status = status;
  }
}

export function validateContactPayload(payload) {
  if (!payload || typeof payload !== 'object' || Array.isArray(payload)) {
    throw new ContactError('INVALID_PAYLOAD');
  }

  // A quietly ignored honeypot catches unsophisticated bots without bothering humans.
  if (typeof payload.website === 'string' && payload.website.trim()) {
    return { honeypot: true };
  }

  const name = typeof payload.name === 'string' ? payload.name.trim() : '';
  const email = typeof payload.email === 'string' ? payload.email.trim() : '';
  const subject = typeof payload.subject === 'string' ? payload.subject.trim() : '';
  const message = typeof payload.message === 'string' ? payload.message.trim() : '';

  if (!name || !email || !subject || !message) throw new ContactError('MISSING_FIELDS');
  if (name.length > MAX.name || email.length > MAX.email || subject.length > MAX.subject || message.length > MAX.message) {
    throw new ContactError('FIELD_TOO_LONG');
  }
  if (!EMAIL_RE.test(email)) throw new ContactError('INVALID_EMAIL');
  if (message.length < 15) throw new ContactError('MESSAGE_TOO_SHORT');

  return { name, email, subject: subject.replace(/[\r\n]+/g, ' '), message, honeypot: false };
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  })[character]);
}

export async function submitContactMessage(payload) {
  const clean = validateContactPayload(payload);
  if (clean.honeypot) return { ok: true, ignored: true };

  const apiKey = process.env.RESEND_API_KEY;
  const destination = process.env.CONTACT_TO_EMAIL;
  const sender = process.env.RESEND_FROM_EMAIL || 'Ujwal Singh <portfolio@contact.ujwalsingh.tech>';

  if (!apiKey || !destination) {
    throw new ContactError('EMAIL_NOT_CONFIGURED', 503);
  }

  const resend = new Resend(apiKey);
  const { data, error } = await resend.emails.send({
    from: sender,
    to: [destination],
    replyTo: clean.email,
    subject: `[Portfolio] ${clean.subject}`,
    text: [
      'New message from your portfolio website',
      '',
      `Name: ${clean.name}`,
      `Email: ${clean.email}`,
      `Subject: ${clean.subject}`,
      '',
      clean.message,
    ].join('\n'),
    html: `
      <div style="font-family:Arial,sans-serif;color:#202a3b;line-height:1.65;max-width:640px;margin:auto">
        <p style="font-size:12px;text-transform:uppercase;letter-spacing:.12em;color:#5268d9;font-weight:700">Portfolio enquiry</p>
        <h2 style="margin:0 0 18px">You received a new message</h2>
        <table style="border-collapse:collapse;width:100%;font-size:14px">
          <tr><td style="padding:8px 0;color:#68758a;width:90px">Name</td><td style="padding:8px 0;font-weight:600">${escapeHtml(clean.name)}</td></tr>
          <tr><td style="padding:8px 0;color:#68758a">Email</td><td style="padding:8px 0"><a href="mailto:${escapeHtml(clean.email)}">${escapeHtml(clean.email)}</a></td></tr>
          <tr><td style="padding:8px 0;color:#68758a">Subject</td><td style="padding:8px 0">${escapeHtml(clean.subject)}</td></tr>
        </table>
        <hr style="border:none;border-top:1px solid #e2e6ee;margin:16px 0" />
        <p style="white-space:pre-wrap;margin:0">${escapeHtml(clean.message)}</p>
      </div>
    `,
  });

  if (error || !data?.id) {
    // Avoid exposing provider details, account state, or secrets to the visitor.
    console.error('Portfolio email delivery failed:', error?.name || 'unknown_resend_error');
    throw new ContactError('EMAIL_SEND_FAILED', 502);
  }

  return { ok: true, id: data.id };
}
