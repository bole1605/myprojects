# myprojects

Sammlung kleiner, eigenständiger Web-Apps (PWAs). Jedes Projekt liegt in einem eigenen Ordner und kommt ohne Build-Schritt aus.

| Projekt | Ordner | Adresse |
|---|---|---|
| Liegestütz Tracker | [`liegestuetz/`](liegestuetz/) | https://bole1605.github.io/myprojects/liegestuetz/ |

Die Kasse für den Weihnachtsmarkt liegt in einem eigenen Repository: `bole1605/code`.

## Veröffentlichung (GitHub Pages)
*Settings → Pages → Build and deployment → Source: „Deploy from a branch“ → Branch `main`, Ordner `/ (root)`.* Danach ist jedes Projekt unter `https://bole1605.github.io/myprojects/<ordner>/` erreichbar.

## Regeln für neue Projekte
Alle Pages-Projekte eines GitHub-Kontos liegen auf **derselben Domain** (`bole1605.github.io`) und teilen sich dadurch `localStorage` und den Cache-Speicher des Browsers. Deshalb:
- Schlüssel im `localStorage` mit Projekt-Präfix benennen (zum Beispiel `pushups.sessions`).
- Cache-Namen im Service Worker aus dem Pfad ableiten (siehe `liegestuetz/sw.js`) und im `activate`-Schritt **nur eigene** Caches löschen.
- Nur relative Pfade verwenden (`./`, `icons/…`), damit das Projekt in jedem Ordner läuft.
