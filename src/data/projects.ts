import { GITHUB_USER } from './profile'
import type { Project } from '@/types'

/* ========================================================================== *
 *  FILE 2 of 3 — YOUR PROJECTS  (the "FEATURED" cards on the Projects screen)
 *
 *  Label meaning:
 *    ⚠️  MUST CHANGE  — this is a fake placeholder right now
 *    ✏️  EDIT         — your real info, change the text freely
 *    🔒  KEEP         — leave it alone unless you know what it does
 * ========================================================================== */

/** 🔒 KEEP — builds a GitHub URL from your username in profile.ts. */
const gh = (repo: string) => `https://github.com/${GITHUB_USER}/${repo}`

/* -------------------------------------------------------------------------- *
 *  HOW ONE PROJECT CARD WORKS
 *
 *  id            🔒 any unique text, never shown on screen
 *  title         ✏️ the big heading, UPPERCASE
 *  accentLength  ✏️ how many first letters are BLUE
 *                   'YUWIB'  + 2 → "YU" blue, "WIB" white
 *                   'X SENT' + 1 → "X" blue, " SENT" white
 *  description   ✏️ 2–3 lines. Longer text still fits, the card grows.
 *  tags          ✏️ small outlined tags. 3 is the best number.
 *  badge.label   ✏️ the floating pill on the top-right corner. Keep it SHORT.
 *  badge.tone    ✏️ dot colour: 'live'(green) 'ml'(blue) 'data'(yellow)
 *                   'repo'(red) 'neutral'(white)
 *  status        ✏️ small grey text, bottom-left of the card
 *  links         ✏️ the buttons. primary:true = filled blue, else outlined.
 *
 *  To ADD a project: copy one whole { ... } block and paste it in the list.
 *  To REMOVE a project: delete its whole { ... } block.
 * -------------------------------------------------------------------------- */

export const projects: Project[] = [
  /* ----------------------------- PROJECT 1 ------------------------------- */
  {
    id: 'yuwib',
    title: 'YUWIB',
    accentLength: 2,
    description:
      'An anime discovery and tracking platform (inspired by MyAnimeList). Browse seasonal titles, search the catalogue and keep a personal watch list.',
    tags: ['React', 'TypeScript', 'Supabase'],
    badge: { label: 'REACT APP', tone: 'neutral' },
    status: 'NO. 01 · FRONTEND',
    links: [
      // ✏️ Once it's deployed, add above this line:
      //    { label: 'LIVE NOW', href: 'https://your-site.vercel.app', primary: true },
      // and remove `primary: true` from the GitHub button.
      { label: 'VIEW ON GITHUB', href: gh('YuWib-Listing-Anime-Web'), primary: true },
    ],
  },

  /* ----------------------------- PROJECT 2 ------------------------------- */
  {
    id: 'x-sentiment',
    title: 'X SENTIMENT ANALYSIS',
    accentLength: 1,
    description:
      'Machine learning classification of social media sentiment on platform X regarding ChatGPT. Evaluated using Logistic Regression and K-Nearest Neighbors algorithms.',
    tags: ['Python', 'Machine Learning', 'Data Analysis'],
    badge: { label: 'ML / NLP', tone: 'ml' },
    status: 'NO. 02 · DATA SCIENCE',
    // ✏️ No public repo yet. Once you upload it, add:
    //    { label: 'VIEW ON GITHUB', href: gh('your-repo-name'), primary: true },
    links: [],
  },

  /* ----------------------------- PROJECT 3 ------------------------------- */
  {
    id: 'ksport',
    title: 'KSPORT',
    accentLength: 1,
    description:
      'Storefront landing page for table tennis equipment. Hand-built with HTML, CSS and vanilla JavaScript, deployed on Vercel.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    badge: { label: 'LIVE SITE', tone: 'live' },
    status: 'NO. 03 · FRONTEND',
    links: [
      { label: 'LIVE NOW', href: 'https://ksport.vercel.app', primary: true },
      { label: 'VIEW ON GITHUB', href: gh('KSPORT') },
    ],
  },

  /* ----------------------------- PROJECT 4 ------------------------------- */
  {
    id: 'ckd',
    title: 'CHRONIC KIDNEY DISEASE',
    accentLength: 7,
    description:
      'Early detection of chronic kidney disease from the Kaggle CKD dataset: exploratory analysis and preprocessing, then a machine learning prediction model.',
    tags: ['Python', 'Jupyter', 'Machine Learning'],
    badge: { label: 'DATA / ML', tone: 'data' },
    status: 'NO. 04 · DATA SCIENCE',
    links: [
      { label: 'MODEL', href: gh('Uas_BDDM_Chronic_Kidney_Disease'), primary: true },
      { label: 'EDA', href: gh('Uas_BDAL_Kelompok_Chronic_KIdney_Disease') },
    ],
  },

  /* ---------------------- 👉 ADD PROJECT 5 HERE --------------------------- *
   * Copy a block above, paste it here, and change the text.
   * ----------------------------------------------------------------------- */
]

/* -------------------------------------------------------------------------- *
 *  BACKUP LIST FOR THE "ALL REPOSITORIES" SECTION
 *
 *  🔒 KEEP — you normally never touch this.
 *
 *  That section tries to load your real repos live from GitHub. This list is
 *  only shown when that fails (no internet, GitHub is busy, or GITHUB_USER in
 *  profile.ts is still wrong). The heading then says "OFFLINE COPY".
 *
 *  ⚠️ If it always says OFFLINE COPY → your GITHUB_USER is wrong.
 * -------------------------------------------------------------------------- */

export const fallbackRepos = [
  {
    id: -1,
    name: 'YuWib-Listing-Anime-Web',
    description: 'Anime discovery and tracking platform built with React and Tailwind CSS.',
    html_url: gh('YuWib-Listing-Anime-Web'),
    stargazers_count: 0,
    language: 'TypeScript',
    fork: false,
    pushed_at: '2026-09-29T12:25:22Z',
  },
  {
    id: -2,
    name: 'KSPORT',
    description: 'Table tennis equipment storefront — HTML, CSS and JavaScript.',
    html_url: gh('KSPORT'),
    stargazers_count: 0,
    language: 'CSS',
    fork: false,
    pushed_at: '2025-07-07T04:42:48Z',
  },
  {
    id: -3,
    name: 'Uas_BDDM_Chronic_Kidney_Disease',
    description: 'Machine learning model for early detection of chronic kidney disease.',
    html_url: gh('Uas_BDDM_Chronic_Kidney_Disease'),
    stargazers_count: 0,
    language: 'Jupyter Notebook',
    fork: false,
    pushed_at: '2025-01-24T07:20:40Z',
  },
  {
    id: -4,
    name: 'Uas_BDAL_Kelompok_Chronic_KIdney_Disease',
    description: 'EDA and preprocessing of the Kaggle Chronic Kidney Disease dataset.',
    html_url: gh('Uas_BDAL_Kelompok_Chronic_KIdney_Disease'),
    stargazers_count: 0,
    language: 'Jupyter Notebook',
    fork: false,
    pushed_at: '2025-01-20T07:26:03Z',
  },
]
