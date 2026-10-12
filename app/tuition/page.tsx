import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Icon from '@/components/Icon';

export const metadata: Metadata = {
  title: "Tuition in Sydenham | Maths, English & Science",
  description: "Expert Maths, English and Science tuition in Sydenham SE26. Primary, Secondary, 11+ and A-Level programmes by GCSE and SATs examiners, small 1:6 groups, sessions Monday to Saturday.",
};

export default function Page() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>Tuition that stretches every child in exactly the right areas</h1>
          <p>Individualised Maths, English and Science programmes for Primary, Secondary, 11+ and A-Level, built by official examiners and taught in small groups of no more than six.</p>
          <div className="hero-actions">
            <Link href="/free-assessment" className="btn btn-green">Book a free assessment</Link>
            <Link href="/contact" className="btn btn-outline">Enquire about tuition</Link>
            <a href="#sessions" className="text-link" style={{ alignSelf: 'center', marginLeft: 8 }}>Session times</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="split">
            <div>
              <h2>A programme built around your child</h2>
              <p className="lead">Every child has their own individualised programme of study which strengthens their weaknesses and reinforces their strengths. This ensures children are stretched and challenged in exactly the right areas — never bored, never left behind.</p>
              <p className="form-note" style={{ fontSize: '1.02rem' }}>Sessions last approximately 1 hour and 20 minutes. Our tutors work at a maximum ratio of 1:6, striking the right balance between individual support and independent learning. As children practise and acquire new skills, a tutor is always on hand to encourage, explain or teach a new concept.</p>
            </div>
            <div className="split-media"><Image src="/photos/slideshow/slide-classroom-writing.jpg" alt="Child writing during a Sydenham tuition session" width={1400} height={933} sizes="(min-width: 860px) 540px, 100vw" /></div>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="sec-head"><h2>Maths, English &amp; Science — Primary to A-Level</h2></div>
          <div className="feature-list">
            <div className="feature"><span className="icon-chip green"><Icon name="puzzle" /></span><div><h3>Maths</h3><p>Primary to A-Level, built by examiners.</p></div></div>
            <div className="feature"><span className="icon-chip green"><Icon name="book" /></span><div><h3>English</h3><p>Reading, writing and comprehension.</p></div></div>
            <div className="feature"><span className="icon-chip green"><Icon name="star" /></span><div><h3>Science</h3><p>Biology, Chemistry and Physics.</p></div></div>
            <div className="feature"><span className="icon-chip green"><Icon name="check" /></span><div><h3>Exam prep</h3><p>11+, SATs, GCSE &amp; A-Level targeted prep.</p></div></div>
          </div>
          <p className="form-note" style={{ marginTop: 28 }}>We follow the Excel programme of study in Maths and English, developed by official GCSE and SATs examiners. Read our <a href="https://www.excelcentres.co.uk/gcses-guide/" target="_blank" rel="noopener noreferrer">GCSE Guide</a> and <a href="https://www.excelcentres.co.uk/sats-guide/" target="_blank" rel="noopener noreferrer">SATs Guide</a> to learn more.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="split reverse">
            <div className="split-media"><Image src="/photos/slideshow/slide-tutor-child.jpg" alt="Tutor working one-to-one with a child at Sydenham tuition" width={1400} height={934} sizes="(min-width: 860px) 540px, 100vw" /></div>
            <div>
              <h2>Individual attention, real results</h2>
              <p className="lead">We understand that children in the same year can have very different levels of understanding. Your child gets all the attention they need — we identify the individual gaps and give the guidance that helps every student thrive, from Primary right through to A-Level.</p>
              <ul>
                <li>Seasoned tutors experienced in the British system for decades</li>
                <li>Programmes developed by official examiners, covering Maths, English &amp; Science</li>
                <li>Primary, Secondary, 11+, GCSE &amp; A-Level support</li>
                <li>Small groups so no child slips through the cracks</li>
                <li>Regular practice with a tutor always close by</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft" id="sessions">
        <div className="container">
          <div className="sec-head"><h2>When tuition runs</h2></div>
          <div style={{ maxWidth: 720 }}>
            <div className="table-responsive">
              <table className="price-table compact">
                <thead><tr><th scope="col">Days</th><th scope="col">Sessions</th></tr></thead>
                <tbody>
                  <tr><td>Monday – Friday</td><td>4:30pm – 5:50pm<br />6:00pm – 7:20pm</td></tr>
                  <tr><td>Saturday</td><td>10:00am – 11:20am<br />11:30am – 12:50pm<br />1:00pm – 2:20pm</td></tr>
                </tbody>
              </table>
            </div>
            <p className="form-note">Tuition is £20 per hour. See <Link href="/fees">fees</Link>.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-band">
            <h2>Give your child the edge</h2>
            <p>Tell us your child&apos;s year group and the subjects they need support with, and we&apos;ll recommend the right sessions.</p>
            <div className="btn-row">
              <Link href="/free-assessment" className="btn btn-navy">Free assessment</Link>
              <Link href="/contact" className="btn btn-outline">Enquire now</Link>
              <a href="https://wa.me/447584874710" className="btn btn-wa" target="_blank" rel="noopener noreferrer"><Icon name="whatsapp" /> WhatsApp us</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
