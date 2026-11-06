---
name: THE ROOM
description: Ciepły, redakcyjny minimalizm kameralnego kręgu adwokatów i radców prawnych.
colors:
  stone-paper: "#f3efe8"
  deep-umber: "#2e2721"
  linen-surface: "#e4ddd2"
  clay: "#9a6b4f"
  umber-soft: "#625549"
  umber-hover: "#47392f"
  control-stroke: "#857769"
  field-white: "#fbf9f5"
  brick-error: "#8a2d1e"
  paper-soft: "#cfc5b8"
  clay-light: "#c49a7e"
  hairline: "rgb(46 39 33 / 0.16)"
  hairline-dark: "rgb(243 239 232 / 0.22)"
typography:
  display:
    fontFamily: "EB Garamond, Garamond, Times New Roman, serif"
    fontSize: "clamp(3rem, 1.6rem + 5.6vw, 6rem)"
    fontWeight: 400
    lineHeight: 0.98
    letterSpacing: "-0.022em"
  headline:
    fontFamily: "EB Garamond, Garamond, Times New Roman, serif"
    fontSize: "clamp(2.5rem, 1.6rem + 3.5vw, 4.5rem)"
    fontWeight: 400
    lineHeight: 1.02
    letterSpacing: "-0.018em"
  title:
    fontFamily: "EB Garamond, Garamond, Times New Roman, serif"
    fontSize: "clamp(1.875rem, 1.35rem + 2vw, 3rem)"
    fontWeight: 400
    lineHeight: 1.08
    letterSpacing: "-0.012em"
  subtitle:
    fontFamily: "EB Garamond, Garamond, Times New Roman, serif"
    fontSize: "clamp(1.5rem, 1.32rem + 0.7vw, 1.875rem)"
    fontWeight: 500
    lineHeight: 1.15
  item:
    fontFamily: "EB Garamond, Garamond, Times New Roman, serif"
    fontSize: "clamp(1.25rem, 1.15rem + 0.4vw, 1.5rem)"
    fontWeight: 400
    lineHeight: 1.3
  lead:
    fontFamily: "Inter Variable, system-ui, sans-serif"
    fontSize: "clamp(1.125rem, 1.06rem + 0.3vw, 1.25rem)"
    fontWeight: 400
    lineHeight: 1.6
  body:
    fontFamily: "Inter Variable, system-ui, sans-serif"
    fontSize: "clamp(1.0625rem, 1.02rem + 0.18vw, 1.125rem)"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Inter Variable, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 600
    lineHeight: 1.4
  caption:
    fontFamily: "Inter Variable, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: 1.45
rounded:
  sm: "2px"
  md: "3px"
spacing:
  gutter: "clamp(20px, 4vw, 48px)"
  column-gap: "clamp(20px, 2.4vw, 32px)"
  section: "clamp(56px, 2.5rem + 4.5vw, 112px)"
  container: "1240px"
  header-mobile: "64px"
  header-desktop: "76px"
components:
  button-primary:
    backgroundColor: "{colors.deep-umber}"
    textColor: "{colors.stone-paper}"
    rounded: "{rounded.md}"
    padding: "12px 26px"
    height: "50px"
  button-primary-hover:
    backgroundColor: "{colors.umber-hover}"
    textColor: "{colors.stone-paper}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.deep-umber}"
    rounded: "{rounded.md}"
    padding: "10px 18px"
    height: "44px"
  button-outline-hover:
    backgroundColor: "{colors.linen-surface}"
  status-tag:
    textColor: "{colors.umber-soft}"
    rounded: "{rounded.sm}"
    padding: "3px 10px"
    typography: "{typography.caption}"
  input:
    backgroundColor: "{colors.field-white}"
    textColor: "{colors.deep-umber}"
    rounded: "{rounded.md}"
    padding: "12px 14px"
    height: "50px"
  form-panel:
    backgroundColor: "{colors.linen-surface}"
    rounded: "{rounded.sm}"
    padding: "clamp(24px, 3.4vw, 48px)"
---

# Design System: THE ROOM

## Overview

**Creative North Star: "The Carefully Set Quarterly"**

