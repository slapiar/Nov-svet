# Nov-svet

> Prostredie vývoja medziľudských vzťahov s vyústením do online systému, knižnej publikácie, počítačovej hry a filmu

## Moduly

| Modul   | Popis                           | Technológia          |
|---------|---------------------------------|----------------------|
| `web`   | Online systém                   | Node.js + Express    |
| `book`  | Knižná publikácia               | Markdown + Pandoc    |
| `game`  | Počítačová hra                  | Node.js              |
| `film`  | Filmová produkcia               | Scenár + Assets      |

## Rýchly štart

### Požiadavky

- [Node.js](https://nodejs.org/) 18+
- [npm](https://npmjs.com/) 9+
- [Docker](https://docker.com/) (voliteľný)
- [Pandoc](https://pandoc.org/) (pre export knihy do PDF)

### Inštalácia

```bash
git clone https://github.com/slapiar/Nov-svet.git
cd Nov-svet
make setup
```

### Spustenie

```bash
# Vývojový server
make dev

# Produkčné spustenie cez Docker
make docker-build
make docker-run
```

### Testy

```bash
make test
```

### Knižná publikácia

```bash
make book   # Vygeneruje nov-svet-kniha.pdf (vyžaduje pandoc)
```

## Štruktúra projektu

```
nov-svet/
├── web/            # Online systém
│   ├── src/        # Serverový kód (Express)
│   ├── public/     # Frontend (HTML/CSS/JS)
│   └── tests/
├── book/           # Knižná publikácia
│   └── kapitoly/   # Markdown kapitoly
├── game/           # Počítačová hra
│   ├── src/
│   └── tests/
├── film/           # Filmová produkcia
│   └── scenar/
├── docs/           # Projektová dokumentácia
├── shared/         # Zdieľané konfigurácie
├── Makefile
├── Dockerfile
└── docker-compose.yml
```

## Príspevky

Vitajte príspevky! Pozrite si [docs/](docs/README.md) pre viac informácií.

## Licencia

© 2024 Nov-svet
