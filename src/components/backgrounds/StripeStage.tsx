/**
 * Interior stage used by Projects / About: mid-blue field, raking diagonal
 * stripes, halftone print dots and an oversized ghost star watermark.
 */
export default function StripeStage() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(150deg, #37A7E6 0%, #1C82D4 34%, #116BB8 62%, #0A4C8C 100%)',
        }}
      />

      {/* Raking stripes */}
      <div className="stripes absolute -inset-[20%] animate-drift opacity-90" />

      {/* Print dots */}
      <div className="halftone-lg absolute inset-0 opacity-[0.22] mix-blend-multiply" />

      {/* Ghost star, the recurring Persona motif */}
      <svg
        className="absolute -left-[8%] -top-[18%] h-[135%] w-[70%] opacity-[0.07]"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid meet"
      >
        <polygon
          points="50,2 61,37 98,37 68,59 79,95 50,73 21,95 32,59 2,37 39,37"
          fill="#041C3F"
        />
      </svg>

      {/* Hard shards keeping the frame graphic */}
      <div className="absolute -left-20 top-0 h-full w-28 -skew-x-[12deg] bg-ink/25" />
      <div className="absolute -right-24 bottom-0 h-[70%] w-48 skew-x-[14deg] bg-ink/20" />

      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(120% 95% at 50% 30%, rgba(0,0,0,0) 40%, rgba(2,13,30,0.55) 100%)',
        }}
      />
    </div>
  )
}
