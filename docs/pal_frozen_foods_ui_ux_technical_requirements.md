# Product & UI/UX Requirements Document: Pal Frozen Foods

**Document Version:** 1.0  
**Role:** Senior UI/UX Designer & Frontend Architect  
**Brand Umbrella:** Pal Frozen Foods  
**Sub-Brands:** Pal Fresh (Frozen Vegetables) & Frozzo (Frozen Snacks)  

---

## 1. Executive Summary & UX Vision

### 1.1 Project Overview
**Pal Frozen Foods** requires a modern, high-converting, and tactile web experience that seamlessly bridges two distinct consumer moods under one trusted corporate umbrella:
1. **Pal Fresh:** Wholesome, farm-harvested, nutrient-locked frozen vegetables designed for everyday healthy cooking.
2. **Frozzo:** Bold, crispy, indulgent frozen snacks engineered for quick cravings, gatherings, and HoReCa (Hotel, Restaurant, Café) excellence.

### 1.2 Core Design Philosophy: *"Dual-Sensory Immersion"*
Rather than forcing both product lines into a generic template, the UI dynamically adapts to the brand the user is exploring:
* **Pal Fresh Aesthetic:** Sunlit, crisp, botanical, organic, and airy—evoking morning harvest dew and Individually Quick Frozen (IQF) freshness.
* **Frozzo Aesthetic:** Sub-zero, high-contrast, energetic, and sleek—evoking deep-freeze precision, midnight cravings, and golden crunch.

---

## 2. Approved Technology Stack & Architecture

All design and engineering implementations must strictly utilize the following stack:

| Layer | Technology | Role & Implementation Guidelines |
| :--- | :--- | :--- |
| **Markup & Styling** | **HTML5 & CSS3** | Semantic HTML5 landmarks (`<header>`, `<main>`, `<section>`, `<nav>`, `<footer>`), CSS Custom Properties (Variables) for instant theme switching, CSS Grid & Flexbox, fluid `clamp()` typography. |
| **Core Framework** | **React (v18+)** | Component-driven architecture using Functional Components, Custom Hooks, and React Context API (`BrandThemeContext`) to manage global/page-level brand states. |
| **UI Component Library** | **React Material UI (MUI)** | Core layout grids (`Grid2`, `Container`, `Stack`), accessible form controls (`TextField`, `Select`, `Autocomplete`), navigation (`Drawer`, `Tabs`, `Accordion`), and feedback (`Dialog`, `Snackbar`, `Chip`). Styled via MUI `ThemeProvider` + `sx` prop. |
| **Layout & Gesture Motion** | **Framer Motion** | Shared-element transitions (`layoutId` for the Pal Fresh / Frozzo brand switch), page route transitions (`AnimatePresence`), spring-physics hover/tap micro-interactions. |
| **Scroll Choreography** | **GSAP + ScrollTrigger** | Smooth parallax depth on hero imagery, pinned storytelling sections (Farm-to-Freezer journey), staggered grid reveals, and scroll-linked progress indicators. |
| **SVG & Particle Micro-FX** | **Anime.js** | SVG line-drawing animations (leaf veins, frost crystals, cold-chain routes), morphing organic/geometric blob backdrops, and subtle floating frost particle effects. |
| **Typography** | **Google Fonts** | High-craft font pairing loaded via `preconnect` and `display=swap` for optimal Core Web Vitals. |

---

## 3. Design System & Dual-Brand Visual Identity

### 3.1 Color Palette & Theme Tokens

#### A. Corporate Umbrella (Default / Neutral Mode)
* **Pure Frost White:** `#FFFFFF` (Primary surface)
* **Alabaster Mist:** `#F5F8FA` (Secondary section background)
* **Slate Charcoal:** `#121D24` (Primary body text)
* **Muted Steel:** `#5A6B75` (Secondary captions & metadata)

