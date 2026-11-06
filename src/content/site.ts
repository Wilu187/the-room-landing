/**
 * Treści strony (wersja robocza). Dane brakujące → do-uzupelnienia.ts.
 * Wszystkie teksty przechodzą przez `typeset()`, która wiąże polskie
 * jednoliterowe spójniki z następnym słowem (bez „sierotek” na końcu wiersza).
 */
import { typeset } from '../lib/typography';

export type Intent = 'krag' | 'summit' | 'kolacja';

export const INTENTS: { id: Intent; label: string; hint: string }[] = typeset([
  { id: 'krag', label: 'Krąg THE ROOM', hint: 'Treści, rozmowy i zaproszenia do kręgu' },
  { id: 'summit', label: 'Summit', hint: 'Dla partnerów i doświadczonych prawników' },
  { id: 'kolacja', label: 'Kolacja', hint: 'Kameralne spotkanie wokół wspólnego tematu' },
] as const satisfies { id: Intent; label: string; hint: string }[]);

export const NAV = typeset({
  links: [
    { href: '#krag', label: 'Krąg' },
    { href: '#spotkania', label: 'Spotkania' },
    { href: '#manifest', label: 'Manifest' },
    { href: '#redakcja', label: 'Artykuły' },
  ],
  cta: 'Poproś o zaproszenie',
  skip: 'Przejdź do treści',
  menuOpen: 'Menu',
  menuClose: 'Zamknij',
  logoLabel: 'THE ROOM — początek strony',
});

/** Wejście na stronę: sygnet rysuje się, drzwi się otwierają, potem przejście do środka (src/lib/intro.ts). */
export const INTRO = typeset({
  label: 'THE ROOM — wejście',
  mark: 'THE ROOM',
  line: 'Kameralny krąg adwokatów i radców prawnych w Polsce',
  enter: 'Wejdź',
  hint: 'albo przewiń',
});

export const HERO = typeset({
  descriptor: 'Kameralny krąg adwokatów i radców prawnych w Polsce',
  title: 'Pokój dla tych, którzy prowadzą.',
  lead: 'Rozmowy o prowadzeniu kancelarii, przyszłości zawodu i świadomym sposobie pracy. W gronie prawników, których łączy wspólny standard.',
  cta: 'Poproś o zaproszenie',
  secondary: 'Poznaj krąg',
  themeNoteLabel: 'Temat pierwszego roku:',
  themeNote: 'Koniec godziny?',
  photoCaption: 'Zdjęcie ilustracyjne',
});

