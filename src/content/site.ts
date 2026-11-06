/**
 * Treści strony (wersja robocza). Dane brakujące → do-uzupelnienia.ts.
 * Wszystkie teksty przechodzą przez `typeset()`, która wiąże polskie
 * jednoliterowe spójniki z następnym słowem (bez „sierotek” na końcu wiersza).
 */
import { typeset } from '../lib/typography';

export type Intent = 'krag' | 'summit' | 'kolacja';

export const INTENTS: { id: Intent; label: string; hint: string }[] = typeset([
  { id: 'krag', label: 'Krąg THE ROOM', hint: 'Chcę dowiedzieć się więcej o możliwościach udziału w THE ROOM.' },
  { id: 'summit', label: 'Summit', hint: 'Spotkanie dla partnerów i doświadczonych prawników.' },
  { id: 'kolacja', label: 'Kolacja', hint: 'Rozmowa przy wspólnym stole, w małym gronie.' },
] as const satisfies { id: Intent; label: string; hint: string }[]);

export const NAV = typeset({
  links: [
    { href: '#krag', label: 'Krąg' },
    { href: '#spotkania', label: 'Spotkania' },
    { href: '#manifest', label: 'Manifest' },
    { href: '#redakcja', label: 'Z redakcji' },
  ],
  cta: 'Poproś o zaproszenie',
  skip: 'Przejdź do treści',
  menuOpen: 'Menu',
  menuClose: 'Zamknij menu',
  logoLabel: 'THE ROOM - początek strony',
});

/** Wejście na stronę: sygnet rysuje się, drzwi się otwierają, potem przejście do środka (src/lib/intro.ts). */
export const INTRO = typeset({
  label: 'THE ROOM - wejście',
  mark: 'THE ROOM',
  line: 'Kameralny krąg adwokatów i radców prawnych w Polsce',
  enter: 'Wejdź',
  hint: 'albo przewiń w dół',
});

export const HERO = typeset({
  descriptor: 'Kameralny krąg adwokatów i radców prawnych w Polsce',
  title: 'O pracy prawnika. Z ludźmi, którzy ją rozumieją.',
  lead: 'Rozmawiamy o prowadzeniu kancelarii, przyszłości zawodu i tym, jak chcemy pracować. W małym gronie prawników dzielimy się doświadczeniem i uczymy się od siebie.',
  cta: 'Poproś o zaproszenie',
  secondary: 'Poznaj krąg',
  themeNoteLabel: 'Temat pierwszego roku:',
  themeNote: 'Jak mierzyć wartość pracy prawnika?',
  photoCaption: 'Zdjęcie ilustracyjne',
});

export const THEME = typeset({
  label: 'Temat pierwszego roku',
  title: 'Jak mierzyć wartość pracy prawnika?',
  body: 'Liczba godzin pokazuje, ile czasu poświęcamy sprawie. Nie mówi jednak wszystkiego o jakości decyzji, odpowiedzialności ani wartości naszej pracy dla klienta. Pierwszy rok THE ROOM poświęcamy temu, jak tę wartość oceniać i wyceniać - oraz jak zmieniają ją technologia i organizacja pracy.',
  questionsTitle: 'Od tych pytań zaczynamy',
  questions: [
    'Co poza czasem pracy powinno decydować o wynagrodzeniu prawnika?',
    'Jak korzystać z AI, zachowując kontrolę nad jakością pracy?',
    'Jak organizować pracę zespołu, żeby nie wymagała ciągłej dostępności?',
  ],
});

export type MeetingCopy = {
  id: 'summit-01' | 'kolacja-01';
  intent: Intent;
  format: string;
  topic: string;
  topicStatus: string;
  description: string;
};

export const MEETINGS = typeset({
  title: 'Czas na rozmowę z innymi prawnikami',
  intro:
    'Summity i kolacje THE ROOM to okazja do wymiany doświadczeń z osobami, które mierzą się z podobnymi wyzwaniami zawodowymi.',
  items: [
    {
      id: 'summit-01',
      intent: 'summit',
      format: 'Summit',
      topic: 'Jak mierzyć wartość pracy prawnika?',
      topicStatus: 'Temat pierwszego roku',
      description: 'Spotkanie dla partnerów i doświadczonych prawników, którzy odpowiadają za rozwój kancelarii lub zakładają własną.',
    },
    {
      id: 'kolacja-01',
      intent: 'kolacja',
      format: 'Kolacja THE ROOM',
      topic: 'Jak chcemy prowadzić kancelarię?',
      topicStatus: 'Temat wieczoru',
      description: 'Kameralna rozmowa o codziennej pracy prawnika - przy wspólnym stole, bez pośpiechu.',
    },
  ] satisfies MeetingCopy[],
  labels: {
    city: 'Miasto',
    date: 'Data',
    host: 'Gospodarz',
    seats: 'Liczba miejsc',
  },
  status: {
    'w-przygotowaniu': 'Termin w przygotowaniu',
    zapisy: 'Termin potwierdzony',
    'brak-miejsc': 'Brak miejsc',
  },
  action: {
    'w-przygotowaniu': 'Zapytaj o udział',
    zapisy: 'Poproś o miejsce',
    'brak-miejsc': 'Zapytaj o kolejny termin',
  },
  note: 'Miejsce spotkania i dokładny adres podajemy po potwierdzeniu udziału. Nie publikujemy list gości.',
  photoCaption: 'Zdjęcie ilustracyjne',
});

