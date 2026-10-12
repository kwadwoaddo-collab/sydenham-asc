import { Metadata } from 'next';
import Link from 'next/link';
import Icon from '@/components/Icon';

export const metadata: Metadata = {
  title: 'Fees | Sydenham After School Club',
  description: 'Clear, simple fees for after school childcare and tuition in Sydenham SE26. Tax-Free Childcare and childcare vouchers welcome.',
};

export default function FeesPage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>Simple, transparent pricing</h1>
          <p>No hidden costs. Choose the sessions that suit your family, and stretch your budget further with Tax-Free Childcare.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ gap: 48 }}>
            <div className="fee-block">
              <h2>After School Club</h2>
              <div className="table-responsive">
                <table className="price-table compact">
                  <thead><tr><th scope="col">Session</th><th scope="col">Time</th><th scope="col">Price</th></tr></thead>
                  <tbody>
                    <tr><td>Morning club &amp; school drop-off</td><td>7am – 9am</td><td>£20.00</td></tr>
                    <tr><td>Term time (Mon–Fri)</td><td>3pm – 6pm</td><td>£37.50</td></tr>
                    <tr><td>Term time (Mon–Fri)</td><td>3pm – 9pm</td><td>£45.00</td></tr>
                  </tbody>
                </table>
              </div>
              <p style={{ marginTop: 16 }}><Link href="/after-school-club" className="text-link">About the After School Club →</Link></p>
            </div>
            <div className="fee-block">
              <h2>Tuition</h2>
              <div className="table-responsive">
                <table className="price-table compact">
                  <thead><tr><th scope="col">Session</th><th scope="col">Length</th><th scope="col">Price</th></tr></thead>
                  <tbody>
                    <tr><td>Maths, English or Science</td><td>1hr 20min</td><td>£20 / hour</td></tr>
                    <tr><td>Multiple subjects</td><td>Multiple sessions</td><td>£20 / hour</td></tr>
                    <tr><td>11+, SATs, GCSE &amp; A-Level prep</td><td>1hr 20min</td><td>£20 / hour</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="form-note">£20 per hour, Primary to A-Level. Sessions run 1hr 20min — ask us about multi-session packages.</p>
              <p style={{ marginTop: 8 }}><Link href="/tuition" className="text-link">About tuition →</Link></p>
            </div>
          </div>
          <p className="form-note" style={{ marginTop: 32 }}>Fees shown as a guide and may change. Please confirm current rates when you book. Siblings and multi-session discounts may be available — just ask. <strong>Ofsted URN: 2854827</strong></p>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="split" style={{ alignItems: 'start' }}>
            <div>
              <h2>Tax-Free Childcare &amp; vouchers welcome</h2>
              <p className="lead" style={{ marginTop: 14 }}>For eligible families, the government&apos;s Tax-Free Childcare scheme tops up what you pay: for every £8 you put in, the government adds £2 — up to £2,000 per child each year. We also accept childcare vouchers from many employers.</p>
              <p style={{ marginTop: 24 }}><a href="https://www.gov.uk/tax-free-childcare" target="_blank" rel="noopener noreferrer" className="btn btn-outline">Check your eligibility on GOV.UK</a></p>
            </div>
            <div>
              <h3 style={{ marginBottom: 16 }}>How to pay with Tax-Free Childcare</h3>
              <ol className="steps" style={{ gridTemplateColumns: '1fr', gap: 20 }}>
                <li className="step"><h3 style={{ fontSize: '1.05rem' }}>Set up your account</h3><p>Apply for a Tax-Free Childcare account on GOV.UK.</p></li>
                <li className="step"><h3 style={{ fontSize: '1.05rem' }}>Search for us</h3><p>Once approved, search for <em>Sydenham After School Club</em> or our Ofsted URN: <strong>2854827</strong>.</p></li>
                <li className="step"><h3 style={{ fontSize: '1.05rem' }}>Transfer funds</h3><p>Send payments directly from your Tax-Free Childcare account to cover your fees.</p></li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-band">
            <h2>Questions about fees?</h2>
            <p>We&apos;re happy to talk through options and find the right fit for your family and budget.</p>
            <div className="btn-row">
              <Link href="/contact" className="btn btn-navy">Get in touch</Link>
              <a href="https://wa.me/447584874710" className="btn btn-wa" target="_blank" rel="noopener noreferrer"><Icon name="whatsapp" /> WhatsApp us</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
