import { cn } from '@/lib/utils'

interface DonutSlice {
  label: string
  value: number   // percentage 0–100
  color: string   // tailwind bg class or hex
}

interface DonutChartProps {
  title: string
  slices: DonutSlice[]
  className?: string
}

/** Build SVG stroke-dasharray donut from slices (values must sum to 100). */
function DonutSVG({ slices }: { slices: DonutSlice[] }) {
  const r = 40
  const cx = 56
  const cy = 56
  const circumference = 2 * Math.PI * r
  const gap = 1.5 // degrees gap between slices → convert to stroke units
  const gapUnit = (gap / 360) * circumference

  // build cumulative offsets
  type Arc = { dasharray: string; dashoffset: number; color: string; label: string }
  const arcs: Arc[] = []
  let cumulative = 0

  for (const slice of slices) {
    const sliceFraction = slice.value / 100
    const sliceLength = sliceFraction * circumference - gapUnit
    const offset = circumference - cumulative * circumference
    arcs.push({
      dasharray: `${sliceLength} ${circumference - sliceLength}`,
      dashoffset: offset,
      color: slice.color,
      label: slice.label,
    })
    cumulative += sliceFraction
  }

  return (
    <svg viewBox="0 0 112 112" className="w-28 h-28 shrink-0" aria-hidden="true">
      {/* Track */}
      <circle
        cx={cx} cy={cy} r={r}
        fill="none"
        stroke="var(--border)"
        strokeWidth="14"
      />
      {arcs.map((arc, i) => (
        <circle
          key={i}
          cx={cx} cy={cy} r={r}
          fill="none"
          stroke={arc.color}
          strokeWidth="14"
          strokeDasharray={arc.dasharray}
          strokeDashoffset={arc.dashoffset}
          strokeLinecap="butt"
          style={{ transform: 'rotate(-90deg)', transformOrigin: `${cx}px ${cy}px` }}
        />
      ))}
    </svg>
  )
}

export function DonutCard({ title, slices, className }: DonutChartProps) {
  return (
    <div className={cn('rounded-lg border border-border bg-card shadow-[var(--shadow-card)]', className)}>
      <div className="border-b border-border px-4 py-3">
        <h2 className="text-[13px] font-semibold uppercase tracking-wide text-primary">{title}</h2>
      </div>
      <div className="flex flex-col items-center gap-4 p-4">
        <DonutSVG slices={slices} />
        {/* Legend */}
        <ul className="w-full space-y-1.5">
          {slices.map(slice => (
            <li key={slice.label} className="flex items-center justify-between gap-2">
              <span className="flex items-center gap-2 text-[12px] text-foreground">
                <span
                  className="inline-block size-2.5 shrink-0 rounded-full"
                  style={{ background: slice.color }}
                />
                {slice.label}
              </span>
              <span className="text-[12px] font-semibold text-primary tabular-nums">{slice.value}%</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
