import { HERO } from '../content/site';
import { PHOTOS } from '../content/images';
import { Icon, Photo, stagger } from './primitives';

/** Tytuł w dwóch wierszach (łamanie po przecinku); każdy wiersz wchodzi osobno spod progu. */
const TITLE_LINES = HERO.title.split(/(?<=,)\s+/);

/** Ściany ramy w kolejności rysowania: od progu wejścia, w górę, do środka sufitu. */
const WALLS = ['bl', 'br', 'l', 'r', 'tl', 'tr'] as const;

export function Hero() {
  return (
    <section id="start" className="hero" aria-labelledby="hero-title">
      <div className="container grid hero__grid">
        <div className="hero__text">
          <p className="rule-label hero__descriptor">{HERO.descriptor}</p>
          <h1 id="hero-title" className="hero__title">
            {TITLE_LINES.map((line, i) => (
              <span key={line} className="hero__line">
                <span className="hero__line-inner" style={stagger(i)}>
                  {line}
                </span>
                {i < TITLE_LINES.length - 1 ? ' ' : null}
              </span>
            ))}
          </h1>
          <p className="hero__lead">{HERO.lead}</p>
          <div className="hero__actions">
            <a className="btn btn--primary" href="#formularz">
              {HERO.cta}
            </a>
            <a className="text-link" href="#krag">
              {HERO.secondary}
              <Icon name="arrow" size={18} />
            </a>
          </div>
          <p className="hero__note">
            <span>{HERO.themeNoteLabel}</span>{' '}
            <a href="#temat-roku" className="hero__note-link">
              {HERO.themeNote}
            </a>
          </p>
        </div>

        <figure className="room-plate hero__plate" data-reveal>
          <span className="room-plate__walls" aria-hidden="true">
            {WALLS.map((w) => (
              <span key={w} className={`room-plate__wall room-plate__wall--${w}`} />
            ))}
          </span>
          <div className="room-plate__frame">
            <Photo
              photo={PHOTOS.hero}
              priority
              sizes="(min-width: 900px) min(40vw, 500px), calc(100vw - 40px)"
              className="room-plate__img"
            />
          </div>
          <figcaption className="room-plate__caption">{HERO.photoCaption}</figcaption>
        </figure>
      </div>
    </section>
  );
}
