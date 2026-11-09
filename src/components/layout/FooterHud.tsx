import { useClock } from '@/hooks/useClock'
import { useSfxEnabled } from '@/hooks/useSfx'
import { profile } from '@/data/profile'

interface FooterHudProps {
  status: string
}

/** Controller prompt bar — the keys it advertises are all wired up for real. */
export default function FooterHud({ status }: FooterHudProps) {
  const time = useClock()
  const [sfxOn, toggleSfx] = useSfxEnabled()

  return (
    <footer className="z-30 flex items-center justify-between gap-3 border-t-2 border-ink bg-ink/85 px-3 py-1.5 backdrop-blur-sm md:px-8">
      <div className="flex items-center gap-3 md:gap-7">
        <Prompt keyName="↑↓" label="SELECT" />
        <Prompt keyName="ENTER" label="CONFIRM" />
        <Prompt keyName="ESC" label="BACK" />
      </div>

      <div className="flex items-center gap-3 md:gap-5">
        <span
          key={status}
          className="hidden animate-fade-up font-cond text-[10px] font-bold tracking-[0.3em] text-aqua-200 sm:inline"
        >
          {status}
        </span>

        <button
          type="button"
          onClick={toggleSfx}
          aria-pressed={sfxOn}
          aria-label={sfxOn ? 'Mute interface sounds' : 'Unmute interface sounds'}
          className="flex h-6 w-6 items-center justify-center border border-white/40 text-white transition-colors duration-200 hover:border-aqua-200 hover:text-aqua-200"
        >
          <SpeakerIcon muted={!sfxOn} />
        </button>

        <span className="font-cond text-[10px] font-bold tracking-[0.3em] text-white/60">
          {time} · {profile.location}
        </span>
      </div>
    </footer>
  )
}

function Prompt({ keyName, label }: { keyName: string; label: string }) {
  return (
    <span className="flex items-center gap-1.5">
      <span className="border border-white/80 bg-white px-1.5 py-[1px] font-cond text-[10px] font-bold tracking-widest text-ink">
        {keyName}
      </span>
      <span className="hidden font-cond text-[10px] font-bold tracking-[0.25em] text-white sm:inline md:text-[11px]">
        {label}
      </span>
    </span>
  )
}

function SpeakerIcon({ muted }: { muted: boolean }) {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor" aria-hidden="true">
      <path d="M4 9v6h4l5 4V5L8 9H4z" />
      {muted ? (
        <path
          d="M16 9l5 6M21 9l-5 6"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
      ) : (
        <path
          d="M16.5 8.5a5 5 0 0 1 0 7M19 6a8.5 8.5 0 0 1 0 12"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
      )}
    </svg>
  )
}
