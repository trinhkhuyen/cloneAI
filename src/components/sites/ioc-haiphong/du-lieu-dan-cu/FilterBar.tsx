'use client'
import { useState } from 'react'
import { cn } from '@/lib/utils'

const donViOptions = [
  { value: 'toan-tp', label: 'Toàn thành phố' },
  { value: 'dac-khu-blv', label: 'Đặc khu Bạch Long Vĩ' },
  { value: 'dac-khu-cat-hai', label: 'Đặc khu Cát Hải' },
  // Phường
  { value: 'p-ai-quoc', label: 'Phường Ái Quốc' },
  { value: 'p-an-bien', label: 'Phường An Biên' },
  { value: 'p-an-duong', label: 'Phường An Dương' },
  { value: 'p-an-hai', label: 'Phường An Hải' },
  { value: 'p-an-phong', label: 'Phường An Phong' },
  { value: 'p-bach-dang', label: 'Phường Bạch Đằng' },
  { value: 'p-bac-an-phu', label: 'Phường Bắc An Phụ' },
  { value: 'p-chi-linh', label: 'Phường Chí Linh' },
  { value: 'p-chu-van-an', label: 'Phường Chu Văn An' },
  { value: 'p-duong-kinh', label: 'Phường Dương Kinh' },
  { value: 'p-do-son', label: 'Phường Đồ Sơn' },
  { value: 'p-dong-hai', label: 'Phường Đông Hải' },
  { value: 'p-gia-vien', label: 'Phường Gia Viên' },
  { value: 'p-hai-an', label: 'Phường Hải An' },
  { value: 'p-hai-duong', label: 'Phường Hải Dương' },
  { value: 'p-hoa-binh', label: 'Phường Hòa Bình' },
  { value: 'p-hong-an', label: 'Phường Hồng An' },
  { value: 'p-hong-bang', label: 'Phường Hồng Bàng' },
  { value: 'p-hung-dao', label: 'Phường Hưng Đạo' },
  { value: 'p-kien-an', label: 'Phường Kiến An' },
  { value: 'p-kinh-mon', label: 'Phường Kinh Môn' },
  { value: 'p-le-chan', label: 'Phường Lê Chân' },
  { value: 'p-le-dai-hanh', label: 'Phường Lê Đại Hành' },
  { value: 'p-le-ich-moc', label: 'Phường Lê Ích Mộc' },
  { value: 'p-le-thanh-nghi', label: 'Phường Lê Thanh Nghị' },
  { value: 'p-luu-kiem', label: 'Phường Lưu Kiếm' },
  { value: 'p-nam-do-son', label: 'Phường Nam Đồ Sơn' },
  { value: 'p-nam-dong', label: 'Phường Nam Đồng' },
  { value: 'p-nam-trieu', label: 'Phường Nam Triệu' },
  { value: 'p-ngo-quyen', label: 'Phường Ngô Quyền' },
  { value: 'p-nguyen-dai-nang', label: 'Phường Nguyễn Đại Năng' },
  { value: 'p-nguyen-trai', label: 'Phường Nguyễn Trãi' },
  { value: 'p-nhi-chieu', label: 'Phường Nhị Chiểu' },
  { value: 'p-pham-su-manh', label: 'Phường Phạm Sư Mạnh' },
  { value: 'p-phu-lien', label: 'Phường Phù Liễn' },
  { value: 'p-tan-hung', label: 'Phường Tân Hưng' },
  { value: 'p-thach-khoi', label: 'Phường Thạch Khôi' },
  { value: 'p-thanh-dong', label: 'Phường Thành Đông' },
  { value: 'p-thien-huong', label: 'Phường Thiên Hương' },
  { value: 'p-thuy-nguyen', label: 'Phường Thủy Nguyên' },
  { value: 'p-tran-hung-dao', label: 'Phường Trần Hưng Đạo' },
  { value: 'p-tran-lieu', label: 'Phường Trần Liễu' },
  { value: 'p-tran-nhan-tong', label: 'Phường Trần Nhân Tông' },
  { value: 'p-tu-minh', label: 'Phường Tứ Minh' },
  { value: 'p-viet-hoa', label: 'Phường Việt Hòa' },
  // Xã
  { value: 'x-an-hung', label: 'Xã An Hưng' },
  { value: 'x-an-khanh', label: 'Xã An Khánh' },
  { value: 'x-an-lao', label: 'Xã An Lão' },
  { value: 'x-an-phu', label: 'Xã An Phú' },
  { value: 'x-an-quang', label: 'Xã An Quang' },
  { value: 'x-an-thanh', label: 'Xã An Thành' },
  { value: 'x-an-truong', label: 'Xã An Trường' },
  { value: 'x-vinh-bao', label: 'Xã Vĩnh Bảo' },
  { value: 'x-vinh-hai', label: 'Xã Vĩnh Hải' },
  { value: 'x-vinh-hoa', label: 'Xã Vĩnh Hòa' },
  { value: 'x-vinh-lai', label: 'Xã Vĩnh Lại' },
  { value: 'x-vinh-thinh', label: 'Xã Vĩnh Thịnh' },
  { value: 'x-vinh-thuan', label: 'Xã Vĩnh Thuận' },
]

const namOptions = [
  { value: '2026', label: '2026' },
  { value: '2025', label: '2025' },
]

const thangOptions = [
  { value: '01', label: 'Tháng 01' },
  { value: '02', label: 'Tháng 02' },
  { value: '03', label: 'Tháng 03' },
  { value: '04', label: 'Tháng 04' },
  { value: '05', label: 'Tháng 05' },
  { value: '06', label: 'Tháng 06' },
  { value: '08', label: 'Tháng 08' },
]

interface FilterBarProps {
  className?: string
}

export function FilterBar({ className }: FilterBarProps) {
  const [donVi, setDonVi] = useState('toan-tp')
  const [nam, setNam] = useState('2026')
  const [thang, setThang] = useState('08')

  function reset() {
    setDonVi('toan-tp')
    setNam('2026')
    setThang('08')
  }

  const selectCls = cn(
    'h-9 rounded-lg border border-border bg-card px-3 text-[13px] text-foreground',
    'focus:outline-none focus:ring-2 focus:ring-ring',
    'cursor-pointer appearance-none',
    'bg-[url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'16\' height=\'16\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%2352708c\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3E%3Cpath d=\'m6 9 6 6 6-6\'/%3E%3C/svg%3E")] bg-no-repeat bg-[right_0.5rem_center] pr-8'
  )

  return (
    <div className={cn('card-surface flex flex-wrap items-center gap-3 p-4', className)}>
      <select
        value={donVi}
        onChange={e => setDonVi(e.target.value)}
        aria-label="Đơn vị hành chính"
        className={cn(selectCls, 'min-w-[240px]')}
      >
        {donViOptions.map(o => (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
      </select>

      <select
        value={nam}
        onChange={e => setNam(e.target.value)}
        aria-label="Năm"
        className={cn(selectCls, 'min-w-[90px]')}
      >
        {namOptions.map(o => (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
      </select>

      <select
        value={thang}
        onChange={e => setThang(e.target.value)}
        aria-label="Tháng"
        className={cn(selectCls, 'min-w-[120px]')}
      >
        {thangOptions.map(o => (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
      </select>

      <button
        type="button"
        onClick={reset}
        className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-border bg-card px-3 text-[13px] text-muted-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
        </svg>
        Bỏ lọc
      </button>
    </div>
  )
}
