# Liegestütz Tracker

Installierbare Web-App (PWA) für iPhone und iPad – ohne Build-Schritt, ohne Abhängigkeiten, funktioniert offline.

- **Training:** Großer Tipp-Button zählt Liegestütze, Stoppuhr startet automatisch beim ersten Tippen (Pause/Weiter, −1, Tagesziel-Ring, Tempo pro Minute).
- **Kalender:** Monatsansicht mit Intensitäts-Farben, Tagesdetails, Einheiten löschen.
- **Statistik:** Kennzahlen (Gesamt, 7-Tage-Vergleich, Bestleistung, Serie), Fortschrittsdiagramm (30 Tage / Wochen / Monate mit gleitendem Mittel), Verlauf je Einheit mit Trendlinie und Auswertung.
- **Daten:** liegen lokal im Gerät (`localStorage`). Optional Synchronisierung zwischen Geräten über einen privaten GitHub-Gist (⚙︎ → Synchronisierung); Export/Import als JSON.

## Auf dem iPhone/iPad nutzen
Adresse: **https://bole1605.github.io/myprojects/liegestuetz/** (GitHub Pages, siehe `../README.md`).
Dort in Safari öffnen → **Teilen → „Zum Home-Bildschirm"**. Die App startet danach im Vollbild und läuft offline.

**Umzug aus dem alten Repository:** Der Tracker lag früher im Hauptordner von `bole1605/code` (zuletzt unter `…/code/`). Die alte Adresse gibt es nicht mehr. Die Daten liegen im Speicher des alten Home-Bildschirm-Symbols und wandern nicht von selbst mit:
1. In der alten App: ⚙︎ → Export (JSON) oder Synchronisierung über den privaten Gist.
2. Die neue Adresse öffnen, zum Home-Bildschirm hinzufügen.
3. In der neuen App: ⚙︎ → Import bzw. Synchronisierung mit demselben Gist.

Lokal testen: im Ordner `myprojects` `python3 -m http.server 8000` und `http://localhost:8000/liegestuetz/` öffnen.
