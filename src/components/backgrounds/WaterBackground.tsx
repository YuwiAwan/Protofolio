import { useMemo } from 'react'

/**
 * Home stage: bright underwater depth gradient, god rays, caustics, drifting
 * bubbles and a couple of hard black shards to keep the edges graphic.
 */
export default function WaterBackground() {
  const rays = useMemo(
    () => [
      { left: '6%', width: '90px', delay: '0s', duration: '13s' },
      { left: '18%', width: '46px', delay: '-3s', duration: '17s' },
      { left: '31%', width: '120px', delay: '-6s', duration: '15s' },
      { left: '48%', width: '58px', delay: '-9s', duration: '19s' },
      { left: '63%', width: '150px', delay: '-2s', duration: '16s' },
      { left: '80%', width: '70px', delay: '-11s', duration: '14s' },
      { left: '92%', width: '110px', delay: '-5s', duration: '18s' },
    ],
    [],
  )

  const bubbles = useMemo(
    () =>
      Array.from({ length: 26 }, (_, i) => ({
        key: i,
        size: 4 + ((i * 7) % 18),
        left: `${(i * 37) % 100}%`,
        delay: `-${(i * 1.7) % 18}s`,
        duration: `${12 + ((i * 3) % 14)}s`,
        opacity: 0.15 + (i % 5) * 0.11,
      })),
    [],
  )

  return (
    <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(168deg, #8FE2FF 0%, #33BEFF 18%, #0E96EE 42%, #0B6FD0 66%, #0A55AC 84%, #062C60 100%)',
        }}
      />

      {/* Surface glow, top-left */}
      <div
        className="absolute -left-[15%] -top-[35%] h-[95%] w-[85%] animate-caustic"
        style={{
          background:
            'radial-gradient(closest-side, rgba(255,255,255,0.75), rgba(255,255,255,0) 72%)',
        }}
      />
      <div
        className="absolute left-[28%] top-[8%] h-[60%] w-[55%] animate-caustic"
        style={{
          animationDelay: '-7s',
          background:
            'radial-gradient(closest-side, rgba(215,244,255,0.55), rgba(215,244,255,0) 70%)',
        }}
      />
      <div
        className="absolute bottom-[-10%] left-[-8%] h-[55%] w-[60%] animate-caustic"
        style={{
          animationDelay: '-12s',
          background: 'radial-gradient(closest-side, rgba(34,184,255,0.55), rgba(34,184,255,0) 70%)',
        }}
      />

      <div className="absolute inset-0 animate-rays">
        {rays.map((r) => (
          <span
            key={r.left}
            className="ray animate-sway"
            style={{
              left: r.left,
              width: r.width,
              animationDelay: r.delay,
              animationDuration: r.duration,
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0">
        {bubbles.map((b) => (
          <span
            key={b.key}
            className="absolute bottom-[-10%] animate-rise rounded-full border border-white/70"
            style={{
              left: b.left,
              width: b.size,
              height: b.size,
              opacity: b.opacity,
              background:
                'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.9), rgba(255,255,255,0.05) 70%)',
              animationDelay: b.delay,
              animationDuration: b.duration,
            }}
          />
        ))}
      </div>

      <div className="halftone absolute inset-0 opacity-[0.14] mix-blend-multiply" />

      {/* Hard graphic shards — kept off the type so nothing crosses the menu. */}
      <div className="absolute -left-32 top-0 h-full w-36 -skew-x-[14deg] bg-ink/45" />
      <div className="absolute -bottom-24 -right-28 h-[55%] w-64 skew-x-[18deg] bg-ink/25" />
      <div className="absolute bottom-[6%] right-[-4rem] h-2 w-[26%] -rotate-6 bg-blood/60" />

      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(120% 90% at 40% 35%, rgba(0,0,0,0) 45%, rgba(4,28,63,0.55) 100%)',
        }}
      />
    </div>
  )
}
