import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react';
import type { Intent } from '../content/site';

export type MeetingId = 'summit-01' | 'kolacja-01';

export type InvitationValues = {
  intent: Intent;
  meeting: MeetingId | null;
  name: string;
  email: string;
  firm: string;
  city: string;
  referrer: string;
  message: string;
};

type InvitationContextValue = {
  values: InvitationValues;
  /** Zmienia jedno pole; pozostałe wpisane dane zostają nietknięte. */
  setField: <K extends keyof InvitationValues>(key: K, value: InvitationValues[K]) => void;
  /** Wywoływane przez CTA w innych sekcjach: ustawia intencję (i spotkanie), nie czyści danych. */
  preset: (intent: Intent, meeting?: MeetingId | null) => void;
  /** Numer kolejnego ustawienia z zewnątrz - formularz podświetla wtedy podsumowanie. */
  presetCount: number;
};

const InvitationContext = createContext<InvitationContextValue | null>(null);

const INITIAL: InvitationValues = {
  intent: 'krag',
  meeting: null,
  name: '',
  email: '',
  firm: '',
  city: '',
  referrer: '',
  message: '',
};

export function InvitationProvider({ children }: { children: ReactNode }) {
  const [values, setValues] = useState<InvitationValues>(INITIAL);
  const [presetCount, setPresetCount] = useState(0);

  const setField = useCallback<InvitationContextValue['setField']>((key, value) => {
    setValues((prev) => {
      const next = { ...prev, [key]: value };
      // Spotkanie należy do konkretnego formatu - zmiana intencji na inny format zdejmuje wybór.
      if (key === 'intent' && prev.meeting && !prev.meeting.startsWith(String(value))) {
        next.meeting = null;
      }
      return next;
    });
  }, []);

  const preset = useCallback<InvitationContextValue['preset']>((intent, meeting = null) => {
    setValues((prev) => ({ ...prev, intent, meeting }));
    setPresetCount((n) => n + 1);
  }, []);

  const value = useMemo(() => ({ values, setField, preset, presetCount }), [values, setField, preset, presetCount]);
  return <InvitationContext.Provider value={value}>{children}</InvitationContext.Provider>;
}

export function useInvitation() {
  const ctx = useContext(InvitationContext);
  if (!ctx) throw new Error('useInvitation must be used inside InvitationProvider');
  return ctx;
}
