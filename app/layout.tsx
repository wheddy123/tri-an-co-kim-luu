import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable}`}>
      <body className="min-h-screen bg-[#fffdf8] text-[#1c1917] antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