export type Level = {
  number: '01' | '02' | '03';
  name: string;
  audience: string;
  access: string;
  status?: { label: string; value: string };
  action?: { label: string; href: string };
};

export const CIRCLE = typeset({
  title: 'Jak uczestniczyć w THE ROOM',
  intro:
    'THE ROOM łączy publikacje, Summity i Inner Circle. Każda z tych form ma własny charakter i zasady dostępu.',
  labels: { level: 'Poziom', audience: 'Dla kogo', access: 'Dostęp' },
  levels: [
    {
      number: '01',
      name: 'Artykuły i Bookazine',
      audience: 'Dla doświadczonych prawników - także tych, którzy nie prowadzą własnej kancelarii.',
      access:
        'Artykuły na stronie będą dostępne dla wszystkich. Bookazine to drukowane wydawnictwo THE ROOM. Pierwszy numer będzie można zamówić po premierze.',
      status: { label: 'Bookazine', value: 'w przygotowaniu' },
      action: { label: 'Poznaj tematy', href: '#redakcja' },
    },
    {
      number: '02',
      name: 'Summit',
      audience: 'Dla partnerów i doświadczonych prawników, którzy odpowiadają za rozwój kancelarii lub zakładają własną.',
      access: 'Możesz otrzymać zaproszenie lub zgłosić chęć udziału.',
      action: { label: 'Zobacz spotkania', href: '#spotkania' },
    },
    {
      number: '03',
      name: 'Inner Circle',
      audience: 'Dla właścicieli kancelarii i partnerów zarządzających.',
      access: 'Wyłącznie na zaproszenie.',
    },
  ] satisfies Level[],
});

export const MANIFEST = typeset({
  title: 'Wierzymy, że dobre prawo potrzebuje spokoju.',
  theses: [
    {
      title: 'Nie mierzymy doskonałości w godzinach.',
      body: 'Rozmawiamy o wartości pracy, jakości decyzji i sposobie prowadzenia kancelarii.',
    },
    {
      title: 'Dzielimy się tym, co wiemy.',
      body: 'Wśród równych otwartość jest podstawą wartościowej rozmowy.',
    },
    {
      title: 'Pozostajemy prawnikami.',
      body: 'Niezależność, etyka i tajemnica zawodowa stoją ponad każdą wspólnotą.',
    },
  ],
  galleryLabel: 'Manifest THE ROOM: 10 punktów',
  galleryHint: 'Przeciągnij karty albo użyj strzałek',
  prev: 'Poprzedni punkt',
  next: 'Następny punkt',
  pointOf: (i: number, n: number) => `Punkt ${i} z ${n}`,
  fullTitle: 'Manifest THE ROOM',
  fullStatus: 'Wersja robocza',
  /** Krótkie opisy na kartach punktów, które w manifeście są jednym zdaniem (numer karty → opis). */
  cardNotes: {
    9: 'Spokój i konsekwencja mówią więcej niż słowa.',
    10: 'Na rozmowę, namysł i odpoczynek.',
  } as Record<number, string>,
  full: [
    'Nie mierzymy doskonałości w godzinach. Kto pracuje 80 godzin tygodniowo, dowodzi wytrzymałości, a nie trafności osądu.',
    'Najlepsza praca prawnicza powstaje w jasnej głowie. Hałas, pośpiech i ciągła dostępność nie są oznaką znaczenia, lecz jego przeciwieństwem.',
    'Prowadzenie kancelarii to osobna dyscyplina. Zasługuje na tę samą powagę co pismo do Sądu Najwyższego.',
    'Przestrzeń kształtuje myślenie. Biuro, w którym pracujemy, nie jest tłem, lecz narzędziem.',
    'Technologia powinna znikać. Dobre narzędzia odciążają, nie domagając się uwagi.',
    'Dzielimy się tym, co wiemy. Wśród równych otwartość nie jest słabością, lecz przewagą.',
    'Jest nas niewielu – celowo. Przynależność rodzi się ze wspólnego standardu, nie ze składki członkowskiej.',
    'Pozostajemy prawnikami. Nasza niezależność, etyka zawodowa i tajemnica zawodowa stoją ponad każdą wspólnotą.',
    'Przewodzimy postawą, nie głośnością.',
    'Tworzymy przestrzeń: dla naszych klientów, naszych zespołów i dla siebie.',
  ],
  rulesTitle: 'Zasady rozmowy',
  rules: [
    'Nie publikujemy list gości.',
    'Miejsce spotkania przekazujemy po potwierdzeniu udziału.',
    'Przyjęta w manifeście Chatham House Rule pozwala korzystać z informacji ze spotkania bez ujawniania tożsamości i afiliacji osób wypowiadających się oraz innych uczestników.',
    'Niezależność, etyka i tajemnica zawodowa pozostają nadrzędne.',
  ],
});

