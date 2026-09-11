export function ThuNsSection() {
  return (
    <section aria-label="Thu ngân sách" className="space-y-4">
      <div>
        <h2 className="text-[15px] font-bold text-foreground">
          Thu ngân sách phát sinh theo địa bàn, không theo QĐ 5055
        </h2>
        <p className="mt-0.5 text-[12px] text-muted-foreground">
          % hoàn thành kế hoạch kỳ — thu NSNN trên địa bàn theo phân cấp nguồn thu
        </p>
      </div>

      <div className="card-surface p-8 flex flex-col items-center justify-center text-center gap-3 min-h-[200px]">
        <div className="flex size-12 items-center justify-center rounded-full bg-muted">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground">
            <path d="M12 22V12"/><path d="m17 12-5-5-5 5"/><path d="M5 22h14"/>
          </svg>
        </div>
        <div>
          <p className="font-semibold text-foreground">Chưa có số liệu thu ngân sách</p>
          <p className="mt-1 text-[13px] text-muted-foreground">
            Kỳ Tháng 9/2026 chưa được cập nhật số liệu thu ngân sách theo địa bàn.
          </p>
          <p className="mt-0.5 text-[12px] text-muted-foreground">
            Dữ liệu sẽ được cập nhật khi có báo cáo chính thức từ Sở Tài chính và Thuế TP.
          </p>
        </div>
      </div>
    </section>
  )
}
