# THE ROOM - landing page

Landing kameralnego kręgu adwokatów i radców prawnych. React + TypeScript + Vite, ręcznie pisany CSS, bez bibliotek animacji i UI.

## Uruchomienie

```bash
npm install
npm run dev        # podgląd deweloperski: http://localhost:5173
npm run build      # build produkcyjny + prerender HTML do dist/
npm run preview    # podgląd buildu: http://localhost:4173
```

`npm run build` renderuje całą stronę do statycznego HTML (`scripts/prerender.mjs`), więc treść, nawigacja, kotwice, FAQ i stopka działają także bez JavaScriptu. JavaScript dokłada interakcje (menu mobilne, galeria kart manifestu, presety formularza, walidację, jednorazowe wejścia sekcji).

Folder `dist/` można wgrać na dowolny hosting statyczny.

## Formularz: tryb DEMONSTRACYJNY

**Formularz w tej wersji nie wysyła zgłoszeń.** Sprawdza poprawność pól i pokazuje komunikat „Formularz jest wypełniony poprawnie. To podgląd - dane nie zostały wysłane.” Nic nie trafia do sieci, localStorage ani analityki.

Prawdziwy endpoint podłącza się w jednym miejscu: `src/config/form.ts` (lub zmienną `VITE_FORM_ENDPOINT` przy buildzie). Po jego ustawieniu formularz automatycznie:

- zmienia przycisk na „Wyślij prośbę o zaproszenie”,
- wysyła POST z JSON-em, blokuje podwójne wysłanie, pokazuje stan wysyłania,
- pokazuje sukces dopiero po odpowiedzi 2xx serwera, a przy błędzie zachowuje wpisane dane.

Walidację po stronie serwera trzeba zbudować razem z endpointem. Opis oczekiwanego formatu danych jest w `src/config/form.ts`.

## Struktura

```
src/
  content/
    do-uzupelnienia.ts   ← WSZYSTKIE brakujące dane (organizator, e-mail, gospodarze, terminy, partnerzy…)
    site.ts              ← teksty wszystkich sekcji, FAQ, etykiety formularza
    images.ts            ← zdjęcia: pliki, alt, kadrowanie, autorzy, licencja
  config/form.ts         ← endpoint formularza (tryb demo / rzeczywisty)
  components/            ← sekcje: Header, Hero, ThemeOfYear, Meetings, Circle, Manifest, Hosts, Editorial, Invitation(+Form), Footer
  lib/                   ← stan formularza (presety CTA), wejścia sekcji, polska typografia (twarde spacje)
  styles/                ← tokens.css (kolory, typografia, odstępy, ruch), fonts, base, layout, sections, form
public/
  brand/                 ← logo SVG z paczki klienta (ciemne na jasne tło, jasne na ciemne)
  images/                ← zdjęcia w AVIF / WebP / JPEG, 480–2000 px
scripts/
  optimize-images.mjs    ← generuje warianty zdjęć: npm run images -- <katalog-z-oryginałami>
  prerender.mjs          ← wstawia wyrenderowany HTML do dist/index.html
```

Identyfikatory sekcji: `start`, `temat-roku`, `spotkania`, `krag`, `manifest`, `gospodarze`, `redakcja`, `zaproszenie`; formularz: `formularz`; spotkania: `summit-01`, `kolacja-01`.

## Najważniejsze decyzje

