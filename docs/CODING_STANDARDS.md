# Coding Standards — Parsa Samandi Portfolio

> These standards reflect the conventions established in this codebase and must
> be followed for all future contributions and changes.

---

## Table of Contents

1. [Project Stack](#1-project-stack)
2. [File & Folder Structure](#2-file--folder-structure)
3. [Component Standards](#3-component-standards)
4. [Styling & CSS Standards](#4-styling--css-standards)
5. [Data Layer Standards](#5-data-layer-standards)
6. [State & Context Standards](#6-state--context-standards)
7. [Animation Standards](#7-animation-standards)
8. [SEO Standards](#8-seo-standards)
9. [Git & Commit Standards](#9-git--commit-standards)
10. [Deployment Standards](#10-deployment-standards)

---

## 1. Project Stack

| Layer       | Technology                          |
|-------------|-------------------------------------|
| Framework   | React 19 (JSX, no TypeScript)       |
| Bundler     | Vite 5                              |
| Styling     | Plain CSS (single `index.css`)      |
| Animation   | Framer Motion                       |
| Icons       | Lucide React + React Icons (FA)     |
| Linting     | ESLint with react-hooks plugin      |
| Hosting     | Cloudflare Pages                    |
| Deployment  | `wrangler pages deploy` via `npm run deploy` |

---

## 2. File & Folder Structure

```
src/
  components/    # One file per section component
  context/       # React context providers only
  data/          # Static data arrays (JS only, no JSON)
  assets/        # Images and static assets used in components
public/          # Files served as-is (robots.txt, sitemap.xml, OG image, favicon)
docs/            # Project documentation (this folder)
```

**Rules:**
- Each page section has exactly **one component file** in `src/components/`
- Component filenames use **PascalCase**: `Hero.jsx`, `About.jsx`
- Data files use **camelCase**: `projects.js`, `experience.js`, `skills.js`
- No subfolders inside `components/` — keep it flat
- Do not add TypeScript (`.ts`/`.tsx`) files — project is JS only

---

## 3. Component Standards

### Structure
- All components are **default exports**
- Use **named function declarations** (not arrow functions) for top-level components:

```jsx
// ✅ Correct
export default function About() { ... }

// ❌ Avoid
const About = () => { ... }
export default About;
```

- Helper/utility components within a file may use arrow functions

### JSX Rules
- Always use **self-closing tags** for elements with no children: `<FadeIn />`
- Prefer `&apos;` and `&amp;` for HTML entities inside JSX text
- External links must always include `target="_blank" rel="noreferrer"`
- Interactive elements must include `aria-label` or `title` when icon-only

### Imports Order
1. React / React hooks
2. Third-party libraries (framer-motion, lucide-react, react-icons)
3. Internal components (`./FadeIn`, `./Navbar`)
4. Data imports (`../data/projects`)
5. Context imports (`../context/ThemeContext`)

---

## 4. Styling & CSS Standards

### Single Stylesheet
All styles live in **`src/index.css`** — no CSS modules, no styled-components,
no inline styles.

### CSS Custom Properties
All colours, spacing tokens, and design values must be defined as CSS variables
in `:root` (dark, default) and overridden in `html[data-theme='light']`:

```css
:root {
  --bg-primary: #1c1f26;
  --bg-secondary: #22262f;
  /* ... */
}

html[data-theme='light'] {
  --bg-primary: #f8f9fb;
  /* ... */
}
```

Never hardcode colour hex values outside of `:root` and `html[data-theme='light']`.

### BEM Naming Convention
CSS classes follow **BEM** (Block Element Modifier):

```css
.section {}              /* Block */
.section--alt {}         /* Modifier — alternate background */
.section__title {}       /* Element */

.navbar {}
.navbar--scrolled {}     /* Modifier */
.navbar__logo {}         /* Element */
.navbar__link {}
```

### Section Background Alternation
Sections must **strictly alternate** between `--bg-primary` and `--bg-secondary`
using the `section--alt` modifier. The current order is:

| Section    | Class              | Background       |
|------------|--------------------|------------------|
| Hero       | `section`          | `--bg-primary`   |
| About      | `section section--alt` | `--bg-secondary` |
| Skills     | `section`          | `--bg-primary`   |
| Experience | `section section--alt` | `--bg-secondary` |
| Projects   | `section`          | `--bg-primary`   |
| Contact    | `section section--alt` | `--bg-secondary` |

Adding a new section must maintain this alternating pattern.

### Navbar Scrolled Background
The navbar scrolled state uses `--navbar-scrolled-bg` which is set to
`--bg-secondary` at 97% opacity — intentionally **different** from `--bg-primary`
to ensure visual separation when scrolled over primary-background sections.

### Typography
- Headings: `Outfit` font family
- Body: `Inter` font family
- Font sizes use `clamp()` for responsive scaling where applicable
- Gradient text uses the `.gradient-text` utility class

---

## 5. Data Layer Standards

All section data is stored as **named exports of plain JS arrays** in `src/data/`:

```js
// ✅ Correct
export const projects = [ { ... }, { ... } ];

// ❌ Avoid JSON files, avoid default exports for data
```

### Data Shape Contracts

**`experience.js`** — each entry must have:
```js
{
  role: String,
  company: String,
  location: String,
  period: String,       // Format: 'Mon YYYY — Present' or 'Mon YYYY — Mon YYYY'
  description: Array<String>,
  tech: Array<String>,
  badge: 'Hands-On' | 'AI-Native'
}
```

**`projects.js`** — each entry must have:
```js
{
  title: String,
  subtitle: String,
  description: String,
  tech: Array<String>,
  badge: 'Hands-On' | 'AI-Native',
  liveUrl: String | null,
  githubUrl: String | null,
  featured: Boolean
}
```

**Period format rule:** Always use em dash (`—`) not hyphen (`-`):
- `'Feb 2026 — Present'` ✅
- `'Feb 2026 - Present'` ❌

---

## 6. State & Context Standards

- Global state uses **React Context** only — no Redux, no Zustand
- Context files live in `src/context/` and export both the **Provider** and a
  **custom hook**:

```jsx
export function ThemeProvider({ children }) { ... }
export function useTheme() { return useContext(ThemeContext); }
```

- Local UI state (open/closed, scrolled) lives inside the component using `useState`
- `localStorage` is used only for user preferences (e.g., theme)

---

## 7. Animation Standards

- All scroll-triggered fade-in animations use the **`<FadeIn>`** wrapper component
- Import from `./FadeIn`, never re-implement animation logic in components
- Use `delay` prop for staggered children: `<FadeIn delay={0.1}>`
- Page-load animations (Hero) use **Framer Motion** `motion.*` directly
- Do not mix Framer Motion with CSS `@keyframes` for the same element

---

## 8. SEO Standards

### `index.html` must always have:
- `<title>` — includes full name + role + keywords
- `<meta name="description">` — 150–160 characters, includes location
- `<meta name="canonical">` — always `https://parsasamandi.com`
- `<meta name="robots" content="index, follow">`
- Full Open Graph tags: `og:title`, `og:description`, `og:image`, `og:url`,
  `og:type`, `og:site_name`, `og:locale`, `og:image:width`, `og:image:height`
- Twitter Card: `summary_large_image` with image
- JSON-LD `Person` schema with `jobTitle`, `address`, `sameAs`, `knowsAbout`

### `public/` must always contain:
- `robots.txt` — allows all bots, references sitemap
- `sitemap.xml` — lists all sections with `lastmod`, `priority`, `changefreq`
- `og-image.png` — 1200×630px branded OG image
- `favicon.svg`

### CSP (`public/_headers`)
The Content-Security-Policy must allow:
- `fonts.googleapis.com` for style-src
- `fonts.gstatic.com` for font-src

---

## 9. Git & Commit Standards

### Commit Message Format
Follow [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>: <short summary>

- Detail line 1
- Detail line 2
```

**Types:**
| Type       | When to use                                      |
|------------|--------------------------------------------------|
| `feat`     | New feature or content addition                  |
| `fix`      | Bug fix                                          |
| `seo`      | SEO-related changes                              |
| `style`    | CSS/visual changes with no logic change          |
| `content`  | Copy/text updates                                |
| `chore`    | Build scripts, config, tooling                   |
| `refactor` | Code restructuring without behaviour change      |
| `docs`     | Documentation only                               |

### Branch Strategy
- All work is done on **`main`** (single-branch project)
- No feature branches required for a solo portfolio project

---

## 10. Deployment Standards

### Commands
```bash
# Local development
npm run dev

# Production build only
npm run build

# Build + deploy to Cloudflare Pages
npm run deploy
```

### Deploy Rules
- Always run `npm run deploy` after every meaningful change
- Never commit build artifacts (`dist/`) — it is gitignored
- The `dist/` output directory is what gets deployed to Cloudflare Pages
- Project name on Cloudflare: `parsa-portfolio`
- Production domain: `parsasamandi.com`
- Cloudflare Pages URL: `parsa-portfolio.pages.dev`

### After Deploying
Always commit and push to GitHub **in the same session** to keep git in sync
with what is live on production.
