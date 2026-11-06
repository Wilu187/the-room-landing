import type { CSSProperties } from 'react';
import type { Fillable } from '../content/do-uzupelnienia';
import type { Photo as PhotoData } from '../content/images';
import { pl } from '../lib/typography';

/** Treść albo czytelny placeholder, jeżeli dane nie zostały jeszcze uzupełnione. */
export function Fill({ field }: { field: Fillable }) {
  if (field.value) return <>{pl(field.value)}</>;
  return <span className="ph">{field.placeholder}</span>;
}

type IconName = 'arrow' | 'chevron' | 'check' | 'alert' | 'menu' | 'close';

/** Ikony rysowane jedną kreską 1.5 px, spójne z cienkimi liniami logo. */
export function Icon({ name, size = 18 }: { name: IconName; size?: number }) {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.5,
    strokeLinecap: 'square' as const,
    'aria-hidden': true,
    focusable: false,
  };
  switch (name) {
    case 'arrow':
      return (
        <svg {...common}>
          <path d="M4 12h15M13.5 6.5 19 12l-5.5 5.5" />
        </svg>
      );
    case 'chevron':
      return (
        <svg {...common}>
          <path d="m6 9.5 6 6 6-6" />
        </svg>
      );
    case 'check':
      return (
        <svg {...common}>
          <path d="m5 12.5 4.5 4.5L19 7.5" />
        </svg>
      );
    case 'alert':
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7.5v6M12 16.5v.5" />
        </svg>
      );
    case 'menu':
      return (
        <svg {...common}>
          <path d="M4 8h16M4 16h16" />
        </svg>
      );
    case 'close':
      return (
        <svg {...common}>
          <path d="m6 6 12 12M18 6 6 18" />
        </svg>
      );
  }
}

type PhotoProps = {
  photo: PhotoData;
  sizes: string;
  priority?: boolean;
  className?: string;
};

/** Responsywne zdjęcie: AVIF → WebP → JPEG, stałe proporcje, kadr sterowany z danych. */
export function Photo({ photo, sizes, priority = false, className }: PhotoProps) {
  const set = (ext: string) => photo.widths.map((w) => `/images/${photo.name}-${w}.${ext} ${w}w`).join(', ');
  const fallbackWidth = photo.widths.includes(1200) ? 1200 : photo.widths[photo.widths.length - 1];
  const style = {
    '--focus-m': photo.focus.mobile,
    '--focus-d': photo.focus.desktop,
  } as CSSProperties;
  return (
    <picture className={className}>
      <source type="image/avif" srcSet={set('avif')} sizes={sizes} />
      <source type="image/webp" srcSet={set('webp')} sizes={sizes} />
      <img
        src={`/images/${photo.name}-${fallbackWidth}.jpg`}
        srcSet={set('jpg')}
        sizes={sizes}
        width={photo.width}
        height={photo.height}
        alt={photo.alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        fetchPriority={priority ? 'high' : 'auto'}
        style={style}
      />
    </picture>
  );
}

/** Opóźnienie wejścia elementu w grupie (70 ms na element). */
export const stagger = (i: number) => ({ '--i': i }) as CSSProperties;
