'use client';

import { usePathname } from 'next/navigation';

export default function ClientLayoutWrapper({
  header,
  footer,
  children
}: {
  header: React.ReactNode;
  footer: React.ReactNode;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith('/admin');

  return (
    <>
      {!isAdmin && header}
      <main>{children}</main>
      {!isAdmin && footer}
      {!isAdmin && (
        <a className="wa-float" href="https://wa.me/447584874710" aria-label="WhatsApp us" target="_blank" rel="noopener noreferrer">💬</a>
      )}
    </>
  );
}
