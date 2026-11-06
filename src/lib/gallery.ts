/**
 * Galeria na łuku (inspiracja: React Bits „Circular Gallery”), na zwykłych elementach HTML.
 * Karty jadą po łuku okręgu i obracają się stycznie do niego; pętla jest nieskończona.
 * Sterowanie: przeciąganie (z rozpędem i dociąganiem), poziomy gest touchpada, strzałki, przyciski.
 * Pionowe kółko myszy NIE jest przejmowane — strona przewija się normalnie.
 */
export type GalleryApi = { go: (delta: number) => void; destroy: () => void };

const wrap = (v: number, n: number) => ((v % n) + n) % n;

export function setupGallery(
  stage: HTMLElement,
  slots: HTMLElement[],
  onActive: (index: number) => void,
): GalleryApi {
  const n = slots.length;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let spacing = 1;
  let half = 1;
  let depth = 1;
  let current = 0;
  let target = 0;
  let raf = 0;
  let last = 0;
  let active = -1;
  let snapTimer = 0;

  const measure = () => {
    const slot = slots[0];
    const gap = parseFloat(getComputedStyle(stage).getPropertyValue('--gallery-gap')) || 40;
    const w = slot.offsetWidth;
    const prev = spacing;
    spacing = w + gap;
    half = Math.max(stage.clientWidth / 2, w);
    depth = Math.min(130, Math.max(36, stage.clientWidth * 0.07));
    stage.style.setProperty('--gallery-h', `${slot.offsetHeight + depth + 24}px`);
    // zachowaj pozycję karty przy zmianie rozmiaru
    const idx = target / prev;
    target = current = idx * spacing;
  };

  const place = () => {
    const L = n * spacing;
    const radius = (half * half + depth * depth) / (2 * depth);
    for (let i = 0; i < n; i++) {
      const x = wrap(i * spacing - current + L / 2, L) - L / 2;
      const reach = Math.min(Math.abs(x), half, radius * 0.999);
      const arc = radius - Math.sqrt(radius * radius - reach * reach);
      // poza ekranem tor jest dalej prostą styczną — karta nie „zawraca”
      const extra = Math.max(0, Math.abs(x) - half);
      const angle = Math.sign(x) * Math.asin(reach / radius);
      const y = arc + extra * Math.tan(Math.abs(angle));
      const el = slots[i];
      el.style.transform = `translate3d(calc(-50% + ${x.toFixed(2)}px), ${y.toFixed(2)}px, 0) rotate(${angle.toFixed(4)}rad)`;
      el.style.visibility = Math.abs(x) > half + spacing * 1.5 ? 'hidden' : 'visible';
    }
    const now = wrap(Math.round(current / spacing), n);
    if (now !== active) {
      active = now;
      slots.forEach((s, i) => s.toggleAttribute('data-active', i === active));
      onActive(active);
    }
  };

  const frame = (t: number) => {
    const dt = last ? Math.min(0.05, (t - last) / 1000) : 1 / 60;
    last = t;
    const follow = reduce ? 1 : 1 - Math.pow(1 - 0.09, dt * 60);
    current += (target - current) * follow;
    if (Math.abs(target - current) < 0.05) current = target;
    place();
    if (current !== target || drag) raf = requestAnimationFrame(frame);
    else {
      raf = 0;
      last = 0;
    }
  };
  const kick = () => {
    if (!raf) raf = requestAnimationFrame(frame);
  };
  const snap = () => {
    target = Math.round(target / spacing) * spacing;
    kick();
  };
  const go = (delta: number) => {
    target = (Math.round(target / spacing) + delta) * spacing;
    kick();
  };

  /* przeciąganie */
  let drag: null | { id: number; x: number; y: number; start: number; decided: boolean; lx: number; lt: number; v: number } = null;
  const down = (e: PointerEvent) => {
    if (e.button !== 0) return;
    drag = { id: e.pointerId, x: e.clientX, y: e.clientY, start: target, decided: e.pointerType === 'mouse', lx: e.clientX, lt: e.timeStamp, v: 0 };
    if (drag.decided) stage.setPointerCapture(e.pointerId);
  };
  const move = (e: PointerEvent) => {
    if (!drag || e.pointerId !== drag.id) return;
    const dx = e.clientX - drag.x;
    const dy = e.clientY - drag.y;
    if (!drag.decided) {
      if (Math.abs(dx) < 6 && Math.abs(dy) < 6) return;
      if (Math.abs(dy) > Math.abs(dx)) {
        drag = null; // gest pionowy — to przewijanie strony
        return;
      }
      drag.decided = true;
      stage.setPointerCapture(e.pointerId);
    }
    if (Math.abs(dx) > 3) stage.classList.add('is-dragging');
    const dt = Math.max(1, e.timeStamp - drag.lt);
    drag.v = 0.8 * ((e.clientX - drag.lx) / dt) + 0.2 * drag.v;
    drag.lx = e.clientX;
    drag.lt = e.timeStamp;
    target = drag.start - dx;
    kick();
  };
  const up = (e: PointerEvent) => {
    if (!drag || e.pointerId !== drag.id) return;
    if (drag.decided && !reduce) target -= drag.v * 180; // rozpęd
    drag = null;
    stage.classList.remove('is-dragging');
    snap();
  };

  /* poziomy gest touchpada / shift + kółko */
  const wheel = (e: WheelEvent) => {
    const dx = e.shiftKey ? e.deltaX || e.deltaY : e.deltaX;
    if (!dx) return;
    if (!e.shiftKey && Math.abs(e.deltaX) <= Math.abs(e.deltaY)) return;
    e.preventDefault();
    target += dx;
    kick();
    window.clearTimeout(snapTimer);
    snapTimer = window.setTimeout(snap, 140);
  };

  /* klawiatura (fokus na galerii) */
  const key = (e: KeyboardEvent) => {
    if (e.key === 'ArrowRight') go(1);
    else if (e.key === 'ArrowLeft') go(-1);
    else if (e.key === 'Home') go(-wrap(Math.round(target / spacing), n));
    else if (e.key === 'End') go(n - 1 - wrap(Math.round(target / spacing), n));
    else return;
    e.preventDefault();
  };

  const ro = new ResizeObserver(() => {
    measure();
    place();
  });
  stage.addEventListener('pointerdown', down);
  stage.addEventListener('pointermove', move);
  stage.addEventListener('pointerup', up);
  stage.addEventListener('pointercancel', up);
  stage.addEventListener('wheel', wheel, { passive: false });
  stage.addEventListener('keydown', key);
  stage.setAttribute('data-live', 'true');
  measure();
  place();
  ro.observe(stage);

  return {
    go,
    destroy() {
      ro.disconnect();
      cancelAnimationFrame(raf);
      window.clearTimeout(snapTimer);
      stage.removeEventListener('pointerdown', down);
      stage.removeEventListener('pointermove', move);
      stage.removeEventListener('pointerup', up);
      stage.removeEventListener('pointercancel', up);
      stage.removeEventListener('wheel', wheel);
      stage.removeEventListener('keydown', key);
      stage.removeAttribute('data-live');
      slots.forEach((s) => {
        s.style.transform = '';
        s.style.visibility = '';
      });
    },
  };
}
