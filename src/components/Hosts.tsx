import { HOSTS } from '../content/site';
import { DANE } from '../content/do-uzupelnienia';
import { Fill, stagger } from './primitives';

/** Inicjały zamiast portretu, dopóki zdjęcie nie zostanie dostarczone. */
const initials = (name: string) =>
  name
    .split(/[\s\u00a0-]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join('');

export function Hosts() {
  return (
    <section id="gospodarze" className="section hosts" aria-labelledby="gospodarze-title">
      <div className="container">
        <div className="grid section-head">
          <h2 id="gospodarze-title" className="section-title section-head__title" data-reveal>
            {HOSTS.title}
          </h2>
          <p className="section-intro section-head__intro" data-reveal style={stagger(1)}>
            {HOSTS.intro}
          </p>
        </div>

        <ul className="hosts__list">
          {DANE.hosts.map((h, i) => (
            <li key={i} className="host" data-reveal style={stagger(i)}>
              <div className="host__portrait">
                {h.portrait ? (
                  <img src={h.portrait} alt={h.name.value ?? ''} width={320} height={400} loading="lazy" />
                ) : h.name.value ? (
                  <span className="host__monogram" aria-hidden="true">
                    {initials(h.name.value)}
                  </span>
                ) : (
                  <span className="host__monogram host__monogram--placeholder">
                    <span className="ph">{HOSTS.initialsPlaceholder}</span>
                  </span>
                )}
              </div>
              <div className="host__text">
                <h3 className="host__name">
                  <Fill field={h.name} />
                </h3>
                <p className="host__role">
                  <Fill field={h.role} />
                </p>
                <p className="host__experience">
                  <Fill field={h.experience} />
                </p>
                <p className="host__motivation">
                  <Fill field={h.motivation} />
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
