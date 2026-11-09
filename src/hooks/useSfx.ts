import { useSyncExternalStore } from 'react'

import { isEnabled, subscribe, toggle } from '@/lib/sfx'

/** Reactive read of the global SFX preference. */
export function useSfxEnabled(): [boolean, () => void] {
  const on = useSyncExternalStore(subscribe, isEnabled, () => true)
  return [on, toggle]
}
