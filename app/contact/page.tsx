import { Metadata } from 'next';
import BookingFunnel from '@/components/BookingFunnel';
import Icon from '@/components/Icon';

export const metadata: Metadata = {
  title: 'Contact & Book a Place | Sydenham After School Club',
  description: 'Contact Sydenham After School Club in SE26. Call 075 8487 4710, email info@sydenhamasc.co.uk, or send an enquiry to book your child\'s place.',
};

export default function ContactPage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>Book a place or ask us anything</h1>
          <p>Tell us a little about your child and what you need. We&apos;ll get back to you quickly with availability and next steps.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="split" style={{ alignItems: 'start' }}>
            <div>
              <h2>We&apos;re here to help</h2>
              <p className="lead">Call, WhatsApp, email or use the form — whatever&apos;s easiest. We&apos;re open every day and always happy to talk through options.</p>
              <div className="contact-actions">
                <a href="tel:07584874710" className="btn btn-primary"><Icon name="phone" /> Call 075 8487 4710</a>
                <a href="https://wa.me/447584874710" className="btn btn-wa" target="_blank" rel="noopener noreferrer"><Icon name="whatsapp" /> WhatsApp us</a>
              </div>
              <ul className="info-list">
                <li><span className="ic"><Icon name="phone" /></span><div><b>Mobile</b><a href="tel:07584874710">075 8487 4710</a></div></li>
                <li><span className="ic"><Icon name="phone" /></span><div><b>Landline</b><a href="tel:02036213942">020 3621 3942</a></div></li>
                <li><span className="ic"><Icon name="mail" /></span><div><b>Email</b><a href="mailto:info@sydenhamasc.co.uk">info@sydenhamasc.co.uk</a></div></li>
                <li><span className="ic"><Icon name="pin" /></span><div><b>Visit</b>105 Sydenham Road, London SE26 5UA</div></li>
              </ul>
            </div>

            <div className="form-card">
              <BookingFunnel />
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="sec-head"><h2>Find us at 105 Sydenham Road, SE26 5UA</h2></div>
          <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '1px solid var(--line)' }}>
            <iframe
              title="Map to Sydenham After School Club"
              src="https://www.google.com/maps?q=105+Sydenham+Road,+London+SE26+5UA&output=embed"
              width="100%" height="420" style={{ border: 0, display: 'block' }} loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
