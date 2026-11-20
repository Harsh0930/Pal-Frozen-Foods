# Pal Frozen Foods

A responsive React experience for Pal Frozen Foods, with two distinct product worlds: Pal Fresh vegetables and Frozzo frozen snacks.

## Run locally

```sh
npm install
npm run dev
```

Create a production build with `npm run build`, or serve the generated `dist/` folder with `npm run preview`.

## What’s included

- Home, About, Products, Get In Touch, Gallery, and Privacy Policy routes.
- Brand-aware product catalogue with search, category and pack-size filters, and product quick views.
- Deep-linkable contact tabs, FAQ search, distributor enquiry, and careers application forms.
- Responsive navigation, keyboard-accessible gallery lightbox, reduced-motion support, and scroll/micro-interactions.

Product, FAQ, career, gallery, and privacy content lives in `src/data/`; `src/App.jsx` defines the route shell.

## Project layout

- `src/pages/` contains the routed page views.
- `src/components/common/` and `src/components/products/` contain shared UI.
- `src/context/` manages the active brand; `src/data/` holds catalog and page content.
- `src/assets/brands/` contains the Pal Fresh and Frozzo logos; `public/` contains the corporate logo and favicon.
- `src/styles/global.css` contains global and responsive styling.

## Brand typography

- Pal Fresh uses Eczar for display text and Quicksand for supporting text.
- Frozzo references Altier when available and falls back to system fonts. No Altier font file is included; add a properly licensed webfont to support consistent rendering for visitors who do not have Altier installed.