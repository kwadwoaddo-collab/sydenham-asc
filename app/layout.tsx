import type { Metadata } from 'next';
import './globals.css';
import { Figtree, Young_Serif } from 'next/font/google';
import Link from 'next/link';
import Image from 'next/image';
import { AuthProvider } from '@/lib/AuthContext';
import ClientLayoutWrapper from '@/components/ClientLayoutWrapper';
import SiteHeader from '@/components/SiteHeader';
import Icon from '@/components/Icon';

const body = Figtree({ subsets: ['latin'], variable: '--font-body', display: 'swap' });
const display = Young_Serif({ subsets: ['latin'], weight: '400', variable: '--font-display', display: 'swap' });

export const metadata: Metadata = {
  title: 'Sydenham After School Club',
  description: "Caring after school club and expert tuition in Sydenham SE26. Wraparound childcare 7am–9pm, school drop-offs and pick-ups, and GCSE & SATs tuition.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB" className={`${body.variable} ${display.variable}`}>
      <head>
        <meta name="theme-color" content="#FBF6EC" />
      </head>
      <body>
        <ClientLayoutWrapper
          header={<SiteHeader />}
          footer={
            <footer className="site-footer">
              <div className="container">
                <div className="footer-grid">
                  <div>
                    <Link className="footer-logo" href="/" aria-label="Sydenham After School Club — home">
                      <Image src="/photos/logo.png" alt="" width={97} height={52} className="brand-logo" />
                    </Link>
                    <p style={{ marginTop: 16, maxWidth: 340 }}>
                      A safe, friendly after school club and tuition centre in the heart of Sydenham — trusted by local families for over ten years.
                    </p>
                  </div>
                  <nav aria-label="Footer">
                    <h4>Explore</h4>
                    <ul className="footer-links">
                      <li><Link href="/after-school-club">After School Club</Link></li>
                      <li><Link href="/tuition">Tuition &amp; GCSE</Link></li>
                      <li><Link href="/free-assessment">Free Assessment</Link></li>
                      <li><Link href="/fees">Fees</Link></li>
                      <li><Link href="/about">About Us</Link></li>
                      <li><Link href="/leadership">Leadership</Link></li>
                      <li><Link href="/join-us">Join the Team</Link></li>
                    </ul>
                  </nav>
                  <div>
                    <h4>Get in touch</h4>
                    <ul className="footer-links footer-contact">
                      <li><Icon name="phone" /><a href="tel:07584874710">075 8487 4710</a></li>
                      <li><Icon name="phone" /><a href="tel:02036213942">020 3621 3942</a></li>
                      <li><Icon name="whatsapp" /><a href="https://wa.me/447584874710" target="_blank" rel="noopener noreferrer">WhatsApp us</a></li>
                      <li><Icon name="mail" /><a href="mailto:info@sydenhamasc.co.uk">info@sydenhamasc.co.uk</a></li>
                      <li><Icon name="pin" /><span>105 Sydenham Road,<br />London SE26 5UA</span></li>
                    </ul>
                  </div>
                </div>
                <div className="footer-bottom">
                  <span>© {new Date().getFullYear()} Sydenham After School Club. All rights reserved.</span>
                  <span>All staff DBS checked &amp; safeguarding trained.</span>
                </div>
              </div>
            </footer>
          }
        >
          <AuthProvider>
            {children}
          </AuthProvider>
        </ClientLayoutWrapper>
      </body>
    </html>
  );
}
