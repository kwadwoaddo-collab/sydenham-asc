import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free Assessment | Sydenham After School Club',
  description: 'Book a free assessment session using our interactive booking portal.',
};

export default function FreeAssessmentPage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>Free assessment</h1>
          <p>Use the portal below to find a time that works for you and instantly book your free assessment session.</p>
          <p className="form-note" style={{ margin: 0 }}>Prefer to talk first? <a href="tel:07584874710">Call 075 8487 4710</a> or <a href="https://wa.me/447584874710" target="_blank" rel="noopener noreferrer">message us on WhatsApp</a>.</p>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container" style={{ maxWidth: 1000 }}>
          <div className="embed-wrap">
            <iframe
              title="Free assessment booking portal"
              src="https://after-school-club-live.vercel.app/b/sydenham-after-school-club-ltd/sydenham-after-school-club-yfbc5"
              height="1000"
              allow="clipboard-write"
            />
          </div>
        </div>
      </section>
    </>
  );
}
