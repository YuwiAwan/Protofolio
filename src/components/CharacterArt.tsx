import { useState } from 'react'

interface CharacterArtProps {
  /** Swap in your own artwork — a transparent PNG around 900×1400 works best. */
  src?: string
  /** Corner brackets + floating chips belong to the home screen only. */
  showFrame?: boolean
  chips?: { label: string; tone: 'ink' | 'bone' }[]
  className?: string
}

/**
 * Character illustration slot.
 *
 * Renders `src` when the file exists; otherwise it falls back to a labelled
 * placeholder so the layout keeps its shape while the art is still missing.
 */
export default function CharacterArt({
  src = '/character.png',
  showFrame = true,
  chips = [],
  className = '',
}: CharacterArtProps) {
  const [failed, setFailed] = useState(false)

  return (
    <div className={`relative h-full w-full select-none ${className}`}>
      {showFrame && (
        <div className="pointer-events-none absolute inset-6 z-20">
          <span className="absolute -left-1 -top-1 h-10 w-10 border-l-[6px] border-t-[6px] border-ink" />
          <span className="absolute -right-1 -top-1 h-10 w-10 border-r-[6px] border-t-[6px] border-white" />
          <span className="absolute -bottom-1 -left-1 h-10 w-10 border-b-[6px] border-l-[6px] border-white" />
          <span className="absolute -bottom-1 -right-1 h-10 w-10 border-b-[6px] border-r-[6px] border-ink" />
        </div>
      )}

      {!failed ? (
        /* Waist-up crop, by sizing alone — no transform and no object-fit. The art is
           simply taller than the box it sits in, so the legs run past the bottom and
           the wrapper clips them. `-top-[8%]` trims the PNG's empty top margin; it is
           `top`, not `translate-y`, because `animate-sway` owns the transform. */
        <div className="absolute inset-0 z-10 flex items-start justify-center overflow-hidden">
          <img
            src={src}
            alt=""
            onError={() => setFailed(true)}
            className="relative -top-[8%] h-[210%] w-auto max-w-none shrink-0 animate-sway drop-shadow-[0_25px_45px_rgba(4,28,63,0.55)]"
          />
        </div>
      ) : (
        <ArtPlaceholder src={src} />
      )}

      {chips.length > 0 && (
        /* Anchored to the bottom, not the top: the waist-up crop puts the head in the
           upper-right, which is where these used to sit. */
        <div className="absolute bottom-10 right-8 z-20 flex flex-col items-end gap-2">
          {chips.map((chip) => (
            <span
              key={chip.label}
              className={`chip px-3 py-1 shadow-cut-sm ${
                chip.tone === 'ink' ? 'bg-ink text-aqua-100' : 'bg-white text-ink'
              }`}
            >
              <span className="font-cond text-[11px] font-bold tracking-[0.25em]">{chip.label}</span>
            </span>
          ))}
        </div>
      )}
    </div>
  )
}

/** Empty-state frame — swap the file in and this disappears on its own. */
function ArtPlaceholder({ src }: { src: string }) {
  return (
    <div className="absolute inset-0 z-10 flex animate-sway items-end justify-center pb-6">
      <div className="relative flex h-[78%] w-full max-w-[420px] flex-col items-center justify-end gap-3 border-2 border-dashed border-white/20 pb-6">
        <svg
          viewBox="0 0 220 300"
          className="h-[68%] w-auto text-white/[0.14]"
          role="presentation"
          aria-hidden="true"
        >
          <circle cx="110" cy="78" r="52" fill="currentColor" />
          <path d="M18 300c8-84 46-126 92-126s84 42 92 126z" fill="currentColor" />
        </svg>
        <p className="px-6 text-center font-cond text-[10px] font-bold tracking-[0.3em] text-white/40">
          CHARACTER ART SLOT
        </p>
        <code className="bg-ink/50 px-2.5 py-1 font-mono text-[9.5px] tracking-wide text-aqua-100/70">
          public{src}
        </code>
      </div>
    </div>
  )
}