#### B. Pal Fresh Brand Palette (Frozen Vegetables)
* **Primary Leaf Green:** `#6a9a1b` — Primary CTAs, active pill states, progress bars, botanical accents.
* **Deep Forest Green:** `#206040` — Headings, footer accents, high-contrast badges, dark overlay gradients.
* **Zest Harvest Yellow:** `#e7e22f` — Micro-highlights, "Farm Fresh" tags, hover glows, interactive badges *(paired with `#206040` text for WCAG AA contrast)*.
* **Surface Tint:** `rgba(106, 154, 27, 0.06)` — Soft organic section tint.

#### C. Frozzo Brand Palette (Frozen Snacks)
* **Glacier Cyan:** `#63b5c9` — Primary highlights, glowing borders, active toggle indicator, crisp icons.
* **Arctic Teal Blue:** `#2487ac` — Primary buttons, interactive gradients, card hover accents.
* **Deep Freeze Midnight:** `#020f14` — Dark mode canvas background for Frozzo sections/view.
* **Sub-Zero Navy:** `#022732` — Elevated card surfaces, glassmorphic modals, navigation bar backdrop in Frozzo mode.

### 3.2 Typography System (Google Fonts)
* **Display & Headings:** `'Outfit'` or `'Plus Jakarta Sans'` (Weights: 600, 700, 800) — Modern geometric structure with approachable curves; tight letter-spacing (`-0.02em`).
* **Body & UI Controls:** `'DM Sans'` or `'Inter'` (Weights: 400, 500, 600) — High legibility at small sizes, clean tabular numbers for nutritional facts and pack weights.
* **Accent / Eyebrow Tags:** `'Space Grotesk'` (Weight: 600, uppercase, `letter-spacing: 0.12em`) — Used for category kickers (e.g., `IQF TECHNOLOGY`, `READY IN 3 MINS`).

### 3.3 Surface, Elevation & Tactile Styling
* **Glassmorphism:** `backdrop-filter: blur(16px)` with translucent borders (`1px solid rgba(255,255,255,0.2)` in Pal Fresh; `1px solid rgba(99,181,201,0.25)` in Frozzo).
* **Border Radii:** Soft-modern curvature (`16px` for product cards, `24px` for feature containers, `9999px` pill shapes for buttons and the Brand Toggle).

---

## 4. Motion & Interactivity Choreography

To maintain silky-smooth `60fps` performance without library conflicts, animations are strictly scoped by responsibility:

1. **Framer Motion (UI State & Layout Transitions):**
   * **Brand Switcher Pill:** Uses `layoutId="activeBrandPill"` to physically slide and morph colors between `#6a9a1b` (Pal Fresh) and `#2487ac` / `#63b5c9` (Frozzo).
   * **Product Cards:** Subtle 3D tilt/elevation lift on hover (`y: -6`), image scale (`1.05`), and smooth `AnimatePresence` crossfade when filtering products.
2. **GSAP + ScrollTrigger (Scroll-Driven Storytelling):**
   * **Hero Parallax:** Multi-layered food photography (floating green peas, corn kernels, or golden fries and ice crystals) moving at differential scroll speeds.
   * **Section Entrances:** Staggered `y: 30 -> 0` and `opacity: 0 -> 1` reveals triggered at `top 85%` of viewport.
3. **Anime.js (SVG & Ambient Micro-Interactions):**
   * **Ambient Frost & Dew:** Lightweight SVG particle drift in hero backgrounds (water droplets for Pal Fresh, crystalline snowflakes/vapor for Frozzo).
   * **Icon & Divider Drawing:** `strokeDashoffset` animations for cold-chain timelines and curved section dividers.

---

## 5. Global Components Specification

