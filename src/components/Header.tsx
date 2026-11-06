import { useEffect, useRef, useState } from 'react';
import { NAV } from '../content/site';
import { Icon } from './primitives';
import { Logo } from './Logo';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Escape zamyka menu i oddaje fokus przyciskowi; klik poza menu również je zamyka.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const onPointer = (e: PointerEvent) => {
      const t = e.target as Node;
      if (!panelRef.current?.contains(t) && !toggleRef.current?.contains(t)) setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onPointer);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onPointer);
    };
  }, [open]);

  // Zamknij menu, gdy okno urośnie do układu desktopowego.
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 900px)');
    const onChange = () => mq.matches && setOpen(false);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className="site-header" data-scrolled={scrolled || open ? 'true' : 'false'}>
      <div className="container site-header__inner">
        <a className="site-header__logo" href="#start" aria-label={NAV.logoLabel}>
          <Logo variant="dark" />
        </a>

        <nav className="site-nav" aria-label="Główna">
          <ul className="site-nav__list">
            {NAV.links.map((l) => (
              <li key={l.href}>
                <a className="site-nav__link" href={l.href}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a className="btn btn--primary btn--small site-nav__cta" href="#formularz">
            {NAV.cta}
          </a>
        </nav>

        <button
          ref={toggleRef}
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="menu-mobilne"
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? 'close' : 'menu'} size={20} />
          <span>{open ? NAV.menuClose : NAV.menuOpen}</span>
        </button>
      </div>

      <div
        ref={panelRef}
        id="menu-mobilne"
        className="mobile-menu"
        hidden={!open}
      >
        <nav className="container" aria-label="Główna (menu mobilne)">
          <ul className="mobile-menu__list">
            {NAV.links.map((l) => (
              <li key={l.href}>
                <a className="mobile-menu__link" href={l.href} onClick={close}>
                  {l.label}
                  <Icon name="arrow" size={18} />
                </a>
              </li>
            ))}
          </ul>
          <a className="btn btn--primary mobile-menu__cta" href="#formularz" onClick={close}>
            {NAV.cta}
          </a>
        </nav>
      </div>
    </header>
  );
}
