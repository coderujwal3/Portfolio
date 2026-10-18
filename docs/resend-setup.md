# Resend setup and troubleshooting

## Intended email flow

Visitor fills the form → browser sends `POST /api/contact` → server validates input → Resend sends an email from the verified sender on `contact.ujwalsingh.tech` to `CONTACT_TO_EMAIL` → visitor's email is set as `Reply-To` so replying from the inbox addresses the person who contacted you.

## DNS checklist

- Add `contact.ujwalsingh.tech` as the sending domain in Resend.
- Copy DNS records from the Resend dashboard exactly. Names, priorities and values can differ by account or domain provider.
- Make sure you're editing DNS at the provider indicated by the domain's authoritative nameservers.
- If your DNS editor auto-appends `ujwalsingh.tech`, enter only the host portion it expects.
- Avoid duplicate SPF TXT records at the same hostname. If an SPF record already exists at that hostname, consolidate according to the DNS/email provider requirements rather than adding another independent SPF record.
- Keep `ujwalsingh.tech` website records and any existing email provider records intact unless you know a change is required.
- Verify the domain in Resend after DNS propagation.

## Test checklist

1. Confirm `RESEND_API_KEY` exists in the server environment.
2. Confirm `CONTACT_TO_EMAIL` points to a real inbox you can check.
3. Confirm `RESEND_FROM_EMAIL` uses the exact verified sending domain.
4. Send a message with a valid email address and a message of at least 15 characters.
5. Check the endpoint response in browser DevTools, the Resend email logs, and the receiving inbox's spam/promotions folders.

## Common errors

- `EMAIL_NOT_CONFIGURED`: missing `RESEND_API_KEY` or `CONTACT_TO_EMAIL` in the current environment.
- `EMAIL_SEND_FAILED`: Resend rejected the send or returned no email ID. Check the Resend dashboard/logs; the public API intentionally avoids exposing provider errors to strangers.
- Resend sender/domain error: the domain may not be verified, or the `from` address may not belong to the verified domain.
- Email does not arrive: check verified DNS records, Resend send logs, receiving inbox spam/quarantine and provider-side restrictions.
- Local form request fails: run `npm run dev`, not only `npm run dev:web`; the first runs both Vite and the local Express API.

This project sends outbound messages only. It does not make `portfolio@contact.ujwalsingh.tech` a receiving mailbox. Configure inbound mail separately if you also need to receive messages sent directly to that address.
