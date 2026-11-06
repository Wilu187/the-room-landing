import { EDITORIAL, type Article } from '../content/site';
import { DANE, type Fillable } from '../content/do-uzupelnienia';
import { Fill, stagger } from './primitives';

function ArticleMeta({ article, author }: { article: Article; author: Fillable }) {
  return (
    <dl className="article__meta">
      <div>
        <dt className="sr-only">Obszar</dt>
        <dd className="article__pillar">{article.pillar}</dd>
      </div>
      <div>
        <dt className="sr-only">Status</dt>
        <dd>
          <span className="tag">{article.status}</span>
        </dd>
      </div>
      <div>
        <dt>{EDITORIAL.authorLabel}:</dt>
        <dd>
          <Fill field={author} />
        </dd>
      </div>
    </dl>
  );
}

export function Editorial() {
  const { featured, secondary } = EDITORIAL;
  return (
    <section id="redakcja" className="section editorial" aria-labelledby="redakcja-title">
      <div className="container">
        <div className="grid section-head section-head--split">
          <h2 id="redakcja-title" className="section-title section-head__title" data-reveal>
            {EDITORIAL.title}
          </h2>
          <p className="section-intro section-head__intro" data-reveal style={stagger(1)}>
            {EDITORIAL.intro}
          </p>
        </div>

        <h3 className="minor-heading" data-reveal>
          {EDITORIAL.pillarsTitle}
        </h3>
        <ul className="pillars">
          {EDITORIAL.pillars.map((p, i) => (
            <li key={p.name} className="pillar" data-reveal style={stagger(i)}>
              <p className="pillar__name">{p.name}</p>
              <p className="pillar__body">{p.body}</p>
            </li>
          ))}
        </ul>

        <h3 className="minor-heading editorial__articles-heading" data-reveal>
          {EDITORIAL.articlesTitle}
        </h3>
        <div className="grid articles">
          <article className="article article--featured" aria-labelledby="art-1" data-reveal>
            <h4 id="art-1" className="article__title">
              {featured.title}
            </h4>
            <p className="article__dek">{featured.dek}</p>
            <ArticleMeta article={featured} author={DANE.articleAuthors[0]} />
          </article>
          <div className="articles__side">
            {secondary.map((a, i) => (
              <article
                key={a.title}
                className="article article--small"
                aria-labelledby={`art-${i + 2}`}
                data-reveal
                style={stagger(i + 1)}
              >
                <h4 id={`art-${i + 2}`} className="article__title">
                  {a.title}
                </h4>
                <p className="article__dek">{a.dek}</p>
                <ArticleMeta article={a} author={DANE.articleAuthors[i + 1]} />
              </article>
            ))}
          </div>
        </div>

        <div className="publications" data-reveal>
          <h3 className="minor-heading">{EDITORIAL.publicationsTitle}</h3>
          <ul className="publications__list">
            {EDITORIAL.publications.map((p) => (
              <li key={p.name} className="publication">
                <p className="publication__name">{p.name}</p>
                <p className="publication__body">{p.body}</p>
                <p>
                  <span className="tag">{p.status}</span>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
