/**
 * Fotografie z Unsplash (licencja Unsplash, kolekcja bezpłatna — nie Unsplash+).
 * Pliki są pobrane i zoptymalizowane lokalnie: public/images/<name>-<szerokość>.<avif|webp|jpg>
 * (skrypt: npm run images -- <katalog-z-oryginałami>).
 * `focus` steruje kadrowaniem (object-position) — na telefonie i desktopie osobno.
 */

export type Photo = {
  name: string;
  width: number;
  height: number;
  widths: number[];
  alt: string;
  focus: { mobile: string; desktop: string };
  credit: {
    author: string;
    authorUrl: string;
    sourceUrl: string;
    usage: string;
  };
};

const WIDTHS = [480, 800, 1200, 1600, 2000];

export const PHOTOS = {
  hero: {
    name: 'hero-notatki',
    width: 2400,
    height: 1600,
    widths: WIDTHS,
    alt: 'Dłonie opartego o drewniany stół człowieka nad otwartym notatnikiem, z piórem w dłoni.',
    focus: { mobile: '40% 62%', desktop: '34% 60%' },
    credit: {
      author: 'Kelly Sikkema',
      authorUrl: 'https://unsplash.com/@kellysikkema',
      sourceUrl: 'https://unsplash.com/photos/a-person-sitting-at-a-table-with-a-book-and-pen-9n9La1suhjw',
      usage: 'Hero — ilustracja skupienia i pracy z tekstem.',
    },
  },
  summit: {
    name: 'summit-stol',
    width: 2400,
    height: 1600,
    widths: WIDTHS,
    alt: 'Kilka osób przy długim drewnianym stole w dziennym świetle; widać dłonie, notatniki i długopisy.',
    focus: { mobile: '38% 60%', desktop: '40% 58%' },
    credit: {
      author: 'Dylan Gillis',
      authorUrl: 'https://unsplash.com/@mainermedia',
      sourceUrl:
        'https://unsplash.com/photos/people-sitting-on-chair-in-front-of-table-while-holding-pens-during-daytime-KdeqA3aTnBY',
      usage: 'Spotkania — ilustracja formatu Summit.',
    },
  },
  kolacja: {
    name: 'kolacja-stol',
    width: 2400,
    height: 1591,
    widths: WIDTHS,
    alt: 'Widok z góry na mały drewniany stół, przy którym dwie osoby rozmawiają nad talerzami i kieliszkami.',
    focus: { mobile: '50% 48%', desktop: '50% 50%' },
    credit: {
      author: 'Ilnur Kalimullin',
      authorUrl: 'https://unsplash.com/@kalimullin',
      sourceUrl: 'https://unsplash.com/photos/people-sitting-at-the-table-eating-6UdbanxgIIw',
      usage: 'Spotkania — ilustracja formatu Kolacja THE ROOM.',
    },
  },
} satisfies Record<string, Photo>;

export const PHOTO_LIST: Photo[] = [PHOTOS.hero, PHOTOS.summit, PHOTOS.kolacja];
