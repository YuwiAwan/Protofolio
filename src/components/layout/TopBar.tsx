import Chip from '@/components/ui/Chip'
import { profile } from '@/data/profile'

/** Persistent HUD strip across the top of every screen. */
export default function TopBar() {
  return (
    <header className="flex items-start justify-between gap-4 px-4 pt-4 md:px-10 md:pt-5">
      <Chip tone="ink" className="shrink-0">
        <span className="mr-2 inline-block h-2 w-2 animate-blink bg-blood align-middle" />
        PORTFOLIO // {profile.fullName.toUpperCase()}
      </Chip>

      <Chip tone="bone" className="hidden shrink-0 sm:inline-block">
        {profile.discipline}
      </Chip>
    </header>
  )
}
