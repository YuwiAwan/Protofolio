import type { BadgeTone } from '@/types'

const DOT: Record<BadgeTone, string> = {
  live: 'bg-volt',
  ml: 'bg-aqua-200',
  data: 'bg-gold',
  repo: 'bg-blood',
  neutral: 'bg-white',
}

interface BadgeProps {
  label: string
  tone?: BadgeTone
  /** Dark pill on light cards, light pill on dark cards. */
  surface?: 'dark' | 'light'
  className?: string
}

/** The floating status pill that overlaps a card's top-right corner. */
export default function Badge({
  label,
  tone = 'neutral',
  surface = 'dark',
  className = '',
}: BadgeProps) {
  const skin =
    surface === 'dark'
      ? 'bg-aqua-400 text-white'
      : 'bg-ink text-white'

  return (
    <span
      className={`chip inline-flex items-center gap-1.5 px-2.5 py-[3px] shadow-cut-sm ${skin} ${className}`}
    >
      <span>
        <span className={`mr-1.5 inline-block h-[6px] w-[6px] rounded-full align-middle ${DOT[tone]}`} />
        <span className="font-cond text-[10px] font-bold tracking-[0.24em]">{label}</span>
      </span>
    </span>
  )
}
