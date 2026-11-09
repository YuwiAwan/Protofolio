import type { ReactNode } from 'react'

type ChipTone = 'ink' | 'bone' | 'blood' | 'accent'

const TONES: Record<ChipTone, string> = {
  ink: 'bg-ink text-white shadow-cut-sm',
  bone: 'bg-white text-ink shadow-[5px_5px_0_rgba(7,8,10,0.25)]',
  blood: 'bg-blood text-white shadow-cut-sm',
  accent: 'bg-aqua-400 text-white shadow-cut-sm',
}

interface ChipProps {
  children: ReactNode
  tone?: ChipTone
  className?: string
}

/** Slanted HUD label — the parallelogram tag used all over the interface. */
export default function Chip({ children, tone = 'ink', className = '' }: ChipProps) {
  return (
    <span className={`chip inline-block px-3 py-1 ${TONES[tone]} ${className}`}>
      <span className="font-cond text-[10px] font-bold tracking-[0.28em] md:text-[11px]">
        {children}
      </span>
    </span>
  )
}
