interface GridStageProps {
  /** Mirrored watermark type, like the game's UI plate. */
  watermark?: string
}

/**
 * Deep-navy stage: heavy halftone, faint PCB traces and the big black diagonal
 * wedge that the interior panels sit on.
 */
export default function GridStage({ watermark = 'STAT SHEET' }: GridStageProps) {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(158deg, #1C82D4 0%, #0C4E8C 38%, #08315C 66%, #020D1E 100%)',
        }}
      />

      <div className="halftone-lg absolute inset-0 opacity-25 mix-blend-multiply" />
      <div className="circuit absolute inset-0 opacity-[0.08]" />

      <span
        className="pointer-events-none absolute bottom-[8%] right-[6%] select-none font-display text-[clamp(3rem,9vw,7.5rem)] leading-none text-white/[0.035]"
        style={{ transform: 'scaleX(-1) rotate(-2deg)' }}
      >
        {watermark}
      </span>

      {/* Black diagonal wedge rising from the bottom-left */}
      <div
        className="absolute inset-0 bg-ink/80"
        style={{ clipPath: 'polygon(0 14%, 86% 100%, 0 100%)' }}
      />
      <div
        className="absolute inset-0 bg-aqua-300/20"
        style={{ clipPath: 'polygon(0 13.2%, 86% 99.2%, 84% 100%, 0 15%)' }}
      />

      {/* Slow scanline */}
      <div className="absolute inset-x-0 top-0 h-24 animate-scan bg-gradient-to-b from-transparent via-white/[0.04] to-transparent" />

      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(120% 95% at 35% 40%, rgba(0,0,0,0) 42%, rgba(2,13,30,0.6) 100%)',
        }}
      />
    </div>
  )
}
