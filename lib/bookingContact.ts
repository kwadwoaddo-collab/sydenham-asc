// Pure helper (no Firebase imports) so it can be unit-tested with `node --test`.

/**
 * The booking form stores contact details nested as `parent: {name, email, phone}`, while the admin
 * dashboard displays flat `parentName`, `email` and `phone`. A flat value is used only when it is a
 * non-blank string; otherwise the nested value is used, so an empty flat string never hides valid
 * nested details. Missing everywhere stays `undefined` (the dashboard shows "-").
 */
type Contact = { name?: unknown; email?: unknown; phone?: unknown };

const usable = (v: unknown): v is string => typeof v === 'string' && v.trim() !== '';
const pick = (flat: unknown, nested: unknown): string | undefined =>
  usable(flat) ? flat : usable(nested) ? nested : undefined;

export function flattenBookingContact<T extends Record<string, unknown>>(
  data: T,
): T & { parentName?: string; email?: string; phone?: string } {
  const p = (data.parent && typeof data.parent === 'object' ? data.parent : {}) as Contact;
  return {
    ...data,
    parentName: pick(data.parentName, p.name),
    email: pick(data.email, p.email),
    phone: pick(data.phone, p.phone),
  };
}
