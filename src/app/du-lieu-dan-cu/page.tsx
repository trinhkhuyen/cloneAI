import { AppShell } from '@/components/sites/ioc-haiphong/shared/AppShell'
import { DuLieuDanCuContent } from '@/components/sites/ioc-haiphong/du-lieu-dan-cu/DuLieuDanCuContent'

export const metadata = {
  title: 'Cơ sở dữ liệu quốc gia về dân cư — IOC Hải Phòng',
}

export default function DuLieuDanCuPage() {
  return (
    <AppShell
      pageTitle="Cơ sở dữ liệu quốc gia về dân cư"
      pageSubtitle="CSDLQG Dân cư"
    >
      <div className="page-enter mx-auto max-w-[1600px] lg:ml-64">
        <div className="space-y-5 p-4 lg:p-5">
          <DuLieuDanCuContent />
        </div>
      </div>
    </AppShell>
  )
}
