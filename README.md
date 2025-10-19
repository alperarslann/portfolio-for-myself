## Beautiful Portfolio (Vite + React)

Quick steps to run locally:

1. Install dependencies
	 - npm install
2. Start the dev server
	 - npm run dev
	 - The server will open in your browser. By default it's http://localhost:5173 (or the next available port).

Troubleshooting:

- Port already in use
	- Close the other app using the port or let Vite use a different one. The config allows auto fallback.
- Cannot reach on localhost
	- Ensure no VPN/firewall is blocking. The server listens on all interfaces.
- Node version
	- Use Node 18+ or 20+ (recommended). You can check with `node -v`.

Other scripts:

- Build for production: npm run build
- Preview build locally: npm run preview

Email (EmailJS) Setup:

1. Create an account at https://www.emailjs.com/ and add a service and template.
2. Copy `.env.example` to `.env` and fill:
	 - VITE_EMAILJS_SERVICE_ID
	 - VITE_EMAILJS_TEMPLATE_ID
	 - VITE_EMAILJS_PUBLIC_KEY
3. Restart the dev server after editing `.env`.

