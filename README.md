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
└── js/
    ├── config.js      Every contact detail that can still change — edit this, nothing else
    └── main.js         Reads config.js and wires it into every page; mobile menu
```

No build step, no framework, no dependencies to install — open `index.html` directly in a browser, or serve the folder with any static host.

## How updating contact info works now

`js/config.js` is the only file you should ever need to touch after today. It's loaded on every page, so a value only needs to be entered once:

```js
window.TRAVELTHING = {
  facebookUrl: null,   // e.g. "https://facebook.com/travelthing"
  websiteUrl: null,    // your original website's URL
  email: null,          // e.g. "hello@travelthing.com"
  address: null,        // e.g. "House 12, Road 5, Dhanmondi, Dhaka"
  hours: null           // e.g. "Sun–Thu, 10:00 AM – 7:00 PM"
};
```

- While a value is `null`, that channel shows as **"coming soon"** (Facebook / website buttons) or **stays hidden** (email / office / hours) — never a fake or dead link.
- The moment you fill in a value and save, it appears correctly on every page — header, footer and contact page — automatically. No more hunting through 4 HTML files.
- The WhatsApp number (`+880 1886-117181`) is already live and working everywhere.

This is also why the previous version counted as "bugged": the same links were pasted by hand into every page, so any future edit risked missing one file and leaving pages out of sync. That class of bug is no longer possible — there's exactly one place to change a contact detail.

## Before you launch — still needed

- Facebook Page URL
- Your original/main website URL
- Email address (optional — leave `null` if you don't want to publish one)
- Office address and hours (optional, same reasoning)
- Any corrections to the six services listed (flights, holidays, visas, hotels, corporate travel, group tours)

## Deploying on GitHub Pages

1. Create a new GitHub repository and push this folder to it.
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to `Deploy from a branch`, branch `main`, folder `/ (root)`.
4. Save — GitHub gives you a live URL a minute or two later (`https://<username>.github.io/<repo>/`).

## Design notes

- Palette: navy (`#10233F`), gold (`#A9782F`), ivory (`#F5F4EF`) — a classic/corporate travel-agency direction.
- Fonts: Libre Caslon Display (headings), Public Sans (body), Space Mono (airport-code style tags) — loaded from Google Fonts in `style.css`.
- Recurring motif: dotted flight-path lines and airport codes (hero graphic), dashed ticket-stub dividers (service rows) — ties the layout back to the subject matter instead of generic cards.
- Favicon is an inline SVG (the same plane mark used in the logo) — no image file needed.
- Footer copyright year updates itself automatically (`js/main.js`), so it never goes stale.

## Validated

All four pages pass HTML5 markup validation (checked with HTML Tidy) and both JS files pass a syntax check (`node --check`). No literal placeholder text remains on any page — unresolved items are handled by `config.js` as described above.
