import { MEETINGS } from '../content/site';
import { DANE } from '../content/do-uzupelnienia';
import { PHOTOS } from '../content/images';
import { useInvitation } from '../lib/invitation';
import { Fill, Icon, Photo, stagger } from './primitives';

const PHOTO_BY_ID = {
  'summit-01': PHOTOS.summit,
  'kolacja-01': PHOTOS.kolacja,
} as const;

export function Meetings() {
  const { preset } = useInvitation();

  return (
    <section id="spotkania" className="section meetings" aria-labelledby="spotkania-title">
      <div className="container">
        <div className="grid section-head">
          <h2 id="spotkania-title" className="section-title section-head__title" data-reveal>
            {MEETINGS.title}
          </h2>
          <p className="section-intro section-head__intro" data-reveal style={stagger(1)}>
            {MEETINGS.intro}
          </p>
        </div>

        <div className="grid meetings__list">
          {MEETINGS.items.map((m, i) => {
            const data = DANE.events[m.id];
            const status = MEETINGS.status[data.availability];
            const action = MEETINGS.action[data.availability];
            const titleId = `${m.id}-title`;
            return (
              <article
                key={m.id}
                id={m.id}
                className={`meeting meeting--${m.intent}`}
                aria-labelledby={titleId}
                data-reveal
                style={stagger(i)}
              >
                <figure className="meeting__photo">
                  <Photo
                    photo={PHOTO_BY_ID[m.id]}
                    sizes={m.intent === 'summit' ? '(min-width: 900px) 56vw, 100vw' : '(min-width: 900px) 38vw, 100vw'}
                  />
                  <figcaption className="meeting__caption">{MEETINGS.photoCaption}</figcaption>
                </figure>

                <div className="meeting__body">
                  <h3 id={titleId} className="meeting__format">
                    {m.format}
                  </h3>
                  <p className="meeting__topic">{m.topic}</p>
                  <p className="meeting__topic-status">
                    <span className="tag">{m.topicStatus}</span>
                  </p>
                  <p className="meeting__desc">{m.description}</p>

                  <dl className="meeting__facts">
                    <div>
                      <dt>{MEETINGS.labels.city}</dt>
                      <dd>
                        <Fill field={data.city} />
                      </dd>
                    </div>
                    <div>
                      <dt>{MEETINGS.labels.date}</dt>
                      <dd>
                        <Fill field={data.date} />
                      </dd>
                    </div>
                    <div>
                      <dt>{MEETINGS.labels.host}</dt>
                      <dd>
                        <Fill field={data.host} />
                      </dd>
                    </div>
                    <div>
                      <dt>{MEETINGS.labels.seats}</dt>
                      <dd>
                        <Fill field={data.seats} />
                      </dd>
                    </div>
                  </dl>

                  <div className="meeting__footer">
                    <p className="meeting__status">
                      <span className="meeting__status-mark" aria-hidden="true" />
                      {status}
                    </p>
                    <a
                      className="btn btn--outline btn--small meeting__cta"
                      href="#formularz"
                      onClick={() => preset(m.intent, m.id)}
                      aria-describedby={titleId}
                    >
                      {action}
                      <Icon name="arrow" size={16} />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <p className="meetings__note" data-reveal>
          {MEETINGS.note}
        </p>
      </div>
    </section>
  );
}
