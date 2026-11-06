---
version: 1
slug: "index-html"
primary_target: "index.html"
related_targets: ["src/App.tsx"]
---

# Surface: THE ROOM landing (index.html)

Mode: Persuade. Visitor: adwokat lub radca prawny 30+, od starszego associate'a do partnera. Action: considered „Poproś o zaproszenie" (form id `formularz` inside section `zaproszenie`). Proof available: none beyond the manifesto, theme and formats; everything else is a labelled placeholder. Constraints: client build prompt (pinned palette, fonts, section order, copy, motion spec) wins over every default.

## Direction contract

THESIS: The page is a carefully set quarterly about the future of the profession: the circle is introduced in type first, the photograph is a plate subordinate to the text. It refuses the category default of a full-bleed interior hero with a logo and a slogan about space.

OWN-WORLD: Kamienna biel #F3EFE8 paper, głęboki brąz #2E2721 ink and primary buttons, #E4DDD2 secondary surfaces, glina #9A6B4F only in hairline ornaments and the open-square "room" frame. EB Garamond display set large and upright, Inter for reading and UI. 1px rules, 2px radii, no cards-as-structure, one dark spread (manifest) in brown with stone-white type.

STORY: Within one viewport the visitor reads "krąg adwokatów i radców prawnych", the line „Pokój dla tych, którzy prowadzą." and the invitation action. Scrolling: the year's question, the two meeting formats, the three levels of presence and their access rules, the manifesto and conversation rules, the people responsible, the editorial pillars, and finally the form, where any CTA lands with its intent preset.

FIRST VIEWPORT: 12-col grid, ~1240px. Left 7 cols: descriptor as a readable sentence (not a tracked eyebrow), H1 at ~72px EB Garamond in two lines, lead paragraph 19px, brown primary button + text link „Poznaj krąg", quiet line „Temat pierwszego roku: Koniec godziny?". Right 5 cols: hands-and-notebook photograph in a 4:5 plate held by the sygnet's open-square hairline with the gap at the bottom, caption „Zdjęcie ilustracyjne" sitting in that gap. Mobile: text and CTA first, plate after.

FORM: Brief-pinned editorial warm minimalism (pinned direction, no roll; position n/a). Signature interaction: meeting and level CTAs open the room — they scroll to `formularz`, preset the intent radio and the chosen meeting, and the form's summary line names it with a „Zmień" control, keeping every typed value. Motion grammar: one-time 12px rise + fade, 500ms, 70ms stagger; 180ms colour/underline transitions; 220ms disclosure height; all off under reduced motion.
seed: none (roll skipped: the client's build prompt pins the visual direction, so no concept-seed roll was run)

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
