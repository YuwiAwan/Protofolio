import { useEffect, useState } from 'react'

/** Ticking HUD clock, refreshed once a second. */
export function useClock(): string {
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), 1000)
    return () => window.clearInterval(id)
  }, [])

  return now
    .toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })
    .toUpperCase()
}
