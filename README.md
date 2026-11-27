# Small Seasons — website

Static website for Small Seasons family, newborn and children's photography.
Plain HTML/CSS/JS: no build step, no framework, nothing to update or break. Hosted free on Netlify, managed from GitHub, edited in Cursor.

```
index.html        Home page (all main sections + enquiry form)
terms.html        Booking terms (template)
privacy.html      Privacy policy (template)
thank-you.html    Shown after someone submits the enquiry form
css/styles.css    All styling (colours at the top under :root)
js/main.js        Mobile menu, photo loading, form pre-select
images/           Your photos (see images/README.md)
```

## Things to replace before going live

Search the project (Cursor: Cmd/Ctrl+Shift+F) for these and replace them:

- `YOUR-HANDLE` → Instagram handle
- `£XX` / `£XXX` / `XX miles` → your prices and travel radius
- `[DATE]`, `[YOUR FULL NAME]`, `[X]` in terms.html and privacy.html
- About section text in index.html
- The Christmas banner in index.html (change or delete each season)

## Setup steps

1. **GitHub** — create a free account, then a repository. Upload this folder (drag-and-drop on github.com works, or use Cursor's Source Control panel → "Publish to GitHub").
2. **Cursor** — File → Open Folder → this folder. Edit, then commit and push from the Source Control panel. To preview locally, open `index.html` in your browser.
3. **Netlify** — sign in with GitHub → "Add new site" → "Import an existing project" → pick the repo. Leave build command empty, publish directory `/`. Every push to GitHub then redeploys automatically.
4. **Forms** — in Netlify → Site configuration → Forms, enable form detection, then redeploy. Under Forms → Notifications add an email notification to your inbox. Submit a test enquiry.
5. **Domain** — buy a `.co.uk` (e.g. via Netlify, Cloudflare or 123-reg), then add it under Netlify → Domain management. HTTPS is automatic.
6. **Email** — set up `hello@yourdomain` (Google Workspace or Zoho Mail) so you're not quoting a Gmail address to clients.
7. **Google Business Profile** — create one as a service-area business. For local photography this will likely bring more enquiries than the website itself.

## Payments

- **Now:** email invoices. Use Stripe Invoicing or your bank's invoicing (e.g. Starling) so clients can pay by card or transfer from the invoice. Take a booking fee upfront.
- **Later:** add Stripe Payment Links (one link per package or for gift vouchers) as "Book & pay" buttons — just a link in the HTML, no code changes needed.
- **When volume justifies it:** a photographer CRM (e.g. Dubsado, HoneyBook, Studio Ninja) with online booking, contracts and payments; embed its booking form in place of the Netlify form.
