// Pure booking-enquiry logic: validation, payload, and bounded submission.
// No Firebase imports here so it can be unit-tested with `node --test` (see booking.test.ts).

export type ServiceType = 'after-school' | 'tuition' | 'both' | '';

export type BookingForm = {
  service: ServiceType;
  school: string;
  days: string[];
  subjects: string[];
  yearGroup: string;
  parentName: string;
  childName: string;
  email: string;
  phone: string;
  notes: string;
};

export type FieldErrors = Partial<Record<'school' | 'days' | 'subjects' | 'yearGroup' | 'parentName' | 'childName' | 'email' | 'phone', string>>;

const wantsClub = (s: ServiceType) => s === 'after-school' || s === 'both';
const wantsTuition = (s: ServiceType) => s === 'tuition' || s === 'both';

/** Step 2: the details for the service(s) chosen in step 1. */
export function validateServiceStep(f: BookingForm): FieldErrors {
  const e: FieldErrors = {};
  if (wantsClub(f.service)) {
    if (!f.school.trim()) e.school = "Please choose your child's school (or 'Other').";
    if (f.days.length === 0) e.days = 'Please choose at least one day.';
  }
  if (wantsTuition(f.service)) {
    if (f.subjects.length === 0) e.subjects = 'Please choose at least one subject.';
    if (!f.yearGroup.trim()) e.yearGroup = "Please tell us your child's year group.";
  }
  return e;
}

/** Step 3: contact details. */
export function validateContactStep(f: BookingForm): FieldErrors {
  const e: FieldErrors = {};
  if (!f.parentName.trim()) e.parentName = 'Please enter your name.';
  if (!f.childName.trim()) e.childName = "Please enter your child's name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email.trim())) e.email = 'Please enter a valid email address.';
  if (f.phone.replace(/\D/g, '').length < 7) e.phone = 'Please enter a phone number we can reach you on.';
  return e;
}

/** Same document shape the site has always written (createdAt is added by the caller). */
export function buildPayload(f: BookingForm) {
  return {
    service: f.service,
    afterSchoolDetails: wantsClub(f.service) ? { school: f.school, days: f.days } : null,
    tuitionDetails: wantsTuition(f.service) ? { subjects: f.subjects, yearGroup: f.yearGroup } : null,
    parent: { name: f.parentName.trim(), email: f.email.trim(), phone: f.phone.trim() },
    childName: f.childName.trim(),
    notes: f.notes,
  };
}

export function newSubmissionId(): string {
  const c = globalThis.crypto;
  if (c && typeof c.randomUUID === 'function') return c.randomUUID();
  return 'enq-' + Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 10);
}

export type SubmitOutcome =
  | { status: 'success' }                                  // write acknowledged by the server
  | { status: 'failed'; message: string }                  // write explicitly rejected: nothing was saved
  | { status: 'uncertain'; late: Promise<'success' | 'failed'> }; // no answer in time: may or may not have been saved

export const SUBMIT_TIMEOUT_MS = 15000;

/**
 * Waits for `write` for at most `timeoutMs`.
 *  - resolves      -> success
 *  - rejects       -> failed (explicit rejection)
 *  - no answer     -> uncertain. A timeout is NOT proof of rejection, so `late` keeps
 *                     listening and reports if the write is eventually acknowledged/rejected.
 */
export function submitWithTimeout(
  write: () => Promise<unknown>,
  timeoutMs: number = SUBMIT_TIMEOUT_MS,
  /** true when this reuses the id of an earlier attempt that was rejected or unconfirmed. */
  isRetry = false,
): Promise<SubmitOutcome> {
  return new Promise((resolve) => {
    let decided = false;
    let lateResolve: (v: 'success' | 'failed') => void = () => {};
    const late = new Promise<'success' | 'failed'>((r) => { lateResolve = r; });

    const timer = setTimeout(() => {
      if (decided) return;
      decided = true;
      resolve({ status: 'uncertain', late });
    }, timeoutMs);

    let p: Promise<unknown>;
    try { p = write(); } catch (err) { p = Promise.reject(err); }

    p.then(
      () => {
        if (!decided) { decided = true; clearTimeout(timer); resolve({ status: 'success' }); }
        else lateResolve('success');
      },
      (err: unknown) => {
        // Create-only rules deny a same-id write once the document exists. So on a retry,
        // permission-denied may mean "the first attempt actually arrived", not "rejected".
        // Never present that as proof the enquiry was not received.
        if (isRetry && isPermissionDenied(err)) {
          if (!decided) { decided = true; clearTimeout(timer); resolve({ status: 'uncertain', late: new Promise(() => {}) }); }
          return;
        }
        if (!decided) {
          decided = true; clearTimeout(timer);
          resolve({ status: 'failed', message: friendlyError(err) });
        } else lateResolve('failed');
      },
    );
  });
}

function isPermissionDenied(err: unknown): boolean {
  return ((err as { code?: string } | null)?.code ?? '').includes('permission-denied');
}

function friendlyError(err: unknown): string {
  const code = (err as { code?: string } | null)?.code ?? '';
  if (code.includes('permission-denied')) return "We couldn't save your enquiry just now.";
  if (code.includes('unavailable') || code.includes('network')) return "We couldn't reach our booking system.";
  return "We couldn't save your enquiry just now.";
}

// Dashboard contact mapping lives in ./bookingContact.ts (shipped as its own minimal release).
export { flattenBookingContact } from './bookingContact.ts';