### 5.1 Interactive Header (`<Navbar />`)
* **Layout Structure:** Sticky top bar (`height: 80px` desktop, `68px` mobile) with translucent glassmorphism that gains opacity and subtle shadow upon scrolling `> 40px`.
* **Left Slot:** Pal Frozen Foods corporate logo (dynamically adapts subtle accent ring when on a brand-specific view).
* **Center Slot (Desktop):** Clean navigation links with animated bottom indicator bar:
  * `Home`
  * `About Us`
  * `Products` (Includes hover mega-preview card showing **Pal Fresh** & **Frozzo** side-by-side)
  * `Gallery`
  * `Get In Touch` (Dropdown/preview for FAQs, Become a Distributor, Careers)
* **Right Slot:** Quick-action pill CTA (`"Become a Partner"` / `"Explore Brands"`) + Mobile Hamburger trigger.
* **Mobile Navigation:** Full-height MUI `Drawer` with staggered Framer Motion link entrances and quick brand switcher cards.

### 5.2 Interactive Footer (`<Footer />`)
* **Visual Treatment:** Deep architectural dark base (`#020f14` / `#206040` gradient mesh depending on active brand context) with an Anime.js animated wave/frost SVG top border.
* **4-Column Responsive Grid:**
  1. **Brand Column:** Pal Frozen Foods logo, brand mission statement, food safety badges (FSSAI, ISO 22000, HACCP).
  2. **Our Brands:** Direct deep-links to `/products?brand=pal-fresh` and `/products?brand=frozzo` (automatically activates that brand toggle upon navigation).
  3. **Quick Links:** Home, About Us, Gallery, Privacy Policy.
  4. **Connect & Grow:** Direct links to FAQs, Become a Distributor, Careers, Head Office address, and interactive "Back to Top" floating button.

---

## 6. Page-by-Page Wireframe & Functional Requirements

### 6.1 Home Page (`/`)
1. **Interactive Dual-Universe Hero Section:**
   * Full-viewport (`100svh`) split or interactive showcase introducing **Pal Frozen Foods**.
   * Interactive hover/click split panels: Hovering left expands **Pal Fresh** (`#6a9a1b` / `#206040` with `#e7e22f` highlights); hovering right expands **Frozzo** (`#020f14` / `#022732` with `#63b5c9` highlights).
   * Primary CTA buttons leading directly to the respective brand catalog.
2. **Brand Universe Showcase (Interactive Cards):**
   * Two large, high-impact cards comparing the essence of Pal Fresh (Farm-to-Freezer Vegetables) and Frozzo (Crispy Frozen Snacks) with floating product renders.
3. **The Cold-Chain Promise (GSAP Scrollytelling):**
   * 4-step horizontal/vertical animated timeline: *1. Ethical Farm Sourcing → 2. IQF Flash Freezing ($-40^\circ\text{C}$) → 3. Zero-Preservative Lock → 4. Sub-Zero Distribution*.
4. **Trending Products Carousel:**
   * Interactive slider featuring bestsellers from both brands with color-coded brand tags.
5. **B2B / Distributor Callout Banner:**
   * High-contrast banner inviting retailers, distributors, and HoReCa partners with a direct CTA to the Distributor application tab.

### 6.2 About Us Page (`/about`)
1. **Hero Banner:** Editorial typography highlighting Pal Frozen Foods' heritage, scale, and commitment to quality.
2. **Our Story & Vision:** Split layout with parallax imagery of lush partner farms and state-of-the-art processing facilities.
3. **IQF Technology Explained (Interactive Diagram):**
   * Interactive MUI Tab / Hotspot visual showing how Individually Quick Frozen technology preserves cellular structure, natural color, and vitamins without artificial preservatives.
4. **Key Metrics Counter (Anime.js Number Roll-up):**
   * Animated counters triggered on scroll (e.g., *Metric Tons Capacity*, *Partner Farms*, *Distribution Cities*, *Quality Checks*).
5. **Certifications & Quality Assurance:** Clean grid of compliance standards (FSSAI, ISO, HACCP, GMP).

