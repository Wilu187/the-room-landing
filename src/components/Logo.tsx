import darkSvg from '../../public/brand/the-room-logo-ciemny.svg?raw';
import lightSvg from '../../public/brand/the-room-logo-jasny.svg?raw';

/**
 * Logo wstawione jako wektor w kodzie strony (nie <img>), z dokładnie tych samych plików SVG
 * z /public/brand. Przeglądarka rysuje je przy każdej skali ostro - bez buforowania obrazka
 * w niższej rozdzielczości (np. w przyklejonym nagłówku, przy skalowaniu ekranu Windows lub zoomie).
 */
const prepare = (svg: string) =>
  svg
    .replace(/<\?xml[^>]*>\s*/, '')
    .replace(/<title>[^<]*<\/title>/, '')
    .replace(/\swidth="[^"]*"\s+height="[^"]*"/, '')
    .replace('<svg ', '<svg aria-hidden="true" focusable="false" shape-rendering="geometricPrecision" ');

const SVG = { dark: prepare(darkSvg), light: prepare(lightSvg) };

/** `dark` - brązowe logo na jasne tło; `light` - jasne logo na ciemne tło. */
export function Logo({ variant, className }: { variant: 'dark' | 'light'; className?: string }) {
  return <span className={`logo ${className ?? ''}`} dangerouslySetInnerHTML={{ __html: SVG[variant] }} />;
}
