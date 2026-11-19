# EDAS Group website (Next.js)

Next.js version of the EDAS Group website. It matches the original HTML site pixel for pixel (checked on every page at 1440, 1024, 820 and 390 px wide, in both light and dark mode). It also behaves the same: carousel, dropdown, logo marquee, CAD/render slider, style tabs, enquiry forms and copy buttons.

- **Next.js 16.4.6** (App Router) · **React 19.3.1** · JavaScript + JSX (no TypeScript)
- Every page is prerendered as static HTML, so pages load fast and are fully indexable by search engines.
- Fonts (Inter and Manrope) are self-hosted through `@fontsource`. The site doesn't depend on Google Fonts at runtime.
- Exact package versions are pinned in `package.json`, and `package-lock.json` is included, so every install gets the same versions.

## Requirements

Node.js **20.9 or newer** (Node 22 LTS recommended).

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
```

## Production

```bash
npm run build
npm start          # serves the production build on port 3000
npm run lint       # ESLint (eslint-config-next)
```

## Deploy

- **Vercel** (simplest): import the repository. No settings needed.
- **Any Node host** (VPS, Hostinger Node.js, Render, Railway): run `npm ci && npm run build`, then `npm start` (use `-p <port>` if needed, for example behind Nginx or PM2).
- Links to the old `.html` addresses (e.g. `/about.html`) permanently redirect (308) to the new clean URLs (`/about`).

## Project structure

```
app/
  layout.jsx                 shared shell: fonts, stylesheet, header, footer
  site.css                   the original stylesheet (unchanged except for the two notes below)
  page.jsx                   Home
  about/page.jsx             About Us
  advisory/page.jsx          Advisory (EDAS Asset Advisors)
  construction/page.jsx      Construction (EDAS Projects)
  the-edas-promise/page.jsx  The EDAS Promise
  careers/page.jsx           Careers
  contact/page.jsx           Contact Us
components/
  Header.jsx        top strip, logo, navigation, Construction dropdown
  Footer.jsx
  HeroCarousel.jsx  home hero slides (auto-advance every 6.5 s, pauses on hover/focus)
  ClientMarquee.jsx scrolling client logos
  CompareSlider.jsx CAD drawing vs. render slider
  StyleTabs.jsx     "Choose your style" tabs (edit the STYLES list to change content)
  EnquiryForm.jsx   enquiry forms (validation + thank-you note)
  CopyButton.jsx    "Copy" buttons next to email addresses
  ScrollToTop.jsx   every page opens at the top
  Icons.jsx         shared SVG icons
public/assets/img/  all images, unchanged
next.config.mjs     redirects from the old .html URLs
```

## Notes

- The enquiry forms have no backend yet (same as the original). A valid submit shows the "Thank you" note that points people to the email address. To receive submissions, connect `EnquiryForm.jsx` to an API route or a form service.
- Images use plain `<img>` tags on purpose, so they render exactly like the original design (`next/image` would change their sizing and compression).
- Two changes in `site.css`, neither of which changes how anything looks:
  1. The background-image path of `.bg-plan` points to `/assets/img/...` (needed by the Next.js bundler).
  2. The route-map pin's `rotate` is in its own rule, because the build's CSS optimiser would otherwise merge it into `transform` and move the pins.
