export function GrdpScenarioCard() {
  return (
    <div className="card-surface p-5">
      <h2 className="text-[15px] font-bold text-foreground mb-1">
        Kịch bản điều hành tăng trưởng GRDP 13%
      </h2>
      <p className="text-[12px] text-muted-foreground mb-4">
        Kịch bản điều chỉnh 6 tháng cuối năm 2026 (KH294) — GRDP giá so sánh 2020, Cục Thống kê công bố theo quý
      </p>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        {/* 6 tháng đầu */}
        <div className="rounded-lg border border-border bg-muted/30 px-4 py-3">
          <div className="text-[11px] uppercase tracking-wide text-muted-foreground">6 tháng đầu</div>
          <div className="text-[11px] text-muted-foreground">Đã thực hiện</div>
          <div className="mt-1 text-2xl font-bold text-foreground">11,33%</div>
          <div className="text-[12px] text-muted-foreground">Kịch bản cũ 12,27%</div>
        </div>
        {/* 6 tháng cuối */}
        <div className="rounded-lg border border-[#c2820c]/40 bg-[#c2820c]/5 px-4 py-3">
          <div className="text-[11px] uppercase tracking-wide text-muted-foreground">6 tháng cuối cần</div>
          <div className="text-[11px] text-muted-foreground">Phải đạt</div>
          <div className="mt-1 text-2xl font-bold text-[#c2820c]">+14,5%</div>
          <div className="text-[12px] text-muted-foreground">Quý III +14,8% · Quý IV +14,21%</div>
        </div>
        {/* Cả năm */}
        <div className="rounded-lg border border-primary/40 bg-primary/5 px-4 py-3">
          <div className="text-[11px] uppercase tracking-wide text-muted-foreground">Cả năm 2026</div>
          <div className="text-[11px] text-muted-foreground">Mục tiêu</div>
          <div className="mt-1 text-2xl font-bold text-primary">13%</div>
          <div className="text-[12px] text-muted-foreground">GRDP đạt 731.651 tỷ đồng (giá SS 2020)</div>
        </div>
      </div>
    </div>
  )
}
