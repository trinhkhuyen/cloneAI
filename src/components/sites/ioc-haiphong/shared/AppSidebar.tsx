'use client'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDownIcon, ChevronUpIcon } from './icons'
import { cn } from '@/lib/utils'

const mainGroups = [
  {
    label: 'Các chỉ tiêu điều hành chính',
    items: [
      { href: '/', label: 'Tổng quan' },
      { href: '/chi-tieu-dieu-hanh', label: 'Chỉ tiêu điều hành xã phường' },
    ],
  },
  {
    label: 'Lĩnh vực kinh tế',
    items: [
      { href: '/linh-vuc/kt-cnxd', label: 'Công nghiệp, xây dựng' },
      { href: '/linh-vuc/kt-dv', label: 'Dịch vụ' },
      { href: '/linh-vuc/kt-nlts', label: 'Nông nghiệp, lâm nghiệp, thủy sản' },
      { href: '/linh-vuc/kt-nsnn', label: 'Thu chi ngân sách nhà nước và giải ngân vốn đầu tư công' },
      { href: '/linh-vuc/kt-nhtd', label: 'Hoạt động ngân hàng, tín dụng' },
      { href: '/linh-vuc/kt-dtht', label: 'Thu hút, quản lý đầu tư và phát triển hạ tầng' },
      { href: '/linh-vuc/kt-tnmt', label: 'Quản lý tài nguyên, bảo vệ môi trường và phòng chống thiên tai' },
      { href: '/linh-vuc/kt-grdp', label: 'Tăng trưởng kinh tế (GRDP)' },
    ],
  },
  {
    label: 'Lĩnh vực xã hội',
    items: [
      { href: '/linh-vuc/xh-vhtt', label: 'Văn hóa, thể thao' },
      { href: '/linh-vuc/xh-gd', label: 'Giáo dục và Đào tạo' },
      { href: '/linh-vuc/xh-yt', label: 'Y tế' },
      { href: '/linh-vuc/xh-ldvl', label: 'Lao động, việc làm và an sinh xã hội' },
      { href: '/linh-vuc/xh-khcn', label: 'Khoa học công nghệ, đổi mới sáng tạo và chuyển đổi số' },
    ],
  },
  {
    label: 'CCHC, Tư pháp, Thanh tra, đối ngoại và đảm bảo QP,AN',
    items: [
      { href: '/linh-vuc/nc-tp', label: 'Tư pháp' },
      { href: '/linh-vuc/nc-tt', label: 'Thanh tra' },
      { href: '/linh-vuc/nc-anqp', label: 'Bảo đảm an ninh trật tự, quốc phòng, quân sự địa phương' },
      { href: '/linh-vuc/snv-ccvc', label: 'Cán bộ, công chức, viên chức' },
      { href: '/linh-vuc/nc-cchc', label: 'Cải cách hành chính' },
    ],
  },
]

const grdpSection = {
  label: 'Kịch bản điều hành GRDP',
  items: [
    { href: '/kich-ban-grdp', label: 'Tổng quan kịch bản' },
    { href: '/kich-ban-grdp/cong-nghiep', label: 'Khu vực Công nghiệp' },
    { href: '/kich-ban-grdp/xay-dung', label: 'Khu vực Xây dựng' },
    { href: '/kich-ban-grdp/dich-vu', label: 'Khu vực Dịch vụ' },
    { href: '/kich-ban-grdp/chi-so-gia', label: 'Chỉ số giá & đầu vào' },
  ],
}

const kpiSection = {
  label: 'Bộ Chỉ số Hiệu năng điều hành',
  items: [
    { href: '/dau-tu-cong', label: 'Giải ngân vốn đầu tư công' },
    { href: '/thu-chi-ngan-sach', label: 'Thu chi ngân sách tại địa phương' },
    { href: '/gpmb', label: 'Giám sát giải phóng mặt bằng' },
    { href: '/tu-phap', label: 'Bổ trợ tư pháp và công chứng' },
    { href: '/du-lieu-dan-cu', label: 'Dữ liệu dân cư' },
  ],
}

