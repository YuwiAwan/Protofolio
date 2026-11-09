# CHANGE-ME — what to edit, in order

Every file you need is inside `src/data/`. **You never have to open a component.**

Labels used inside those files:

| Label | Meaning |
| --- | --- |
| ⚠️ MUST CHANGE | Fake placeholder right now — fix this first |
| ✏️ EDIT | Your real content — change the words freely |
| 🔒 KEEP | Don't touch unless you know what it does |

Start the site first so you can watch your changes live:

```bash
npm run dev        # then open http://localhost:5173
```

Every time you save a file, the browser updates by itself.

---

## STEP 1 — Fix the 3 fake links ⚠️

**File:** `src/data/profile.ts` → **SECTION A** (top of the file)

```ts
export const GITHUB_USER = 'yuwi'                                  // ← your GitHub username
export const EMAIL       = 'you@example.com'                       // ← your email
export const LINKEDIN    = 'https://www.linkedin.com/in/your-handle' // ← your LinkedIn URL
```

**Why this one is first:** `GITHUB_USER` is used in 3 different places —
the Contact card, every "VIEW ON GITHUB" button, and the live repo feed.
Fix it once here and all three become correct.

**How to check it worked:** open `#/projects`. Under **ALL REPOSITORIES** the
small grey line should say `LIVE FROM GITHUB`. If it still says `OFFLINE COPY`,
your username is wrong (or you have no internet).

---

## STEP 2 — Project links ✅ DONE (checked against GitHub on 2026-11-10)

**File:** `src/data/projects.ts`

Every link now points to a real repo on `github.com/YuwiAwan`. Two things are
left open on purpose:

- **YuWib** has no live site yet (`yuwib.vercel.app` was 404), so there is no
  LIVE NOW button. Once it's deployed, add one — the comment in the file shows how.
- **X Sentiment Analysis** has no public repo, so its card has no button.
  Upload it and add a `VIEW ON GITHUB` link — again, the comment shows how.

`gh('name')` automatically becomes `https://github.com/YOUR_USERNAME/name`,
so you only type the repository name, not the whole URL.

---

## STEP 3 — Character art ✅ DONE

Your artwork is already installed at:

```
public/character.png        (1504 × 2840, transparent)
```

It shows on the **Home** screen and the **Skills** screen automatically.

**To swap it later:** just replace that file. Same name, same folder. Use a
transparent PNG, tall shape (roughly 900 × 1400 or larger). If the file is
missing, a dashed placeholder box appears instead — nothing breaks.

The art is hidden on phones (screens under 1024px) so the text stays readable.

---

## STEP 4 — Your words ✏️

**File:** `src/data/profile.ts` → **SECTION B**

| Field | Where it shows |
| --- | --- |
| `role` | Skills + Contact screen |
| `tagline` | Short line under your name (Home) |
| `eyebrow` | Tiny line above your name (Home) |
| `location` | Bottom-right of the footer bar |
| `discipline` | White chip, top-right corner |
| `university` | About screen |
| `intro` | Black box on Home — keep short |
| `about` | About screen — one black slab per paragraph |

---

## STEP 5 — Your skill numbers ✏️

**File:** `src/data/skills.ts`

Change any `value` (0–100). The bar length **and** the number on the right both
come from it. The big `OVERALL` number at the top is the average — it updates
by itself, you don't set it.

---

## Common things you might want to do

### Add a 4th project

In `src/data/projects.ts`, copy one whole `{ ... }` block and paste it where it
says `👉 ADD PROJECT 3 HERE`. Give it a new `id`.

### Add a 3rd skill group

In `src/data/skills.ts`, copy a whole group and paste it at
`👉 ADD GROUP 3 HERE`. Give it a **new** `id`.

⚠️ Note: the id `'data'` is special — it makes that group's bars light blue.
Any other id gives white bars.

### Make the blue letters longer or shorter in a project title

Change `accentLength` in `src/data/projects.ts`:

```ts
title: 'YUWIB', accentLength: 2   → YU (blue) + WIB (white)
title: 'YUWIB', accentLength: 3   → YUW (blue) + IB (white)
```

### Change your name on the Home screen

`src/data/profile.ts` → **SECTION F**. Each letter is one line. The comment
right above it explains `variant`, `rot`, `dy`, `scale` and `lower`.

### Change the page title in the browser tab

`index.html` → the `<title>` line.

---

## Before you publish

```bash
npm run build      # checks types, then builds into dist/
npm run preview    # look at the built version
```

If `npm run build` prints an error, it tells you the file and line number.
Nothing is broken until the build fails — a red squiggle in your editor while
you type is fine.
