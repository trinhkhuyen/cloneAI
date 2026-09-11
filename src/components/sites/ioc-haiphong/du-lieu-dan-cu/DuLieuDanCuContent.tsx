import { FilterBar } from './FilterBar'
import { StatCards } from './StatCards'
import { DonutCard } from './DonutCard'
import { GrowthBarChart } from './GrowthBarChart'
import { Top10BarChart } from './Top10BarChart'

const tonGiaoSlices = [
  { label: 'Không tôn giáo', value: 85, color: '#004b92' },
  { label: 'Phật giáo', value: 10, color: '#0b8a5e' },
  { label: 'Công giáo', value: 4, color: '#c2820c' },
  { label: 'Khác', value: 1, color: '#8b5cf6' },
]

const khuVucSlices = [
  { label: 'Thành thị', value: 52, color: '#004b92' },
  { label: 'Nông thôn', value: 48, color: '#0b8a5e' },
]

const gioiTinhSlices = [
  { label: 'Nữ', value: 50.2, color: '#e8574a' },
  { label: 'Nam', value: 49.8, color: '#004b92' },
]

const nhomTuoiSlices = [
  { label: '15–64 tuổi', value: 64.7, color: '#004b92' },
  { label: '0–14 tuổi', value: 18.5, color: '#0b8a5e' },
  { label: '65+ tuổi', value: 16.8, color: '#c2820c' },
]

export function DuLieuDanCuContent() {
  return (
    <div className="space-y-5">
      {/* Page header */}
      <div>
        <h1 className="text-xl font-semibold uppercase text-primary">
          Cơ sở dữ liệu quốc gia về dân cư
        </h1>
        <p className="mt-1 text-[13px] text-muted-foreground">
          Nguồn: Hệ thống CSDLQG về dân cư · Toàn thành phố · kỳ 08/2026
        </p>
      </div>

      {/* Filter bar */}
      <FilterBar />

      {/* Stat cards */}
      <StatCards />

      {/* 4 donut charts */}
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        <DonutCard
          title="Cơ cấu tôn giáo trên địa bàn TP"
          slices={tonGiaoSlices}
        />
        <DonutCard
          title="Cơ cấu nhân khẩu theo khu vực"
          slices={khuVucSlices}
        />
        <DonutCard
          title="Cơ cấu nhân khẩu theo giới tính"
          slices={gioiTinhSlices}
        />
        <DonutCard
          title="Cơ cấu nhân khẩu theo nhóm tuổi"
          slices={nhomTuoiSlices}
        />
      </div>

      {/* 2 bar charts */}
      <div className="grid gap-5 xl:grid-cols-2">
        <GrowthBarChart />
        <Top10BarChart />
      </div>
    </div>
  )
}
