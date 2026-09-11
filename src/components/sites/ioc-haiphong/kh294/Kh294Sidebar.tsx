'use client'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const sections = [
  { id: 'I', label: 'Chỉ tiêu kinh tế chủ yếu', href: '/kh294' },
  { id: 'II', label: 'Tăng trưởng GRDP theo ngành', href: '/kh294/tang-truong-grdp' },
  { id: 'III', label: 'Điều hành GTSX & doanh thu', href: '/kh294/dieu-hanh-gtsx' },
  { id: 'IV', label: 'Mục tiêu & trách nhiệm ngành', href: '/kh294/muc-tieu-nganh' },
  { id: 'V', label: 'Điều hành chi tiết', href: '/kh294/dieu-hanh-chi-tiet' },
  { id: 'VI', label: 'Dự án trọng điểm', href: '/kh294/du-an-trong-diem' },
]

export function Kh294Sidebar() {
  const pathname = usePathname()

  return (
    <aside
      aria-label="Lớp theo dõi kịch bản GRDP"
      className="fixed bottom-0 left-0 top-16 z-40 flex w-64 shrink-0 flex-col overflow-hidden border-r border-border bg-card lg:translate-x-0"
    >
      <nav className="slim-scroll flex-1 overflow-y-auto px-3 py-4">
        <div className="mb-3 px-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
          Kịch bản tăng trưởng GRDP 2026
        </div>
        <div className="space-y-0.5">
          {sections.map(s => (
            <a
              key={s.id}
              href={s.href}
              className={cn(
                'flex min-h-[44px] touch-manipulation items-center gap-3 rounded-md px-3 py-2 text-[13px] transition-colors',
                pathname === s.href
                  ? 'bg-primary/10 font-semibold text-primary'
                  : 'text-foreground hover:bg-muted'
              )}
            >
              <span className={cn(
                'flex size-6 shrink-0 items-center justify-center rounded-md text-[11px] font-bold',
                pathname === s.href
                  ? 'bg-primary text-white'
                  : 'bg-muted text-muted-foreground'
              )}>
                {s.id}
              </span>
              <span className="leading-tight">{s.label}</span>
            </a>
          ))}
        </div>
      </nav>
    </aside>
  )
}
