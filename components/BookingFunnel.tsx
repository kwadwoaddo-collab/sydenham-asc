"use client";

import { useEffect, useRef, useState } from 'react';
import Icon from '@/components/Icon';
import { db } from '@/lib/firebase';
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';
import {
  buildPayload, newSubmissionId, submitWithTimeout, validateContactStep, validateServiceStep,
  SUBMIT_TIMEOUT_MS, type FieldErrors, type ServiceType,
} from '@/lib/booking';

type Phase = 'editing' | 'sending' | 'success' | 'failed' | 'uncertain';

const PHONE = '07584874710';
const PHONE_LABEL = '075 8487 4710';
const WHATSAPP = 'https://wa.me/447584874710';

function ContactOptions() {
  return (
    <div className="btn-row" style={{ marginTop: 16 }}>
      <a href={`tel:${PHONE}`} className="btn btn-outline"><Icon name="phone" /> Call {PHONE_LABEL}</a>
      <a href={WHATSAPP} className="btn btn-wa" target="_blank" rel="noopener noreferrer"><Icon name="whatsapp" /> WhatsApp us</a>
    </div>
  );
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return <p id={id} className="field-error">{message}</p>;
}

type WriteEnquiry = (id: string, data: Record<string, unknown>) => Promise<unknown>;

// Default: the real Firestore write. The id is the document id, so repeating a write for the same enquiry overwrites it instead of duplicating it.
const writeToFirestore: WriteEnquiry = (id, data) => setDoc(doc(db, 'bookings', id), { ...data, createdAt: serverTimestamp() });

