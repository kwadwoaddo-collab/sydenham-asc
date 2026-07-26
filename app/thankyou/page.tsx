
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Thank You | Sydenham After School Club",
  description: "Thank you for your enquiry to Sydenham After School Club. We'll be in touch shortly.",
};

export default function Page() {
  return (
    <>
      

  <section className="hero">
    <div className="container">
      <div style={{"textAlign":"center","padding":"84px 0"}}>
        <div style={{"width":"80px","height":"80px","borderRadius":"50%","background":"linear-gradient(135deg,#e4f6ec,#c8efd8)","display":"grid","placeItems":"center","margin":"0 auto 28px","boxShadow":"0 10px 30px rgba(47,174,102,.2)"}}>
          <span className="ic">✅</span>
        </div>
        <h1 style={{"color":"var(--navy)","margin":"0 0 16px"}}>Thank you!</h1>
        <p style={{"fontSize":"1.2rem","color":"var(--ink-soft)","maxWidth":"560px","margin":"0 auto","lineHeight":"1.7"}}>
          We've received your enquiry and really appreciate you getting in touch. Someone from our team will be back to you shortly — usually within 24 hours.
        </p>
        <p style={{"marginTop":"28px","color":"var(--ink-soft)"}}>
          In the meantime, feel free to call us on <a href="tel:07584874710" style={{"color":"var(--navy-2)","fontWeight":"600"}}>075 8487 4710</a> or message us on <a href="https://wa.me/447584874710" style={{"color":"var(--navy-2)","fontWeight":"600"}} target="_blank" rel="noopener">WhatsApp</a> if you have any urgent questions.
        </p>
        <div style={{"marginTop":"40px"}}>
          <a href="/" className="btn btn-primary">Back to home</a>
        </div>
      </div>
    </div>
  </section>


      <section className="section section-soft">
        <div className="container center">
          <h2>Next Steps</h2>
          <p style={{ marginTop: '16px', fontSize: '1.1rem' }}>
            While we review your enquiry, please take a moment to review our <br/><br/>
            <a href="/faq" className="btn btn-outline" style={{ marginRight: '12px' }}>FAQs</a> 
            <a href="/handbook.pdf" className="btn btn-outline">Parent Handbook</a>
          </p>
        </div>
      </section>
    
    </>
  );
}