function NavGroup({ label, items, defaultOpen = false }: { label: string; items: { href: string; label: string }[]; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen)
  const pathname = usePathname()

  return (
    <div>
      <button
        onClick={() => setOpen(o => !o)}
        className="flex min-h-[44px] w-full touch-manipulation items-center justify-between gap-2 rounded-md bg-muted/60 px-2.5 py-2 text-left"
      >
        <span className="text-[12.5px] font-bold uppercase leading-tight tracking-wide text-primary-darker">{label}</span>
        <span className="flex shrink-0 items-center gap-1.5 text-muted-foreground">
          {open ? <ChevronUpIcon size={14} /> : <ChevronDownIcon size={14} />}
        </span>
      </button>
      <div className={cn(
        'grid transition-[grid-template-rows] duration-200 ease-out motion-reduce:transition-none',
        open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
      )}>
        <div className="overflow-hidden">
          <div className="space-y-0.5 pt-1">
            {items.map(item => (
              <Link
                key={item.href + item.label}
                href={item.href}
                className={cn(
                  'flex min-h-[44px] touch-manipulation items-center gap-2.5 rounded-md px-2 py-2 text-[13px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
                  pathname === item.href
                    ? 'bg-primary/10 font-semibold text-primary'
                    : 'text-foreground hover:bg-muted'
                )}
              >
                <span className="flex size-6 shrink-0 items-center justify-center rounded-md bg-muted text-primary">
                  <span className="text-[10px] font-bold">
                    {item.label.slice(0, 1).toUpperCase()}
                  </span>
                </span>
                <span className="leading-tight">{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

interface AppSidebarProps {
  open: boolean
  collapsed: boolean
  onClose: () => void
}

export function AppSidebar({ open, collapsed, onClose }: AppSidebarProps) {
  const pathname = usePathname()

  return (
    <aside
      id="app-sidebar"
      aria-label="Danh mục lĩnh vực"
      className={cn(
        'fixed bottom-0 left-0 top-16 z-40 flex w-64 shrink-0 flex-col overflow-hidden border-r border-border bg-card transition-transform duration-200 ease-out',
        open ? 'translate-x-0' : '-translate-x-full lg:translate-x-0',
        collapsed && 'lg:-translate-x-full'
      )}
    >
      <nav className="slim-scroll flex-1 overflow-y-auto px-3 py-4 space-y-5">
        {mainGroups.map(group => (
          <NavGroup
            key={group.label}
            label={group.label}
            items={group.items}
            defaultOpen={group.items.some(i => i.href === pathname)}
          />
        ))}

        <div>
          <div className="px-2 pb-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
            {grdpSection.label}
          </div>
          <div className="space-y-0.5">
            {grdpSection.items.map(item => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'flex min-h-[44px] touch-manipulation items-center gap-2.5 rounded-md px-2 py-2 text-[13px] transition-colors',
                  pathname === item.href
                    ? 'bg-primary/10 font-semibold text-primary'
                    : 'text-foreground hover:bg-muted'
                )}
              >
                <span className="flex size-6 shrink-0 items-center justify-center rounded-md bg-muted text-primary">
                  <span className="text-[10px] font-bold">{item.label.slice(0, 1)}</span>
                </span>
                <span className="leading-tight">{item.label}</span>
              </Link>
            ))}
          </div>
        </div>

        <div>
          <div className="px-2 pb-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
            {kpiSection.label}
          </div>
          <div className="space-y-0.5">
            {kpiSection.items.map(item => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'flex min-h-[44px] touch-manipulation items-center gap-2.5 rounded-md px-2 py-2 text-[13px] transition-colors',
                  pathname === item.href
                    ? 'bg-primary/10 font-semibold text-primary'
                    : 'text-foreground hover:bg-muted'
                )}
              >
                <span className="flex size-6 shrink-0 items-center justify-center rounded-md bg-muted text-primary">
                  <span className="text-[10px] font-bold">{item.label.slice(0, 1)}</span>
                </span>
                <span className="leading-tight">{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </aside>
  )
}
