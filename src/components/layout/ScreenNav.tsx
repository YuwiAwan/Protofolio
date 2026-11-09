import { navItems } from '@/data/profile'
import type { ScreenId } from '@/types'

interface ScreenNavProps {
  current: ScreenId
  onSelect: (id: ScreenId) => void
  /** `top`: slanted chips in the top bar (desktop). `bottom`: thumb-reach tab bar (phone/tablet). */
  variant: 'top' | 'bottom'
}

const ITEMS: { id: ScreenId; label: string }[] = [
  { id: 'home', label: 'MENU' },
  ...navItems.map(({ id, label }) => ({ id, label })),
]

/**
 * Jump straight between screens without going back to the title menu.
 * Shown on every screen except home, which already is the menu.
 */
export default function ScreenNav({ current, onSelect, variant }: ScreenNavProps) {
  if (variant === 'top') {
    return (
      <nav aria-label="Sections" className="hidden items-center gap-2 lg:flex">
        {ITEMS.map((item) => {
          const active = item.id === current
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onSelect(item.id)}
              aria-current={active ? 'page' : undefined}
              className={`chip px-3 py-1 transition-colors duration-200 ${
                active
                  ? 'bg-white text-ink shadow-[4px_4px_0_rgba(7,8,10,0.35)]'
                  : 'bg-ink/75 text-white hover:bg-aqua-400'
              }`}
            >
              <span className="font-cond text-[11px] font-bold tracking-[0.28em]">{item.label}</span>
            </button>
          )
        })}
      </nav>
    )
  }

  return (
    <nav
      aria-label="Sections"
      className="z-30 grid grid-cols-5 border-t-2 border-ink bg-ink lg:hidden"
    >
      {ITEMS.map((item) => {
        const active = item.id === current
        return (
          <button
            key={item.id}
            type="button"
            onClick={() => onSelect(item.id)}
            aria-current={active ? 'page' : undefined}
            className={`flex h-12 flex-col items-center justify-center gap-1 transition-colors duration-200 ${
              active ? 'bg-white text-ink' : 'text-white/75 active:bg-white/15'
            }`}
          >
            <span className={`h-[3px] w-5 ${active ? 'bg-blood' : 'bg-transparent'}`} />
            <span className="font-cond text-[10px] font-bold tracking-[0.14em]">{item.label}</span>
          </button>
        )
      })}
    </nav>
  )
}
