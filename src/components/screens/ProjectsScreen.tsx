import { useState } from 'react'

import StripeStage from '@/components/backgrounds/StripeStage'
import ScreenHeader from '@/components/layout/ScreenHeader'
import CutButton from '@/components/ui/CutButton'
import ProjectCard from '@/components/ui/ProjectCard'
import RepoCard from '@/components/ui/RepoCard'
import SectionLabel from '@/components/ui/SectionLabel'
import { GITHUB_USER } from '@/data/profile'
import { projects } from '@/data/projects'
import { useGithubRepos } from '@/hooks/useGithubRepos'

interface ProjectsScreenProps {
  onBack: () => void
}

/** Featured work above, a live feed of every public repository below. */
export default function ProjectsScreen({ onBack }: ProjectsScreenProps) {
  const [active, setActive] = useState(0)
  const { repos, state, message } = useGithubRepos(6)

  return (
    <>
      <StripeStage />

      <div className="scrollbar-persona relative z-10 min-h-0 flex-1 animate-screen-in overflow-y-auto">
        <ScreenHeader title="PROJECTS" seed={3} onBack={onBack} />

        <div className="space-y-8 px-4 pb-10 pt-6 md:px-10">
          {/* ------------------------- FEATURED ------------------------- */}
          <section aria-labelledby="featured-heading">
            <SectionLabel
              className="mb-6"
              meta={`${projects.length} SELECTED BUILDS`}
            >
              FEATURED
            </SectionLabel>
            <h2 id="featured-heading" className="sr-only">
              Featured projects
            </h2>

            <div className="grid gap-x-6 gap-y-8 sm:grid-cols-2 xl:grid-cols-3">
              {projects.map((project, i) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={i}
                  active={i === active}
                  onActivate={() => setActive(i)}
                />
              ))}

              {/* Fills the third column and doubles as the catch-all link. */}
              <article
                className="group card-shift relative hidden animate-pop-in xl:block"
                style={{ animationDelay: '0.38s' }}
              >
                <div className="clip-notch flex h-full flex-col items-start justify-center gap-3 border-[3px] border-dashed border-white/45 bg-ink/25 px-5 py-6 backdrop-blur-[2px] transition-colors duration-300 group-hover:border-white/80">
                  <p className="font-heavy text-lg uppercase leading-tight tracking-[0.02em] text-white">
                    MORE IN THE
                    <br />
                    <span className="text-aqua-200">ARCHIVE</span>
                  </p>
                  <p className="text-[12px] leading-relaxed text-white/65">
                    Experiments, coursework and work in progress all live on GitHub.
                  </p>
                  <CutButton
                    href={`https://github.com/${GITHUB_USER}?tab=repositories`}
                    target="_blank"
                    rel="noreferrer noopener"
                    variant="ghost"
                    className="mt-1"
                  >
                    BROWSE ALL
                  </CutButton>
                </div>
              </article>
            </div>
          </section>

          {/* ---------------------- ALL REPOSITORIES -------------------- */}
          <section aria-labelledby="repos-heading">
            <SectionLabel className="mb-6" meta={message}>
              ALL REPOSITORIES
            </SectionLabel>
            <h2 id="repos-heading" className="sr-only">
              All repositories
            </h2>

            {state === 'loading' ? (
              <div className="grid gap-x-6 gap-y-8 sm:grid-cols-2 xl:grid-cols-3">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="clip-notch-sm h-[132px] animate-pulse bg-white/20 shadow-cut"
                    style={{ animationDelay: `${i * 0.12}s` }}
                  />
                ))}
              </div>
            ) : (
              <div className="grid gap-x-6 gap-y-8 sm:grid-cols-2 xl:grid-cols-3">
                {repos.map((repo, i) => (
                  <RepoCard key={repo.id} repo={repo} index={i} />
                ))}
              </div>
            )}
          </section>
        </div>
      </div>
    </>
  )
}