- **Hero:** typografia i informacja o kręgu przed obrazem (ok. 60/40). Zdjęcie dłoni nad notatnikiem stoi w cienkiej ramie z „wejściem” u dołu - echo sygnetu THE ROOM. Rama nie jest nowym znakiem, tylko linią z gliny. Na telefonie tekst i CTA są przed zdjęciem.
- **Logo:** oryginalne pliki SVG bez modyfikacji (`light/` brązowe na jasnym tle, `dark/` jasne w manifeście). Wysokość 34–40 px, sprawdzona w rzeczywistej skali.
- **Kolor:** dominuje jasna wersja; jedyną ciemną sekcją jest manifest. Glina #9A6B4F wyłącznie w ornamentach i dużych numerach 01–03, nigdy w drobnym tekście na jasnym tle. Tekst drugorzędny #625549 ma kontrast 6,3:1.
- **Numery 01–03** występują tylko w sekcji kręgu. Manifest używa zwykłej numeracji 1–10.
- **Krąg** jest tabelą zasad dostępu, a nie pakietami: bez cen, „najpopularniejszy” i przycisku zapisu do Inner Circle.
- **CTA spotkań** („Poproś o miejsce”, a bez potwierdzonego terminu „Zapytaj o udział”) przewijają do `#formularz`, ustawiają intencję i spotkanie, pokazują je w podsumowaniu z „Zmień” / „Usuń wybór spotkania” i nie kasują wpisanych danych. Stan „Brak miejsc” jest obsłużony w danych (`availability`), ale nieużywany.
- **Zapowiedzi redakcyjne** są nieklikalne, oznaczone „Zapowiedź tekstu”; autorzy czekają na uzupełnienie (patrz niżej).
- **Fonty:** EB Garamond (400, 500) i Inter Variable, hostowane lokalnie, tylko zestawy latin i latin-ext (polskie znaki), `font-display: swap`, preload krojów pierwszego ekranu.
- **Ruch** (`src/styles/motion.css`): jeden autorski moment, „wejście do pokoju” w hero. Rama z gliny rysuje się od progu, zdjęcie otwiera się przez wejście Λ z sygnetu, a wiersze tytułu wychodzą spod progu (ok. 1,4 s, raz, czysty CSS). Echo motywu: zdjęcia spotkań wchodzą tym samym wejściem, linie nad listami dorysowują się od lewej. Do tego jednorazowe wejście sekcji (12 px, 520 ms), przejścia 180 ms i rozwijanie 220 ms. Stan końcowy każdej animacji to statyczny wygląd strony, więc treść jest widoczna bez JS. Przy `prefers-reduced-motion` nie ma rysowania ani przesunięć, zostaje tylko łagodne pojawienie się zdjęcia w hero.
- **Manifest: galeria kart** (`src/components/Manifest.tsx`, `src/lib/gallery.ts`): 10 punktów manifestu widać od razu, bez przycisku „Przeczytaj pełny manifest”. Karty w kamiennej bieli (rogi 0) jadą po łuku, w stylu „Circular Gallery” z React Bits, w nieskończonej pętli. Na karcie jest nagłówek i opis punktu, a pod kartą jego numer. Sterowanie: przeciąganie z rozpędem i dociąganiem, poziomy gest touchpada, strzałki na klawiaturze i dwa przyciski. Pionowe kółko myszy przewija stronę, a nie galerię. Karty to zwykły tekst HTML (nie WebGL), więc czytają je czytniki ekranu, a bez JS galeria jest poziomym paskiem z przewijaniem.
- **Wejście na stronę** (`src/components/Intro.tsx`, `src/lib/intro.ts`, `src/styles/intro.css`, skrypt w `<head>` w `index.html`): na jasnym tle (kamienna biel przez cały czas) brązowa linia rysuje ściany sygnetu, wnętrze pokoju gaśnie (ciemny jest tylko kwadrat), prawe skrzydło drzwi obraca się na zawiasie i ląduje dokładnie na prawym ramieniu Λ, lewa linia (50% krycia) pojawia się na końcu, potem odsłania się „THE ROOM”, zdanie o kręgu i „Wejdź”. Przez otwarte drzwi do ciemnego pokoju wpada smuga jasnego światła. Przewijanie (albo „Wejdź”) ciepło zapala pokój (brąz → glina → kamienna biel) i przeprowadza przez drzwi do hero; przewinięcie w górę cofa scenę. Wejście jest pomijane, gdy adres prowadzi do sekcji (np. `/#formularz`), a przy `prefers-reduced-motion` logo stoi jako spokojna okładka. Nagłówek jest stały (`position: fixed`) i pojawia się dopiero po wejściu do środka. Prerenderowany HTML bez JS pokazuje zwykłą stronę.
- **Stopka:** głęboki brąz #1E1915 (ciemniejszy niż manifest), jasne logo, teksty w kamiennej bieli.
- **SEO:** `lang="pl"`, tytuł z briefu, opis i Open Graph, `noindex, nofollow`, dopóki strona zawiera placeholdery, bez danych strukturalnych.

## Placeholdery - dane do uzupełnienia

Wszystkie brakujące informacje są w jednym pliku: `src/content/do-uzupelnienia.ts`. Każde pole ma `value` (dziś `null`) i `placeholder` widoczny na stronie w nawiasie kwadratowym. Po wpisaniu potwierdzonej wartości komponenty same pokażą prawdziwą treść. Dane przykładowe z wcześniejszej wersji zostały usunięte zgodnie z redakcją copy.

