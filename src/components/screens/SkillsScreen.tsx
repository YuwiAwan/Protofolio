import CharacterArt from '@/components/CharacterArt'
import GridStage from '@/components/backgrounds/GridStage'
import ScreenHeader from '@/components/layout/ScreenHeader'
import StatBar from '@/components/ui/StatBar'
import { overallRating, skillGroups } from '@/data/skills'
import { profile } from '@/data/profile'

interface SkillsScreenProps {
  onBack: () => void
}

/** Running index across every group, so the meters fill in one continuous cascade. */
const rowOffsets = skillGroups.reduce<number[]>((acc, _group, i) => {
  acc.push(i === 0 ? 0 : acc[i - 1] + skillGroups[i - 1].skills.length)
  return acc
}, [])

/** The stat sheet: grouped skill meters on the left, character art on the right. */
export default function SkillsScreen({ onBack }: SkillsScreenProps) {

  return (
    <>
      <GridStage />

      <div className="scrollbar-persona relative z-10 min-h-0 flex-1 animate-screen-in overflow-y-auto">
        <ScreenHeader title="SKILLS" seed={11} onBack={onBack} />

        <div className="grid gap-6 px-4 pb-10 pt-6 md:px-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
          {/* --------------------------- METERS --------------------------- */}
          <div className="space-y-9">
            {/* Overall rating plate */}
            <div className="flex flex-wrap items-center gap-4 animate-fade-up">
              <div className="chip bg-white px-4 py-1.5 shadow-cut-sm">
                <span className="font-heavy text-sm uppercase tracking-[0.08em] text-ink">
                  OVERALL
                </span>
              </div>
              <span className="font-display text-4xl leading-none text-white drop-shadow-[0_5px_0_rgba(7,8,10,0.6)] md:text-5xl">
                {overallRating}
              </span>
              <span className="font-cond text-[11px] font-bold tracking-[0.3em] text-white/55">
                {profile.role.toUpperCase()}
              </span>
            </div>

            {skillGroups.map((group, gi) => (
              <section
                key={group.id}
                className="animate-slide-left"
                style={{ animationDelay: `${0.12 + gi * 0.12}s` }}
                aria-labelledby={`group-${group.id}`}
              >
                <div className="mb-4 flex flex-wrap items-center gap-3">
                  <h2
                    id={`group-${group.id}`}
                    className="chip bg-white px-4 py-1.5 shadow-cut-sm"
                  >
                    <span className="font-heavy text-[13px] uppercase tracking-[0.06em] text-ink md:text-[15px]">
                      {group.title}
                    </span>
                  </h2>
                  <span className="font-cond text-[10px] font-bold tracking-[0.3em] text-aqua-100/70">
                    {group.blurb}
                  </span>
                </div>

                <ul className="max-w-[40rem] space-y-2">
                  {group.skills.map((skill, si) => (
                    <StatBar
                      key={skill.name}
                      name={skill.name}
                      value={skill.value}
                      note={skill.note}
                      delay={(rowOffsets[gi] + si) * 0.08}
                      accent={group.id === 'data'}
                    />
                  ))}
                </ul>
              </section>
            ))}

            <p className="max-w-[34rem] border-l-2 border-aqua-300 pl-3 text-[12px] leading-relaxed text-white/60">
              Ratings are self-assessed and weighted by how often I reach for each tool in real
              work, not by how long ago I first used it.
            </p>
          </div>

          {/* ------------------------ CHARACTER SLOT ----------------------
           * Height is tied to the viewport, not to the stat list, so the
           * figure stands on the footer instead of floating mid-panel.
           * ------------------------------------------------------------- */}
          <div className="relative hidden lg:sticky lg:top-0 lg:block lg:h-[calc(100dvh-12.5rem)] lg:min-h-[460px]">
            <CharacterArt showFrame={false} className="animate-slide-left" />
          </div>
        </div>
      </div>
    </>
  )
}
