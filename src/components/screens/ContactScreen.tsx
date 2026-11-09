import GridStage from '@/components/backgrounds/GridStage'
import ScreenHeader from '@/components/layout/ScreenHeader'
import CutButton from '@/components/ui/CutButton'
import SectionLabel from '@/components/ui/SectionLabel'
import { contactLinks, profile } from '@/data/profile'
import type { ContactLink } from '@/types'

interface ContactScreenProps {
  onBack: () => void
}

const ICON_PATHS: Record<ContactLink['kind'], string> = {
  mail: 'M2 5h20v14H2zM2 5l10 8 10-8',
  github:
    'M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.9c-2.8.6-3.4-1.2-3.4-1.2-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.4 1.1 3 .8.1-.6.3-1.1.6-1.4-2.2-.2-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.6 0 0 .8-.3 2.7 1a9.4 9.4 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1 .5 1.3.2 2.3.1 2.6.6.7 1 1.6 1 2.7 0 3.9-2.4 4.8-4.6 5 .4.3.7 1 .7 2v3c0 .3.2.6.7.5A10 10 0 0 0 12 2z',
  linkedin: 'M4 4h4v16H4zM10 9h4v2a4 4 0 0 1 6 3.5V20h-4v-5a2 2 0 0 0-4 0v5h-2z',
  location: 'M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z',
}

function ContactIcon({ kind }: { kind: ContactLink['kind'] }) {
  const stroked = kind === 'mail'
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill={stroked ? 'none' : 'currentColor'}
      stroke={stroked ? 'currentColor' : 'none'}
      strokeWidth={stroked ? 2 : undefined}
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={ICON_PATHS[kind]} />
    </svg>
  )
}

/** Closing screen — every way to reach me, as HUD slabs. */
export default function ContactScreen({ onBack }: ContactScreenProps) {
  return (
    <>
      <GridStage watermark="REACH OUT" />

      <div className="scrollbar-persona relative z-10 min-h-0 flex-1 animate-screen-in overflow-y-auto">
        <ScreenHeader title="CONTACT" seed={8} onBack={onBack} />

        <div className="px-4 pb-10 pt-6 md:px-10">
          <SectionLabel className="mb-6" meta="OPEN TO FRONTEND & DATA ROLES">
            GET IN TOUCH
          </SectionLabel>

          <p className="mb-8 max-w-[38rem] text-[13px] leading-relaxed text-white/75">
            {profile.fullName} — {profile.role}. The fastest way to reach me is email; code and
            history live on GitHub.
          </p>

          <ul className="grid max-w-[62rem] gap-x-6 gap-y-8 sm:grid-cols-2">
            {contactLinks.map((link, i) => (
              <li
                key={link.label}
                className="group card-shift animate-pop-in"
                style={{ animationDelay: `${0.1 + i * 0.08}s` }}
              >
                <div className="clip-notch-sm flex items-center gap-4 bg-ink px-5 py-4 shadow-cut">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-aqua-400 text-white transition-colors duration-300 group-hover:bg-white group-hover:text-ink">
                    <ContactIcon kind={link.kind} />
                  </span>

                  <div className="min-w-0 flex-1">
                    <p className="font-cond text-[10px] font-bold tracking-[0.3em] text-white/50">
                      {link.label}
                    </p>
                    <p className="truncate font-cond text-[13px] font-bold tracking-[0.06em] text-white">
                      {link.value}
                    </p>
                  </div>

                  <CutButton
                    href={link.href}
                    target={link.kind === 'mail' ? undefined : '_blank'}
                    rel="noreferrer noopener"
                    variant="ghost"
                    compact
                    arrow="→"
                  >
                    OPEN
                  </CutButton>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}
