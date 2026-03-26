'use client';

import { usePathname } from 'next/navigation';
import Header from './Components/Uiux/Header';

export default function ConditionalHeader() {
  const pathname = usePathname();

  if (pathname?.startsWith('/promo') || pathname?.startsWith('/admin')) {
    return null;
  }

  return <Header />;
}

