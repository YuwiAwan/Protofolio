/**
 * Tiny WebAudio blip generator — the menu SFX of the Persona HUD without
 * shipping a single audio file. Everything is synthesised on demand from a
 * lazily created AudioContext so nothing is allocated until the first sound.
 */

export type SfxName = 'move' | 'confirm' | 'back' | 'hover'

interface Voice {
  freq: number
  to: number
  duration: number
  type: OscillatorType
  gain: number
}

const VOICES: Record<SfxName, Voice> = {
  move: { freq: 880, to: 660, duration: 0.07, type: 'square', gain: 0.05 },
  hover: { freq: 1320, to: 1320, duration: 0.035, type: 'triangle', gain: 0.025 },
  confirm: { freq: 520, to: 1560, duration: 0.16, type: 'sawtooth', gain: 0.06 },
  back: { freq: 440, to: 180, duration: 0.14, type: 'square', gain: 0.05 },
}

const STORAGE_KEY = 'portfolio:sfx'

let ctx: AudioContext | null = null
let enabled = readStoredPreference()
const listeners = new Set<() => void>()

function readStoredPreference(): boolean {
  try {
    return window.localStorage.getItem(STORAGE_KEY) !== 'off'
  } catch {
    return true
  }
}

function getContext(): AudioContext | null {
  if (typeof window === 'undefined') return null
  if (!ctx) {
    const Ctor = window.AudioContext ?? (window as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext
    if (!Ctor) return null
    ctx = new Ctor()
  }
  if (ctx.state === 'suspended') void ctx.resume()
  return ctx
}

export function play(name: SfxName): void {
  if (!enabled) return
  const audio = getContext()
  if (!audio) return

  const voice = VOICES[name]
  const now = audio.currentTime
  const osc = audio.createOscillator()
  const amp = audio.createGain()

  osc.type = voice.type
  osc.frequency.setValueAtTime(voice.freq, now)
  osc.frequency.exponentialRampToValueAtTime(voice.to, now + voice.duration)

  amp.gain.setValueAtTime(voice.gain, now)
  amp.gain.exponentialRampToValueAtTime(0.0001, now + voice.duration)

  osc.connect(amp).connect(audio.destination)
  osc.start(now)
  osc.stop(now + voice.duration + 0.02)
}

export function isEnabled(): boolean {
  return enabled
}

export function toggle(): void {
  enabled = !enabled
  try {
    window.localStorage.setItem(STORAGE_KEY, enabled ? 'on' : 'off')
  } catch {
    /* private mode — preference simply is not persisted */
  }
  if (enabled) play('confirm')
  listeners.forEach((fn) => fn())
}

export function subscribe(fn: () => void): () => void {
  listeners.add(fn)
  return () => listeners.delete(fn)
}
