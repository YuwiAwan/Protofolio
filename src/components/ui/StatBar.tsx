import { useEffect, useState } from 'react'

interface StatBarProps {
  name: string
  value: number
  note?: string
  /** Seconds of stagger before this row fills. */
  delay?: number
  accent?: boolean
}

/**
 * RPG stat row: label, a skewed striped meter that fills on mount, and the
 * raw number counting up alongside it.
 */
export default function StatBar({ name, value, note, delay = 0, accent = false }: StatBarProps) {
  const [width, setWidth] = useState(0)
  const [shown, setShown] = useState(0)

  useEffect(() => {
    const id = window.setTimeout(() => setWidth(value), 90 + delay * 1000)
    return () => window.clearTimeout(id)
  }, [value, delay])

  // Count the number up in step with the bar so the two never disagree.
  useEffect(() => {
    if (width === 0) return
    const start = performance.now()
    const duration = 1050
    let frame = 0

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration)
      const eased = 1 - Math.pow(1 - t, 3)
      setShown(Math.round(value * eased))
      if (t < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [width, value])

  return (
    <li className="group/stat grid grid-cols-[minmax(5.5rem,8.5rem)_minmax(0,1fr)_2.25rem] items-center gap-x-3 py-1 md:grid-cols-[minmax(7rem,13.5rem)_minmax(0,1fr)_2.25rem] md:gap-x-5">
      <span
        className="font-cond text-[11px] font-bold uppercase leading-[1.15] tracking-[0.12em] text-white transition-colors duration-200 group-hover/stat:text-aqua-100 md:text-[13px]"
        title={note ?? name}
      >
        {name}
      </span>

      <div className="stat-track">
        <div
          className={`stat-fill ${accent ? 'stat-fill-accent' : ''}`}
          style={{ width: `${width}%` }}
        />
        {/* Ticks every 25% keep the meter reading like a game gauge. */}
        <div className="pointer-events-none absolute inset-0 flex">
          {[0, 1, 2].map((i) => (
            <span key={i} className="flex-1 border-r border-ink/45" />
          ))}
          <span className="flex-1" />
        </div>
      </div>

      <span className="text-right font-cond text-[11px] font-bold tabular-nums tracking-widest text-white md:text-[13px]">
        {shown}
      </span>
    </li>
  )
}
