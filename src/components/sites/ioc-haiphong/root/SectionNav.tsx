'use client'
import { cn } from '@/lib/utils'

const sections = ['Tổng quan', 'GRDP', 'Chỉ tiêu', 'Sản xuất', 'Tài chính', 'Đầu tư', 'Cảng–DL', 'Tín dụng']

export function SectionNav({ activeIndex, onNavigate }: { activeIndex: number; onNavigate: (i: number) => void }) {
  return (
    <div className="sticky top-0 z-30 -mx-4 mb-3 flex flex-nowrap items-center gap-1.5 overflow-x-auto border-b border-border bg-background/90 px-4 py-2 backdrop-blur slim-scroll md:hidden">
      <span className="mr-1 shrink-0 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">Mục</span>
      {sections.map((s, i) => (
        <button
          key={s}
          onClick={() => onNavigate(i)}
          className={cn(
            'inline-flex min-h-[44px] shrink-0 touch-manipulation items-center whitespace-nowrap rounded-md border px-2.5 text-[12.5px] font-medium transition-colors',
            activeIndex === i
              ? 'bg-primary border-primary text-white'
              : 'bg-card border-border text-foreground hover:bg-muted'
          )}
        >
          {s}
        </button>
      ))}
    </div>
  )
}
