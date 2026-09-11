import { cn } from '@/lib/utils'

const top10 = [
  { rank: 1, name: 'Phường Thủy Nguyên', value: 312450 },
  { rank: 2, name: 'Phường Kiến An', value: 198720 },
  { rank: 3, name: 'Phường Lê Chân', value: 187340 },
  { rank: 4, name: 'Phường Hồng Bàng', value: 156890 },
  { rank: 5, name: 'Phường Ngô Quyền', value: 145230 },
  { rank: 6, name: 'Đặc khu Cát Hải', value: 132560 },
  { rank: 7, name: 'Phường An Dương', value: 121780 },
  { rank: 8, name: 'Xã Vĩnh Bảo', value: 118920 },
  { rank: 9, name: 'Phường Dương Kinh', value: 112450 },
  { rank: 10, name: 'Phường Đồ Sơn', value: 108760 },
]

const maxValue = top10[0].value

function fmt(n: number) {
  return n.toLocaleString('vi-VN')
}

export function Top10BarChart({ className }: { className?: string }) {
  return (
    <div className={cn('rounded-lg border border-border bg-card shadow-[var(--shadow-card)]', className)}>
      <div className="border-b border-border px-4 py-3">
        <h2 className="text-[13px] font-semibold uppercase tracking-wide text-primary">
          Top 10 đơn vị có số nhân khẩu nhiều nhất
        </h2>
        <p className="mt-0.5 text-[12px] text-muted-foreground">Xếp hạng toàn thành phố</p>
      </div>
      <div className="space-y-2.5 p-4">
        {top10.map(item => {
          const pct = (item.value / maxValue) * 100
          const isTop3 = item.rank <= 3
          return (
            <div key={item.rank} className="flex items-center gap-3">
              {/* Rank badge */}
              <span className={cn(
                'flex size-5 shrink-0 items-center justify-center rounded-full text-[11px] font-bold',
                isTop3
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground'
              )}>
                {item.rank}
              </span>
              {/* Name + bar */}
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <span className="truncate text-[12px] font-medium text-foreground">{item.name}</span>
                  <span className="shrink-0 text-[12px] font-semibold tabular-nums text-primary">
                    {fmt(item.value)}
                  </span>
                </div>
                <div className="mt-1 h-2 w-full overflow-hidden rounded-full bg-muted">
                  <div
                    className={cn(
                      'h-full rounded-full transition-all',
                      isTop3 ? 'bg-primary' : 'bg-primary/50'
                    )}
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
