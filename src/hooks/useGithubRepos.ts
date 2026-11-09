import { useEffect, useState } from 'react'

import { fallbackRepos } from '@/data/projects'
import { GITHUB_USER } from '@/data/profile'
import type { Repo } from '@/types'

export type FeedState = 'loading' | 'live' | 'fallback'

interface Feed {
  repos: Repo[]
  state: FeedState
  message: string
}

/**
 * Pulls the public repositories for {@link GITHUB_USER}.
 *
 * The GitHub REST API is unauthenticated here, so it can rate-limit or fail
 * outright; either way we fall back to the curated list rather than rendering
 * an empty section.
 */
export function useGithubRepos(limit = 6): Feed {
  const [feed, setFeed] = useState<Feed>({
    repos: [],
    state: 'loading',
    message: 'CONTACTING GITHUB…',
  })

  useEffect(() => {
    const controller = new AbortController()

    async function load() {
      try {
        const res = await fetch(
          `https://api.github.com/users/${GITHUB_USER}/repos?sort=pushed&per_page=100`,
          { signal: controller.signal, headers: { Accept: 'application/vnd.github+json' } },
        )
        if (!res.ok) throw new Error(`GitHub responded ${res.status}`)

        const all = (await res.json()) as Repo[]
        const repos = all
          .filter((r) => !r.fork)
          .sort((a, b) => Date.parse(b.pushed_at) - Date.parse(a.pushed_at))
          .slice(0, limit)

        if (repos.length === 0) throw new Error('no public repositories')

        setFeed({
          repos,
          state: 'live',
          message: `${repos.length} REPOSITORIES · LIVE FROM GITHUB`,
        })
      } catch (error) {
        if (controller.signal.aborted) return
        setFeed({
          repos: fallbackRepos.slice(0, limit),
          state: 'fallback',
          message: `${Math.min(fallbackRepos.length, limit)} REPOSITORIES · OFFLINE COPY`,
        })
        if (import.meta.env.DEV) console.warn('[github]', error)
      }
    }

    void load()
    return () => controller.abort()
  }, [limit])

  return feed
}
