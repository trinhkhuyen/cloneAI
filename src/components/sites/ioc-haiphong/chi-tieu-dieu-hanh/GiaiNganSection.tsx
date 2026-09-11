import { cn } from '@/lib/utils'

type RankLevel = 'cao' | 'tb' | 'thap'

interface Ward {
  rank: number
  name: string
  keHoach: string
  soDA: number
  giaiNgan: string
  tyLe: string
  note?: string
  level: RankLevel
}

const wards: Ward[] = [
  { rank: 1,  name: 'Xã Hồng Châu',           keHoach: '35,7',  soDA: 1,  giaiNgan: '33,8',  tyLe: '94,7%', level: 'cao' },
  { rank: 2,  name: 'Xã Chấn Hưng',            keHoach: '26,8',  soDA: 1,  giaiNgan: '24,9',  tyLe: '93,2%', level: 'cao' },
  { rank: 3,  name: 'Xã Kiến Hưng',            keHoach: '24',    soDA: 1,  giaiNgan: '22,3',  tyLe: '93,1%', level: 'cao' },
  { rank: 4,  name: 'Xã Vĩnh Lại',             keHoach: '45,9',  soDA: 1,  giaiNgan: '41,4',  tyLe: '90,4%', level: 'cao' },
  { rank: 5,  name: 'Xã Hợp Tiến',             keHoach: '90,3',  soDA: 3,  giaiNgan: '81,5',  tyLe: '90,2%', level: 'cao', note: 'Loại trừ dự án GPMB đường sắt tốc độ cao Hà Nội – Quảng Ninh, tỷ lệ giải ngân đạt 92,3%' },
  { rank: 6,  name: 'Phường Trần Hưng Đạo',    keHoach: '45,6',  soDA: 1,  giaiNgan: '41',    tyLe: '89,8%', level: 'cao' },
  { rank: 7,  name: 'Phường An Phong',          keHoach: '34,5',  soDA: 1,  giaiNgan: '30,8',  tyLe: '89,3%', level: 'cao' },
  { rank: 8,  name: 'Xã Thái Tân',             keHoach: '24,2',  soDA: 1,  giaiNgan: '21,3',  tyLe: '88,2%', level: 'cao' },
  { rank: 9,  name: 'Phường Lê Ích Mộc',       keHoach: '34,1',  soDA: 1,  giaiNgan: '30',    tyLe: '88,1%', level: 'cao' },
  { rank: 10, name: 'Xã Gia Phúc',             keHoach: '36,1',  soDA: 1,  giaiNgan: '31,1',  tyLe: '86%',   level: 'cao' },
  { rank: 11, name: 'Phường Trần Nhân Tông',   keHoach: '36,9',  soDA: 1,  giaiNgan: '31,4',  tyLe: '85%',   level: 'cao' },
  { rank: 12, name: 'Xã An Hưng',              keHoach: '21,4',  soDA: 1,  giaiNgan: '18,2',  tyLe: '84,9%', level: 'cao' },
  { rank: 13, name: 'Xã Hải Hưng',             keHoach: '27,6',  soDA: 1,  giaiNgan: '23,3',  tyLe: '84,3%', level: 'cao' },
  { rank: 14, name: 'Xã Nam Thanh Miện',       keHoach: '37,1',  soDA: 1,  giaiNgan: '31,2',  tyLe: '84,2%', level: 'cao' },
  { rank: 15, name: 'Xã Nghi Dương',           keHoach: '21,4',  soDA: 1,  giaiNgan: '17,9',  tyLe: '83,9%', level: 'cao' },
  { rank: 16, name: 'Xã Bình Giang',           keHoach: '46,7',  soDA: 1,  giaiNgan: '38,1',  tyLe: '81,6%', level: 'tb' },
  { rank: 17, name: 'Phường Nam Đồng',         keHoach: '56,7',  soDA: 1,  giaiNgan: '46,1',  tyLe: '81,3%', level: 'tb' },
  { rank: 18, name: 'Xã Cẩm Giang',            keHoach: '38,1',  soDA: 1,  giaiNgan: '31',    tyLe: '81,2%', level: 'tb' },
  { rank: 19, name: 'Xã An Quang',             keHoach: '24,9',  soDA: 1,  giaiNgan: '20,1',  tyLe: '81%',   level: 'tb' },
  { rank: 20, name: 'Xã Quyết Thắng',          keHoach: '93,5',  soDA: 6,  giaiNgan: '75,6',  tyLe: '80,9%', level: 'tb' },
  { rank: 36, name: 'Phường Ngô Quyền',        keHoach: '381',   soDA: 14, giaiNgan: '281,5', tyLe: '73,9%', level: 'tb' },
  { rank: 42, name: 'Phường Tứ Minh',          keHoach: '114,1', soDA: 10, giaiNgan: '81,1',  tyLe: '71,1%', level: 'tb' },
  { rank: 49, name: 'Phường Thủy Nguyên',      keHoach: '622,8', soDA: 40, giaiNgan: '428',   tyLe: '68,7%', level: 'thap' },
  { rank: 48, name: 'Đặc khu Cát Hải',         keHoach: '163,6', soDA: 4,  giaiNgan: '112,7', tyLe: '68,9%', level: 'thap' },
]