THE ROOM wygląda jak starannie wydawana publikacja o przyszłości zawodu prawnika, a nie jak strona produktu. Jakość wynika z kompozycji, proporcji, typografii i precyzji detalu, nie z efektów. Kamienny, ciepły papier to podłoże. Głęboki brąz pełni rolę farby drukarskiej. Glina pojawia się tylko jako ornament. Całość jest jasna, z jedną ciemną rozkładówką, i spokojna, z dużą ilością powietrza, ale bez pustych ekranów.

Treść prowadzi, obraz jej służy. Fotografie są ilustracyjnymi tablicami podporządkowanymi tekstowi (ok. 40% szerokości w hero) i zawsze noszą podpis „Zdjęcie ilustracyjne”. Struktura opiera się na cienkich liniach podziału i asymetrycznej siatce redakcyjnej, nie na kartach. Ruch jest jednorazowy i cichy: jedyny autorski moment to „wejście do pokoju” w hero, a reszta strony ma się ułożyć, nie wystąpić.

Odrzucone przez klienta: złote gradienty, glassmorphism, neony, wielkie cienie, ozdobne ikony w każdym bloku, identyczne karty, symbole wagi, młotka, paragrafu i kolumn sądowych.

**Key Characteristics:**
- Jasny, ciepły papier (#f3efe8) z jedną ciemną sekcją (manifest).
- Prosta, duża EB Garamond w nagłówkach, Inter w tekście i interfejsie.
- Cienkie linie podziału 1px zamiast ramek i kart.
- Glina wyłącznie w ornamentach: kreski, romby, rama „pokoju”, duże numery 01–03.
- Uczciwe placeholdery i statusy pisane tekstem, nie kolorem.

## Colors

Paleta ziemi i papieru: ciepłe neutrały z jednym oszczędnym, gliniastym akcentem.

### Primary
- **Deep Umber**: tekst, nagłówki, główne przyciski, tło jedynej ciemnej sekcji. Kontrast 12,8:1 na papierze.

### Secondary
- **Clay**: wyłącznie dekoracja (kreska przy deskryptorze, rama zdjęcia w hero, romby statusów i zasad, numery poziomów 01–03 od 28 px wzwyż). Na papierze ma tylko 3,99:1, więc nigdy nie służy do drobnego tekstu.
- **Clay Light**: ten sam ornament na ciemnym tle (numery manifestu, romby zasad).

### Neutral
- **Stone Paper**: tło główne strony, a także tekst na ciemnej rozkładówce.
- **Linen Surface**: powierzchnie pomocnicze, czyli panel formularza, pas wydawnictw i tło placeholderów portretów.
- **Umber Soft**: tekst drugorzędny, opisy, etykiety, placeholdery (6,3:1 na papierze, 5,3:1 na lnie).
- **Control Stroke**: obrysy pól, opcji i tagów oraz mocniejsze linie list (≥3:1 na każdym jasnym tle).
- **Hairline**: dekoracyjne linie podziału sekcji i grup.
- **Field White**: wnętrze pól formularza i wybranych opcji.
- **Paper Soft / Hairline Dark**: tekst drugorzędny (8,6:1) i linie w sekcji ciemnej.
- **Brick Error**: komunikaty błędów, zawsze z ikoną i treścią mówiącą, co poprawić.

### Named Rules
**The Clay Is Ornament Rule.** Glina nigdy nie niesie drobnego tekstu na jasnym tle. Wolno jej rysować linie, romby, ramę i numery od 28 px wzwyż.

**The One Dark Spread Rule.** Na stronie jest tylko jedna sekcja na ciemnym tle. Pozostałe sekcje różnią się kompozycją, nie kolorem tła.

## Typography

**Display Font:** EB Garamond (z Garamond, Times New Roman)
**Body Font:** Inter Variable (z system-ui)

**Character:** Spokojna, klasyczna szeryfa prowadzi głos publikacji. Czytelny grotesk niesie treść i interfejs. Oba kroje są hostowane lokalnie, tylko w zestawach latin i latin-ext (polskie znaki).

### Hierarchy
- **Display** (400, 48→96 px, 0.98): jedno duże pytanie roku („Koniec godziny?”). Jedyny szczyt skali na stronie.
- **Headline** (400, 40→72 px, 1.02): H1 hero, łamany na dwie zrównoważone linie na desktopie.
- **Title** (400, 30→48 px, 1.08): tytuły sekcji, maks. 22ch, z `text-wrap: balance`.
- **Subtitle** (500, 24→30 px): nazwy formatów i poziomów, tezy manifestu, tytuł formularza.
- **Item** (400, 20→24 px, 1.3): pytania do rozmowy, filary redakcyjne, tytuły zapowiedzi i punktów manifestu.
- **Lead** (Inter 400, 18→20 px, 1.6): leady sekcji i hero, maks. ok. 46–50ch.
- **Body** (Inter 400, 17→18 px, 1.65): tekst ciągły, długie akapity w zakresie 55–68 znaków.
- **Label** (Inter 600, 15 px): nagłówki grup (`h3`) i etykiety pól. Zapisane zdaniem, bez wersalików i rozstrzelenia.
- **Caption** (Inter 500, 14 px): tagi statusów, podpisy zdjęć, opisy pomocnicze. Nigdy mniejsze niż 14 px.

### Named Rules
**The Upright Garamond Rule.** Nagłówki są proste: bez kursywy, bez wersalików, z lekkim ściśnięciem (−0.012 do −0.022em) tylko w dużych stopniach.

**The Polish Setting Rule.** Jednoliterowe spójniki i „THE ROOM” są wiązane twardą spacją (`typeset()`), więc żadne „w”, „i” ani „z” nie zostaje na końcu wiersza.

## Layout

Dwunastokolumnowa siatka redakcyjna w kontenerze 1240 px. Margines boczny wynosi 20 px na telefonie i do 48 px na desktopie, odstęp kolumn 20→32 px. Kolumny mają różne proporcje: hero 7/5 (ok. 60/40), spotkania 7/5 z przesuniętym w dół drugim modułem, nagłówki sekcji 6 + 5 z wyrównaniem do dołu, zaproszenie 5 + 6 z przyklejoną lewą kolumną (≥960 px). Gdy kolumna mieści się w oknie, stoi 24 px pod nagłówkiem; gdy jest wyższa (niskie okno, rozwinięte FAQ), trzyma się dolnej krawędzi okna, a krawędź nagłówka wypada zawsze 16 px nad granicą bloku, nigdy w połowie tytułu czy akapitu. Odstęp sekcji wynosi 56→112 px, a nad nagłówkiem zawsze jest więcej miejsca niż pod nim.

Karty i tabele dopasowują się do szerokości, jaką faktycznie dostają. Karta gospodarza w wąskim miejscu (telefon < 560 px oraz dwie karty obok siebie przy 900–1199 px) układa monogram z imieniem i rolą w jednym wierszu, a biogram i cytat na pełnej szerokości; układ boczny wraca od 1200 px. Tabela poziomów ma pięć kolumn od 1200 px, a przy 900–1199 px cztery, z linkiem pod opisem dostępu. Cztery obszary redakcyjne stoją 2×2 od 380 px i w jednym rzędzie od 1000 px. Samodzielne linki mają obszar dotyku co najmniej 44 px, także gdy wizualnie są tekstem.

Sekcje oddziela linia 1 px albo zmiana tła (tylko manifest i stopka: manifest Deep Umber, stopka głębszy brąz #1e1915). Projekt zaczyna się od telefonu: pojedyncza kolumna, tekst i CTA przed obrazem, brak poziomego przewijania od 320 px. Główny próg desktopu to 900 px (nawigacja, siatki dwukolumnowe). Listy przechodzą na 2–4 kolumny przy 600, 700, 760, 1000 i 1100 px.

Nagłówek jest stały i niski (64/76 px), a hero ma odstęp na jego wysokość. Przy przewijaniu pojawia się tylko linia podziału. Podczas wejścia na stronę (jasna scena, ciemne tylko wnętrze sygnetu, do którego przez drzwi wpada światło: rysowanie ścian, otwarcie prawego skrzydła na zawiasie, odsłonięcie „THE ROOM”, przejście przez drzwi przy przewijaniu) nagłówek jest ukryty i pokazuje się po wejściu do środka. Kotwice uwzględniają nagłówek przez `scroll-padding-top`.

## Elevation & Depth

System jest płaski. Głębię dają tonalne warstwy (papier → len → biel pola) i linie. Jedynym cieniem jest miękki spadek pod rozwiniętym menu mobilnym, który oddziela je od treści.

### Shadow Vocabulary
- **Menu drop** (`box-shadow: 0 18px 32px -24px rgb(46 39 33 / 0.35)`): wyłącznie panel menu mobilnego.

### Named Rules
**The Flat Paper Rule.** Karty, przyciski i zdjęcia nie mają cieni. Stan pokazuje się kolorem, obrysem albo podkreśleniem.

## Shapes

Kształty są niemal proste: 2 px dla tagów i paneli, 3 px dla przycisków, pól i opcji. Okrąg pojawia się tylko w kontrolce radio. Romb 7–9 px w glinie to znacznik statusu i punktów zasad. Zdjęcia są prostokątne i kadrowane `object-fit: cover` z punktem ostrości zapisanym w danych (osobno dla telefonu i desktopu).

### Named Rules
**The Room Frame Rule.** Wiodącą fotografię obejmuje cienka rama z gliny, odsunięta o 14 px, z „wejściem” u dołu: dolna krawędź ma tylko po 21% szerokości z każdej strony, jak w sygnecie. Podpis „Zdjęcie ilustracyjne” stoi w tym wejściu. Rama nie jest nowym znakiem i w stanie spoczynku nie zawiera litery Λ; Λ pojawia się wyłącznie jako przejściowy kształt otwierania zdjęcia (patrz Motion), a sygnet zawsze zostaje nietknięty. Używa się jej oszczędnie, raz na widok. Bez portretu ten sam motyw, mniejszy i w 55% krycia, obejmuje monogram gospodarza.

## Components

### Buttons
- **Shape:** prawie proste narożniki (3 px).
- **Primary:** brąz z jasnym napisem, 50 px wysokości, Inter 500 16 px. Hover przyciemnia do Umber Hover w 180 ms.
- **Outline:** obrys 1 px w brązie, przezroczyste tło, 44 px. Hover wypełnia lnem. Strzałka przesuwa się o 3 px.
- **Text link:** podkreślenie w Control Stroke, przy hoverze w kolorze tekstu. Strzałka rysowana kreską 1.5 px. Każdy cel ma co najmniej 44 px.
- **Focus:** obrys 2 px w kolorze tekstu z odsunięciem 3 px (w ciemnej sekcji w kolorze papieru).

### Status Tags
- **Style:** obrys 1 px Control Stroke, tekst Umber Soft 14 px, bez tła. Status zawsze jest zapisany słowami („Temat w przygotowaniu”, „Zapowiedź tekstu”, „W przygotowaniu”), nie samym kolorem.

### Inputs / Fields
- **Style:** biel pola, obrys 1 px Control Stroke, 3 px, wysokość 50 px, tekst 17–18 px. Kursor w kolorze gliny.
- **Label:** trwała etykieta nad polem (Inter 600). Pola opcjonalne mają dopisek „(opcjonalnie)”, a opis pomocniczy stoi między etykietą a polem.
- **Focus:** obrys 2 px w kolorze tekstu z odsunięciem 2 px.
- **Error:** obrys w kolorze błędu, wzmocniony do 2 px, komunikat z ikoną nad polem i podsumowanie błędów z linkami do pól.
- **Choice options:** opcje radio jako pola 56 px z nazwą i podpowiedzią. Wybrana opcja ma podwójny obrys w brązie.

### Navigation
- Logo po lewej (34/38 px wysokości), cztery linki Inter 500 15 px z podkreśleniem w glinie przy hoverze, główny przycisk w wariancie 44 px. Poniżej 900 px zostaje przycisk „Menu” otwierający panel z linkami w EB Garamond 24 px i pełnoszerokim CTA.

### Ruled Lists
- Treści grupowe (pytania, poziomy, tezy, filary, zapowiedzi, FAQ, zasady) są wierszami lub kolumnami z linią 1 px nad każdym elementem, nie kartami. Na desktopie poziomy kręgu tworzą tabelę o stałych kolumnach: numer 88 px, nazwa, dla kogo, dostęp, działanie 200 px.

### Placeholders
- Brakujące dane: tekst w nawiasach kwadratowych, Umber Soft, kropkowane podkreślenie. Portret do uzupełnienia: pole lnu 4:5 z podpisem „Portret w przygotowaniu”.

### Manifest Gallery
- Karty w kamiennej bieli na ciemnym tle manifestu, rogi 0, proporcja 4:5, szerokość 248–340 px. U góry kreska z gliny, potem nagłówek w EB Garamond, a opis Inter przy dolnej krawędzi. Numer punktu w EB Garamond, w kolorze Clay Light, pod kartą.
- Karty jadą po łuku okręgu (głębokość ok. 7% szerokości ekranu, 36–130 px) i obracają się stycznie do niego, a krawędzie galerii wygaszają się maską. Pętla jest nieskończona. Ruch podąża za celem z wygładzeniem (0.09 na klatkę) i dociąga do najbliższej karty. Przy ograniczonym ruchu zmiana jest natychmiastowa.
- Galeria nigdy nie przejmuje pionowego przewijania strony.

### Motion
- **Wejście do pokoju (jedyny autorski moment, hero, ok. 1,4 s, raz).** Rama z gliny rysuje się jedną linią od progu: dolne progi do narożników (260 ms), ściany w górę (420 ms), sufit do środka (440 ms). Od 280 ms zdjęcie otwiera się przez wejście: `clip-path` z wąskiego Λ u progu, przez kształt szczytu, do pełnego kadru (1150 ms), i osiada ze skali 1.07. Etykieta dorysowuje swoją linię, dwa wiersze tytułu wychodzą spod progu (maska, odstęp 130 ms), potem lead, przyciski i nota (fade + 10 px). Wszystko w `src/styles/motion.css`, czysty CSS, `animation-fill-mode: backwards`, więc stan końcowy to statyczny wygląd strony. Na ekranach < 900 px rama czeka, aż wjedzie w ekran.
- **Echo motywu.** Zdjęcia spotkań wchodzą tym samym wejściem (1000 ms), gdy karta pojawia się na ekranie. Linie nad listami (pytania roku, poziomy, tezy manifestu, gospodarze, obszary, teksty) dorysowują się od lewej (1100 ms) razem z wejściem treści. Nie dodawaj tego motywu do kolejnych elementów: działa, bo jest rzadki.
- Jednorazowe wejście sekcji: przesunięcie 12 px i fade w 520 ms (`cubic-bezier(0.16, 1, 0.3, 1)`), odstęp 70 ms w grupie. Zmiany stanu trwają 180 ms, rozwijanie 220 ms (natywne details i grid 0fr→1fr bez przycinania). Zdjęcia na urządzeniach z hoverem powiększają się do 1.02. Treść jest widoczna bez JS.
- `prefers-reduced-motion`: bez rysowania, otwierania i przesunięć; zostaje tylko 480 ms pojawienia się zdjęcia w hero (sama przezroczystość).

## Do's and Don'ts

### Do:
- **Do** trzymać jasny papier (#f3efe8) jako podłoże i brąz (#2e2721) jako jedyny kolor tekstu i głównych przycisków.
- **Do** używać gliny (#9a6b4f) tylko w ornamentach i liczbach od 28 px.
- **Do** budować sekcje z linii 1 px i asymetrycznych kolumn, z większym odstępem nad nagłówkiem niż pod nim.
- **Do** zapisywać każdy status słowami i oznaczać fotografie podpisem „Zdjęcie ilustracyjne”.
- **Do** utrzymywać cele dotykowe ≥44 px, kontrast tekstu ≥4,5:1 i widoczny fokus 2 px.

### Don't:
- **Don't** stosować złotych gradientów, glassmorphismu, neonów, wielkich cieni ani ozdobnych ikon w każdym bloku.
- **Don't** budować strony z identycznych kart ani stylizować nieklikalnych zapowiedzi jak linków.
- **Don't** używać numeracji 01 / 02 / 03 poza poziomami kręgu.
- **Don't** dodawać symboli wagi, młotka, paragrafu ani kolumn sądowych.
- **Don't** zmieniać kolejnych sekcji w osobne kolorowe plansze. Ciemna jest tylko jedna.
