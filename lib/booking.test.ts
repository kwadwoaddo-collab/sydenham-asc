// Run with: npm test   (Node's built-in test runner; no extra dependencies, no network)
import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  submitWithTimeout, validateServiceStep, validateContactStep, buildPayload, newSubmissionId, type BookingForm,
} from './booking.ts';

const base: BookingForm = {
  service: 'after-school', school: '', days: [], subjects: [], yearGroup: '',
  parentName: '', childName: '', email: '', phone: '', notes: '',
};
const delay = (ms: number) => new Promise((r) => setTimeout(r, ms));

test('success: acknowledged write resolves to success', async () => {
  const out = await submitWithTimeout(() => Promise.resolve({ id: 'x' }), 200);
  assert.equal(out.status, 'success');
});

test('rejection: explicit rejection is "failed" with a friendly message, not uncertain', async () => {
  const out = await submitWithTimeout(() => Promise.reject(Object.assign(new Error('PERMISSION_DENIED raw text'), { code: 'permission-denied' })), 200);
  assert.equal(out.status, 'failed');
  assert.ok(out.status === 'failed' && !out.message.includes('PERMISSION_DENIED'), 'raw SDK text must not reach the parent');
});

test('synchronous throw is treated as a rejection', async () => {
  const out = await submitWithTimeout(() => { throw new Error('boom'); }, 200);
  assert.equal(out.status, 'failed');
});

test('timeout: no answer => uncertain (not failed)', async () => {
  const out = await submitWithTimeout(() => new Promise(() => {}), 30);
  assert.equal(out.status, 'uncertain');
});

test('timeout then late acknowledgement is reported as success', async () => {
  const out = await submitWithTimeout(() => delay(60), 20);
  assert.equal(out.status, 'uncertain');
  assert.equal(out.status === 'uncertain' && (await out.late), 'success');
});

test('timeout then late rejection is reported as failed', async () => {
  const out = await submitWithTimeout(() => delay(60).then(() => { throw new Error('x'); }), 20);
  assert.equal(out.status, 'uncertain');
  assert.equal(out.status === 'uncertain' && (await out.late), 'failed');
});

test('duplicate prevention: the write function is invoked exactly once per submission (no auto-retry)', async () => {
  let calls = 0;
  await submitWithTimeout(() => { calls++; return new Promise(() => {}); }, 30);
  assert.equal(calls, 1);
});

test('submission ids are unique per form and stable string values', () => {
  const a = newSubmissionId(); const b = newSubmissionId();
  assert.notEqual(a, b);
  assert.ok(a.length >= 8);
});

test('step 2 validation: empty club step reports school and days', () => {
  const e = validateServiceStep(base);
  assert.ok(e.school && e.days && !e.subjects && !e.yearGroup);
});

test('step 2 validation: "both" requires club and tuition fields; whitespace does not count', () => {
  const e = validateServiceStep({ ...base, service: 'both', school: '   ', yearGroup: '  ' });
  assert.deepEqual(Object.keys(e).sort(), ['days', 'school', 'subjects', 'yearGroup']);
});

test('step 2 validation: complete tuition step passes', () => {
  assert.deepEqual(validateServiceStep({ ...base, service: 'tuition', subjects: ['Maths'], yearGroup: 'Year 5' }), {});
});

test('step 3 validation: empty, bad email and short phone are rejected; valid passes', () => {
  assert.deepEqual(Object.keys(validateContactStep(base)).sort(), ['childName', 'email', 'parentName', 'phone']);
  const ok = { ...base, parentName: 'A', childName: 'B', email: 'a@b.co', phone: '07000 000000' };
  assert.deepEqual(validateContactStep(ok), {});
  assert.ok(validateContactStep({ ...ok, email: 'nope' }).email);
  assert.ok(validateContactStep({ ...ok, phone: '123' }).phone);
});

test('payload keeps the existing document shape and nulls the unused service block', () => {
  const p = buildPayload({ ...base, service: 'tuition', subjects: ['Maths'], yearGroup: 'Y5', parentName: ' P ', childName: 'C', email: ' e@x.co ', phone: '0700000000' });
  assert.equal(p.afterSchoolDetails, null);
  assert.deepEqual(p.tuitionDetails, { subjects: ['Maths'], yearGroup: 'Y5' });
  assert.deepEqual(p.parent, { name: 'P', email: 'e@x.co', phone: '0700000000' });
});

test('tuition-only: school and childcare days are NOT required, and are not stored', () => {
  const tuition = { ...base, service: 'tuition' as const, subjects: ['Maths'], yearGroup: 'Year 5' };
  assert.deepEqual(validateServiceStep(tuition), {});
  const e = validateServiceStep({ ...tuition, subjects: [], yearGroup: '' });
  assert.ok(e.subjects && e.yearGroup && !e.school && !e.days);
  assert.equal(buildPayload(tuition).afterSchoolDetails, null);
});

test('childcare-only: tuition subjects and year group are NOT required, and are not stored', () => {
  const club = { ...base, service: 'after-school' as const, school: 'Other', days: ['Mon'] };
  assert.deepEqual(validateServiceStep(club), {});
  const e = validateServiceStep({ ...club, school: '', days: [] });
  assert.ok(e.school && e.days && !e.subjects && !e.yearGroup);
  assert.equal(buildPayload(club).tuitionDetails, null);
});

test('retry: permission-denied on a same-id retry is UNCERTAIN (original may have arrived), not failed', async () => {
  const denied = Object.assign(new Error('denied'), { code: 'permission-denied' });
  const first = await submitWithTimeout(() => Promise.reject(denied), 50, false);
  assert.equal(first.status, 'failed');                 // first attempt: explicit rejection
  const retry = await submitWithTimeout(() => Promise.reject(denied), 50, true);
  assert.equal(retry.status, 'uncertain');              // retry: cannot prove nothing was received
});

test('retry: other errors on a retry are still ordinary failures; a retry success is success', async () => {
  const net = Object.assign(new Error('net'), { code: 'unavailable' });
  assert.equal((await submitWithTimeout(() => Promise.reject(net), 50, true)).status, 'failed');
  assert.equal((await submitWithTimeout(() => Promise.resolve(), 50, true)).status, 'success');
});
