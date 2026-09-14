# Clark Malermeister – Website

Schlichte, pragmatische Website für den Malermeisterbetrieb **Clark**,
gestaltet im Design der Firmen-Visitenkarte (marineblaues Schild-Logo mit
Rolle/Pinsel/Spachtel). Reines HTML/CSS/JS-Projekt ohne Build-Prozess, ohne
Tracking und ohne externe Schriftarten.

## Seiten

- `index.html` – Startseite (Header, Hero, Leistungen, Über uns, Kontakt)
- `impressum.html` – Impressum (eigenständige Seite, nur über Footer verlinkt)
- `datenschutz.html` – Datenschutzerklärung (eigenständige Seite, nur über Footer verlinkt)
- `css/style.css` – gesamtes Styling (System-Schriftarten, responsive)
- `js/script.js` – mobiles Menü, Jahreszahl im Footer

## Lokal ansehen

```bash
python3 -m http.server 8080
```

Danach im Browser `http://localhost:8080` öffnen.

---

## Externe Dienste, Bibliotheken, Schriftarten, Bilder & Ressourcen

Vollständige Liste – Stand dieser Version:

| Kategorie | Verwendet? | Details |
|---|---|---|
| Externe Schriftarten (z. B. Google Fonts) | **Nein** | Es werden ausschließlich system-/geräteeigene Schriftarten genutzt (`system-ui`, `Segoe UI`, `Roboto`, `Helvetica`, `Arial`, `Georgia`, `Times New Roman`). Kein `<link>` zu externen Font-Anbietern. |
| Tracking / Analyse (Google Analytics, Matomo o. Ä.) | **Nein** | Nicht eingebunden. |
| Marketing-/Social-Pixel (Meta Pixel etc.) | **Nein** | Nicht eingebunden. |
| Google Maps / Kartendienste | **Nein** | Nicht eingebunden. |
| YouTube / Video-Einbettungen | **Nein** | Nicht eingebunden. |
| JavaScript-Bibliotheken / Frameworks | **Nein** | Nur eigenes, minimales Vanilla-JS (`js/script.js`) für das mobile Menü und die Jahreszahl im Footer. |
| CSS-Frameworks | **Nein** | Eigenes CSS ohne Framework. |
| Bilder | **Keine Rasterbilder/Fotos** | Es werden keine Fotos verwendet. Das Logo ist selbst erstelltes Inline-SVG (im HTML eingebettet, keine externe Datei). Als Icons dienen Unicode-Emoji (systemeigene Emoji-Darstellung des Betriebssystems/Browsers, kein Bilddownload). |
| Favicon | Ja, selbst erstellt | Inline-SVG als Data-URI (`<link rel="icon" href="data:image/svg+xml,...">`), kein externer Request. |
| Kontaktformular | **Nein** | Bewusst nicht umgesetzt, siehe unten. Kontakt läuft über `tel:`- und `mailto:`-Links, die das jeweilige Programm auf dem Gerät des Besuchers öffnen. |
| Cookies | **Keine** | Es werden von dieser Website selbst keine Cookies gesetzt. |
| Hosting-Anbieter | *Von Ihnen festzulegen* | Abhängig vom gewählten Hosting fallen serverseitig technische Logfiles an (siehe `datenschutz.html`, Abschnitt 3). |

**Warum kein Kontaktformular?** Ein Formular würde personenbezogene Daten
serverseitig entgegennehmen bzw. übertragen und müsste entsprechend
datenschutzkonform umgesetzt werden (z. B. Verschlüsselung, Rechtsgrundlage,
ggf. Double-Opt-in, Auftragsverarbeitung beim eingesetzten Formular-/
Mail-Dienst). Da dies eine statische Website ohne Backend ist, wurde bewusst
auf ein Formular verzichtet und stattdessen auf `tel:`/`mailto:`-Links
gesetzt. Ein Formular kann bei Bedarf später ergänzt werden, sollte dann
aber gemeinsam mit der Datenschutzerklärung entsprechend erweitert werden.

---

## Rechtliche Punkte, die Sie vor der Veröffentlichung prüfen müssen

Diese Website und ihre Texte sind **keine Rechtsberatung**. Bitte prüfen
bzw. lassen Sie insbesondere Folgendes prüfen, bevor Sie live gehen:

1. **Impressum (`impressum.html`) vollständig und korrekt ausfüllen** –
   alle mit `[…]` markierten Platzhalter durch Ihre echten Unternehmensdaten
   ersetzen (Name/Firma, Anschrift, Kontakt, ggf. Vertretungsberechtigte,
   Handwerksrolle/Handwerkskammer, USt-IdNr., Handelsregister,
   verantwortliche Person nach § 18 Abs. 2 MStV, Streitschlichtungshinweis).
   Prüfen Sie, ob als Malerbetrieb weitere berufsrechtliche Pflichtangaben
   gelten (z. B. Handwerksrolle, Meisterpflicht/Ausnahmebewilligung).
2. **Datenschutzerklärung (`datenschutz.html`) vervollständigen** – vor
   allem Angaben zu Ihrem konkreten Hosting-Anbieter (Name, Anschrift,
   Speicherdauer der Server-Logfiles, ggf. Auftragsverarbeitungsvertrag) und
   zur Rechtsgrundlage der Kontaktaufnahme ergänzen.
3. **Vor Veröffentlichung durch eine fachkundige Stelle prüfen lassen**
   (z. B. Rechtsanwalt/Rechtsanwältin, Datenschutzbeauftragte/r, zuständige
   Handwerkskammer) – insbesondere Impressumspflicht (§ 5 TMG /
   Digitale-Dienste-Gesetz) und DSGVO-Anforderungen.
4. **Sobald Sie neue Funktionen hinzufügen** (Kontaktformular,
   Google Maps, Videos, Analyse-Tools, Cookie-Banner, Social-Media-Links
   etc.), müssen Impressum und vor allem die Datenschutzerklärung
   entsprechend erweitert und ggf. eine Einwilligungslösung (Consent-Banner)
   ergänzt werden.
5. **Aussagen über Ihren Betrieb prüfen** – der Abschnitt „Über uns" enthält
   aktuell nur einen sachlichen Platzhaltertext ohne unbestätigte
   Behauptungen (z. B. keine Angaben zu Firmenalter, Teamgröße oder
   Kundenzufriedenheit). Ergänzen Sie dort nur Aussagen, die Sie tatsächlich
   bestätigen können.
6. **Hinweis:** Diese Website und ihre Dokumente behaupten an keiner Stelle,
   „rechtssicher" oder „DSGVO-konform" zu sein – das kann nur nach Prüfung
   Ihrer tatsächlichen, individuellen Situation (u. a. durch Ihr Hosting,
   künftige Funktionen und rechtliche Beratung) abschließend beurteilt
   werden.

## Sonstige Hinweise

- Telefonnummer (0177 364 92 65) stammt von der Visitenkarte. Adresse und
  E-Mail auf der Startseite sind Platzhalter.
- Technische Umsetzung: semantisches HTML (`header`/`nav`/`main`/`footer`),
  Skip-Link für Tastaturnutzung, sichtbare Fokus-Zustände,
  `prefers-reduced-motion`-Unterstützung, responsive für Smartphones/Tablets,
  keine externen Requests außer dem eigenen Server (keine externen Schriften,
  Skripte oder Tracking).
- Für ein Hosting eignet sich z. B. **GitHub Pages**
  (Repository-Einstellungen → Pages → Branch auswählen).
