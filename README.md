# Travelthing

A simple, static informational website for Travelthing — flights, holiday packages, visas, hotel booking, corporate travel and group tours.

## Structure

```
travelthing/
├── index.html      Home
├── about.html       About / how we work
├── services.html    Full service list
├── contact.html      WhatsApp / Facebook / website + details
├── css/style.css     All styling (one shared stylesheet)
└── js/main.js         Mobile menu toggle
```

No build step, no framework — open `index.html` directly in a browser, or serve the folder with any static host.

## Before you launch — replace these placeholders

Search each HTML file for the following and swap in the real values (they currently appear in the header, footer and contact page):

| Placeholder | Where | Status |
|---|---|---|
| WhatsApp number | header, footer, contact page | ✅ Done — `+880 1886-117181` (`https://wa.me/8801886117181`) |
| `https://facebook.com/travelthing` | header, footer, contact page | Still a placeholder — swap for your real Facebook Page URL |
| `https://travelthing.example.com` | footer, contact page | Your real/original website URL |
| `hello@travelthing.example.com` | contact page | Your real email, if you use one |
| Bracketed text like `[Placeholder — ...]` | about.html, services.html, contact.html | Your real copy — office hours, address, story, group tour details |

## Deploying on GitHub Pages

1. Create a new GitHub repository and push this folder to it.
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to `Deploy from a branch`, branch `main`, folder `/ (root)`.
4. Save — GitHub gives you a live URL a minute or two later (`https://<username>.github.io/<repo>/`).

## Design notes

- Palette: navy (`#10233F`), gold (`#A9782F`), ivory (`#F5F4EF`) — a classic/corporate travel-agency direction.
- Fonts: Libre Caslon Display (headings), Public Sans (body), Space Mono (airport-code style tags) — loaded from Google Fonts in `style.css`.
- Recurring motif: dotted flight-path lines and airport codes (hero graphic), dashed ticket-stub dividers (service rows) — ties the layout back to the subject matter instead of generic cards.
