
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Join the Team | Careers at Sydenham ASC",
  description: "Work at Sydenham After School Club. Tutor and childcare assistant roles in Sydenham SE26. Apply online — DBS-checked, friendly team.",
};

export default function Page() {
  const vacancies: any[] = [];
  return (
    <>
      

  <section className="hero">
    <div className="container">
      <span className="eyebrow">Join the Team</span>
      <h1>Help Sydenham's children aspire, achieve and excel</h1>
      <p>We're a friendly, growing team of tutors and childcare staff who genuinely love what we do. If you're brilliant with children and passionate about learning, we'd love to hear from you.</p>
      <div className="hero-actions">
        <a href="#apply" className="btn btn-primary">Apply Now</a>
        <a href="#roles" className="btn btn-outline">See Open Roles</a>
      </div>
    </div>
  </section>

  <section className="section" id="roles">
    <div className="container">
      <div className="center mb-3">
        <span className="eyebrow">Current openings</span>
        <h2>Roles we're hiring for</h2>
        <p className="lead">All roles are based at our Sydenham centre. Enhanced DBS checks and safeguarding training are part of the job.</p>
      </div>

      {vacancies.length === 0 ? (
        <div className="card center" style={{"maxWidth":"640px","margin":"0 auto"}}>
          <div className="ico" style={{"margin":"0 auto 12px"}}><span className="ic">✉️</span></div>
          <h3>No vacancies right now</h3>
          <p>We're not actively recruiting at the moment, but we're always glad to hear from great people. Send us your CV using the form below and we'll keep you in mind.</p>
        </div>
      ) : (
        <div className="grid grid-3">
          {vacancies.map((v: any, i: number) => (
            <div key={i} className="card vacancy">
              <span className="tag">{v.type}</span>
              <h3 className="mt-1">{v.title}</h3>
              <div className="meta">
                <span><span className="ic">📍</span> {v.location}</span>
                <span><span className="ic">£</span> {v.pay}</span>
              </div>
              <p>{v.summary}</p>
              <p style={{"fontWeight":"700","color":"var(--navy)","marginTop":"14px"}}>What we're looking for</p>
              <ul style={{"listStyle":"none","marginTop":"8px"}}>
                {v.needs?.map((n: string, j: number) => (
                  <li key={j} style={{"padding":"5px 0 5px 26px","position":"relative","color":"var(--ink-soft)","fontSize":".95rem"}}>
                    <span style={{"position":"absolute","left":"0","color":"var(--green)","fontWeight":"800"}}>✓</span>{n}
                  </li>
                ))}
              </ul>
              <p className="mt-2"><a href="#apply" className="btn btn-outline" style={{"padding":"10px 22px"}}>Apply for this role →</a></p>
            </div>
          ))}
        </div>
      )}
    </div>
  </section>

  <section className="section section-soft">
    <div className="container">
      <div className="center mb-3"><span className="eyebrow">Why work with us</span><h2>A team that feels like family</h2></div>
      <div className="grid grid-3">
        <div className="card"><div className="ico green"><span className="ic">•</span></div><h3>Make a real difference</h3><p>Watch children grow in confidence week after week — the most rewarding part of the job.</p></div>
        <div className="card"><div className="ico"><span className="ic">⏰</span></div><h3>Flexible hours</h3><p>Afternoon, evening and Saturday sessions that can fit around your life and other commitments.</p></div>
        <div className="card"><div className="ico green"><span className="ic">•</span></div><h3>Grow with us</h3><p>Training, safeguarding qualifications and the chance to develop as an educator.</p></div>
      </div>
    </div>
  </section>

  {/*  APPLICATION FORM  */}
  <section className="section" id="apply">
    <div className="container">
      <div className="split">
        <div>
          <span className="eyebrow">Apply</span>
          <h2>Send us your application</h2>
          <p className="lead" style={{"maxWidth":"none"}}>Fill in the form and attach your CV. We read every application and will be in touch if there's a good fit. Prefer to chat first? Message us on WhatsApp or call.</p>
          <ul className="info-list mt-2">
            <li><span className="ic"><span className="ic">📱</span></span><div><b>Call us</b><a href="tel:07584874710">075 8487 4710</a></div></li>
            <li><span className="ic"><span className="ic">✉️</span></span><div><b>Email</b><a href="mailto:info@sydenhamasc.co.uk">info@sydenhamasc.co.uk</a></div></li>
            <li><span className="ic"><span className="ic">💬</span></span><div><b>WhatsApp</b><a href="https://wa.me/447584874710" target="_blank" rel="noopener">Message us</a></div></li>
          </ul>
        </div>

        <div className="form-card">
          {/*  Web3Forms: replace access_key with your own free key from web3forms.com  */}
          <form action="https://api.web3forms.com/submit" method="POST" encType="multipart/form-data">
            <input type="hidden" name="access_key" value="89407cdb-6d4a-4655-b6cf-b4d22050eff2" />
            <input type="hidden" name="subject" value="New job application — Sydenham ASC website" />
            <input type="hidden" name="from_name" value="Sydenham ASC Careers" />
            <input type="hidden" name="redirect_url" value="https://sydenhamasc.co.uk/thankyou" />
            <input type="checkbox" name="botcheck" style={{"display":"none"}} />

            <div className="form-row">
              <div className="field">
                <label htmlFor="name">Full name *</label>
                <input id="name" type="text" name="name" required={true} />
              </div>
              <div className="field">
                <label htmlFor="role">Role applying for *</label>
                <select id="role" name="role" required={true}>
                  <option value="">Select a role…</option>
                  <option>Maths, English &amp; Science Tutor</option>
                  <option>After School Club Assistant</option>
                  <option>Saturday Tutor</option>
                  <option>General / other</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="field">
                <label htmlFor="email">Email *</label>
                <input id="email" type="email" name="email" required={true} />
              </div>
              <div className="field">
                <label htmlFor="phone">Phone</label>
                <input id="phone" type="tel" name="phone" />
              </div>
            </div>

            <div className="field">
              <label htmlFor="message">Tell us about yourself *</label>
              <textarea id="message" name="message" placeholder="Your relevant experience and why you'd like to join us…" required={true}></textarea>
            </div>

            <div className="field">
              <label htmlFor="cv">Attach your CV (PDF or Word)</label>
              <input id="cv" type="file" name="attachment" accept=".pdf,.doc,.docx" />
            </div>

            <button type="submit" className="btn btn-primary" style={{"width":"100%"}}>Submit Application</button>
            <p className="form-note">By applying you consent to us storing your details for recruitment purposes. We never share them with third parties.</p>
          </form>
        </div>
      </div>
    </div>
  </section>


    </>
  );
}
