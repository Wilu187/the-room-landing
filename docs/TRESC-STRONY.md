# THE ROOM - treść strony (inwentarz)

Cała treść landing page’u, sekcja po sekcji, w kolejności, w jakiej widzi ją odwiedzający. Przy każdej sekcji jest krótki opis tego, co się tam znajduje i jak działa (układ, karty, animacje, interakcje), a pod nim teksty dokładnie tak, jak są na stronie.

**Źródła tekstów w kodzie:**
- `src/content/site.ts` - wszystkie teksty sekcji;
- `src/content/do-uzupelnienia.ts` - dane osób, terminów i organizatora;
- `src/content/images.ts` - zdjęcia i ich opisy.

> ⚠ **Dane przykładowe.** Wszystko, co oznaczono symbolem ⚠, jest **fikcyjne**: dodane, żeby stronę dobrze się czytało. Dotyczy to osób, dat, miast, liczby miejsc, adresu, e-maila, terminów wydawnictw i tekstów prawnych. Przed publikacją każdą taką wartość trzeba podmienić na prawdziwą albo wyczyścić. Wtedy wraca placeholder w nawiasie kwadratowym (podany w tabeli na końcu). Strona ma ustawione `noindex`, więc nie pojawi się w Google.

---

## Spis sekcji

| # | Sekcja | Kotwica (link) | Tło |
|---|---|---|---|
| 0 | Wejście na stronę (animacja z logo) | - | jasne (kamienna biel), ciemne tylko wnętrze sygnetu |
| 1 | Nagłówek (topbar) | - | jasne |
| 2 | Hero | `#start` | jasne |
| 3 | Temat pierwszego roku | `#temat-roku` | jasne |
| 4 | Spotkania (Summit i Kolacja) | `#spotkania` | jasne |
| 5 | Krąg - poziomy 01, 02, 03 | `#krag` | jasne |
| 6 | Manifest i zasady rozmowy | `#manifest` | **ciemny brąz** (#2E2721) |
| 7 | Kto zaprasza do rozmowy (gospodarze) | `#gospodarze` | jasne |
| 8 | Z redakcji (artykuły i wydawnictwa) | `#redakcja` | jasne |
| 9 | Zaproszenie: opis, FAQ, formularz | `#zaproszenie`, formularz `#formularz` | jasne |
| 10 | Stopka | - | **najciemniejszy brąz** (#1E1915) |

---

## 0. Wejście na stronę (intro z logo)

**Co to jest:** pełnoekranowa scena, która gra raz przy wejściu na stronę. Na jasnym tle brązowa linia rysuje ściany sygnetu THE ROOM (kwadrat z wejściem u dołu), a wnętrze kwadratu gaśnie. Prawe ramię „Λ” otwiera się na zawiasie jak prawdziwe drzwi i zostawia przerywany łuk, jak na rzucie architekta. Na koniec pojawia się cienka lewa linia, a przez otwarte drzwi do ciemnego pokoju wpada smuga światła. Potem odsłania się napis „THE ROOM”, a pod nim zdanie i przycisk.

**Przy przewijaniu** (albo po kliknięciu „Wejdź”) pokój ciepło się zapala: brąz przechodzi przez glinę do bieli. Kamera przechodzi przez drzwi do środka i wjeżdża hero. Przewinięcie w górę cofa scenę. Nagłówek z menu jest w tym czasie ukryty.

**Kiedy się nie pokazuje:**
- link prowadzi prosto do sekcji (np. `/#formularz`);
- przeglądarka ma wyłączony JavaScript;
- przy ograniczonym ruchu w systemie logo stoi jako spokojna okładka, bez animacji.

**Teksty:**
- Logo: **THE ROOM** (sygnet + logotyp z dostarczonych plików)
- Zdanie pod logo: **Kameralny krąg adwokatów i radców prawnych w Polsce**
- Przycisk: **Wejdź**
- Podpowiedź pod przyciskiem (z animowaną pionową kreską): **albo przewiń**

---

## 1. Nagłówek (topbar)

**Co to jest:** niski pasek przyklejony do góry ekranu (76 px na komputerze, 64 px na telefonie). Logo jest wektorowe i prowadzi na początek strony. Przy przewijaniu pod paskiem pojawia się cienka linia. Na telefonie linki chowają się pod przyciskiem „Menu”, który rozwija panel z linkami i przyciskiem. Panel zamyka się klawiszem Escape albo po wybraniu pozycji.

**Teksty:**
- Logo (opis dla czytników ekranu): *THE ROOM - początek strony*
- Linki: **Krąg** · **Spotkania** · **Manifest** · **Artykuły**
- Przycisk (ciemny): **Poproś o zaproszenie** → przewija do formularza
- Telefon: **Menu** / **Zamknij**
- Ukryty link dla klawiatury (widoczny po Tab): *Przejdź do treści*

---

## 2. Hero (`#start`)

**Co to jest:** pierwszy ekran po wejściu. Po lewej (ok. 60%) jest tekst: zdanie z cienką kreską z gliny, duży tytuł w dwóch wierszach, opis, przyciski i dopisek o temacie roku. Po prawej (ok. 40%) jest zdjęcie dłoni nad notatnikiem w cienkiej ramie z gliny. Rama ma u dołu „wejście”, czyli echo sygnetu, i w nim podpis zdjęcia. Na telefonie tekst i przycisk są przed zdjęciem.

**Animacja:** rama rysuje się od progu w górę, zdjęcie otwiera się przez kształt „Λ”, a wiersze tytułu wysuwają się spod progu.

**Teksty:**
- Zdanie nad tytułem: **Kameralny krąg adwokatów i radców prawnych w Polsce**
- Tytuł (H1): **Pokój dla tych, / którzy prowadzą.**
- Opis: *Rozmowy o prowadzeniu kancelarii, przyszłości zawodu i świadomym sposobie pracy. W gronie prawników, których łączy wspólny standard.*
- Przycisk główny (ciemny): **Poproś o zaproszenie** → formularz
- Link drugorzędny ze strzałką: **Poznaj krąg →** → sekcja Krąg
- Dopisek pod kreską: *Temat pierwszego roku:* **Koniec godziny?** (link do sekcji Temat roku)
- Podpis zdjęcia: *Zdjęcie ilustracyjne*
- Opis zdjęcia (alt): *Dłonie opartego o drewniany stół człowieka nad otwartym notatnikiem, z piórem w dłoni.*

---

## 3. Temat pierwszego roku (`#temat-roku`)

**Co to jest:** sekcja bez zdjęć, tylko typografia. Po lewej jest bardzo duże pytanie „Koniec godziny?”, największy napis na stronie. Po prawej jest jego rozwinięcie. Niżej są trzy kolumny z pytaniami, każda z cienką linią u góry, która dorysowuje się od lewej. Na telefonie wszystko układa się jedno pod drugim.

**Teksty:**
- Zdanie z kreską z gliny: **Temat pierwszego roku**
- Nagłówek: **Koniec godziny?**
- Rozwinięcie: *Przyszłość kancelarii zaczyna się od pytań, które zadajemy dziś. Pierwszy rok THE ROOM poświęcamy wartości pracy prawnika - temu, jak ją tworzymy, jak ją oceniamy i jak wpływa na nią sposób, w jaki pracujemy.*
- Nagłówek grupy: **Pytania, które proponujemy do rozmowy**
- Pytanie 1: *Jak oceniać wartość pracy prawnika, gdy sama liczba godzin nie opisuje jej jakości?*
- Pytanie 2: *Co AI zmienia w organizacji kancelarii i roli prawniczego osądu?*
- Pytanie 3: *Jak prowadzić zespół bez opierania jego pracy na ciągłej dostępności?*

---

## 4. Spotkania (`#spotkania`)

**Co to jest:** dwa różne moduły wydarzeń obok siebie. Summit jest szerszy, ze zdjęciem 3:2. Kolacja jest węższa, ze zdjęciem kwadratowym, przesunięta niżej. Zdjęcia wchodzą na ekran przez kształt „Λ” i mają podpis „Zdjęcie ilustracyjne”.

Każdy moduł zawiera:
- nazwę formatu;
- temat z etykietą;
- opis;
- tabelkę danych (miasto, data, gospodarz, liczba miejsc);
- status terminu z rombem z gliny;
- przycisk.

Przycisk przewija do formularza i od razu ustawia w nim właściwe spotkanie, bez kasowania już wpisanych danych. Pod modułami jest wspólna notka o poufności. Na telefonie moduły są jeden pod drugim.

**Teksty:**
- Nagłówek: **Spotkania, które dają przestrzeń do rozmowy.**
- Wprowadzenie: *Summity i kolacje tworzą miejsce na pytania o prowadzenie kancelarii, przyszłość zawodu i własny sposób pracy.*

### Moduł 1 - Summit (`#summit-01`)
- Format: **Summit**
- Temat: **Koniec godziny? Wartość pracy prawnika.**
- Etykieta tematu: *Temat pierwszego roku*
- Opis: *Spotkanie dla partnerów i doświadczonych prawników, którzy kształtują lub zakładają kancelarię.*
- Dane:
  - Miasto: **Warszawa** ⚠
  - Data: **14 maja 2027** ⚠
  - Gospodarz: **Joanna Kordecka** ⚠
  - Liczba miejsc: **40** ⚠
- Status: **Termin potwierdzony** ⚠ (bez daty byłoby „Termin w przygotowaniu”)
- Przycisk: **Poproś o miejsce →** (bez daty byłoby „Zapytaj o udział”)
- Zdjęcie (alt): *Kilka osób przy długim drewnianym stole w dziennym świetle; widać dłonie, notatniki i długopisy.*

### Moduł 2 - Kolacja (`#kolacja-01`)
- Format: **Kolacja THE ROOM**
- Temat: **O prowadzeniu kancelarii i własnym sposobie pracy.**
- Etykieta tematu: *Temat wieczoru*
- Opis: *Kameralne spotkanie wokół wspólnego tematu, z przestrzenią na spokojną rozmowę.*
- Dane:
  - Miasto: **Kraków** ⚠
  - Data: **11 marca 2027, 19:00** ⚠
  - Gospodarz: **Tomasz Wielgosz** ⚠
  - Liczba miejsc: **12** ⚠
- Status: **Termin potwierdzony** ⚠
- Przycisk: **Poproś o miejsce →**
- Zdjęcie (alt): *Widok z góry na mały drewniany stół, przy którym dwie osoby rozmawiają nad talerzami i kieliszkami.*

**Notka pod modułami:** *Miejsce i dokładny adres przekazujemy po potwierdzeniu udziału. Nie publikujemy list gości.*

---

## 5. Krąg - poziomy 01, 02, 03 (`#krag`)

**Co to jest:** tabela trzech poziomów obecności w kręgu, a nie pakiety cenowe. Nie ma cen ani oznaczeń typu „najpopularniejszy”. Na komputerze kolumny to: numer, nazwa, dla kogo, dostęp i link. Duże numery 01–03 są w kolorze gliny i jako jedyne na stronie mają taką numerację. Na telefonie każdy poziom jest osobnym blokiem z etykietami. Linie nad wierszami dorysowują się przy przewijaniu.

**Teksty:**
- Nagłówek: **Różne formy obecności. Wspólny standard.**
- Wprowadzenie: *THE ROOM łączy otwarte treści z bardziej kameralnymi formami spotkania. Każda z nich ma własny charakter i zasady dostępu.*
- Nagłówki kolumn: *Poziom* · *Dla kogo* · *Dostęp*

**01 · Strona i Bookazine**
- Dla kogo: *Dla prawników, od starszego associate’a do partnera.*
- Dostęp: *Treści strony są otwarte. Bookazine to planowane wydawnictwo THE ROOM, dostępne na zamówienie po uruchomieniu publikacji.*
- Etykieta: **Bookazine: czerwiec 2027** ⚠
- Link: **Poznaj tematy →** → sekcja Z redakcji

**02 · Summit**
- Dla kogo: *Dla partnerów i doświadczonych prawników, którzy kształtują lub zakładają kancelarię.*
- Dostęp: *Na zaproszenie lub zgłoszenie.*
- Link: **Zobacz spotkania →** → sekcja Spotkania

**03 · Inner Circle**
- Dla kogo: *Dla właścicieli i partnerów zarządzających.*
- Dostęp: *Wyłącznie na zaproszenie.*
- Bez przycisku, celowo: na ten poziom nie da się „zapisać”.

---

## 6. Manifest i zasady rozmowy (`#manifest`)

**Co to jest:** jedyna duża ciemna sekcja strony, z brązowym tłem (#2E2721) i jasnym tekstem. Składa się z czterech części:
1. jasny sygnet i duży nagłówek;
2. trzy wyróżnione tezy w trzech kolumnach;
3. **galeria 10 kart manifestu**;
4. blok zasad rozmowy.

**Galeria kart** (w stylu „Circular Gallery” z React Bits):
- **Karty:** duże, w kamiennej bieli, z prostymi rogami (0 px). Na górze cienka kreska z gliny, potem nagłówek punktu dużą szeryfą i opis przy dolnej krawędzi. Numer punktu jest **pod kartą**.
- **Łuk i pętla:** karty jadą po łuku, a te po bokach się pochylają i wygaszają przy krawędziach ekranu. Pętla jest nieskończona: po 10 wraca 1.
- **Sterowanie:** przeciąganie myszą lub palcem (z rozpędem i dociąganiem do karty), poziomy gest touchpada, strzałki na klawiaturze oraz przyciski ← → z licznikiem. Pionowe kółko myszy przewija stronę, nie galerię.
- **Bez JavaScriptu:** karty są zwykłym poziomym paskiem z przewijaniem.

**Teksty:**
- Nagłówek: **Wierzymy, że dobre prawo potrzebuje spokoju.**

**Trzy tezy (kolumny):**
1. **Nie mierzymy doskonałości w godzinach.** *Rozmawiamy o wartości pracy, jakości decyzji i sposobie prowadzenia kancelarii.*
2. **Dzielimy się tym, co wiemy.** *Wśród równych otwartość jest podstawą wartościowej rozmowy.*
3. **Pozostajemy prawnikami.** *Niezależność, etyka i tajemnica zawodowa stoją ponad każdą wspólnotą.*

**Nad galerią:** **Manifest THE ROOM** · *Wersja robocza*

**10 kart manifestu.** Nagłówek karty to pierwsze zdanie punktu, opis to reszta. Numer stoi pod kartą.

| Nr | Nagłówek karty | Opis na karcie |
|---|---|---|
| 1 | Nie mierzymy doskonałości w godzinach. | Kto pracuje 80 godzin tygodniowo, dowodzi wytrzymałości, a nie trafności osądu. |
| 2 | Najlepsza praca prawnicza powstaje w jasnej głowie. | Hałas, pośpiech i ciągła dostępność nie są oznaką znaczenia, lecz jego przeciwieństwem. |
| 3 | Prowadzenie kancelarii to osobna dyscyplina. | Zasługuje na tę samą powagę co pismo do Sądu Najwyższego. |
| 4 | Przestrzeń kształtuje myślenie. | Biuro, w którym pracujemy, nie jest tłem, lecz narzędziem. |
| 5 | Technologia powinna znikać. | Dobre narzędzia odciążają, nie domagając się uwagi. |
| 6 | Dzielimy się tym, co wiemy. | Wśród równych otwartość nie jest słabością, lecz przewagą. |
| 7 | Jest nas niewielu – celowo. | Przynależność rodzi się ze wspólnego standardu, nie ze składki członkowskiej. |
| 8 | Pozostajemy prawnikami. | Nasza niezależność, etyka zawodowa i tajemnica zawodowa stoją ponad każdą wspólnotą. |
| 9 | Przewodzimy postawą, nie głośnością. | - (jedno zdanie, sam nagłówek) |
| 10 | Tworzymy przestrzeń: dla naszych klientów, naszych zespołów i dla siebie. | - (jedno zdanie, sam nagłówek) |

**Pod galerią:**
- Przyciski: ← (*Poprzedni punkt*) · licznik **Punkt 1 z 10** · → (*Następny punkt*)
- Podpowiedź: *Przeciągnij karty albo użyj strzałek*

**Zasady rozmowy** (tytuł po lewej, lista w dwóch kolumnach z rombami z gliny):
- Nagłówek: **Zasady rozmowy**
- *Nie publikujemy list gości.*
- *Miejsce spotkania przekazujemy po potwierdzeniu udziału.*
- *Przyjęta w manifeście Chatham House Rule pozwala korzystać z informacji ze spotkania bez ujawniania tożsamości i afiliacji osób wypowiadających się oraz innych uczestników.*
- *Niezależność, etyka i tajemnica zawodowa pozostają nadrzędne.*

---

## 7. Kto zaprasza do rozmowy (`#gospodarze`)

**Co to jest:** dwa profile gospodarzy, jak przedstawienie autora w magazynie. Zamiast zdjęcia jest monogram z inicjałami w małej ramie „pokoju”, celowo, żeby nie przypisywać fikcyjnym osobom cudzych twarzy ze stocku. Obok monogramu są imię i nazwisko oraz rola, pod nimi krótki biogram i cytat w szeryfie. Po dodaniu prawdziwego portretu w danych monogram zamieni się w zdjęcie.

**Teksty:**
- Nagłówek: **Kto zaprasza do rozmowy.**
- Wprowadzenie: *Za jakością kręgu stoją ludzie odpowiedzialni za temat, dobór gości i sposób prowadzenia spotkań.*

**Profil 1** ⚠ (cały fikcyjny)
- Monogram: **JK**
- Imię i nazwisko: **Joanna Kordecka**
- Rola: *Współzałożycielka, gospodyni Summitu*
- Biogram: *Adwokatka od 2008 roku. Partnerka zarządzająca kancelarii doradzającej w transakcjach i sporach korporacyjnych.*
- Cytat: *„O prowadzeniu kancelarii rozmawiamy zwykle po godzinach i w pośpiechu. Chciałam miejsca, w którym ta rozmowa jest tematem, a nie dodatkiem.”*

**Profil 2** ⚠ (cały fikcyjny)
- Monogram: **TW**
- Imię i nazwisko: **Tomasz Wielgosz**
- Rola: *Współzałożyciel, gospodarz kolacji*
- Biogram: *Radca prawny od 2011 roku. Prowadzi własną kancelarię obsługującą firmy technologiczne i rodzinne.*
- Cytat: *„Ważne decyzje o mojej kancelarii zapadały przy stole, w rozmowach z innymi prawnikami. Chcę, żeby takie rozmowy przestały być przypadkiem.”*

---

## 8. Z redakcji (`#redakcja`)

**Co to jest:** część „magazynowa”, w trzech blokach:
1. **Cztery obszary redakcyjne** w czterech kolumnach (2×2 na telefonie). To zwykłe etykiety, nie filtry.
2. **Zapowiedzi tekstów:** jeden duży, wyróżniony tytuł po lewej i dwa mniejsze po prawej. Przy każdym są obszar, etykieta statusu i autor. Te pozycje **nie są klikalne**, celowo, bo artykułów jeszcze nie ma.
3. **Wydawnictwa** na jaśniejszym, lnianym pasie: Bookazine i Raport Stawek ze statusami.

**Teksty:**
- Nagłówek: **Pytania, które warto zabrać do rozmowy.**
- Wprowadzenie: *Kancelaria 2030, technologia, przestrzeń pracy i życie poza sprawami klientów. Cztery perspektywy na przyszłość zawodu.*

**Obszary redakcyjne:**

| Obszar | Opis |
|---|---|
| **Kancelaria 2030** | Przywództwo, zespoły i przyszłe modele pracy. |
| **Legal Workspace** | AI, narzędzia i cyfrowa organizacja pracy. |
| **Business Space** | Środowisko kancelarii i warunki skupienia. |
| **Lifestyle** | Życie obok spraw klientów. |

**Zapowiedzi tekstów** (nagłówek grupy: *Zapowiedzi tekstów*):

| Pozycja | Tytuł | Zajawka | Obszar | Status | Autor |
|---|---|---|---|---|---|
| Wyróżniona (duża) | **Co mierzymy, kiedy liczymy godziny?** | O tym, co godzina mówi o pracy prawnika - i czego o niej nie mówi. | Kancelaria 2030 | Zapowiedź tekstu | Joanna Kordecka ⚠ |
| Mniejsza | **AI w kancelarii. Co warto oddać narzędziom?** | Gdzie narzędzia odciążają, a gdzie zaczyna się prawniczy osąd. | Legal Workspace | Zapowiedź tekstu | Tomasz Wielgosz ⚠ |
| Mniejsza | **Przestrzeń do skupienia. Jak środowisko kancelarii wspiera pracę?** | O biurze, które nie jest tłem, lecz narzędziem. | Business Space | Zapowiedź tekstu | Natalia Brzeska ⚠ |

**Wydawnictwa** (nagłówek grupy: *Wydawnictwa*):

| Nazwa | Opis | Status |
|---|---|---|
| **Bookazine 01** | Pierwszy numer wydawnictwa THE ROOM: rozmowy, eseje i fotografie wokół pytania „Koniec godziny?”. | **Czerwiec 2027** ⚠ |
| **Raport Stawek** | Badanie stawek i modeli rozliczeń w polskich kancelariach. Punkt odniesienia do rozmowy o wartości pracy. | **Wyniki jesienią 2027** ⚠ |

---

## 9. Zaproszenie: opis, FAQ i formularz (`#zaproszenie`)

**Co to jest:** sekcja konwersji, w dwóch kolumnach:
- **Po lewej:** nagłówek, opis, informacja „co dalej” i FAQ (5 pytań, domyślnie zwiniętych, rozwijanych kliknięciem). Kolumna trzyma się przy formularzu podczas przewijania, jeśli mieści się w oknie.
- **Po prawej:** formularz na lnianym tle. Wszystkie przyciski „Poproś o zaproszenie” na stronie prowadzą prosto tutaj.

Na telefonie kolejność to: nagłówek, opis, FAQ, formularz.

**Formularz działa w trybie podglądu:** sprawdza poprawność pól, ale niczego nie wysyła ani nie zapisuje.

**Teksty po lewej:**
- Nagłówek: **Poproś o zaproszenie.**
- Opis: *Napisz, co Cię interesuje: krąg THE ROOM, Summit lub kolacja. Prośba o zaproszenie nie jest potwierdzeniem udziału.*
- Blok **Po wysłaniu prośby:** *Każdą prośbę czytamy osobiście. Odpowiadamy e-mailem w ciągu 14 dni.* ⚠
- Nagłówek FAQ: **Najczęstsze pytania**

### FAQ

1. **Czy muszę prowadzić własną kancelarię?** - *Otwarte treści są kierowane także do prawników, którzy nie prowadzą własnej kancelarii. Summit jest adresowany do partnerów i doświadczonych prawników kształtujących lub zakładających kancelarię. Inner Circle jest przeznaczony dla właścicieli i partnerów zarządzających.*
2. **Czy potrzebuję polecenia?** - *W formularzu możesz wskazać osobę polecającą. Polecenie nie jest wymagane. Jeśli je wskażesz, poprosimy tę osobę wyłącznie o krótkie potwierdzenie.* ⚠ (zasady poleceń)
3. **Czym różni się Summit od Inner Circle?** - *O udział w Summicie można poprosić lub otrzymać zaproszenie. Inner Circle to najwęższy krąg, dostępny wyłącznie na zaproszenie.*
4. **Co stanie się po wysłaniu prośby?** - *Prośba nie oznacza automatycznego potwierdzenia udziału. Odpowiadamy e-mailem w ciągu 14 dni. Jeśli prośba dotyczy konkretnego spotkania, potwierdzamy miejsce albo proponujemy kolejny termin.* ⚠ (proces kontaktu) + dopisek: *W tej wersji strony formularz działa jako podgląd i nie wysyła zgłoszeń.*
5. **Kiedy poznam miejsce spotkania?** - *Miejsce i dokładny adres są przekazywane po potwierdzeniu udziału. Publicznie nie udostępniamy list gości.*

### Formularz

- Tytuł: **Prośba o zaproszenie**
- Wybór (trzy duże opcje): **Czego dotyczy prośba?**
  - **Krąg THE ROOM** - *Treści, rozmowy i zaproszenia do kręgu* (domyślnie)
  - **Summit** - *Dla partnerów i doświadczonych prawników*
  - **Kolacja** - *Kameralne spotkanie wokół wspólnego tematu*
- Gdy kliknięto przycisk przy spotkaniu, pojawia się ramka: *Wybrane spotkanie:* **Summit** - Koniec godziny? Wartość pracy prawnika. (Termin potwierdzony), z linkami **Zmień** i **Usuń wybór spotkania**.

**Pola:**

| Pole | Wymagane | Podpowiedź |
|---|---|---|
| Imię i nazwisko | tak | - |
| E-mail | tak | - |
| Kancelaria | tak | *Jeśli kancelaria dopiero powstaje, wpisz „w trakcie tworzenia”.* |
| Miasto | nie (*opcjonalnie*) | - |
| Kto Cię poleca? | nie (*opcjonalnie*) | *Imię i nazwisko osoby z kręgu, jeśli ktoś Cię poleca.* |
| Wiadomość | nie (*opcjonalnie*) | *Jakie pytanie lub temat chcesz wnieść do rozmowy?* |

**Pod polami:**
- Ramka nad przyciskiem: *To podgląd formularza. Dane nie zostaną wysłane.*
- Przycisk: **Sprawdź prośbę o zaproszenie**
- Po poprawnym wypełnieniu: *Formularz jest wypełniony poprawnie. To podgląd - dane nie zostały wysłane.*

**Komunikaty błędów:**
- Nad formularzem: *Popraw 2 pola, aby sprawdzić prośbę:* + linki do pól.
- *Wpisz imię i nazwisko.*
- *Imię i nazwisko powinno mieć co najmniej 2 litery.*
- *Wpisz adres e-mail.*
- *Sprawdź adres e-mail. Powinien mieć postać nazwa@domena.pl.*
- *Wpisz nazwę kancelarii albo „w trakcie tworzenia”.*

**Teksty po podłączeniu prawdziwej wysyłki** (dziś niewidoczne):
- Przycisk: **Wyślij prośbę o zaproszenie**
- W trakcie wysyłania: *Wysyłanie prośby…*
- Sukces: *Prośba o zaproszenie dotarła. To nie jest jeszcze potwierdzenie udziału.*
- Błąd: *Nie udało się wysłać prośby. Wpisane dane zostały w formularzu - spróbuj ponownie za chwilę.*

**Pod formularzem:**
- **Dane osobowe**
- *Dane z formularza posłużą wyłącznie do odpowiedzi na prośbę o zaproszenie. Administrator danych: Fundacja THE ROOM.* ⚠
- Link: **Informacja o prywatności** → otwiera rozwinięcie „Prywatność” w stopce.

---

## 10. Stopka

**Co to jest:** ciemna stopka w najgłębszym brązie strony (#1E1915) z jasnym logo. U góry jest logo z hasłem, a obok dane organizatora i kontakt. Niżej są cztery rozwijane pozycje: na komputerze w rzędzie, na telefonie jedna pod drugą. Po rozwinięciu strona sama przewija się, żeby treść była widoczna. Na samym dole jest copyright.

**Teksty:**
- Logo **THE ROOM** + hasło: *Pokój dla tych, którzy prowadzą.*
- **Organizator:** Fundacja THE ROOM ⚠
- **Kontakt:** kontakt@theroom.pl ⚠ (aktywny link e-mail)

**Rozwijane pozycje:**

1. **Nota prawna**
   - *Materiał roboczy*
   - *Fundacja THE ROOM. Siedziba: ul. Mokotowska 24/3, 00-561 Warszawa.* ⚠
   - *Treści publikowane na stronie mają charakter informacyjny i nie stanowią porady prawnej. Prawa do tekstów i znaku THE ROOM należą do organizatora lub autorów.* ⚠
2. **Prywatność**
   - *Materiał roboczy*
   - *W tej wersji strony formularz działa jako podgląd: nie wysyła i nie zapisuje wpisanych danych.*
   - *Strona nie korzysta z narzędzi analitycznych, pikseli reklamowych ani plików cookie służących śledzeniu.*
   - *Administrator danych: Fundacja THE ROOM. Kontakt: kontakt@theroom.pl.* ⚠
   - *Dane przetwarzamy na podstawie art. 6 ust. 1 lit. b i f RODO, wyłącznie po to, by odpowiedzieć na prośbę o zaproszenie i zorganizować spotkanie. Przechowujemy je przez 12 miesięcy od ostatniego kontaktu. Masz prawo dostępu do danych, ich sprostowania, usunięcia i ograniczenia przetwarzania, a także prawo wniesienia skargi do Prezesa UODO.* ⚠ (klauzula do weryfikacji przez prawnika)
3. **Partnerzy**
   - *Materiał roboczy*
   - **ADVOSYNC** · **MODUCTRL** · **NEUROSPACIALIST** · **NEUROBIOGRAPH** (zwykły tekst, bez linków, dopóki adresy nie zostaną potwierdzone)
   - *Partnerzy wspierają THE ROOM wiedzą i przestrzenią do spotkań. Nie wpływają na dobór tematów ani gości.* ⚠
4. **Fotografie**
   - *Zdjęcia ilustracyjne z serwisu Unsplash, na licencji Unsplash.*
   - **Kelly Sikkema** - Hero - ilustracja skupienia i pracy z tekstem.
   - **Dylan Gillis** - Spotkania - ilustracja formatu Summit.
   - **Ilnur Kalimullin** - Spotkania - ilustracja formatu Kolacja THE ROOM.
   - Link: **Licencja Unsplash**

**Na samym dole:** *© 2026 THE ROOM*

---

## Dane techniczne strony (niewidoczne na ekranie)

- **Tytuł karty przeglądarki:** THE ROOM - krąg adwokatów i radców prawnych
- **Opis dla wyszukiwarek:** *Kameralny krąg adwokatów i radców prawnych w Polsce. Rozmowy o prowadzeniu kancelarii, przyszłości zawodu i świadomym sposobie pracy. Temat pierwszego roku: Koniec godziny?*
- **Podgląd linku (Open Graph):**
  - tytuł: *THE ROOM - krąg adwokatów i radców prawnych*
  - opis: *Pokój dla tych, którzy prowadzą. Kameralne rozmowy o prowadzeniu kancelarii i przyszłości zawodu.*
- **Indeksowanie:** `noindex, nofollow`. Strona nie trafi do Google, dopóki zawiera dane przykładowe.
- **Język:** polski.

---

## Dane przykładowe ⚠ - co podmienić przed publikacją

Wszystko w pliku `src/content/do-uzupelnienia.ts`. Wpisanie `null` przywraca placeholder.

| Gdzie na stronie | Obecna wartość (fikcyjna) | Placeholder po wyczyszczeniu |
|---|---|---|
| Stopka, pod formularzem | Fundacja THE ROOM | [Nazwa organizatora] |
| Stopka, Prywatność | kontakt@theroom.pl | [E-mail kontaktowy] |
| Nota prawna | Siedziba: ul. Mokotowska 24/3, 00-561 Warszawa | [Dane rejestrowe i adres organizatora] |
| Nota prawna | tekst noty | [Treść noty prawnej do uzupełnienia] |
| Prywatność | klauzula RODO | [Treść klauzuli informacyjnej do uzupełnienia] |
| Partnerzy | opis współpracy | [Opis współpracy z partnerami do uzupełnienia] |
| FAQ „Czy potrzebuję polecenia?” | zasady poleceń | [Zasady poleceń do uzupełnienia przez organizatora] |
| „Po wysłaniu prośby” | Każdą prośbę czytamy osobiście… 14 dni | [Sposób kontaktu po zgłoszeniu do uzupełnienia] |
| FAQ „Co stanie się po wysłaniu prośby?” | Odpowiadamy e-mailem w ciągu 14 dni… | [Opis rzeczywistego procesu kontaktu do uzupełnienia] |
| Summit | Warszawa · 14 maja 2027 · Joanna Kordecka · 40 miejsc | [Miasto] · [Data do potwierdzenia] · [Imię i nazwisko gospodarza] · [Liczba miejsc do potwierdzenia] |
| Kolacja | Kraków · 11 marca 2027, 19:00 · Tomasz Wielgosz · 12 miejsc | jw. |
| Status spotkań | Termin potwierdzony / Poproś o miejsce | Termin w przygotowaniu / Zapytaj o udział (`availability: 'w-przygotowaniu'`) |
| Gospodarze (2 profile) | Joanna Kordecka, Tomasz Wielgosz + role, biogramy, cytaty | [Imię i nazwisko], [Rola w THE ROOM], [Krótka informacja o doświadczeniu], [Dwa zdania o powodach tworzenia inicjatywy] |
| Autorzy zapowiedzi | Joanna Kordecka, Tomasz Wielgosz, Natalia Brzeska | [Autor do uzupełnienia] |
| Bookazine (Krąg 01 i Wydawnictwa) | czerwiec 2027 | w `src/content/site.ts` (status wydawnictw) |
| Raport Stawek | Wyniki jesienią 2027, opis badania | w `src/content/site.ts` (status wydawnictw) |
