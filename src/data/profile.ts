import type { ContactLink, NavItem } from '@/types'

/* ========================================================================== *
 *  FILE 1 of 3 — YOUR PERSONAL INFO
 *
 *  Label meaning:
 *    ⚠️  MUST CHANGE  — this is a fake placeholder right now
 *    ✏️  EDIT         — your real info, change the text freely
 *    🔒  KEEP         — leave it alone unless you know what it does
 * ========================================================================== */

/* -------------------------------------------------------------------------- *
 *  SECTION A — LINKS
 *  ⚠️ MUST CHANGE — all three below are placeholders.
 * -------------------------------------------------------------------------- */

/** ⚠️ MUST CHANGE — your GitHub username. Also powers the live repo feed. */
export const GITHUB_USER = 'YuwiAwan'

/** ⚠️ MUST CHANGE — the email you want on your portfolio. */
export const EMAIL = 'yulidwi001@gmail.com'

/** ⚠️ MUST CHANGE — your full LinkedIn URL. */
export const LINKEDIN = 'https://www.linkedin.com/in/yuwiawan'

/* -------------------------------------------------------------------------- *
 *  SECTION B — WHO YOU ARE
 *  ✏️ EDIT — shown on the Home screen and the About screen.
 * -------------------------------------------------------------------------- */

export const profile = {
  /** 🔒 KEEP — used only by screen readers. Must match your real name. */
  fullName: 'Yuli Dwi Kurniawan',

  /** ✏️ EDIT — your job title. Shown on Skills + Contact. */
  role: 'Frontend Web Developer & Data Analyst',

  /** ✏️ EDIT — small line under your name on Home. Keep it SHORT + UPPERCASE. */
  tagline: 'FRONTEND DEV / DATA ANALYST / CS GRAD',

  /** ✏️ EDIT — tiny line above your name on Home. */
  eyebrow: 'TAKE A LOOK AT MY WORK',

  /** ✏️ EDIT — bottom-right of the footer bar. */
  location: 'YOGYAKARTA · IND',

  /** ✏️ EDIT — white chip in the top-right corner. */
  discipline: 'YOGYAKARTA · COMPUTER SCIENCE',

  /** ✏️ EDIT — your school. Shown on the About screen. */
  university: 'Universitas Amikom Yogyakarta',

  /** ✏️ EDIT — short intro, black box on Home. Keep it to ~3 lines. */
  intro:
    'Computer Science graduate from Universitas Amikom Yogyakarta. I specialize in building highly interactive web user interfaces and have a strong interest in machine learning and data analysis.',

  /**
   * ✏️ EDIT — the long version, About screen only.
   * One black slab per paragraph. Add or delete paragraphs freely.
   */
  about: [
    'Computer Science graduate from Universitas Amikom Yogyakarta. I specialize in building highly interactive web user interfaces — the kind where motion, state and layout all have to agree with each other — and I care about the details that make an interface feel deliberate rather than assembled.',
    'On the data side I work with Python for analysis and classical machine learning: cleaning and labelling text, engineering features, then training and evaluating models. My sentiment-analysis work compared Logistic Regression against K-Nearest Neighbors on real social-media text scraped from platform X.',
    'The two halves feed each other. Analysis tells me what a product should say; frontend work is how it gets said. I like projects that need both.',
  ],
} as const

/* -------------------------------------------------------------------------- *
 *  SECTION C — QUICK STATS
 *  ✏️ EDIT — the 3 small columns under your intro on Home.
 *  Keep them short and UPPERCASE or they will wrap badly.
 * -------------------------------------------------------------------------- */

export const stats = [
  { label: 'DISCIPLINE', value: 'FRONTEND + DATA' },
  { label: 'DEGREE', value: 'B.CS — AMIKOM' },
  { label: 'STACK', value: 'REACT / TS / PYTHON' },
] as const

/* -------------------------------------------------------------------------- *
 *  SECTION D — MENU
 *  🔒 KEEP the `id` values (they are the page addresses).
 *  ✏️ EDIT the `hint` text (the grey words next to the red arrow).
 *  ✏️ `seed` just changes how the letters scatter — try any number.
 * -------------------------------------------------------------------------- */

