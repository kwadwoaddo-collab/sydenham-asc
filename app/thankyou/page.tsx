import { Metadata } from 'next';
import Link from 'next/link';
import Icon from '@/components/Icon';

export const metadata: Metadata = {
  title: "Thank You | Sydenham After School Club",
  description: "Thank you for your enquiry to Sydenham After School Club. We'll be in touch shortly.",
};

export default function Page() {
  return (
    <section className="hero">
      <div className="container" style={{ maxWidth: 760 }}>
        <span className="icon-chip green" style={{ width: 64, height: 64, borderRadius: 20, marginBottom: 24 }}><Icon name="check" className="icon" /></span>
        <h1>Thank you!</h1>
        <p>We&apos;ve received your enquiry and really appreciate you getting in touch. Someone from our team will be back to you shortly — usually within 24 hours.</p>
        <p style={{ marginTop: 0 }}>In the meantime, feel free to call us on <a href="tel:07584874710">075 8487 4710</a> or message us on <a href="https://wa.me/447584874710" target="_blank" rel="noopener noreferrer">WhatsApp</a> if you have any urgent questions.</p>
        <div className="hero-actions">
          <Link href="/" className="btn btn-primary">Back to home</Link>
          <Link href="/fees" className="btn btn-outline">See fees</Link>
        </div>
      </div>
    </section>
  );
}
