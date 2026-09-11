'use client'
import { useState } from 'react'
import { FileTextIcon, MonitorIcon } from '../shared/icons'

const months = ['T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'T8', 'T9']
const monthLabels = ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9']

export function CommandBanner() {
  const [activeMonth, setActiveMonth] = useState(8) // T9 = index 8

  return (
    <div className="command-banner rounded-lg px-4 py-3.5 sm:px-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        {/* Title */}
        <div className="min-w-0">
          <h1 className="text-lg font-bold text-white sm:text-xl">
            Tổng quan chỉ tiêu kinh tế - xã hội TP Hải Phòng
          </h1>
          <p className="mt-0.5 text-[12px] text-white/60">
            Tháng 9/2026 · Nguồn: Báo cáo KT-XH UBND TP Hải Phòng
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-wrap items-center gap-2.5">
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
          <a
            href="/bao-cao?ky=202609M"
            className="inline-flex min-h-[44px] touch-manipulation items-center gap-1.5 rounded-md bg-white/10 px-3 py-1.5 text-[13px] font-semibold text-white hover:bg-white/20 transition-colors"
          >
            <FileTextIcon size={16} />
            Dự thảo báo cáo
          </a>
          <a
            href="/trinh-chieu?ky=202609M"
            className="inline-flex min-h-[44px] touch-manipulation items-center gap-1.5 rounded-md bg-white/10 px-3 py-1.5 text-[13px] font-semibold text-white hover:bg-white/20 transition-colors"
          >
            <MonitorIcon size={16} />
            Trình chiếu
          </a>
        </div>
      </div>
    </div>
  )
}
