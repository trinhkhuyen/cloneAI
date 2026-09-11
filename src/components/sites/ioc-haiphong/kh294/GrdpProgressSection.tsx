export function GrdpProgressSection() {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      {/* Trajectory chart */}
      <div className="card-surface p-5">
        <h2 className="text-[14px] font-bold text-foreground mb-1">
          Điều hành tăng trưởng GRDP 6 tháng cuối năm
        </h2>
        <p className="text-[12px] text-muted-foreground mb-4">
          Lũy kế 9 tháng +12,21% (kịch bản +12,54%) · cần +14,5% ở 6 tháng cuối để về đích 13%
        </p>
        <div className="flex h-48 items-center justify-center rounded-lg bg-muted/40 border border-dashed border-border">
          <span className="text-center text-[12px] text-muted-foreground px-4">
            Đường về đích: quỹ đạo tăng trưởng GRDP lũy kế so kịch bản và mục tiêu cả năm
          </span>
        </div>
      </div>

      {/* GRDP scale */}
      <div className="card-surface p-5">
        <h2 className="text-[14px] font-bold text-foreground mb-1">
          Quy mô GRDP đạt kịch bản kỳ
        </h2>
        <p className="text-[12px] text-muted-foreground mb-4">
          Thực hiện 9 tháng so kịch bản 9 tháng 2026
        </p>
        {/* Gap callout */}
        <div className="mb-4 rounded-lg border border-[#e8574a]/20 px-3 py-3" style={{ backgroundColor: 'rgba(232,87,74,0.05)' }}>
          <div className="text-[12px] text-muted-foreground">Còn thiếu so kịch bản kỳ</div>
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-bold text-[#c8342a]">1.510</span>
            <span className="text-sm text-muted-foreground">tỷ đồng</span>
          </div>
          <div className="text-[12px] text-muted-foreground">Đã đạt 99,7% quy mô kịch bản kỳ</div>
        </div>
        {/* Bar comparison */}
        <div className="space-y-2">
          <div className="flex justify-between text-[12px]">
            <span className="flex items-center gap-1.5">
              <span className="inline-block h-2 w-2 rounded-full bg-primary" />
              Thực hiện 9T
            </span>
            <span className="font-semibold">524.200</span>
          </div>
          <div className="h-3 overflow-hidden rounded-full bg-muted">
            <div className="h-full w-[99.7%] rounded-full bg-primary" />
          </div>
          <div className="flex justify-between text-[12px]">
            <span className="flex items-center gap-1.5">
              <span className="inline-block h-2 w-2 rounded-full bg-muted-foreground/50" />
              Kịch bản 9T
            </span>
            <span className="font-semibold">525.710</span>
          </div>
          <div className="h-3 overflow-hidden rounded-full bg-muted">
            <div className="h-full w-full rounded-full bg-muted-foreground/30" />
          </div>
        </div>
        <p className="mt-3 text-[11px] text-muted-foreground">Đơn vị: tỷ đồng · giá so sánh 2020</p>
      </div>
    </div>
  )
}