export const HOSTS = typeset({
  title: 'Gospodarze THE ROOM',
  intro:
    'Gospodarze wybierają tematy, zapraszają gości i prowadzą spotkania.',
  portraitPlaceholder: 'Portret w przygotowaniu',
  initialsPlaceholder: '[Inicjały]',
});

export type Article = {
  title: string;
  dek: string;
  pillar: string;
  status: string;
};

export const EDITORIAL = typeset({
  title: 'O pracy prawnika i życiu poza kancelarią',
  intro:
    'Przygotowujemy teksty o tym, jak zmienia się zawód prawnika - od prowadzenia zespołu i korzystania z technologii po warunki pracy i odpoczynek.',
  pillarsTitle: 'Obszary redakcyjne',
  pillars: [
    { name: 'Kancelaria 2030', body: 'Prowadzenie kancelarii, zespoły i zmieniające się oczekiwania klientów.' },
    { name: 'Legal Workspace', body: 'AI, narzędzia cyfrowe i organizacja codziennej pracy.' },
    { name: 'Business Space', body: 'Biuro, w którym można się skupić i współpracować.' },
    { name: 'Lifestyle', body: 'Zdrowie, odpoczynek, podróże i zainteresowania poza pracą.' },
  ],
  articlesTitle: 'Zapowiedzi tekstów',
  featured: {
    title: 'Co mierzymy, kiedy liczymy godziny?',
    dek: 'Co czas poświęcony sprawie mówi o jakości pracy prawnika i jej wartości dla klienta?',
    pillar: 'Kancelaria 2030',
    status: 'Zapowiedź tekstu',
  } satisfies Article,
  secondary: [
    {
      title: 'AI w kancelarii. Co można jej powierzyć?',
      dek: 'W jakich zadaniach AI może pomóc, a które decyzje powinny pozostać po stronie prawnika?',
      pillar: 'Legal Workspace',
      status: 'Zapowiedź tekstu',
    },
    {
      title: 'Biuro, w którym łatwiej się skupić',
      dek: 'Jak urządzić kancelarię, żeby ułatwiała skupienie i codzienną pracę zespołu.',
      pillar: 'Business Space',
      status: 'Zapowiedź tekstu',
    },
  ] satisfies Article[],
  authorLabel: 'Autor',
  publicationsTitle: 'Wydawnictwa',
  publications: [
    {
      name: 'Bookazine 01',
      body: 'Pierwszy numer drukowanego wydawnictwa THE ROOM: rozmowy, eseje i fotografie poświęcone wartości pracy prawnika.',
      status: 'W przygotowaniu',
    },
    {
      name: 'Raport Stawek',
      body: 'Planowany raport o stawkach za usługi prawne. [Zakres badania do potwierdzenia].',
      status: 'W przygotowaniu',
    },
  ],
});

