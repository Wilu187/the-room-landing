import { THEME } from '../content/site';
import { stagger } from './primitives';

export function ThemeOfYear() {
  return (
    <section id="temat-roku" className="section theme" aria-labelledby="temat-roku-title">
      <div className="container">
        <div className="grid theme__head">
          <div className="theme__title-block" data-reveal>
            <p className="rule-label">{THEME.label}</p>
            <h2 id="temat-roku-title" className="theme__title">
              {THEME.title}
            </h2>
          </div>
          <p className="theme__body" data-reveal style={stagger(1)}>
            {THEME.body}
          </p>
        </div>

        <div className="theme__questions">
          <h3 className="minor-heading" data-reveal>
            {THEME.questionsTitle}
          </h3>
          <ul className="theme__list">
            {THEME.questions.map((q, i) => (
              <li key={q} className="theme__item" data-reveal style={stagger(i)}>
                <p>{q}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
