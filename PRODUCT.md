# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

React + TypeScript + Vite with hand-written CSS (user-confirmed, 2026-11-05). No animation or UI libraries; CSS and IntersectionObserver cover motion.

## Users

Adwokaci i radcowie prawni w Polsce, zasadniczo od 30. roku życia: od starszych associate'ów po partnerów i właścicieli kancelarii. Zarówno osoby swobodnie korzystające z technologii, jak i doświadczeni prawnicy otwarci na zmianę. "30+" is a description of the audience, never a form gate or a birth-date question.

## Product Purpose

THE ROOM to kameralny krąg (społeczność) adwokatów i radców prawnych, którzy chcą świadomie kształtować sposób pracy kancelarii i rozmawiać o przyszłości zawodu do 2030 roku. Success is a considered, high-quality request for an invitation ("Poproś o zaproszenie") from the right person, who understands which circle or meeting they are asking about.

## Positioning

A small circle of peers, not a service, directory, training platform, software campaign or paid membership. Brand essence: suwerenność, poufność, jasność, trafny osąd, jakość ponad ilością, rozmowa wśród równych. Main line: „Pokój dla tych, którzy prowadzą." First-year theme: „Jak mierzyć wartość pracy prawnika?" (replaced „Koniec godziny?" in the copy edit of 2026-11-06; always a question, never a claim that hourly billing has ended).

## Operating Context

Formats: open content (Strona i Bookazine, poziom 01), Summit (poziom 02, na zaproszenie lub zgłoszenie), Inner Circle (poziom 03, wyłącznie na zaproszenie), Kolacje THE ROOM. Meeting venues and addresses are shared only after confirmed participation; guest lists are never published; Chatham House Rule applies as written in the manifesto. Editorial pillars: Kancelaria 2030, Legal Workspace, Business Space, Lifestyle.

## Capabilities and Constraints

- The initiative has no confirmed history: write „tworzymy", „przygotowujemy", „pierwszy temat".
- Not yet confirmed by the client: host names and bios, organizer name, contact e-mail, dates, cities, seat counts, referral rules, post-request contact process, funding model (no "free" claims), privacy-clause administrator, partner URLs, form endpoint.
- Copy edit (client document, 2026-11-06): the earlier fictional demo values were removed; every field in `src/content/do-uzupelnienia.ts` is `null` with an exact placeholder until confirmed data arrives. Partner URLs and the form endpoint stay empty; no host portraits from stock photos. The #manifest section is protected copy: never edit its texts or mechanics as part of copy work.
- Form runs in a clearly labelled preview mode until a real endpoint is supplied; no data leaves the browser, nothing is stored in localStorage or analytics.
- No pricing, accounts, login, newsletter, chat, payments, cookie banner, trackers.
- Bookazine 01 and Raport Stawek are planned, not published.
- Partner brands (ADVOSYNC, MODUCTRL, NEUROSPACIALIST, NEUROBIOGRAPH) appear only as non-interactive footer text until URLs are confirmed (user decision, 2026-11-05).

## Brand Commitments

- Language: Polish. Voice of an experienced colleague at dinner: calm, concrete, short sentences. Use „krąg", „rozmowa", „zaproszenie", „kancelaria", „wspólny standard". Never „ekskluzywny", hustle language, superlatives, „game changer", „disruption", lead-generation promises or financial-outcome promises.
- Logo: supplied SVG set (sygnet: square with Λ entrance, left arm 50% opacity; wordmark in Cormorant Garamond Medium outlined). `light/` = brown #2E2721 for light grounds, `dark/` = stone white #F3EFE8 for dark grounds. Use as delivered, keep proportions and clear space.
- Brand colours named by the logo kit: kamienna biel #F3EFE8, głęboki brąz #2E2721, glina #9A6B4F; supporting surface #E4DDD2.
- Architecture, interiors and design are a theme and atmosphere, never the first impression; the community of lawyers is.
- No scales of justice, gavels, section signs, courthouse columns.

## Evidence on Hand

- Logo SVGs (`public/brand/`).
- Working copy from the client's build prompt: hero, theme, meetings, circle levels, full 10-point manifesto (draft), conversation rules, FAQ answers, editorial working titles.
- Absent and never to be fabricated: members, testimonials, past events, statistics, research results, prices, acceptance guarantees.

## Product Principles

1. Community first: every first impression says „krąg adwokatów i radców prawnych" before it says anything about space.
2. Honesty over polish: missing facts show as calm placeholders or „w przygotowaniu", never as invented specifics.
3. Quality over quantity: the action is a considered request, not a sign-up funnel.
4. Confidentiality is structural: no guest lists, venues after confirmation, Chatham House Rule, professional secrecy above the community.

## Accessibility & Inclusion

Design toward WCAG 2.2 AA (no formal conformance claim without audit), honour prefers-reduced-motion, keyboard-complete paths, 44px touch targets, no horizontal scroll from 320px, Polish names with diacritics, spaces and hyphens always valid in the form.
