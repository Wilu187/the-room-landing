import { useEffect, useRef, useState } from 'react';
import { MANIFEST } from '../content/site';
import { setupGallery, type GalleryApi } from '../lib/gallery';
import { Icon, stagger } from './primitives';

/** Dzieli punkt manifestu na nagłówek (pierwsze zdanie) i opis. */
function splitPoint(text: string): [string, string] {
  const m = text.match(/^(.+?[.:])\s+(.+)$/);
  if (!m || m[1].endsWith(':')) return [text, ''];
  return [m[1], m[2]];
}

const POINTS = MANIFEST.full.map(splitPoint);

export function Manifest() {
  const stageRef = useRef<HTMLDivElement>(null);
  const apiRef = useRef<GalleryApi | null>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const slots = Array.from(stage.querySelectorAll<HTMLElement>('.mcard-slot'));
    apiRef.current = setupGallery(stage, slots, setActive);
    return () => {
      apiRef.current?.destroy();
      apiRef.current = null;
    };
  }, []);

  return (
    <section id="manifest" className="section section--dark manifest on-dark" aria-labelledby="manifest-title">
      <div className="container">
        <div className="manifest__head" data-reveal>
          <img
            className="manifest__mark"
            src="/brand/the-room-sygnet-jasny.svg"
            alt=""
            width={44}
            height={44}
            loading="lazy"
          />
          <h2 id="manifest-title" className="manifest__title">
            {MANIFEST.title}
          </h2>
        </div>

        <ul className="manifest__theses">
          {MANIFEST.theses.map((t, i) => (
            <li key={t.title} className="thesis" data-reveal style={stagger(i)}>
              <h3 className="thesis__title">{t.title}</h3>
              <p className="thesis__body">{t.body}</p>
            </li>
          ))}
        </ul>

        <div className="manifest__full" data-reveal>
          <h3 className="manifest__full-heading">
            {MANIFEST.fullTitle} <span className="manifest__full-status">· {MANIFEST.fullStatus}</span>
          </h3>
        </div>
      </div>

      <div
        ref={stageRef}
        className="mgallery"
        role="region"
        aria-roledescription="karuzela"
        aria-label={MANIFEST.galleryLabel}
        tabIndex={0}
        data-reveal
      >
        <ol className="mgallery__track">
          {POINTS.map(([head, rest], i) => (
            <li key={head} className="mcard-slot">
              <article className="mcard">
                <span className="mcard__rule" aria-hidden="true" />
                <h4 className="mcard__title">{head}</h4>
                {rest && <p className="mcard__body">{rest}</p>}
              </article>
              <p className="mcard__num" aria-hidden="true">
                {i + 1}
              </p>
            </li>
          ))}
        </ol>
      </div>

      <div className="container mgallery__controls">
        <button type="button" className="mgallery__btn mgallery__btn--prev" onClick={() => apiRef.current?.go(-1)}>
          <Icon name="arrow" size={18} />
          <span className="sr-only">{MANIFEST.prev}</span>
        </button>
        <p className="mgallery__status" aria-live="polite">
          {MANIFEST.pointOf(active + 1, POINTS.length)}
        </p>
        <button type="button" className="mgallery__btn" onClick={() => apiRef.current?.go(1)}>
          <Icon name="arrow" size={18} />
          <span className="sr-only">{MANIFEST.next}</span>
        </button>
        <p className="mgallery__hint">{MANIFEST.galleryHint}</p>
      </div>

      <div className="container">
        <div className="manifest__rules" data-reveal>
          <h3 className="manifest__rules-title">{MANIFEST.rulesTitle}</h3>
          <ul className="manifest__rules-list">
            {MANIFEST.rules.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
