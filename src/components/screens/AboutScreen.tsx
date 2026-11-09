import StripeStage from '@/components/backgrounds/StripeStage'
import ScreenHeader from '@/components/layout/ScreenHeader'
import SectionLabel from '@/components/ui/SectionLabel'
import { profile, stats } from '@/data/profile'
import { skillGroups } from '@/data/skills'

interface AboutScreenProps {
  onBack: () => void
}

/** The long version — the copy the home screen only has room to summarise. */
export default function AboutScreen({ onBack }: AboutScreenProps) {
  return (
    <>
      <StripeStage />

      <div className="scrollbar-persona relative z-10 min-h-0 flex-1 animate-screen-in overflow-y-auto">
        <ScreenHeader title="ABOUT" seed={5} onBack={onBack} />

        <div className="grid gap-8 px-4 pb-10 pt-6 md:px-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
          <section>
            <SectionLabel className="mb-6" meta={profile.role.toUpperCase()}>
              PROFILE
            </SectionLabel>

            <div className="space-y-4">
              {profile.about.map((paragraph, i) => (
                <div
                  key={i}
                  className="tilt-card animate-slide-in border-l-4 border-blood bg-ink px-5 py-4 md:px-6"
                  style={{ animationDelay: `${0.1 + i * 0.1}s` }}
                >
                  <p className="tilt-card-inner text-[12.5px] leading-relaxed text-white/85 md:text-[13.5px]">
                    {paragraph}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <aside className="space-y-8">
            <div>
              <SectionLabel className="mb-4">EDUCATION</SectionLabel>
              <div className="clip-notch-sm animate-pop-in bg-white px-5 py-4 shadow-cut">
                <p className="font-heavy text-base uppercase leading-tight tracking-[0.01em] text-ink">
                  <span className="text-aqua-400">S.KOM</span> INFORMATICS
                </p>
                <p className="mt-1 font-cond text-[12px] font-bold tracking-[0.16em] text-ink/70">
                  {profile.university.toUpperCase()}
                </p>
              </div>
            </div>

            <div>
              <SectionLabel className="mb-4">AT A GLANCE</SectionLabel>
              <dl className="space-y-2">
                {stats.map((stat, i) => (
                  <div
                    key={stat.label}
                    className="flex animate-fade-up items-center justify-between gap-4 border-b border-white/20 pb-1.5"
                    style={{ animationDelay: `${0.2 + i * 0.08}s` }}
                  >
                    <dt className="font-cond text-[10px] font-bold tracking-[0.3em] text-white/55">
                      {stat.label}
                    </dt>
                    <dd className="font-cond text-[12px] font-bold tracking-[0.14em] text-white">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div>
              <SectionLabel className="mb-4">TOOLBOX</SectionLabel>
              <ul className="flex flex-wrap gap-2">
                {skillGroups
                  .flatMap((group) => group.skills)
                  .map((skill, i) => (
                    <li
                      key={skill.name}
                      className="chip animate-pop-in border border-white/35 bg-ink/40 px-2.5 py-1"
                      style={{ animationDelay: `${0.25 + i * 0.04}s` }}
                    >
                      <span className="font-cond text-[10px] font-bold tracking-[0.2em] text-white/85">
                        {skill.name}
                      </span>
                    </li>
                  ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </>
  )
}
