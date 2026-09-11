import { ArrowUpIcon } from '../shared/icons'

export function OverviewCard() {
  return (
    <section className="card-surface p-5 lg:p-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        {/* Left: summary badges */}
        <div>
          <h2 className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-3">
            Tổng quan điều hành
          </h2>
          <div className="flex gap-3">
            <div className="flex items-center gap-2 rounded-lg bg-[#138a5e]/10 px-3 py-2">
              <span className="text-2xl font-bold text-[#138a5e]">2</span>
              <span className="text-[12px] text-[#0d7a4e]">Đạt kịch bản</span>
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-[#e8574a]/10 px-3 py-2">
              <span className="text-2xl font-bold text-[#e8574a]">0</span>
              <span className="text-[12px] text-[#c8342a]">Không đạt kịch bản</span>
            </div>
          </div>
        </div>

        {/* Middle: highlights */}
        <div>
          <div className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-3">
            Nổi bật · So cùng kỳ
          </div>
          <div className="grid gap-2">
            <div className="flex items-center gap-2 text-sm">
              <span className="rounded bg-[#138a5e]/10 px-1.5 py-0.5 text-[11px] font-semibold text-[#0d7a4e] uppercase tracking-wide">Cao nhất</span>
              <span className="text-foreground">Dư nợ tín dụng</span>
              <span className="font-semibold text-[#138a5e] flex items-center gap-0.5">
                <ArrowUpIcon size={14} />+17,78%
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="rounded bg-[#e8574a]/10 px-1.5 py-0.5 text-[11px] font-semibold text-[#c8342a] uppercase tracking-wide">Thấp nhất</span>
              <span className="text-foreground">Doanh nghiệp lập mới</span>
              <span className="font-semibold text-[#e8574a]">-26,96%</span>
            </div>
          </div>
        </div>

        {/* Right: capital disbursement */}
        <div className="min-w-[180px]">
          <div className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-2">
            Giải ngân đầu tư công · Toàn TP
          </div>
          <div className="flex items-baseline gap-1 mb-1">
            <span className="text-2xl font-bold text-foreground">22.540</span>
            <span className="text-sm text-muted-foreground">tỷ đồng</span>
          </div>
          <div className="text-[12px] text-muted-foreground mb-2">Tỷ lệ giải ngân đạt</div>
          <div className="grid gap-1 text-[13px]">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Chính phủ giao</span>
              <span className="font-semibold text-[#138a5e]">58,16%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Thành phố giao</span>
              <span className="font-semibold text-[#138a5e]">58,10%</span>
            </div>
          </div>
          <div className="mt-2 h-2 rounded-full bg-muted overflow-hidden">
            <div className="h-full w-[58%] rounded-full bg-[#138a5e]" />
          </div>
        </div>
      </div>

      {/* Bottom: report scope */}
      <div className="mt-4 pt-4 border-t border-border grid grid-cols-3 gap-4 text-[13px]">
        <div>
          <div className="text-muted-foreground text-[11px] uppercase tracking-wide mb-0.5">Kỳ hiện tại</div>
          <div className="font-semibold">Tháng 9/2026</div>
        </div>
        <div>
          <div className="text-muted-foreground text-[11px] uppercase tracking-wide mb-0.5">Số kỳ đã có số liệu</div>
          <div className="font-semibold">9 (T1–T9)</div>
        </div>
        <div>
          <div className="text-muted-foreground text-[11px] uppercase tracking-wide mb-0.5">Chỉ tiêu chủ yếu theo dõi</div>
          <div className="font-semibold">13</div>
        </div>
      </div>
    </section>
  )
}
