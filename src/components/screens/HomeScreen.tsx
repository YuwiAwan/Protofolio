import CharacterArt from '@/components/CharacterArt'
import RansomText from '@/components/RansomText'
import WaterBackground from '@/components/backgrounds/WaterBackground'
import { nameLine1, nameLine2, navItems, profile, stats } from '@/data/profile'
import { useMounted } from '@/hooks/useMounted'
import { play } from '@/lib/sfx'
import type { ScreenId } from '@/types'

interface HomeScreenProps {
  activeIndex: number
  onHover: (index: number) => void
  onSelect: (id: ScreenId) => void
}

/** Title screen: cut-out name, intro slab, the main menu and the art column. */
export default function HomeScreen({ activeIndex, onHover, onSelect }: HomeScreenProps) {
  const mounted = useMounted()

  return (
    <>
      <WaterBackground />

      <main className="relative z-10 grid min-h-0 flex-1 grid-cols-1 gap-4 overflow-hidden px-4 md:px-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)]">
        {/* ---------------------------- LEFT ---------------------------- */}
        <div className="scrollbar-hide flex min-h-0 flex-col justify-center overflow-y-auto py-4">
          <p
            className={`mb-3 font-cond text-[11px] font-bold tracking-[0.55em] text-aqua-50 md:text-sm ${
              mounted ? 'animate-fade-up' : 'opacity-0'
            }`}
          >
            {profile.eyebrow}
          </p>

          <h1 className="font-display leading-[0.82]">
            <span className="sr-only">{profile.fullName}</span>
            <span aria-hidden="true">
              <RansomText
                letters={nameLine1}
                animate={mounted}
                baseDelay={0.1}
                className="text-[clamp(2.4rem,7.4vw,6rem)]"
              />
              <span className="block h-2" />
              <RansomText
                letters={nameLine2}
                animate={mounted}
                baseDelay={0.42}
                className="ml-1 text-[clamp(2.4rem,7.4vw,6rem)]"
              />
            </span>
          </h1>

          <div
            className={`mt-4 flex items-center gap-3 ${mounted ? 'animate-fade-up' : 'opacity-0'}`}
            style={{ animationDelay: '0.7s' }}
          >
            <span className="h-1.5 w-16 shrink-0 bg-blood" />
            <span className="font-cond text-[11px] font-bold tracking-[0.35em] text-white md:text-xs">
              {profile.tagline}
            </span>
          </div>

          {/* Tilted intro slab */}
          <div
            className={`tilt-card mt-5 max-w-[36rem] border-l-4 border-blood bg-ink px-5 py-4 md:px-6 md:py-5 ${
              mounted ? 'animate-slide-in' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.55s' }}
          >
            <div className="tilt-card-inner">
              <div className="mb-2 flex items-center gap-2">
                <span className="font-cond text-[10px] font-bold tracking-[0.35em] text-aqua-200">
                  / 01 — PROFILE
                </span>
                <span className="h-px w-10 bg-white/30" />
              </div>
              <p className="max-w-[34rem] text-[12.5px] leading-relaxed text-white/90 md:text-[13.5px]">
                {profile.intro}
              </p>
            </div>
          </div>

          {/* Quick stat strip */}
          <dl
            className={`mt-5 flex flex-wrap gap-x-6 gap-y-2 ${mounted ? 'animate-fade-up' : 'opacity-0'}`}
            style={{ animationDelay: '0.78s' }}
          >
            {stats.map((stat) => (
              <div key={stat.label} className="border-l-2 border-white/30 pl-2.5">
                <dt className="font-cond text-[9.5px] font-bold tracking-[0.3em] text-aqua-100/80">
                  {stat.label}
                </dt>
                <dd className="font-cond text-[12px] font-bold tracking-[0.16em] text-white">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>

          {/* Main menu */}
          <nav className="mt-6 flex flex-col gap-1" aria-label="Main">
            {navItems.map((item, i) => {
              const isActive = i === activeIndex
              return (
                <button
                  key={item.id}
                  type="button"
                  onMouseEnter={() => {
                    if (!isActive) play('hover')
                    onHover(i)
                  }}
                  onFocus={() => onHover(i)}
                  onClick={() => onSelect(item.id)}
                  aria-label={item.label}
                  aria-current={isActive ? 'true' : undefined}
                  className={`nav-row text-left ${isActive ? 'is-active' : ''} ${
                    mounted ? 'animate-fade-up' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${0.85 + i * 0.09}s` }}
                >
                  <span aria-hidden="true">
                    <RansomText
                      text={item.label}
                      seed={item.seed}
                      intensity={0.75}
                      className="font-display text-[clamp(1.4rem,2.9vw,2.4rem)]"
                    />
                  </span>
                  <span
                    className={`flex items-center gap-2 transition-opacity duration-200 ${
                      isActive ? 'opacity-100' : 'opacity-0'
                    }`}
                    aria-hidden="true"
                  >
                    <span className="text-lg text-blood">◀</span>
                    <span className="hidden font-cond text-[10px] font-bold tracking-[0.3em] text-white/70 md:inline">
                      {item.hint}
                    </span>
                  </span>
                </button>
              )
            })}
          </nav>
        </div>

        {/* ---------------------------- RIGHT --------------------------- */}
        <div className="relative hidden min-h-0 lg:block">
          <CharacterArt
            chips={[
              { label: `LV. 01 // ${profile.role.split(' ')[0].toUpperCase()}`, tone: 'ink' },
              { label: 'REACT · TYPESCRIPT · PYTHON', tone: 'bone' },
            ]}
          />
        </div>
      </main>
    </>
  )
}
