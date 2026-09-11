import { AppShell } from '@/components/sites/ioc-haiphong/shared/AppShell'
import { ChiTieuBanner } from '@/components/sites/ioc-haiphong/chi-tieu-dieu-hanh/ChiTieuBanner'
import { ChiTieuContent } from '@/components/sites/ioc-haiphong/chi-tieu-dieu-hanh/ChiTieuContent'

export const metadata = {
  title: 'Chỉ tiêu điều hành xã phường — IOC Hải Phòng',
}

export default function ChiTieuDieuHanhPage() {
  return (
    <AppShell
      pageTitle="Chỉ tiêu điều hành xã phường"
      pageSubtitle="Giải ngân · GPMB · Thu NS"
    >
      <div className="page-enter mx-auto max-w-[1600px]">
        <div className="space-y-4 p-4 lg:p-5">
          <ChiTieuBanner />
          <ChiTieuContent />
        </div>
      </div>
    </AppShell>
  )
}
