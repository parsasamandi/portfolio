# Architecture Guide — Parsa Samandi Portfolio

> This document explains how the application is structured, how data flows,
> and how to correctly add or modify any part of the site.

---

## Table of Contents

1. [Application Structure](#1-application-structure)
2. [Component Hierarchy](#2-component-hierarchy)
3. [Data Flow](#3-data-flow)
4. [Theming System](#4-theming-system)
5. [Section Composition Pattern](#5-section-composition-pattern)
6. [How to Add a New Section](#6-how-to-add-a-new-section)
7. [How to Add a New Project or Experience Entry](#7-how-to-add-a-new-project-or-experience-entry)
8. [CSS Architecture](#8-css-architecture)

---

## 1. Application Structure

```
index.html          ← Entry point — all SEO meta tags live here
src/
  main.jsx          ← React DOM render root, mounts <App />
  App.jsx           ← Root component — composes all sections in order
  index.css         ← Single global stylesheet — all styles live here

  components/
    Navbar.jsx      ← Fixed top navigation with theme toggle
    Hero.jsx        ← Full-screen landing section
    About.jsx       ← About Me section
    Skills.jsx      ← Skill categories section
    Experience.jsx  ← Work experience timeline
    Projects.jsx    ← Project cards grid
    Contact.jsx     ← Contact links section
    Footer.jsx      ← Bottom footer bar
    FadeIn.jsx      ← Reusable scroll-triggered animation wrapper

  context/
    ThemeContext.jsx ← Theme state (light/dark/system) + localStorage sync

  data/
    projects.js     ← Projects array — source of truth for Projects section
    experience.js   ← Experience array — source of truth for Experience section
    skills.js       ← Skills categories array — source of truth for Skills section

  assets/           ← Static images used inside components (if any)

public/
  favicon.svg       ← Site favicon
  og-image.png      ← Open Graph social share image (1200×630)
  robots.txt        ← Search engine crawler rules
  sitemap.xml       ← Sitemap for SEO
  _headers          ← Cloudflare Pages HTTP headers (CSP, cache rules)
  ParsaSamandiResume.pdf ← Resume (linked from Hero)

docs/
  CODING_STANDARDS.md  ← Technical coding standards
  CONTENT_GUIDE.md     ← Copy writing and content standards
  ARCHITECTURE.md      ← This file
```

---

## 2. Component Hierarchy

```
main.jsx
└── App
    └── ThemeProvider         (context wrapper)
        ├── Navbar             (fixed, outside <main>)
        ├── main
        │   ├── Hero
        │   ├── About
        │   ├── Skills
        │   ├── Experience
        │   ├── Projects
        │   └── Contact
        └── Footer
```

**Key rules from this hierarchy:**
- `ThemeProvider` wraps everything so all components can access theme state
- `Navbar` and `Footer` are siblings to `<main>`, not inside it
- Section order in `App.jsx` is the **canonical order** of the page
- `FadeIn` is a utility wrapper — it is not in the App tree directly, it's used inside section components

---

## 3. Data Flow

The app has **no server, no API, no state management library**. All data is static.

```
src/data/*.js  →  imported into section components  →  rendered as JSX
```

### Flow diagram

```
projects.js ──────────────→ Projects.jsx ──→ renders project cards
experience.js ────────────→ Experience.jsx ──→ renders timeline entries
skills.js ────────────────→ Skills.jsx ──→ renders skill category cards

ThemeContext ─────────────→ Navbar.jsx (cycle button)
             └────────────→ Any component needing theme value via useTheme()
```

### Rules
- Components **never own data** — all content comes from `src/data/`
- Components **never fetch data** — no `useEffect` + fetch patterns
- The only side effects allowed are: scroll listeners (Navbar), system theme detection (ThemeContext), and intersection observers (FadeIn via Framer Motion)

---

## 4. Theming System

The theme is controlled by `ThemeContext` and works as follows:

### Three modes
| Mode | Behaviour |
|------|-----------|
| `light` | Forces `data-theme="light"` on `<html>` |
| `dark` | Forces `data-theme="dark"` on `<html>` (default CSS, no attribute needed) |
| `system` | Reads `prefers-color-scheme` from OS and applies accordingly |

### Cycle order
`light → dark → system → light → ...`  (toggled via Navbar button)

### How CSS uses it
```css
/* Default (dark) — no attribute needed */
:root {
  --bg-primary: #1c1f26;
}

/* Light override */
html[data-theme='light'] {
  --bg-primary: #f8f9fb;
}
```

### Persistence
The selected mode is saved to `localStorage` under the key `'theme'` and
restored on page load.

### Accessing theme in a component
```jsx
import { useTheme } from '../context/ThemeContext';

const { mode, theme, cycle } = useTheme();
// mode   — 'light' | 'dark' | 'system' (user's choice)
// theme  — 'light' | 'dark' (the resolved actual theme)
// cycle  — function to advance to next mode
```

---

## 5. Section Composition Pattern

Every section follows this exact pattern:

```jsx
import FadeIn from './FadeIn';

export default function SectionName() {
    return (
        <section id="section-id" className="section [section--alt]">
            <div className="container">

                {/* 1. Title block — always wrapped in FadeIn */}
                <FadeIn>
                    <h2 className="section__title">
                        Word <span className="gradient-text">Keyword</span>
                    </h2>
                    {/* optional: <p className="section__desc">...</p> */}
                </FadeIn>

                {/* 2. Content — each major block wrapped in FadeIn with delay */}
                <FadeIn delay={0.1}>
                    {/* section content */}
                </FadeIn>

            </div>
        </section>
    );
}
```

### FadeIn delay pattern for lists/grids
When rendering a list of items, pass the index as a multiplier:

```jsx
{items.map((item, index) => (
    <FadeIn key={index} delay={index * 0.1}>
        {/* card or item */}
    </FadeIn>
))}
```

Cap delays at `0.4s` maximum to avoid content appearing too late on fast scrolls.

---

## 6. How to Add a New Section

Follow all steps in order:

### Step 1 — Create the component
Create `src/components/NewSection.jsx` following the Section Composition Pattern above.

### Step 2 — Add a data file (if needed)
If the section has dynamic content, add `src/data/newSection.js` with a named export array.

### Step 3 — Register in App.jsx
Add the import and place the component in `App.jsx` in the correct position:

```jsx
import NewSection from './components/NewSection';

// Inside the return, in the correct order:
<main>
  <Hero />
  <About />
  <NewSection />   {/* ← inserted here */}
  ...
</main>
```

### Step 4 — Set the correct background
Check the section above and below to maintain the alternating `section` / `section--alt` pattern. Update neighbouring sections if needed. Refer to the background alternation table in `CODING_STANDARDS.md`.

### Step 5 — Add nav link
Add an entry to the `navLinks` array in `Navbar.jsx`:

```js
{ label: 'NewSection', href: '#new-section-id' }
```

### Step 6 — Add to sitemap
Add a `<url>` entry in `public/sitemap.xml` with the correct `<loc>`, `<lastmod>`, and `<priority>`.

### Step 7 — Deploy
```bash
npm run deploy
```

---

## 7. How to Add a New Project or Experience Entry

### New project
Add an object to the **top** of the `projects` array in `src/data/projects.js`.
Set `featured: true` to show it in the main grid, `false` for secondary.

Required fields — see `CODING_STANDARDS.md` → Data Shape Contracts.

### New experience entry
Add an object to the **top** of the `experiences` array in `src/data/experience.js`.
The array is rendered in order, so most recent first.

Required fields — see `CODING_STANDARDS.md` → Data Shape Contracts.

### After editing data files
Always run `npm run deploy` to rebuild and publish the changes.

---

## 8. CSS Architecture

All styles are in a **single file**: `src/index.css`

### File sections (in order)
```
1. Custom Properties (:root — dark defaults)
2. Light Mode Overrides (html[data-theme='light'])
3. Reset
4. Base Typography
5. Layout utilities (.container, .section, .section--alt)
6. Reusable UI components (.btn, .card, .badge, .tag, .gradient-text)
7. Navbar
8. Hero
9. About
10. Skills
11. Experience
12. Projects
13. Contact
14. Footer
15. Responsive / Media Queries
```

### Adding new styles
- Add new component styles **in section order** — matching the page layout
- New CSS variables go in `:root` AND must be overridden in `html[data-theme='light']`
- New responsive rules go at the **bottom** of the file in the media queries section
- Never add a `<style>` tag to a component — all CSS lives in `index.css`
