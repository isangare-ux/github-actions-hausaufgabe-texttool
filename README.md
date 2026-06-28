# Texttool Projekt für GitHub Actions

Dieses kleine Node.js Projekt ist eine Hausaufgabe für GitHub Actions.

Die Aufgabe ist nicht, ein großes Programm zu schreiben. Die Aufgabe ist, das Projekt in ein eigenes GitHub Repository hochzuladen und eine GitHub Actions Pipeline zu erstellen, die automatisch die Tests ausführt.

## Was macht das Projekt?

Das Projekt enthält einfache Textfunktionen:

- Wörter zählen
- Leerzeichen bereinigen
- Text in Großbuchstaben umwandeln
- Prüfen, ob ein Text ein bestimmtes Wort enthält

## Projekt lokal starten

```bash
npm install
npm start
```

## Tests lokal ausführen

```bash
npm test
```

## Wichtig

Die GitHub Actions Workflow Datei ist absichtlich nicht enthalten.

Du sollst sie selbst erstellen unter:

```text
.github/workflows/hausaufgabe-pipeline.yml
```

Die Pipeline soll bei jedem Push auf den Branch `main` starten und `npm test` ausführen.
