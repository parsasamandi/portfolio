# Content & Copy Guide — Parsa Samandi Portfolio

> This guide defines how all written content on the portfolio must be written.
> Follow these rules before adding or editing any visible text.

---

## Table of Contents

1. [Voice & Tone](#1-voice--tone)
2. [Tense Rules](#2-tense-rules)
3. [Claim Accuracy Rules](#3-claim-accuracy-rules)
4. [Section-Specific Copy Rules](#4-section-specific-copy-rules)
5. [Terminology Standards](#5-terminology-standards)
6. [Punctuation & Formatting](#6-punctuation--formatting)

---

## 1. Voice & Tone

- **Professional but personal** — write in first person, confident but not boastful
- **Specific over generic** — name actual technologies, real projects, real outcomes
- **Action-oriented** — lead with what was built or achieved, not what was learned
- **No filler phrases** — avoid: "passionate about", "love to code", "hard worker", "team player"

**Example — ❌ Bad:**
> I am passionate about web development and love building cool things.

**Example — ✅ Good:**
> I build production web applications with deep Laravel expertise and deliver full-stack products at high velocity using AI-native workflows.

---

## 2. Tense Rules

This is the most critical rule — tense must accurately reflect **current reality**.

### Present tense (`am`, `build`, `deliver`)
Use **only** for things that are true right now, today:
- Current job status / what you are actively working on
- Skills you are currently using

### Past tense (`built`, `developed`, `have built`)
Use for:
- Completed projects
- Past experiments, even if they were recent
- Technologies you have used but are not currently your primary focus

### ❌ Common mistakes to avoid

| Wrong | Why | Correct |
|-------|-----|---------|
| "I am developing RAG pipelines" | Not current work | "I have built RAG pipelines" |
| "I am currently doing LLM work" | Not active | "I have built LLM systems including..." |

### Current active focus (as of April 2026)
The correct framing for current work is **software development (Laravel, PHP, full-stack)**.
AI/LLM projects are **past projects** — use past tense when referring to them.

---

## 3. Claim Accuracy Rules

Before adding any claim to the portfolio, verify:

| Check | Rule |
|-------|------|
| Is it a real project? | Must be live or have a public repo |
| Is the date accurate? | Verify start/end dates before writing |
| Is the tech correct? | Only list tech actually used in the project |
| Is the badge correct? | `Hands-On` = wrote the code yourself; `AI-Native` = delivered via AI-assisted workflow |
| Is the URL valid? | Test all `liveUrl` links before publishing |

### Badge definitions
- **Hands-On** — you wrote the code yourself with direct technical expertise
- **AI-Native** — you used AI-augmented workflows to deliver the product; you directed, reviewed, and shipped it but AI was a primary tool in construction

Do not use `AI-Native` to mean "I used AI to help" for a simple task. It means the project was substantially built with AI assistance as a deliberate workflow.

---

## 4. Section-Specific Copy Rules

### Hero
- One-sentence subtitle maximum
- Must mention: primary stack (Laravel), methodology (AI-native), and outcome (full-stack, production)
- Do not list technologies — that belongs in Skills

### About Me
- 3–4 paragraphs, each with a single clear focus:
  1. Primary identity + core strength (Laravel/PHP)
  2. Methodology (AI-native as a force multiplier)
  3. Past AI/LLM work (past tense)
  4. Current availability / what you're seeking
- Do not repeat technology names already in the Hero
- Inline links (e.g., `llm-learnings` repo) are allowed only if they add genuine value

### Experience
- `period` must use the **exact start month and year**: `'Feb 2026 — Present'` not `'2026 — Present'`
- `description` bullets start with a **past-tense action verb**: Architected, Implemented, Deployed, Developed, Engineered
- Each bullet describes one concrete outcome, not a responsibility
- Maximum 3 bullets per role

### Projects
- `subtitle` is always: `'What it is · One key detail'` format
- `description` is 1–2 sentences: what it does + the most interesting technical detail
- Do not use "I" in project descriptions — write in third person / product voice

### Skills
- Skills listed must be things you can speak to in an interview
- Do not list a skill you have only read about but never used in a project
- `subtitle` in each category clarifies the proficiency level honestly

### Contact
- Keep it short — one sentence CTA max
- Do not list technologies or skills in the contact section

---

## 5. Terminology Standards

Always use these exact terms consistently:

| Use this | Not this |
|----------|----------|
| AI-native development | AI-driven, AI-powered development |
| Laravel | laravel |
| PHP | php |
| REST APIs | Rest APIs, Restful APIs |
| Filament 3 | filament, Filament |
| Burnaby, BC, Canada | Vancouver, Greater Vancouver (for location) |
| full-stack | fullstack, full stack |
| admin dashboard | admin panel (only in project descriptions where "panel" is appropriate) |

---

## 6. Punctuation & Formatting

- Use **em dash** (`—`) for date ranges: `Feb 2026 — Present`
- Use **en dash or em dash** for sentence breaks in descriptions — not a hyphen
- JSX HTML entities: `&apos;` for apostrophes, `&amp;` for ampersands within JSX text nodes
- External links: always `target="_blank" rel="noreferrer"`
- No trailing periods on bullet-point descriptions in the data files
- Oxford comma is used: "Laravel, PHP, and MySQL"
