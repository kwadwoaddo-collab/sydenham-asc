import type { Metadata } from 'next';
import './globals.css';
import Link from 'next/link';
import Image from 'next/image';
import { AuthProvider } from '@/lib/AuthContext';

export const metadata: Metadata = {
  title: 'Sydenham After School Club',
  description: "Caring after school club and expert tuition in Sydenham SE26. Wraparound childcare 7am–9pm, school drop-offs and pick-ups, and GCSE & SATs tuition.",
};

const nav = [
  { href: "/after-school-club", label: "After School Club", key: "club" },
  { href: "/tuition", label: "Tuition & GCSE", key: "tuition" },
  { href: "/free-assessment", label: "Free Assessment", key: "assessment" },
  { href: "/fees", label: "Fees", key: "fees" },
  { href: "/join-us", label: "Join the Team", key: "join" },
  { href: "/about", label: "About", key: "about" },
  { href: "/contact", label: "Contact", key: "contact" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&display=swap" />
        <meta name="theme-color" content="#2c2a26" />
      </head>
      <body>
        <header className="site-header">
          <div className="container nav">
            <Link className="brand" href="/">
              <img src="/photos/logo.png" alt="Sydenham After School Club" className="brand-logo" />
            </Link>
            <ul className="nav-links" id="navLinks">
              {nav.map((item) => (
                <li key={item.key}><Link href={item.href}>{item.label}</Link></li>
              ))}
            </ul>
            <div className="nav-cta">
              <Link href="/join-us" className="btn btn-outline">We're Hiring</Link>
              <Link href="/contact" className="btn btn-primary">Book a Place</Link>
              <button className="nav-toggle" id="navToggle" aria-label="Menu">☰</button>
            </div>
          </div>
        </header>

        <main>
          <AuthProvider>
            {children}
          </AuthProvider>
        </main>

        <footer className="site-footer">
          <div className="container">
            <div className="footer-grid">
              <div>
                <Link className="brand" href="/" style={{background:'#fff', borderRadius:'12px', padding:'10px 16px', display:'inline-flex'}}>
                  <img src="/photos/logo.png" alt="Sydenham After School Club" className="brand-logo" />
                </Link>
                <p style={{marginTop:'14px', maxWidth: '320px'}}>
                  A safe, friendly after school club and tuition centre in the heart of Sydenham —
                  trusted by local families for over ten years.
                </p>
                <img src="/photos/ofsted.svg" alt="Ofsted registered" style={{height:'58px', width:'auto', marginTop:'18px', background:'#fff', borderRadius:'10px', padding:'6px 12px'}} />

              </div>
              <div>
                <h4>Explore</h4>
                <ul className="footer-links">
                  <li><Link href="/after-school-club">After School Club</Link></li>
                  <li><Link href="/tuition">Tuition &amp; GCSE</Link></li>
                  <li><Link href="/fees">Fees</Link></li>
                  <li><Link href="/join-us">Join the Team</Link></li>
                  <li><Link href="/about">About Us</Link></li>
                </ul>
              </div>
              <div>
                <h4>Get in Touch</h4>
                <ul className="footer-links">
                  <li><a href="tel:07584874710">📞 075 8487 4710</a></li>
                  <li><a href="tel:02036213942">☎️ 020 3621 3942</a></li>
                  <li><a href="mailto:info@sydenhamasc.co.uk">✉️ info@sydenhamasc.co.uk</a></li>
                  <li>📍 105 Sydenham Road,<br />London SE26 5UA</li>
                </ul>
              </div>
            </div>
            <div className="footer-bottom">
              <span>© {new Date().getFullYear()} Sydenham After School Club. All rights reserved.</span>
              <span>All staff DBS checked &amp; safeguarding trained.</span>
            </div>
          </div>
        </footer>

        <a className="wa-float" href="https://wa.me/447584874710" aria-label="WhatsApp us" target="_blank" rel="noopener noreferrer">💬</a>
      </body>
    </html>
  );
}
