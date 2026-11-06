/**
 * DANE DO UZUPEŁNIENIA — jedno miejsce na wszystkie brakujące informacje.
 *
 * Każde pole ma `value` (treść pokazywana na stronie) oraz `placeholder`
 * (tekst w nawiasie, pokazywany, gdy `value` jest `null`).
 *
 * Wszystkie wartości `value` są puste (`null`) do czasu otrzymania potwierdzonych danych —
 * na stronie widać wtedy placeholder w nawiasie kwadratowym. Nie wpisuj tu danych wymyślonych.
 */

export type Fillable = {
  value: string | null;
  placeholder: string;
};

const field = (placeholder: string, value: string | null = null): Fillable => ({ value, placeholder });

/** Status terminu spotkania. Zmieniaj dopiero po potwierdzeniu daty i miejsca. */
export type Availability =
  | 'w-przygotowaniu' // termin nieustalony → „Termin w przygotowaniu”, działanie „Zapytaj o udział”
  | 'zapisy' // termin potwierdzony → działanie „Poproś o miejsce”
  | 'brak-miejsc'; // komplet potwierdzony → status „Brak miejsc”

export type EventData = {
  city: Fillable;
  date: Fillable;
  host: Fillable;
  seats: Fillable;
  availability: Availability;
};

export type HostData = {
  name: Fillable;
  role: Fillable;
  experience: Fillable;
  motivation: Fillable;
  /** Ścieżka do portretu w /public, np. "/images/gospodarz-1.jpg". Bez portretu pokazujemy inicjały. */
  portrait: string | null;
};

export type PartnerData = {
  name: string;
  /** Potwierdzony adres strony. Dopóki `null`, nazwa jest zwykłym tekstem. */
  url: string | null;
};

export const DANE = {
  organizer: field('[Nazwa organizatora]'),
  /** Gdy adres jest wpisany, w stopce pojawia się aktywny link mailto. */
  contactEmail: field('[E-mail kontaktowy]'),
  organizerRegistry: field('[Dane rejestrowe i adres organizatora.]'),

  referralRules: field('[Zasady poleceń i ich znaczenie przy rozpatrywaniu próśb do potwierdzenia przez organizatora.]'),
  processAfterRequest: field('[Sposób kontaktu i dalsze kroki do potwierdzenia przez organizatora.]'),
  contactProcess: field('[Sposób kontaktu i dalsze kroki do potwierdzenia przez organizatora.]'),

  /** Pod formularzem: informacja o przetwarzaniu danych przed uruchomieniem prawdziwej wysyłki. */
  formPrivacyInfo: field('[Informacja o przetwarzaniu danych do uzupełnienia i zatwierdzenia przed uruchomieniem formularza.]'),
  privacyAdmin: field('[Administrator danych i dane kontaktowe do uzupełnienia.]'),
  privacyClause: field('[Treść informacji o przetwarzaniu danych do uzupełnienia i zatwierdzenia przed uruchomieniem zgłoszeń.]'),
  legalNote: field('[Treść noty prawnej do uzupełnienia i zatwierdzenia.]'),
  /** Dopóki opis jest pusty, w stopce widać tylko placeholder (lista partnerów poniżej czeka na potwierdzenie). */
  partnersDescription: field('[Potwierdzeni partnerzy i opis współpracy do uzupełnienia.]'),

  /** Autorzy zapowiadanych tekstów, w kolejności: tekst główny, potem dwa mniejsze. */
  articleAuthors: [
    field('[Autor do uzupełnienia]'),
    field('[Autor do uzupełnienia]'),
    field('[Autor do uzupełnienia]'),
  ],

  events: {
    'summit-01': {
      city: field('[Miasto]'),
      date: field('[Data do potwierdzenia]'),
      host: field('[Imię i nazwisko gospodarza]'),
      seats: field('[Liczba miejsc do potwierdzenia]'),
      availability: 'w-przygotowaniu',
    },
    'kolacja-01': {
      city: field('[Miasto]'),
      date: field('[Data i godzina do potwierdzenia]'),
      host: field('[Imię i nazwisko gospodarza]'),
      seats: field('[Liczba miejsc do potwierdzenia]'),
      availability: 'w-przygotowaniu',
    },
  } satisfies Record<string, EventData>,

  hosts: [
    {
      name: field('[Imię i nazwisko]'),
      role: field('[Rola w THE ROOM]'),
      experience: field('[Krótka informacja o doświadczeniu zawodowym]'),
      motivation: field('[Autoryzowana wypowiedź o powodach tworzenia THE ROOM]'),
      portrait: null,
    },
    {
      name: field('[Imię i nazwisko]'),
      role: field('[Rola w THE ROOM]'),
      experience: field('[Krótka informacja o doświadczeniu zawodowym]'),
      motivation: field('[Autoryzowana wypowiedź o powodach tworzenia THE ROOM]'),
      portrait: null,
    },
  ] satisfies HostData[],

  /** Wewnętrzne zestawienie marek z briefu — do potwierdzenia; na stronie nie są wyświetlane. */
  partners: [
    { name: 'ADVOSYNC', url: null },
    { name: 'MODUCTRL', url: null },
    { name: 'NEUROSPACIALIST', url: null },
    { name: 'NEUROBIOGRAPH', url: null },
  ] satisfies PartnerData[],
};
