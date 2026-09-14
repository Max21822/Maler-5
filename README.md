# Clark Malermeister – Website

Moderne, responsive Website für den Malermeisterbetrieb **Clark**, gestaltet
im Design der Firmen-Visitenkarte (marineblaues Schild-Logo, Schreibschrift
„Clark“, Leistungsübersicht, Kontaktdaten). Reines HTML/CSS/JS-Projekt ohne
Build-Prozess.

## Inhalt

- `index.html` – Startseite (Hero, Leistungen, Über uns, Referenzen,
  Kundenstimmen, Kontaktformular)
- `css/style.css` – Styling im Marineblau/Gold-Farbschema der Visitenkarte,
  responsive für Desktop/Tablet/Mobile
- `js/script.js` – mobiles Menü, animierte Statistik-Zähler,
  Kontaktformular-Validierung

## Leistungen (laut Visitenkarte)

- Malerarbeiten
- Bodenbelagsarbeiten
- Fassadenarbeiten
- Tapezierarbeiten
- Spachteltechniken
- Sanierungen

## Lokal ansehen

```bash
python3 -m http.server 8080
```

Danach im Browser `http://localhost:8080` öffnen.

## Hinweise

- Telefonnummer (0177 364 92 65) stammt von der Visitenkarte. Adresse und
  E-Mail sind Platzhalter und sollten vor dem echten Einsatz ersetzt werden.
- Das Kontaktformular ist aktuell nur clientseitig validiert (Demo) und noch
  nicht an ein Backend / einen E-Mail-Versand angebunden.
- Für ein kostenloses Hosting eignet sich z. B. **GitHub Pages**
  (Repository-Einstellungen → Pages → Branch auswählen).
