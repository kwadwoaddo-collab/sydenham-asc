import Link from 'next/link';
import Image from 'next/image';
import OfstedRegistration from '@/components/OfstedRegistration';
import Icon from '@/components/Icon';

export default function HomePage() {
  return (
    <>
      <section className="home-hero">
        <div className="container home-hero-grid">
          <div>
            <h1>A warm, happy place for your child <em>after school</em></h1>
            <p className="sub">Trusted childcare and expert tuition in the heart of Sydenham. We drop off and collect from local schools, care for your child from 7am to 9pm, and help them shine in Maths, English and beyond.</p>
            <div className="btn-row">
              <Link href="/contact" className="btn btn-primary"><Icon name="calendar" /> Book a place</Link>
              <Link href="/free-assessment" className="btn btn-outline">Free assessment</Link>
            </div>
            <div className="btn-row" style={{ marginTop: 12 }}>
              <a href="tel:07584874710" className="btn btn-sm btn-outline"><Icon name="phone" /> 075 8487 4710</a>
              <a href="https://wa.me/447584874710" className="btn btn-sm btn-wa" target="_blank" rel="noopener noreferrer"><Icon name="whatsapp" /> WhatsApp</a>
            </div>
            <ul className="trust-list">
              <li><Icon name="shield" /> DBS-checked staff</li>
              <li><Icon name="clock" /> Open 7am–9pm</li>
              <li><Icon name="bus" /> School drop-offs &amp; pick-ups</li>
              <li className="trust-wide"><OfstedRegistration /></li>
            </ul>
          </div>
          <div className="home-hero-photo">
            <Image src="/photos/slideshow/slide-tutor-child.jpg" alt="A smiling child and tutor at a desk in a classroom" fill priority sizes="(min-width: 900px) 540px, 100vw" />
          </div>
        </div>
      </section>

      <section className="section" id="services">
        <div className="container">
          <div className="sec-head">
            <h2>Two ways we help — pick what your child needs</h2>
            <p>After school childcare and academic tuition are separate services. Use one, or both.</p>
          </div>
          <div className="services">
            <div className="service club">
              <h3>After School Club</h3>
              <span className="tag-line">Childcare · 3pm–9pm</span>
              <p>A safe, friendly place for your child once the school day ends, with pick-ups from local schools.</p>
              <ul>
                <li><Icon name="check" /> School drop-off and pick-up</li>
                <li><Icon name="check" /> Supervised homework time</li>
                <li><Icon name="check" /> STEM kits, board games, movie days and snacks</li>
              </ul>
              <div className="price-line">From <strong>£37.50</strong> per session</div>
              <div className="btn-row">
                <Link href="/after-school-club" className="btn btn-primary">About the club</Link>
                <Link href="/contact" className="btn btn-outline">Book a place</Link>
              </div>
            </div>
            <div className="service tuition">
              <h3>Tuition</h3>
              <span className="tag-line">Maths, English &amp; Science · Primary to A-Level</span>
              <p>Individual programmes in small groups of no more than six, built on the Excel programme of study.</p>
              <ul>
                <li><Icon name="check" /> 11+, SATs, GCSE and A-Level preparation</li>
                <li><Icon name="check" /> Sessions of 1hr 20min, Monday to Saturday</li>
                <li><Icon name="check" /> Free assessment to find the right starting point</li>
              </ul>
              <div className="price-line"><strong>£20</strong> per hour</div>
              <div className="btn-row">
                <Link href="/tuition" className="btn btn-green">About tuition</Link>
                <Link href="/free-assessment" className="btn btn-outline">Free assessment</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="sec-head">
            <h2>The school day ends at 3. Your work day doesn&apos;t.</h2>
            <p>We collect your child from school, keep them safe and busy in a warm environment, help with homework and tuition, and hand you back a happy child at the end of your day — as late as 9pm.</p>
          </div>
          <div className="feature-list cols-3">
            <div className="feature"><span className="icon-chip"><Icon name="bus" /></span><div><h3>Morning &amp; afternoon school runs</h3><p>From 7am we care for your child and drop them at school, then collect them again after.</p></div></div>
            <div className="feature"><span className="icon-chip green"><Icon name="book" /></span><div><h3>Supervised homework time</h3><p>A quiet space and a helping hand to get schoolwork done before you&apos;re home.</p></div></div>
            <div className="feature"><span className="icon-chip"><Icon name="users" /></span><div><h3>Friends from across Sydenham</h3><p>Children mix with peers from other local schools, not just their own.</p></div></div>
            <div className="feature"><span className="icon-chip green"><Icon name="shield" /></span><div><h3>Ofsted registered &amp; safe</h3><p>All staff DBS checked and safeguarding trained, with small ratios and close supervision.</p></div></div>
            <div className="feature"><span className="icon-chip"><Icon name="clock" /></span><div><h3>Wraparound care, 7am–9pm</h3><p>Early starts and late finishes covered.</p></div></div>
            <div className="feature"><span className="icon-chip green"><Icon name="pound" /></span><div><h3>Tax-Free Childcare</h3><p>Save up to 20% — for every £8 you pay, the government adds £2. We&apos;ll help you set it up.</p></div></div>
          </div>
        </div>
      </section>

      <section className="section" id="stem">
        <div className="container">
          <div className="split">
            <div className="split-media"><Image src="/photos/stem-kits.jpg" alt="Robotics, coding and STEM kits used at Sydenham After School Club" width={1448} height={1086} sizes="(min-width: 860px) 540px, 100vw" /></div>
            <div>
              <h2>Childcare that sparks a love of STEM</h2>
              <p className="lead">While your child is with us after school, they&apos;re not just waiting to be collected — they&apos;re building robots, coding, and playing hands-on with real STEM kits. It&apos;s a club activity, not a lesson, so it feels like play.</p>
              <div className="pill-row">
                <span className="pill">Coding &amp; robotics kits</span>
                <span className="pill">Board games</span>
                <span className="pill">Movie days</span>
              </div>
              <p style={{ marginTop: 24 }}><Link href="/after-school-club" className="text-link">See what a session looks like →</Link></p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft" id="how">
        <div className="container">
          <div className="sec-head">
            <h2>Getting started is simple</h2>
            <p>Three easy steps and your child&apos;s place is sorted.</p>
          </div>
          <ol className="steps">
            <li className="step"><h3>Get in touch</h3><p>Tell us your child&apos;s school, year group and the days you need. Call, WhatsApp or send the form.</p></li>
            <li className="step"><h3>Book their place</h3><p>We confirm availability, arrange pick-ups and sort payment — Tax-Free Childcare welcome.</p></li>
            <li className="step"><h3>Relax</h3><p>Your child is collected, cared for and helped with homework while you finish your day.</p></li>
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="sec-head">
            <h2>What parents say</h2>
          </div>
          <div className="quotes">
            <figure className="quote">
              <blockquote><p>&ldquo;If you want to see how the things you read in books really work in life, come to Sydenham. My child actually looks forward to going.&rdquo;</p></blockquote>
              <cite>A Sydenham parent, After School Club</cite>
            </figure>
            <figure className="quote">
              <blockquote><p>&ldquo;The pick-up service is a lifesaver, and the tutors genuinely care. My son&apos;s confidence in Maths has completely turned around.&rdquo;</p></blockquote>
              <cite>Parent of a Year 5, Tuition &amp; Club</cite>
            </figure>
            <figure className="quote">
              <blockquote><p>&ldquo;Warm, safe and reliable. I never worry when she&apos;s there — and she&apos;s made lovely friends from other schools.&rdquo;</p></blockquote>
              <cite>A local mum, After School Club</cite>
            </figure>
          </div>
          <ul className="facts" style={{ marginTop: 56 }}>
            <li><strong>2016</strong><span>established, in Sydenham</span></li>
            <li><strong>1:6</strong><span>maximum tuition ratio</span></li>
            <li><strong>3–9pm</strong><span>after school hours</span></li>
            <li><strong>DBS checked</strong><span>all staff</span></li>
          </ul>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="sec-head">
            <h2>Simple pricing</h2>
            <p>Flexible sessions with no hidden costs. Tax-Free Childcare and vouchers welcome.</p>
          </div>
          <div className="table-responsive">
            <table className="price-table">
              <thead><tr><th scope="col">Service</th><th scope="col">When</th><th scope="col">Price</th></tr></thead>
              <tbody>
                <tr><td><strong>After School</strong><br />Pick-up, homework support, activities &amp; snacks</td><td>Mon–Fri, 3pm–6pm</td><td>£37.50 / session</td></tr>
                <tr><td><strong>Full Session</strong><br />Everything in After School, care through to 9pm</td><td>Mon–Fri, 3pm–9pm</td><td>£45.00 / session</td></tr>
                <tr><td><strong>Tuition</strong><br />Maths, English &amp; Science, small groups (max 1:6)</td><td>1hr 20min sessions</td><td>£20 / hour</td></tr>
              </tbody>
            </table>
          </div>
          <p className="form-note">Fees shown as a guide — please confirm current rates when you book. See the <Link href="/fees">full fees page</Link>.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-band">
            <h2>Ready to book your child&apos;s place?</h2>
            <p>Spaces fill up fast, especially for after school pick-ups. Get in touch today and we&apos;ll walk you through everything.</p>
            <div className="btn-row">
              <Link href="/contact" className="btn btn-navy">Book a place</Link>
              <a href="https://wa.me/447584874710" className="btn btn-wa" target="_blank" rel="noopener noreferrer"><Icon name="whatsapp" /> WhatsApp us</a>
              <a href="tel:07584874710" className="btn btn-outline"><Icon name="phone" /> Call</a>
            </div>
            <p style={{ fontSize: '.95rem', margin: '24px 0 0' }}>
              Learn more about who runs the organisation on our <Link href="/leadership">Leadership Team</Link> page.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
