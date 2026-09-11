'use client'
import { useState } from 'react'
import { ChevronDownIcon, ChevronUpIcon } from '../shared/icons'
import { cn } from '@/lib/utils'

type StatusType = 'good' | 'risk' | 'annual'

interface Indicator {
  name: string
  value: string
  unit: string
  pct: string
  target: string
  agency: string
  status: StatusType
}

const indicators: Indicator[] = [
  { name: 'Tốc độ tăng trưởng GRDP', value: '12,21%', unit: '', pct: '97,37%', target: 'Kịch bản 12,54%', agency: 'Thống kê TP, Sở Tài chính', status: 'risk' },
  { name: 'Tốc độ tăng chỉ số sản xuất công nghiệp', value: '16,1%', unit: '', pct: '101,9%', target: 'Kịch bản 15,8%', agency: 'Thống kê TP, Sở Công Thương, BQL KKT', status: 'good' },
  { name: 'Tổng thu ngân sách nhà nước trên địa bàn', value: '181.420', unit: 'Tỷ đồng', pct: '103,2%', target: 'Kịch bản 175.794', agency: 'Sở Tài chính, Thuế TP, Hải quan KV III', status: 'good' },
  { name: 'Tổng vốn đầu tư thực hiện trên địa bàn', value: '267.901', unit: 'Tỷ đồng', pct: '104,52%', target: 'Kịch bản 256.316', agency: 'Thống kê TP, Sở Tài chính', status: 'good' },
  { name: 'Kim ngạch xuất khẩu', value: '40,63', unit: 'Tỷ USD', pct: '96,97%', target: 'Kịch bản 41,9', agency: 'Sở Công Thương, Hải quan KV III, Thống kê TP', status: 'risk' },
  { name: 'Sản lượng hàng hóa thông qua cảng', value: '158,49', unit: 'Triệu tấn', pct: '101,4%', target: 'Kịch bản 156,3', agency: 'Thống kê TP, Cảng vụ Hàng hải, Sở Xây dựng', status: 'good' },
  { name: 'Thu hút khách du lịch', value: '13,01', unit: 'Triệu lượt người', pct: '93,87%', target: 'Kịch bản 13,86', agency: 'Thống kê TP, Sở VHTT & Du lịch', status: 'risk' },
  { name: 'Thu hút vốn đầu tư nước ngoài', value: '3.436', unit: 'Triệu USD', pct: '95,16%', target: 'Kịch bản 3.611', agency: 'BQL Khu kinh tế, Sở Tài chính', status: 'risk' },
  { name: 'Số doanh nghiệp đăng ký thành lập tăng mới', value: '5.871', unit: 'Doanh nghiệp', pct: '100,92%', target: 'Kịch bản 5.817', agency: 'Sở Tài chính', status: 'good' },
  { name: 'Số lượng căn nhà ở xã hội hoàn thành', value: '2.225', unit: 'Căn', pct: '93,36%', target: 'Kịch bản 2.383', agency: 'Sở Xây dựng', status: 'risk' },
  { name: 'GRDP bình quân đầu người theo USD', value: '7.945', unit: 'USD/người', pct: '', target: 'Mục tiêu cả năm 2026', agency: 'Thống kê TP, Sở Tài chính', status: 'annual' },
  { name: 'Tỷ trọng đóng góp của kinh tế số trong GRDP', value: '31%', unit: '', pct: '', target: 'Mục tiêu cả năm 2026', agency: 'Thống kê TP', status: 'annual' },
  { name: 'Tỷ trọng đóng góp của năng suất các yếu tố tổng hợp (TFP) vào GRDP', value: '51,5%', unit: '', pct: '', target: 'Mục tiêu cả năm 2026', agency: 'Thống kê TP', status: 'annual' },
  { name: 'Tốc độ tăng năng suất lao động xã hội', value: '10,6%', unit: '', pct: '', target: 'Mục tiêu cả năm 2026', agency: 'Thống kê TP', status: 'annual' },
]

