import { useEffect, useRef } from 'react';
import { INTRO } from '../content/site';
import { setupIntro } from '../lib/intro';

/**
 * Wejście na stronę: na jasnym tle rysuje się pokój z sygnetu, jego wnętrze gaśnie, prawe skrzydło drzwi
 * otwiera się na zawiasie (jak na rzucie architekta) i do ciemnego pokoju wpada jasne światło; pojawia się
 * logotyp. Przy przewijaniu pokój ciepło się zapala i przechodzimy przez drzwi do strony. Geometria w jednostkach logo (470.54 × 91).
 *
 * Widoczne tylko, gdy skrypt w <head> ustawi html.intro-on (JS działa i wejście nie jest z linku do sekcji).
 */
export function Intro() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current || !document.documentElement.classList.contains('intro-on')) return;
    return setupIntro(ref.current);
  }, []);

  return (
    <section className="intro" ref={ref} aria-label={INTRO.label}>
      <div className="intro__stage">
        <svg className="intro__svg" role="img" aria-label={INTRO.mark}>
          <defs>
            <linearGradient id="intro-beam-grad" gradientUnits="userSpaceOnUse" x1="0" y1="91" x2="0" y2="6">
              <stop offset="0" stopColor="#f3efe8" stopOpacity="0.62" />
              <stop offset="0.55" stopColor="#e4ddd2" stopOpacity="0.16" />
              <stop offset="1" stopColor="#e4ddd2" stopOpacity="0" />
            </linearGradient>
            <clipPath id="intro-room-clip">
              <rect x="0.75" y="0.75" width="89.5" height="89.5" />
            </clipPath>
            <linearGradient id="intro-wm-grad" gradientUnits="userSpaceOnUse" x1="78" y1="0" x2="118" y2="0">
              <stop offset="0" stopColor="#fff" />
              <stop offset="1" stopColor="#000" />
            </linearGradient>
            <mask id="intro-wm-mask" maskUnits="userSpaceOnUse" x="100" y="-20" width="400" height="140">
              <rect x="100" y="-20" width="400" height="140" fill="url(#intro-wm-grad)" />
            </mask>
          </defs>
          <g data-intro="world">
            {/* zaciemnione wnętrze pokoju: gaśnie, gdy ściany się zamkną; ciepło zapala się przy przewijaniu */}
            <rect data-intro="room" x="0.75" y="0.75" width="89.5" height="89.5" fill="#2e2721" opacity="0" />
            {/* jasne światło z zewnątrz wpada przez otwarte drzwi do środka */}
            <polygon
              data-intro="spill"
              clipPath="url(#intro-room-clip)"
              points="19.35,91 71.65,91 92,4 -1,4"
              fill="url(#intro-beam-grad)"
              opacity="0"
            />
            {/* ściany: jedna linia od progu dookoła z powrotem do progu (jak w dostarczonym sygnecie) */}
            <path
              data-intro="walls"
              d="M 19.35 90.25 L 0.75 90.25 L 0.75 0.75 L 90.25 0.75 L 90.25 90.25 L 71.65 90.25"
              fill="none"
              stroke="#2e2721"
              strokeWidth="1.5"
              strokeLinejoin="miter"
              strokeMiterlimit="20"
            />
            {/* łuk otwarcia drzwi, jak na rzucie architektonicznym */}
            <path
              data-intro="trace"
              fill="none"
              stroke="#f3efe8"
              strokeWidth="1"
              strokeDasharray="2 4"
              vectorEffect="non-scaling-stroke"
              opacity="0"
            />
            {/* lewa, cienka linia Λ (50%) — pojawia się na końcu */}
            <polygon data-intro="left" points="42.31,54.60 43.96,54.60 27.37,91.00 25.72,91.00" fill="#f3efe8" opacity="0" />
            {/* prawe ramię Λ = jedyne skrzydło drzwi */}
            <polygon data-intro="door" fill="#f3efe8" visibility="hidden" />
            {/* logotyp z dostarczonego pliku; maska odsłania tylko napis (sygnet z pliku jest ukryty) */}
            <g data-intro="word" mask="url(#intro-wm-mask)">
              <image href="/brand/the-room-logo-ciemny.svg" x="0" y="0" width="470.54" height="91" />
            </g>
          </g>
        </svg>

        <div className="intro__text" data-intro="text">
          <p className="intro__line">{INTRO.line}</p>
          <button className="intro__enter" type="button" data-intro="enter">
            <span className="intro__enter-label">{INTRO.enter}</span>
            <span className="intro__cue" aria-hidden="true" />
          </button>
          <p className="intro__hint">{INTRO.hint}</p>
        </div>
      </div>
    </section>
  );
}
