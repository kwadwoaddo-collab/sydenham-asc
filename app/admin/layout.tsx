import './admin-legacy.css';
import { Inter, Fraunces } from 'next/font/google';

// Admin keeps its original Inter + Fraunces pairing; loaded here so public pages don't pay for them.
const inter = Inter({ subsets: ['latin'], variable: '--admin-font-body', display: 'swap' });
const fraunces = Fraunces({ subsets: ['latin'], variable: '--admin-font-display', display: 'swap' });

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`admin-layout-wrapper ${inter.variable} ${fraunces.variable}`} style={{ minHeight: '100vh', background: 'var(--bg-soft)' }}>
      {children}
    </div>
  );
}
