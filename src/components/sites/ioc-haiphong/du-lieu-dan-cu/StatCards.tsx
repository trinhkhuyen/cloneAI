import { cn } from '@/lib/utils'

interface StatCardProps {
  label: string
  value: string
  note: string
  icon: React.ReactNode
  iconBg: string
}

function StatCard({ label, value, note, icon, iconBg }: StatCardProps) {
  return (
    <div className="rounded-2xl border border-border bg-card p-4 shadow-[var(--shadow-card)]">
      <div className="flex items-start gap-3">
        <div className={cn('flex size-10 shrink-0 items-center justify-center rounded-lg text-white', iconBg)}>
          {icon}
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">{label}</p>
          <p className="mt-0.5 text-2xl font-bold leading-none text-primary">{value}</p>
          <p className="mt-1 text-[12px] text-muted-foreground">{note}</p>
        </div>
      </div>
    </div>
  )
}

const MapIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/>
    <line x1="9" y1="3" x2="9" y2="18"/>
    <line x1="15" y1="6" x2="15" y2="21"/>
  </svg>
)

const UsersIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
)

const IdCardIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect width="20" height="14" x="2" y="5" rx="2"/>
    <circle cx="9" cy="12" r="2"/>
    <path d="M13 12h4"/>
    <path d="M13 15h4"/>
    <path d="M7 15h4"/>
  </svg>
)

const BriefcaseIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect width="20" height="14" x="2" y="7" rx="2"/>
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
  </svg>
)

const stats: StatCardProps[] = [
  {
    label: 'Tổng diện tích',
    value: '3.194,72 km²',
    note: 'Cộng dồn 114 xã, phường',
    icon: <MapIcon />,
    iconBg: 'bg-blue-600',
  },
  {
    label: 'Tổng nhân khẩu',
    value: '4.432.761 người',
    note: 'Kỳ 08/2026',
    icon: <UsersIcon />,
    iconBg: 'bg-emerald-600',
  },
  {
    label: 'Tỉ lệ đã cấp thẻ CCCD',
    value: '91,3%',
    note: '4.047.825 / 4.432.761 người',
    icon: <IdCardIcon />,
    iconBg: 'bg-amber-500',
  },
  {
    label: 'Tỉ lệ nhân khẩu trong độ tuổi lao động',
    value: '64,7%',
    note: 'Nhóm 15–64 tuổi: 2.869.866 người',
    icon: <BriefcaseIcon />,
    iconBg: 'bg-purple-600',
  },
]

export function StatCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {stats.map(s => (
        <StatCard key={s.label} {...s} />
      ))}
    </div>
  )
}
