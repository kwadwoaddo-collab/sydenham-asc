'use client';

import { useEffect, useRef, useState } from 'react';

// Line illustration in the same stroke style as <Icon>: a staff member walking a child from school to the club.
// Decorative; the adjacent heading and text carry the meaning.
// The markup/CSS default is the finished composition (figures beside the club), so it is complete without JS,
// under reduced motion, and before hydration. When motion is allowed the figures are reset to the start only
// while the panel is still below the viewport, then walk once when it scrolls into view.
export default function SchoolRunIllustration() {
  const ref = useRef<SVGSVGElement>(null);
  const [phase, setPhase] = useState<'static' | 'ready' | 'play'>('static');

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const rect = el.getBoundingClientRect();
    const visibleNow = rect.top < window.innerHeight * 0.9 && rect.bottom > 0;
    // Already on screen at load: leave the finished composition rather than snapping it back to the start.
    if (visibleNow) return;

    setPhase('ready');
    const io = new IntersectionObserver((entries) => {
      if (entries.some((e) => e.isIntersecting)) {
        setPhase('play');
        io.disconnect();
      }
    }, { threshold: 0.5 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <svg ref={ref} className="run-art" data-run={phase} viewBox="0 0 400 300" aria-hidden="true" focusable="false">
      <defs>
        <clipPath id="run-route-clip"><rect className="run-reveal" x="150" y="255" width="160" height="40" /></clipPath>
      </defs>
      <g className="run-ground"><path d="M20 250h360" /></g>
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
      {/* route, revealed left to right as they walk */}
      <g clipPath="url(#run-route-clip)">
        <path className="run-route" d="M165 270c40 14 85 14 125 0" />
      </g>
      {/* adult and child, walking together; arms and joined hands stay fixed */}
      <g className="run-walkers">
        <g className="run-bob">
          <circle cx="178" cy="156" r="12" />
          <path d="M178 170v44M178 182l-14 18M178 182l18 14" />
          <path className="run-leg a1" d="M178 214l-12 36" />
          <path className="run-leg a2" d="M178 214l12 36" />
          <circle cx="224" cy="190" r="9" />
          <path d="M224 201v32M224 210l-12-4M224 210l-14 4" />
          <path className="run-leg c1" d="M224 233l-8 17" />
          <path className="run-leg c2" d="M224 233l8 17" />
          <path d="M196 196l14 14" />
        </g>
      </g>
    </svg>
  );
}
