import type { ReactNode } from 'react'

import Chip from '@/components/ui/Chip'
import { profile } from '@/data/profile'

/** Persistent HUD strip across the top of every screen. `nav` sits in the middle on desktop. */
export default function TopBar({ nav }: { nav?: ReactNode }) {
  return (
    <header className="flex items-start justify-between gap-4 px-4 pt-4 md:px-10 md:pt-5">
      <Chip tone="ink" className="shrink-0">
        <span className="mr-2 inline-block h-2 w-2 animate-blink bg-blood align-middle" />
        PORTFOLIO // {profile.fullName.toUpperCase()}
      </Chip>

      {nav}

      {/* With the nav in the middle there's only room for this chip on wide screens. */}
      <Chip
        tone="bone"
        className={`hidden shrink-0 ${nav ? 'xl:inline-block' : 'sm:inline-block'}`}
      >
        {profile.discipline}
      </Chip>
    </header>
  )
}
