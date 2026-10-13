export const OFSTED_RECORD_URL = 'https://reports.ofsted.gov.uk/provider/16/2854827';

export default function OfstedRegistration() {
  return (
    <a className="ofsted-link" href={OFSTED_RECORD_URL} target="_blank" rel="noopener noreferrer">
      <span>Registered with Ofsted · <span className="nowrap">URN 2854827</span></span>
      <span aria-hidden="true" className="ofsted-link-arrow">↗</span>
      <span className="visually-hidden"> (opens the official Ofsted record in a new tab)</span>
    </a>
  );
}
