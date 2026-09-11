'use client'
import { cn } from '@/lib/utils'

const tabs = [
  { id: 'giai-ngan', label: 'Giải ngân' },
  { id: 'gpmb', label: 'GPMB' },
  { id: 'thu-ns', label: 'Thu NS' },
]

interface TabNavProps {
  active: string
  onChange: (id: string) => void
}

export function TabNav({ active, onChange }: TabNavProps) {
  return (
    <>
      {/* Desktop tab bar */}
      <div className="hidden md:flex items-center gap-1.5">
        <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mr-1">
          Lĩnh vực điều hành
        </span>
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            className={cn(
              'inline-flex min-h-[44px] touch-manipulation items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-[13px] font-medium transition-colors',
              active === tab.id
                ? 'bg-primary border-primary text-white'
                : 'bg-card border-border text-foreground hover:bg-muted'
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Mobile tab bar */}
      <div className="flex md:hidden items-center gap-1 rounded-xl border border-border bg-muted/50 p-1">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            className={cn(
              'flex min-h-[44px] flex-1 touch-manipulation items-center justify-center gap-1.5 rounded-lg text-[13px] font-medium transition-colors',
              active === tab.id
                ? 'bg-primary text-white shadow-sm'
                : 'text-muted-foreground hover:text-foreground'
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </>
  )
}