export const navItems: NavItem[] = [
  { id: 'projects', label: 'PROJECTS', seed: 3, hint: 'SHIPPED WORK' },
  { id: 'skills', label: 'SKILLS', seed: 11, hint: 'STAT SHEET' },
  { id: 'about', label: 'ABOUT', seed: 5, hint: 'THE LONG VERSION' },
  { id: 'contact', label: 'CONTACT', seed: 8, hint: 'GET IN TOUCH' },
]

/* -------------------------------------------------------------------------- *
 *  SECTION E — CONTACT CARDS
 *  🔒 KEEP — the first three read from SECTION A automatically.
 *  ✏️ EDIT — only the last one ("BASED IN"), or add a new card.
 *  Allowed `kind` values: 'mail' | 'github' | 'linkedin' | 'location'
 * -------------------------------------------------------------------------- */

export const contactLinks: ContactLink[] = [
  {
    label: 'EMAIL',
    value: EMAIL,
    href: `mailto:${EMAIL}`,
    kind: 'mail',
  },
  {
    label: 'GITHUB',
    value: `github.com/${GITHUB_USER}`,
    href: `https://github.com/${GITHUB_USER}`,
    kind: 'github',
  },
  {
    label: 'LINKEDIN',
    value: LINKEDIN.replace(/^https?:\/\/(www\.)?/, ''),
    href: LINKEDIN,
    kind: 'linkedin',
  },
  {
    // ✏️ EDIT — your city.
    label: 'BASED IN',
    value: 'Yogyakarta, Indonesia',
    href: 'https://maps.google.com/?q=Yogyakarta',
    kind: 'location',
  },
]

/* -------------------------------------------------------------------------- *
 *  SECTION F — THE BIG CUT-OUT NAME ON THE HOME SCREEN
 *
 *  ⚠️ ONLY change this if you change your name.
 *  Every letter is one object. Line 1 sits above line 2.
 *
 *  ch       the letter itself
 *  variant  'plain'  = white letter, no box
 *           'box'    = white letter on a BLACK box
 *           'invert' = black letter on a WHITE box
 *           'accent' = white letter on a BLUE box
 *  rot      tilt in degrees (negative = left, positive = right)
 *  dy       push up/down in pixels (negative = up)
 *  scale    size (1 = normal, 1.1 = bigger, 0.9 = smaller)
 *  lower    true = show this letter as lowercase
 *  space    true = a gap between words (no other fields needed)
 *
 *  Tip: mix mostly 'plain' with 1–2 boxed letters per line. Too many boxes
 *  makes it look noisy instead of like cut-out paper.
 * -------------------------------------------------------------------------- */

/** ✏️ Line 1 — currently "YULI DWI" */
export const nameLine1 = [
  { ch: 'Y', variant: 'plain', rot: -3, dy: 0, scale: 1 },
  { ch: 'U', variant: 'plain', rot: 2, dy: 12, scale: 0.84, lower: true },
  { ch: 'L', variant: 'box', rot: -5, dy: -8, scale: 1.1 },
  { ch: 'I', variant: 'plain', rot: 3, dy: 4, scale: 1 },
  { ch: ' ', space: true },
  { ch: 'D', variant: 'plain', rot: -2, dy: -4, scale: 1.04 },
  { ch: 'W', variant: 'invert', rot: 4, dy: 8, scale: 0.9 },
  { ch: 'I', variant: 'plain', rot: -3, dy: -2, scale: 1.02 },
] as const

/** ✏️ Line 2 — currently "KURNIAWAN" */
export const nameLine2 = [
  { ch: 'K', variant: 'plain', rot: 2, dy: 0, scale: 1.04 },
  { ch: 'U', variant: 'box', rot: -4, dy: 8, scale: 0.92 },
  { ch: 'R', variant: 'plain', rot: 3, dy: -5, scale: 1 },
  { ch: 'N', variant: 'plain', rot: -2, dy: 3, scale: 0.98 },
  { ch: 'I', variant: 'plain', rot: 4, dy: -3, scale: 0.86, lower: true },
  { ch: 'A', variant: 'invert', rot: -3, dy: 6, scale: 1.06 },
  { ch: 'W', variant: 'plain', rot: 2, dy: -6, scale: 1 },
  { ch: 'A', variant: 'plain', rot: -4, dy: 4, scale: 0.9, lower: true },
  { ch: 'N', variant: 'plain', rot: 3, dy: -2, scale: 1.02 },
] as const
