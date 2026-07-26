"use client";

import { useState } from 'react';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

type ServiceType = 'after-school' | 'tuition' | 'both' | '';

export default function BookingFunnel() {
  const [step, setStep] = useState(1);
  const [service, setService] = useState<ServiceType>('');
  
  const [school, setSchool] = useState('');
  const [days, setDays] = useState<string[]>([]);
  
  const [subjects, setSubjects] = useState<string[]>([]);
  const [yearGroup, setYearGroup] = useState('');
  
  const [parentName, setParentName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [childName, setChildName] = useState('');
  const [notes, setNotes] = useState('');
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleNext = () => setStep(s => s + 1);
  const handleBack = () => setStep(s => s - 1);

  const toggleDay = (day: string) => {
    setDays(prev => prev.includes(day) ? prev.filter(d => d !== day) : [...prev, day]);
  };

  const toggleSubject = (subject: string) => {
    setSubjects(prev => prev.includes(subject) ? prev.filter(s => s !== subject) : [...prev, subject]);
  };

  const submitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      await addDoc(collection(db, 'bookings'), {
        service,
        afterSchoolDetails: service === 'after-school' || service === 'both' ? { school, days } : null,
        tuitionDetails: service === 'tuition' || service === 'both' ? { subjects, yearGroup } : null,
        parent: { name: parentName, email, phone },
        childName,
        notes,
        createdAt: serverTimestamp(),
      });
      setIsSuccess(true);
    } catch (err: any) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="center" style={{ padding: '40px 20px', textAlign: 'center' }}>
        <div style={{ fontSize: '48px', marginBottom: '16px' }}>🎉</div>
        <h3 style={{ marginBottom: '12px' }}>Request Received!</h3>
        <p>Thank you for your booking enquiry. Our team will review your details and contact you shortly with availability.</p>
        <button onClick={() => window.location.href = '/'} className="btn btn-primary" style={{ marginTop: '24px' }}>Return Home</button>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px' }}>
      <div style={{ display: 'flex', gap: '8px', marginBottom: '24px' }}>
        {[1, 2, 3].map(i => (
          <div key={i} style={{
            flex: 1, 
            height: '4px', 
            background: step >= i ? 'var(--primary, #0055ff)' : '#e5e7eb',
            borderRadius: '2px',
            transition: 'background 0.3s'
          }} />
        ))}
      </div>

      <form onSubmit={submitForm}>
        {step === 1 && (
          <div className="fade-in">
            <h3 style={{ marginBottom: '16px' }}>What are you looking for?</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <label className={`service-card ${service === 'after-school' ? 'selected' : ''}`} style={cardStyle(service === 'after-school')}>
                <input type="radio" name="service" value="after-school" checked={service === 'after-school'} onChange={() => setService('after-school')} style={{ display: 'none' }} />
                <strong>After School Club</strong>
                <p style={{ fontSize: '0.9em', color: '#666', marginTop: '4px' }}>Wraparound care & school pick-ups</p>
              </label>
              <label className={`service-card ${service === 'tuition' ? 'selected' : ''}`} style={cardStyle(service === 'tuition')}>
                <input type="radio" name="service" value="tuition" checked={service === 'tuition'} onChange={() => setService('tuition')} style={{ display: 'none' }} />
                <strong>Tuition</strong>
                <p style={{ fontSize: '0.9em', color: '#666', marginTop: '4px' }}>Maths, English, Science, 11+ & GCSE</p>
              </label>
              <label className={`service-card ${service === 'both' ? 'selected' : ''}`} style={cardStyle(service === 'both')}>
                <input type="radio" name="service" value="both" checked={service === 'both'} onChange={() => setService('both')} style={{ display: 'none' }} />
                <strong>Both Services</strong>
                <p style={{ fontSize: '0.9em', color: '#666', marginTop: '4px' }}>Combine childcare with expert tuition</p>
              </label>
            </div>
            <button type="button" onClick={handleNext} disabled={!service} className="btn btn-primary" style={{ width: '100%', marginTop: '24px' }}>Next Step</button>
          </div>
        )}

        {step === 2 && (
          <div className="fade-in">
            <h3 style={{ marginBottom: '16px' }}>Service Details</h3>
            
            {(service === 'after-school' || service === 'both') && (
              <div style={{ marginBottom: '24px' }}>
                <div className="field">
                  <label htmlFor="school">Which school does your child attend?</label>
                  <select id="school" value={school} onChange={(e) => setSchool(e.target.value)} required>
                    <option value="">Select a school we cover...</option>
                    <option value="Kelvin Grove">Kelvin Grove</option>
                    <option value="St Bartholomew's">St Bartholomew's</option>
                    <option value="Haseltine">Haseltine</option>
                    <option value="Adamsrill">Adamsrill</option>
                    <option value="Eliot Bank">Eliot Bank</option>
                    <option value="Other (please specify in notes)">Other (specify in notes)</option>
                  </select>
                </div>
                
                <div className="field" style={{ marginTop: '16px' }}>
                  <label>Days required</label>
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '8px' }}>
                    {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map(day => (
                      <label key={day} style={{ display: 'flex', alignItems: 'center', gap: '6px', background: '#f3f4f6', padding: '8px 12px', borderRadius: '6px', cursor: 'pointer' }}>
                        <input type="checkbox" checked={days.includes(day)} onChange={() => toggleDay(day)} />
                        {day}
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {(service === 'tuition' || service === 'both') && (
              <div style={{ marginBottom: '24px', paddingTop: service === 'both' ? '20px' : '0', borderTop: service === 'both' ? '1px solid #eee' : 'none' }}>
                <div className="field">
                  <label>Subjects needed</label>
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '8px' }}>
                    {['Maths', 'English', 'Science', '11+', 'SATs', 'GCSE'].map(sub => (
                      <label key={sub} style={{ display: 'flex', alignItems: 'center', gap: '6px', background: '#f3f4f6', padding: '8px 12px', borderRadius: '6px', cursor: 'pointer' }}>
                        <input type="checkbox" checked={subjects.includes(sub)} onChange={() => toggleSubject(sub)} />
                        {sub}
                      </label>
                    ))}
                  </div>
                </div>
                
                <div className="field" style={{ marginTop: '16px' }}>
                  <label htmlFor="yearGroup">Child's current Year Group</label>
                  <input id="yearGroup" type="text" value={yearGroup} onChange={(e) => setYearGroup(e.target.value)} placeholder="e.g. Year 4, Year 10" required />
                </div>
              </div>
            )}

            <div style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
              <button type="button" onClick={handleBack} className="btn btn-outline" style={{ flex: 1 }}>Back</button>
              <button type="button" onClick={handleNext} className="btn btn-primary" style={{ flex: 2 }}>Final Step</button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="fade-in">
            <h3 style={{ marginBottom: '16px' }}>Your Details</h3>
            
            <div className="form-row" style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}>
              <div className="field" style={{ flex: 1 }}>
                <label htmlFor="parentName">Parent Name *</label>
                <input id="parentName" type="text" value={parentName} onChange={(e) => setParentName(e.target.value)} required />
              </div>
              <div className="field" style={{ flex: 1 }}>
                <label htmlFor="childName">Child Name *</label>
                <input id="childName" type="text" value={childName} onChange={(e) => setChildName(e.target.value)} required />
              </div>
            </div>

            <div className="form-row" style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}>
              <div className="field" style={{ flex: 1 }}>
                <label htmlFor="email">Email *</label>
                <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>
              <div className="field" style={{ flex: 1 }}>
                <label htmlFor="phone">Phone *</label>
                <input id="phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
              </div>
            </div>

            <div className="field" style={{ marginBottom: '24px' }}>
              <label htmlFor="notes">Additional Notes</label>
              <textarea id="notes" rows={3} value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Any special requirements, medical info, or questions?"></textarea>
            </div>

            {error && <p style={{ color: 'red', marginBottom: '16px', fontSize: '14px' }}>{error}</p>}

            <div style={{ display: 'flex', gap: '12px' }}>
              <button type="button" onClick={handleBack} className="btn btn-outline" style={{ flex: 1 }} disabled={isSubmitting}>Back</button>
              <button type="submit" className="btn btn-primary" style={{ flex: 2 }} disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Submit Request'}
              </button>
            </div>
            <p className="form-note" style={{ marginTop: '16px', textAlign: 'center' }}>Your details are kept secure and never shared.</p>
          </div>
        )}
      </form>
    </div>
  );
}

function cardStyle(selected: boolean) {
  return {
    display: 'block',
    padding: '16px',
    border: `2px solid ${selected ? 'var(--primary, #0055ff)' : '#e5e7eb'}`,
    borderRadius: '12px',
    cursor: 'pointer',
    background: selected ? '#f8faff' : '#fff',
    transition: 'all 0.2s'
  };
}
