# TEDxWittyIntlSchoolYouth — Website

Single-page site. Black / white / TEDx red only, Metamorphosis theme
built into the background motif (fragmented shapes near the top,
smoother shapes further down the page) and into a small scroll-driven
morph icon fixed in the bottom-right corner.

## Files

- `index.html` — all page content and structure
- `style.css` — all styling (colors, fonts, layout)
- `script.js` — countdown timer + corner morph animation
- `assets/logo.png` — your TEDx logo (already included)

Open `index.html` directly in a browser to preview it locally, or
paste the relevant parts into your CMS's custom HTML/code block.

---

## Things you still need to edit

### 1. Ticket / registration link
Two places link to your ticket form. In `index.html`, find:

```html
<a href="#" id="ticketLink" class="btn-primary btn-large">Get tickets</a>
```
(in the **Register** section, and also the "Get tickets" button in
the Hero section near the top)

Replace `href="#"` with your real Google Form / ticketing URL, e.g.:
```html
<a href="https://forms.gle/your-form-id" ...>
```

### 2. Venue / map
In `index.html`, find the **Location** section:
```html
<iframe id="mapEmbed" src="" ...></iframe>
```
Once your venue is confirmed:
1. Go to Google Maps, search your venue, click **Share** → **Embed a map**
2. Copy the URL inside `src="..."` from the embed code Google gives you
3. Paste it into the `src=""` above
4. Also update the text `Venue to be announced.` just above it with
   your actual venue name/address.

### 3. Event date/time (countdown)
In `script.js`, near the top:
```js
const EVENT_DATE = new Date("2026-10-10T09:00:00");
```
Already set to October 10, 2026, 9:00 AM. Change the time if your
event starts at a different hour, using 24-hour format
(`"2026-10-10T14:30:00"` = 2:30 PM).

### 4. Sponsor logos
In `index.html`, find the **Sponsors** section and the footer. Each
placeholder looks like:
```html
<div class="sponsor-slot">Title sponsor</div>
```
Replace with:
```html
<div class="sponsor-slot"><img src="assets/sponsor-name.png" alt="Sponsor name"></div>
```
Drop your logo image files into the `assets/` folder first, then
reference them by filename. Do the same for the smaller footer row
(`sponsor-slot small`).

### 5. Organizing committee (OC)
In `index.html`, find the **Organizing committee** section. Each
member is a block like:
```html
<div class="oc-card">
  <div class="oc-avatar"></div>
  <p class="oc-name">Name</p>
  <p class="oc-role">Role</p>
</div>
```
Replace `Name` / `Role` with real details. To add a photo, replace
`<div class="oc-avatar"></div>` with
`<img class="oc-avatar" src="assets/member-name.jpg" alt="Name">`
(the avatar is styled as a circle automatically).

### 6. Speaker lineup
Currently shows "Yet to be revealed" by design. When you're ready to
reveal speakers, replace the contents of the `<section id="speakers">`
block with actual speaker cards — ask for a follow-up build when
you're ready, since the layout will need to change from a suspense
treatment to a speaker grid.

### 7. Theme / about copy
Both are plain paragraphs inside `<section id="theme">` in
`index.html` — edit the text directly, no special formatting needed.

---

## Colors

All colors are defined once at the top of `style.css`:

```css
:root {
  --black: #0a0a0a;
  --red: #e62b1e;
  --white: #ffffff;
  ...
}
```

Change a value here and it updates everywhere that variable is used.

## Notes

- The corner scroll-indicator (bottom-right) is decorative only — it
  will not block clicks on anything beneath it.
- The site respects `prefers-reduced-motion` for accessibility.
- No external dependencies — no build step, no npm install required.
  Just static HTML/CSS/JS.
