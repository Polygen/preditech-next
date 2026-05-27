// @ts-nocheck
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ScriptLoader } from "@/components/ScriptLoader";

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
      <head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/@phosphor-icons/web@2.1.1/src/regular/style.css"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/@phosphor-icons/web@2.1.1/src/fill/style.css"
        />
      </head>
      <body className={inter.variable} style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
        <Navbar />
        {children}
        <Footer />
        <ScriptLoader />
      </body>
    </html>
  );
}
