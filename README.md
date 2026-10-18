# Ujwal Singh — Portfolio

A responsive portfolio built with React, Vite, Tailwind CSS and a custom neumorphic design system. Includes routed pages, shared navigation and layout, a dark/light theme toggle, project filter, motion-enhanced sections, and a server-side Resend contact form.

## Stack

- React + Vite
- React Router for client-side page navigation
- Tailwind CSS 4 + custom neumorphic CSS tokens
- Framer Motion for restrained reveal transitions
- Lucide React icons
- Resend Node.js SDK for transactional email
- Vercel Functions for the production `/api/contact` endpoint
- Express development endpoint for local email testing

## Run locally

Requirements: Node.js 20+ and npm.

```bash
npm install
cp .env.example .env
# Edit .env; see Environment variables below.
npm run dev
```

Vite runs the frontend at `http://localhost:5173` and proxies `/api/*` to the local Express API on port `3001`. The contact form will only send successfully after the Resend and recipient environment variables are configured.

Build and inspect the static frontend:

```bash
npm run build
npm run preview
```

## Environment variables

| Variable | Required | Description |
|---|---:|---|
| `RESEND_API_KEY` | Yes | Server-only Resend API key. Never prefix it with `VITE_`. |
| `CONTACT_TO_EMAIL` | Yes | The inbox where portfolio enquiries should arrive. Set this to an inbox you can access. |
| `RESEND_FROM_EMAIL` | Recommended | Verified sender identity, e.g. `Ujwal Singh <portfolio@contact.ujwalsingh.tech>`. |
| `PORT` | Local only | Local contact API port; defaults to `3001`. |

For Vercel, add the first three under **Project → Settings → Environment Variables** for Production and Preview as appropriate. Redeploy after changing variables.

## Resend domain setup

1. Open the Resend dashboard and add `contact.ujwalsingh.tech` as a sending domain.
2. Select the region that matches your Resend account/app setup and copy the DNS records Resend displays for this exact domain.
3. Add those records at the authoritative DNS provider for `ujwalsingh.tech`. Use each record's exact type, name/host, value, and priority shown by Resend; DNS hosts sometimes append the root domain automatically.
4. Verify the domain in Resend and wait until the required sending/authentication records show as verified.
5. Set `RESEND_FROM_EMAIL` to an address on that verified subdomain, such as `Ujwal Singh <portfolio@contact.ujwalsingh.tech>`.
6. Set `CONTACT_TO_EMAIL` to your actual receiving inbox. This is where website enquiries are delivered; it does not have to be the sender address.
7. Submit a real test enquiry and check the Resend email logs plus the receiving inbox's spam folder.

**DNS caution:** do not guess or copy generic DNS records from a tutorial. The Resend dashboard is the source of truth for the records it generated for your domain. Do not replace the root domain's existing MX records or create a second SPF TXT record at the same hostname. Sending authentication on `contact.ujwalsingh.tech` is separate from configuring an inbox to receive mail at that subdomain; receiving mail requires a separate inbound-mail setup/provider.

## Deploy to Vercel

1. Push this project to a Git repository you control.
2. Import the repository into Vercel. Vercel should detect Vite; use `npm run build` and `dist` as the output directory.
3. Add `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, and `RESEND_FROM_EMAIL` to Vercel Environment Variables.
4. Add `ujwalsingh.tech` to the project under **Settings → Domains** and follow Vercel's displayed DNS instructions at your domain provider. Keep the Resend records for `contact.ujwalsingh.tech` intact.
5. Redeploy, then test the contact form on the deployed domain.

The frontend can also be hosted elsewhere, but `/api/contact` currently uses Vercel's Node.js function conventions. For a different host, adapt the server endpoint to that host's serverless/runtime contract.

## Security notes

- Resend credentials are read only from server-side environment variables.
- The contact endpoint validates field types, lengths and email format; it HTML-escapes content before building the HTML email; it sets `Reply-To` to the visitor's submitted email and does not trust arbitrary HTML from the form.
- A hidden honeypot field catches only basic bots. It is **not** durable rate limiting. Before the site receives meaningful public traffic, add server-side rate limiting (for example, a Redis/Upstash limiter or an appropriately configured Vercel WAF rule) and consider a CAPTCHA/Turnstile challenge if abuse becomes an issue.
- Keep the receiving email out of the client bundle unless you deliberately want it public. Never add secrets to a `VITE_*` variable.
- The app does not yet persist messages to a database or implement an admin inbox. Delivery is handled by Resend and can be audited in its dashboard.

## Personalization checklist

- Confirm project names, descriptions and statuses in `src/data/portfolio.js` before publishing.
- Add exact LinkedIn / other social URLs if you want them shown; the site currently includes only the GitHub and YouTube URLs available in the project brief.
- Add a real downloadable resume if desired (for example `public/Ujwal-Singh-Resume.pdf`) and then add a resume CTA in the hero.
- Add a profile image only if you want the abstract monogram visual replaced.
- Replace default SEO/Open Graph copy in `index.html` with final copy after deployment.

## Source structure

- `src/pages/` — route-level page components
- `src/components/layout/` — shared site header, footer and page shell
- `src/components/sections/` — portfolio content sections used by pages
- `src/components/ui/` — reusable presentation components
- `src/data/portfolio.js` — project, skill, experience and credential content
- `src/hooks/` — reusable React hooks, including theme persistence
- `src/services/` — API integration for the contact form
- `src/App.jsx` — route definitions
- `src/index.css` — theme tokens, neumorphic styling and responsive layout
- `server/contact-service.js` — shared validation and Resend email logic
- `api/contact.js` — production Vercel endpoint
- `server/dev-server.js` — local API endpoint
- `docs/resend-setup.md` — email/domain troubleshooting