export default function BookingFunnel({
  writeEnquiry = writeToFirestore,
  timeoutMs = SUBMIT_TIMEOUT_MS,
}: {
  writeEnquiry?: WriteEnquiry;
  timeoutMs?: number;
} = {}) {
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

  const [phase, setPhase] = useState<Phase>('editing');
  const [failMessage, setFailMessage] = useState('');
  const [errors, setErrors] = useState<FieldErrors>({});

  // One id per enquiry: every write for this form targets the same document, so a repeat can never create a second enquiry.
  const submissionId = useRef<string | null>(null);
  const attempts = useRef(0);
  const inFlight = useRef(false);
  const mounted = useRef(true);
  const statusRef = useRef<HTMLDivElement>(null);

  useEffect(() => { mounted.current = true; return () => { mounted.current = false; }; }, []);
  useEffect(() => {
    if (phase === 'failed' || phase === 'uncertain') statusRef.current?.focus();
  }, [phase]);

  const form = { service, school, days, subjects, yearGroup, parentName, childName, email, phone, notes };

  const focusFirstError = (errs: FieldErrors) => {
    const order = ['school', 'days', 'subjects', 'yearGroup', 'parentName', 'childName', 'email', 'phone'] as const;
    const key = order.find((k) => errs[k]);
    if (!key) return;
    requestAnimationFrame(() => {
      const el = document.getElementById(key) ?? document.querySelector<HTMLElement>(`[data-group="${key}"] input`);
      el?.focus();
    });
  };

  const clearError = (k: keyof FieldErrors) => setErrors((e) => (e[k] ? { ...e, [k]: undefined } : e));

  const handleNext = () => {
    if (step === 2) {
      const errs = validateServiceStep(form);
      setErrors(errs);
      if (Object.keys(errs).length) { focusFirstError(errs); return; }
    }
    setErrors({});
    setStep((s) => s + 1);
  };
  const handleBack = () => { setErrors({}); setStep((s) => s - 1); };

  const toggleDay = (day: string) => {
    clearError('days');
    setDays((prev) => (prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]));
  };
  const toggleSubject = (subject: string) => {
    clearError('subjects');
    setSubjects((prev) => (prev.includes(subject) ? prev.filter((s) => s !== subject) : [...prev, subject]));
  };

  const submitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    // Synchronous guard (state updates are async, so a fast double-click could otherwise slip through),
    // and no resubmission once the outcome is unknown or confirmed.
    if (inFlight.current || phase === 'sending' || phase === 'uncertain' || phase === 'success') return;

    const errs = validateContactStep(form);
    setErrors(errs);
    if (Object.keys(errs).length) { focusFirstError(errs); return; }

    inFlight.current = true;
    setPhase('sending');
    setFailMessage('');
    const id = (submissionId.current ??= newSubmissionId());
    const isRetry = attempts.current > 0;
    attempts.current += 1;

    const outcome = await submitWithTimeout(
      () => writeEnquiry(id, buildPayload(form)),
      timeoutMs,
      isRetry,
    );
    inFlight.current = false;
    if (!mounted.current) return;

    if (outcome.status === 'success') {
      setPhase('success');
    } else if (outcome.status === 'failed') {
      setFailMessage(outcome.message);
      setPhase('failed');
    } else {
      setPhase('uncertain');
      outcome.late.then((r) => {
        if (!mounted.current) return;
        if (r === 'success') setPhase('success');
        else { setFailMessage("We couldn't save your enquiry just now."); setPhase('failed'); }
      });
    }
  };

  if (phase === 'success') {
    return (
      <div className="center" role="status" style={{ padding: '40px 20px', textAlign: 'center' }}>
        <span className="icon-chip green" style={{ margin: '0 auto 16px', width: 56, height: 56 }}><Icon name="check" /></span>
        <h3 style={{ marginBottom: '12px' }}>Request Received!</h3>
        <p>Thank you for your booking enquiry. Our team will review your details and contact you shortly with availability.</p>
        <button onClick={() => { window.location.href = '/'; }} className="btn btn-primary" style={{ marginTop: '24px' }}>Return Home</button>
      </div>
    );
  }

  if (phase === 'uncertain') {
    return (
      <div style={{ padding: '20px' }}>
        <div ref={statusRef} tabIndex={-1} role="alert" className="form-alert">
          <h3 style={{ marginBottom: 8 }}>We can&apos;t confirm your enquiry reached us</h3>
          <p>Our booking system didn&apos;t answer in time. Your enquiry may already have arrived, so please <strong>don&apos;t send it again</strong>. Call or WhatsApp us and we&apos;ll check straight away.</p>
          <ContactOptions />
        </div>
        <h4 style={{ margin: '24px 0 8px' }}>The details you entered</h4>
        <dl className="entered-details">
          <dt>Parent</dt><dd>{parentName}</dd>
          <dt>Child</dt><dd>{childName}</dd>
          <dt>Email</dt><dd>{email}</dd>
          <dt>Phone</dt><dd>{phone}</dd>
          <dt>Service</dt><dd>{service === 'both' ? 'After School Club and Tuition' : service === 'tuition' ? 'Tuition' : 'After School Club'}</dd>
          {school && <><dt>School</dt><dd>{school}</dd></>}
          {days.length > 0 && <><dt>Days</dt><dd>{days.join(', ')}</dd></>}
          {subjects.length > 0 && <><dt>Subjects</dt><dd>{subjects.join(', ')}</dd></>}
          {yearGroup && <><dt>Year group</dt><dd>{yearGroup}</dd></>}
          {notes && <><dt>Notes</dt><dd>{notes}</dd></>}
        </dl>
      </div>
    );
  }

  const sending = phase === 'sending';

  return (
    <div style={{ padding: '20px' }}>
      <div style={{ display: 'flex', gap: '8px', marginBottom: '24px' }} aria-hidden="true">
        {[1, 2, 3].map(i => (
          <div key={i} style={{
            flex: 1,
            height: '4px',
            background: step >= i ? '#1F7A2E' : '#E6DAC3',
            borderRadius: '2px',
            transition: 'background 0.3s'
          }} />
        ))}
      </div>
      <p className="form-note" style={{ marginTop: -12, marginBottom: 16 }}>Step {step} of 3</p>

      <form onSubmit={submitForm} noValidate>
        {step === 1 && (
          <div className="fade-in">
            <h3 style={{ marginBottom: '16px' }}>What are you looking for?</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <label className={`service-card ${service === 'after-school' ? 'selected' : ''}`} style={cardStyle(service === 'after-school')}>
                <input type="radio" name="service" value="after-school" checked={service === 'after-school'} onChange={() => setService('after-school')} className="visually-hidden" />
                <strong>After School Club</strong>
                <p style={{ fontSize: '0.9em', color: '#5B4B3F', marginTop: '4px' }}>Wraparound care &amp; school pick-ups</p>
              </label>
              <label className={`service-card ${service === 'tuition' ? 'selected' : ''}`} style={cardStyle(service === 'tuition')}>
                <input type="radio" name="service" value="tuition" checked={service === 'tuition'} onChange={() => setService('tuition')} className="visually-hidden" />
                <strong>Tuition</strong>
                <p style={{ fontSize: '0.9em', color: '#5B4B3F', marginTop: '4px' }}>Maths, English, Science, 11+ &amp; GCSE</p>
              </label>
              <label className={`service-card ${service === 'both' ? 'selected' : ''}`} style={cardStyle(service === 'both')}>
                <input type="radio" name="service" value="both" checked={service === 'both'} onChange={() => setService('both')} className="visually-hidden" />
                <strong>Both Services</strong>
                <p style={{ fontSize: '0.9em', color: '#5B4B3F', marginTop: '4px' }}>Combine childcare with expert tuition</p>
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
                  <label htmlFor="school">Which school does your child attend? *</label>
                  <select id="school" value={school} required aria-invalid={!!errors.school} aria-describedby={errors.school ? 'school-error' : undefined}
                    onChange={(e) => { setSchool(e.target.value); clearError('school'); }}>
                    <option value="">Select a school we cover...</option>
                    <option value="Kelvin Grove">Kelvin Grove</option>
                    <option value="St Bartholomew's">St Bartholomew&apos;s</option>
                    <option value="Haseltine">Haseltine</option>
                    <option value="Adamsrill">Adamsrill</option>
                    <option value="Eliot Bank">Eliot Bank</option>
                    <option value="Other (please specify in notes)">Other (specify in notes)</option>
                  </select>
                  <FieldError id="school-error" message={errors.school} />
                </div>

                <div className="field" style={{ marginTop: '16px' }}>
                  <label id="days-label">Days required *</label>
                  <div role="group" aria-labelledby="days-label" data-group="days" aria-describedby={errors.days ? 'days-error' : undefined} style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '8px' }}>
                    {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map(day => (
                      <label key={day} className="chip-option" style={{ display: 'flex', alignItems: 'center', gap: '6px', background: '#E6DAC3', padding: '8px 12px', borderRadius: '6px', cursor: 'pointer' }}>
                        <input type="checkbox" checked={days.includes(day)} onChange={() => toggleDay(day)} />
                        {day}
                      </label>
                    ))}
                  </div>
                  <FieldError id="days-error" message={errors.days} />
                </div>
              </div>
            )}

            {(service === 'tuition' || service === 'both') && (
              <div style={{ marginBottom: '24px', paddingTop: service === 'both' ? '20px' : '0', borderTop: service === 'both' ? '1px solid #E6DAC3' : 'none' }}>
                <div className="field">
                  <label id="subjects-label">Subjects needed *</label>
                  <div role="group" aria-labelledby="subjects-label" data-group="subjects" aria-describedby={errors.subjects ? 'subjects-error' : undefined} style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '8px' }}>
                    {['Maths', 'English', 'Science', '11+', 'SATs', 'GCSE'].map(sub => (
                      <label key={sub} className="chip-option" style={{ display: 'flex', alignItems: 'center', gap: '6px', background: '#E6DAC3', padding: '8px 12px', borderRadius: '6px', cursor: 'pointer' }}>
                        <input type="checkbox" checked={subjects.includes(sub)} onChange={() => toggleSubject(sub)} />
                        {sub}
                      </label>
                    ))}
                  </div>
                  <FieldError id="subjects-error" message={errors.subjects} />
                </div>

                <div className="field" style={{ marginTop: '16px' }}>
                  <label htmlFor="yearGroup">Child&apos;s current Year Group *</label>
                  <input id="yearGroup" maxLength={50} type="text" value={yearGroup} required aria-invalid={!!errors.yearGroup} aria-describedby={errors.yearGroup ? 'yearGroup-error' : undefined}
                    onChange={(e) => { setYearGroup(e.target.value); clearError('yearGroup'); }} placeholder="e.g. Year 4, Year 10" />
                  <FieldError id="yearGroup-error" message={errors.yearGroup} />
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
          <fieldset disabled={sending} className="fade-in" style={{ border: 0 }}>
            <h3 style={{ marginBottom: '16px' }}>Your Details</h3>

            <div className="form-row" style={{ display: 'flex', gap: '12px', marginBottom: '16px', flexWrap: 'wrap' }}>
              <div className="field" style={{ flex: '1 1 200px' }}>
                <label htmlFor="parentName">Parent Name *</label>
                <input id="parentName" maxLength={100} type="text" value={parentName} required aria-invalid={!!errors.parentName} aria-describedby={errors.parentName ? 'parentName-error' : undefined}
                  onChange={(e) => { setParentName(e.target.value); clearError('parentName'); }} />
                <FieldError id="parentName-error" message={errors.parentName} />
              </div>
              <div className="field" style={{ flex: '1 1 200px' }}>
                <label htmlFor="childName">Child Name *</label>
                <input id="childName" maxLength={100} type="text" value={childName} required aria-invalid={!!errors.childName} aria-describedby={errors.childName ? 'childName-error' : undefined}
                  onChange={(e) => { setChildName(e.target.value); clearError('childName'); }} />
                <FieldError id="childName-error" message={errors.childName} />
              </div>
            </div>

            <div className="form-row" style={{ display: 'flex', gap: '12px', marginBottom: '16px', flexWrap: 'wrap' }}>
              <div className="field" style={{ flex: '1 1 200px' }}>
                <label htmlFor="email">Email *</label>
                <input id="email" maxLength={254} type="email" value={email} required aria-invalid={!!errors.email} aria-describedby={errors.email ? 'email-error' : undefined}
                  onChange={(e) => { setEmail(e.target.value); clearError('email'); }} />
                <FieldError id="email-error" message={errors.email} />
              </div>
              <div className="field" style={{ flex: '1 1 200px' }}>
                <label htmlFor="phone">Phone *</label>
                <input id="phone" maxLength={30} type="tel" value={phone} required aria-invalid={!!errors.phone} aria-describedby={errors.phone ? 'phone-error' : undefined}
                  onChange={(e) => { setPhone(e.target.value); clearError('phone'); }} />
                <FieldError id="phone-error" message={errors.phone} />
              </div>
            </div>

            <div className="field" style={{ marginBottom: '24px' }}>
              <label htmlFor="notes">Additional Notes</label>
              <textarea id="notes" maxLength={2000} rows={3} value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Any special requirements, medical info, or questions?"></textarea>
            </div>

            {phase === 'failed' && (
              <div ref={statusRef} tabIndex={-1} role="alert" className="form-alert" style={{ marginBottom: 16 }}>
                <strong>{failMessage || "We couldn't save your enquiry just now."}</strong>
                <p style={{ marginTop: 6 }}>Nothing has been sent, and your details are still here. You can try again, or contact us directly.</p>
                <ContactOptions />
              </div>
            )}

            {sending && (
              <p role="status" className="form-note" style={{ marginBottom: 12 }}>Sending your enquiry… this can take up to {Math.round(timeoutMs / 1000)} seconds. Please don&apos;t close this page.</p>
            )}

            <div style={{ display: 'flex', gap: '12px' }}>
              <button type="button" onClick={handleBack} className="btn btn-outline" style={{ flex: 1 }} disabled={sending}>Back</button>
              <button type="submit" className="btn btn-primary" style={{ flex: 2 }} disabled={sending} aria-busy={sending}>
                {sending ? 'Sending…' : phase === 'failed' ? 'Try again' : 'Submit Request'}
              </button>
            </div>
            <p className="form-note" style={{ marginTop: '16px', textAlign: 'center' }}>Your details are kept secure and never shared.</p>
          </fieldset>
        )}
      </form>
    </div>
  );
}

function cardStyle(selected: boolean) {
  return {
    display: 'block',
    padding: '16px',
    border: `2px solid ${selected ? '#1F7A2E' : '#8C7B63'}`,
    borderRadius: '12px',
    cursor: 'pointer',
    background: selected ? '#E3F0DC' : '#fff',
    transition: 'all 0.2s'
  };
}
