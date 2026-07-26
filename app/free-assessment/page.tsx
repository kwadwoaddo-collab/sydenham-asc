import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free Assessment | Sydenham After School Club',
  description: 'Book a free assessment session using our interactive booking portal.',
};

export default function FreeAssessmentPage() {
  return (
    <>
      <section className="hero">
        <div className="container center">
          <span className="eyebrow">Book a Session</span>
          <h1 style={{ maxWidth: '800px', margin: '0 auto' }}>Free Assessment</h1>
          <p style={{ maxWidth: '600px', margin: '0 auto', opacity: 0.9 }}>
            Use the portal below to find a time that works for you and instantly book your free assessment session.
          </p>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container" style={{ maxWidth: '1000px' }}>
          <div style={{ 
            background: '#fff', 
            borderRadius: '24px', 
            padding: '8px', 
            boxShadow: 'var(--shadow-lg)' 
          }}>
            <iframe 
              src="https://after-school-club-live.vercel.app/b/sydenham-after-school-club-ltd/sydenham-after-school-club-yfbc5" 
              width="100%" 
              height="1000" 
              frameBorder="0" 
              style={{ border: 0, width: '100%', minHeight: '1000px', borderRadius: '16px', overflow: 'hidden' }} 
              allow="clipboard-write">
            </iframe>
          </div>
        </div>
      </section>
    </>
  );
}
