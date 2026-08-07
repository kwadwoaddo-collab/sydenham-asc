import Link from 'next/link';
import HeroSlideshow from '@/components/HeroSlideshow';

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Aspire · Achieve · Excel</span>
            <h1>A warm, happy place for your child after school</h1>
            <p>Trusted childcare and expert tuition in the heart of Sydenham. We drop off and collect from local schools, care for your child from 7am to 9pm, and help them shine in Maths, English and beyond.</p>
            <div className="hero-actions">
              <Link href="/contact" className="btn btn-primary">Book a Place</Link>
              <a href="#how" className="btn btn-outline">How It Works</a>
            </div>
            <div className="hero-badges">
              <span className="hero-badge"><span className="dot">🛡️</span> DBS-checked staff</span>
              <span className="hero-badge"><span className="dot">⏰</span> Open 7am–9pm</span>
              <span className="hero-badge"><span className="dot">🚌</span> School drop-offs &amp; pick-ups</span>
              <span className="hero-badge"><span className="dot">✅</span> Ofsted registered</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-photo">
              <HeroSlideshow />
            </div>
            <div className="hero-proof">
              <span className="proof-chip"><span className="pc-ic pc-y">⭐</span> <b>10+ years</b>&nbsp;serving Sydenham</span>
              <span className="proof-chip"><span className="pc-ic pc-g">✅</span> <b>Spaces available</b>&nbsp;— enrolling now</span>
              <span className="proof-chip proof-chip-ofsted"><img src="/photos/ofsted.svg" alt="Ofsted registered" /></span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="center mb-3">
            <span className="eyebrow">The 3pm problem</span>
            <h2>The school day ends at 3. Your work day doesn't.</h2>
            <p className="lead">Every working parent knows the daily scramble. Here's what we take off your plate.</p>
          </div>
          <div className="grid grid-3">
            <div className="card pain">
              <div className="ico">⏰</div>
              <h3>The 3pm dash</h3>
              <p>Leaving work early or begging favours just to make the school pick-up — every single day.</p>
            </div>
            <div className="card pain">
              <div className="ico">📚</div>
              <h3>Homework battles</h3>
              <p>Tired children, tired parents, and the same argument over spellings and sums every evening.</p>
            </div>
            <div className="card pain">
              <div className="ico">🛡️</div>
              <h3>The worry</h3>
              <p>Wondering whether your child is safe, settled and happy in the hours before you're home.</p>
            </div>
          </div>

          <div className="solution-band">
            <h3>That's exactly why Sydenham ASC exists.</h3>
            <p>We collect your child from school, keep them safe and busy in a warm environment, help with homework and tuition, and hand you back a happy child at the end of your day — as late as 9pm.</p>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="center mb-3">
            <span className="eyebrow">What your child gets</span>
            <h2>Everything they need under one roof</h2>
            <p className="lead">More than childcare — a place to learn, play, and grow in confidence.</p>
          </div>
          <div className="grid grid-3">
            <div className="card"><div className="ico">🚌</div><h3>Morning &amp; afternoon school runs</h3><p>From 7am we care for your child and drop them at school — then collect them again after — no juggling.</p></div>
            <div className="card"><div className="ico green">📚</div><h3>Supervised homework time</h3><p>A quiet space and a helping hand to get schoolwork done before you're home.</p></div>
            <div className="card"><div className="ico">😊</div><h3>Play, STEM &amp; friendships</h3><p>Robotics, coding kits, board games and movie days with friends from schools across Sydenham.</p></div>
            <div className="card"><div className="ico green">🛡️</div><h3>Ofsted registered &amp; safe</h3><p>An Ofsted-registered provider. All staff DBS checked and safeguarding trained, with small ratios and close supervision. <strong>URN: EY123456</strong></p></div>
            <div className="card"><div className="ico">⏰</div><h3>Wraparound care, 7am–9pm</h3><p>Early starts and late finishes covered.</p></div>
            <div className="card"><div className="ico green">£</div><h3>Tax-Free Childcare</h3><p>Save up to 20% — for every £8 you pay, the government adds £2. We'll help you set it up.</p></div>
          </div>
        </div>
      </section>

      <section className="section" id="stem">
        <div className="container">
          <div className="split">
            <div className="split-media"><img src="/photos/stem-collection.jpg" alt="Robotics, coding and STEM kits used at Sydenham After School Club" /></div>
            <div>
              <span className="eyebrow">Inside the after school club</span>
              <h2>Childcare that sparks a love of STEM</h2>
              <p className="lead" style={{maxWidth:'none'}}>While your child is with us after school, they're not just waiting to be collected — they're building robots, coding, and playing hands-on with real STEM kits. It's a club activity, not a lesson, so it feels like play.</p>
              <div className="pill-row">
                <span className="pill yellow">⭐ Coding &amp; Robotics Kits</span>
                <span className="pill">🧩 Board Games</span>
                <span className="pill">😊 Movie Days</span>
                <span className="pill">✨ Hands-on STEM Play</span>
              </div>
              <p style={{marginTop:'22px'}}><Link href="/after-school-club" className="btn btn-outline" style={{padding:'10px 22px'}}>See what a session looks like →</Link></p>
              <Link href="/tuition" className="tuition-callout">
                <span className="tuition-callout-ico">⭐</span>
                <span className="tuition-callout-text">
                  <strong>Looking for exam-focused tuition instead?</strong>
                  <span>Maths, English &amp; Science tuition — Primary to A-Level →</span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="how">
        <div className="container">
          <div className="center mb-3">
            <span className="eyebrow">How it works</span>
            <h2>Getting started is simple</h2>
            <p className="lead">Three easy steps and your child's place is sorted.</p>
          </div>
          <div className="steps">
            <div className="step">
              <div className="n">1</div>
              <h3>Get in touch</h3>
              <p>Tell us your child's school, year group and the days you need. Call, WhatsApp or send the form.</p>
            </div>
            <div className="step">
              <div className="n">2</div>
              <h3>Book their place</h3>
              <p>We confirm availability, arrange pick-ups and sort payment — Tax-Free Childcare welcome.</p>
            </div>
            <div className="step">
              <div className="n">3</div>
              <h3>Relax</h3>
              <p>Your child is collected, cared for and helped with homework while you finish your day.</p>
            </div>
          </div>
          <div className="center" style={{marginTop:'40px'}}>
            <Link href="/contact" className="btn btn-primary">Book a Place</Link>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="center mb-3">
            <span className="eyebrow">Loved by local families</span>
            <h2>Parents trust us with what matters most</h2>
          </div>
          <div className="testi-grid">
            <div className="testi">
              <div className="stars">★★★★★</div>
              <p>"If you want to see how the things you read in books really work in life, come to Sydenham. My child actually looks forward to going."</p>
              <div className="who"><span className="av">A</span><div><b>A Sydenham parent</b><span>After School Club</span></div></div>
            </div>
            <div className="testi">
              <div className="stars">★★★★★</div>
              <p>"The pick-up service is a lifesaver, and the tutors genuinely care. My son's confidence in Maths has completely turned around."</p>
              <div className="who"><span className="av">P</span><div><b>Parent of a Year 5</b><span>Tuition &amp; Club</span></div></div>
            </div>
            <div className="testi">
              <div className="stars">★★★★★</div>
              <p>"Warm, safe and reliable. I never worry when she's there — and she's made lovely friends from other schools."</p>
              <div className="who"><span className="av">N</span><div><b>A local mum</b><span>After School Club</span></div></div>
            </div>
          </div>
          <div className="grid grid-4" style={{marginTop:'44px'}}>
            <div className="stat"><div className="num">10+</div><div className="lbl">Years in Sydenham</div></div>
            <div className="stat"><div className="num">1:6</div><div className="lbl">Max tuition ratio</div></div>
            <div className="stat"><div className="num">3–9pm</div><div className="lbl">After school hours</div></div>
            <div className="stat"><div className="num">100%</div><div className="lbl">DBS-checked staff</div></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="center mb-3">
            <span className="eyebrow">Simple pricing</span>
            <h2>Choose what suits your family</h2>
            <p className="lead">Flexible sessions with no hidden costs. Tax-Free Childcare and vouchers welcome.</p>
          </div>
          <div className="tiers">
            <div className="tier">
              <h3>After School</h3>
              <div className="price">£37.50<small> / session</small></div>
              <span style={{color:'var(--ink-soft)', fontSize:'.92rem'}}>Mon–Fri, 3pm–6pm</span>
              <ul>
                <li>School pick-up included</li>
                <li>Homework support</li>
                <li>Games, activities &amp; snacks</li>
              </ul>
              <Link href="/contact" className="btn btn-outline">Book a Place</Link>
            </div>
            <div className="tier featured">
              <span className="pop">Most popular</span>
              <h3>Full Session</h3>
              <div className="price">£45.00<small> / session</small></div>
              <span style={{color:'var(--ink-soft)', fontSize:'.92rem'}}>Mon–Fri, 3pm–9pm</span>
              <ul>
                <li>Everything in After School</li>
                <li>Care right through to 9pm</li>
                <li>Ideal for full working days</li>
                <li>Priority on pick-up routes</li>
              </ul>
              <Link href="/contact" className="btn btn-primary">Book a Place</Link>
            </div>
            <div className="tier">
              <h3>Tuition</h3>
              <div className="price">£20<small> / hour</small></div>
              <span style={{color:'var(--ink-soft)', fontSize:'.92rem'}}>Maths, English &amp; Science · 1hr 20min</span>
              <ul>
                <li>Primary to A-Level</li>
                <li>Small groups (max 1:6)</li>
                <li>11+, SATs, GCSE &amp; A-Level prep</li>
              </ul>
              <Link href="/tuition" className="btn btn-outline">Learn More</Link>
            </div>
          </div>
          <p className="form-note center" style={{marginTop:'18px'}}>Fees shown as a guide — please confirm current rates when you book. See the <Link href="/fees">full fees page</Link>.</p>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="cta-band">
            <h2>Ready to book your child's place?</h2>
            <p>Spaces fill up fast, especially for after school pick-ups. Get in touch today and we'll walk you through everything.</p>
            <div style={{display:'flex', gap:'14px', justifyContent:'center', flexWrap:'wrap', marginBottom:'20px'}}>
              <Link href="/contact" className="btn btn-navy">Book a Place</Link>
              <a href="https://wa.me/447584874710" className="btn btn-wa" target="_blank" rel="noopener noreferrer">WhatsApp Us</a>
            </div>
            <p style={{fontSize:'.95rem', margin:0, opacity: 0.95}}>
              Learn more about the individuals running the organisation on our <Link href="/leadership" style={{color:'var(--accent)', textDecoration:'underline', fontWeight:'bold'}}>Leadership Team</Link> page.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
