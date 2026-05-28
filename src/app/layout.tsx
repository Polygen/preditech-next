// @ts-nocheck
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LayoutShell from "@/components/LayoutShell";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Preditech — Kestirimci Bakım Platformu | OBD + IMU Hibrit Veri Füzyonu",
  description: "Dünyanın ilk OBD + IMU hibrit veri füzyonu kestirimci bakım platformu. Arızayı beklemeyin, öngörün.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={inter.variable} style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}
