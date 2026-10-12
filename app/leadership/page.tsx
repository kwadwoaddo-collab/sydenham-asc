import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Leadership | Sydenham After School Club',
  description: 'Meet the leadership team at Sydenham After School Club and learn about the individuals responsible for the strategic management and educational leadership of the organisation.',
};

const leaders = [
  {
    name: 'Kwadwo Addo',
    role: 'Director & Centre Manager',
    paras: [
      'Kwadwo Addo is the Director of Sydenham After School Club Ltd and provides the strategic leadership and overall governance of the organisation.',
      'As Centre Manager, he is responsible for the operational management of the centre, organisational development, quality assurance, examinations administration, compliance, partnerships and continuous improvement.',
      'He works closely with the leadership team to ensure the organisation delivers high-quality educational services while maintaining strong safeguarding, governance and operational standards.',
    ],
  },
  {
    name: 'Fatimah Morafa',
    role: 'Head of Establishment',
    paras: [
      'Fatimah Morafa serves as the Head of Establishment and provides the educational leadership of the centre.',
      'She is responsible for overseeing the day-to-day educational provision, supporting teaching staff, maintaining high standards of teaching and learning, promoting learner wellbeing and contributing to safeguarding oversight.',
      'She works closely with the Director and Centre Manager to ensure that every learner receives a positive, engaging and inclusive educational experience.',
    ],
  },
];

const commitments = [
  'Delivering high-quality educational provision',
  'Maintaining high standards of safeguarding and learner welfare',
  'Supporting every learner to achieve their full potential',
  'Working collaboratively with parents and carers',
  'Promoting equality, inclusion and respect',
  'Continually improving the quality of our services',
];

export default function LeadershipPage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>Leadership</h1>
          <p>At Sydenham After School Club Ltd, we are committed to delivering high-quality education, childcare and learner support through strong leadership, effective governance and continuous improvement.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="sec-head">
            <h2>Strategic leadership &amp; management</h2>
          </div>
          <div className="prose">
            <p>Our leadership team works together to ensure that every learner benefits from a safe, inclusive and supportive environment where they can achieve their full potential.</p>
            <p>The organisation combines strategic leadership with experienced educational management to ensure the highest standards across all aspects of our provision.</p>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="sec-head">
            <h2>Our leaders</h2>
            <p>The individuals responsible for the strategic direction and daily educational oversight of the centre.</p>
          </div>
          <div className="grid grid-2" style={{ gap: 48 }}>
            {leaders.map((l) => (
              <article key={l.name}>
                <h3 style={{ fontSize: '1.6rem' }}>{l.name}</h3>
                <p style={{ color: 'var(--amber-deep)', fontWeight: 700, margin: '4px 0 16px' }}>{l.role}</p>
                <div className="prose">{l.paras.map((p) => <p key={p}>{p}</p>)}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="split" style={{ alignItems: 'start' }}>
            <div className="sec-head" style={{ marginBottom: 0 }}>
              <h2>Our commitment</h2>
              <p>Our leadership team is committed to:</p>
            </div>
            <ul className="check-list" style={{ marginTop: 0, fontSize: '1.1rem' }}>
              {commitments.map((c) => <li key={c} style={{ color: 'var(--ink)' }}>{c}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="cta-band">
            <h2>Contact</h2>
            <p>For leadership or organisational enquiries, please contact <a href="mailto:info@sydenhamasc.co.uk">info@sydenhamasc.co.uk</a>.</p>
            <div className="btn-row">
              <Link href="/contact" className="btn btn-navy">Send us a message</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
