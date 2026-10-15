# Eastbound · China Journey 2026

An animated, responsive React + Vite + GSAP itinerary website for two travelers. Static deployment; no backend required.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Vercel

Import the repo into Vercel, select **Vite** if prompted; build command `npm run build`; output directory `dist`. No environment variables needed.

## Netlify / Cloudflare Pages

Build command `npm run build`, publish directory `dist`.

## Data, prices and images

- Edit `src/data.js` for itinerary stops, hotel area planning, comparisons, sources, and remote photo URLs. Detailed CSS in `src/style.css`.
- Images currently load directly from Unsplash CDN URLs, need internet, and are illustrative. Replace with your own licensed local images in `public/images/` or stable licensed remote URLs as desired. Local images can be referenced as `/images/filename.jpg`.
- Browser journal and checkbox state are saved to `localStorage` on the current device only. A JSON export is offered. Long-term, high-resolution shared photo storage needs a backend (Supabase/Cloudinary/etc.).
- Travel fares and time windows are not real-time bookings. China Eastern international segments are confirmed from ticket; Shenzhen → Beijing and hotels are not booked.
- The 26 Oct Kunming evening excursion is conditional on immigration, visa, baggage, city access and return buffers. No city visit during the 80-minute return transit on Nov 5.
- Last night before the Beijing 07:10 flight should be near PKX with pre-confirmed early transport.

## Flight details

26 Oct: DAC 14:00 → KMG 18:20 (local). 27 Oct: KMG 08:10 → CAN 10:05. 5 Nov: PKX 07:10 → KMG 10:35 → DAC 13:00 (KMG departure 11:55). Airline: China Eastern.

## Source checks

Use official sources linked in the site before booking. Current price estimates are illustrative only and must be verified against dated, traveler-specific quotes.