export const THEME = typeset({
  label: 'Temat pierwszego roku',
  title: 'Koniec godziny?',
  body: 'Przyszłość kancelarii zaczyna się od pytań, które zadajemy dziś. Pierwszy rok THE ROOM poświęcamy wartości pracy prawnika — temu, jak ją tworzymy, jak ją oceniamy i jak wpływa na nią sposób, w jaki pracujemy.',
  questionsTitle: 'Pytania, które proponujemy do rozmowy',
  questions: [
    'Jak oceniać wartość pracy prawnika, gdy sama liczba godzin nie opisuje jej jakości?',
    'Co AI zmienia w organizacji kancelarii i roli prawniczego osądu?',
    'Jak prowadzić zespół bez opierania jego pracy na ciągłej dostępności?',
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
  title: 'Spotkania, które dają przestrzeń do rozmowy.',
  intro:
    'Summity i kolacje tworzą miejsce na pytania o prowadzenie kancelarii, przyszłość zawodu i własny sposób pracy.',
  items: [
    {
      id: 'summit-01',
      intent: 'summit',
      format: 'Summit',
      topic: 'Koniec godziny? Wartość pracy prawnika.',
      topicStatus: 'Temat pierwszego roku',
      description: 'Spotkanie dla partnerów i doświadczonych prawników, którzy kształtują lub zakładają kancelarię.',
    },
    {
      id: 'kolacja-01',
      intent: 'kolacja',
      format: 'Kolacja THE ROOM',
      topic: 'O prowadzeniu kancelarii i własnym sposobie pracy.',
      topicStatus: 'Temat wieczoru',
      description: 'Kameralne spotkanie wokół wspólnego tematu, z przestrzenią na spokojną rozmowę.',
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
  note: 'Miejsce i dokładny adres przekazujemy po potwierdzeniu udziału. Nie publikujemy list gości.',
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
  title: 'Różne formy obecności. Wspólny standard.',
  intro:
    'THE ROOM łączy otwarte treści z bardziej kameralnymi formami spotkania. Każda z nich ma własny charakter i zasady dostępu.',
  labels: { level: 'Poziom', audience: 'Dla kogo', access: 'Dostęp' },
  levels: [
    {
      number: '01',
      name: 'Strona i Bookazine',
      audience: 'Dla prawników, od starszego associate’a do partnera.',
      access:
        'Treści strony są otwarte. Bookazine to planowane wydawnictwo THE ROOM, dostępne na zamówienie po uruchomieniu publikacji.',
      status: { label: 'Bookazine', value: 'czerwiec 2027' },
      action: { label: 'Poznaj tematy', href: '#redakcja' },
    },
    {
      number: '02',
      name: 'Summit',
      audience: 'Dla partnerów i doświadczonych prawników, którzy kształtują lub zakładają kancelarię.',
      access: 'Na zaproszenie lub zgłoszenie.',
      action: { label: 'Zobacz spotkania', href: '#spotkania' },
    },
    {
      number: '03',
      name: 'Inner Circle',
      audience: 'Dla właścicieli i partnerów zarządzających.',
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
  title: 'Kto zaprasza do rozmowy.',
  intro:
    'Za jakością kręgu stoją ludzie odpowiedzialni za temat, dobór gości i sposób prowadzenia spotkań.',
  portraitPlaceholder: 'Portret w przygotowaniu',
});

export type Article = {
  title: string;
  dek: string;
  pillar: string;
  status: string;
};

export const EDITORIAL = typeset({
  title: 'Pytania, które warto zabrać do rozmowy.',
  intro:
    'Kancelaria 2030, technologia, przestrzeń pracy i życie poza sprawami klientów. Cztery perspektywy na przyszłość zawodu.',
  pillarsTitle: 'Obszary redakcyjne',
  pillars: [
    { name: 'Kancelaria 2030', body: 'Przywództwo, zespoły i przyszłe modele pracy.' },
    { name: 'Legal Workspace', body: 'AI, narzędzia i cyfrowa organizacja pracy.' },
    { name: 'Business Space', body: 'Środowisko kancelarii i warunki skupienia.' },
    { name: 'Lifestyle', body: 'Życie obok spraw klientów.' },
  ],
  articlesTitle: 'Zapowiedzi tekstów',
  featured: {
    title: 'Co mierzymy, kiedy liczymy godziny?',
    dek: 'O tym, co godzina mówi o pracy prawnika — i czego o niej nie mówi.',
    pillar: 'Kancelaria 2030',
    status: 'Zapowiedź tekstu',
  } satisfies Article,
  secondary: [
    {
      title: 'AI w kancelarii. Co warto oddać narzędziom?',
      dek: 'Gdzie narzędzia odciążają, a gdzie zaczyna się prawniczy osąd.',
      pillar: 'Legal Workspace',
      status: 'Zapowiedź tekstu',
    },
    {
      title: 'Przestrzeń do skupienia. Jak środowisko kancelarii wspiera pracę?',
      dek: 'O biurze, które nie jest tłem, lecz narzędziem.',
      pillar: 'Business Space',
      status: 'Zapowiedź tekstu',
    },
  ] satisfies Article[],
  authorLabel: 'Autor',
  publicationsTitle: 'Wydawnictwa',
  publications: [
    {
      name: 'Bookazine 01',
      body: 'Pierwszy numer wydawnictwa THE ROOM: rozmowy, eseje i fotografie wokół pytania „Koniec godziny?”.',
      status: 'Czerwiec 2027',
    },
    {
      name: 'Raport Stawek',
      body: 'Badanie stawek i modeli rozliczeń w polskich kancelariach. Punkt odniesienia do rozmowy o wartości pracy.',
      status: 'Wyniki jesienią 2027',
    },
  ],
});

export const INVITATION = typeset({
  title: 'Poproś o zaproszenie.',
  description:
    'Napisz, co Cię interesuje: krąg THE ROOM, Summit lub kolacja. Prośba o zaproszenie nie jest potwierdzeniem udziału.',
  processTitle: 'Po wysłaniu prośby',
  faqTitle: 'Najczęstsze pytania',
  faq: [
    {
      q: 'Czy muszę prowadzić własną kancelarię?',
      a: 'Otwarte treści są kierowane także do prawników, którzy nie prowadzą własnej kancelarii. Summit jest adresowany do partnerów i doświadczonych prawników kształtujących lub zakładających kancelarię. Inner Circle jest przeznaczony dla właścicieli i partnerów zarządzających.',
    },
    {
      q: 'Czy potrzebuję polecenia?',
      a: 'W formularzu możesz wskazać osobę polecającą.',
      fillable: 'referralRules',
    },
    {
      q: 'Czym różni się Summit od Inner Circle?',
      a: 'O udział w Summicie można poprosić lub otrzymać zaproszenie. Inner Circle to najwęższy krąg, dostępny wyłącznie na zaproszenie.',
    },
    {
      q: 'Co stanie się po wysłaniu prośby?',
      a: 'Prośba nie oznacza automatycznego potwierdzenia udziału.',
      fillable: 'contactProcess',
      demoNote: 'W tej wersji strony formularz działa jako podgląd i nie wysyła zgłoszeń.',
    },
    {
      q: 'Kiedy poznam miejsce spotkania?',
      a: 'Miejsce i dokładny adres są przekazywane po potwierdzeniu udziału. Publicznie nie udostępniamy list gości.',
    },
  ] as { q: string; a: string; fillable?: 'referralRules' | 'contactProcess'; demoNote?: string }[],
});

export const FORM = typeset({
  title: 'Prośba o zaproszenie',
  intentLegend: 'Czego dotyczy prośba?',
  selectedMeeting: 'Wybrane spotkanie',
  changeMeeting: 'Zmień',
  removeMeeting: 'Usuń wybór spotkania',
  meetingCleared: 'Usunięto wybór spotkania. Prośba dotyczy formatu ogólnie.',
  optional: 'opcjonalnie',
  fields: {
    name: { label: 'Imię i nazwisko' },
    email: { label: 'E-mail' },
    firm: { label: 'Kancelaria', help: 'Jeśli kancelaria dopiero powstaje, wpisz „w trakcie tworzenia”.' },
    city: { label: 'Miasto' },
    referrer: { label: 'Kto Cię poleca?', help: 'Imię i nazwisko osoby z kręgu, jeśli ktoś Cię poleca.' },
    message: { label: 'Wiadomość', help: 'Jakie pytanie lub temat chcesz wnieść do rozmowy?' },
  },
  errors: {
    nameMissing: 'Wpisz imię i nazwisko.',
    nameShort: 'Imię i nazwisko powinno mieć co najmniej 2 litery.',
    emailMissing: 'Wpisz adres e-mail.',
    emailInvalid: 'Sprawdź adres e-mail. Powinien mieć postać nazwa@domena.pl.',
    firmMissing: 'Wpisz nazwę kancelarii albo „w trakcie tworzenia”.',
    summaryOne: 'Popraw 1 pole, aby sprawdzić prośbę:',
    summaryMany: (n: number) => `Popraw ${n} ${n < 5 ? 'pola' : 'pól'}, aby sprawdzić prośbę:`,
  },
  demo: {
    notice: 'To podgląd formularza. Dane nie zostaną wysłane.',
    submit: 'Sprawdź prośbę o zaproszenie',
    success: 'Formularz jest wypełniony poprawnie. To podgląd — dane nie zostały wysłane.',
  },
  live: {
    submit: 'Wyślij prośbę o zaproszenie',
    sending: 'Wysyłanie prośby…',
    success: 'Prośba o zaproszenie dotarła. To nie jest jeszcze potwierdzenie udziału.',
    error: 'Nie udało się wysłać prośby. Wpisane dane zostały w formularzu — spróbuj ponownie za chwilę.',
  },
  privacy: {
    title: 'Dane osobowe',
    body: 'Dane z formularza posłużą wyłącznie do odpowiedzi na prośbę o zaproszenie.',
    link: 'Informacja o prywatności',
  },
});

export const FOOTER = typeset({
  organizerLabel: 'Organizator',
  contactLabel: 'Kontakt',
  draftStatus: 'Materiał roboczy',
  legal: {
    title: 'Nota prawna',
  },
  privacy: {
    title: 'Prywatność',
    facts: [
      'W tej wersji strony formularz działa jako podgląd: nie wysyła i nie zapisuje wpisanych danych.',
      'Strona nie korzysta z narzędzi analitycznych, pikseli reklamowych ani plików cookie służących śledzeniu.',
    ],
    adminLabel: 'Administrator danych',
  },
  partners: {
    title: 'Partnerzy',
  },
  photos: {
    title: 'Fotografie',
    intro: 'Zdjęcia ilustracyjne z serwisu Unsplash, na licencji Unsplash.',
    license: 'Licencja Unsplash',
    licenseUrl: 'https://unsplash.com/license',
  },
  closing: 'Pokój dla tych, którzy prowadzą.',
  year: '2026',
});
