import { AppShell } from '@/components/sites/ioc-haiphong/shared/AppShell'
import { Kh294Banner } from '@/components/sites/ioc-haiphong/kh294/Kh294Banner'
import { AlertPanel } from '@/components/sites/ioc-haiphong/kh294/AlertPanel'
import { GrdpScenarioCard } from '@/components/sites/ioc-haiphong/kh294/GrdpScenarioCard'
import { GrdpProgressSection } from '@/components/sites/ioc-haiphong/kh294/GrdpProgressSection'
import { IndicatorGrid } from '@/components/sites/ioc-haiphong/kh294/IndicatorGrid'
import { Kh294Sidebar } from '@/components/sites/ioc-haiphong/kh294/Kh294Sidebar'

export const metadata = {
  title: 'Kịch bản tăng trưởng GRDP (KH294) — IOC Hải Phòng',
}

export default function Kh294Page() {
  return (
    <AppShell
      pageTitle="Kịch bản tăng trưởng GRDP"
      pageSubtitle="Kế hoạch 294/KH-UBND"
      appSwitcherLabel="Kịch bản GRDP (KH294)"
      sidebar={<Kh294Sidebar />}
    >
      <div className="page-enter mx-auto max-w-[1200px] lg:ml-64">
        <div className="space-y-4 p-4 lg:p-5">
          <Kh294Banner />
          <AlertPanel />
          <GrdpScenarioCard />
          <GrdpProgressSection />
          <IndicatorGrid />
        </div>
      </div>
    </AppShell>
  )
}
