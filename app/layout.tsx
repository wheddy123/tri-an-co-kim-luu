import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "vietnamese"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin", "vietnamese"],
});

export const metadata: Metadata = {
  title: "Tri Ân Cô Lương Thị Kim Lưu | 12A15 K65 THPT Xuân Đỉnh",
  description: "Trang tri ân cô Lương Thị Kim Lưu - Giáo viên Chủ nhiệm & Giảng dạy GDKT&PL - Tập thể Lớp 12A15 K65 Trường THPT Xuân Đỉnh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} dark`}>
      <body className="min-h-screen bg-[#0a0708] text-[#f5f5f4] antialiased">
        {children}
      </body>
    </html>
  );
}
