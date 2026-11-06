import { useEffect, useId, useRef, useState, type FormEvent, type ReactNode } from 'react';
import { FORM, INTENTS, MEETINGS } from '../content/site';
import { DANE } from '../content/do-uzupelnienia';
import { FORM_CONFIG, FORM_MODE } from '../config/form';
import { useInvitation, type InvitationValues } from '../lib/invitation';
import { Icon } from './primitives';

type FieldKey = 'name' | 'email' | 'firm';
type Errors = Partial<Record<FieldKey, string>>;
type Status = 'idle' | 'invalid' | 'demo-ok' | 'sending' | 'sent' | 'error';

const EMAIL_RE = /^[^\s@]+@[^\s@.]+(\.[^\s@.]+)+$/;

function validate(v: InvitationValues): Errors {
  const errors: Errors = {};
  const name = v.name.trim();
  // Dowolne litery (także polskie), spacje, łączniki i apostrofy są poprawne.
  if (!name) errors.name = FORM.errors.nameMissing;
  else if ((name.match(/\p{L}/gu) ?? []).length < 2) errors.name = FORM.errors.nameShort;
  const email = v.email.trim();
  if (!email) errors.email = FORM.errors.emailMissing;
  else if (!EMAIL_RE.test(email)) errors.email = FORM.errors.emailInvalid;
  if (!v.firm.trim()) errors.firm = FORM.errors.firmMissing;
  return errors;
}

const FIELD_IDS: Record<FieldKey, string> = {
  name: 'pole-imie',
  email: 'pole-email',
  firm: 'pole-kancelaria',
};

const FIELD_ORDER: FieldKey[] = ['name', 'email', 'firm'];

function meetingLabel(id: InvitationValues['meeting']) {
  const m = MEETINGS.items.find((x) => x.id === id);
  if (!m) return null;
  const status = MEETINGS.status[DANE.events[m.id].availability];
  return { format: m.format, topic: m.topic, status };
}

