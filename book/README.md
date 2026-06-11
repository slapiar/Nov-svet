# Nov-svet: Kniha

> Knižná publikácia projektu Nov-svet

## Štruktúra

```
book/
├── kapitoly/          # Jednotlivé kapitoly (Markdown)
│   ├── 00-uvod.md
│   ├── 01-vztahy.md
│   ├── 02-komunikacia.md
│   └── 03-zaver.md
├── obrazky/           # Ilustrácie a obrázky
└── README.md
```

## Kompilácia

```bash
# Zostavenie PDF (vyžaduje pandoc)
make book

# Alebo manuálne:
pandoc kapitoly/*.md -o nov-svet-kniha.pdf
```
