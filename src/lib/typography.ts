/**
 * Polish typesetting: keep one-letter words (w, z, i, o, a, u…) and dashes
 * from ending a line by binding them to the next word with a no-break space.
 */
const SINGLE_LETTER = /(^|[\s(„])([aiouwzAIOUWZ])\s+/g;
/** Myślnik między słowami („ - ” albo półpauza „ – ”): wiązany z poprzednim słowem, żeby nie zaczynał wiersza. */
const DASH = /\s+([–-])\s+/g;

export function pl(text: string): string {
  return text
    // „e-mail(em)” nie łamie się na łączniku (twardy łącznik U+2011)
    .replace(/\b([eE])-(mail)/g, '$1‑$2')
    .replace(SINGLE_LETTER, (_m, before: string, letter: string) => `${before}${letter} `)
    .replace(SINGLE_LETTER, (_m, before: string, letter: string) => `${before}${letter} `)
    .replace(DASH, ' $1 ')
    .replace(/THE ROOM/g, 'THE ROOM');
}

/** Applies `pl()` to every string inside a plain data structure. */
export function typeset<T>(value: T): T {
  if (typeof value === 'string') return pl(value) as T;
  if (Array.isArray(value)) return value.map((v) => typeset(v)) as T;
  if (value && typeof value === 'object') {
    const out: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(value as Record<string, unknown>)) {
      // ids, hrefs and urls are data, not prose
      out[k] = /^(id|href|url|src|slug|username|anchor|format|intent|kind|availability)$/i.test(k) ? v : typeset(v);
    }
    return out as T;
  }
  return value;
}
