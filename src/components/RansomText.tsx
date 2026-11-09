import type { CSSProperties } from 'react'

/**
 * Ransom-note / scattered letter typography.
 *
 * Each glyph gets its own rotation, vertical offset, scale, casing and fill
 * (plain white, black box, inverted white box, or blue box) so a word reads
 * like a cut-and-paste Persona title card. Randomised styling is derived from
 * a deterministic hash of (seed, index) so nothing jitters between renders.
 */

export type RansomVariant = 'plain' | 'box' | 'invert' | 'accent'

export interface Glyph {
  ch: string
  space?: boolean
  variant?: RansomVariant
  rot?: number
  dy?: number
  scale?: number
  lower?: boolean
}

interface RansomTextProps {
  /** Source string — ignored when `letters` is supplied. */
  text?: string
  /** Hand-tuned glyphs, for titles that should never look random. */
  letters?: readonly Glyph[]
  seed?: number
  /** 0 = perfectly aligned, 1 = full scatter. */
  intensity?: number
  /**
   * Allow random glyphs to drop to lowercase. Great for a name, bad for a
   * heading like SKILLS where a lowercase `l` reads as an `I`.
   */
  allowLower?: boolean
  className?: string
  letterClassName?: string
  animate?: boolean
  baseDelay?: number
}

const VARIANTS: RansomVariant[] = ['plain', 'plain', 'box', 'plain', 'invert', 'box']

function hash(seed: number, i: number): number {
  const x = Math.sin(seed * 99.13 + i * 42.77) * 10000
  return x - Math.floor(x)
}

function buildLetters(
  text: string,
  seed: number,
  intensity: number,
  allowLower: boolean,
): Glyph[] {
  return [...text].map((ch, i) => {
    if (ch === ' ') return { ch, space: true }
    const a = hash(seed, i)
    const b = hash(seed + 7, i)
    const c = hash(seed + 13, i)
    return {
      ch,
      variant: VARIANTS[Math.floor(a * VARIANTS.length)],
      rot: (b - 0.5) * 12 * intensity,
      dy: (c - 0.5) * 14 * intensity,
      scale: 0.9 + a * 0.28 * intensity,
      lower: allowLower && c > 0.76,
    }
  })
}

function RansomText({
  text = '',
  letters,
  seed = 1,
  intensity = 1,
  allowLower = true,
  className = '',
  letterClassName = '',
  animate = false,
  baseDelay = 0,
}: RansomTextProps) {
  const glyphs = letters ?? buildLetters(text, seed, intensity, allowLower)

  return (
    <span className={`ransom-group inline-flex flex-wrap items-end ${className}`}>
      {glyphs.map((g, i) => {
        if (g.space) {
          return (
            <span key={`sp-${i}`} className="inline-block w-[0.32em]">
              &nbsp;
            </span>
          )
        }

        const variant = g.variant ?? 'plain'
        const boxed = variant !== 'plain'
        const rot = g.rot ?? 0

        return (
          <span
            key={`${g.ch}-${i}`}
            className={`inline-block ${animate ? 'animate-pop-in' : ''}`}
            style={{ animationDelay: animate ? `${baseDelay + i * 0.055}s` : undefined }}
          >
            <span
              className={[
                'ransom',
                `ransom-${variant}`,
                boxed ? 'px-[0.09em] pb-[0.06em]' : '',
                letterClassName,
              ]
                .filter(Boolean)
                .join(' ')}
              style={
                {
                  transform: `translateY(${g.dy ?? 0}px) rotate(${rot}deg) scale(${g.scale ?? 1})`,
                  '--rot-hover': `${(rot > 0 ? -1 : 1) * 4}deg`,
                } as CSSProperties
              }
            >
              {g.lower ? g.ch.toLowerCase() : g.ch}
            </span>
          </span>
        )
      })}
    </span>
  )
}

export default RansomText
