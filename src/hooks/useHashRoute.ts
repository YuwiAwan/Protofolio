import { useCallback, useEffect, useState } from 'react'

import type { ScreenId } from '@/types'

const SCREENS: ScreenId[] = ['home', 'projects', 'skills', 'about', 'contact']

function parse(hash: string): ScreenId {
  const id = hash.replace(/^#\/?/, '') as ScreenId
  return SCREENS.includes(id) ? id : 'home'
}

/**
 * Screen routing over `location.hash` — deep-linkable, back-button aware and
 * dependency free.
 */
export function useHashRoute(): [ScreenId, (next: ScreenId) => void] {
  const [screen, setScreen] = useState<ScreenId>(() =>
    typeof window === 'undefined' ? 'home' : parse(window.location.hash),
  )

  useEffect(() => {
    const onHashChange = () => setScreen(parse(window.location.hash))
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  const navigate = useCallback((next: ScreenId) => {
    const target = next === 'home' ? '#/' : `#/${next}`
    if (window.location.hash === target) {
      setScreen(next)
      return
    }
    window.location.hash = target
  }, [])

  return [screen, navigate]
}
