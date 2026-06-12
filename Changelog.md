# Changelog – Nový svet

Záznam zmien a zafixovaných rozhodnutí projektu **Nový svet**.

---

## 2026-06-12 – 3M / mapa morálnych matríc a historická vrstva

### Zafixované princípy práce

- Morálne matrice nesúdia.
- Matrica je mapa, nie sudca.
- Morálne matrice sa v systémovej aplikácii chápu ako mapa sledovaných vlastností človeka, prírody, spoločnosti, zákonitostí a udalostí.
- Morálne matrice nie sú hotové otázky a odpovede.
- Matrice slúžia ako referenčná mapa parametrov; konkrétne odpovede a výsledky sa ukladajú osobitne cez ID profilu, ID hodnotiaceho parametra a odpoveď / výsledok.
- Do databázy sa nevkladajú nulové ani nepoužité parametre „nahlucho“ pre každého člena.
- Väzby v databáze sa vedú cez ID, nie cez text.
- Text slúži človeku, ID databáze.
- Do ostrej databázy sa nevkladajú placeholdery, testovacie záznamy ani dočasné údaje.
- Model sa overuje kontrolou štruktúry, SELECT-mi nad reálnymi údajmi alebo vložením reálnych zdrojovo podložených záznamov.
- Ak údaj nie je presne známy alebo doložený, radšej ostáva prázdny, než aby bol vymyslený.

### Kapitoly 1.1 a 1.2

- Kapitola **1.1 Vplyv archetypálnych dominánt na život človeka** bola pracovné ukotvená ako výklad pôsobenia archetypálnych dominánt na človeka a dejiny.
- Rozlíšili sa dve úrovne pôsobenia matríc:
  - úroveň jednotlivca – vrodené psychologické sily, archetypy, hodnoty, talenty a morálne cítenie,
  - úroveň dejín – dominanty historických rytmov podľa Emila Páleša.
- Zmysly a vnemy boli vyčlenené do samostatnej kapitoly **1.2 Zmysly a vnemy**, aby sa nezlievali s kapitolou 1.1.
- Kapitola 1.1 má na kapitolu 1.2 odkazovať, nie ju nahrádzať.

### Archetypálna mapa

Bolo ukotvených sedem základných archetypálnych domén:

| Kód | Anjel | Planéta / princíp |
|---|---|---|
| `oriphiel` | Oriphiel | Saturn |
| `zachariel` | Zachariel | Jupiter |
| `michael` | Michael | Mars |
| `samael` | Samael | Slnko |
| `anael` | Anael | Venuša |
| `rafael` | Rafael | Merkúr |
| `gabriel` | Gabriel | Mesiac |

K archetypom boli doplnené alternatívne názvy v samostatnom poli `alternative_names`.

### Časové manifestácie archetypov

Bola vytvorená a naplnená tabuľka `ns_archetype_time_manifestations`, previazaná cez `archetype_id` na `ns_archetypes.id`.

Overené počty časových manifestácií:

| Cyklus | Počet záznamov |
|---|---:|
| `daily` | 7 |
| `weekly` | 7 |
| `monthly` | 16 |
| `life_stage` | 7 |

Kontrola osirelých časových manifestácií vrátila prázdny výsledok, teda všetky záznamy majú platnú väzbu na archetyp.

#### Denný cyklus

Bolo vložených 7 denných intervalov:

- hlboká noc – Oriphiel,
- večer – Gabriel,
- neskoré popoludnie – Anael,
- popoludnie – Zachariel,
- poludnie – Rafael,
- ráno – Michael,
- slnečný stred – Samael.

#### Týždenný cyklus

Bolo vložených 7 dní:

| Deň | Archetyp |
|---|---|
| Pondelok | Gabriel |
| Utorok | Michael |
| Streda | Rafael |
| Štvrtok | Zachariel |
| Piatok | Anael |
| Sobota | Oriphiel |
| Nedeľa | Samael |

#### Životný cyklus

Bolo vložených 7 životných záznamov:

| Vek | Archetyp |
|---|---|
| 0–7 | Gabriel |
| 7–14 | Rafael |
| 14–21 | Anael |
| 21–42 | Michael |
| 21–42 | Samael |
| 42–49 | Zachariel |
| 49+ | Oriphiel |

Michael a Samael sú v intervale 21–42 vedení ako samostatné záznamy, hoci majú rovnaký vekový interval.

#### Mesačný lunárny cyklus

Mesačný cyklus bol nastavený ako 8 lunárnych fáz s kombinovanými archetypmi, pričom každá kombinácia je uložená ako samostatný riadok:

