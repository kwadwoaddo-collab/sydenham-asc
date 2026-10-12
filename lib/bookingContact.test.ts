// Run with: npm test   (Node's built-in test runner; no extra dependencies, no network)
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { flattenBookingContact } from './bookingContact.ts';

const contact = (d: object) => {
  const o = flattenBookingContact(d as Record<string, unknown>);
  return { parentName: o.parentName, email: o.email, phone: o.phone };
};
const nested = { name: 'Nested P', email: 'n@example.com', phone: '07000000001' };

test('nested-only (what the booking form writes)', () => {
  assert.deepEqual(contact({ parent: nested }), { parentName: 'Nested P', email: 'n@example.com', phone: '07000000001' });
});

test('flat-only (older or hand-edited documents)', () => {
  assert.deepEqual(contact({ parentName: 'Flat P', email: 'f@example.com', phone: '07000000002' }),
    { parentName: 'Flat P', email: 'f@example.com', phone: '07000000002' });
});

test('mixed: a non-blank flat value wins, the rest come from nested', () => {
  assert.deepEqual(contact({ parentName: 'Flat P', parent: nested }),
    { parentName: 'Flat P', email: 'n@example.com', phone: '07000000001' });
});

test('empty or blank flat strings do NOT hide valid nested details', () => {
  assert.deepEqual(contact({ parentName: '', email: '   ', phone: '', parent: nested }),
    { parentName: 'Nested P', email: 'n@example.com', phone: '07000000001' });
});

test('blank flat and blank nested stays blank-ish: nothing usable -> undefined', () => {
  assert.deepEqual(contact({ parentName: '', parent: { name: ' ', email: '', phone: '' } }),
    { parentName: undefined, email: undefined, phone: undefined });
});

test('missing contact fields: no parent, null parent, non-object parent, non-string values', () => {
  const none = { parentName: undefined, email: undefined, phone: undefined };
  assert.deepEqual(contact({ childName: 'C' }), none);
  assert.deepEqual(contact({ parent: null }), none);
  assert.deepEqual(contact({ parent: 'oops' }), none);
  assert.deepEqual(contact({ parent: { name: 5, email: null, phone: {} } }), none);
});

test('partially nested: only some nested fields present', () => {
  assert.deepEqual(contact({ parent: { name: 'Only Name' } }), { parentName: 'Only Name', email: undefined, phone: undefined });
});

test('other fields pass through unchanged and the input is not mutated', () => {
  const doc = { service: 'tuition', childName: 'C', notes: 'n', parent: nested };
  const snapshot = JSON.parse(JSON.stringify(doc));
  const out = flattenBookingContact(doc);
  assert.equal(out.service, 'tuition'); assert.equal(out.childName, 'C'); assert.equal(out.notes, 'n');
  assert.deepEqual(out.parent, nested);
  assert.deepEqual(doc, snapshot);
});
