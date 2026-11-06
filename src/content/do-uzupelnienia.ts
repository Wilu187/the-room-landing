/**
 * DANE DO UZUPEŁNIENIA — jedno miejsce na wszystkie brakujące informacje.
 *
 * Każde pole ma `value` (treść pokazywana na stronie) oraz `placeholder`
 * (tekst w nawiasie, pokazywany, gdy `value` jest `null`).
 *
 * ⚠ DANE PRZYKŁADOWE (decyzja z 06.11.2026): wszystkie wartości `value` poniżej
 * są fikcyjne — osoby, daty, miasta, adres, e-mail i teksty prawne zostały
 * wymyślone, żeby stronę dobrze się czytało. Przed publikacją podmień każdą
 * wartość na potwierdzoną albo ustaw `null`, aby wrócił placeholder.
 */

export type Fillable = {
  value: string | null;
  placeholder: string;
};

/** `demo` — fikcyjna wartość przykładowa; zamień na prawdziwą przed publikacją. */
const field = (placeholder: string, demo: string | null = null): Fillable => ({ value: demo, placeholder });

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
  organizer: field('[Nazwa organizatora]', 'Fundacja THE ROOM'),
  /** Gdy adres jest wpisany, w stopce pojawia się aktywny link mailto. */
  contactEmail: field('[E-mail kontaktowy]', 'kontakt@theroom.pl'),
  organizerRegistry: field('[Dane rejestrowe i adres organizatora]', 'Siedziba: ul. Mokotowska 24/3, 00-561 Warszawa'),

  referralRules: field(
    '[Zasady poleceń do uzupełnienia przez organizatora]',
    'Polecenie nie jest wymagane. Jeśli je wskażesz, poprosimy tę osobę wyłącznie o krótkie potwierdzenie.',
  ),
  processAfterRequest: field(
    '[Sposób kontaktu po zgłoszeniu do uzupełnienia]',
    'Każdą prośbę czytamy osobiście. Odpowiadamy e-mailem w ciągu 14 dni.',
  ),
  contactProcess: field(
    '[Opis rzeczywistego procesu kontaktu do uzupełnienia]',
    'Odpowiadamy e-mailem w ciągu 14 dni. Jeśli prośba dotyczy konkretnego spotkania, potwierdzamy miejsce albo proponujemy kolejny termin.',
  ),

  privacyClause: field(
    '[Treść klauzuli informacyjnej do uzupełnienia]',
    'Dane przetwarzamy na podstawie art. 6 ust. 1 lit. b i f RODO, wyłącznie po to, by odpowiedzieć na prośbę o zaproszenie i zorganizować spotkanie. Przechowujemy je przez 12 miesięcy od ostatniego kontaktu. Masz prawo dostępu do danych, ich sprostowania, usunięcia i ograniczenia przetwarzania, a także prawo wniesienia skargi do Prezesa UODO.',
  ),
  legalNote: field(
    '[Treść noty prawnej do uzupełnienia]',
    'Treści publikowane na stronie mają charakter informacyjny i nie stanowią porady prawnej. Prawa do tekstów i znaku THE ROOM należą do organizatora lub autorów.',
  ),
  partnersDescription: field(
    '[Opis współpracy z partnerami do uzupełnienia]',
    'Partnerzy wspierają THE ROOM wiedzą i przestrzenią do spotkań. Nie wpływają na dobór tematów ani gości.',
  ),

  /** Autorzy zapowiadanych tekstów, w kolejności: tekst główny, potem dwa mniejsze. */
  articleAuthors: [
    field('[Autor do uzupełnienia]', 'Joanna Kordecka'),
    field('[Autor do uzupełnienia]', 'Tomasz Wielgosz'),
    field('[Autor do uzupełnienia]', 'Natalia Brzeska'),
  ],

  events: {
    'summit-01': {
      city: field('[Miasto]', 'Warszawa'),
      date: field('[Data do potwierdzenia]', '14 maja 2027'),
      host: field('[Imię i nazwisko gospodarza]', 'Joanna Kordecka'),
      seats: field('[Liczba miejsc do potwierdzenia]', '40'),
      availability: 'zapisy',
    },
    'kolacja-01': {
      city: field('[Miasto]', 'Kraków'),
      date: field('[Data do potwierdzenia]', '11 marca 2027, 19:00'),
      host: field('[Imię i nazwisko gospodarza]', 'Tomasz Wielgosz'),
      seats: field('[Liczba miejsc do potwierdzenia]', '12'),
      availability: 'zapisy',
    },
  } satisfies Record<string, EventData>,

  hosts: [
    {
      name: field('[Imię i nazwisko]', 'Joanna Kordecka'),
      role: field('[Rola w THE ROOM]', 'Współzałożycielka, gospodyni Summitu'),
      experience: field(
        '[Krótka informacja o doświadczeniu]',
        'Adwokatka od 2008 roku. Partnerka zarządzająca kancelarii doradzającej w transakcjach i sporach korporacyjnych.',
      ),
      motivation: field(
        '[Dwa zdania o powodach tworzenia inicjatywy]',
        '„O prowadzeniu kancelarii rozmawiamy zwykle po godzinach i w pośpiechu. Chciałam miejsca, w którym ta rozmowa jest tematem, a nie dodatkiem.”',
      ),
      portrait: null,
    },
    {
      name: field('[Imię i nazwisko]', 'Tomasz Wielgosz'),
      role: field('[Rola w THE ROOM]', 'Współzałożyciel, gospodarz kolacji'),
      experience: field(
        '[Krótka informacja o doświadczeniu]',
        'Radca prawny od 2011 roku. Prowadzi własną kancelarię obsługującą firmy technologiczne i rodzinne.',
      ),
      motivation: field(
        '[Dwa zdania o powodach tworzenia inicjatywy]',
        '„Ważne decyzje o mojej kancelarii zapadały przy stole, w rozmowach z innymi prawnikami. Chcę, żeby takie rozmowy przestały być przypadkiem.”',
      ),
      portrait: null,
    },
  ] satisfies HostData[],

  /** Adresy zostaw puste, dopóki nie zostaną potwierdzone. Nie zgaduj domen. */
  partners: [
    { name: 'ADVOSYNC', url: null },
    { name: 'MODUCTRL', url: null },
    { name: 'NEUROSPACIALIST', url: null },
    { name: 'NEUROBIOGRAPH', url: null },
  ] satisfies PartnerData[],
};
