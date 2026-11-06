/**
 * Jednorazowe wejścia sekcji (progressive enhancement).
 * Treść jest widoczna domyślnie; ukrywamy ją dopiero, gdy wiadomo, że obserwator działa,
 * i nigdy nie ukrywamy tego, co już jest na ekranie.
 */
export function setupReveal(): () => void {
  const root = document.documentElement;
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return () => {};
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return () => {};

  let observer: IntersectionObserver | null = null;
  try {
    const items = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
    const vh = window.innerHeight;
    for (const el of items) {
      const r = el.getBoundingClientRect();
      if (r.top < vh * 0.92) el.classList.add('is-revealed');
    }
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer?.unobserve(entry.target);
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    );
    for (const el of items) if (!el.classList.contains('is-revealed')) observer.observe(el);
    root.classList.add('reveal-on');
  } catch {
    root.classList.remove('reveal-on');
  }

  // Zabezpieczenie: jeśli coś pójdzie nie tak (np. druk, zatrzymana karta), po 4 s pokaż wszystko.
  const failSafe = window.setTimeout(() => {
    document.querySelectorAll('[data-reveal]:not(.is-revealed)').forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.bottom < 0) el.classList.add('is-revealed');
    });
  }, 4000);
  const onPrint = () => document.querySelectorAll('[data-reveal]').forEach((el) => el.classList.add('is-revealed'));
  window.addEventListener('beforeprint', onPrint);

  return () => {
    observer?.disconnect();
    window.clearTimeout(failSafe);
    window.removeEventListener('beforeprint', onPrint);
  };
}
