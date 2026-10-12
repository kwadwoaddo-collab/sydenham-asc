'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Icon from '@/components/Icon';

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
      {!isAdmin && <a className="skip-link" href="#main">Skip to content</a>}
      {!isAdmin && header}
      <main id="main">{children}</main>
      {!isAdmin && footer}
      {!isAdmin && (
        <nav className="action-bar" aria-label="Quick contact">
          <a className="ab-call" href="tel:07584874710"><Icon name="phone" /> Call</a>
          <a className="ab-wa" href="https://wa.me/447584874710" target="_blank" rel="noopener noreferrer"><Icon name="whatsapp" /> WhatsApp</a>
          <Link className="ab-book" href="/contact">Book a place</Link>
        </nav>
      )}
    </>
  );
}
