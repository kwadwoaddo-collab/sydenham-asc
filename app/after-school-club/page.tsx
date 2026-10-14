import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Icon from '@/components/Icon';
import SchoolRunIllustration from '@/components/SchoolRunIllustration';

export const metadata: Metadata = {
  title: "After School Club in Sydenham | Childcare 3–9pm",
  description: "Safe, stimulating after school childcare in Sydenham SE26, open 3pm–9pm. School pick-up service, homework help, activities and DBS-checked staff.",
};

export default function Page() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>Childcare that feels like a home from home</h1>
          <p>From a 7am school drop-off through to a 9pm pick-up, term time. We take your child to school in the morning, collect them after, and keep them safe, fed and busy — giving you the flexibility your working day needs.</p>
          <div className="hero-actions">
            <Link href="/contact" className="btn btn-primary">Book a place</Link>
            <Link href="/fees" className="btn btn-outline">See fees</Link>
            <a href="https://wa.me/447584874710" className="btn btn-wa" target="_blank" rel="noopener noreferrer"><Icon name="whatsapp" /> WhatsApp</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="split">
            <div>
              <h2>Where children relax, play and make friends</h2>
              <p className="lead">At Sydenham ASC we offer quality childcare in a safe and stimulating environment. Our club is unique in bringing together children from different schools — building social skills and friendships that last well beyond the school gates.</p>
              <ul>
                <li>A calm change of venue at the end of the school day</li>
                <li>Children mix with peers from other schools, not just their own</li>
                <li>Homework support so evenings at home are yours</li>
                <li>All staff experienced and DBS checked</li>
              </ul>
            </div>
            <div className="split-media"><Image src="/photos/stem-kits.jpg" alt="Children playing with STEM and robotics kits at Sydenham After School Club" width={1448} height={1086} sizes="(min-width: 860px) 540px, 100vw" /></div>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="sec-head"><h2>Plenty to do every afternoon</h2></div>
          <div className="feature-list cols-3">
            <div className="feature"><span className="icon-chip"><Icon name="puzzle" /></span><div><h3>STEM &amp; robotics</h3><p>Coding kits &amp; games consoles.</p></div></div>
            <div className="feature"><span className="icon-chip green"><Icon name="users" /></span><div><h3>Board games</h3><p>Build teamwork &amp; problem-solving.</p></div></div>
            <div className="feature"><span className="icon-chip"><Icon name="smile" /></span><div><h3>Movie days</h3><p>Cosy film sessions &amp; activities.</p></div></div>
            <div className="feature"><span className="icon-chip green"><Icon name="book" /></span><div><h3>Homework help</h3><p>A quiet space to get work done.</p></div></div>
            <div className="feature"><span className="icon-chip"><Icon name="heart" /></span><div><h3>Snacks</h3><p>Supervised environment to refuel.</p></div></div>
            <div className="feature"><span className="icon-chip green"><Icon name="smile" /></span><div><h3>New friendships</h3><p>Meet children from across SE26.</p></div></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="split reverse">
            <div className="split-media contain run-panel"><SchoolRunIllustration /></div>
            <div>
              <h2>We&apos;ll take them and collect them</h2>
              <p className="lead">To support parents with work commitments, we offer a school-run service from 7am. We drop your child at school in the morning and collect them again in the afternoon — safely brought straight to the club, no juggling, no rush.</p>
              <p className="form-note">Tell us your child&apos;s school and we&apos;ll confirm whether we cover the route. <Link href="/contact">Get in touch →</Link></p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="sec-head"><h2>When we&apos;re open</h2></div>
          <div style={{ maxWidth: 720 }}>
            <div className="table-responsive">
              <table className="price-table compact">
                <thead><tr><th scope="col">Session</th><th scope="col">Days</th><th scope="col">Hours</th></tr></thead>
                <tbody>
                  <tr><td>Morning Club &amp; school drop-off</td><td>Monday – Friday</td><td>7:00am – 9:00am</td></tr>
                  <tr><td>After School Club</td><td>Monday – Friday</td><td>3:00pm – 9:00pm</td></tr>
                  <tr><td>Saturday Club</td><td>Saturday</td><td>9:00am – 4:00pm</td></tr>
                  <tr><td>Holiday Club</td><td>Monday – Saturday</td><td>9:00am – 4:00pm</td></tr>
                </tbody>
              </table>
            </div>
            <p className="form-note">Please confirm current session times when you book — holiday club dates follow the school calendar.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-band">
            <h2>Reserve your child&apos;s place</h2>
            <p>Pick-up spaces are limited by route and fill quickly. Message us today to check availability.</p>
            <div className="btn-row">
              <Link href="/contact" className="btn btn-navy">Book a place</Link>
              <a href="https://wa.me/447584874710" className="btn btn-wa" target="_blank" rel="noopener noreferrer"><Icon name="whatsapp" /> WhatsApp us</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