### 6.3 Products Page (`/products`) — *Core Interactive Feature*
1. **Dynamic Brand Switcher Header:**
   * Prominent, tactile pill toggle centered at the top of the page:
     * **Option A: Pal Fresh** (Icon: Leaf/Sprout | Active Colors: `#6a9a1b` fill, `#e7e22f` accent dot, `#206040` text/headings).
     * **Option B: Frozzo** (Icon: Snowflake/Spark | Active Colors: `#2487ac` to `#63b5c9` gradient fill, `#020f14` / `#022732` dark immersive page theme).
   * **Theme Morphing Behavior:** Toggling the switch smoothly transitions the page background, typography colors, filter chips, and card accents between Pal Fresh's bright organic palette and Frozzo's sleek dark-frost palette.
2. **Filter & Search Toolbar (MUI Components):**
   * Live search bar (`MUI TextField` with search icon).
   * Sub-category filter chips (e.g., for *Pal Fresh*: All, Single Veggies, Veggie Mixes, Exotic; for *Frozzo*: All, Potato Classics, Cheese & Corn, Patty & Nuggets).
   * Pack Type Toggle: `Retail Packs (200g – 1kg)` vs. `HoReCa / Bulk Packs (2.5kg – 5kg)`.
3. **Interactive Product Grid:**
   * Responsive grid (`1 col` mobile, `2 cols` tablet, `3–4 cols` desktop).
   * **Product Card Anatomy:** High-res studio packshot, floating badge (`"No Preservatives"` in `#e7e22f` for Pal Fresh; `"Air-Fry Ready"` in `#63b5c9` for Frozzo), product title, available weights, and `"View Details"` button.
4. **Product Quick-View Modal (`MUI Dialog`):**
   * Opens with Framer Motion spring animation. Displays product imagery, nutritional table, cooking/preparation instructions (e.g., *Stovetop / Air Fryer / Deep Fry* icons), shelf-life (`-18°C`), and a `"Bulk / Distributor Inquiry"` button.

### 6.4 Get In Touch Page (`/contact`)
Structured as a unified, multi-purpose communication hub with an interactive **MUI Tabs** navigation bar (also deep-linkable via URL hash/query like `/contact?tab=distributor`):

1. **Tab 1: General Inquiry & Locations**
   * Interactive Contact Form (`Name`, `Email`, `Phone`, `Subject`, `Message`) with MUI validation and animated success toast.
   * Corporate Office & Manufacturing Plant cards with address, phone, email, and business hours.
2. **Tab 2: FAQs (Frequently Asked Questions)**
   * Searchable FAQ filter + categorized **MUI Accordions** (Smooth expand/collapse) covering: *Storage & Handling ($-18^\circ\text{C}$)*, *Shelf Life & Ingredients*, *Retail Availability*, and *Bulk Orders*.
3. **Tab 3: Become a Distributor**
   * **Value Proposition Strip:** Highlights high margins, cold-chain marketing support, and dual-brand demand (Pal Fresh + Frozzo).
   * **Distributor Onboarding Form:** Structured multi-field form capturing *Applicant/Firm Name*, *City & State*, *Current Business Type* (Super Stockist / Distributor / HoReCa Supplier), *Cold Storage Capacity (in Sq. Ft. / Tons)*, *Existing Distribution Fleet*, and *Message*.
4. **Tab 4: Careers**
   * Culture & Workplace Perks cards (Food Innovation, Cold-Chain Logistics, Sales & Marketing).
   * **Open Positions List:** Filterable by department with an interactive `"Apply Now"` slide-over Drawer (`Name`, `Role`, `Experience`, `Resume Upload dropzone`, `Submit`).

### 6.5 Gallery Page (`/gallery`)
1. **Filterable Bento / Masonry Grid:**
   * Category tabs: `All`, `Farm Sourcing`, `IQF Processing Plant`, `Pal Fresh Range`, `Frozzo Culinary`.
2. **Interactive Lightbox Viewer:**
   * Clicking any tile opens a full-screen glassmorphic lightbox (`MUI Modal` + Framer Motion) with smooth image transitions, caption descriptions, and keyboard (`Left`/`Right`/`Esc`) navigation.

