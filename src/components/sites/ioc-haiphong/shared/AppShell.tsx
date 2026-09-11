'use client'
import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { MenuIcon, PanelLeftCloseIcon, LayoutGridIcon, ChevronDownIcon } from './icons'
import { AppSidebar } from './AppSidebar'
import { cn } from '@/lib/utils'

const apps = [
  {
    href: '/',
    label: 'Kinh tế xã hội',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/>
      </svg>
    ),
    matchPaths: ['/', '/chi-tieu-dieu-hanh'],
  },
  {
    href: '/theodoi',
    label: 'Theo dõi địa phương',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    matchPaths: ['/theodoi'],
  },
  {
    href: '/kh294',
    label: 'Kịch bản GRDP (KH294)',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20V10"/><path d="M18 20V4"/><path d="M6 20v-4"/>
      </svg>
    ),
    matchPaths: ['/kh294'],
  },
]

function AppSwitcher({ currentLabel }: { currentLabel: string }) {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const ref = useRef<HTMLDivElement>(null)

  // Close on outside click
  useEffect(() => {
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    if (open) document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [open])

  const activeApp = apps.find(a => a.matchPaths.some(p => pathname === p || pathname.startsWith(p + '/'))) ?? apps[0]

  return (
    <div ref={ref} className="relative z-50 ml-auto">
      <button
        type="button"
        aria-label="Chuyển ứng dụng"
        aria-expanded={open}
        onClick={() => setOpen(o => !o)}
        className={cn(
          'inline-flex h-11 touch-manipulation items-center gap-2 rounded-md border border-border bg-card px-2.5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
          open ? 'bg-muted' : 'hover:bg-muted'
        )}
      >
        <LayoutGridIcon size={18} />
        <span className="hidden text-[13px] font-semibold text-primary sm:inline">{activeApp.label}</span>
        <span className="hidden h-4 w-px bg-border sm:block" />
        <ChevronDownIcon size={16} />
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 w-[260px] max-w-[calc(100vw-2rem)] origin-top-right overflow-hidden rounded-xl border border-border bg-card p-2 shadow-lg animate-in fade-in-0 zoom-in-95">
          <div className="grid grid-cols-2 gap-1.5">
            {apps.map(app => {
              const isActive = app.matchPaths.some(p => pathname === p || pathname.startsWith(p + '/'))
              return (
                <Link
                  key={app.href}
                  href={app.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    'relative flex touch-manipulation flex-col items-center gap-2 rounded-md border p-3 text-center outline-none transition-colors',
                    isActive
                      ? 'border-primary/30 bg-primary/5'
                      : 'border-border hover:bg-muted'
                  )}
                >
                  {isActive && (
                    <span className="absolute right-1.5 top-1.5 flex size-[18px] items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6 9 17l-5-5"/>
                      </svg>
                    </span>
                  )}
                  <span className={cn(
                    'flex size-11 items-center justify-center rounded-md text-white',
                    isActive ? 'bg-primary' : 'bg-muted-foreground/70'
                  )}>
                    {app.icon}
                  </span>
                  <span className="text-[12.5px] font-semibold leading-tight text-foreground">
                    {app.label}
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}

interface AppShellProps {
  children: React.ReactNode
  pageTitle?: string
  pageSubtitle?: string
  appSwitcherLabel?: string
  sidebar?: React.ReactNode
}

export function AppShell({ children, pageTitle, pageSubtitle, appSwitcherLabel = 'Kinh tế xã hội', sidebar }: AppShellProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      {/* Watermark */}
      <div className="dashboard-watermark" />

      {/* Header */}
      <header className="flex h-16 items-center gap-3 border-b border-border bg-card px-4 sm:px-5 fixed top-0 left-0 right-0 z-50">
        {/* Mobile menu toggle */}
        <button
          type="button"
          aria-label="Mở danh mục phân hệ"
          onClick={() => setSidebarOpen(true)}
          className="-ml-1 flex size-11 shrink-0 touch-manipulation items-center justify-center rounded-md text-primary transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring lg:hidden"
        >
          <MenuIcon size={24} />
        </button>

        {/* Desktop sidebar toggle */}
        <button
          type="button"
          aria-label={sidebarCollapsed ? 'Mở danh mục phân hệ' : 'Thu gọn danh mục phân hệ'}
          onClick={() => setSidebarCollapsed(c => !c)}
          className="-ml-1 hidden size-11 shrink-0 items-center justify-center rounded-md text-primary transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring lg:flex"
        >
          <PanelLeftCloseIcon size={24} />
        </button>

        {/* Logo */}
        <Image
          src="/sites/ioc-haiphong/shared/logo-haiphong.png"
          alt="Logo TP Hải Phòng"
          width={44}
          height={44}
          className="size-11 object-contain"
        />

        {/* Agency info */}
        <div className="header-agency-block leading-tight">
          <div className="header-agency-title">Ủy ban nhân dân thành phố Hải Phòng</div>
          {pageTitle ? (
            <div className="header-agency-subtitle">{pageTitle}{pageSubtitle && ` · ${pageSubtitle}`}</div>
          ) : (
            <div className="header-agency-subtitle">Trung tâm Chỉ đạo Điều hành · IOC</div>
          )}
        </div>

        {/* App switcher */}
        <AppSwitcher currentLabel={appSwitcherLabel} />
      </header>

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      {sidebar ?? (
        <AppSidebar
          open={sidebarOpen}
          collapsed={sidebarCollapsed}
          onClose={() => setSidebarOpen(false)}
        />
      )}

      {/* Main content area */}
      <div
        className={cn(
          'flex flex-col pt-16 transition-[margin] duration-200 ease-out',
          !sidebar && (sidebarCollapsed ? 'lg:ml-0' : 'lg:ml-64')
        )}
      >
        <main className="slim-scroll flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  )
}
