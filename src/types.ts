/** Shared domain types for the portfolio. */

export type ScreenId = 'home' | 'projects' | 'skills' | 'about' | 'contact'

export type BadgeTone = 'live' | 'ml' | 'data' | 'repo' | 'neutral'

export interface NavItem {
  id: ScreenId
  label: string
  seed: number
  hint: string
}

export interface ProjectLink {
  label: string
  href: string
  /** Solid blue call-to-action vs. outlined secondary. */
  primary?: boolean
}

export interface Project {
  id: string
  /** Full display title. */
  title: string
  /** How many leading characters of `title` are painted in the accent colour. */
  accentLength: number
  description: string
  tags: string[]
  badge: { label: string; tone: BadgeTone }
  /** Small footer label — "LIVE NOW", "HIGHLIGHT", … */
  status: string
  links: ProjectLink[]
}

export interface Repo {
  id: number
  name: string
  description: string | null
  html_url: string
  stargazers_count: number
  language: string | null
  fork: boolean
  pushed_at: string
}

export interface Skill {
  name: string
  value: number
  /** Optional one-line note shown when the row is focused. */
  note?: string
}

export interface SkillGroup {
  id: string
  title: string
  blurb: string
  skills: Skill[]
}

export interface ContactLink {
  label: string
  value: string
  href: string
  kind: 'mail' | 'github' | 'linkedin' | 'location'
}
