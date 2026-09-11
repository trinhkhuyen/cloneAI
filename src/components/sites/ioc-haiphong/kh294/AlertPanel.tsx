'use client'
import { useState } from 'react'
import { TriangleAlertIcon, ChevronDownIcon, ChevronUpIcon } from '../shared/icons'
import { cn } from '@/lib/utils'

const alerts = [
  { rank: '1', name: 'Số lượng căn nhà ở xã hội hoàn thành', actual: '2.225', target: '2.383', unit: 'Căn', pct: '93,36' },
  { rank: '2', name: 'Thu hút khách du lịch', actual: '13,01', target: '13,86', unit: 'Triệu lượt người', pct: '93,87' },
  { rank: '3', name: 'Thu hút vốn đầu tư nước ngoài', actual: '3.436', target: '3.611', unit: 'Triệu USD', pct: '95,16' },
  { rank: '4', name: 'Kim ngạch xuất khẩu', actual: '40,63', target: '41,9', unit: 'Tỷ USD', pct: '96,97' },
  { rank: '5', name: 'Tốc độ tăng trưởng GRDP', actual: '12,21%', target: '12,54%', unit: '', pct: '97,37' },
]

export function AlertPanel() {
  const [open, setOpen] = useState(true)

  return (
    <section aria-label="Cảnh báo chỉ tiêu lệch kịch bản" className="card-surface">
      <button
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
        className="flex w-full items-center gap-3 px-4 py-3 text-left hover:bg-muted/40 transition-colors rounded-[inherit]"
      >
        <TriangleAlertIcon size={18} className="shrink-0 text-[#c2820c]" />
        <div className="flex-1 min-w-0">
          <h2 className="text-[14px] font-semibold text-foreground">Cảnh báo chỉ tiêu lệch kịch bản</h2>
        </div>
        <span className="shrink-0 rounded-full bg-[#e8574a]/15 px-2.5 py-0.5 text-[12px] font-semibold text-[#c8342a]">
          5 chỉ tiêu chưa đạt
        </span>
        {open ? <ChevronUpIcon size={16} /> : <ChevronDownIcon size={16} />}
      </button>

      {open && (
        <div>
          {/* Header row */}
          <div className="grid grid-cols-[32px_1fr_100px] gap-2 px-4 py-2 border-t border-border bg-muted/30 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
            <div>#</div>
            <div>Chỉ tiêu · thực hiện / kịch bản kỳ</div>
            <div>Đạt kịch bản</div>
          </div>
          <ul>
            {alerts.map((a, i) => (
              <li key={a.rank}>
                <button
                  className={cn(
                    'grid w-full grid-cols-[32px_1fr_100px] gap-2 px-4 py-3 text-left text-[13px] transition-colors hover:bg-muted/30',
                    i < alerts.length - 1 ? 'border-b border-border/50' : ''
                  )}
                  aria-label={`${a.name} — Đạt ${a.pct}%, bấm xem chi tiết`}
                >
                  <div className="font-medium text-muted-foreground">{a.rank}</div>
                  <div>
                    <div className="font-medium text-foreground">{a.name}</div>
                    <div className="mt-0.5 text-[12px] text-muted-foreground">
                      Thực hiện {a.actual}{a.unit ? ` / ${a.target} ${a.unit}` : ` / ${a.target}`}
                    </div>
                  </div>
                  <div className="font-semibold text-[#c8342a]">Đạt {a.pct}%</div>
                </button>
              </li>
            ))}
          </ul>
          <p className="px-4 py-3 border-t border-border/50 text-[12px] text-muted-foreground">
            Chỉ tiêu đã có số thực hiện lũy kế 9 tháng nhưng dưới kịch bản kỳ. Bấm một dòng để xem chi tiết và đơn vị chủ trì.
          </p>
        </div>
      )}
    </section>
  )
}
