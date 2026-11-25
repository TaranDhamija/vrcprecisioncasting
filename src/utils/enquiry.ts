export interface EnquiryPayload {
  name: string;
  company: string;
  email: string;
  phone: string;
  requirement: string;
  message: string;
}

export type EnquiryErrors = Partial<Record<keyof EnquiryPayload, string>>;

export function validateEnquiry(v: EnquiryPayload): EnquiryErrors {
  const e: EnquiryErrors = {};
  if (v.name.trim().length < 2) e.name = 'Please enter your name.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim())) e.email = 'Please enter a valid email address.';
  if (v.phone.trim() && !/^[+\d][\d\s()-]{6,}$/.test(v.phone.trim())) e.phone = 'Please enter a valid phone number.';
  if (v.requirement.trim().length < 2) e.requirement = 'Please describe the component or requirement.';
  if (v.message.trim().length < 10) e.message = 'Please add a few more details (at least 10 characters).';
  return e;
}

/**
 * Integration point for the future backend / CRM / RFQ system.
 * Currently a no-op: nothing is transmitted anywhere.
 */
export async function submitEnquiry(_payload: EnquiryPayload): Promise<void> {
  // TODO: replace with `await fetch('/api/enquiries', { method: 'POST', body: JSON.stringify(_payload) })`
  return Promise.resolve();
}