export function InvitationForm() {
  const { values, setField, presetCount } = useInvitation();
  const [status, setStatus] = useState<Status>('idle');
  const [attempted, setAttempted] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);
  const [announcement, setAnnouncement] = useState('');
  const [fresh, setFresh] = useState(false);
  const summaryRef = useRef<HTMLDivElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);
  const uid = useId();

  const errors = validate(values);
  const errorKeys = FIELD_ORDER.filter((k) => errors[k]);
  const visibleError = (k: FieldKey) =>
    attempted || (k === 'email' && emailTouched && values.email.trim() !== '') ? errors[k] : undefined;

  const meeting = meetingLabel(values.meeting);

  // Ustawienie formularza z innej sekcji: krótkie podświetlenie i komunikat dla czytników ekranu.
  useEffect(() => {
    if (presetCount === 0) return;
    const intent = INTENTS.find((i) => i.id === values.intent)?.label ?? '';
    const m = meetingLabel(values.meeting);
    setAnnouncement(m ? `Wybrano: ${m.format} - ${m.topic}` : `Wybrano: ${intent}`);
    setFresh(true);
    const t = window.setTimeout(() => setFresh(false), 1600);
    return () => window.clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [presetCount]);

  useEffect(() => {
    if (status === 'invalid') summaryRef.current?.focus();
    if (status === 'demo-ok' || status === 'sent' || status === 'error') {
      statusRef.current?.scrollIntoView({ block: 'nearest' });
    }
  }, [status]);

  const change = <K extends keyof InvitationValues>(key: K, value: InvitationValues[K]) => {
    setField(key, value);
    if (status === 'demo-ok' || status === 'sent' || status === 'error') setStatus('idle');
  };

  const clearMeeting = () => {
    setField('meeting', null);
    setAnnouncement(FORM.meetingCleared);
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === 'sending') return; // brak podwójnej wysyłki
    setAttempted(true);
    if (errorKeys.length > 0) {
      setStatus('invalid');
      // ponowne ustawienie, aby fokus wrócił do podsumowania również przy kolejnej próbie
      requestAnimationFrame(() => summaryRef.current?.focus());
      return;
    }
    if (FORM_MODE === 'demo') {
      setStatus('demo-ok');
      return;
    }
    setStatus('sending');
    const controller = new AbortController();
    const timer = window.setTimeout(() => controller.abort(), FORM_CONFIG.timeoutMs);
    try {
      const res = await fetch(FORM_CONFIG.endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          intencja: values.intent,
          spotkanie: values.meeting,
          imieNazwisko: values.name.trim(),
          email: values.email.trim(),
          kancelaria: values.firm.trim(),
          miasto: values.city.trim(),
          polecajacy: values.referrer.trim(),
          wiadomosc: values.message.trim(),
        }),
        signal: controller.signal,
      });
      setStatus(res.ok ? 'sent' : 'error');
    } catch {
      setStatus('error');
    } finally {
      window.clearTimeout(timer);
    }
  };

  const submitLabel = FORM_MODE === 'demo' ? FORM.demo.submit : status === 'sending' ? FORM.live.sending : FORM.live.submit;

  return (
    <form id="formularz" className="invite-form" noValidate onSubmit={onSubmit} aria-labelledby={`${uid}-title`}>
      <h3 id={`${uid}-title`} className="invite-form__title">
        {FORM.title}
      </h3>

      {status === 'invalid' && errorKeys.length > 0 && (
        <div className="error-summary" ref={summaryRef} tabIndex={-1} aria-labelledby={`${uid}-errors`}>
          <p id={`${uid}-errors`} className="error-summary__title">
            <Icon name="alert" size={18} />
            {FORM.errors.summary}
          </p>
          <ul>
            {errorKeys.map((k) => (
              <li key={k}>
                <a
                  href={`#${FIELD_IDS[k]}`}
                  onClick={(ev) => {
                    ev.preventDefault();
                    document.getElementById(FIELD_IDS[k])?.focus();
                  }}
                >
                  {errors[k]}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      <fieldset className="intent">
        <legend className="intent__legend">{FORM.intentLegend}</legend>
        <div className="intent__options">
          {INTENTS.map((opt) => (
            <label key={opt.id} className="intent__option">
              <input
                type="radio"
                name="intencja"
                value={opt.id}
                checked={values.intent === opt.id}
                onChange={() => change('intent', opt.id)}
                aria-describedby={`${uid}-hint-${opt.id}`}
              />
              <span className="intent__text">
                <span className="intent__label">{opt.label}</span>
                <span className="intent__hint" id={`${uid}-hint-${opt.id}`}>
                  {opt.hint}
                </span>
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      {meeting && (
        <div className="chosen-meeting" data-fresh={fresh ? 'true' : 'false'}>
          <p className="chosen-meeting__text">
            <span className="chosen-meeting__label">{FORM.selectedMeeting}:</span>{' '}
            <strong>{meeting.format}</strong>
            {' - '}
            {meeting.topic}{' '}
            <span className="chosen-meeting__status">({meeting.status})</span>
          </p>
          <div className="chosen-meeting__actions">
            <a className="chosen-meeting__action" href="#spotkania">
              {FORM.changeMeeting}
            </a>
            <button type="button" className="chosen-meeting__action" onClick={clearMeeting}>
              {FORM.removeMeeting}
            </button>
          </div>
          <input type="hidden" name="spotkanie" value={values.meeting ?? ''} />
        </div>
      )}

      <p className="sr-only" aria-live="polite">
        {announcement}
      </p>

      <div className="fields">
        <Field id={FIELD_IDS.name} label={FORM.fields.name.label} error={visibleError('name')} required>
          {(describedBy) => (
            <input
              id={FIELD_IDS.name}
              name="imieNazwisko"
              type="text"
              autoComplete="name"
              spellCheck={false}
              value={values.name}
              onChange={(e) => change('name', e.target.value)}
              aria-required="true"
              aria-invalid={visibleError('name') ? 'true' : undefined}
              aria-describedby={describedBy}
            />
          )}
        </Field>

        <Field id={FIELD_IDS.email} label={FORM.fields.email.label} error={visibleError('email')} required>
          {(describedBy) => (
            <input
              id={FIELD_IDS.email}
              name="email"
              type="email"
              inputMode="email"
              autoComplete="email"
              spellCheck={false}
              value={values.email}
              onChange={(e) => change('email', e.target.value)}
              onBlur={() => setEmailTouched(true)}
              aria-required="true"
              aria-invalid={visibleError('email') ? 'true' : undefined}
              aria-describedby={describedBy}
            />
          )}
        </Field>

        <Field
          id={FIELD_IDS.firm}
          label={FORM.fields.firm.label}
          help={FORM.fields.firm.help}
          error={visibleError('firm')}
          required
        >
          {(describedBy) => (
            <input
              id={FIELD_IDS.firm}
              name="kancelaria"
              type="text"
              autoComplete="organization"
              value={values.firm}
              onChange={(e) => change('firm', e.target.value)}
              aria-required="true"
              aria-invalid={visibleError('firm') ? 'true' : undefined}
              aria-describedby={describedBy}
            />
          )}
        </Field>

        <Field id="pole-miasto" label={FORM.fields.city.label} optional>
          {(describedBy) => (
            <input
              id="pole-miasto"
              name="miasto"
              type="text"
              autoComplete="address-level2"
              value={values.city}
              onChange={(e) => change('city', e.target.value)}
              aria-describedby={describedBy}
            />
          )}
        </Field>

        <Field id="pole-polecajacy" label={FORM.fields.referrer.label} help={FORM.fields.referrer.help} optional>
          {(describedBy) => (
            <input
              id="pole-polecajacy"
              name="polecajacy"
              type="text"
              autoComplete="off"
              value={values.referrer}
              onChange={(e) => change('referrer', e.target.value)}
              aria-describedby={describedBy}
            />
          )}
        </Field>

        <Field
          id="pole-wiadomosc"
          label={FORM.fields.message.label}
          help={FORM.fields.message.help}
          optional
          wide
        >
          {(describedBy) => (
            <textarea
              id="pole-wiadomosc"
              name="wiadomosc"
              rows={4}
              value={values.message}
              onChange={(e) => change('message', e.target.value)}
              aria-describedby={describedBy}
            />
          )}
        </Field>
      </div>

      {FORM_MODE === 'demo' && <p className="invite-form__notice">{FORM.demo.notice}</p>}

      <div className="invite-form__submit">
        <button
          type="submit"
          className="btn btn--primary invite-form__button"
          aria-disabled={status === 'sending' ? 'true' : undefined}
        >
          {submitLabel}
        </button>
      </div>

      <div ref={statusRef} role="status" aria-live="polite" className="invite-form__status-region">
        {status === 'demo-ok' && (
          <p className="form-status form-status--ok">
            <Icon name="check" size={20} />
            <span>{FORM.demo.success}</span>
          </p>
        )}
        {status === 'sent' && (
          <p className="form-status form-status--ok">
            <Icon name="check" size={20} />
            <span>{FORM.live.success}</span>
          </p>
        )}
        {status === 'error' && (
          <p className="form-status form-status--error">
            <Icon name="alert" size={20} />
            <span>{FORM.live.error}</span>
          </p>
        )}
      </div>
    </form>
  );
}

type FieldProps = {
  id: string;
  label: string;
  help?: string;
  error?: string;
  required?: boolean;
  optional?: boolean;
  wide?: boolean;
  children: (describedBy: string | undefined) => ReactNode;
};

function Field({ id, label, help, error, optional, wide, children }: FieldProps) {
  const helpId = help ? `${id}-pomoc` : undefined;
  const errorId = error ? `${id}-blad` : undefined;
  const describedBy = [errorId, helpId].filter(Boolean).join(' ') || undefined;
  return (
    <div className={`field${wide ? ' field--wide' : ''}${error ? ' field--error' : ''}`}>
      <label className="field__label" htmlFor={id}>
        {label}
        {optional && <span className="field__optional"> ({FORM.optional})</span>}
      </label>
      {help && (
        <p className="field__help" id={helpId}>
          {help}
        </p>
      )}
      {error && (
        <p className="field__error" id={errorId}>
          <Icon name="alert" size={16} />
          <span>{error}</span>
        </p>
      )}
      {children(describedBy)}
    </div>
  );
}
