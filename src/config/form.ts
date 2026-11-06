/**
 * KONFIGURACJA FORMULARZA - jedyny punkt podłączenia prawdziwego endpointu.
 *
 * Dopóki `endpoint` jest pusty, formularz działa w trybie podglądu:
 * sprawdza poprawność pól, niczego nie wysyła i niczego nie zapisuje.
 *
 * Aby włączyć wysyłkę, ustaw zmienną środowiskową przy buildzie:
 *   VITE_FORM_ENDPOINT=https://twoj-serwer.pl/api/zaproszenia npm run build
 * albo wpisz adres poniżej.
 *
 * Wymagania wobec serwera (tryb rzeczywisty):
 * - przyjmuje POST z JSON: { intencja, spotkanie, imieNazwisko, email, kancelaria, miasto, polecajacy, wiadomosc }
 * - waliduje dane również po stronie serwera,
 * - odpowiada kodem 2xx dopiero po rzeczywistym przyjęciu prośby,
 *   a kodem 4xx/5xx w razie błędu (formularz zachowa wpisane dane).
 */
const fromEnv = (import.meta.env.VITE_FORM_ENDPOINT as string | undefined) ?? '';

export const FORM_CONFIG = {
  endpoint: fromEnv.trim(),
  timeoutMs: 15000,
};

export const FORM_MODE: 'demo' | 'live' = FORM_CONFIG.endpoint ? 'live' : 'demo';
