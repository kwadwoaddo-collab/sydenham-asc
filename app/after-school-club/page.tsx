
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "After School Club in Sydenham | Childcare 3–9pm",
  description: "Safe, stimulating after school childcare in Sydenham SE26, open 3pm–9pm. School pick-up service, homework help, activities and DBS-checked staff.",
};

export default function Page() {
  return (
    <>
      

  <section className="hero">
    <div className="container">
      <span className="eyebrow">After School Club</span>
      <h1>Childcare that feels like a home from home</h1>
      <p>From a 7am school drop-off through to a 9pm pick-up, term time. We take your child to school in the morning, collect them after, and keep them safe, fed and busy — giving you the flexibility your working day needs.</p>
      <div className="hero-actions">
        <a href="/contact" className="btn btn-primary">Book a Place</a>
        <a href="/fees" className="btn btn-outline">See Fees</a>
      </div>
    </div>
  </section>

  <section className="section">
    <div className="container">
      <div className="split">
        <div>
          <span className="eyebrow">A safe, stimulating space</span>
          <h2>Where children relax, play and make friends</h2>
          <p className="lead" style={{"maxWidth":"none"}}>At Sydenham ASC we offer quality childcare in a safe and stimulating environment. Our club is unique in bringing together children from different schools — building social skills and friendships that last well beyond the school gates.</p>
          <ul>
            <li>A calm change of venue at the end of the school day</li>
            <li>Children mix with peers from other schools, not just their own</li>
            <li>Homework support so evenings at home are yours</li>
            <li>All staff experienced and DBS checked</li>
          </ul>
        </div>
        <div className="split-media"><img src="/photos/stem-collection.jpg" alt="Children playing with STEM and robotics kits at Sydenham After School Club" /></div>
      </div>
    </div>
  </section>

  <section className="section section-soft">
    <div className="container">
      <div className="center mb-3">
        <span className="eyebrow">Kept busy &amp; happy</span>
        <h2>Plenty to do every afternoon</h2>
      </div>
      <div className="grid grid-auto">
        <div className="card compact"><div className="ico"><span className="ic">🧩</span></div><div><h3>STEM &amp; robotics</h3><p>Coding kits &amp; games consoles.</p></div></div>
        <div className="card compact"><div className="ico green"><span className="ic">✨</span></div><div><h3>Board games</h3><p>Build teamwork &amp; problem-solving.</p></div></div>
        <div className="card compact"><div className="ico"><span className="ic">😊</span></div><div><h3>Movie days</h3><p>Cosy film sessions &amp; activities.</p></div></div>
        <div className="card compact"><div className="ico green"><span className="ic">📚</span></div><div><h3>Homework help</h3><p>A quiet space to get work done.</p></div></div>
        <div className="card compact"><div className="ico"><span className="ic">•</span></div><div><h3>Snacks</h3><p>Supervised environment to refuel.</p></div></div>
        <div className="card compact"><div className="ico green"><span className="ic">•</span></div><div><h3>New friendships</h3><p>Meet children from across SE26.</p></div></div>
      </div>
    </div>
  </section>

  <section className="section">
    <div className="container">
      <div className="split reverse">
        <div className="split-media green"><span className="ic">🚌</span></div>
        <div>
          <span className="eyebrow">School runs, morning &amp; afternoon</span>
          <h2>We'll take them and collect them</h2>
          <p className="lead" style={{"maxWidth":"none"}}>To support parents with work commitments, we offer a school-run service from 7am. We drop your child at school in the morning and collect them again in the afternoon — safely brought straight to the club, no juggling, no rush.</p>
          <p className="form-note">Tell us your child's school and we'll confirm whether we cover the route. <a href="/contact">Get in touch →</a></p>
        </div>
      </div>
    </div>
  </section>

  <section className="section section-soft">
    <div className="container">
      <div className="center mb-3"><span className="eyebrow">Opening hours</span><h2>When we're open</h2></div>
      <div style={{"maxWidth":"640px","margin":"0 auto"}}>
        <div className="table-responsive">
          <table className="price-table compact">
            <thead><tr><th>Session</th><th>Days</th><th>Hours</th></tr></thead>
            <tbody>
              <tr><td>Morning Club &amp; school drop-off</td><td>Monday – Friday</td><td>7:00am – 9:00am</td></tr>
              <tr><td>After School Club</td><td>Monday – Friday</td><td>3:00pm – 9:00pm</td></tr>
              <tr><td>Saturday Club</td><td>Saturday</td><td>9:00am – 4:00pm</td></tr>
              <tr><td>Holiday Club</td><td>Monday – Saturday</td><td>9:00am – 4:00pm</td></tr>
            </tbody>
          </table>
        </div>
        <p className="form-note center" style={{"marginTop":"14px"}}>Please confirm current session times when you book — holiday club dates follow the school calendar.</p>
      </div>
    </div>
  </section>

  <section className="section">
    <div className="container">
      <div className="cta-band">
        <h2>Reserve your child's place</h2>
        <p>Pick-up spaces are limited by route and fill quickly. Message us today to check availability.</p>
        <div style={{"display":"flex","gap":"14px","justifyContent":"center","flexWrap":"wrap"}}>
          <a href="/contact" className="btn btn-navy">Book a Place</a>
          <a href="https://wa.me/447584874710" className="btn btn-wa" target="_blank" rel="noopener">WhatsApp Us</a>
        </div>
      </div>
    </div>
  </section>


    </>
  );
}