| Miejsce na stronie | Placeholder |
|---|---|
| Spotkania → Summit | [Miasto], [Data do potwierdzenia], [Imię i nazwisko gospodarza], [Liczba miejsc do potwierdzenia]; status „Termin w przygotowaniu”, CTA „Zapytaj o udział” (`availability: 'w-przygotowaniu'`) |
| Spotkania → Kolacja | [Miasto], [Data i godzina do potwierdzenia], [Imię i nazwisko gospodarza], [Liczba miejsc do potwierdzenia] |
| Gospodarze THE ROOM (2 profile) | [Inicjały], [Imię i nazwisko], [Rola w THE ROOM], [Krótka informacja o doświadczeniu zawodowym], [Autoryzowana wypowiedź o powodach tworzenia THE ROOM] |
| Z redakcji (3 zapowiedzi) | [Autor do uzupełnienia] |
| Wydawnictwa → Raport Stawek | [Zakres badania do potwierdzenia] (w `site.ts`) |
| Zaproszenie → „Co dalej?”, FAQ 2 i 4 | [Sposób kontaktu i dalsze kroki do potwierdzenia przez organizatora.], [Zasady poleceń i ich znaczenie przy rozpatrywaniu próśb do potwierdzenia przez organizatora.] |
| Pod formularzem | [Informacja o przetwarzaniu danych do uzupełnienia i zatwierdzenia przed uruchomieniem formularza.] |
| Stopka | [Nazwa organizatora], [E-mail kontaktowy] (po wpisaniu staje się linkiem mailto) |
| Stopka → Nota prawna | [Dane rejestrowe i adres organizatora.], [Treść noty prawnej do uzupełnienia i zatwierdzenia.] |
| Stopka → Prywatność | [Administrator danych i dane kontaktowe do uzupełnienia.], [Treść informacji o przetwarzaniu danych do uzupełnienia i zatwierdzenia przed uruchomieniem zgłoszeń.] |
| Stopka → Partnerzy | [Potwierdzeni partnerzy i opis współpracy do uzupełnienia.] - lista marek z briefu (ADVOSYNC, MODUCTRL, NEUROSPACIALIST, NEUROBIOGRAPH) jest w danych, ale pokaże się dopiero razem z potwierdzonym opisem |
| Formularz | tryb podglądu (bez endpointu w `src/config/form.ts`) |

Portretów gospodarzy celowo nie bierzemy ze zdjęć stockowych. Po wpisaniu nazwiska pojawi się monogram z inicjałami, a po dodaniu pliku i ustawieniu `portrait` - zdjęcie.

Teksty robocze z briefu (manifest, FAQ, tematy) są oznaczone jako wersja robocza tam, gdzie brief tak je określa.

## Fotografie (Unsplash)

Wszystkie trzy zdjęcia pochodzą z bezpłatnej kolekcji Unsplash (licencja Unsplash: https://unsplash.com/license; nie Unsplash+). Licencję sprawdziłem 2026-11-05 na stronie każdego zdjęcia („Free to use under the Unsplash License”). Pliki są pobrane i zoptymalizowane lokalnie (AVIF/WebP/JPEG). Przy każdym zdjęciu widnieje podpis „Zdjęcie ilustracyjne”. Autorzy są wymienieni w stopce w rozwinięciu „Fotografie”.

| Plik | Autor | Źródło | Wykorzystanie |
|---|---|---|---|
| `hero-notatki` | Kelly Sikkema | https://unsplash.com/photos/a-person-sitting-at-a-table-with-a-book-and-pen-9n9La1suhjw | Hero: skupienie, notowanie, praca z tekstem |
| `summit-stol` | Dylan Gillis | https://unsplash.com/photos/people-sitting-on-chair-in-front-of-table-while-holding-pens-during-daytime-KdeqA3aTnBY | Spotkania: ilustracja formatu Summit |
| `kolacja-stol` | Ilnur Kalimullin | https://unsplash.com/photos/people-sitting-at-the-table-eating-6UdbanxgIIw | Spotkania: ilustracja formatu Kolacja |

Osób ze zdjęć nie przedstawiamy jako gospodarzy ani uczestników.

## Kroje i logo

- EB Garamond i Inter - SIL Open Font License (`src/assets/fonts/*-OFL.txt`).
- Logo THE ROOM (SVG) - pliki dostarczone przez klienta, bez zmian.
