import type { AnchorHTMLAttributes, ReactNode } from 'react'

import { play } from '@/lib/sfx'

type Variant = 'ghost' | 'solid' | 'solid-ink'

const VARIANTS: Record<Variant, string> = {
  /** Outlined — sits on the dark featured cards. */
  ghost: 'border-white/45 bg-transparent text-white',
  /** Filled blue — the default call to action on light cards. */
  solid: 'border-aqua-400 bg-aqua-400 text-white shadow-cut-sm',
  /** Filled black — used where blue would fight the surface. */
  'solid-ink': 'border-ink bg-ink text-white shadow-cut-sm',
}

interface CutButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode
  variant?: Variant
  /** Trailing glyph; pass `null` to drop it. */
  arrow?: ReactNode
  compact?: boolean
}

/**
 * Slanted cut-out link button. The skew lives on the box and is cancelled on
 * the label so text stays upright, matching the in-game HUD buttons.
 */
export default function CutButton({
  children,
  variant = 'ghost',
  arrow = '→',
  compact = false,
  className = '',
  onClick,
  ...rest
}: CutButtonProps) {
  return (
    <a
      {...rest}
      onClick={(event) => {
        play('confirm')
        onClick?.(event)
      }}
      onMouseEnter={() => play('hover')}
      className={`btn-cut group/btn ${VARIANTS[variant]} ${
        compact ? 'px-2.5 py-[3px]' : 'px-3.5 py-1.5'
      } ${className}`}
    >
      <span className="flex items-center gap-2 font-cond text-[10px] font-bold tracking-[0.22em] md:text-[11px]">
        {children}
        {arrow && (
          <span className="transition-transform duration-200 group-hover/btn:translate-x-1">
            {arrow}
          </span>
        )}
      </span>
    </a>
  )
}
