import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fees | Sydenham After School Club',
  description: 'Clear, simple fees for after school childcare and tuition in Sydenham SE26. Tax-Free Childcare and childcare vouchers welcome.',
};

export default function FeesPage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <span className="eyebrow">Fees</span>
          <h1>Simple, transparent pricing</h1>
          <p>No hidden costs. Choose the sessions that suit your family, and stretch your budget further with Tax-Free Childcare.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-2">
            <div>
              <h2 className="mb-2">After School Club</h2>
              <div className="table-responsive">
                <table className="price-table compact">
                  <thead><tr><th>Session</th><th>Time</th><th>Price</th></tr></thead>
                  <tbody>
                    <tr><td>Morning club &amp; school drop-off</td><td>7am – 9am</td><td>£20.00</td></tr>
                    <tr><td>Term time (Mon–Fri)</td><td>3pm – 6pm</td><td>£37.50</td></tr>
                    <tr><td>Term time (Mon–Fri)</td><td>3pm – 9pm</td><td>£45.00</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div>
              <h2 className="mb-2">Tuition</h2>
              <div className="table-responsive">
                <table className="price-table compact">
                  <thead><tr><th>Session</th><th>Length</th><th>Price</th></tr></thead>
                  <tbody>
                    <tr><td>Maths, English or Science</td><td>1hr 20min</td><td>£20 / hour</td></tr>
                    <tr><td>Multiple subjects</td><td>Multiple sessions</td><td>£20 / hour</td></tr>
                    <tr><td>11+, SATs, GCSE &amp; A-Level prep</td><td>1hr 20min</td><td>£20 / hour</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="form-note" style={{marginTop:'12px'}}>£20 per hour, Primary to A-Level. Sessions run 1hr 20min — ask us about multi-session packages.</p>
            </div>
          </div>
          <p className="form-note center" style={{marginTop:'20px'}}>Fees shown as a guide and may change. Please confirm current rates when you book. Siblings and multi-session discounts may be available — just ask. <strong>Ofsted URN: EY123456</strong></p>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="split">
            <div>
              <span className="eyebrow">Save up to 20%</span>
              <h2>Tax-Free Childcare &amp; vouchers welcome</h2>
              <p className="lead" style={{maxWidth:'none'}}>For eligible families, the government's Tax-Free Childcare scheme tops up what you pay: for every £8 you put in, the government adds £2 — up to £2,000 per child each year. We also accept childcare vouchers from many employers.</p>
              
              <h3 style={{marginTop:'24px', marginBottom:'12px', fontSize: '1.25rem'}}>How to pay with Tax-Free Childcare (3 Easy Steps):</h3>
              <ol style={{paddingLeft:'20px', display:'flex', flexDirection:'column', gap:'12px'}}>
                <li><strong>Set up your account:</strong> Apply for a Tax-Free Childcare account on GOV.UK.</li>
                <li><strong>Search for us:</strong> Once approved, search for <em>Sydenham After School Club</em> or our Ofsted URN: <strong>EY123456</strong>.</li>
                <li><strong>Transfer funds:</strong> Send payments directly from your Tax-Free Childcare account to cover your fees!</li>
              </ol>

              <p style={{marginTop:'24px'}}><a href="https://www.gov.uk/tax-free-childcare" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{padding:'10px 22px'}}>Check your eligibility on GOV.UK →</a></p>
            </div>
            <div className="split-media" style={{display:'flex', alignItems:'center', justifyContent:'center', fontSize: '92px'}}>
              <span>£</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-band">
            <h2>Questions about fees?</h2>
            <p>We're happy to talk through options and find the right fit for your family and budget.</p>
            <div style={{display:'flex', gap:'14px', justifyContent:'center', flexWrap:'wrap'}}>
              <a href="/contact" className="btn btn-navy">Get in Touch</a>
              <a href="https://wa.me/447584874710" className="btn btn-wa" target="_blank" rel="noopener noreferrer">WhatsApp Us</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
