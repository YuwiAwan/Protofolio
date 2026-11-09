import RansomText from '@/components/RansomText'

interface ScreenHeaderProps {
  title: string
  seed?: number
  onBack: () => void
  /** Small caption rendered under the title. */
  caption?: string
}

/** Interior-screen title plate: cut-out heading plus the ESC · BACK affordance. */
export default function ScreenHeader({ title, seed = 3, onBack, caption }: ScreenHeaderProps) {
  return (
    <div className="flex flex-wrap items-end gap-x-5 gap-y-2 px-4 pt-2 md:px-10">
      <h1 className="font-display leading-[0.82]">
        <span className="sr-only">{title}</span>
        <span aria-hidden="true">
          <RansomText
            text={title}
            seed={seed}
            intensity={0.85}
            allowLower={false}
            animate
            baseDelay={0.05}
            className="text-[clamp(2.2rem,6vw,4.4rem)]"
          />
        </span>
      </h1>

      <button
        type="button"
        onClick={onBack}
        className="chip mb-2 bg-white px-4 py-2 shadow-[4px_4px_0_rgba(7,8,10,0.35)] transition-colors duration-200 hover:bg-aqua-200 md:px-3 md:py-1"
      >
        <span className="font-cond text-[11px] font-bold tracking-[0.3em] text-ink md:text-[10px]">
          <span className="md:hidden">← BACK</span>
          <span className="hidden md:inline">ESC · BACK</span>
        </span>
      </button>

      {caption && (
        <p className="mb-2 font-cond text-[11px] font-bold tracking-[0.32em] text-white/60">
          {caption}
        </p>
      )}
    </div>
  )
}
