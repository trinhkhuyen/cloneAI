import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "600", "700"],
  variable: "--font-be-vietnam-pro",
  display: "swap",
  fallback: ["ui-sans-serif", "system-ui", "sans-serif"],
});

export const metadata: Metadata = {
  title: "IOC Hải Phòng — Trung tâm điều hành thông minh",
  description: "Trung tâm Chỉ đạo Điều hành · IOC Hải Phòng",
  icons: { icon: "/sites/ioc-haiphong/shared/icon.png" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={beVietnamPro.variable}>
      <body className={beVietnamPro.className}>{children}</body>
    </html>
  );
}
