'use client'
import { useState } from 'react'

const months = ['T1','T2','T3','T4','T5','T6','T7','T8','T9']
const monthLabels = ['Tháng 1','Tháng 2','Tháng 3','Tháng 4','Tháng 5','Tháng 6','Tháng 7','Tháng 8','Tháng 9']

export function ChiTieuBanner() {
  const [activeMonth, setActiveMonth] = useState(8)

  return (
    <div className="command-banner rounded-lg px-4 py-3.5 sm:px-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="min-w-0">
          <h1 className="text-lg font-bold text-white sm:text-xl">
            Chỉ tiêu điều hành xã phường
          </h1>
          <p className="mt-0.5 text-[12px] text-white/60">
            Giải ngân đầu tư công · Giải phóng mặt bằng · Thu ngân sách — theo 114 xã/phường · Tháng 9/2026
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs text-white/60">Kỳ báo cáo</span>
          <div className="inline-flex flex-wrap gap-y-0.5 rounded-lg p-0.5 border border-white/15 bg-white/10">
            {months.map((m, i) => (
              <button
                key={m}
                aria-label={monthLabels[i]}
                onClick={() => setActiveMonth(i)}
                className={`inline-flex items-center justify-center touch-manipulation rounded-md px-3 text-xs font-medium transition-colors min-h-[38px] ${
                  activeMonth === i
                    ? 'bg-white text-primary font-semibold'
                    : 'text-white/70 hover:bg-white/15'
                }`}
              >
                {m}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