### 6.6 Privacy Policy Page (`/privacy-policy`)
1. **Clean Editorial Layout:**
   * Designed for maximum readability and trust using Pal Frozen Foods corporate styling.
   * **2-Column Desktop Layout:**
     * *Left Column (25%):* Sticky Table of Contents with active scroll-spy highlighting.
     * *Right Column (75%):* Well-spaced legal sections (Information Collection, Use of Data, Cookies & Analytics, Distributor & Applicant Data Security, Contact for Privacy Queries) with `Last Updated` badge.

---

## 7. Responsive Breakpoints & Accessibility Standards

### 7.1 Viewport Breakpoints (MUI Standard + Ultrawide)
* **`xs` (0px – 599px | Mobile):** Single-column cards, thumb-friendly bottom/drawer navigation, full-width brand toggle pill, stacked hero panels.
* **`sm` (600px – 899px | Tablet Portrait):** 2-column product/gallery grids, condensed header spacing.
* **`md` (900px – 1199px | Tablet Landscape / Small Laptop):** Full desktop navigation bar, 3-column product grids, side-by-side hero split.
* **`lg` & `xl` (1200px+ | Desktop & Ultrawide):** Max container width `1360px` (`1440px` for hero visuals) to prevent excessive line lengths while preserving expansive parallax canvases.

### 7.2 Accessibility (WCAG 2.1 AA Compliance)
* **Color Contrast:** All text overlays maintain a minimum `4.5:1` contrast ratio (e.g., `#206040` text on `#e7e22f` badges; `#FFFFFF` text on `#020f14` / `#022732` Frozzo surfaces).
* **Reduced Motion:** Respect `@media (prefers-reduced-motion: reduce)` by disabling GSAP parallax scrubbing and Anime.js ambient particle loops while keeping instant state transitions functional.
* **Keyboard & Screen Readers:** Proper `aria-pressed` states on the Pal Fresh / Frozzo toggle, focus rings on all MUI interactive inputs, and descriptive `alt` tags on all food imagery.

---

## 8. Recommended React Project Structure

```text
pal-frozen-foods/
├── public/
│   └── index.html                  # Google Fonts & SEO meta tags
├── src/
│   ├── assets/                     # Optimized WebP images, SVG icons, brand logos
│   ├── context/
│   │   └── BrandThemeContext.jsx   # Global state for 'pal-fresh' vs 'frozzo' theme
│   ├── theme/
│   │   ├── muiTheme.js             # Dynamic MUI theme generator (Pal Fresh & Frozzo palettes)
│   │   └── tokens.css              # CSS custom properties & fluid typography scales
│   ├── data/
│   │   ├── productsData.js         # Structured catalog for Pal Fresh & Frozzo
│   │   ├── faqData.js              # Categorized FAQs
│   │   ├── careersData.js          # Open job listings
│   │   └── galleryData.js          # Categorized media assets
│   ├── components/
│   │   ├── common/
│   │   │   ├── Navbar.jsx          # Interactive glassmorphic header + mobile drawer
│   │   │   ├── Footer.jsx          # Dual-brand aware footer + Anime.js wave
│   │   │   ├── BrandToggle.jsx     # Framer Motion shared-layout brand switcher
│   │   │   └── FrostParticles.jsx  # Anime.js ambient SVG particle layer
│   │   └── products/
│   │       ├── ProductCard.jsx     # Interactive card with dynamic brand styling
│   │       └── ProductModal.jsx    # Quick-view nutrition & cooking guide dialog
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── AboutUs.jsx
│   │   ├── Products.jsx
│   │   ├── GetInTouch.jsx          # Houses Contact, FAQs, Distributor, & Careers tabs
│   │   ├── Gallery.jsx
│   │   └── PrivacyPolicy.jsx
│   ├── App.jsx                     # Router, AnimatePresence, ThemeProvider wrapper
│   └── main.jsx
└── package.json
```