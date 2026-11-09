import type { SkillGroup } from '@/types'

/* ========================================================================== *
 *  FILE 3 of 3 — YOUR SKILLS  (the stat bars on the Skills screen)
 *
 *  Label meaning:
 *    ✏️  EDIT   — your real info, change the text freely
 *    🔒  KEEP   — leave it alone unless you know what it does
 * ========================================================================== */

/* -------------------------------------------------------------------------- *
 *  HOW ONE GROUP WORKS
 *
 *  id      🔒 any unique text, never shown on screen.
 *             ⚠️ EXCEPTION: the id 'data' makes that group's bars LIGHT BLUE
 *             instead of white. Rename it and the bars turn white.
 *  title   ✏️ the white slanted plate, UPPERCASE
 *  blurb   ✏️ small blue text next to the plate
 *  skills  ✏️ one row per skill
 *
 *  HOW ONE SKILL ROW WORKS
 *
 *  name    ✏️ shown on the left. UPPERCASE. Long names wrap to 2 lines, fine.
 *  value   ✏️ 0–100. This is the bar length AND the number on the right.
 *  note    ✏️ optional. Only appears as a tooltip when you hover the name.
 *
 *  To ADD a skill: copy one { ... } line and paste it in the list.
 *  To ADD a group: copy a whole group block and give it a new `id`.
 *  4–6 skills per group looks best.
 * -------------------------------------------------------------------------- */

export const skillGroups: SkillGroup[] = [
  /* ------------------------------ GROUP 1 -------------------------------- */
  {
    id: 'frontend',
    title: 'FRONTEND DEVELOPMENT',
    blurb: 'INTERFACE / STATE / MOTION',
    skills: [
      { name: 'REACT', value: 50, note: 'Hooks, composition, render-cost discipline' },
      { name: 'TYPESCRIPT', value: 45, note: 'Typed props, discriminated unions, generics' },
      { name: 'TAILWIND CSS', value: 80, note: 'Design tokens and utility-first systems' },
      { name: 'VITE', value: 60, note: 'Dev server, bundling, build configuration' },
    ],
  },

  /* ------------------------------ GROUP 2 -------------------------------- */
  {
    id: 'data', // 🔒 this exact id is what makes these bars light blue
    title: 'DATA & MACHINE LEARNING',
    blurb: 'CLEAN / MODEL / EVALUATE',
    skills: [
      { name: 'PYTHON', value: 90, note: 'Analysis scripting and model pipelines' },
    ],
  },

  /* ----------------------- 👉 ADD GROUP 3 HERE ---------------------------- *
   * Copy a group above, paste it here, give it a NEW `id`, change the skills.
   * ----------------------------------------------------------------------- */
]

/**
 * 🔒 KEEP — the big "OVERALL" number at the top of the Skills screen.
 * It is the average of every `value` above, so it updates by itself.
 */
export const overallRating = Math.round(
  skillGroups.flatMap((g) => g.skills).reduce((sum, s, _, arr) => sum + s.value / arr.length, 0),
)
