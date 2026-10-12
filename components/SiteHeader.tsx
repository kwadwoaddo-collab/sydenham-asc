'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Icon from '@/components/Icon';

const nav = [
  { href: '/after-school-club', label: 'After School Club' },
  { href: '/tuition', label: 'Tuition' },
  { href: '/fees', label: 'Fees' },
  { href: '/about', label: 'About' },
  { href: '/join-us', label: 'Join the Team' },
  { href: '/contact', label: 'Contact' },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') { setOpen(false); toggleRef.current?.focus(); } };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className="site-header">
      <div className="container nav">
        <Link className="brand" href="/" aria-label="Sydenham After School Club — home">
          <Image src="/photos/logo.png" alt="" width={97} height={52} className="brand-logo" priority />
        </Link>
        <ul className={`nav-links${open ? ' open' : ''}`} id="navLinks" onClick={(e) => { if ((e.target as HTMLElement).closest("a")) setOpen(false); }}>
          {nav.map((item) => (
            <li key={item.href}>
              <Link href={item.href} aria-current={pathname === item.href ? 'page' : undefined}>{item.label}</Link>
            </li>
          ))}
          <li className="nav-mobile-only" hidden={!open}>
            <Link href="/free-assessment" aria-current={pathname === '/free-assessment' ? 'page' : undefined}>Free Assessment</Link>
          </li>
        </ul>
        <div className="nav-cta">
          <Link href="/free-assessment" className="btn btn-outline btn-sm">Free Assessment</Link>
          <Link href="/contact" className="btn btn-primary btn-sm">Book a Place</Link>
          <button
            ref={toggleRef}
            type="button"
            className="nav-toggle"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="navLinks"
            onClick={() => setOpen((o) => !o)}
          >
            <Icon name={open ? 'close' : 'menu'} />
          </button>
        </div>
      </div>
    </header>
  );
}
