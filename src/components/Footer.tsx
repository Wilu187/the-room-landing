import { useEffect, type ReactNode, type SyntheticEvent } from 'react';
import { FOOTER } from '../content/site';
import { DANE } from '../content/do-uzupelnienia';
import { PHOTO_LIST } from '../content/images';
import { Fill, Icon } from './primitives';
import { Logo } from './Logo';

/** Otwiera rozwinięcie w stopce, gdy prowadzi do niego link (np. „Informacja o prywatności”). */
function useOpenDetailsFromHash() {
  useEffect(() => {
    const openTarget = (hash: string) => {
      const el = hash ? document.getElementById(decodeURIComponent(hash.slice(1))) : null;
      if (el instanceof HTMLDetailsElement) el.open = true;
    };
    openTarget(window.location.hash);
    const onHash = () => openTarget(window.location.hash);
    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest?.('a[href^="#"]');
      if (a) openTarget(a.getAttribute('href') ?? '');
    };
    window.addEventListener('hashchange', onHash);
    document.addEventListener('click', onClick);
    return () => {
      window.removeEventListener('hashchange', onHash);
      document.removeEventListener('click', onClick);
    };
  }, []);
}

/** Po otwarciu przewija stronę tak, by cała rozwinięta treść była widoczna (stopka jest na samym dole). */
function revealOnOpen(e: SyntheticEvent<HTMLDetailsElement>) {
  const el = e.currentTarget;
  if (!el.open) return;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  // po zakończeniu rozwijania (220 ms), gdy znana jest pełna wysokość
  window.setTimeout(() => {
    const r = el.getBoundingClientRect();
    const overflow = r.bottom + 16 - window.innerHeight;
    if (overflow > 0) window.scrollBy({ top: overflow, behavior: reduce ? 'auto' : 'smooth' });
  }, reduce ? 0 : 240);
}

function FooterDetails({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <details id={id} className="footer-details" onToggle={revealOnOpen}>
      <summary className="footer-details__summary">
        <span>{title}</span>
        <Icon name="chevron" size={16} />
      </summary>
      <div className="footer-details__body">{children}</div>
    </details>
  );
}

export function Footer() {
  useOpenDetailsFromHash();
  const email = DANE.contactEmail.value;

  return (
    <footer className="site-footer on-dark">
      <div className="container">
        <div className="grid site-footer__top">
          <div className="site-footer__brand">
            <span role="img" aria-label="THE ROOM">
              <Logo variant="light" className="site-footer__logo" />
            </span>
            <p className="site-footer__line">{FOOTER.closing}</p>
          </div>
          <dl className="site-footer__contact">
            <div>
              <dt>{FOOTER.organizerLabel}</dt>
              <dd>
                <Fill field={DANE.organizer} />
              </dd>
            </div>
            <div>
              <dt>{FOOTER.contactLabel}</dt>
              <dd>{email ? <a href={`mailto:${email}`}>{email}</a> : <Fill field={DANE.contactEmail} />}</dd>
            </div>
          </dl>
        </div>

        <div className="site-footer__details">
          <FooterDetails id="nota-prawna" title={FOOTER.legal.title}>
            <p className="footer-details__status">{FOOTER.draftStatus}</p>
            <p>
              <Fill field={DANE.organizerRegistry} />
            </p>
            <p>
              <Fill field={DANE.legalNote} />
            </p>
          </FooterDetails>

          <FooterDetails id="prywatnosc" title={FOOTER.privacy.title}>
            <p className="footer-details__status">{FOOTER.draftStatus}</p>
            {FOOTER.privacy.facts.map((f) => (
              <p key={f}>{f}</p>
            ))}
            <p>
              <Fill field={DANE.privacyAdmin} />
            </p>
            <p>
              <Fill field={DANE.privacyClause} />
            </p>
          </FooterDetails>

          <FooterDetails id="partnerzy" title={FOOTER.partners.title}>
            <p className="footer-details__status">{FOOTER.draftStatus}</p>
            {/* Lista marek pokazuje się dopiero razem z potwierdzonym opisem współpracy. */}
            {DANE.partnersDescription.value && (
              <ul className="partners">
                {DANE.partners.map((p) => (
                  <li key={p.name}>
                    {p.url ? (
                      <a href={p.url} rel="noopener">
                        {p.name}
                      </a>
                    ) : (
                      <span>{p.name}</span>
                    )}
                  </li>
                ))}
              </ul>
            )}
            <p>
              <Fill field={DANE.partnersDescription} />
            </p>
          </FooterDetails>

          <FooterDetails id="fotografie" title={FOOTER.photos.title}>
            <p>{FOOTER.photos.intro}</p>
            <ul className="credits">
              {PHOTO_LIST.map((p) => (
                <li key={p.name}>
                  <a href={p.credit.sourceUrl} rel="noopener">
                    {p.credit.author}
                  </a>{' '}
                  — {p.credit.usage}
                </li>
              ))}
            </ul>
            <p>
              <a href={FOOTER.photos.licenseUrl} rel="noopener">
                {FOOTER.photos.license}
              </a>
            </p>
          </FooterDetails>
        </div>

        <p className="site-footer__legal">
          © {FOOTER.year} THE ROOM
        </p>
      </div>
    </footer>
  );
}
