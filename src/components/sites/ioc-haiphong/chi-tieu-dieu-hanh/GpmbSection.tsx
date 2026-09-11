import { cn } from '@/lib/utils'

type RankLevel = 'cao' | 'tb' | 'thap' | 'chua'

interface WardGPMB {
  rank: number
  name: string
  tongDT: string
  soDA: number
  daDT: string
  tienDo: string
  level: RankLevel
}

const wards: WardGPMB[] = [
  { rank: 1,  name: 'Xã An Trường',           tongDT: '1.603.620',   soDA: 2, daDT: '1.604.064',   tienDo: '100%',  level: 'cao' },
  { rank: 2,  name: 'Phường Trần Nhân Tông',  tongDT: '582.062',     soDA: 1, daDT: '582.062',     tienDo: '100%',  level: 'cao' },
  { rank: 3,  name: 'Xã Vĩnh Thịnh',          tongDT: '214.349',     soDA: 1, daDT: '214.349',     tienDo: '100%',  level: 'cao' },
  { rank: 4,  name: 'Phường Lê Ích Mộc',      tongDT: '143.000',     soDA: 1, daDT: '143.000',     tienDo: '100%',  level: 'cao' },
  { rank: 5,  name: 'Xã Vĩnh Bảo',            tongDT: '114.594',     soDA: 1, daDT: '114.594',     tienDo: '100%',  level: 'cao' },
  { rank: 6,  name: 'Xã Vĩnh Hòa',            tongDT: '94.149',      soDA: 1, daDT: '94.149',      tienDo: '100%',  level: 'cao' },
  { rank: 7,  name: 'Xã Hà Nam',              tongDT: '91.096',      soDA: 1, daDT: '91.095',      tienDo: '100%',  level: 'cao' },
  { rank: 8,  name: 'Xã Kiến Hải',            tongDT: '17.645',      soDA: 2, daDT: '17.645',      tienDo: '100%',  level: 'cao' },
  { rank: 9,  name: 'Xã Hà Tây',              tongDT: '8.317',       soDA: 3, daDT: '8.317',       tienDo: '100%',  level: 'cao' },
  { rank: 10, name: 'Xã Nam Thanh Miện',      tongDT: '8.023',       soDA: 1, daDT: '8.023',       tienDo: '100%',  level: 'cao' },
  { rank: 11, name: 'Xã Trường Tân',          tongDT: '7.903',       soDA: 1, daDT: '7.903',       tienDo: '100%',  level: 'cao' },
  { rank: 12, name: 'Phường Lê Chân',         tongDT: '4.185',       soDA: 2, daDT: '4.185',       tienDo: '100%',  level: 'cao' },
  { rank: 13, name: 'Phường Hưng Đạo',        tongDT: '2.102',       soDA: 2, daDT: '2.102',       tienDo: '100%',  level: 'cao' },
  { rank: 14, name: 'Xã An Phú',              tongDT: '1.019',       soDA: 1, daDT: '1.019',       tienDo: '100%',  level: 'cao' },
  { rank: 15, name: 'Xã Nguyễn Lương Bằng',  tongDT: '241.306',     soDA: 6, daDT: '240.268',     tienDo: '99,6%', level: 'cao' },
  { rank: 16, name: 'Xã Hải Hưng',            tongDT: '3.247',       soDA: 2, daDT: '3.230',       tienDo: '99,5%', level: 'cao' },
  { rank: 17, name: 'Xã Quyết Thắng',         tongDT: '595.772',     soDA: 3, daDT: '591.049',     tienDo: '99,2%', level: 'cao' },
  { rank: 18, name: 'Phường Hải An',           tongDT: '2.297.980',   soDA: 6, daDT: '2.277.791',   tienDo: '99,1%', level: 'cao' },
  { rank: 19, name: 'Xã Vĩnh Lại',            tongDT: '6.400',       soDA: 3, daDT: '6.344',       tienDo: '99,1%', level: 'cao' },
  { rank: 20, name: 'Xã Bắc Thanh Miện',      tongDT: '43.018',      soDA: 3, daDT: '42.600',      tienDo: '99%',   level: 'cao' },
  { rank: 21, name: 'Xã Kiến Hưng',           tongDT: '2.723.723',   soDA: 2, daDT: '2.686.356',   tienDo: '98,6%', level: 'cao' },
  { rank: 22, name: 'Phường Phù Liễn',        tongDT: '389.315',     soDA: 3, daDT: '381.348',     tienDo: '98%',   level: 'cao' },
  { rank: 23, name: 'Xã Vĩnh Thuận',          tongDT: '84.192',      soDA: 2, daDT: '82.406',      tienDo: '97,9%', level: 'cao' },
  { rank: 24, name: 'Xã Thượng Hồng',         tongDT: '1.095.247',   soDA: 1, daDT: '1.066.462',   tienDo: '97,4%', level: 'cao' },
  { rank: 25, name: 'Phường Nguyễn Trãi',     tongDT: '19.900',      soDA: 3, daDT: '19.345',      tienDo: '97,2%', level: 'cao' },
  { rank: 26, name: 'Xã Tiên Lãng',           tongDT: '882.794',     soDA: 2, daDT: '855.070',     tienDo: '96,9%', level: 'tb' },
  { rank: 27, name: 'Xã Hà Bắc',              tongDT: '445.432',     soDA: 4, daDT: '431.715',     tienDo: '96,9%', level: 'tb' },
]