function levelColor(level: RankLevel) {
  if (level === 'cao')  return { badge: 'bg-[#138a5e]/10 text-[#0d7a4e]', bar: 'bg-[#138a5e]' }
  if (level === 'tb')   return { badge: 'bg-[#c2820c]/10 text-[#9a6606]', bar: 'bg-[#c2820c]' }
  return                       { badge: 'bg-[#e8574a]/10 text-[#c8342a]', bar: 'bg-[#e8574a]' }
}

function levelLabel(level: RankLevel) {
  if (level === 'cao')  return 'Cao'
  if (level === 'tb')   return 'TB'
  return 'Thấp'
}

export function GiaiNganSection() {
  return (
    <section aria-label="Giải ngân đầu tư công" className="space-y-4">
      <div>
        <h2 className="text-[15px] font-bold text-foreground">Giải ngân đầu tư công</h2>
        <p className="mt-0.5 text-[12px] text-muted-foreground">
          Tỷ lệ giải ngân vốn đầu tư công theo xã/phường · bấm bản đồ để xem danh sách dự án
        </p>
      </div>

      {/* Summary stats */}
      <div className="card-surface p-4 lg:p-5">
        <div className="mb-3 text-[12px] font-semibold uppercase tracking-wider text-muted-foreground">
          Giải ngân toàn thành phố · 114 xã/phường
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <div className="rounded-lg bg-muted/40 px-4 py-3">
            <div className="text-[11px] text-muted-foreground">Đã giải ngân / Kế hoạch giao TP</div>
            <div className="mt-1 text-xl font-bold text-foreground">22.540 <span className="text-sm font-normal text-muted-foreground">tỷ đồng</span></div>
            <div className="text-[12px] text-muted-foreground">Đã giải ngân</div>
          </div>
          <div className="rounded-lg bg-muted/40 px-4 py-3">
            <div className="text-[11px] text-muted-foreground">Kế hoạch giao TP</div>
            <div className="mt-1 text-xl font-bold text-foreground">38.794 <span className="text-sm font-normal text-muted-foreground">tỷ đồng</span></div>
            <div className="text-[12px] text-muted-foreground">Tổng kế hoạch</div>
          </div>
          <div className="rounded-lg bg-[#e8574a]/8 border border-[#e8574a]/20 px-4 py-3">
            <div className="text-[11px] text-muted-foreground">Còn phải giải ngân</div>
            <div className="mt-1 text-xl font-bold text-[#c8342a]">16.254 <span className="text-sm font-normal text-muted-foreground">tỷ đồng</span></div>
            <div className="text-[12px] text-muted-foreground">Còn lại</div>
          </div>
          <div className="rounded-lg bg-primary/8 border border-primary/20 px-4 py-3">
            <div className="text-[11px] text-muted-foreground">Bình quân 114 xã</div>
            <div className="mt-1 text-2xl font-bold text-primary">64%</div>
            <div className="text-[12px] text-muted-foreground">Tỷ lệ giải ngân</div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="mt-4">
          <div className="mb-1.5 flex justify-between text-[12px]">
            <span className="text-muted-foreground">Tiến độ giải ngân</span>
            <span className="font-semibold text-[#138a5e]">58,16% kế hoạch CP giao</span>
          </div>
          <div className="h-3 overflow-hidden rounded-full bg-muted">
            <div className="h-full w-[58%] rounded-full bg-[#138a5e]" />
          </div>
          <div className="mt-1 flex justify-between text-[11px] text-muted-foreground">
            <span>0</span>
            <span>38.756 tỷ đồng (CP giao)</span>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center gap-3 text-[12px]">
        <span className="text-muted-foreground font-medium">Xếp hạng giải ngân:</span>
        {(['cao','tb','thap'] as RankLevel[]).map(l => (
          <span key={l} className={cn('rounded-full px-2.5 py-0.5 font-semibold', levelColor(l).badge)}>
            {levelLabel(l)}
          </span>
        ))}
      </div>

      {/* Ranking table */}
      <div className="card-surface overflow-hidden">
        {/* Table header */}
        <div className="grid grid-cols-[40px_1fr_80px_60px_80px_80px] gap-2 border-b border-border bg-muted/40 px-4 py-2 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
          <div>#</div>
          <div>Xã/Phường</div>
          <div className="text-right">KH Vốn năm<br/><span className="font-normal normal-case">Tỷ đồng</span></div>
          <div className="text-right">Số DA</div>
          <div className="text-right">Giải ngân<br/><span className="font-normal normal-case">Tỷ đồng</span></div>
          <div className="text-right">Tỷ lệ</div>
        </div>
        <ul>
          {wards.map((w, i) => {
            const pct = parseFloat(w.tyLe)
            const colors = levelColor(w.level)
            return (
              <li key={w.rank}>
                <button
                  className={cn(
                    'grid w-full grid-cols-[40px_1fr_80px_60px_80px_80px] gap-2 px-4 py-3 text-left text-[13px] transition-colors hover:bg-muted/30',
                    i < wards.length - 1 ? 'border-b border-border/50' : ''
                  )}
                  aria-label={`${w.name} — Tỷ lệ giải ngân ${w.tyLe}`}
                >
                  <div className="font-medium text-muted-foreground">{w.rank}</div>
                  <div>
                    <div className="font-medium text-foreground">{w.name}</div>
                    {w.note && (
                      <div className="mt-0.5 text-[11px] text-[#c2820c]">{w.note}</div>
                    )}
                    {/* Mini progress bar */}
                    <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-muted">
                      <div
                        className={cn('h-full rounded-full', colors.bar)}
                        style={{ width: `${Math.min(pct, 100)}%` }}
                      />
                    </div>
                  </div>
                  <div className="text-right font-medium text-foreground">{w.keHoach}</div>
                  <div className="text-right text-muted-foreground">{w.soDA}</div>
                  <div className="text-right font-medium text-foreground">{w.giaiNgan}</div>
                  <div className={cn('text-right font-bold', colors.badge.includes('138a5e') ? 'text-[#0d7a4e]' : colors.badge.includes('c2820c') ? 'text-[#9a6606]' : 'text-[#c8342a]')}>
                    {w.tyLe}
                  </div>
                </button>
              </li>
            )
          })}
        </ul>
        <p className="border-t border-border/50 px-4 py-3 text-[12px] text-muted-foreground">
          Hiển thị {wards.length} / 114 xã/phường · Sắp xếp theo tỷ lệ giải ngân giảm dần
        </p>
      </div>
    </section>
  )
}
