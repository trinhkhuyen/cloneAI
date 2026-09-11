import { cn } from '@/lib/utils'

interface MonthBar {
  label: string
  value: number
  skipped?: boolean
}

const monthData: MonthBar[] = [
  { label: 'T1', value: 1240 },
  { label: 'T2', value: 890 },
  { label: 'T3', value: 1580 },
  { label: 'T4', value: 720 },
  { label: 'T5', value: 1100 },
  { label: 'T6', value: 950 },
  { label: 'T7', value: 0, skipped: true },
  { label: 'T8', value: 1320 },
]

export function GrowthBarChart({ className }: { className?: string }) {
  const maxVal = Math.max(...monthData.map(d => d.value))

  return (
    <div className={cn('rounded-lg border border-border bg-card shadow-[var(--shadow-card)]', className)}>
      <div className="border-b border-border px-4 py-3">
        <h2 className="text-[13px] font-semibold uppercase tracking-wide text-primary">
          Số liệu tăng trưởng nhân khẩu trong năm 2026
        </h2>
        <p className="mt-0.5 text-[12px] text-muted-foreground">
          Chênh lệch so tháng liền trước · Toàn thành phố
        </p>
      </div>
      <div className="p-4">
        {/* Chart area */}
        <div className="flex h-48 items-end gap-2">
          {monthData.map(d => {
            const pct = d.skipped ? 0 : (d.value / maxVal) * 100
            return (
              <div key={d.label} className="flex flex-1 flex-col items-center gap-1">
                {d.skipped ? (
                  <div className="flex-1" />
                ) : (
                  <div className="flex w-full flex-1 flex-col justify-end">
                    <div
                      className="relative w-full rounded-t-sm bg-primary/80 transition-all"
                      style={{ height: `${pct}%`, minHeight: 4 }}
                      title={`+${d.value.toLocaleString('vi-VN')}`}
                    >
                      <span className="absolute -top-5 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] font-semibold text-primary">
                        +{(d.value / 1000).toFixed(1)}k
                      </span>
                    </div>
                  </div>
                )}
                <span className={cn(
                  'text-[11px] font-medium',
                  d.skipped ? 'text-muted-foreground/40' : 'text-muted-foreground'
                )}>
                  {d.label}
                </span>
              </div>
            )
          })}
        </div>
        {/* Y-axis hint */}
        <p className="mt-2 text-right text-[11px] text-muted-foreground">Đơn vị: người</p>
      </div>
    </div>
  )
}
