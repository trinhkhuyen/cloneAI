import { AppShell } from '@/components/sites/ioc-haiphong/shared/AppShell'
import { CommandBanner } from '@/components/sites/ioc-haiphong/root/CommandBanner'
import { OverviewCard } from '@/components/sites/ioc-haiphong/root/OverviewCard'

export const metadata = {
  title: 'IOC Hải Phòng — Trung tâm điều hành thông minh',
}

export default function HomePage() {
  return (
    <AppShell>
      <div className="page-enter mx-auto max-w-[1600px]">
        <div className="space-y-4 p-4 lg:p-5">
          <CommandBanner />
          <div>
            <OverviewCard />
          </div>
        </div>
      </div>
    </AppShell>
  )
}
