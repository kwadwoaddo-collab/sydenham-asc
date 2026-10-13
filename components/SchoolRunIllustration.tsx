// Line illustration in the same stroke style as <Icon>: a staff member walking a child from school to the club.
// Decorative; the adjacent heading and text carry the meaning.
export default function SchoolRunIllustration() {
  return (
    <svg className="run-art" viewBox="0 0 400 300" aria-hidden="true" focusable="false">
      <g className="run-ground"><path d="M20 250h360" /><path d="M60 250v0M340 250v0" /></g>
      {/* school */}
      <g>
        <path d="M30 250V130l50-34 50 34v120" />
        <path d="M80 96V70M80 70h22v12H80" />
        <rect x="64" y="196" width="32" height="54" rx="3" />
        <rect x="44" y="146" width="22" height="26" rx="2" />
        <rect x="94" y="146" width="22" height="26" rx="2" />
      </g>
      {/* club */}
      <g>
        <path d="M290 250V150l45-36 45 36v100" />
        <rect x="320" y="196" width="30" height="54" rx="3" />
        <path d="M335 100s-14-9-14-18a8 8 0 0 1 14-5 8 8 0 0 1 14 5c0 9-14 18-14 18z" className="run-accent" />
      </g>
      {/* adult and child walking */}
      <g>
        <circle cx="178" cy="156" r="12" />
        <path d="M178 170v44M178 214l-12 36M178 214l12 36M178 182l-14 18M178 182l18 14" />
        <circle cx="224" cy="190" r="9" />
        <path d="M224 201v32M224 233l-8 17M224 233l8 17M224 210l-12-4M224 210l-14 4" />
        <path d="M196 196l14 14" />
      </g>
      {/* route */}
      <path className="run-route" d="M130 270c50 14 110 14 160 0" />
    </svg>
  );
}
