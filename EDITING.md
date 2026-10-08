# Customer Editing Guide — seashell-vows

This template is a coastal Goa beach wedding invitation featuring a tap-to-open video opener gate, watercolour couple portrait, interactive lantern-wish animation, celebration event cards, and venue map.

---

## Normal Customer Changes

All routine customer edits are configured in:
→ [editable/wedding-data.js](file:///Users/amnas/Desktop/h2track/seashell-vows/editable/wedding-data.js)

### Couple Names & Tagline
Edit `couple` in `editable/wedding-data.js`:
- `groom` & `bride`: First names (e.g. `"Aarav"`, `"Ananya"`)
- `tagline`: Subtitle phrase (e.g. `"Two souls, one shore"`)

### Wedding Date & Timeline Events
Edit `wedding`, `events`, and `eventDates` in `editable/wedding-data.js`:
- `dateLabel`: Display date for hero/footer (e.g. `"Saturday, 14 February 2026"`)
- `weddingISO`: ISO 8601 timestamp for primary ceremony
- `events[]`: Array of celebrations (Haldi, Mehendi, Sangeet, Wedding, Reception) with name, glyph, date, time, venue, and note
- `eventDates`: Key-value map of ISO timestamps for generating multi-event calendar entries

### Venue & Maps
Edit `venue` in `editable/wedding-data.js`:
- `name`: Venue name (e.g. `"Sea Pearl Resort"`)
- `address`: Full postal address
- `mapsUrl`: Google Maps link for directions button

### Images & Media
Replace files directly in `editable/assets/` or update paths in `editable/wedding-data.js`:
- Couple portrait: `editable/assets/couple.jpg`
- Hero backdrop: `editable/assets/hero-arch.jpg`
- Background music: `editable/assets/bg-music.mp3`
- Rings & vignette: `editable/assets/rings-seashell-vignette.png`
- Venue map graphic: `editable/assets/venue-map-Wf_iSDI1.jpg`
- Venue directions QR code: `editable/assets/venue-qr.png`
- Footer wash backdrop: `editable/assets/footer-wash-DG1rtX_C.jpg`
- Opener video: `editable/assets/wedding-opener.mp4`

---

## Special Sections & Features

- **Tap-to-Open Video Gate**: Plays opening video sequence before revealing the full wedding invitation.
- **Send a Wish**: Interactive lantern release animation upon clicking "Release lanterns".
- **Multi-Event Calendar Export**: Downloadable `.ics` file containing all itinerary events.
- **Scroll Reveal**: Sections fade and slide into view on scroll.

---

## Rules for Future Agents

1. Make edits in `editable/wedding-data.js` and swap files in `editable/assets/`.
2. Do not modify bundled code in `assets/` unless structural changes are explicitly requested.
3. Verify syntax with `node --check editable/wedding-data.js` after making edits.
