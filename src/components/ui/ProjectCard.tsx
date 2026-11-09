import Badge from './Badge'
import CutButton from './CutButton'
import type { Project } from '@/types'

interface ProjectCardProps {
  project: Project
  index: number
  active?: boolean
  onActivate?: () => void
}

/**
 * Featured project card — black cut-out slab, floating status badge, an accent
 * spine that lights up on selection, and the slanted HUD buttons.
 */
export default function ProjectCard({ project, index, active, onActivate }: ProjectCardProps) {
  return (
    <article
      onMouseEnter={onActivate}
      onFocus={onActivate}
      className={`group card-shift relative animate-pop-in ${active ? 'is-active' : ''}`}
      style={{ animationDelay: `${0.18 + index * 0.1}s` }}
    >
      {/* Floating badge, overlapping the sliced top-right corner. */}
      <Badge
        label={project.badge.label}
        tone={project.badge.tone}
        className="absolute -top-3 right-3 z-20"
      />

      <div
        className={`clip-notch relative h-full bg-ink pl-[14px] transition-shadow duration-300 ${
          active ? 'shadow-cut-lg' : 'shadow-cut'
        }`}
      >
        {/* Accent spine */}
        <span
          className={`absolute inset-y-0 left-0 w-[6px] transition-colors duration-300 ${
            active ? 'bg-aqua-300' : 'bg-white/20'
          }`}
        />

        {/* Diagonal sheen sweeping the corner */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background:
              'linear-gradient(112deg, transparent 55%, rgba(34,184,255,0.18) 78%, transparent 92%)',
          }}
        />

        <div className="flex h-full flex-col gap-3 px-4 py-4 md:px-5 md:py-5">
          <h3 className="font-heavy text-[17px] uppercase leading-none tracking-[0.02em] md:text-xl">
            <span className="text-aqua-300">{project.title.slice(0, project.accentLength)}</span>
            <span className="whitespace-pre-wrap text-white">
              {project.title.slice(project.accentLength)}
            </span>
          </h3>

          <p className="text-[12px] leading-relaxed text-white/70 md:text-[12.5px]">
            {project.description}
          </p>

          <ul className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="chip border border-white/25 px-2 py-[2px] transition-colors duration-200 group-hover:border-aqua-300/70"
              >
                <span className="font-cond text-[9.5px] font-bold uppercase tracking-[0.2em] text-white/70">
                  {tag}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-2">
            <span className="font-cond text-[10px] font-bold tracking-[0.28em] text-white/55">
              {project.status}
            </span>

            <div className="flex flex-wrap items-center gap-2">
              {project.links.map((link) => (
                <CutButton
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  variant={link.primary ? 'solid' : 'ghost'}
                >
                  {link.label}
                </CutButton>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
