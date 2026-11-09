import type { SkillGroup } from '@/types'
export const skillGroups: SkillGroup[] = [
  /* ------------------------------ GROUP 1 -------------------------------- */
  {
    id: 'frontend',
    title: 'FRONTEND DEVELOPMENT',
    blurb: 'INTERFACE / STATE / MOTION',
    skills: [
      { name: 'REACT', value: 65, note: 'Hooks, composition, render-cost discipline' },
      { name: 'TYPESCRIPT', value: 65, note: 'Typed props, discriminated unions, generics' },
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
      { name: 'PYTHON', value: 80, note: 'Analysis scripting and model pipelines' },
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
