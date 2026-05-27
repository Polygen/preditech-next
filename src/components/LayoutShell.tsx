// @ts-nocheck
'use client';

import { usePathname } from 'next/navigation';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ScriptLoader } from "@/components/ScriptLoader";

const DASHBOARD_PATHS = ['/filo-profil', '/ekspertiz'];

export default function LayoutShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isDashboard = DASHBOARD_PATHS.some(p => pathname?.startsWith(p));

  if (isDashboard) {
    return (
      <>
        {children}
        <ScriptLoader />
      </>
    );
  }

  return (
    <>
      <Navbar />
      {children}
      <Footer />
      <ScriptLoader />
    </>
  );
}
