interface SectionLabelProps {
  children: string
  /** Small muted line under the heading — counts, status, source. */
  meta?: string
  className?: string
}

/** "▬ FEATURED" — a slanted bar followed by a heavy uppercase heading. */
export default function SectionLabel({ children, meta, className = '' }: SectionLabelProps) {
  return (
    <div className={className}>
      <div className="flex items-center gap-3">
        <span className="h-[9px] w-8 -skew-x-[20deg] bg-white shadow-[3px_3px_0_rgba(7,8,10,0.45)]" />
        <h2 className="font-heavy text-lg tracking-[0.12em] text-white drop-shadow-[0_3px_0_rgba(7,8,10,0.55)] md:text-xl">
          {children}
        </h2>
      </div>
      {meta && (
        <p className="mt-1.5 pl-11 font-cond text-[11px] font-bold tracking-[0.3em] text-white/55">
          {meta}
        </p>
      )}
    </div>
  )
}
