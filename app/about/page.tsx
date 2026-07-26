
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "About Us | Sydenham After School Club",
  description: "Sydenham After School Club has supported local families for over ten years with safe childcare and expert tuition in the heart of SE26.",
};

export default function Page() {
  return (
    <>
      

  <section className="hero">
    <div className="container">
      <span className="eyebrow">About Us</span>
      <h1>Rooted in Sydenham, trusted by families</h1>
      <p>For over ten years we've given local children a safe place to learn, play and grow — and given parents the flexibility and peace of mind they need.</p>
    </div>
  </section>

  <section className="section">
    <div className="container">
      <div className="split">
        <div>
          <span className="eyebrow">Our story</span>
          <h2>Situated in the heart of London</h2>
          <p className="lead" style={{"maxWidth":"none"}}>Sydenham After School Club brings together quality childcare and serious academic support under one roof. We help children practically apply what they learn, guided every step of the way by dedicated tutors.</p>
          <p style={{"marginTop":"14px","color":"var(--ink-soft)"}}>We have ten consecutive years of experience offering after-school care. Our seasoned tutors have taught the British system for decades, and we're located in a prime, easy-to-reach part of Sydenham — open every day of the week.</p>
        </div>
        <div className="split-media" style={{"background":"#fff"}}><img src="/photos/brand-banner.jpg" alt="Sydenham After School Club shopfront and signage" style={{"width":"100%","height":"100%","objectFit":"cover"}} /></div>
      </div>
    </div>
  </section>

  <section className="section section-soft">
    <div className="container">
      <div className="center mb-3"><span className="eyebrow">What we stand for</span><h2>Aspire · Achieve · Excel</h2></div>
      <div className="grid grid-3">
        <div className="card"><div className="ico"><span className="ic">✨</span></div><h3>Aspire</h3><p>We raise every child's sights, helping them believe in what they can accomplish.</p></div>
        <div className="card"><div className="ico green"><span className="ic">✅</span></div><h3>Achieve</h3><p>Individual programmes and small groups turn effort into real, measurable progress.</p></div>
        <div className="card"><div className="ico"><span className="ic">⭐</span></div><h3>Excel</h3><p>We nurture the confidence and skills children carry with them for life.</p></div>
      </div>
    </div>
  </section>

  <section className="section">
    <div className="container">
      <div className="split reverse">
        <div className="split-media" style={{"background":"#fff"}}><img src="/photos/ofsted.svg" alt="Ofsted registered" style={{"width":"74%","height":"auto","objectFit":"contain"}} /></div>
        <div>
          <span className="eyebrow">Safety first, always</span>
          <h2>Safeguarding you can trust</h2>
          <p className="lead" style={{"maxWidth":"none"}}>Your child's wellbeing is our priority. We're an Ofsted-registered provider, all of our staff are experienced and DBS checked, and we maintain a safe, welcoming environment where every child feels they belong.</p>
          <ul>
            <li>Ofsted registered childcare provider</li>
            <li>All staff DBS checked and safeguarding trained</li>
            <li>Small ratios and close supervision</li>
            <li>A calm, structured environment after the school day</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <section className="section section-soft">
    <div className="container">
      <div className="cta-band">
        <h2>Come and see us</h2>
        <p>The best way to get a feel for our club is to visit. Get in touch to arrange a look around.</p>
        <div style={{"display":"flex","gap":"14px","justifyContent":"center","flexWrap":"wrap"}}>
          <a href="/contact" className="btn btn-navy">Arrange a Visit</a>
          <a href="/join-us" className="btn btn-outline">Work With Us</a>
        </div>
      </div>
    </div>
  </section>


    </>
  );
}