const goodCount = indicators.filter(i => i.status === 'good').length
const riskCount = indicators.filter(i => i.status === 'risk').length
const annualCount = indicators.filter(i => i.status === 'annual').length

function StatusBadge({ pct, status }: { pct: string; status: StatusType }) {
  if (status === 'annual') return (
    <span className="text-[12px] text-muted-foreground">Mục tiêu cả năm 2026</span>
  )
  const numericPct = parseFloat(pct.replace(',', '.'))
  const isGood = numericPct >= 100
  return (
    <div>
      <div className={cn('text-[13px] font-semibold', isGood ? 'text-[#0d7a4e]' : 'text-[#c8342a]')}>
        <span>Đạt </span>
        <span className={cn('font-bold', isGood ? 'text-[#138a5e]' : 'text-[#e8574a]')}>{pct}</span>
        <span> {status === 'good' ? 'kịch bản' : 'kịch bản kỳ'}</span>
      </div>
    </div>
  )
}

export function IndicatorGrid() {
  const [open, setOpen] = useState(true)

  return (
    <div className="card-surface">
      <button
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left hover:bg-muted/30 transition-colors"
      >
        <h2 className="text-[15px] font-bold text-foreground">14 chỉ tiêu kinh tế - xã hội chủ yếu</h2>
        <div className="flex items-center gap-2 flex-wrap">
          <span aria-label="Đạt kịch bản" className="flex items-center gap-1 rounded-full bg-[#138a5e]/10 px-2.5 py-1 text-[12px] font-semibold text-[#0d7a4e]">
            {goodCount} Đạt kịch bản
          </span>
          <span aria-label="Chưa đạt kịch bản" className="flex items-center gap-1 rounded-full bg-[#e8574a]/10 px-2.5 py-1 text-[12px] font-semibold text-[#c8342a]">
            {riskCount} Chưa đạt kịch bản
          </span>
          <span aria-label="Mục tiêu cả năm" className="flex items-center gap-1 rounded-full bg-muted px-2.5 py-1 text-[12px] font-semibold text-muted-foreground">
            {annualCount} Mục tiêu cả năm
          </span>
          {open ? <ChevronUpIcon size={16} /> : <ChevronDownIcon size={16} />}
        </div>
      </button>

      {open && (
        <div className="grid grid-cols-1 gap-3 p-4 pt-0 sm:grid-cols-2 lg:grid-cols-3">
          {indicators.map(ind => (
            <button
              key={ind.name}
              className={cn(
                'rounded-xl border p-3.5 text-left transition-colors hover:bg-muted/30',
                ind.status === 'good'
                  ? 'border-[#138a5e]/25'
                  : ind.status === 'risk'
                  ? 'border-[#e8574a]/25'
                  : 'border-border bg-card'
              )}
              style={
                ind.status === 'good'
                  ? { backgroundColor: 'rgba(19,138,94,0.04)' }
                  : ind.status === 'risk'
                  ? { backgroundColor: 'rgba(232,87,74,0.04)' }
                  : undefined
              }
            >
              <p className="text-[12.5px] font-medium text-foreground leading-snug mb-2">{ind.name}</p>
              <div className="flex items-baseline gap-1 mb-1">
                <span className={cn(
                  'text-xl font-bold',
                  ind.status === 'good' ? 'text-[#138a5e]' :
                  ind.status === 'risk' ? 'text-[#e8574a]' :
                  'text-primary'
                )}>{ind.value}</span>
                {ind.unit && <span className="text-[11px] text-muted-foreground">{ind.unit}</span>}
              </div>
              <StatusBadge pct={ind.pct} status={ind.status} />
              <div className="mt-1.5 text-[11px] text-muted-foreground border-t border-border/50 pt-1.5">{ind.target}</div>
              <div className="mt-1 text-[11px] text-muted-foreground truncate">{ind.agency}</div>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
