/**
 * Wejście na stronę — sterowanie (do komponentu Intro).
 *
 * Część 1 (sama, ok. 4,7 s): ściany rysują się od progu, zamknięte skrzydło drzwi rysuje się wzdłuż progu,
 * prawe skrzydło obraca się na zawiasie (sztywna bryła, łuk otwarcia jak na rzucie), pojawia się cienka lewa
 * linia, sygnet przesuwa się w układ logo i odsłania się napis.
 * Tło jest jasne przez cały czas; ciemne jest tylko wnętrze pokoju, do którego przez drzwi wpada światło.
 * Część 2 (przewijanie): pokój ciepło się zapala (brąz → glina → kamienna biel), kamera przechodzi przez drzwi,
 * a na przypiętą scenę wjeżdża treść strony.
 *
 * Wszystko imperatywnie na SVG (poza stanem Reacta), żeby 60 kl./s nie przechodziło przez render.
 * Geometria w jednostkach logo (470.54 × 91), zgodna z dostarczonymi plikami w /public/brand.
 */

type Pt = [number, number];
type Camera = { ox: number; oy: number; ax: number; ay: number; s: number };

const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const seg = (t: number, [a, b]: readonly [number, number]) => clamp((t - a) / (b - a));
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const easeInOut = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
const easeOut = (t: number) => 1 - Math.pow(1 - t, 4);
const smoother = (t: number) => t * t * t * (t * (t * 6 - 15) + 10);

/** Krzywa jak w CSS cubic-bezier. */
const bezier = (x1: number, y1: number, x2: number, y2: number) => (x: number) => {
  if (x <= 0) return 0;
  if (x >= 1) return 1;
  const cx = 3 * x1, bx = 3 * (x2 - x1) - cx, ax = 1 - cx - bx;
  const cy = 3 * y1, by = 3 * (y2 - y1) - cy, ay = 1 - cy - by;
  let u = x;
  for (let i = 0; i < 8; i++) {
    const err = ((ax * u + bx) * u + cx) * u - x;
    const d = (3 * ax * u + 2 * bx) * u + cx;
    if (Math.abs(err) < 1e-5 || d === 0) break;
    u = clamp(u - err / d);
  }
  return ((ay * u + by) * u + cy) * u;
};
/** Drzwi: spokojne pchnięcie, długie wyhamowanie. */
const doorEase = bezier(0.55, 0, 0.15, 1);

const STONE: readonly number[] = [243, 239, 232];
const UMBER: readonly number[] = [46, 39, 33];
const WARM: readonly number[] = [190, 156, 128];
const blend = (a: readonly number[], b: readonly number[], t: number) =>
  `rgb(${a.map((v, i) => Math.round(lerp(v, b[i], t))).join(' ')})`;
const mix = (t: number) => blend(STONE, UMBER, t);

/* Prawe ramię Λ = jedyne skrzydło drzwi, obracane wokół zawiasu (stopy ramienia na progu).
   Zamknięte leży wzdłuż progu; obrót o ≈ 63,7° sadza je dokładnie w kształcie z sygnetu. */
const HINGE: Pt = [63.8, 91];
const DOOR: Pt[] = [[43.96, 54.6], [47.68, 54.6], [65.28, 91], [62.32, 91], [44.71, 54.6]];
const DOOR_TIP: Pt = [45.82, 54.6];
const SWING = Math.atan2(54.6 - 91, 45.82 - 63.8) + Math.PI;

const rotate = ([x, y]: Pt, phi: number): Pt => {
  const c = Math.cos(phi), s = Math.sin(phi), dx = x - HINGE[0], dy = y - HINGE[1];
  return [HINGE[0] + dx * c - dy * s, HINGE[1] + dx * s + dy * c];
};
const doorPoints = (q: number, grow: number) =>
  DOOR.map((p) => {
    let [x, y] = rotate(p, -SWING * (1 - q));
    if (grow < 1) x = HINGE[0] + (x - HINGE[0]) * grow; // zamknięte skrzydło rysuje się od zawiasu wzdłuż progu
    return `${x.toFixed(3)},${y.toFixed(3)}`;
  }).join(' ');
const doorArc = (q: number) => {
  if (q <= 0) return '';
  let out = '';
  for (let i = 0; i <= 40; i++) {
    const [x, y] = rotate(DOOR_TIP, -SWING * (1 - (q * i) / 40));
    out += `${i ? ' L ' : 'M '}${x.toFixed(3)} ${y.toFixed(3)}`;
  }
  return out;
};

/** Oś czasu części 1 (ms). */
const T = {
  walls: [250, 1350],
  doors: [1300, 1650],
  open: [1800, 3000],
  left: [2850, 3450],
  lock: [3200, 4050],
  word: [3400, 4350],
  text: [3800, 4550],
  traceOut: [3300, 4000],
  end: 4650,
} as const;

