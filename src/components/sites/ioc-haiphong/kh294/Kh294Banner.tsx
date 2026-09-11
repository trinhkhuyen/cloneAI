'use client'
import { useState } from 'react'
import { cn } from '@/lib/utils'

const periods = ['Quý III', '9 tháng', '6 tháng cuối', 'Cả năm']

export function Kh294Banner() {
  const [active, setActive] = useState(1) // "9 tháng" is active

  return (
    <div className="flex flex-wrap items-end justify-between gap-3">
      <div>
        <p className="text-[12px] text-muted-foreground">Kế hoạch 294/KH-UBND · Phụ lục I</p>
        <h1 className="text-xl font-bold text-foreground mt-0.5">Chỉ tiêu kinh tế chủ yếu</h1>
        <p className="mt-1 text-[13px] text-muted-foreground">
          14 chỉ tiêu kinh tế - xã hội chủ yếu ·{' '}
          <span className="font-medium text-foreground">&ldquo;Kỳ số liệu: Lũy kế 9 tháng năm 2026&rdquo;</span>{' '}
          ✓ đã có thực hiện
        </p>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-[12px] text-muted-foreground">Kỳ báo cáo</span>
        <div className="inline-flex gap-0.5 rounded-lg border border-border bg-muted/50 p-0.5">
          {periods.map((p, i) => (
            <button
              key={p}
              onClick={() => setActive(i)}
              className={cn(
                'rounded-md px-3 py-1.5 text-[12.5px] font-medium transition-colors min-h-[36px]',
                active === i
                  ? 'bg-primary text-white shadow-sm'
                  : 'text-muted-foreground hover:bg-background hover:text-foreground'
              )}
            >
              {p}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
