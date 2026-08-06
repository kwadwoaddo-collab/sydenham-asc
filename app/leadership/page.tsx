import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Leadership | Sydenham After School Club',
  description: 'Meet the leadership team at Sydenham After School Club and learn about the individuals responsible for the strategic management and educational leadership of the organisation.',
};

export default function LeadershipPage() {
  return (
    <>
      {/* Colorful Header Hero */}
      <section className="hero">
        <div className="container">
          <span className="eyebrow">Leadership</span>
          <h1>Leadership</h1>
          <p>
            At Sydenham After School Club Ltd, we are committed to delivering high-quality education, childcare and learner support through strong leadership, effective governance and continuous improvement.
          </p>
        </div>
      </section>

      {/* Leadership Approach Section */}
      <section className="section">
        <div className="container">
          <div className="center mb-3">
            <span className="eyebrow">Our Approach</span>
            <h2>Strategic Leadership &amp; Management</h2>
          </div>
          <div style={{ maxWidth: '720px', margin: '0 auto', textAlign: 'center', fontSize: '1.15rem', lineHeight: '1.8', color: 'var(--ink-soft)' }}>
            <p style={{ marginBottom: '24px' }}>
              Our leadership team works together to ensure that every learner benefits from a safe, inclusive and supportive environment where they can achieve their full potential.
            </p>
            <p>
              The organisation combines strategic leadership with experienced educational management to ensure the highest standards across all aspects of our provision.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Team Bios */}
      <section className="section section-soft">
        <div className="container">
          <div className="center mb-3">
            <span className="eyebrow">Leadership Team</span>
            <h2>Our Leaders</h2>
            <p className="lead">The individuals responsible for the strategic direction and daily educational oversight of the centre.</p>
          </div>

          <div className="grid grid-2">
            {/* Kwadwo Addo Card */}
            <div className="card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '24px' }}>
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #fff6d6, #ffe98a)',
                  display: 'grid',
                  placeItems: 'center',
                  fontSize: '1.8rem',
                  flexShrink: 0
                }}>
                  👤
                </div>
                <div>
                  <h3 style={{ margin: 0, color: 'var(--navy)', fontSize: '1.4rem' }}>Kwadwo Addo</h3>
                  <p style={{ margin: '4px 0 0', color: 'var(--navy-2)', fontWeight: 700, fontSize: '0.95rem' }}>Director &amp; Centre Manager</p>
                </div>
              </div>
              <p style={{ color: 'var(--ink-soft)', lineHeight: '1.7', marginBottom: '14px' }}>
                Kwadwo Addo is the Director of Sydenham After School Club Ltd and provides the strategic leadership and overall governance of the organisation.
              </p>
              <p style={{ color: 'var(--ink-soft)', lineHeight: '1.7', marginBottom: '14px' }}>
                As Centre Manager, he is responsible for the operational management of the centre, organisational development, quality assurance, examinations administration, compliance, partnerships and continuous improvement.
              </p>
              <p style={{ color: 'var(--ink-soft)', lineHeight: '1.7', margin: 0 }}>
                He works closely with the leadership team to ensure the organisation delivers high-quality educational services while maintaining strong safeguarding, governance and operational standards.
              </p>
            </div>

            {/* Fatimah Morafa Card */}
            <div className="card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '24px' }}>
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #e4f6ec, #c8efd8)',
                  display: 'grid',
                  placeItems: 'center',
                  fontSize: '1.8rem',
                  flexShrink: 0
                }}>
                  🎓
                </div>
                <div>
                  <h3 style={{ margin: 0, color: 'var(--navy)', fontSize: '1.4rem' }}>Fatimah Morafa</h3>
                  <p style={{ margin: '4px 0 0', color: 'var(--navy-2)', fontWeight: 700, fontSize: '0.95rem' }}>Head of Establishment</p>
                </div>
              </div>
              <p style={{ color: 'var(--ink-soft)', lineHeight: '1.7', marginBottom: '14px' }}>
                Fatimah Morafa serves as the Head of Establishment and provides the educational leadership of the centre.
              </p>
              <p style={{ color: 'var(--ink-soft)', lineHeight: '1.7', marginBottom: '14px' }}>
                She is responsible for overseeing the day-to-day educational provision, supporting teaching staff, maintaining high standards of teaching and learning, promoting learner wellbeing and contributing to safeguarding oversight.
              </p>
              <p style={{ color: 'var(--ink-soft)', lineHeight: '1.7', margin: 0 }}>
                She works closely with the Director and Centre Manager to ensure that every learner receives a positive, engaging and inclusive educational experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="section">
        <div className="container">
          <div className="center mb-3">
            <span className="eyebrow">Our Promise</span>
            <h2>Our Commitment</h2>
            <p className="lead">Our leadership team is committed to:</p>
          </div>

          <div style={{ maxWidth: '720px', margin: '0 auto' }}>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {[
                'Delivering high-quality educational provision',
                'Maintaining high standards of safeguarding and learner welfare',
                'Supporting every learner to achieve their full potential',
                'Working collaboratively with parents and carers',
                'Promoting equality, inclusion and respect',
                'Continually improving the quality of our services',
              ].map((item, index, arr) => (
                <li
                  key={index}
                  style={{
                    padding: '16px 0 16px 44px',
                    position: 'relative',
                    color: 'var(--ink)',
                    fontSize: '1.1rem',
                    fontWeight: 500,
                    borderBottom: index < arr.length - 1 ? '1px solid var(--line)' : 'none',
                  }}
                >
                  <span style={{
                    position: 'absolute',
                    left: 0,
                    top: '14px',
                    color: '#fff',
                    background: 'var(--green)',
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    display: 'grid',
                    placeItems: 'center',
                    fontSize: '.8rem',
                    fontWeight: 800,
                  }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section section-soft">
        <div className="container">
          <div className="cta-band">
            <h2>Contact</h2>
            <p style={{ marginBottom: '24px', fontSize: '1.15rem' }}>For leadership or organisational enquiries, please contact:</p>
            <div style={{
              display: 'inline-flex',
              flexDirection: 'column',
              alignItems: 'center',
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: 'var(--radius)',
              padding: '20px 36px',
              marginBottom: '28px'
            }}>
              <span style={{ fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.7)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px', fontWeight: 600 }}>Email Address</span>
              <a href="mailto:info@sydenhamasc.co.uk" style={{ color: '#fff', fontSize: '1.35rem', fontWeight: 700, textDecoration: 'none' }}>
                info@sydenhamasc.co.uk
              </a>
            </div>
            <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn btn-primary">Send us a Message</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