| Fáza | Archetypy |
|---|---|
| Nov / zárodok | Oriphiel + Gabriel |
| Dorastajúci kosák | Gabriel + Rafael |
| Prvá štvrť | Michael + Rafael |
| Dorastajúci vypuklý mesiac | Michael + Zachariel |
| Spln | Samael + Anael |
| Ubúdajúci vypuklý mesiac | Zachariel + Anael |
| Posledná štvrť | Michael + Oriphiel |
| Ubúdajúci kosák | Oriphiel + Gabriel |

Technické číslovanie lunárneho mesiaca používa rozsah 0.00–29.53 lunárneho dňa.

### Historická sieť

Bol odmietnutý jednoduchý lineárny model historickej vrstvy a nahradený sieťovým modelom:

- `ns_archetypes`,
- `ns_archetype_historical_periods`,
- `ns_historical_evidence`,
- `ns_historical_period_evidence`,
- `ns_archetype_evidence`,
- `ns_sources`,
- `ns_evidence_sources`.

Základný význam vrstvy:

```text
archetyp → historické obdobie → dôkaz → zdroj
```

#### Potvrdené cudzie kľúče

- `ns_archetype_evidence.archetype_id` → `ns_archetypes.id`
- `ns_archetype_evidence.evidence_id` → `ns_historical_evidence.id`
- `ns_archetype_historical_periods.archetype_id` → `ns_archetypes.id`
- `ns_archetype_time_manifestations.archetype_id` → `ns_archetypes.id`
- `ns_evidence_sources.evidence_id` → `ns_historical_evidence.id`
- `ns_evidence_sources.source_id` → `ns_sources.id`
- `ns_historical_period_evidence.evidence_id` → `ns_historical_evidence.id`
- `ns_historical_period_evidence.historical_period_id` → `ns_archetype_historical_periods.id`

### Prvý ostrý zdroj

Do tabuľky `ns_sources` bol vložený prvý reálny zdroj:

| Pole | Hodnota |
|---|---|
| `source_code` | `pales_angelologia_dejin_2001_sk` |
| `source_type` | `book` |
| `title` | Angelológia dejín. Paralelné a periodické javy v dejinách |
| `author` | Emil Páleš |
| `publication_year` | 2001 |
| `language_code` | sk |
| `is_active` | 1 |

Poznámka zdroja:

> Prvé slovenské vydanie bolo jednozväzkové, vydané v roku 2001 a malo 648 strán. Použiť ako základný zdroj pre historické cykly a periodické javy podľa Páleša.

Polia `publisher`, `isbn` a `url` sa majú doplniť až vtedy, keď budú presne známe.

### Prvá historická línia 354-ročných duchov času

Bola vložená reálna historická línia podľa Pálešovej tabuľky 354-ročných duchov času:

| Archetyp | Začiatok | Koniec | Evidence code | Citovaný údaj |
|---|---:|---:|---|---|
| Anael | 108 | 463 | `pales_table_anael_108` | Anael -7332 -4852 -2372 +108 |
| Zachariel | 463 | 817 | `pales_table_zachariel_463` | Zachariel -6978 -4498 -2017 +463 |
| Rafael | 817 | 1171 | `pales_table_rafael_817` | Rafael -6624 -4144 -1663 +817 |
| Samael | 1171 | 1525 | `pales_table_samael_1171` | Samael -6270 -3789 -1309 +1171 |
| Gabriel | 1525 | 1879 | `pales_table_gabriel_1525` | Gabriel -5915 -3435 -955 +1525 |
| Michael | 1879 | 2234 | `pales_table_michael_1879` | Michael -5561 -3080 -600 +1879 |
| Oriphiel | 2234 | 2588 | `pales_table_oriphiel_2234` | Orifiel -5206 -2726 -246 +2234 |

Každý riadok má potvrdený reťazec:

```text
archetyp
→ historické obdobie
→ dôkaz
→ vzťah primary/direct
→ zdroj Angelológia dejín
→ konkrétny citovaný údaj z tabuľky
```

### Funkčný historický dotaz

Bol overený univerzálny SELECT, ktorý podľa zadaného roku nájde príslušný archetypálny historický cyklus.

Pre rok 2026 systém vrátil:

| Rok | Archetyp | Obdobie | Zdrojový citát |
|---:|---|---|---|
| 2026 | Michael | Michaelova 354-ročná historická perióda 1879 – 2234 | Michael -5561 -3080 -600 +1879 |

Tým bolo potvrdené, že databáza vie odpovedať na otázku:

```text
Aký archetypálny duch času pôsobí v roku X?
```

### GitHub

Repozitár projektu bol overený:

| Pole | Hodnota |
|---|---|
| `repository_full_name` | `slapiar/Nov-svet` |
| `default_branch` | `main` |
| `visibility` | public |
| `archived` | false |
| oprávnenia | admin, maintain, pull, push, triage |

Tento changelog bol založený ako `Changelog.md` v repozitári `slapiar/Nov-svet`.