export const INVITATION = typeset({
  title: 'Poproś o zaproszenie',
  description:
    'Daj znać, czy interesuje Cię krąg THE ROOM, Summit czy kolacja. Wysłanie prośby nie oznacza jeszcze potwierdzenia udziału.',
  processTitle: 'Co dalej?',
  processDemoNote: 'W tej wersji możesz sprawdzić formularz, ale prośba nie zostanie wysłana.',
  faqTitle: 'Najczęstsze pytania',
  faq: [
    {
      q: 'Czy muszę prowadzić własną kancelarię?',
      a: 'Nie. Otwarte publikacje THE ROOM są także dla prawników, którzy nie prowadzą własnej kancelarii. Summity są skierowane do partnerów i doświadczonych prawników, którzy odpowiadają za rozwój kancelarii lub zakładają własną. Inner Circle jest przeznaczony dla właścicieli kancelarii i partnerów zarządzających.',
    },
    {
      q: 'Czy potrzebuję polecenia?',
      a: 'W obecnej wersji formularza pole „Kto Cię poleca?” jest opcjonalne.',
      fillable: 'referralRules',
    },
    {
      q: 'Czym różni się Summit od Inner Circle?',
      a: 'Na Summit można otrzymać zaproszenie lub zgłosić chęć udziału. Inner Circle to mniejszy krąg dla właścicieli kancelarii i partnerów zarządzających, dostępny wyłącznie na zaproszenie.',
    },
    {
      q: 'Co stanie się po wysłaniu prośby?',
      a: 'Wysłanie prośby nie oznacza przyjęcia do kręgu ani potwierdzenia miejsca na spotkaniu.',
      fillable: 'contactProcess',
      demoNote: 'W tej wersji strony formularz służy wyłącznie do podglądu i nie wysyła próśb.',
    },
    {
      q: 'Kiedy poznam miejsce spotkania?',
      a: 'Dokładne miejsce spotkania poznasz po potwierdzeniu udziału. Nie publikujemy list gości.',
    },
  ] as { q: string; a: string; fillable?: 'referralRules' | 'contactProcess'; demoNote?: string }[],
});

export const FORM = typeset({
  title: 'Prośba o zaproszenie',
  intentLegend: 'Czego dotyczy prośba?',
  selectedMeeting: 'Wybrane spotkanie',
  changeMeeting: 'Zmień spotkanie',
  removeMeeting: 'Usuń wybrane spotkanie',
  meetingCleared: 'Usunięto wybór spotkania. Prośba dotyczy formatu ogólnie.',
  optional: 'opcjonalnie',
  fields: {
    name: { label: 'Imię i nazwisko' },
    email: { label: 'E-mail' },
    firm: { label: 'Kancelaria', help: 'Jeśli dopiero zakładasz kancelarię, wpisz: „w trakcie tworzenia”.' },
    city: { label: 'Miasto' },
    referrer: { label: 'Kto Cię poleca?', help: 'Jeśli ktoś Cię poleca, wpisz imię i nazwisko tej osoby.' },
    message: { label: 'Wiadomość', help: 'O czym chcesz porozmawiać w THE ROOM?' },
  },
  errors: {
    nameMissing: 'Wpisz imię i nazwisko.',
    nameShort: 'Wpisz pełne imię i nazwisko.',
    emailMissing: 'Wpisz adres e-mail.',
    emailInvalid: 'Sprawdź, czy adres e-mail jest poprawny.',
    firmMissing: 'Wpisz nazwę kancelarii. Jeśli dopiero ją zakładasz, wpisz: „w trakcie tworzenia”.',
    summary: 'Sprawdź zaznaczone pola.',
  },
  demo: {
    notice: 'To podgląd formularza - wpisane dane nie zostaną wysłane.',
    submit: 'Sprawdź formularz',
    success: 'Formularz jest wypełniony poprawnie. To podgląd - prośba nie została wysłana.',
  },
  live: {
    submit: 'Wyślij prośbę o zaproszenie',
    sending: 'Wysyłanie prośby…',
    success: 'Dziękujemy. Otrzymaliśmy Twoją prośbę o zaproszenie. To jeszcze nie jest potwierdzenie udziału.',
    error: 'Wystąpił problem podczas wysyłania prośby. Twoje dane pozostały w formularzu. Spróbuj ponownie za chwilę.',
  },
  privacy: {
    title: 'Prywatność',
    body: 'Formularz służy wyłącznie do podglądu i nie wysyła próśb o zaproszenie.',
    link: 'Informacja o prywatności',
  },
});

export const FOOTER = typeset({
  organizerLabel: 'Organizator',
  contactLabel: 'Kontakt',
  draftStatus: 'Wersja robocza',
  legal: {
    title: 'Nota prawna',
  },
  privacy: {
    title: 'Prywatność',
    facts: ['W tej wersji strony formularz służy wyłącznie do podglądu i nie wysyła próśb o zaproszenie.'],
    adminLabel: 'Administrator danych',
  },
  partners: {
    title: 'Partnerzy',
  },
  photos: {
    title: 'Fotografie',
    intro: 'Zdjęcia ilustracyjne pochodzą z serwisu Unsplash.',
    license: 'Licencja Unsplash',
    licenseUrl: 'https://unsplash.com/license',
  },
  closing: 'Pokój dla tych, którzy prowadzą.',
  year: '2026',
});