function levelColor(level: RankLevel) {
  if (level === 'cao')  return { text: 'text-[#0d7a4e]', bar: 'bg-[#138a5e]', badge: 'bg-[#138a5e]/10 text-[#0d7a4e]' }
  if (level === 'tb')   return { text: 'text-[#9a6606]', bar: 'bg-[#c2820c]', badge: 'bg-[#c2820c]/10 text-[#9a6606]' }
  if (level === 'thap') return { text: 'text-[#c8342a]', bar: 'bg-[#e8574a]', badge: 'bg-[#e8574a]/10 text-[#c8342a]' }
  return                       { text: 'text-muted-foreground', bar: 'bg-muted-foreground/30', badge: 'bg-muted text-muted-foreground' }
}

function levelLabel(level: RankLevel) {
  if (level === 'cao')  return 'Cao'
  if (level === 'tb')   return 'TB'
  if (level === 'thap') return 'Thấp'
  return 'Chưa có DA'
}

export function GpmbSection() {
  return (
    <section aria-label="Giải phóng mặt bằng" className="space-y-4">
      <div>
        <h2 className="text-[15px] font-bold text-foreground">Giải phóng mặt bằng</h2>
        <p className="mt-0.5 text-[12px] text-muted-foreground">
          Tiến độ GPMB theo diện tích thu hồi · bấm bản đồ để xem danh sách dự án
        </p>
      </div>

      {/* Summary stats */}
      <div className="card-surface p-4 lg:p-5">
        <div className="mb-3 text-[12px] font-semibold uppercase tracking-wider text-muted-foreground">
          Tiến độ GPMB toàn thành phố · 107 xã có dự án
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <div className="rounded-lg bg-muted/40 px-4 py-3">
            <div className="text-[11px] text-muted-foreground">% diện tích đã giải phóng MB</div>
            <div className="mt-1 text-lg font-bold text-foreground">30.540.960 <span className="text-sm font-normal text-muted-foreground">m²</span></div>
            <div className="text-[12px] text-muted-foreground">Đã giải phóng</div>
          </div>
          <div className="rounded-lg bg-[#e8574a]/8 border border-[#e8574a]/20 px-4 py-3">
            <div className="text-[11px] text-muted-foreground">Còn phải giải phóng</div>
            <div className="mt-1 text-lg font-bold text-[#c8342a]">18.113.939 <span className="text-sm font-normal text-muted-foreground">m²</span></div>
            <div className="text-[12px] text-muted-foreground">Còn lại</div>
          </div>
          <div className="rounded-lg bg-muted/40 px-4 py-3">
            <div className="text-[11px] text-muted-foreground">Hộ dân đã / phải GPMB</div>
            <div className="mt-1 text-xl font-bold text-foreground">34.090 <span className="text-sm font-normal text-muted-foreground">/ 51.981</span></div>
            <div className="text-[12px] text-muted-foreground">Hộ dân</div>
          </div>
          <div className="rounded-lg bg-primary/8 border border-primary/20 px-4 py-3">
            <div className="text-[11px] text-muted-foreground">Số xã có dự án</div>
            <div className="mt-1 text-2xl font-bold text-primary">107</div>
            <div className="text-[12px] text-muted-foreground">/ 114 xã phường</div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="mt-4">
          <div className="mb-1.5 flex justify-between text-[12px]">
            <span className="text-muted-foreground">Tiến độ GPMB diện tích</span>
            <span className="font-semibold text-[#138a5e]">
              {(30540960 / (30540960 + 18113939) * 100).toFixed(1)}% diện tích đã GPMB
            </span>
          </div>
          <div className="h-3 overflow-hidden rounded-full bg-muted">
            <div className="h-full rounded-full bg-[#138a5e]" style={{ width: `${(30540960 / (30540960 + 18113939) * 100).toFixed(1)}%` }} />
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center gap-3 text-[12px]">
        <span className="text-muted-foreground font-medium">Xếp hạng tiến độ GPMB:</span>
        {(['cao','tb','thap','chua'] as RankLevel[]).map(l => (
          <span key={l} className={cn('rounded-full px-2.5 py-0.5 font-semibold', levelColor(l).badge)}>
            {levelLabel(l)}
          </span>
        ))}
      </div>

      {/* Ranking table */}
      <div className="card-surface overflow-hidden">
        <div className="grid grid-cols-[40px_1fr_100px_60px_100px_80px] gap-2 border-b border-border bg-muted/40 px-4 py-2 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
          <div>#</div>
          <div>Xã/Phường</div>
          <div className="text-right">Tổng DT phải GPMB<br/><span className="font-normal normal-case">m²</span></div>
          <div className="text-right">Số DA</div>
          <div className="text-right">Tổng DT đã GPMB<br/><span className="font-normal normal-case">m²</span></div>
          <div className="text-right">Tiến độ</div>
        </div>
        <ul>
          {wards.map((w, i) => {
            const pct = parseFloat(w.tienDo)
            const colors = levelColor(w.level)
            return (
              <li key={w.rank}>
                <button
                  className={cn(
                    'grid w-full grid-cols-[40px_1fr_100px_60px_100px_80px] gap-2 px-4 py-3 text-left text-[13px] transition-colors hover:bg-muted/30',
                    i < wards.length - 1 ? 'border-b border-border/50' : ''
                  )}
                  aria-label={`${w.name} — Tiến độ GPMB ${w.tienDo}`}
                >
                  <div className="font-medium text-muted-foreground">{w.rank}</div>
                  <div>
                    <div className="font-medium text-foreground">{w.name}</div>
                    <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-muted">
                      <div className={cn('h-full rounded-full', colors.bar)} style={{ width: `${Math.min(pct, 100)}%` }} />
                    </div>
                  </div>
                  <div className="text-right text-[12px] text-muted-foreground">{w.tongDT}</div>
                  <div className="text-right text-muted-foreground">{w.soDA}</div>
                  <div className="text-right text-[12px] text-foreground">{w.daDT}</div>
                  <div className={cn('text-right font-bold', colors.text)}>{w.tienDo}</div>
                </button>
              </li>
            )
          })}
        </ul>
        <p className="border-t border-border/50 px-4 py-3 text-[12px] text-muted-foreground">
          Hiển thị {wards.length} / 107 xã có dự án · Sắp xếp theo tiến độ GPMB giảm dần
        </p>
      </div>
    </section>
  )
}
