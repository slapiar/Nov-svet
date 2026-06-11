# Architektúra projektu Nov-svet

## Prehľad

Nov-svet je monorepo projekt obsahujúci štyri hlavné moduly:

```
nov-svet/
├── web/        # Online systém (Node.js + Express)
├── book/       # Knižná publikácia (Markdown)
├── game/       # Počítačová hra (Node.js)
├── film/       # Filmová produkcia
├── docs/       # Dokumentácia
└── shared/     # Zdieľané konfigurácie
```

## Web – Online systém

- **Backend**: Node.js + Express
- **Frontend**: HTML/CSS/JavaScript
- **API**: REST API na `/api/*`
- **Port**: 3000 (predvolený)

## Game – Počítačová hra

- **Engine**: Node.js
- **Typ**: Textová/grafická adventúra zameraná na sociálne vzťahy
- **Testovanie**: Jest

## Book – Knižná publikácia

- **Formát**: Markdown → PDF (cez pandoc)
- **Štruktúra**: Kapitoly v `book/kapitoly/`

## Film – Filmová produkcia

- **Scenár**: Markdown v `film/scenar/`
- **Assets**: `film/assets/`

## Spoločné závislosti

Pozri `shared/config/` pre zdieľané konfiguračné súbory.
