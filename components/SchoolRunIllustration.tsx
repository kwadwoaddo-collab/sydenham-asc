'use client';

import { useEffect, useRef, useState } from 'react';

// Line illustration in the same stroke style as <Icon>: a staff member walking a child between the school and the club.
// Decorative; the adjacent heading and text carry the meaning.
// The markup/CSS default is a complete static scene (figures at the school end, facing the club). That is what shows
// without JS, before hydration and under prefers-reduced-motion. With JS and motion allowed the CSS loop runs only
// while the panel is on screen, the tab is visible and the viewer has not paused it.
export default function SchoolRunIllustration() {
  const ref = useRef<SVGSVGElement>(null);
  const [motionOk, setMotionOk] = useState(false);
  const [inView, setInView] = useState(false);
  const [tabVisible, setTabVisible] = useState(true);
  const [userPaused, setUserPaused] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => setMotionOk(!mq.matches);
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;
    const io = new IntersectionObserver((entries) => setInView(entries.some((e) => e.isIntersecting)), { threshold: 0.25 });
    io.observe(el);
    const onVis = () => setTabVisible(document.visibilityState === 'visible');
    onVis();
    document.addEventListener('visibilitychange', onVis);
    return () => { io.disconnect(); document.removeEventListener('visibilitychange', onVis); };
  }, []);

  const phase = !motionOk ? 'static' : inView && tabVisible && !userPaused ? 'play' : 'paused';

  return (
    <>
      <svg ref={ref} className="run-art" data-run={phase} viewBox="0 0 400 300" aria-hidden="true" focusable="false">
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
        {/* route (stationary) */}
        <path className="run-route" d="M118 270c60 14 128 14 188 0" />
        {/* adult and child: travel > turn > bob > legs. The joined-hands pose is one rigid group, so it survives the turn. */}
        <g className="run-walkers">
          <g className="run-turn">
            <g className="run-bob">
              <circle cx="178" cy="156" r="12" />
              <circle className="run-eye" cx="182" cy="154" r="1" />
              <path d="M178 170v44M178 182l-14 18M178 182l18 14" />
              <path className="run-leg a1" d="M178 214l-12 36h6" />
              <path className="run-leg a2" d="M178 214l12 36h6" />
              <circle cx="224" cy="190" r="9" />
              <circle className="run-eye" cx="227" cy="188" r="1" />
              <path d="M224 201v32M224 210l-12-4M224 210l-14 4" />
              <path className="run-leg c1" d="M224 233l-8 17h5" />
              <path className="run-leg c2" d="M224 233l8 17h5" />
              <path d="M196 196l14 14" />
            </g>
          </g>
        </g>
      </svg>
      {motionOk && (
        <button type="button" className="run-toggle" onClick={() => setUserPaused((p) => !p)}
          aria-label={userPaused ? 'Play animation' : 'Pause animation'}>
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className="icon">
            {userPaused ? <path d="M8 5l11 7-11 7z" /> : <path d="M8 5v14M16 5v14" />}
          </svg>
          <span aria-hidden="true">{userPaused ? 'Play' : 'Pause'}</span>
        </button>
      )}
    </>
  );
}
