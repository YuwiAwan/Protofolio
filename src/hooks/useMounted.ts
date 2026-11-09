import { useEffect, useState } from 'react'

/**
 * Flips to `true` one frame after mount so entrance animations always run from
 * their starting keyframe instead of being skipped on the first paint.
 */
export function useMounted(): boolean {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true))
    return () => cancelAnimationFrame(id)
  }, [])

  return mounted
}
