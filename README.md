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
