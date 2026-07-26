
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Tuition in Sydenham | Maths, English & Science",
  description: "Expert Maths, English and Science tuition in Sydenham SE26. Primary, Secondary, 11+ and A-Level programmes by GCSE and SATs examiners, small 1:6 groups, sessions Monday to Saturday.",
};

export default function Page() {
  return (
    <>
      

  <section className="hero">
    <div className="container">
      <span className="eyebrow">Tuition</span>
      <h1>Tuition that stretches every child in exactly the right areas</h1>
      <p>Individualised Maths, English and Science programmes for Primary, Secondary, 11+ and A-Level, built by official examiners and taught in small groups of no more than six.</p>
      <div className="hero-actions">
        <a href="/contact" className="btn btn-primary">Enquire About Tuition</a>
        <a href="#sessions" className="btn btn-outline">Session Times</a>
      </div>
    </div>
  </section>

  <section className="section">
    <div className="container">
      <div className="split">
        <div>
          <span className="eyebrow">How our tuition works</span>
          <h2>A programme built around your child</h2>
          <p className="lead" style={{"maxWidth":"none"}}>Every child has their own individualised programme of study which strengthens their weaknesses and reinforces their strengths. This ensures children are stretched and challenged in exactly the right areas — never bored, never left behind.</p>
          <p style={{"marginTop":"14px","color":"var(--ink-soft)"}}>Sessions last approximately 1 hour and 20 minutes. Our tutors work at a maximum ratio of 1:6, striking the right balance between individual support and independent learning. As children practise and acquire new skills, a tutor is always on hand to encourage, explain or teach a new concept.</p>
        </div>
        <div className="split-media"><img src="/photos/slideshow/slide-classroom-writing.jpg" alt="Child writing during a Sydenham tuition session" /></div>
      </div>
    </div>
  </section>

  <section className="section section-soft">
    <div className="container">
      <div className="center mb-3"><span className="eyebrow">Subjects &amp; levels</span><h2>Maths, English &amp; Science — Primary to A-Level</h2></div>
      <div className="grid grid-auto">
        <div className="card compact"><div className="ico"><span className="ic">🧩</span></div><div><h3>Maths</h3><p>Primary to A-Level, built by examiners.</p></div></div>
        <div className="card compact"><div className="ico green"><span className="ic">📚</span></div><div><h3>English</h3><p>Reading, writing and comprehension.</p></div></div>
        <div className="card compact"><div className="ico"><span className="ic">✨</span></div><div><h3>Science</h3><p>Biology, Chemistry and Physics.</p></div></div>
        <div className="card compact"><div className="ico green"><span className="ic">⭐</span></div><div><h3>Exam Prep</h3><p>11+, SATs, GCSE &amp; A-Level targeted prep.</p></div></div>
      </div>
      <p className="form-note center" style={{"marginTop":"22px"}}>We follow the Excel programme of study in Maths and English, developed by official GCSE and SATs examiners. Read our <a href="https://www.excelcentres.co.uk/gcses-guide/" target="_blank" rel="noopener">GCSE Guide</a> and <a href="https://www.excelcentres.co.uk/sats-guide/" target="_blank" rel="noopener">SATs Guide</a> to learn more.</p>
    </div>
  </section>

  <section className="section">
    <div className="container">
      <div className="split reverse">
        <div className="split-media green"><img src="/photos/slideshow/slide-tutor-child.jpg" alt="Tutor working one-to-one with a child at Sydenham tuition" /></div>
        <div>
          <span className="eyebrow">Customised tutoring</span>
          <h2>Individual attention, real results</h2>
          <p className="lead" style={{"maxWidth":"none"}}>We understand that children in the same year can have very different levels of understanding. Your child gets all the attention they need — we identify the individual gaps and give the guidance that helps every student thrive, from Primary right through to A-Level.</p>
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
      <div className="center mb-3"><span className="eyebrow">Session times</span><h2>When tuition runs</h2></div>
      <div style={{"maxWidth":"640px","margin":"0 auto"}}>
        <div className="table-responsive">
          <table className="price-table compact">
            <thead><tr><th>Days</th><th>Sessions</th></tr></thead>
            <tbody>
              <tr><td>Monday – Friday</td><td>4:30pm – 5:50pm &nbsp;•&nbsp; 6:00pm – 7:20pm</td></tr>
              <tr><td>Saturday</td><td>10:00am – 11:20am &nbsp;•&nbsp; 11:30am – 12:50pm &nbsp;•&nbsp; 1:00pm – 2:20pm</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>

  <section className="section">
    <div className="container">
      <div className="cta-band">
        <h2>Give your child the edge</h2>
        <p>Tell us your child's year group and the subjects they need support with, and we'll recommend the right sessions.</p>
        <div style={{"display":"flex","gap":"14px","justifyContent":"center","flexWrap":"wrap"}}>
          <a href="/contact" className="btn btn-navy">Enquire Now</a>
          <a href="https://wa.me/447584874710" className="btn btn-wa" target="_blank" rel="noopener">WhatsApp Us</a>
        </div>
      </div>
    </div>
  </section>


    </>
  );
}
