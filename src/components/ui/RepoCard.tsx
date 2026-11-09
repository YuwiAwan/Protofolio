import Badge from './Badge'
import CutButton from './CutButton'
import type { Repo } from '@/types'

/** `x-sentiment-analysis` → `['X', 'SENTIMENT ANALYSIS']` for the two-tone title. */
function splitName(name: string): [string, string] {
  const words = name.replace(/[_-]+/g, ' ').trim().toUpperCase().split(' ')
  return [words[0] ?? name.toUpperCase(), words.slice(1).join(' ')]
}

interface RepoCardProps {
  repo: Repo
  index: number
}

/** Light counterpart to {@link ProjectCard} — one row of the GitHub feed. */
export default function RepoCard({ repo, index }: RepoCardProps) {
  const [head, tail] = splitName(repo.name)

  return (
    <article
      className="group card-shift relative animate-pop-in"
      style={{ animationDelay: `${0.1 + index * 0.06}s` }}
    >
      <Badge
        label={repo.language ?? 'REPO'}
        tone={repo.language ? 'ml' : 'repo'}
        surface="light"
        className="absolute -top-3 right-3 z-20"
      />

      <div className="clip-notch-sm relative flex h-full flex-col gap-2 bg-white px-4 py-3.5 shadow-cut">
        <h3 className="font-heavy text-[15px] uppercase leading-tight tracking-[0.01em] md:text-base">
          <span className="text-aqua-400">{head}</span>
          {tail && <span className="text-ink"> {tail}</span>}
        </h3>

        <p className="line-clamp-2 text-[11.5px] leading-relaxed text-ink/65">
          {repo.description ?? 'No description yet, but the code speaks for itself.'}
        </p>

        <div className="mt-auto flex items-center justify-between gap-3 pt-2">
          <span className="font-cond text-[11px] font-bold tracking-[0.2em] text-ink/70">
            ★ {repo.stargazers_count}
          </span>
          <CutButton
            href={repo.html_url}
            target="_blank"
            rel="noreferrer noopener"
            variant="solid"
            compact
          >
            VIEW ON GITHUB
          </CutButton>
        </div>
      </div>
    </article>
  )
}
