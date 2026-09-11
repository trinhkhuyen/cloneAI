'use client'
import { useState } from 'react'
import Image from 'next/image'
import { MenuIcon, PanelLeftCloseIcon, LayoutGridIcon, ChevronDownIcon } from './icons'
import { AppSidebar } from './AppSidebar'
import { cn } from '@/lib/utils'

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
        <div className="relative z-50 ml-auto">
          <button
            type="button"
            aria-label="Chuyển ứng dụng"
            className="inline-flex h-11 touch-manipulation items-center gap-2 rounded-md border border-border bg-card px-2.5 transition-colors hover:bg-muted"
          >
            <LayoutGridIcon size={18} />
            <span className="hidden text-[13px] font-semibold text-primary sm:inline">{appSwitcherLabel}</span>
            <span className="hidden h-4 w-px bg-border sm:block" />
            <ChevronDownIcon size={16} />
          </button>
        </div>
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
