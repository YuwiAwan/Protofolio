import { useCallback, useEffect, useRef, useState } from 'react'

import FooterHud from '@/components/layout/FooterHud'
import TopBar from '@/components/layout/TopBar'
import AboutScreen from '@/components/screens/AboutScreen'
import ContactScreen from '@/components/screens/ContactScreen'
import HomeScreen from '@/components/screens/HomeScreen'
import ProjectsScreen from '@/components/screens/ProjectsScreen'
import SkillsScreen from '@/components/screens/SkillsScreen'
import { navItems } from '@/data/profile'
import { useHashRoute } from '@/hooks/useHashRoute'
import { play } from '@/lib/sfx'
import type { ScreenId } from '@/types'

export default function App() {
  const [screen, navigate] = useHashRoute()
  const [activeIndex, setActiveIndex] = useState(0)
  const [status, setStatus] = useState('READY')
  const statusTimer = useRef<number | undefined>(undefined)

  const flash = useCallback((message: string) => {
    setStatus(message)
    window.clearTimeout(statusTimer.current)
    statusTimer.current = window.setTimeout(() => setStatus('READY'), 1600)
  }, [])

  useEffect(() => () => window.clearTimeout(statusTimer.current), [])

  const go = useCallback(
    (id: ScreenId) => {
      play(id === 'home' ? 'back' : 'confirm')
      navigate(id)
      flash(id === 'home' ? 'BACK // MENU' : `OPEN // ${id.toUpperCase()}`)
      const index = navItems.findIndex((item) => item.id === id)
      if (index >= 0) setActiveIndex(index)
    },
    [flash, navigate],
  )

  /* --------------------- Controller prompts, wired up --------------------- */
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      // Never hijack keys while the user is typing or tabbing through links.
      const target = event.target as HTMLElement | null
      if (target?.closest('input, textarea, select, [contenteditable="true"]')) return

      if (event.key === 'Escape') {
        event.preventDefault()
        if (screen === 'home') {
          setActiveIndex(0)
          play('back')
          flash('BACK // TOP')
        } else {
          go('home')
        }
        return
      }

      // Number shortcuts work from anywhere: 1–4 jump straight to a screen.
      const digit = Number.parseInt(event.key, 10)
      if (digit >= 1 && digit <= navItems.length) {
        event.preventDefault()
        go(navItems[digit - 1].id)
        return
      }

      if (screen !== 'home') return

      switch (event.key) {
        case 'ArrowDown':
        case 'ArrowRight':
          event.preventDefault()
          play('move')
          setActiveIndex((i) => (i + 1) % navItems.length)
          break
        case 'ArrowUp':
        case 'ArrowLeft':
          event.preventDefault()
          play('move')
          setActiveIndex((i) => (i - 1 + navItems.length) % navItems.length)
          break
        case 'Enter':
        case ' ':
          event.preventDefault()
          go(navItems[activeIndex].id)
          break
        default:
          break
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [activeIndex, flash, go, screen])

  return (
    <div className="relative flex h-dvh max-h-dvh w-full flex-col overflow-hidden bg-deep-600 font-sans">
      <TopBar />

      {/* `key` remounts the stage so every screen replays its entrance. */}
      <div key={screen} className="relative flex min-h-0 flex-1 flex-col">
        {screen === 'home' && (
          <HomeScreen activeIndex={activeIndex} onHover={setActiveIndex} onSelect={go} />
        )}
        {screen === 'projects' && <ProjectsScreen onBack={() => go('home')} />}
        {screen === 'skills' && <SkillsScreen onBack={() => go('home')} />}
        {screen === 'about' && <AboutScreen onBack={() => go('home')} />}
        {screen === 'contact' && <ContactScreen onBack={() => go('home')} />}
      </div>

      <FooterHud status={status} />
    </div>
  )
}
