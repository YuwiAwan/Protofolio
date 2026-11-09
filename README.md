# YULI DWI KURNIAWAN — Portfolio

A Persona-inspired portfolio built with **React 19 + TypeScript + Tailwind CSS**
on Vite. Five full-screen "menu" screens driven like a game UI: cut-out ransom
typography, halftone print dots, diagonal stripe stages, hard black slabs and
slanted HUD chips.

## Run

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-check both tsconfigs, then bundle to dist/
npm run typecheck  # types only
npm run lint       # oxlint
```

## Set your details

**→ Follow [`CHANGE-ME.md`](./CHANGE-ME.md) for a step-by-step checklist.**

Everything personal lives in **`src/data/`** — no component edits needed. Those
files are labelled inline: ⚠️ MUST CHANGE, ✏️ EDIT, 🔒 KEEP.

| File | Holds |
| --- | --- |
| `src/data/profile.ts` | Name, role, intro/about copy, nav, contact links, the hand-tuned title glyphs |
| `src/data/projects.ts` | Featured projects + the offline repo fallback |
| `src/data/skills.ts` | Skill groups and their 0–100 ratings |

**Three placeholders to replace first**, all at the top of `profile.ts`:

```ts
export const GITHUB_USER = 'yuwi'                                  // drives the live repo feed
export const EMAIL       = 'you@example.com'
export const LINKEDIN    = 'https://www.linkedin.com/in/your-handle'
```

## Character illustration

Drop a transparent PNG (roughly 900×1400) at:

```
public/character.png
```

It is picked up automatically by the home and skills screens. Until then a
labelled placeholder frame renders in its place, so the layout never collapses.

## Screens & keyboard

Routing is `location.hash` based — every screen is deep-linkable
(`#/projects`, `#/skills`, `#/about`, `#/contact`) and the browser back button
works.

| Key | Action |
| --- | --- |
| `↑` `↓` `←` `→` | Move the menu selection (home) |
| `Enter` / `Space` | Confirm the highlighted entry |
| `Esc` | Back to the menu |
| `1`–`4` | Jump straight to Projects / Skills / About / Contact |

The speaker button in the footer toggles the synthesised menu SFX; the choice
is stored in `localStorage`.

## Live GitHub feed

The Projects screen fetches `api.github.com/users/<GITHUB_USER>/repos`, drops
forks, sorts by most recently pushed and shows the top six. If the request
fails — offline, rate-limited or the handle is not set yet — it silently falls
back to `fallbackRepos` in `src/data/projects.ts` and labels the section
`OFFLINE COPY`.

## Structure

```
src/
  App.tsx                        shell: routing, keyboard, status flashes
  types.ts                       shared domain types
  data/                          profile · projects · skills   ← edit here
  hooks/
    useHashRoute.ts              deep-linkable screen routing
    useGithubRepos.ts            live repo feed + fallback
    useClock.ts  useMounted.ts  useSfx.ts
  lib/sfx.ts                     WebAudio menu blips (no audio files)
  components/
    RansomText.tsx               per-letter cut-out typography
    CharacterArt.tsx             art slot + placeholder frame
    backgrounds/                 WaterBackground · StripeStage · GridStage
    layout/                      TopBar · FooterHud · ScreenHeader
    ui/                          Chip · Badge · CutButton · SectionLabel
                                 ProjectCard · RepoCard · StatBar
    screens/                     Home · Projects · Skills · About · Contact
  index.css                      design-system classes (.ransom, .clip-notch,
                                 .stat-track, .btn-cut, .stripes, .halftone…)
tailwind.config.ts               palette, fonts, shadows, keyframes
```

## Design tokens

Palette: `aqua-*` (bright water blue), `deep-*` (interior navy), `ink` `#07080A`,
`bone` `#FFFFFF`, `blood` `#E60012`, `volt` `#3DF07B`, `gold` `#FFC531`.
Fonts: Anton / Archivo Black (display), Barlow Condensed (HUD labels), Inter
(body), JetBrains Mono (code).

### Note on the `safelist`

`RansomText` composes its fill class at runtime (`ransom-${variant}`), which
Tailwind's content scanner cannot see. Those four class names are listed in
`safelist` in `tailwind.config.ts` — remove them and every letter renders plain
white.

## Accessibility

Scattered glyph stacks are `aria-hidden` and paired with an `sr-only` label or
`aria-label`, so headings and menu entries read as whole words. Every animation
is disabled under `prefers-reduced-motion: reduce`.
