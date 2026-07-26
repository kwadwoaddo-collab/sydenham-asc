import { Metadata } from 'next';
import BookingFunnel from '@/components/BookingFunnel';

export const metadata: Metadata = {
  title: 'Contact & Book a Place | Sydenham After School Club',
  description: 'Contact Sydenham After School Club in SE26. Call 075 8487 4710, email info@sydenhamasc.co.uk, or send an enquiry to book your child\'s place.',
};

export default function ContactPage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <span className="eyebrow">Contact &amp; Book</span>
          <h1>Book a place or ask us anything</h1>
          <p>Tell us a little about your child and what you need. We'll get back to you quickly with availability and next steps.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="split">
            <div>
              <span className="eyebrow">Get in touch</span>
              <h2>We're here to help</h2>
              <p className="lead" style={{maxWidth:'none'}}>Call, WhatsApp, email or use the form — whatever's easiest. We're open every day and always happy to talk through options.</p>
              <ul className="info-list mt-2">
                <li><span className="ic">📱</span><div><b>Mobile</b><a href="tel:07584874710">075 8487 4710</a></div></li>
                <li><span className="ic">☎️</span><div><b>Landline</b><a href="tel:02036213942">020 3621 3942</a></div></li>
                <li><span className="ic">💬</span><div><b>WhatsApp</b><a href="https://wa.me/447584874710" target="_blank" rel="noopener noreferrer">Message us instantly</a></div></li>
                <li><span className="ic">✉️</span><div><b>Email</b><a href="mailto:info@sydenhamasc.co.uk">info@sydenhamasc.co.uk</a></div></li>
                <li><span className="ic">📍</span><div><b>Visit</b>105 Sydenham Road, London SE26 5UA</div></li>
                <li><img src="/photos/ofsted.svg" alt="Ofsted registered" style={{height:'40px', width:'auto', background:'#fff', borderRadius:'6px', padding:'4px'}} /></li>
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
          <div className="center mb-3">
            <span className="eyebrow">Find us</span>
            <h2>105 Sydenham Road, SE26 5UA</h2>
          </div>
          <div style={{borderRadius:'var(--radius-lg)', overflow:'hidden', boxShadow:'var(--shadow)'}}>
            <iframe
              title="Map to Sydenham After School Club"
              src="https://www.google.com/maps?q=105+Sydenham+Road,+London+SE26+5UA&output=embed"
              width="100%" height="420" style={{border:0, display:'block'}} loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
