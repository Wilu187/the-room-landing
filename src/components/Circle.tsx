import { CIRCLE } from '../content/site';
import { Icon, stagger } from './primitives';

export function Circle() {
  return (
    <section id="krag" className="section circle" aria-labelledby="krag-title">
      <div className="container">
        <div className="grid section-head section-head--split">
          <h2 id="krag-title" className="section-title section-head__title" data-reveal>
            {CIRCLE.title}
          </h2>
          <p className="section-intro section-head__intro" data-reveal style={stagger(1)}>
            {CIRCLE.intro}
          </p>
        </div>

        <div className="levels">
          <div className="levels__head" aria-hidden="true">
            <span>{CIRCLE.labels.level}</span>
            <span />
            <span>{CIRCLE.labels.audience}</span>
            <span>{CIRCLE.labels.access}</span>
            <span />
          </div>
          <ol className="levels__list">
            {CIRCLE.levels.map((level, i) => (
              <li key={level.number} className="level" data-reveal style={stagger(i)}>
                <p className="level__number" aria-hidden="true">
                  {level.number}
                </p>
                <h3 className="level__name">
                  <span className="sr-only">{`${CIRCLE.labels.level} ${level.number}: `}</span>
                  {level.name}
                </h3>
                <dl className="level__facts">
                  <div className="level__fact">
                    <dt className="level__label">{CIRCLE.labels.audience}</dt>
                    <dd>{level.audience}</dd>
                  </div>
                  <div className="level__fact">
                    <dt className="level__label">{CIRCLE.labels.access}</dt>
                    <dd>
                      {level.access}
                      {level.status && (
                        <span className="level__status">
                          <span className="tag">
                            {level.status.label}: {level.status.value}
                          </span>
                        </span>
                      )}
                    </dd>
                  </div>
                </dl>
                <div className="level__action">
                  {level.action && (
                    <a className="text-link" href={level.action.href}>
                      {level.action.label}
                      <Icon name="arrow" size={16} />
                    </a>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