export function setupIntro(root: HTMLElement): () => void {
  const html = document.documentElement;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const part = <E extends Element>(name: string) => root.querySelector<E>(`[data-intro="${name}"]`);

  const stage = root.querySelector<HTMLElement>('.intro__stage');
  const svg = root.querySelector<SVGSVGElement>('.intro__svg');
  const world = part<SVGGElement>('world');
  const walls = part<SVGPathElement>('walls');
  const room = part<SVGRectElement>('room');
  const spill = part<SVGPolygonElement>('spill');
  const trace = part<SVGPathElement>('trace');
  const leftLine = part<SVGPolygonElement>('left');
  const door = part<SVGPolygonElement>('door');
  const word = part<SVGGElement>('word');
  const wmGrad = root.querySelector<SVGLinearGradientElement>('#intro-wm-grad');
  const text = part<HTMLElement>('text');
  const enter = part<HTMLButtonElement>('enter');
  const main = document.getElementById('tresc');
  const hero = document.getElementById('start');
  const themeMeta = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');
  if (!stage || !svg || !world || !walls || !room || !spill || !trace || !leftLine || !door || !word || !wmGrad || !text || !enter || !main || !hero) {
    html.classList.remove('intro-on');
    return () => {};
  }

  const WALL_LEN = walls.getTotalLength();
  walls.style.strokeDasharray = `${WALL_LEN}`;

  /* ---------- układ ---------- */
  let W = 0, H = 0, k = 1, big = 1.9, lockX = 0, zoomMax = 40;
  const layout = () => {
    W = stage.clientWidth;
    H = stage.clientHeight;
    svg.setAttribute('viewBox', `0 0 ${W} ${H}`);
    const narrow = W < 700;
    const lockW = narrow ? W * 0.8 : Math.min(W * 0.48, 540);
    k = lockW / 470.54;
    big = narrow ? 1.85 : 1.9;
    lockX = (W - lockW) / 2;
    const lockY = H * 0.44 - (91 * k) / 2;
    // kadr końcowy: ±5 jednostek w pionie i ±8 w poziomie wokół (45.3, 81) — czysto w pokoju, między skrzydłami
    zoomMax = Math.max(H / 10, W / 16) / k;
    text.style.setProperty('--text-top', `${lockY + 91 * k + (narrow ? 36 : 48)}px`);
  };

  /* ---------- kamera ---------- */
  const autoCamera = (q: number): Camera => {
    const e = easeInOut(q);
    return { ox: 45.5, oy: 45.5, ax: lerp(W / 2, lockX + 45.5 * k, e), ay: H * 0.44, s: k * Math.pow(big, 1 - e) };
  };
  const dollyDistance = () => H * 1.05;
  const contentTop = () => main.getBoundingClientRect().top;

  /* ---------- stan ---------- */
  let t = reduced ? T.end : 0;
  let playing = !reduced;
  let speed = 1;
  let last = 0;
  let raf = 0;

  // Strona otwarta już przewinięta (przywrócona pozycja po odświeżeniu): bez odgrywania części 1 od początku.
  if (window.scrollY > 4) {
    t = T.end;
    playing = false;
  }

  const render = () => {
    const top = contentTop();
    const entered = top < H * 0.35;
    html.dataset.intro = entered ? 'done' : 'stage';
    if (themeMeta) themeMeta.content = '#F3EFE8';
    if (top <= 0 && !playing) return; // scena całkowicie przykryta treścią — nic do rysowania

    const p = reduced ? 0 : clamp(window.scrollY / dollyDistance());
    // pokój rozjaśnia się płynnie na początku przewijania — zanim jego wnętrze wypełni ekran
    const light = reduced ? 0 : smoother(seg(p, [0.02, 0.2]));
    const qDark = easeOut(seg(t, [1050, 1700]));
    const qW = easeInOut(seg(t, T.walls));
    const qDoor = easeOut(seg(t, T.doors));
    const qOpen = doorEase(seg(t, T.open));
    const qLeft = easeOut(seg(t, T.left));
    const qLock = seg(t, T.lock);
    const qWord = easeOut(seg(t, T.word));
    const qText = easeOut(seg(t, T.text));

    walls.style.strokeDashoffset = `${WALL_LEN * (1 - qW)}`;

    const leafColor = mix(light);
    trace.setAttribute('stroke', leafColor);
    door.setAttribute('visibility', qDoor > 0 ? 'visible' : 'hidden');
    door.setAttribute('points', doorPoints(qOpen, qDoor));
    door.setAttribute('fill', leafColor);
    trace.setAttribute('d', doorArc(qOpen));
    trace.setAttribute('opacity', (0.42 * (qOpen > 0 ? 1 : 0) * (1 - seg(t, T.traceOut))).toFixed(3));
    leftLine.setAttribute('fill', leafColor);
    leftLine.setAttribute('opacity', (0.5 * qLeft).toFixed(3));

    spill.setAttribute('opacity', (easeOut(seg(t, [T.open[0] + 150, T.open[1]])) * (1 - light)).toFixed(3));
    room.setAttribute('fill', light < 0.5 ? blend(UMBER, WARM, light * 2) : blend(WARM, STONE, (light - 0.5) * 2));
    room.setAttribute('opacity', qDark.toFixed(3));

    const x1 = 118 + 392 * qWord - 40;
    wmGrad.setAttribute('x1', x1.toFixed(2));
    wmGrad.setAttribute('x2', (x1 + 40).toFixed(2));
    word.setAttribute('opacity', (1 - seg(p, [0.02, 0.15])).toFixed(3));
    word.setAttribute('transform', `translate(${((1 - qWord) * 6).toFixed(2)} 0)`);

    let cam = autoCamera(qLock);
    if (p > 0) {
      // przejście przez drzwi: punkt ostrości z progu do środka pokoju, między skrzydła
      const bx = cam.ax + (45.5 - cam.ox) * cam.s;
      const by = cam.ay + (91 - cam.oy) * cam.s;
      const e = easeInOut(p);
      const sEnd = k * zoomMax;
      cam = {
        ox: lerp(45.5, 45.3, e),
        oy: lerp(91, 81, e),
        ax: lerp(bx, W / 2, e),
        ay: lerp(by, H / 2, e),
        s: cam.s * Math.pow(sEnd / cam.s, smoother(p)),
      };
    }
    world.setAttribute(
      'transform',
      `translate(${cam.ax.toFixed(2)} ${cam.ay.toFixed(2)}) scale(${cam.s.toFixed(5)}) translate(${-cam.ox} ${-cam.oy})`,
    );

    const out = seg(p, [0, 0.1]);
    const shown = qText * (1 - out);
    text.style.opacity = shown.toFixed(3);
    text.style.transform = `translateY(${((1 - qText) * 10 - out * 14).toFixed(2)}px)`;
    text.style.visibility = shown > 0.01 ? 'visible' : 'hidden';
    text.classList.toggle('is-still', out > 0 || qText < 1);
    svg.classList.add('is-ready');
  };

  const frame = (now: number) => {
    const dt = last ? Math.min(64, now - last) : 16;
    last = now;
    if (playing) {
      t += dt * speed;
      if (t >= T.end) {
        t = T.end;
        playing = false;
      }
    }
    render();
    if (playing) raf = requestAnimationFrame(frame);
    else {
      raf = 0;
      last = 0;
    }
  };
  const start = () => {
    if (!raf) raf = requestAnimationFrame(frame);
  };

  const onScroll = () => {
    if (playing && window.scrollY > 4) speed = 8; // przewijanie od razu: dokończ wejście szybko, nie blokuj
    if (playing) start();
    else if (!raf) {
      raf = requestAnimationFrame(() => {
        raf = 0;
        render();
      });
    }
  };
  const onResize = () => {
    layout();
    render();
  };

  /* Hero gra swoje wejście, gdy wjeżdża na ekran (albo od razu, jeśli jest już nad oknem). */
  let io: IntersectionObserver | null = null;
  if ('IntersectionObserver' in window) {
    io = new IntersectionObserver(
      (entries) => {
        for (const en of entries) {
          if (en.isIntersecting || en.boundingClientRect.bottom < 0) {
            hero.classList.add('is-in');
            io?.disconnect();
          }
        }
      },
      { rootMargin: '0px 0px -30% 0px' },
    );
    io.observe(hero);
  } else {
    hero.classList.add('is-in');
  }

  /* „Wejdź”: prowadzone przewinięcie przez drzwi; każdy gest użytkownika je przerywa. */
  let guided = 0;
  const stopGuided = () => {
    if (guided) cancelAnimationFrame(guided);
    guided = 0;
  };
  const onEnter = () => {
    const target = main.getBoundingClientRect().top + window.scrollY;
    stopGuided();
    if (reduced) {
      window.scrollTo({ top: target, behavior: 'instant' });
      main.focus({ preventScroll: true });
      return;
    }
    const from = window.scrollY, dur = 2600, t0 = performance.now();
    const step = (now: number) => {
      const q = clamp((now - t0) / dur);
      window.scrollTo({ top: lerp(from, target, easeInOut(q)), behavior: 'instant' });
      if (q < 1) guided = requestAnimationFrame(step);
      else {
        guided = 0;
        main.focus({ preventScroll: true });
      }
    };
    guided = requestAnimationFrame(step);
  };
  const interrupts = ['wheel', 'touchstart', 'keydown'] as const;

  layout();
  render();
  if (playing) start();
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onResize);
  interrupts.forEach((ev) => window.addEventListener(ev, stopGuided, { passive: true }));
  enter.addEventListener('click', onEnter);

  return () => {
    if (raf) cancelAnimationFrame(raf);
    stopGuided();
    io?.disconnect();
    window.removeEventListener('scroll', onScroll);
    window.removeEventListener('resize', onResize);
    interrupts.forEach((ev) => window.removeEventListener(ev, stopGuided));
    enter.removeEventListener('click', onEnter);
  };
}
