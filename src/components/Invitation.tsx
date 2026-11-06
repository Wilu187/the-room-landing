import { useEffect, useRef } from 'react';
import { FORM, INVITATION } from '../content/site';
import { DANE } from '../content/do-uzupelnienia';
import { FORM_MODE } from '../config/form';
import { Fill, Icon } from './primitives';
import { InvitationForm } from './InvitationForm';

/**
 * Lewa kolumna (opis + FAQ) towarzyszy długiemu formularzowi. Gdy mieści się w oknie,
 * trzyma się pod nagłówkiem; gdy jest wyższa (np. po rozwinięciu odpowiedzi FAQ),
 * trzyma się dolnej krawędzi okna - rozwinięta treść nigdy nie znika pod krawędzią,
 * a kolumna nie przeskakuje w inne miejsce strony.
 */
function useStickyOffset() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => {
      const header = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--header-h')) || 76;
      let top = Math.min(header + 24, window.innerHeight - el.offsetHeight - 24);
      // Krawędź nagłówka nie tnie tytułu ani opisu w pół: przesuwamy ją do następnej granicy bloku
      // (tylko nad FAQ, żeby rozwinięta odpowiedź zawsze została na ekranie).
      const cut = header - top;
      if (cut > 0) {
        // offsetTop (nie getBoundingClientRect), bo animacja pojawiania się przesuwa bloki transformacją.
        const edges = ['.invitation__desc', '.invitation__process', '.faq']
          .map((sel) => el.querySelector<HTMLElement>(sel))
          .filter((block): block is HTMLElement => block?.offsetParent === el)
          .map((block) => block.offsetTop - 16);
        const next = edges.find((edge) => edge >= cut);
        if (next !== undefined) top = header - next;
      }
      el.style.setProperty('--intro-top', `${Math.round(top)}px`);
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    window.addEventListener('resize', update);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', update);
    };
  }, []);
  return ref;
}

export function Invitation() {
  const ref = useStickyOffset();
  return (
    <section id="zaproszenie" className="section invitation" aria-labelledby="zaproszenie-title">
      <div className="container grid invitation__grid">
        <div className="invitation__intro" ref={ref}>
          <h2 id="zaproszenie-title" className="section-title" data-reveal>
            {INVITATION.title}
          </h2>
          <p className="invitation__desc" data-reveal>
            {INVITATION.description}
          </p>

          <div className="invitation__process" data-reveal>
            <h3 className="minor-heading">{INVITATION.processTitle}</h3>
            <p>
              <Fill field={DANE.processAfterRequest} />
            </p>
            {FORM_MODE === 'demo' && <p className="invitation__demo-note">{INVITATION.processDemoNote}</p>}
          </div>

          <div className="faq" data-reveal>
            <h3 className="minor-heading">{INVITATION.faqTitle}</h3>
            <div className="faq__list">
              {INVITATION.faq.map((item) => (
                <details key={item.q} className="faq__item">
                  <summary className="faq__q">
                    <span>{item.q}</span>
                    <Icon name="chevron" size={18} />
                  </summary>
                  <div className="faq__a">
                    <p>
                      {item.a}
                      {item.fillable && (
                        <>
                          {' '}
                          <Fill field={DANE[item.fillable]} />
                        </>
                      )}
                    </p>
                    {item.demoNote && FORM_MODE === 'demo' && <p className="faq__demo">{item.demoNote}</p>}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>

        <div className="invitation__form">
          <InvitationForm />
          <div className="privacy-note">
            <p className="privacy-note__title">{FORM.privacy.title}</p>
            {FORM_MODE === 'demo' && <p>{FORM.privacy.body}</p>}
            <p>
              <Fill field={DANE.formPrivacyInfo} />{' '}
              <a href="#prywatnosc" className="privacy-note__link">
                {FORM.privacy.link}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
