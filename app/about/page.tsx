import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: "About Us | Sydenham After School Club",
  description: "Sydenham After School Club was established in 2016 and supports local families with safe childcare and expert tuition in the heart of SE26.",
};

export default function Page() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>Rooted in Sydenham, trusted by families</h1>
          <p>Established in 2016, we&apos;ve given local children a safe place to learn, play and grow — and given parents the flexibility and peace of mind they need.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="split">
            <div>
              <h2>Situated in the heart of London</h2>
              <p className="lead">Sydenham After School Club brings together quality childcare and serious academic support under one roof. We help children practically apply what they learn, guided every step of the way by dedicated tutors.</p>
              <p className="form-note" style={{ fontSize: '1.02rem' }}>Established in 2016, we offer after-school care. Our seasoned tutors have taught the British system for decades, and we&apos;re located in a prime, easy-to-reach part of Sydenham — open every day of the week.</p>
            </div>
            <div className="split-media"><Image src="/photos/brand-banner.jpg" alt="Sydenham After School Club shopfront and signage" width={982} height={768} sizes="(min-width: 860px) 540px, 100vw" /></div>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="sec-head"><h2>Aspire · Achieve · Excel</h2></div>
          <div className="feature-list cols-3">
            <div className="feature"><div><h3>Aspire</h3><p>We raise every child&apos;s sights, helping them believe in what they can accomplish.</p></div></div>
            <div className="feature"><div><h3>Achieve</h3><p>Individual programmes and small groups turn effort into real, measurable progress.</p></div></div>
            <div className="feature"><div><h3>Excel</h3><p>We nurture the confidence and skills children carry with them for life.</p></div></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ maxWidth: 760 }}>
            <div>
              <h2>Safeguarding you can trust</h2>
              <p className="lead">Your child&apos;s wellbeing is our priority. We&apos;re an Ofsted-registered provider, all of our staff are experienced and DBS checked, and we maintain a safe, welcoming environment where every child feels they belong.</p>
              <ul>
                <li>Registered with Ofsted — URN 2854827</li>
                <li>All staff DBS checked and safeguarding trained</li>
                <li>Small ratios and close supervision</li>
                <li>A calm, structured environment after the school day</li>
              </ul>
              <p style={{ marginTop: 20 }}><Link href="/leadership" className="text-link">Meet the leadership team →</Link></p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="cta-band">
            <h2>Come and see us</h2>
            <p>The best way to get a feel for our club is to visit. Get in touch to arrange a look around.</p>
            <div className="btn-row">
              <Link href="/contact" className="btn btn-navy">Arrange a visit</Link>
              <Link href="/join-us" className="btn btn-outline">Work with us</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
